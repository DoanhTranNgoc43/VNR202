import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về văn hóa Việt Nam và hội nhập kinh tế quốc tế. Nhiệm vụ của bạn là:

1. Trả lời các câu hỏi về văn hóa Việt Nam, di sản, bản sắc dân tộc
2. Giải thích về quá trình hội nhập kinh tế quốc tế của Việt Nam
3. Phân tích các hạn chế, thách thức và giải pháp
4. Cung cấp thông tin về các hiệp định như EVFTA, CPTPP, RCEP
5. Giải thích về FDI, xuất khẩu, và chuỗi giá trị toàn cầu

Hãy trả lời ngắn gọn, chính xác, bằng tiếng Việt. Nếu không chắc chắn, hãy nói rõ.`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Gemini API key not configured",
          message: "Vui lòng cấu hình GEMINI_API_KEY trong file .env.local",
        },
        { status: 500 }
      )
    }

    // Kết hợp system prompt với message
    const fullPrompt = `${SYSTEM_PROMPT}\n\nCâu hỏi của người dùng: ${message}\n\nHãy trả lời:`

    // Trước tiên, list các model available
    let availableModels: string[] = []
    try {
      const listResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
      )
      if (listResponse.ok) {
        const listData = await listResponse.json()
        availableModels = (listData.models || [])
          .filter((m: any) => m.supportedGenerationMethods?.includes("generateContent"))
          .map((m: any) => m.name.replace("models/", ""))
        console.log("Available models:", availableModels)
      }
    } catch (e) {
      console.error("Failed to list models:", e)
    }

    // Thử các model theo thứ tự ưu tiên
    const modelsToTry = availableModels.length > 0 
      ? availableModels 
      : [
          "gemini-1.5-flash-latest",
          "gemini-1.5-pro-latest", 
          "gemini-pro",
          "text-bison-001",
          "chat-bison-001",
        ]

    let lastError: any = null

    for (const modelName of modelsToTry) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: fullPrompt,
                    },
                  ],
                },
              ],
            }),
          }
        )

        if (!response.ok) {
          const errorData = await response.text()
          console.error(`Model ${modelName} failed:`, errorData)
          lastError = new Error(`API request failed: ${response.status} ${response.statusText}`)
          continue // Thử model tiếp theo
        }

        const data = await response.json()

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
          lastError = new Error("Invalid response format from Gemini API")
          continue
        }

        const text = data.candidates[0].content.parts[0].text
        return NextResponse.json({ message: text })
      } catch (error: any) {
        console.error(`Error with model ${modelName}:`, error)
        lastError = error
        continue
      }
    }

    // Nếu tất cả model đều fail, throw error cuối cùng
    throw lastError || new Error("Tất cả các model đều không khả dụng")
  } catch (error: any) {
    console.error("Gemini API error:", error)
    return NextResponse.json(
      {
        error: "Failed to get response",
        message: error.message || "Đã xảy ra lỗi khi xử lý câu hỏi. Vui lòng thử lại.",
      },
      { status: 500 }
    )
  }
}

