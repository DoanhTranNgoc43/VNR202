export interface Question {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

export const QUESTION_BANK: Question[] = [
  {
    "question": "Sự khác biệt chính trong cản trở hội nhập giữa \"tư duy tiểu nông\" (ngại rủi ro) và \"tàn dư tư duy bao cấp\" (ỷ lại) là gì?",
    "options": [
      "Tiểu nông làm \"tăng chi phí giao dịch\", bao cấp làm \"méo mó môi trường cạnh tranh\".",
      "Tiểu nông (ngại rủi ro) làm *chậm* đổi mới công nghệ; Bao cấp (ỷ lại, bình quân) làm *triệt tiêu* động lực sáng tạo, cạnh tranh.",
      "Tiểu nông gây ra \"bệnh thành tích\", bao cấp gây ra \"tư duy COCC\".",
      "Tiểu nông chỉ ảnh hưởng nông nghiệp, bao cấp ảnh hưởng toàn bộ nền kinh tế."
    ],
    "correct": 1,
    "explanation": "Tiểu nông (ngại rủi ro) khiến doanh nghiệp không dám đầu tư R&D. Bao cấp (ỷ lại, cào bằng) khiến người lao động không có động lực để sáng tạo."
  },
  {
    "question": "Trong bối cảnh hội nhập, tại sao \"tệ quan liêu, hành chính hóa\" (thủ tục rườm rà) đôi khi còn nguy hiểm hơn \"tham nhũng vặt\" (phong bì)?",
    "options": [
      "Vì \"tham nhũng vặt\" chỉ làm tăng chi phí, có thể dự đoán được.",
      "Vì \"quan liêu\" làm mất thời gian, tăng chi phí tuân thủ, gây nản lòng nhà đầu tư và làm giảm năng lực cạnh tranh quốc gia.",
      "Vì \"quan liêu\" là nguồn gốc đẻ ra \"tham nhũng vặt\".",
      "Vì \"quan liêu\" là biểu hiện của \"tư duy COCC\"."
    ],
    "correct": 1,
    "explanation": "Quan liêu làm tăng chi phí giao dịch và chi phí tuân thủ một cách hệ thống, làm nản lòng nhà đầu tư, giảm năng lực cạnh tranh quốc gia."
  },
  {
    "question": "So với Nghị quyết TW 5 (1998) coi văn hóa là \"nền tảng, động lực\", tinh thần Đại hội XIII (2021) về \"khơi dậy khát vọng\" có bước phát triển gì?",
    "options": [
      "Khẳng định lại vai trò của kinh tế thị trường.",
      "Chuyển từ vai trò \"nền tảng\" sang vai trò \"công cụ\".",
      "Bắt đầu tập trung vào xây dựng con người.",
      "Chủ động biến \"động lực\" (tiềm năng) thành \"sức mạnh tinh thần\" (hành động) để tạo bứt phá."
    ],
    "correct": 3,
    "explanation": "NQ TW 5 đặt nền móng lý luận (động lực). ĐH XIII chủ động \"khơi dậy khát vọng\", tạo động lực tinh thần mới để vượt qua trì trệ."
  },
  {
    "question": "Mối liên hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Bệnh thành tích\" và \"Kỷ luật lỏng lẻo\"?",
    "options": [
      "\"Bệnh thành tích\" là nguyên nhân của \"kỷ luật lỏng lẻo\".",
      "Khi làm việc \"tùy tiện\" (kỷ luật lỏng lẻo), kết quả thực chất sẽ kém, buộc người ta phải \"làm báo cáo đẹp\" (thành tích) để bù đắp.",
      "Cả hai đều là sản phẩm của \"tư duy COCC\".",
      "Không có liên hệ, một là vấn đề tư duy, một là vấn đề tác phong."
    ],
    "correct": 1,
    "explanation": "Làm việc lỏng lẻo (nguyên nhân) dẫn đến kết quả thực chất kém. Để che giấu, người ta phải tạo ra thành tích ảo (kết quả)."
  },
  {
    "question": "Giải pháp \"Xây dựng Chính phủ số\" được coi là đòn bẩy để khắc phục \"tệ quan liêu\" vì nó tấn công vào cốt lõi của vấn đề là:",
    "options": [
      "Giảm tiếp xúc trực tiếp, minh bạch hóa quy trình, triệt tiêu môi trường \"ban phát\" cơ chế.",
      "Tăng cường \"văn hóa phong bì\" trên môi trường trực tuyến.",
      "Siết chặt công tác cán bộ, chống \"chạy chức\".",
      "Đào tạo lại toàn bộ công chức."
    ],
    "correct": 0,
    "explanation": "Chính phủ số thay đổi quy trình, giảm tiếp xúc trực tiếp giữa công chức và doanh nghiệp, làm tăng tính minh bạch, từ đó giảm tệ quan liêu."
  },
  {
    "question": "Điểm chung cốt lõi nào khiến \"Tư duy COCC\" và \"Chủ nghĩa bình quân\" (bao cấp) đều là rào cản của hội nhập?",
    "options": [
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "Đều làm tăng \"văn hóa phong bì\".",
      "Đều phủ nhận nguyên tắc \"Meritocracy\" (trọng dụng nhân tài) và cạnh tranh sòng phẳng dựa trên năng lực.",
      "Đều làm tăng \"kỷ luật lao động lỏng lẻo\"."
    ],
    "correct": 2,
    "explanation": "Hội nhập đòi hỏi cạnh tranh sòng phẳng. Cả COCC (dùng quan hệ) và Chủ nghĩa bình quân (cào bằng) đều triệt tiêu động lực cạnh tranh dựa trên năng lực."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *lớn nhất* đối với nền tảng \"Pháp quyền\" (Rule of Law) trong hội nhập?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Tư duy bao cấp\" (ỷ lại).",
      "\"Thiếu chữ tín\" (vi phạm cam kết, hàng giả) và \"Tham nhũng\" (dùng tiền/quan hệ thay luật)."
    ],
    "correct": 3,
    "explanation": "Pháp quyền (vận hành bằng luật) bị phá vỡ bởi Thiếu chữ tín (vi phạm luật - hợp đồng) và Tham nhũng (dùng tiền/quan hệ để bẻ cong luật)."
  },
  {
    "question": "Giải pháp \"nhất quán thực hiện kinh tế thị trường\" giúp khắc phục \"tư duy cục bộ địa phương\" (tiểu nông) như thế nào?",
    "options": [
      "Kinh tế thị trường khuyến khích các địa phương tự chủ, tự lo.",
      "Kinh tế thị trường (vận hành theo quy luật cung cầu) buộc các địa phương phải \"liên kết chuỗi giá trị\" để cạnh tranh, thay vì \"cục bộ\".",
      "Giải pháp này không liên quan đến \"tư duy cục bộ\".",
      "Kinh tế thị trường làm tăng \"bệnh thành tích\" ở các địa phương."
    ],
    "correct": 1,
    "explanation": "Thị trường là một sân chơi chung, buộc các địa phương (vốn cục bộ, manh mún) phải liên kết lại thành chuỗi giá trị để đủ sức cạnh tranh."
  },
  {
    "question": "Hành vi \"vi phạm bản quyền, làm hàng giả\" là biểu hiện rõ nét nhất của sự kết hợp giữa hai tư duy nào?",
    "options": [
      "Tư duy \"ngắn hạn, ăn xổi\" (tiểu nông) và \"muốn làm giàu nhanh, bỏ qua quy trình\" (đi tắt đón đầu).",
      "Tư duy \"ỷ lại\" (bao cấp) và \"tư duy COCC\" (phe cánh).",
      "\"Bệnh thành tích\" (báo cáo đẹp) và \"Kỷ luật lỏng lẻo\" (tùy tiện).",
      "\"Tệ quan liêu\" (ban phát) và \"Văn hóa phong bì\" (tham nhũng vặt)."
    ],
    "correct": 0,
    "explanation": "Việc làm hàng giả, vi phạm bản quyền xuất phát từ tư duy \"ăn xổi ở thì\" (tiểu nông) và biểu hiện bằng hành động \"muốn làm giàu nhanh, bỏ qua quy trình\"."
  },
  {
    "question": "Giải pháp \"Đổi mới căn bản, toàn diện giáo dục\" được kỳ vọng sẽ khắc phục \"kỷ luật lao động lỏng lẻo\" thông qua cơ chế nào?",
    "options": [
      "Chỉ cần tăng cường dạy ngoại ngữ.",
      "Tăng cường \"chủ nghĩa bình quân\" trong lớp học.",
      "Chấn chỉnh \"thực học, thực nghiệp\", rèn luyện kỷ cương, tác phong công nghiệp ngay từ nhà trường.",
      "Tăng học phí để sinh viên có trách nhiệm hơn."
    ],
    "correct": 2,
    "explanation": "Đổi mới giáo dục (thực học, thực nghiệp) và chấn chỉnh kỷ cương công vụ sẽ rèn luyện tác phong công nghiệp, thay đổi thói quen tùy tiện."
  },
  {
    "question": "Đâu là điểm khác biệt cốt lõi về bản chất giữa \"Chủ nghĩa bình quân\" (bao cấp) và \"Bệnh thành tích\"?",
    "options": [
      "\"Bình quân\" là tư duy \"cào bằng\", \"Thành tích\" là tư duy \"báo cáo đẹp\".",
      "\"Bình quân\" là tàn dư tiểu nông, \"Thành tích\" là tàn dư bao cấp.",
      "\"Bình quân\" triệt tiêu sáng tạo, \"Thành tích\" khuyến khích sáng tạo (làm báo cáo đẹp).",
      "\"Bình quân\" (không khuyến khích vượt trội) là tư duy *thụ động*, \"Thành tích\" (làm việc đối phó) là hành động *chủ động tiêu cực*."
    ],
    "correct": 3,
    "explanation": "Bình quân là tâm lý ỷ lại, không muốn làm (thụ động). Bệnh thành tích là chủ động làm việc đối phó, tạo số liệu ảo (chủ động tiêu cực)."
  },
  {
    "question": "Công cuộc \"đốt lò\" (chống tham nhũng) góp phần giải quyết \"Tư duy COCC\" (bổ nhiệm người nhà) như thế nào?",
    "options": [
      "\"Đốt lò\" làm tăng \"văn hóa phong bì\".",
      "\"Đốt lò\" (không có vùng cấm) tạo ra sự răn đe, khiến việc bổ nhiệm theo \"quan hệ\" thay vì \"năng lực\" bị phanh phui, xử lý.",
      "\"Đốt lò\" chỉ chống tham nhũng, không liên quan đến công tác cán bộ.",
      "Giải pháp này không hiệu quả bằng \"Đổi mới giáo dục\"."
    ],
    "correct": 1,
    "explanation": "Công cuộc \"đốt lò\" (chống) và \"siết chặt công tác cán bộ\" (xây) là hai giải pháp song hành để giải quyết tệ phe cánh, COCC."
  },
  {
    "question": "Nguồn gốc sâu xa của \"tư duy ban phát\" trong \"tệ quan liêu\" bắt nguồn từ đâu?",
    "options": [
      "Cơ chế tập trung bao cấp, khi Nhà nước/tập thể nắm mọi nguồn lực và \"ban phát\" cho cá nhân.",
      "Tư duy tiểu nông \"manh mún, cục bộ\".",
      "Bệnh thành tích trong báo cáo.",
      "Ảnh hưởng của \"văn hóa phong bì\"."
    ],
    "correct": 0,
    "explanation": "Thời bao cấp, mọi thứ đều do nhà nước/tập thể phân phối (ban phát), từ đó hình thành tư duy \"ban phát\" cơ chế của công chức."
  },
  {
    "question": "Vì sao \"tác phong tùy tiện, giờ cao su\" (kỷ luật lỏng lẻo) lại là biểu hiện của \"tư duy tiểu nông\" trong môi trường công nghiệp?",
    "options": [
      "Tư duy tiểu nông \"ngắn hạn\" nên không muốn cam kết thời gian làm việc lâu dài.",
      "\"Giờ cao su\" là sản phẩm của thời bao cấp (chủ nghĩa bình quân), không phải tiểu nông.",
      "Sản xuất tiểu nông (theo mùa vụ, thời tiết) vốn không bị ràng buộc bởi thời gian công nghiệp chính xác, tạo thói quen tùy tiện.",
      "\"Tác phong tùy tiện\" là biểu hiện của \"bệnh thành tích\"."
    ],
    "correct": 2,
    "explanation": "Sản xuất nông nghiệp (tiểu nông) làm việc theo mùa vụ, thời tiết, mang tính tùy tiện. Khi mang tư duy đó vào sản xuất công nghiệp (đòi hỏi chính xác), nó trở thành \"kỷ luật lỏng lẻo\"."
  },
  {
    "question": "Trọng tâm của Nghị quyết Trung ương 9 (Khóa XI - 2014) là gì?",
    "options": [
      "Khơi dậy \"khát vọng phát triển đất nước\".",
      "Xây dựng \"Nhà nước pháp quyền XHCN\".",
      "Chỉ tập trung vào \"chống tham nhũng\".",
      "Đặt trọng tâm vào \"xây dựng con người\" (chủ thể) với các phẩm chất đáp ứng yêu cầu phát triển bền vững."
    ],
    "correct": 3,
    "explanation": "Dàn ý nêu rõ: NQ TW 9 (2014) đặt trọng tâm vào xây dựng CON NGƯỜI (chủ thể của hội nhập) với các phẩm chất: nhân cách, lối sống tốt đẹp..."
  },
  {
    "question": "\"Văn hóa phong bì\" (tham nhũng vặt) phá hoại nguyên tắc \"Meritocracy\" (trọng dụng nhân tài) như thế nào?",
    "options": [
      "Khiến người có năng lực nhưng không \"lót tay\" bị thất bại, còn người yếu kém nhưng \"biết điều\" lại thắng.",
      "Làm tăng \"bệnh thành tích\", khiến không ai biết đâu là nhân tài thật.",
      "Khiến nhân tài nản lòng và rời bỏ đất nước (chảy máu chất xám).",
      "Chỉ \"Tư duy COCC\" mới phá hoại \"Meritocracy\"."
    ],
    "correct": 0,
    "explanation": "Văn hóa phong bì làm méo mó môi trường cạnh tranh, khiến \"tiền\" thắng \"năng lực\", đi ngược lại nguyên tắc trọng dụng nhân tài (Meritocracy)."
  },
  {
    "question": "Giải pháp \"Siết chặt công tác cán bộ\" (chống chạy chức) nhằm triệt tiêu môi trường sống của \"Bệnh thành tích\" như thế nào?",
    "options": [
      "Siết chặt cán bộ sẽ làm tăng \"văn hóa phong bì\".",
      "Giải pháp này chỉ chống \"COCC\", không liên quan.",
      "Khi bổ nhiệm dựa trên năng lực thực chất (thực học), cán bộ không còn động cơ \"làm việc đối phó\" hay tạo \"báo cáo đẹp\" (thành tích) để thăng tiến.",
      "Cán bộ bị siết chặt sẽ không còn thời gian để làm \"báo cáo đẹp\"."
    ],
    "correct": 2,
    "explanation": "Khi con đường thăng tiến không còn là \"chạy\" (chạy chức, chạy thành tích) mà là năng lực thật, \"bệnh thành tích\" sẽ mất đi động cơ tồn tại."
  },
  {
    "question": "Tư duy nào là nguồn gốc chung của tâm lý \"an phận\", \"ỷ lại\", \"cào bằng\" và \"ngại thay đổi\", tạo ra sức ì lớn nhất cản trở hội nhập?",
    "options": [
      "Tư duy tiểu nông và tàn dư tư duy bao cấp.",
      "Chỉ tư duy tiểu nông.",
      "Chỉ tư duy bao cấp.",
      "Bệnh thành tích và hình thức chủ nghĩa."
    ],
    "correct": 0,
    "explanation": "Tư duy tiểu nông (an phận, ngại thay đổi) và tư duy bao cấp (ỷ lại, cào bằng) là hai nguồn gốc chính tạo ra sức ì (thụ động) của xã hội."
  },
  {
    "question": "Tại sao \"Khát vọng phát triển\" (ĐH XIII) được coi là giải pháp tinh thần để khắc phục \"tư duy ngắn hạn, ăn xổi\" (tiểu nông)?",
    "options": [
      "\"Khát vọng\" giúp tăng \"văn hóa phong bì\".",
      "\"Khát vọng\" đòi hỏi tầm nhìn chiến lược, chấp nhận đầu tư dài hạn, đối lập với \"ăn xổi ở thì\".",
      "\"Khát vọng\" là sản phẩm của \"Chính phủ số\".",
      "\"Khát vọng\" chỉ là khẩu hiệu, không khắc phục được \"tư duy ngắn hạn\"."
    ],
    "correct": 1,
    "explanation": "Khát vọng phát triển (tầm nhìn 2030, 2045) là tư duy dài hạn, đối lập và là giải pháp cho tư duy \"ngắn hạn, ăn xổi\" của tiểu nông."
  },
  {
    "question": "Nhóm giải pháp nào của Đảng tập trung chủ yếu vào việc \"Xây\" (cải cách thể chế) thay vì \"Chống\" (xử lý vi phạm)?",
    "options": [
      "\"Công cuộc đốt lò\" và \"Siết chặt công tác cán bộ\".",
      "\"Kinh tế thị trường\" và \"Đổi mới giáo dục\".",
      "\"Khát vọng phát triển\" và \"Xây dựng hệ giá trị\".",
      "\"Xây dựng Nhà nước pháp quyền\" và \"Đẩy mạnh Chính phủ số\"."
    ],
    "correct": 3,
    "explanation": "Nhà nước pháp quyền và Chính phủ số là các giải pháp mang tính \"Xây\" (xây dựng thể chế, quy trình mới) để tăng minh bạch, giảm quan liêu."
  },
  {
    "question": "Đâu là khác biệt cơ bản về tác động lên \"sự sáng tạo\" giữa \"tư duy tiểu nông\" và \"tư duy bao cấp\"?",
    "options": [
      "Cả hai đều khuyến khích sáng tạo để làm giàu nhanh.",
      "Tư duy tiểu nông (ngại rủi ro) làm *chậm* đổi mới; Tàn dư bao cấp (bình quân) *triệt tiêu* động lực cạnh tranh.",
      "Tiểu nông gây quan liêu, còn tư duy bao cấp gây tham nhũng và lãng phí của công.",
      "Tiểu nông chỉ ảnh hưởng nông nghiệp."
    ],
    "correct": 1,
    "explanation": "Tư duy tiểu nông (ngại rủi ro R&D) làm chậm quá trình đổi mới. Tư duy bao cấp (không khuyến khích vượt trội) làm triệt tiêu động lực sáng tạo."
  },
  {
    "question": "\"Tệ quan liêu\" (thủ tục rườm rà) tạo môi trường cho \"Văn hóa phong bì\" (tham nhũng vặt) nảy sinh như thế nào?",
    "options": [
      "Quan liêu làm tăng \"bệnh thành tích\" và \"tư duy COCC\" trong bộ máy.",
      "COCC là nguyên nhân của cả hai vấn đề nhức nhối này.",
      "Tạo \"điểm nghẽn\", buộc doanh nghiệp phải \"lót tay\".",
      "\"Văn hóa phong bì\" là tàn dư bao cấp; \"Quan liêu\" là tàn dư tiểu nông."
    ],
    "correct": 2,
    "explanation": "Tệ quan liêu (thủ tục rườm rà) tạo ra quyền lực \"ban phát\", là môi trường cho \"văn hóa phong bì\" (lót tay) phát triển để bôi trơn."
  },
  {
    "question": "Giải pháp nào có khả năng tác động *nhanh nhất* và mang tính *cấu trúc* để khắc phục \"Tệ quan liêu, hành chính hóa\"?",
    "options": [
      "Đổi mới căn bản, toàn diện giáo dục (tác động lâu dài).",
      "Công cuộc \"đốt lò\" (tập trung vào \"chống\", không phải \"xây\" cấu trúc).",
      "Khơi dậy khát vọng phát triển (tác động tư tưởng).",
      "Xây dựng Chính phủ điện tử, Chính phủ số (thay đổi quy trình, công nghệ)."
    ],
    "correct": 3,
    "explanation": "Chính phủ số thay đổi quy trình (cấu trúc) và giảm tiếp xúc trực tiếp, có hiệu quả nhanh hơn giáo dục hay thay đổi tư duy."
  },
  {
    "question": "Mối quan hệ tương hỗ (cùng củng cố lẫn nhau) giữa \"Tư duy COCC\" và \"Bệnh thành tích\" là gì?",
    "options": [
      "Bổ nhiệm vì \"COCC\" (thiếu năng lực) dẫn đến xu hướng tạo \"báo cáo đẹp\" (thành tích) để che đậy yếu kém thực chất.",
      "Người có \"Bệnh thành tích\" thường là người tài.",
      "Cả hai đều là sản phẩm của \"văn hóa phong bì\".",
      "\"COCC\" và \"Bệnh thành tích\" hoàn toàn đối lập nhau."
    ],
    "correct": 0,
    "explanation": "Bổ nhiệm không dựa trên năng lực (COCC) dẫn đến hệ quả là người được bổ nhiệm phải làm việc đối phó, tạo báo cáo không thực chất (Bệnh thành tích) để bảo vệ vị trí."
  },
  {
    "question": "\"Chủ nghĩa bình quân\" (cào bằng) cản trở trực tiếp \"khát vọng phát triển phồn vinh\" (ĐH XIII) như thế nào?",
    "options": [
      "\"Bình quân\" dẫn đến \"văn hóa phong bì\".",
      "\"Khát vọng\" (cần sự vượt trội) mâu thuẫn với \"bình quân\" (cào bằng, triệt tiêu động lực cạnh tranh).",
      "\"Khát vọng\" là hệ giá trị mới, thay thế \"bình quân\".",
      "\"Khát vọng\" đòi hỏi \"tầm nhìn chiến lược\", \"bình quân\" chỉ là \"tư duy ngắn hạn\"."
    ],
    "correct": 1,
    "explanation": "Khát vọng phát triển (cần sự vượt trội) mâu thuẫn trực tiếp với tư duy chủ nghĩa bình quân (không khuyến khích vượt trội)."
  },
  {
    "question": "Tại sao \"kỷ luật lao động lỏng lẻo\" (giờ cao su) lại là rào cản chí mạng đối với các chuỗi cung ứng toàn cầu (Just-in-time)?",
    "options": [
      "Vì nó vi phạm các luật chống hối lộ quốc tế.",
      "Vì nó thể hiện \"tư duy ban phát\" cơ chế.",
      "Vì chuỗi cung ứng (Just-in-time) đòi hỏi sự chính xác tuyệt đối về thời gian và quy trình.",
      "Vì nó làm tăng \"bệnh thành tích\" trong báo cáo."
    ],
    "correct": 2,
    "explanation": "Chuỗi cung ứng toàn cầu (Just-in-time) đòi hỏi kỷ luật công nghiệp tuyệt đối, chính xác về thời gian; \"giờ cao su\" sẽ phá vỡ toàn bộ hệ thống."
  },
  {
    "question": "\"Thiếu chữ tín\" (làm hàng giả) và \"Bệnh thành tích\" (làm báo cáo đẹp) khác nhau cốt lõi ở điểm nào?",
    "options": [
      "\"Thiếu chữ tín\" là do tiểu nông; \"Bệnh thành tích\" là do bao cấp.",
      "Cả hai đều là một.",
      "\"Thiếu chữ tín\" vi phạm pháp luật; \"Bệnh thành tích\" chỉ là đạo đức.",
      "\"Thiếu chữ tín\" là lừa dối *đối tác* (bên ngoài); \"Bệnh thành tích\" là lừa dối *cấp trên/tổ chức* (bên trong)."
    ],
    "correct": 3,
    "explanation": "Hành vi \"làm hàng giả\" (thiếu chữ tín) là lừa dối khách hàng/đối tác. Hành vi \"làm báo cáo đẹp\" (bệnh thành tích) là lừa dối nội bộ/cấp trên."
  },
  {
    "question": "Vì sao \"tác phong tùy tiện, giờ cao su\" lại là biểu hiện của \"tư duy tiểu nông\" trong môi trường công nghiệp?",
    "options": [
      "Sản xuất tiểu nông (theo mùa vụ) vốn không bị ràng buộc bởi thời gian công nghiệp chính xác, tạo thói quen tùy tiện.",
      "Tư duy tiểu nông \"ngắn hạn\".",
      "\"Giờ cao su\" là sản phẩm của thời bao cấp.",
      "\"Tác phong tùy tiện\" là biểu hiện của \"quan liêu\"."
    ],
    "correct": 0,
    "explanation": "Sản xuất nông nghiệp (tiểu nông) làm việc theo mùa vụ, thời tiết, mang tính tùy tiện. Khi mang tư duy đó vào sản xuất công nghiệp (đòi hỏi chính xác), nó trở thành \"kỷ luật lỏng lẻo\"."
  },
  {
    "question": "Yếu tố nào là nguyên nhân trực tiếp nhất gây \"lãng phí nhân tài\"?",
    "options": [
      "\"Tư duy tiểu nông\".",
      "\"Tư duy COCC\".",
      "\"Kỷ luật lỏng lẻo\".",
      "\"Tệ quan liêu, hành chính hóa\"."
    ],
    "correct": 1,
    "explanation": "Tư duy \"COCC\" (bổ nhiệm không dựa trên năng lực mà dựa trên quan hệ) dẫn đến hệ quả trực tiếp là \"Lãng phí nhân tài\"."
  },
  {
    "question": "Công cuộc \"đốt lò\" (chống tham nhũng) góp phần giải quyết \"Tư duy COCC\" (bổ nhiệm người nhà) như thế nào?",
    "options": [
      "\"Đốt lò\" làm tăng \"văn hóa phong bì\".",
      "\"Đốt lò\" chỉ chống tham nhũng, không liên quan.",
      "\"Đốt lò\" (không có vùng cấm) tạo ra sự răn đe, khiến việc bổ nhiệm theo \"quan hệ\" thay vì \"năng lực\" bị phanh phui, xử lý.",
      "Giải pháp này không hiệu quả bằng \"Đổi mới giáo dục\"."
    ],
    "correct": 2,
    "explanation": "Công cuộc \"đốt lò\" (chống) và \"siết chặt công tác cán bộ\" (xây) là hai giải pháp song hành để giải quyết tệ phe cánh, COCC."
  },
  {
    "question": "Đâu là mối liên hệ giữa \"chủ nghĩa bình quân\" (bao cấp) và \"kỷ luật lao động lỏng lẻo\" (tùy tiện)?",
    "options": [
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "Khi kết quả bị \"cào bằng\" (bình quân), người lao động mất động lực, dẫn đến tác phong \"tùy tiện\" (lỏng lẻo).",
      "\"Kỷ luật lỏng lẻo\" là nguyên nhân đẻ ra \"chủ nghĩa bình quân\".",
      "Không có mối liên hệ nào."
    ],
    "correct": 1,
    "explanation": "Chủ nghĩa bình quân (triệt tiêu động lực) là gốc rễ tư duy dẫn đến tác phong tùy tiện, thiếu kỷ luật (kỷ luật lỏng lẻo)."
  },
  {
    "question": "Hàm ý của việc Đảng chuyển trọng tâm từ \"văn hóa là nền tảng\" (NQ TW 5) sang \"khơi dậy khát vọng\" (ĐH XIII) là gì?",
    "options": [
      "Chuyển từ vai trò phòng thủ (giữ gìn) sang vai trò tấn công (dùng văn hóa làm sức mạnh bứt phá kinh tế).",
      "\"Nền tảng\" đã không còn phù hợp.",
      "\"Khát vọng\" là để thay thế cho \"Kinh tế thị trường\".",
      "\"Nền tảng\" là trừu tượng, \"Khát vọng\" là cụ thể hơn."
    ],
    "correct": 0,
    "explanation": "Coi văn hóa là \"Nền tảng tinh thần\" mang tính giữ gìn, làm nền. Coi văn hóa là \"Khát vọng\" là chủ động dùng sức mạnh tinh thần đó làm động lực bứt phá."
  },
  {
    "question": "Đâu là nguy cơ lớn nhất khi \"Bệnh thành tích\" (số liệu đẹp) kết hợp với \"Tệ quan liêu\" (thủ tục rườm rà)?",
    "options": [
      "Làm tăng \"chi phí tuân thủ\" lên gấp đôi.",
      "Khiến \"siết chặt cán bộ\" không thể thực hiện được.",
      "Khuyến khích \"tư duy COCC\" phát triển.",
      "Tạo ra môi trường đầu tư \"giả tạo\", khiến đối tác quốc tế mất lòng tin và ra quyết định sai lầm do thông tin sai lệch."
    ],
    "correct": 3,
    "explanation": "Bệnh thành tích (thông tin sai lệch) cộng với quan liêu (quy trình chậm) khiến đối tác quốc tế mất lòng tin và ra quyết định kinh doanh sai lầm."
  },
  {
    "question": "\"Mẫu số chung\" của \"Tiểu nông\", \"Bao cấp\" và \"Bệnh thành tích\" là gì?",
    "options": [
      "Né tránh cạnh tranh thực chất.",
      "Đều bắt nguồn từ \"tư duy COCC\".",
      "Đều là nguyên nhân của \"văn hóa phong bì\".",
      "Đều là tư duy \"manh mún, cục bộ\"."
    ],
    "correct": 0,
    "explanation": "Tư duy tiểu nông (ngại rủi ro), tư duy bao cấp (ỷ lại, bình quân), và bệnh thành tích (đối phó) đều là các hình thức né tránh cạnh tranh bằng năng lực thật."
  },
  {
    "question": "Giải pháp \"Chính phủ số\" và \"Kinh tế tư nhân\" (startup) phối hợp với nhau như thế nào?",
    "options": [
      "Chính phủ số sẽ \"đốt lò\" các startup gian dối.",
      "Kinh tế tư nhân cung cấp công nghệ để xây dựng Chính phủ số.",
      "Chính phủ số (minh bạch, nhanh chóng) tạo môi trường thuận lợi (giảm quan liêu) cho kinh tế tư nhân (startup) phát triển.",
      "Hai giải pháp này không liên quan."
    ],
    "correct": 2,
    "explanation": "Giải pháp \"Chính phủ số\" (thể chế) tạo môi trường thuận lợi, giảm quan liêu, tăng minh bạch, giúp \"Kinh tế tư nhân\" (kinh tế) phát triển."
  },
  {
    "question": "Giải pháp \"Đổi mới căn bản giáo dục\" (thực học) là điều kiện tiên quyết để \"Siết chặt công tác cán bộ\" (chống COCC) vì sao?",
    "options": [
      "Vì giáo dục sẽ dạy con người không \"chạy chức\".",
      "Vì phải có nguồn \"nhân tài thực học\" để thay thế những người được bổ nhiệm do \"quan hệ\" (COCC).",
      "Vì \"đổi mới giáo dục\" sẽ làm giảm \"bệnh thành tích\".",
      "Vì \"siết chặt cán bộ\" là giải pháp về thể chế."
    ],
    "correct": 1,
    "explanation": "Không thể chống COCC (loại bỏ người yếu kém) nếu không có nguồn cung nhân lực chất lượng cao (từ giáo dục thực học) để thay thế và xây dựng bộ máy mới."
  },
  {
    "question": "Trong bối cảnh hội nhập, tư duy \"ngại rủi ro\" (tiểu nông) là rào cản lớn nhất đối với lĩnh vực nào?",
    "options": [
      "Xây dựng chuỗi cung ứng (Just-in-time).",
      "Tuân thủ các quy định về pháp quyền.",
      "Xóa bỏ tệ quan liêu, hành chính hóa.",
      "Đầu tư mạo hiểm cho công nghệ và R&D."
    ],
    "correct": 3,
    "explanation": "Tư duy \"ngại rủi ro\" đối lập trực tiếp với yêu cầu \"chấp nhận đầu tư mạo hiểm cho công nghệ và R&D\" của kinh tế quốc tế."
  },
  {
    "question": "Yếu tố nào phá hoại \"Pháp quyền\" (Rule of Law) nghiêm trọng nhất?",
    "options": [
      "\"Thiếu chữ tín\" và \"Tham nhũng\".",
      "\"Kỷ luật lỏng lẻo\".",
      "\"Tư duy tiểu nông\".",
      "\"Tư duy bao cấp\"."
    ],
    "correct": 0,
    "explanation": "Pháp quyền (vận hành bằng luật) bị phá vỡ bởi Thiếu chữ tín (vi phạm luật - hợp đồng) và Tham nhũng (dùng tiền/quan hệ để bẻ cong luật)."
  },
  {
    "question": "Sự khác biệt về *đối tượng* tác động chính giữa Nghị quyết TW 5 (1998) và Nghị quyết TW 9 (2014) là gì?",
    "options": [
      "NQ TW 5 tập trung \"kinh tế\"; NQ TW 9 tập trung \"chính trị\".",
      "NQ TW 5 tập trung \"hội nhập\"; NQ TW 9 tập trung \"bảo tồn\".",
      "NQ TW 5 tập trung vào \"hệ thống\" (nền văn hóa); NQ TW 9 tập trung vào \"cá nhân\" (con người).",
      "NQ TW 5 \"chống COCC\"; NQ TW 9 \"chống bệnh thành tích\"."
    ],
    "correct": 2,
    "explanation": "NQ TW 5 (1998) đặt nền móng \"Xây dựng nền văn hóa\" (hệ thống). NQ TW 9 (2014) phát triển lên, tập trung vào \"Xây dựng... con người Việt Nam\" (cá nhân, chủ thể)."
  },
  {
    "question": "\"Văn hóa phong bì\" (tham nhũng vặt) phá hoại mục tiêu \"phát triển kinh tế thị trường\" (cạnh tranh sòng phẳng) như thế nào?",
    "options": [
      "Làm tăng chi phí nhà nước.",
      "Làm \"méo mó môi trường cạnh tranh\", khiến doanh nghiệp thắng thầu vì \"lót tay\" chứ không phải vì năng lực.",
      "Khiến doanh nghiệp \"thiếu chữ tín\" với nhau.",
      "Khiến công chức có \"tư duy ỷ lại\" vào phong bì."
    ],
    "correct": 0,
    "explanation": "Văn hóa phong bì làm tăng chi phí nhà nước do các khoản chi phí ngầm và không minh bạch."
  },
  {
    "question": "Sự khác biệt chính trong cản trở hội nhập giữa \"tư duy tiểu nông\" (ngại rủi ro) và \"tàn dư tư duy bao cấp\" (ỷ lại) là gì?",
    "options": [
      "Tiểu nông làm \"tăng chi phí giao dịch\", bao cấp làm \"méo mó môi trường cạnh tranh\".",
      "Tiểu nông (ngại rủi ro) làm *chậm* đổi mới công nghệ; Bao cấp (ỷ lại, bình quân) làm *triệt tiêu* động lực sáng tạo, cạnh tranh.",
      "Tiểu nông gây ra \"bệnh thành tích\", bao cấp gây ra \"tư duy COCC\".",
      "Tiểu nông chỉ ảnh hưởng nông nghiệp, bao cấp ảnh hưởng toàn bộ nền kinh tế."
    ],
    "correct": 1,
    "explanation": "Tư duy tiểu nông (ngại rủi ro R&D) làm chậm quá trình đổi mới. Tư duy bao cấp (không khuyến khích vượt trội) làm triệt tiêu động lực sáng tạo."
  },
  {
    "question": "Trong bối cảnh hội nhập, tại sao \"tệ quan liêu, hành chính hóa\" (thủ tục rườm rà) đôi khi còn nguy hiểm hơn \"tham nhũng vặt\" (phong bì)?",
    "options": [
      "Vì \"tham nhũng vặt\" chỉ làm tăng chi phí, có thể dự đoán được.",
      "Vì \"quan liêu\" làm mất thời gian, tăng chi phí tuân thủ, gây nản lòng nhà đầu tư và làm giảm năng lực cạnh tranh quốc gia.",
      "Vì \"quan liêu\" là nguồn gốc đẻ ra \"tham nhũng vặt\".",
      "Vì \"quan liêu\" là biểu hiện của \"tư duy COCC\"."
    ],
    "correct": 1,
    "explanation": "Quan liêu làm tăng chi phí giao dịch và chi phí tuân thủ một cách hệ thống, làm nản lòng nhà đầu tư, giảm năng lực cạnh tranh quốc gia."
  },
  {
    "question": "So với Nghị quyết TW 5 (1998) coi văn hóa là \"nền tảng, động lực\", tinh thần Đại hội XIII (2021) về \"khơi dậy khát vọng\" có bước phát triển gì?",
    "options": [
      "Khẳng định lại vai trò của kinh tế thị trường.",
      "Chuyển từ vai trò \"nền tảng\" sang vai trò \"công cụ\".",
      "Bắt đầu tập trung vào xây dựng con người.",
      "Chủ động biến \"động lực\" (tiềm năng) thành \"sức mạnh tinh thần\" (hành động) để tạo bứt phá."
    ],
    "correct": 3,
    "explanation": "NQ TW 5 đặt nền móng lý luận (động lực). ĐH XIII chủ động \"khơi dậy khát vọng\", tạo động lực tinh thần mới để vượt qua trì trệ."
  },
  {
    "question": "Mối liên hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Bệnh thành tích\" và \"Kỷ luật lỏng lẻo\"?",
    "options": [
      "\"Bệnh thành tích\" là nguyên nhân của \"kỷ luật lỏng lẻo\".",
      "Khi làm việc \"tùy tiện\" (kỷ luật lỏng lẻo), kết quả thực chất sẽ kém, buộc người ta phải \"làm báo cáo đẹp\" (thành tích) để bù đắp.",
      "Cả hai đều là sản phẩm của \"tư duy COCC\".",
      "Không có liên hệ, một là vấn đề tư duy, một là vấn đề tác phong."
    ],
    "correct": 1,
    "explanation": "Làm việc lỏng lẻo (nguyên nhân) dẫn đến kết quả thực chất kém. Để che giấu, người ta phải tạo ra thành tích ảo (kết quả)."
  },
  {
    "question": "Giải pháp \"Xây dựng Chính phủ số\" được coi là đòn bẩy để khắc phục \"tệ quan liêu\" vì nó tấn công vào cốt lõi của vấn đề là:",
    "options": [
      "Giảm tiếp xúc trực tiếp, minh bạch hóa quy trình, triệt tiêu môi trường \"ban phát\" cơ chế.",
      "Tăng cường \"văn hóa phong bì\" trên môi trường trực tuyến.",
      "Siết chặt công tác cán bộ, chống \"chạy chức\".",
      "Đào tạo lại toàn bộ công chức."
    ],
    "correct": 0,
    "explanation": "Chính phủ số thay đổi quy trình, giảm tiếp xúc trực tiếp giữa công chức và doanh nghiệp, làm tăng tính minh bạch, từ đó giảm tệ quan liêu."
  },
  {
    "question": "Điểm chung cốt lõi nào khiến \"Tư duy COCC\" và \"Chủ nghĩa bình quân\" (bao cấp) đều là rào cản của hội nhập?",
    "options": [
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "Đều làm tăng \"văn hóa phong bì\".",
      "Đều phủ nhận nguyên tắc \"Meritocracy\" (trọng dụng nhân tài) và cạnh tranh sòng phẳng dựa trên năng lực.",
      "Đều làm tăng \"kỷ luật lao động lỏng lẻo\"."
    ],
    "correct": 2,
    "explanation": "Hội nhập đòi hỏi cạnh tranh sòng phẳng. Cả COCC (dùng quan hệ) và Chủ nghĩa bình quân (cào bằng) đều triệt tiêu động lực cạnh tranh dựa trên năng lực."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *lớn nhất* đối với nền tảng \"Pháp quyền\" (Rule of Law) trong hội nhập?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Tư duy bao cấp\" (ỷ lại).",
      "\"Thiếu chữ tín\" (vi phạm cam kết, hàng giả) và \"Tham nhũng\" (dùng tiền/quan hệ thay luật)."
    ],
    "correct": 3,
    "explanation": "Pháp quyền (vận hành bằng luật) bị phá vỡ bởi Thiếu chữ tín (vi phạm luật - hợp đồng) và Tham nhũng (dùng tiền/quan hệ để bẻ cong luật)."
  },
  {
    "question": "Giải pháp \"nhất quán thực hiện kinh tế thị trường\" giúp khắc phục \"tư duy cục bộ địa phương\" (tiểu nông) như thế nào?",
    "options": [
      "Kinh tế thị trường khuyến khích các địa phương tự chủ, tự lo.",
      "Kinh tế thị trường (vận hành theo quy luật cung cầu) buộc các địa phương phải \"liên kết chuỗi giá trị\" để cạnh tranh, thay vì \"cục bộ\".",
      "Giải pháp này không liên quan đến \"tư duy cục bộ\".",
      "Kinh tế thị trường làm tăng \"bệnh thành tích\" ở các địa phương."
    ],
    "correct": 1,
    "explanation": "Thị trường là một sân chơi chung, buộc các địa phương (vốn cục bộ, manh mún) phải liên kết lại thành chuỗi giá trị để đủ sức cạnh tranh."
  },
  {
    "question": "Giải pháp \"Đổi mới căn bản, toàn diện giáo dục\" được kỳ vọng sẽ khắc phục \"kỷ luật lao động lỏng lẻo\" thông qua cơ chế nào?",
    "options": [
      "Chỉ cần tăng cường dạy ngoại ngữ.",
      "Tăng cường \"chủ nghĩa bình quân\" trong lớp học.",
      "Chấn chỉnh \"thực học, thực nghiệp\", rèn luyện kỷ cương, tác phong công nghiệp ngay từ nhà trường.",
      "Tăng học phí để sinh viên có trách nhiệm hơn."
    ],
    "correct": 2,
    "explanation": "Đổi mới giáo dục (thực học, thực nghiệp) và chấn chỉnh kỷ cương công vụ sẽ rèn luyện tác phong công nghiệp, thay đổi thói quen tùy tiện."
  },
  {
    "question": "Đâu là khác biệt cốt lõi về bản chất giữa \"Chủ nghĩa bình quân\" (bao cấp) và \"Bệnh thành tích\"?",
    "options": [
      "\"Bình quân\" là tư duy \"cào bằng\", \"Thành tích\" là tư duy \"báo cáo đẹp\".",
      "\"Bình quân\" là tàn dư tiểu nông, \"Thành tích\" là tàn dư bao cấp.",
      "\"Bình quân\" triệt tiêu sáng tạo, \"Thành tích\" khuyến khích sáng tạo (làm báo cáo đẹp).",
      "\"Bình quân\" (không khuyến khích vượt trội) là tư duy *thụ động*, \"Thành tích\" (làm việc đối phó) là hành động *chủ động tiêu cực*."
    ],
    "correct": 3,
    "explanation": "Bình quân là tâm lý ỷ lại, không muốn làm (thụ động). Bệnh thành tích là chủ động làm việc đối phó, tạo số liệu ảo (chủ động tiêu cực)."
  },
  {
    "question": "Nguồn gốc sâu xa của \"tư duy ban phát\" trong \"tệ quan liêu\" bắt nguồn từ đâu?",
    "options": [
      "Cơ chế tập trung bao cấp, khi Nhà nước/tập thể nắm mọi nguồn lực và \"ban phát\" cho cá nhân.",
      "Tư duy tiểu nông \"manh mún, cục bộ\".",
      "Bệnh thành tích trong báo cáo.",
      "Ảnh hưởng của \"văn hóa phong bì\"."
    ],
    "correct": 0,
    "explanation": "Thời bao cấp, mọi thứ đều do nhà nước/tập thể phân phối (ban phát), từ đó hình thành tư duy \"ban phát\" cơ chế của công chức."
  },
  {
    "question": "Trọng tâm của Nghị quyết Trung ương 9 (Khóa XI - 2014) là gì?",
    "options": [
      "Khơi dậy \"khát vọng phát triển đất nước\".",
      "Xây dựng \"Nhà nước pháp quyền XHCN\".",
      "Chỉ tập trung vào \"chống tham nhũng\".",
      "Đặt trọng tâm vào \"xây dựng con người\" (chủ thể) với các phẩm chất đáp ứng yêu cầu phát triển bền vững."
    ],
    "correct": 3,
    "explanation": "NQ TW 9 (2014) đặt trọng tâm vào xây dựng CON NGƯỜI (chủ thể của hội nhập) với các phẩm chất: nhân cách, lối sống tốt đẹp..."
  },
  {
    "question": "\"Văn hóa phong bì\" (tham nhũng vặt) phá hoại nguyên tắc \"Meritocracy\" (trọng dụng nhân tài) như thế nào?",
    "options": [
      "Làm tăng \"bệnh thành tích\", khiến không ai biết đâu là nhân tài thật.",
      "Khiến người có năng lực nhưng không \"lót tay\" bị thất bại, còn người yếu kém nhưng \"biết điều\" lại thắng.",
      "Khiến nhân tài nản lòng và rời bỏ đất nước (chảy máu chất xám).",
      "Chỉ \"Tư duy COCC\" mới phá hoại \"Meritocracy\"."
    ],
    "correct": 1,
    "explanation": "Văn hóa phong bì làm méo mó môi trường cạnh tranh, khiến \"tiền\" thắng \"năng lực\", đi ngược lại nguyên tắc trọng dụng nhân tài (Meritocracy)."
  },
  {
    "question": "Tư duy nào là nguồn gốc chung của tâm lý \"an phận\", \"ỷ lại\", \"cào bằng\" và \"ngại thay đổi\", tạo ra sức ì lớn nhất cản trở hội nhập?",
    "options": [
      "Chỉ tư duy tiểu nông.",
      "Chỉ tư duy bao cấp.",
      "Tư duy tiểu nông và tàn dư tư duy bao cấp.",
      "Bệnh thành tích và hình thức chủ nghĩa."
    ],
    "correct": 2,
    "explanation": "Tư duy tiểu nông (an phận, ngại thay đổi) và tư duy bao cấp (ỷ lại, cào bằng) là hai nguồn gốc chính tạo ra sức ì (thụ động) của xã hội."
  },
  {
    "question": "Tại sao \"Khát vọng phát triển\" (ĐH XIII) được coi là giải pháp tinh thần để khắc phục \"tư duy ngắn hạn, ăn xổi\" (tiểu nông)?",
    "options": [
      "\"Khát vọng\" giúp tăng \"văn hóa phong bì\".",
      "\"Khát vọng\" đòi hỏi tầm nhìn chiến lược, chấp nhận đầu tư dài hạn, đối lập với \"ăn xổi ở thì\".",
      "\"Khát vọng\" là sản phẩm của \"Chính phủ số\".",
      "\"Khát vọng\" chỉ là khẩu hiệu, không khắc phục được \"tư duy ngắn hạn\"."
    ],
    "correct": 1,
    "explanation": "Khát vọng phát triển (tầm nhìn 2030, 2045) là tư duy dài hạn, đối lập và là giải pháp cho tư duy \"ngắn hạn, ăn xổi\" của tiểu nông."
  },
  {
    "question": "Nhóm giải pháp nào của Đảng tập trung chủ yếu vào việc \"Xây\" (cải cách thể chế) thay vì \"Chống\" (xử lý vi phạm)?",
    "options": [
      "\"Công cuộc đốt lò\" và \"Siết chặt công tác cán bộ\".",
      "\"Kinh tế thị trường\" và \"Đổi mới giáo dục\".",
      "\"Khát vọng phát triển\" và \"Xây dựng hệ giá trị\".",
      "\"Xây dựng Nhà nước pháp quyền\" và \"Đẩy mạnh Chính phủ số\"."
    ],
    "correct": 3,
    "explanation": "Nhà nước pháp quyền và Chính phủ số là các giải pháp mang tính \"Xây\" (xây dựng thể chế, quy trình mới) để tăng minh bạch, giảm quan liêu."
  },
  {
    "question": "Cơ chế nào giải thích mối liên hệ giữa \"Tư duy ỷ lại\" (bao cấp) và \"Tệ quan liêu, hành chính hóa\"?",
    "options": [
      "Khi người dân/doanh nghiệp ỷ lại, trông chờ vào Nhà nước, cơ quan công quyền sẽ nảy sinh tư duy \"ban phát\" cơ chế, \"hành là chính\".",
      "\"Tư duy ỷ lại\" khiến người dân không muốn đi làm thủ tục, tạo cơ hội cho \"quan liêu\".",
      "Cả hai đều là sản phẩm của \"văn hóa phong bì\" và \"COCC\".",
      "\"Quan liêu\" là nguyên nhân đẻ ra \"Tư duy ỷ lại\"."
    ],
    "correct": 0,
    "explanation": "Tâm lý ỷ lại (thụ động) của xã hội là môi trường dung dưỡng cho tư duy \"ban phát\", hạch sách (chủ động tiêu cực) của bộ máy quan liêu."
  },
  {
    "question": "So sánh rủi ro cho đối tác quốc tế giữa \"Tham nhũng vặt\" (phong bì) và \"Thiếu chữ tín\" (vi phạm hợp đồng)?",
    "options": [
      "\"Phong bì\" là rủi ro về chi phí và pháp lý (FCPA); \"Thiếu chữ tín\" là rủi ro về vận hành và mất trắng vốn đầu tư (bị lừa).",
      "Cả hai đều là rủi ro pháp lý như nhau.",
      "\"Phong bì\" là rủi ro chấp nhận được; \"Thiếu chữ tín\" là rủi ro không thể chấp nhận.",
      "\"Phong bì\" chỉ xảy ra ở cấp thấp; \"Thiếu chữ tín\" xảy ra ở cấp cao."
    ],
    "correct": 0,
    "explanation": "Tham nhũng vặt (phong bì) là rủi ro về chi phí và pháp lý (vi phạm luật chống hối lộ). Thiếu chữ tín (hàng giả, vi phạm cam kết) là rủi ro lớn hơn, có thể làm sụp đổ dự án kinh doanh."
  },
  {
    "question": "Tác động tiêu cực nào của \"tư duy cục bộ địa phương\" (tiểu nông) cản trở trực tiếp nhất đến \"tầm nhìn chiến lược\"?",
    "options": [
      "Khiến các địa phương không chịu tuân thủ kỷ luật lao động.",
      "Tạo ra nạn \"văn hóa phong bì\" ở mỗi địa phương.",
      "Khiến các địa phương báo cáo thành tích sai lệch để cạnh tranh.",
      "Chỉ thấy lợi ích trước mắt của địa phương mình, không thấy lợi ích toàn cục, quy mô lớn của quốc gia hay chuỗi giá trị."
    ],
    "correct": 3,
    "explanation": "Tư duy \"cục bộ địa phương\" (manh mún) đối lập với \"tầm nhìn chiến lược\" (quy mô lớn, liên kết toàn cầu) mà hội nhập đòi hỏi."
  },
  {
    "question": "Tại sao \"chủ nghĩa bình quân\" (bao cấp) được coi là \"đồng minh\" của \"tư duy COCC\" (phe cánh)?",
    "options": [
      "Vì \"bình quân\" khiến mọi người nghèo như nhau, nên phải dùng \"COCC\" để vươn lên.",
      "Vì \"COCC\" là cách để duy trì \"chủ nghĩa bình quân\" trong một tập thể.",
      "Vì cả hai đều phủ nhận năng lực thực chất (Meritocracy); một bên cào bằng, một bên dùng quan hệ.",
      "Cả hai đều là sản phẩm của tư duy tiểu nông, không phải bao cấp."
    ],
    "correct": 2,
    "explanation": "Cả hai đều là kẻ thù của cạnh tranh sòng phẳng. Chủ nghĩa bình quân (cào bằng năng lực) và COCC (dùng quan hệ thay năng lực) đều triệt tiêu động lực phấn đấu."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Bệnh thành tích\" (làm báo cáo đẹp) và \"Tư duy COCC\" (bổ nhiệm người nhà)?",
    "options": [
      "\"Bệnh thành tích\" là nguyên nhân đẻ ra \"Tư duy COCC\".",
      "Khi bổ nhiệm vì \"COCC\" (thiếu năng lực), người đó có xu hướng tạo \"báo cáo đẹp\" (thành tích) để che đậy yếu kém.",
      "Cả hai đều là sản phẩm của \"văn hóa phong bì\" và không liên quan.",
      "\"Tư duy COCC\" làm lãng phí nhân tài, trong khi \"Bệnh thành tích\" thu hút nhân tài."
    ],
    "correct": 1,
    "explanation": "Bổ nhiệm không dựa trên năng lực (COCC) dẫn đến hệ quả là người được bổ nhiệm phải làm việc đối phó, tạo báo cáo không thực chất (Bệnh thành tích) để bảo vệ vị trí."
  },
  {
    "question": "Đâu là mối liên hệ logic giữa \"chủ nghĩa bình quân\" (thời bao cấp) và \"kỷ luật lao động lỏng lẻo\" (tác phong tùy tiện)?",
    "options": [
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "\"Kỷ luật lỏng lẻo\" là nguyên nhân đẻ ra \"chủ nghĩa bình quân\".",
      "Khi kết quả bị \"cào bằng\" (bình quân), người lao động mất động lực phấn đấu, dẫn đến tác phong \"tùy tiện\", \"thiếu chuyên nghiệp\".",
      "Không có mối liên hệ."
    ],
    "correct": 2,
    "explanation": "Chủ nghĩa bình quân (triệt tiêu động lực) là gốc rễ tư duy dẫn đến tác phong tùy tiện, thiếu kỷ luật (kỷ luật lỏng lẻo)."
  },
  {
    "question": "Giải pháp \"Xây dựng Chính phủ số\" (minh bạch) góp phần khắc phục \"Bệnh thành tích\" (số liệu ảo) như thế nào?",
    "options": [
      "Chính phủ số chỉ giúp giảm \"quan liêu\", không liên quan đến \"bệnh thành tích\".",
      "Chính phủ số đòi hỏi người có năng lực công nghệ, tự động loại bỏ \"bệnh thành tích\".",
      "\"Bệnh thành tích\" sẽ dùng \"Chính phủ số\" để làm báo cáo đẹp hơn.",
      "Tăng cường minh bạch, chuẩn hóa dữ liệu khiến việc \"làm việc đối phó\" và \"làm sai lệch thông tin\" trở nên khó khăn hơn."
    ],
    "correct": 3,
    "explanation": "Chính phủ số (công cụ) làm tăng tính minh bạch, khiến các quy trình và số liệu khó bị làm giả, từ đó hạn chế \"bệnh thành tích\"."
  },
  {
    "question": "So sánh rào cản của \"Tệ quan liêu\" và \"Tư duy COCC\" đối với nhà đầu tư nước ngoài?",
    "options": [
      "\"Quan liêu\" làm tăng chi phí tuân thủ (thời gian, quy trình); \"COCC\" gây nghi ngờ về năng lực thực thi (chất lượng bộ máy).",
      "Cả hai đều làm tăng \"văn hóa phong bì\" như nhau.",
      "\"Quan liêu\" là do tiểu nông; \"COCC\" là do bao cấp.",
      "\"COCC\" chỉ ảnh hưởng doanh nghiệp trong nước."
    ],
    "correct": 0,
    "explanation": "Quan liêu (thủ tục) làm nản lòng nhà đầu tư về quy trình. COCC (con người) làm họ nghi ngờ về năng lực bộ máy và tính công bằng."
  },
  {
    "question": "Giải pháp \"nhất quán thực hiện kinh tế thị trường\" giúp khắc phục \"tư duy cục bộ địa phương\" (tiểu nông) như thế nào?",
    "options": [
      "Kinh tế thị trường khuyến khích các địa phương tự chủ.",
      "Kinh tế thị trường (vận hành theo chuỗi) buộc các địa phương phải \"liên kết\" để cạnh tranh, thay vì \"cục bộ\".",
      "Giải pháp này không liên quan.",
      "Kinh tế thị trường làm tăng \"bệnh thành tích\" ở các địa phương."
    ],
    "correct": 1,
    "explanation": "Thị trường là một sân chơi chung, buộc các địa phương (vốn cục bộ, manh mún) phải liên kết lại thành chuỗi giá trị để đủ sức cạnh tranh."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *lớn nhất* đối với nền tảng \"Pháp quyền\" (Rule of Law) trong hội nhập?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Tư duy bao cấp\" (ỷ lại).",
      "\"Thiếu chữ tín\" (vi phạm cam kết, hàng giả) và \"Tham nhũng\" (dùng tiền/quan hệ thay luật)."
    ],
    "correct": 3,
    "explanation": "Pháp quyền (vận hành bằng luật) bị phá vỡ bởi Thiếu chữ tín (vi phạm luật - hợp đồng) và Tham nhũng (dùng tiền/quan hệ để bẻ cong luật)."
  },
  {
    "question": "Vì sao \"tư duy ỷ lại, thụ động\" (bao cấp) là kẻ thù của \"tinh thần khởi nghiệp, đổi mới sáng tạo\" (startup)?",
    "options": [
      "Startup đòi hỏi \"sự chủ động, sáng tạo, chấp nhận rủi ro\", hoàn toàn đối lập với \"tâm lý ỷ lại, trông chờ, bình quân\".",
      "Startup đòi hỏi \"tầm nhìn chiến lược\", còn \"ỷ lại\" là \"tư duy ngắn hạn\".",
      "Startup cần \"văn hóa phong bì\" để thành công.",
      "Startup đòi hỏi \"báo cáo đẹp\" để gọi vốn."
    ],
    "correct": 0,
    "explanation": "Môi trường startup (kinh tế thị trường) là cạnh tranh sòng phẳng, đòi hỏi chủ động, sáng tạo. Tư duy bao cấp (ỷ lại) là tư duy đối lập, sẽ dẫn đến thất bại."
  },
  {
    "question": "Giải pháp \"Đổi mới căn bản giáo dục\" (thực học) là điều kiện tiên quyết để \"Siết chặt công tác cán bộ\" (chống COCC) vì sao?",
    "options": [
      "Vì giáo dục sẽ dạy con người không \"chạy chức\".",
      "Vì phải có nguồn \"nhân tài thực học\" để thay thế những người được bổ nhiệm do \"quan hệ\" (COCC).",
      "Vì \"đổi mới giáo dục\" sẽ làm giảm \"bệnh thành tích\".",
      "Vì \"siết chặt cán bộ\" là giải pháp về thể chế."
    ],
    "correct": 1,
    "explanation": "Không thể chống COCC (loại bỏ người yếu kém) nếu không có nguồn cung nhân lực chất lượng cao (từ giáo dục thực học) để thay thế và xây dựng bộ máy mới."
  },
  {
    "question": "Đâu là khác biệt về *đối tượng* tác động chính giữa Nghị quyết TW 5 (1998) và Nghị quyết TW 9 (2014)?",
    "options": [
      "NQ TW 5 tập trung \"kinh tế\"; NQ TW 9 tập trung \"chính trị\".",
      "NQ TW 5 tập trung \"hội nhập\"; NQ TW 9 tập trung \"bảo tồn\".",
      "NQ TW 5 tập trung vào \"hệ thống\" (nền văn hóa); NQ TW 9 tập trung vào \"cá nhân\" (con người).",
      "NQ TW 5 \"chống COCC\"; NQ TW 9 \"chống bệnh thành tích\"."
    ],
    "correct": 2,
    "explanation": "NQ TW 5 (1998) đặt nền móng \"Xây dựng nền văn hóa\" (hệ thống). NQ TW 9 (2014) phát triển lên, tập trung vào \"Xây dựng... con người Việt Nam\" (cá nhân, chủ thể)."
  },
  {
    "question": "Hàm ý của việc Đảng chuyển trọng tâm từ \"văn hóa là nền tảng\" (NQ TW 5) sang \"khơi dậy khát vọng\" (ĐH XIII) là gì?",
    "options": [
      "\"Nền tảng\" đã không còn phù hợp.",
      "\"Khát vọng\" là để thay thế cho \"Kinh tế thị trường\".",
      "\"Nền tảng\" là trừu tượng, \"Khát vọng\" là cụ thể hơn.",
      "Chuyển từ vai trò phòng thủ (giữ gìn) sang vai trò tấn công (dùng văn hóa làm sức mạnh bứt phá kinh tế)."
    ],
    "correct": 3,
    "explanation": "Coi văn hóa là \"Nền tảng tinh thần\" mang tính giữ gìn, làm nền. Coi văn hóa là \"Khát vọng\" là chủ động dùng sức mạnh tinh thần đó làm động lực bứt phá."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Tư duy COCC\" và \"Tệ quan liêu\"?",
    "options": [
      "Bổ nhiệm người không đủ năng lực (COCC) khiến họ phải tạo ra thủ tục rườm rà (quan liêu) để che giấu yếu kém và bảo vệ vị trí.",
      "\"Tệ quan liêu\" là nguyên nhân đẻ ra \"Tư duy COCC\".",
      "Cả hai đều là sản phẩm của \"bệnh thành tích\".",
      "Hai việc không liên quan."
    ],
    "correct": 0,
    "explanation": "Người được bổ nhiệm do COCC (thiếu năng lực) thường có xu hướng hành chính hóa (quan liêu) quy trình để khẳng định quyền lực và bảo vệ bản thân."
  },
  {
    "question": "Tại sao \"tư duy ngắn hạn, ăn xổi\" (tiểu nông) lại phá vỡ \"kỷ luật công nghiệp\" (tác phong)?",
    "options": [
      "Vì \"ăn xổi\" khiến công nhân đòi lương cao.",
      "Vì \"kỷ luật công nghiệp\" (Just-in-time) đòi hỏi tuân thủ quy trình vì lợi ích dài hạn, còn \"ăn xổi\" thì sẵn sàng \"bỏ qua quy trình\".",
      "Vì \"ăn xổi\" là biểu hiện của \"bệnh thành tích\".",
      "Vì \"tư duy ngắn hạn\" chỉ có ở nông thôn."
    ],
    "correct": 1,
    "explanation": "Kỷ luật công nghiệp (tác phong) đòi hỏi tuân thủ quy trình. Tư duy \"ăn xổi\" (tư duy) sẵn sàng phá vỡ quy trình để có lợi ích trước mắt."
  },
  {
    "question": "Đâu là nguồn gốc tư tưởng chung của \"Tư duy ỷ lại\" (bao cấp) và \"Tệ quan liêu\" (ban phát)?",
    "options": [
      "Tư duy tiểu nông \"manh mún\".",
      "\"Bệnh thành tích\".",
      "\"Tư duy COCC\".",
      "Cơ chế tập trung, bao cấp, nơi Nhà nước/tập thể quyết định và phân phối mọi thứ."
    ],
    "correct": 3,
    "explanation": "Thời bao cấp, Nhà nước/tập thể lo hết (sinh ra tư duy ỷ lại) và cũng là người \"ban phát\" mọi thứ (sinh ra tệ quan liêu)."
  },
  {
    "question": "Vì sao \"chủ nghĩa bình quân\" (bao cấp) được coi là \"đồng minh\" của \"tư duy COCC\" (phe cánh)?",
    "options": [
      "Vì \"bình quân\" khiến mọi người nghèo như nhau, nên phải dùng \"COCC\" để vươn lên.",
      "Vì \"COCC\" là cách để duy trì \"chủ nghĩa bình quân\".",
      "Vì cả hai đều phủ nhận năng lực thực chất (Meritocracy); một bên cào bằng, một bên dùng quan hệ.",
      "Cả hai đều là sản phẩm của tư duy tiểu nông."
    ],
    "correct": 2,
    "explanation": "Cả hai đều là kẻ thù của cạnh tranh sòng phẳng. Chủ nghĩa bình quân (cào bằng năng lực) và COCC (dùng quan hệ thay năng lực) đều triệt tiêu động lực phấn đấu."
  },
  {
    "question": "Tác động tiêu cực nào của \"tư duy cục bộ địa phương\" (tiểu nông) cản trở trực tiếp nhất đến \"tầm nhìn chiến lược\"?",
    "options": [
      "Chỉ thấy lợi ích trước mắt của địa phương mình, không thấy lợi ích toàn cục, quy mô lớn của quốc gia hay chuỗi giá trị.",
      "Khiến các địa phương không chịu tuân thủ kỷ luật lao động.",
      "Tạo ra nạn \"văn hóa phong bì\" ở mỗi địa phương.",
      "Khiến các địa phương báo cáo thành tích sai lệch."
    ],
    "correct": 0,
    "explanation": "Tư duy \"cục bộ địa phương\" (manh mún) đối lập với \"tầm nhìn chiến lược\" (quy mô lớn, liên kết toàn cầu) mà hội nhập đòi hỏi."
  },
  {
    "question": "Giải pháp nào trong Phần 2 là then chốt nhất để giải quyết vấn đề \"phá vỡ chuỗi cung ứng\" (do kỷ luật lỏng lẻo)?",
    "options": [
      "\"Công cuộc đốt lò\".",
      "\"Xây dựng Chính phủ số\".",
      "\"Đổi mới căn bản, toàn diện giáo dục và đào tạo\" (để rèn luyện tác phong công nghiệp, \"thực nghiệp\").",
      "\"Khuyến khích startup\"."
    ],
    "correct": 2,
    "explanation": "Kỷ luật lỏng lẻo (giờ cao su, tùy tiện) là vấn đề về tác phong, con người. Giải pháp gốc rễ là \"Đổi mới giáo dục\" để rèn luyện \"thực nghiệp\", kỷ cương công vụ."
  },
  {
    "question": "Tại sao \"Khát vọng phát triển\" (ĐH XIII) được coi là giải pháp tinh thần để khắc phục \"tư duy ngắn hạn, ăn xổi\" (tiểu nông)?",
    "options": [
      "\"Khát vọng\" giúp tăng \"văn hóa phong bì\".",
      "\"Khát vọng\" đòi hỏi tầm nhìn chiến lược, chấp nhận đầu tư dài hạn, đối lập với \"ăn xổi ở thì\".",
      "\"Khát vọng\" là sản phẩm của \"Chính phủ số\".",
      "\"Khát vọng\" chỉ là khẩu hiệu."
    ],
    "correct": 1,
    "explanation": "Khát vọng phát triển (tầm nhìn 2030, 2045) là tư duy dài hạn, đối lập và là giải pháp cho tư duy \"ngắn hạn, ăn xổi\" của tiểu nông."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *trực tiếp* nhất đến nền tảng *pháp lý* của các cam kết hội nhập (WTO, EVFTA...)?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Thiếu chữ tín\" và \"vi phạm bản quyền, làm hàng giả\".",
      "\"Tư duy COCC\" (bổ nhiệm người nhà)."
    ],
    "correct": 2,
    "explanation": "Vi phạm cam kết, vi phạm bản quyền, và làm hàng giả là các hành vi vi phạm trực tiếp \"Pháp quyền\" (Rule of Law), vốn là nền tảng của mọi hiệp định thương mại."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Bệnh thành tích\" (làm báo cáo đẹp) và \"Thiếu chữ tín\" (vi phạm hợp đồng)?",
    "options": [
      "\"Bệnh thành tích\" (báo cáo sai) dẫn đến việc \"vi phạm cam kết hợp đồng\" (thiếu chữ tín) để che giấu sự yếu kém thực chất.",
      "\"Thiếu chữ tín\" là nguồn gốc của \"Bệnh thành tích\".",
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "\"Bệnh thành tích\" chỉ ảnh hưởng trong nước."
    ],
    "correct": 0,
    "explanation": "Để đạt được \"báo cáo đẹp\", doanh nghiệp có thể bất chấp \"bỏ qua quy trình\" hoặc \"vi phạm cam kết\", tạo ra sự thiếu thực chất và mất lòng tin."
  },
  {
    "question": "Giải pháp \"Xây dựng Nhà nước pháp quyền\" và \"Đẩy mạnh Chính phủ số\" là các giải pháp tập trung vào việc gì?",
    "options": [
      "\"Chống\" (xử lý vi phạm).",
      "\"Xây\" (cải cách thể chế, quy trình).",
      "Tập trung vào tư duy con người.",
      "Tập trung vào kinh tế."
    ],
    "correct": 1,
    "explanation": "Nhà nước pháp quyền và Chính phủ số là các giải pháp mang tính \"Xây\" (xây dựng thể chế, quy trình mới) để tăng minh bạch, giảm quan liêu."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Tư duy COCC\" (bổ nhiệm người nhà) và \"Bệnh thành tích\" (làm báo cáo đẹp)?",
    "options": [
      "\"Bệnh thành tích\" là nguyên nhân đẻ ra \"Tư duy COCC\".",
      "Khi bổ nhiệm vì \"COCC\" (thiếu năng lực), người đó có xu hướng tạo \"báo cáo đẹp\" (thành tích) để che đậy yếu kém.",
      "Cả hai đều là sản phẩm của \"văn hóa phong bì\" và không liên quan.",
      "\"Tư duy COCC\" làm lãng phí nhân tài, trong khi \"Bệnh thành tích\" thu hút nhân tài."
    ],
    "correct": 1,
    "explanation": "Bổ nhiệm không dựa trên năng lực (COCC) dẫn đến hệ quả là người được bổ nhiệm phải làm việc đối phó, tạo báo cáo không thực chất (Bệnh thành tích) để bảo vệ vị trí."
  },
  {
    "question": "Đâu là mối liên hệ logic giữa \"chủ nghĩa bình quân\" (thời bao cấp) và \"kỷ luật lao động lỏng lẻo\" (tác phong tùy tiện)?",
    "options": [
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "\"Kỷ luật lỏng lẻo\" là nguyên nhân đẻ ra \"chủ nghĩa bình quân\".",
      "Khi kết quả bị \"cào bằng\" (bình quân), người lao động mất động lực phấn đấu, dẫn đến tác phong \"tùy tiện\", \"thiếu chuyên nghiệp\".",
      "Không có mối liên hệ."
    ],
    "correct": 2,
    "explanation": "Chủ nghĩa bình quân (triệt tiêu động lực) là gốc rễ tư duy dẫn đến tác phong tùy tiện, thiếu kỷ luật (kỷ luật lỏng lẻo)."
  },
  {
    "question": "Giải pháp \"Xây dựng Chính phủ số\" (minh bạch) góp phần khắc phục \"Bệnh thành tích\" (số liệu ảo) như thế nào?",
    "options": [
      "Chính phủ số chỉ giúp giảm \"quan liêu\", không liên quan đến \"bệnh thành tích\".",
      "Chính phủ số đòi hỏi người có năng lực công nghệ, tự động loại bỏ \"bệnh thành tích\".",
      "\"Bệnh thành tích\" sẽ dùng \"Chính phủ số\" để làm báo cáo đẹp hơn.",
      "Tăng cường minh bạch, chuẩn hóa dữ liệu khiến việc \"làm việc đối phó\" và \"làm sai lệch thông tin\" trở nên khó khăn hơn."
    ],
    "correct": 3,
    "explanation": "Chính phủ số (công cụ) làm tăng tính minh bạch, khiến các quy trình và số liệu khó bị làm giả, từ đó hạn chế \"bệnh thành tích\"."
  },
  {
    "question": "So sánh rào cản của \"Tệ quan liêu\" và \"Tư duy COCC\" đối với nhà đầu tư nước ngoài?",
    "options": [
      "\"Quan liêu\" làm tăng chi phí tuân thủ (thời gian, quy trình); \"COCC\" gây nghi ngờ về năng lực thực thi (chất lượng bộ máy).",
      "Cả hai đều làm tăng \"văn hóa phong bì\" như nhau.",
      "\"Quan liêu\" là do tiểu nông; \"COCC\" là do bao cấp.",
      "\"COCC\" chỉ ảnh hưởng doanh nghiệp trong nước."
    ],
    "correct": 0,
    "explanation": "Quan liêu (thủ tục) làm nản lòng nhà đầu tư về quy trình. COCC (con người) làm họ nghi ngờ về năng lực bộ máy và tính công bằng."
  },
  {
    "question": "Giải pháp \"nhất quán thực hiện kinh tế thị trường\" giúp khắc phục \"tư duy cục bộ địa phương\" (tiểu nông) như thế nào?",
    "options": [
      "Kinh tế thị trường khuyến khích các địa phương tự chủ.",
      "Kinh tế thị trường (vận hành theo chuỗi) buộc các địa phương phải \"liên kết\" để cạnh tranh, thay vì \"cục bộ\".",
      "Giải pháp này không liên quan.",
      "Kinh tế thị trường làm tăng \"bệnh thành tích\" ở các địa phương."
    ],
    "correct": 1,
    "explanation": "Thị trường là một sân chơi chung, buộc các địa phương (vốn cục bộ, manh mún) phải liên kết lại thành chuỗi giá trị để đủ sức cạnh tranh."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *lớn nhất* đối với nền tảng \"Pháp quyền\" (Rule of Law) trong hội nhập?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Tư duy bao cấp\" (ỷ lại).",
      "\"Thiếu chữ tín\" (vi phạm cam kết, hàng giả) và \"Tham nhũng\" (dùng tiền/quan hệ thay luật)."
    ],
    "correct": 3,
    "explanation": "Pháp quyền (vận hành bằng luật) bị phá vỡ bởi Thiếu chữ tín (vi phạm luật - hợp đồng) và Tham nhũng (dùng tiền/quan hệ để bẻ cong luật)."
  },
  {
    "question": "Vì sao \"tư duy ỷ lại, thụ động\" (bao cấp) là kẻ thù của \"tinh thần khởi nghiệp, đổi mới sáng tạo\" (startup)?",
    "options": [
      "Startup đòi hỏi \"sự chủ động, sáng tạo, chấp nhận rủi ro\", hoàn toàn đối lập với \"tâm lý ỷ lại, trông chờ, bình quân\".",
      "Startup đòi hỏi \"tầm nhìn chiến lược\", còn \"ỷ lại\" là \"tư duy ngắn hạn\".",
      "Startup cần \"văn hóa phong bì\" để thành công.",
      "Startup đòi hỏi \"báo cáo đẹp\" để gọi vốn."
    ],
    "correct": 0,
    "explanation": "Môi trường startup (kinh tế thị trường) là cạnh tranh sòng phẳng, đòi hỏi chủ động, sáng tạo. Tư duy bao cấp (ỷ lại) là tư duy đối lập, sẽ dẫn đến thất bại."
  },
  {
    "question": "Giải pháp \"Đổi mới căn bản giáo dục\" (thực học) là điều kiện tiên quyết để \"Siết chặt công tác cán bộ\" (chống COCC) vì sao?",
    "options": [
      "Vì giáo dục sẽ dạy con người không \"chạy chức\".",
      "Vì phải có nguồn \"nhân tài thực học\" để thay thế những người được bổ nhiệm do \"quan hệ\" (COCC).",
      "Vì \"đổi mới giáo dục\" sẽ làm giảm \"bệnh thành tích\".",
      "Vì \"siết chặt cán bộ\" là giải pháp về thể chế."
    ],
    "correct": 1,
    "explanation": "Không thể chống COCC (loại bỏ người yếu kém) nếu không có nguồn cung nhân lực chất lượng cao (từ giáo dục thực học) để thay thế và xây dựng bộ máy mới."
  },
  {
    "question": "Đâu là khác biệt về *đối tượng* tác động chính giữa Nghị quyết TW 5 (1998) và Nghị quyết TW 9 (2014)?",
    "options": [
      "NQ TW 5 tập trung \"kinh tế\"; NQ TW 9 tập trung \"chính trị\".",
      "NQ TW 5 tập trung \"hội nhập\"; NQ TW 9 tập trung \"bảo tồn\".",
      "NQ TW 5 tập trung vào \"hệ thống\" (nền văn hóa); NQ TW 9 tập trung vào \"cá nhân\" (con người).",
      "NQ TW 5 \"chống COCC\"; NQ TW 9 \"chống bệnh thành tích\"."
    ],
    "correct": 2,
    "explanation": "NQ TW 5 (1998) đặt nền móng \"Xây dựng nền văn hóa\" (hệ thống). NQ TW 9 (2014) phát triển lên, tập trung vào \"Xây dựng... con người Việt Nam\" (cá nhân, chủ thể)."
  },
  {
    "question": "Hàm ý của việc Đảng chuyển trọng tâm từ \"văn hóa là nền tảng\" (NQ TW 5) sang \"khơi dậy khát vọng\" (ĐH XIII) là gì?",
    "options": [
      "\"Nền tảng\" đã không còn phù hợp.",
      "\"Khát vọng\" là để thay thế cho \"Kinh tế thị trường\".",
      "\"Nền tảng\" là trừu tượng, \"Khát vọng\" là cụ thể hơn.",
      "Chuyển từ vai trò phòng thủ (giữ gìn) sang vai trò tấn công (dùng văn hóa làm sức mạnh bứt phá kinh tế)."
    ],
    "correct": 3,
    "explanation": "Coi văn hóa là \"Nền tảng tinh thần\" mang tính giữ gìn, làm nền. Coi văn hóa là \"Khát vọng\" là chủ động dùng sức mạnh tinh thần đó làm động lực bứt phá."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Tư duy COCC\" và \"Tệ quan liêu\"?",
    "options": [
      "Bổ nhiệm người không đủ năng lực (COCC) khiến họ phải tạo ra thủ tục rườm rà (quan liêu) để che giấu yếu kém và bảo vệ vị trí.",
      "\"Tệ quan liêu\" là nguyên nhân đẻ ra \"Tư duy COCC\".",
      "Cả hai đều là sản phẩm của \"bệnh thành tích\".",
      "Hai việc không liên quan."
    ],
    "correct": 0,
    "explanation": "Người được bổ nhiệm do COCC (thiếu năng lực) thường có xu hướng hành chính hóa (quan liêu) quy trình để khẳng định quyền lực và bảo vệ bản thân."
  },
  {
    "question": "Tại sao \"tư duy ngắn hạn, ăn xổi\" (tiểu nông) lại phá vỡ \"kỷ luật công nghiệp\" (tác phong)?",
    "options": [
      "Vì \"ăn xổi\" khiến công nhân đòi lương cao.",
      "Vì \"kỷ luật công nghiệp\" (Just-in-time) đòi hỏi tuân thủ quy trình vì lợi ích dài hạn, còn \"ăn xổi\" thì sẵn sàng \"bỏ qua quy trình\".",
      "Vì \"ăn xổi\" là biểu hiện của \"bệnh thành tích\".",
      "Vì \"tư duy ngắn hạn\" chỉ có ở nông thôn."
    ],
    "correct": 1,
    "explanation": "Kỷ luật công nghiệp (tác phong) đòi hỏi tuân thủ quy trình. Tư duy \"ăn xổi\" (tư duy) sẵn sàng phá vỡ quy trình để có lợi ích trước mắt."
  },
  {
    "question": "Đâu là nguồn gốc tư tưởng chung của \"Tư duy ỷ lại\" (bao cấp) và \"Tệ quan liêu\" (ban phát)?",
    "options": [
      "Tư duy tiểu nông \"manh mún\".",
      "\"Bệnh thành tích\".",
      "\"Tư duy COCC\".",
      "Cơ chế tập trung, bao cấp, nơi Nhà nước/tập thể quyết định và phân phối mọi thứ."
    ],
    "correct": 3,
    "explanation": "Thời bao cấp, Nhà nước/tập thể lo hết (sinh ra tư duy ỷ lại) và cũng là người \"ban phát\" mọi thứ (sinh ra tệ quan liêu)."
  },
  {
    "question": "Vì sao \"chủ nghĩa bình quân\" (bao cấp) được coi là \"đồng minh\" của \"tư duy COCC\" (phe cánh)?",
    "options": [
      "Vì \"bình quân\" khiến mọi người nghèo như nhau, nên phải dùng \"COCC\" để vươn lên.",
      "Vì \"COCC\" là cách để duy trì \"chủ nghĩa bình quân\".",
      "Vì cả hai đều phủ nhận năng lực thực chất (Meritocracy); một bên cào bằng, một bên dùng quan hệ.",
      "Cả hai đều là sản phẩm của tư duy tiểu nông."
    ],
    "correct": 2,
    "explanation": "Cả hai đều là kẻ thù của cạnh tranh sòng phẳng. Chủ nghĩa bình quân (cào bằng năng lực) và COCC (dùng quan hệ thay năng lực) đều triệt tiêu động lực phấn đấu."
  },
  {
    "question": "Tác động tiêu cực nào của \"tư duy cục bộ địa phương\" (tiểu nông) cản trở trực tiếp nhất đến \"tầm nhìn chiến lược\"?",
    "options": [
      "Chỉ thấy lợi ích trước mắt của địa phương mình, không thấy lợi ích toàn cục, quy mô lớn của quốc gia hay chuỗi giá trị.",
      "Khiến các địa phương không chịu tuân thủ kỷ luật lao động.",
      "Tạo ra nạn \"văn hóa phong bì\" ở mỗi địa phương.",
      "Khiến các địa phương báo cáo thành tích sai lệch."
    ],
    "correct": 0,
    "explanation": "Tư duy \"cục bộ địa phương\" (manh mún) đối lập với \"tầm nhìn chiến lược\" (quy mô lớn, liên kết toàn cầu) mà hội nhập đòi hỏi."
  },
  {
    "question": "Giải pháp nào trong Phần 2 là then chốt nhất để giải quyết vấn đề \"phá vỡ chuỗi cung ứng\" (do kỷ luật lỏng lẻo)?",
    "options": [
      "\"Công cuộc đốt lò\".",
      "\"Xây dựng Chính phủ số\".",
      "\"Đổi mới căn bản, toàn diện giáo dục và đào tạo\" (để rèn luyện tác phong công nghiệp, \"thực nghiệp\").",
      "\"Khuyến khích startup\"."
    ],
    "correct": 2,
    "explanation": "Kỷ luật lỏng lẻo (giờ cao su, tùy tiện) là vấn đề về tác phong, con người. Giải pháp gốc rễ là \"Đổi mới giáo dục\" để rèn luyện \"thực nghiệp\", kỷ cương công vụ."
  },
  {
    "question": "Tại sao \"Khát vọng phát triển\" (ĐH XIII) được coi là giải pháp tinh thần để khắc phục \"tư duy ngắn hạn, ăn xổi\" (tiểu nông)?",
    "options": [
      "\"Khát vọng\" giúp tăng \"văn hóa phong bì\".",
      "\"Khát vọng\" đòi hỏi tầm nhìn chiến lược, chấp nhận đầu tư dài hạn, đối lập với \"ăn xổi ở thì\".",
      "\"Khát vọng\" là sản phẩm của \"Chính phủ số\".",
      "\"Khát vọng\" chỉ là khẩu hiệu."
    ],
    "correct": 1,
    "explanation": "Khát vọng phát triển (tầm nhìn 2030, 2045) là tư duy dài hạn, đối lập và là giải pháp cho tư duy \"ngắn hạn, ăn xổi\" của tiểu nông."
  },
  {
    "question": "Trong các \"trầm tích\", yếu tố nào là mối đe dọa *trực tiếp* nhất đến nền tảng *pháp lý* của các cam kết hội nhập (WTO, EVFTA...)?",
    "options": [
      "\"Tư duy tiểu nông\" (manh mún).",
      "\"Kỷ luật lỏng lẻo\" (giờ cao su).",
      "\"Thiếu chữ tín\" và \"vi phạm bản quyền, làm hàng giả\".",
      "\"Tư duy COCC\" (bổ nhiệm người nhà)."
    ],
    "correct": 2,
    "explanation": "Vi phạm cam kết, vi phạm bản quyền, và làm hàng giả là các hành vi vi phạm trực tiếp \"Pháp quyền\" (Rule of Law), vốn là nền tảng của mọi hiệp định thương mại."
  },
  {
    "question": "Mối quan hệ nào sau đây mô tả đúng nhất sự liên đới giữa \"Bệnh thành tích\" (làm báo cáo đẹp) và \"Thiếu chữ tín\" (vi phạm hợp đồng)?",
    "options": [
      "\"Bệnh thành tích\" (báo cáo sai) dẫn đến việc \"vi phạm cam kết hợp đồng\" (thiếu chữ tín) để che giấu sự yếu kém thực chất.",
      "\"Thiếu chữ tín\" là nguồn gốc của \"Bệnh thành tích\".",
      "Cả hai đều là tàn dư của tư duy tiểu nông.",
      "\"Bệnh thành tích\" chỉ ảnh hưởng trong nước."
    ],
    "correct": 0,
    "explanation": "Để đạt được \"báo cáo đẹp\", doanh nghiệp có thể bất chấp \"bỏ qua quy trình\" hoặc \"vi phạm cam kết\", tạo ra sự thiếu thực chất và mất lòng tin."
  },
  {
    "question": "Giải pháp \"Xây dựng Nhà nước pháp quyền\" và \"Đẩy mạnh Chính phủ số\" là các giải pháp tập trung vào việc gì?",
    "options": [
      "\"Chống\" (xử lý vi phạm).",
      "\"Xây\" (cải cách thể chế, quy trình).",
      "Tập trung vào tư duy con người.",
      "Tập trung vào kinh tế."
    ],
    "correct": 1,
    "explanation": "Nhà nước pháp quyền và Chính phủ số là các giải pháp mang tính \"Xây\" (xây dựng thể chế, quy trình mới) để tăng minh bạch, giảm quan liêu."
  }
]

