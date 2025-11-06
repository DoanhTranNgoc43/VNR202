export interface Question {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

export const QUESTION_BANK: Question[] = [
  {
    question:
      "Hạn chế văn hóa nào sau đây xuất phát từ truyền thống tiểu nông, dẫn đến ngại đổi mới trong hội nhập kinh tế?",
    options: [
      "Tâm lý bảo thủ, an phận thủ thường",
      "Sáng tạo cao trong công nghệ",
      "Tuân thủ nghiêm ngặt thời gian",
      "Minh bạch hành chính cao",
    ],
    correct: 0,
    explanation: "Làm giảm khả năng cạnh tranh toàn cầu",
  },
  {
    question:
      "Trong kinh tế quốc tế, thói quen chậm trễ trong văn hóa Việt Nam ảnh hưởng đến yếu tố nào?",
    options: [
      "Năng suất lao động và uy tín hợp đồng",
      "Xuất khẩu nông sản",
      "Du lịch nội địa",
      "Giáo dục cơ bản",
    ],
    correct: 0,
    explanation: "Cản trở chuỗi cung ứng",
  },
  {
    question:
      "Khuyết tật 'quan liêu' trong văn hóa hành chính khiến Việt Nam khó thu hút FDI như thế nào?",
    options: [
      "Tăng thủ tục phức tạp, chậm trễ đầu tư",
      "Giảm chi phí sản xuất",
      "Tăng sáng tạo doanh nghiệp",
      "Cải thiện môi trường kinh doanh",
    ],
    correct: 0,
    explanation: "Giảm sức hấp dẫn với nhà đầu tư nước ngoài",
  },
  {
    question:
      "Bị động trong hội nhập văn hóa dẫn đến mất cân bằng nào trong kinh tế?",
    options: [
      "Giảm sức mạnh mềm, ảnh hưởng du lịch và thương hiệu",
      "Tăng xuất khẩu phim ảnh",
      "Giảm tham nhũng",
      "Nâng cao kỹ năng lao động",
    ],
    correct: 0,
    explanation: "Không chủ động xuất khẩu giá trị văn hóa",
  },
  {
    question:
      "Hạn chế giáo dục văn hóa ở Việt Nam thể hiện ở việc thiếu gì cho lao động hội nhập?",
    options: [
      "Kỹ năng mềm và tiếng Anh",
      "Dư thừa lao động chất lượng cao",
      "Tăng trưởng kinh tế số nhanh",
      "Giảm phụ thuộc giá rẻ",
    ],
    correct: 0,
    explanation: "Khó chuyển sang kinh tế tri thức",
  },
  {
    question: "Trầm tích 'tham nhũng' cản trở Việt Nam trong các FTA như EVFTA bằng cách nào?",
    options: [
      "Giảm lòng tin từ đối tác châu Âu",
      "Tăng xuất khẩu tự do",
      "Cải thiện xếp hạng minh bạch",
      "Giảm thủ tục hải quan",
    ],
    correct: 0,
    explanation: "Vi phạm cam kết quốc tế về minh bạch",
  },
  {
    question: "Yếu kém nào làm Việt Nam khó dẫn dắt chuỗi giá trị toàn cầu?",
    options: [
      "Thiếu sáng tạo, chỉ gia công",
      "Dồi dào nguồn lực văn hóa",
      "Kỷ luật lao động cao",
      "Minh bạch cao",
    ],
    correct: 0,
    explanation: "Do tâm lý bảo thủ",
  },
  {
    question: "Trong RCEP, khuyết tật tiểu nông ảnh hưởng lớn đến lĩnh vực nào?",
    options: [
      "Hiện đại hóa nông nghiệp và xuất khẩu",
      "Công nghiệp nặng",
      "Dịch vụ tài chính",
      "Giáo dục đại học",
    ],
    correct: 0,
    explanation: "Khó áp dụng công nghệ cao",
  },
  {
    question: "Hạn chế nguồn lực văn hóa dẫn đến thiếu gì trong hội nhập?",
    options: [
      "Ngân sách quảng bá quốc tế",
      "Lao động dồi dào",
      "Tài nguyên thiên nhiên",
      "Dân số trẻ",
    ],
    correct: 0,
    explanation: "Giảm khả năng hỗ trợ kinh tế mềm",
  },
  {
    question: "Văn hóa 'cộng đồng' đôi khi dẫn đến hạn chế gì trong kinh doanh quốc tế?",
    options: [
      "Ưu tiên tập thể hơn hiệu quả cá nhân",
      "Tăng sáng tạo cá nhân",
      "Giảm quan liêu",
      "Tăng tuân thủ thời gian",
    ],
    correct: 0,
    explanation: "Giảm tính cạnh tranh",
  },
  {
    question: "Tâm lý 'an phận' từ văn hóa tiểu nông cản trở điều gì trong CPTPP?",
    options: [
      "Đổi mới công nghệ và sản phẩm",
      "Tăng FDI",
      "Giảm quan liêu",
      "Nâng cao giáo dục",
    ],
    correct: 0,
    explanation: "Làm vị thế thấp trong chuỗi giá trị",
  },
  {
    question: "Thiếu kỷ luật thời gian trong văn hóa ảnh hưởng đến hợp đồng quốc tế như thế nào?",
    options: [
      "Giảm uy tín và mất cơ hội",
      "Tăng năng suất",
      "Cải thiện quan hệ",
      "Giảm chi phí",
    ],
    correct: 0,
    explanation: "Thời gian là yếu tố then chốt trong kinh doanh toàn cầu",
  },
  {
    question: "Quan liêu hành chính là di sản nào cản trở cải cách kinh tế?",
    options: [
      "Từ cơ chế tập trung cũ",
      "Từ văn hóa hiện đại",
      "Từ hội nhập nhanh",
      "Từ giáo dục cao",
    ],
    correct: 0,
    explanation: "Làm chậm trễ đầu tư",
  },
  {
    question: "Bị động văn hóa làm Việt Nam khó xuất khẩu gì để hỗ trợ kinh tế?",
    options: [
      "Giá trị văn hóa như ẩm thực, phim ảnh",
      "Lao động giá rẻ",
      "Tài nguyên khoáng sản",
      "Công nghệ cao",
    ],
    correct: 0,
    explanation: "Mất cơ hội sức mạnh mềm",
  },
  {
    question: "Hệ thống giáo dục nặng lý thuyết dẫn đến thiếu gì trong lao động?",
    options: [
      "Kỹ năng thực hành cho kinh tế tri thức",
      "Số lượng lao động",
      "Tinh thần cộng đồng",
      "Bảo thủ",
    ],
    correct: 0,
    explanation: "Cản trở chuyển đổi kinh tế",
  },
  {
    question: "Tham nhũng văn hóa ảnh hưởng đến xếp hạng nào của Việt Nam?",
    options: [
      "Môi trường kinh doanh toàn cầu",
      "Tăng trưởng GDP",
      "Dân số",
      "Tài nguyên",
    ],
    correct: 0,
    explanation: "Giảm theo Doing Business Index",
  },
  {
    question: "Thiếu sáng tạo từ trầm tích văn hóa khiến doanh nghiệp Việt Nam thường làm gì?",
    options: [
      "Sao chép thay vì dẫn dắt",
      "Đầu tư lớn",
      "Hợp tác quốc tế",
      "Cải cách nhanh",
    ],
    correct: 0,
    explanation: "Vị thế gia công thấp",
  },
  {
    question: "Trong hội nhập, khuyết tật tiểu nông làm chậm lĩnh vực nào?",
    options: [
      "Nông nghiệp công nghệ cao",
      "Dịch vụ",
      "Giáo dục",
      "Y tế",
    ],
    correct: 0,
    explanation: "Ngại rủi ro đổi mới",
  },
  {
    question: "Thiếu nguồn lực cho quảng bá văn hóa ảnh hưởng đến ngành nào?",
    options: [
      "Du lịch và thương hiệu quốc gia",
      "Công nghiệp",
      "Nông nghiệp",
      "Tài chính",
    ],
    correct: 0,
    explanation: "Giảm thu nhập từ kinh tế mềm",
  },
  {
    question: "Văn hóa 'có thực mới vực được đạo' đôi khi dẫn đến gì?",
    options: [
      "Chậm trễ trong kế hoạch dài hạn",
      "Tăng hiệu quả",
      "Giảm bảo thủ",
      "Tăng sáng tạo",
    ],
    correct: 0,
    explanation: "Ưu tiên ngắn hạn",
  },
]


