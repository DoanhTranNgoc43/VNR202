export interface Question {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

export const QUESTION_BANK: Question[] = [
  {
    "question": "Hạn chế văn hóa nào sau đây xuất phát từ truyền thống tiểu nông, dẫn đến ngại đổi mới trong hội nhập kinh tế?",
    "options": [
      "Sáng tạo cao trong công nghệ",
      "Tâm lý bảo thủ, an phận thủ thường",
      "Tuân thủ nghiêm ngặt thời gian",
      "Minh bạch hành chính cao"
    ],
    "correct": 1,
    "explanation": "Làm giảm khả năng cạnh tranh toàn cầu"
  },
  {
    "question": "Tâm lý \"an phận\" từ văn hóa tiểu nông cản trở điều gì trong CPTPP?",
    "options": [
      "Tăng FDI",
      "Giảm quan liêu",
      "Nâng cao giáo dục",
      "Đổi mới công nghệ và sản phẩm"
    ],
    "correct": 3,
    "explanation": "Làm vị thế thấp trong chuỗi giá trị"
  },
  {
    "question": "Trong RCEP, khuyết tật tiểu nông ảnh hưởng lớn đến lĩnh vực nào?",
    "options": [
      "Công nghiệp nặng",
      "Dịch vụ tài chính",
      "Hiện đại hóa nông nghiệp và xuất khẩu",
      "Giáo dục đại học"
    ],
    "correct": 2,
    "explanation": "Khó áp dụng công nghệ cao"
  },
  {
    "question": "Văn hóa \"có thực mới vực được đạo\" đôi khi dẫn đến gì?",
    "options": [
      "Chậm trễ trong kế hoạch dài hạn",
      "Tăng hiệu quả",
      "Giảm bảo thủ",
      "Tăng sáng tạo"
    ],
    "correct": 0,
    "explanation": "Ưu tiên ngắn hạn"
  },
  {
    "question": "Trong hội nhập, khuyết tật tiểu nông làm chậm lĩnh vực nào?",
    "options": [
      "Dịch vụ",
      "Giáo dục",
      "Y tế",
      "Nông nghiệp công nghệ cao"
    ],
    "correct": 3,
    "explanation": "Ngại rủi ro đổi mới"
  },
  {
    "question": "Tư duy tiểu nông khiến nông dân Việt Nam khó chấp nhận điều gì?",
    "options": [
      "Làm ruộng truyền thống",
      "Giữ lại giống địa phương",
      "Canh tác quy mô lớn theo chuẩn quốc tế",
      "Bán sản phẩm nội địa"
    ],
    "correct": 2,
    "explanation": "Sợ rủi ro, thiếu vốn"
  },
  {
    "question": "Bảo thủ văn hóa làm doanh nghiệp Việt chậm áp dụng công nghệ nào?",
    "options": [
      "Máy móc thủ công",
      "Số hóa và tự động hóa",
      "Phương pháp cũ",
      "Sản xuất nhỏ lẻ"
    ],
    "correct": 1,
    "explanation": "Ngại thay đổi quy trình"
  },
  {
    "question": "Tâm lý \"ăn xổi\" từ văn hóa tiểu nông ảnh hưởng đến yếu tố nào trong xuất khẩu?",
    "options": [
      "Tăng năng suất",
      "Giảm chi phí",
      "Chất lượng sản phẩm không ổn định",
      "Cải thiện thương hiệu"
    ],
    "correct": 2,
    "explanation": "Thiếu tiêu chuẩn quốc tế"
  },
  {
    "question": "Sợ rủi ro trong văn hóa tiểu nông khiến doanh nghiệp Việt Nam khó làm gì?",
    "options": [
      "Duy trì sản xuất nội địa",
      "Mở rộng thị trường quốc tế",
      "Giữ quy mô nhỏ",
      "Bán hàng truyền thống"
    ],
    "correct": 1,
    "explanation": "Lo sợ thất bại"
  },
  {
    "question": "Bảo thủ văn hóa làm Việt Nam chậm trong việc gì so với các nước ASEAN?",
    "options": [
      "Tăng dân số",
      "Khai thác tài nguyên",
      "Chuyển đổi số doanh nghiệp",
      "Giữ truyền thống"
    ],
    "correct": 2,
    "explanation": "Ngại đổi mới"
  },
  {
    "question": "Văn hóa \"trông chờ nhà nước\" từ thời bao cấp dẫn đến hạn chế gì?",
    "options": [
      "Tăng sáng tạo",
      "Giảm quan liêu",
      "Thiếu tự chủ doanh nghiệp",
      "Cải thiện hiệu quả"
    ],
    "correct": 2,
    "explanation": "Giảm tính chủ động"
  },
  {
    "question": "Tâm lý \"làm theo\" thay vì \"dẫn đầu\" xuất phát từ văn hóa nào?",
    "options": [
      "Sáng tạo hiện đại",
      "Bảo thủ tiểu nông",
      "Cạnh tranh cao",
      "Đổi mới mạnh"
    ],
    "correct": 1,
    "explanation": "Thiếu tinh thần tiên phong"
  },
  {
    "question": "Ngại thay đổi trong văn hóa Việt Nam làm chậm quá trình nào?",
    "options": [
      "Tăng xuất khẩu nông sản",
      "Giảm nhập khẩu",
      "Tái cấu trúc doanh nghiệp",
      "Duy trì truyền thống"
    ],
    "correct": 2,
    "explanation": "Cản trở hiện đại hóa"
  },
  {
    "question": "Văn hóa \"ưa ổn định\" khiến lao động Việt khó chấp nhận gì?",
    "options": [
      "Làm việc cố định",
      "Lương ổn định",
      "Thay đổi công việc linh hoạt",
      "Môi trường quen thuộc"
    ],
    "correct": 2,
    "explanation": "Thiếu thích nghi"
  },
  {
    "question": "Bảo thủ trong đầu tư khiến doanh nghiệp Việt thường chọn gì?",
    "options": [
      "Công nghệ cao",
      "Thị trường mới",
      "Đổi mới sản phẩm",
      "Lĩnh vực truyền thống, ít rủi ro"
    ],
    "correct": 3,
    "explanation": "Sợ thất bại"
  },
  {
    "question": "Tư duy \"làm quen\" trong văn hóa Việt ảnh hưởng đến năng lực nào?",
    "options": [
      "Duy trì nội địa",
      "Tăng truyền thống",
      "Cạnh tranh quốc tế",
      "Giảm chi phí"
    ],
    "correct": 2,
    "explanation": "Thiếu đổi mới"
  },
  {
    "question": "Văn hóa tiểu nông khiến nông dân khó tham gia vào gì?",
    "options": [
      "Làm ruộng nhỏ",
      "Bán chợ địa phương",
      "Chuỗi giá trị toàn cầu",
      "Giữ giống truyền thống"
    ],
    "correct": 2,
    "explanation": "Thiếu quy mô và tiêu chuẩn"
  },
  {
    "question": "Bảo thủ văn hóa làm Việt Nam chậm trong lĩnh vực nào của kinh tế số?",
    "options": [
      "Bán hàng truyền thống",
      "Giao dịch tiền mặt",
      "Thương mại điện tử xuyên biên giới",
      "Chợ nội địa"
    ],
    "correct": 2,
    "explanation": "Ngại công nghệ mới"
  },
  {
    "question": "Tâm lý \"đủ ăn là được\" từ văn hóa tiểu nông cản trở gì?",
    "options": [
      "Duy trì mức sống",
      "Mở rộng sản xuất và xuất khẩu",
      "Giữ ruộng nhỏ",
      "Làm việc ít giờ"
    ],
    "correct": 1,
    "explanation": "Thiếu tham vọng phát triển"
  },
  {
    "question": "Văn hóa \"sợ thất bại\" khiến doanh nghiệp Việt khó làm gì?",
    "options": [
      "Làm việc ổn định",
      "Sản xuất truyền thống",
      "Khởi nghiệp sáng tạo",
      "Bán hàng quen thuộc"
    ],
    "correct": 2,
    "explanation": "Thiếu tinh thần mạo hiểm"
  },
  {
    "question": "Trong kinh tế quốc tế, thói quen chậm trễ trong văn hóa Việt Nam ảnh hưởng đến yếu tố nào?",
    "options": [
      "Xuất khẩu nông sản",
      "Năng suất lao động và uy tín hợp đồng",
      "Du lịch nội địa",
      "Giáo dục cơ bản"
    ],
    "correct": 1,
    "explanation": "Cản trở chuỗi cung ứng"
  },
  {
    "question": "Khuyết tật \"quan liêu\" trong văn hóa hành chính khiến Việt Nam khó thu hút FDI như thế nào?",
    "options": [
      "Giảm chi phí sản xuất",
      "Tăng sáng tạo doanh nghiệp",
      "Tăng thủ tục phức tạp, chậm trễ đầu tư",
      "Cải thiện môi trường kinh doanh"
    ],
    "correct": 2,
    "explanation": "Giảm sức hấp dẫn với nhà đầu tư nước ngoài"
  },
  {
    "question": "Thiếu kỷ luật thời gian trong văn hóa ảnh hưởng đến hợp đồng quốc tế như thế nào?",
    "options": [
      "Tăng năng suất",
      "Cải thiện quan hệ",
      "Giảm chi phí",
      "Giảm uy tín và mất cơ hội"
    ],
    "correct": 3,
    "explanation": "Thời gian là yếu tố then chốt trong kinh doanh toàn cầu"
  },
  {
    "question": "Quan liêu hành chính là di sản nào cản trở cải cách kinh tế?",
    "options": [
      "Từ văn hóa hiện đại",
      "Từ hội nhập nhanh",
      "Từ cơ chế tập trung cũ",
      "Từ giáo dục cao"
    ],
    "correct": 2,
    "explanation": "Làm chậm trễ đầu tư"
  },
  {
    "question": "Thói quen \"giấy tờ\" phức tạp trong văn hóa hành chính Việt Nam ảnh hưởng đến gì?",
    "options": [
      "Tăng minh bạch",
      "Tốc độ cấp phép doanh nghiệp",
      "Giảm tham nhũng",
      "Cải thiện dịch vụ"
    ],
    "correct": 1,
    "explanation": "Làm chậm khởi nghiệp"
  },
  {
    "question": "Văn hóa \"không đúng giờ\" ảnh hưởng đến lĩnh vực nào trong hội nhập?",
    "options": [
      "Nông nghiệp nội địa",
      "Giáo dục cơ bản",
      "Logistics và xuất khẩu",
      "Y tế công"
    ],
    "correct": 2,
    "explanation": "Giao hàng trễ mất hợp đồng"
  },
  {
    "question": "Quan liêu trong cấp giấy phép xuất khẩu làm tăng gì?",
    "options": [
      "Hiệu quả sản xuất",
      "Chi phí và thời gian cho doanh nghiệp",
      "Minh bạch thủ tục",
      "Tốc độ giao hàng"
    ],
    "correct": 1,
    "explanation": "Giảm cạnh tranh"
  },
  {
    "question": "Thói quen \"xin-cho\" trong văn hóa hành chính dẫn đến điều gì?",
    "options": [
      "Giảm thủ tục",
      "Tăng minh bạch",
      "Tăng tham nhũng tiềm ẩn",
      "Cải thiện dịch vụ"
    ],
    "correct": 2,
    "explanation": "Giảm lòng tin nhà đầu tư"
  },
  {
    "question": "Chậm trễ trong giải quyết tranh chấp thương mại ảnh hưởng đến gì?",
    "options": [
      "Tăng xuất khẩu",
      "Môi trường pháp lý cho FDI",
      "Giảm nhập khẩu",
      "Cải thiện sản xuất"
    ],
    "correct": 1,
    "explanation": "Nhà đầu tư lo ngại rủi ro"
  },
  {
    "question": "Văn hóa \"làm việc chậm rãi\" ảnh hưởng đến năng suất như thế nào?",
    "options": [
      "Tăng chất lượng",
      "Cải thiện sáng tạo",
      "Giảm cạnh tranh so với khu vực",
      "Giảm chi phí"
    ],
    "correct": 2,
    "explanation": "Năng suất thấp hơn Thái Lan, Malaysia"
  },
  {
    "question": "Quan liêu trong quản lý dự án ODA làm gì?",
    "options": [
      "Tăng minh bạch",
      "Cải thiện hợp tác",
      "Chậm giải ngân và hiệu quả thấp",
      "Giảm tham nhũng"
    ],
    "correct": 2,
    "explanation": "Mất lòng tin đối tác"
  },
  {
    "question": "Thói quen \"họp nhiều, quyết ít\" trong văn hóa công sở ảnh hưởng đến gì?",
    "options": [
      "Tăng hiệu quả",
      "Tốc độ ra quyết định đầu tư",
      "Giảm chi phí",
      "Cải thiện giao tiếp"
    ],
    "correct": 1,
    "explanation": "Nhà đầu tư mất thời gian"
  },
  {
    "question": "Thiếu kỷ luật giao hàng trong văn hóa doanh nghiệp Việt làm mất gì?",
    "options": [
      "Tăng khách hàng nội địa",
      "Giảm chi phí vận chuyển",
      "Đơn hàng từ đối tác quốc tế",
      "Cải thiện chất lượng"
    ],
    "correct": 2,
    "explanation": "Uy tín bị ảnh hưởng"
  },
  {
    "question": "Quan liêu trong thủ tục hải quan ảnh hưởng đến lợi thế nào của Việt Nam?",
    "options": [
      "Tăng xuất khẩu",
      "Giảm nhập khẩu",
      "Cạnh tranh logistics khu vực",
      "Cải thiện hạ tầng"
    ],
    "correct": 2,
    "explanation": "Thời gian thông quan chậm"
  },
  {
    "question": "Văn hóa \"giữ chức\" trong hành chính dẫn đến gì?",
    "options": [
      "Tăng đổi mới",
      "Thiếu cải cách mạnh mẽ",
      "Giảm quan liêu",
      "Cải thiện dịch vụ"
    ],
    "correct": 1,
    "explanation": "Sợ trách nhiệm"
  },
  {
    "question": "Chậm trễ trong cập nhật luật pháp theo cam kết quốc tế ảnh hưởng đến gì?",
    "options": [
      "Tăng xuất khẩu",
      "Giảm nhập khẩu",
      "Thực thi các FTA",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Vi phạm cam kết"
  },
  {
    "question": "Thói quen \"đùn đẩy trách nhiệm\" trong văn hóa công sở làm gì?",
    "options": [
      "Tăng hợp tác",
      "Giảm hiệu quả giải quyết vấn đề",
      "Cải thiện dịch vụ",
      "Giảm quan liêu"
    ],
    "correct": 1,
    "explanation": "Nhà đầu tư khó tìm người quyết định"
  },
  {
    "question": "Quan liêu trong cấp visa lao động ảnh hưởng đến gì?",
    "options": [
      "Tăng lao động nội địa",
      "Thu hút chuyên gia nước ngoài",
      "Giảm chi phí",
      "Cải thiện giáo dục"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp FDI gặp khó khăn"
  },
  {
    "question": "Thiếu kỷ luật trong báo cáo tài chính doanh nghiệp ảnh hưởng đến gì?",
    "options": [
      "Tăng lợi nhuận",
      "Giảm thuế",
      "Niềm tin từ nhà đầu tư quốc tế",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Minh bạch kém"
  },
  {
    "question": "Văn hóa \"làm việc theo giờ hành chính\" cản trở gì trong hội nhập?",
    "options": [
      "Tăng năng suất",
      "Giảm chi phí",
      "Phục vụ khách hàng quốc tế 24/7",
      "Cải thiện chất lượng"
    ],
    "correct": 2,
    "explanation": "Không linh hoạt"
  },
  {
    "question": "Trầm tích \"tham nhũng\" cản trở Việt Nam trong các FTA như EVFTA bằng cách nào?",
    "options": [
      "Tăng xuất khẩu tự do",
      "Giảm lòng tin từ đối tác châu Âu",
      "Cải thiện xếp hạng minh bạch",
      "Giảm thủ tục hải quan"
    ],
    "correct": 1,
    "explanation": "Vi phạm cam kết quốc tế về minh bạch"
  },
  {
    "question": "Tham nhũng văn hóa ảnh hưởng đến xếp hạng nào của Việt Nam?",
    "options": [
      "Tăng trưởng GDP",
      "Dân số",
      "Môi trường kinh doanh toàn cầu",
      "Tài nguyên"
    ],
    "correct": 2,
    "explanation": "Giảm theo Doing Business Index"
  },
  {
    "question": "Thiếu minh bạch trong đấu thầu dự án làm gì với FDI?",
    "options": [
      "Tăng vốn đầu tư",
      "Giảm niềm tin nhà đầu tư",
      "Cải thiện hạ tầng",
      "Giảm chi phí"
    ],
    "correct": 1,
    "explanation": "Nhà đầu tư lo ngại bất công"
  },
  {
    "question": "Văn hóa \"lót tay\" trong giao dịch hành chính ảnh hưởng đến gì?",
    "options": [
      "Tăng hiệu quả",
      "Giảm thủ tục",
      "Chi phí kinh doanh của doanh nghiệp",
      "Cải thiện dịch vụ"
    ],
    "correct": 2,
    "explanation": "Tăng chi phí ngầm"
  },
  {
    "question": "Tham nhũng trong quản lý đất đai làm khó khăn gì cho FDI?",
    "options": [
      "Tăng diện tích",
      "Giảm giá thuê",
      "Thuê mặt bằng minh bạch",
      "Cải thiện vị trí"
    ],
    "correct": 2,
    "explanation": "Quy trình không rõ ràng"
  },
  {
    "question": "Thiếu minh bạch trong chính sách thuế ảnh hưởng đến quyết định gì?",
    "options": [
      "Tăng xuất khẩu",
      "Giảm nhập khẩu",
      "Đầu tư của doanh nghiệp nước ngoài",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Khó tính toán chi phí"
  },
  {
    "question": "Văn hóa \"biếu xén\" trong quan hệ doanh nghiệp-nhà nước dẫn đến gì?",
    "options": [
      "Tăng minh bạch",
      "Cạnh tranh không công bằng",
      "Giảm tham nhũng",
      "Cải thiện dịch vụ"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp nhỏ bị thiệt"
  },
  {
    "question": "Tham nhũng trong thanh tra, kiểm tra ảnh hưởng đến gì?",
    "options": [
      "Tăng tuân thủ",
      "Môi trường kinh doanh lành mạnh",
      "Giảm vi phạm",
      "Cải thiện chất lượng"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp mất niềm tin"
  },
  {
    "question": "Thiếu minh bạch trong quản lý ngân sách công làm gì với ODA?",
    "options": [
      "Tăng nguồn vốn",
      "Cải thiện dự án",
      "Giảm hỗ trợ từ quốc tế",
      "Giảm chi phí"
    ],
    "correct": 2,
    "explanation": "Đối tác lo ngại hiệu quả"
  },
  {
    "question": "Văn hóa \"quen biết\" trong giao dịch dẫn đến hạn chế gì?",
    "options": [
      "Tăng hợp tác",
      "Giảm chi phí",
      "Thiếu cạnh tranh công bằng",
      "Cải thiện quan hệ"
    ],
    "correct": 2,
    "explanation": "Ưu tiên quan hệ hơn năng lực"
  },
  {
    "question": "Tham nhũng trong giáo dục ảnh hưởng đến chất lượng gì?",
    "options": [
      "Tăng số lượng sinh viên",
      "Nguồn nhân lực cho hội nhập",
      "Giảm học phí",
      "Cải thiện cơ sở vật chất"
    ],
    "correct": 1,
    "explanation": "Bằng cấp không phản ánh năng lực"
  },
  {
    "question": "Thiếu minh bạch trong thông tin thị trường làm khó khăn gì?",
    "options": [
      "Tăng xuất khẩu",
      "Giảm nhập khẩu",
      "Doanh nghiệp nước ngoài nghiên cứu đầu tư",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Thiếu dữ liệu tin cậy"
  },
  {
    "question": "Văn hóa \"che giấu sai phạm\" trong tổ chức dẫn đến gì?",
    "options": [
      "Tăng minh bạch",
      "Giảm vi phạm",
      "Khó cải thiện hiệu quả",
      "Cải thiện quản lý"
    ],
    "correct": 2,
    "explanation": "Không rút kinh nghiệm"
  },
  {
    "question": "Tham nhũng trong y tế ảnh hưởng đến yếu tố nào thu hút lao động quốc tế?",
    "options": [
      "Tăng bệnh viện",
      "Chất lượng dịch vụ y tế",
      "Giảm chi phí",
      "Cải thiện thuốc"
    ],
    "correct": 1,
    "explanation": "Chuyên gia nước ngoài lo ngại"
  },
  {
    "question": "Thiếu minh bạch trong xử lý vi phạm môi trường ảnh hưởng đến gì?",
    "options": [
      "Tăng xuất khẩu",
      "Cam kết phát triển bền vững trong FTA",
      "Giảm ô nhiễm",
      "Cải thiện sản xuất"
    ],
    "correct": 1,
    "explanation": "EU yêu cầu nghiêm ngặt"
  },
  {
    "question": "Văn hóa \"né trách nhiệm\" trong xử lý sai phạm dẫn đến gì?",
    "options": [
      "Tăng kỷ luật",
      "Tham nhũng tái diễn",
      "Giảm vi phạm",
      "Cải thiện quản lý"
    ],
    "correct": 1,
    "explanation": "Không răn đe"
  },
  {
    "question": "Tham nhũng trong cấp phép môi trường làm gì với doanh nghiệp xanh?",
    "options": [
      "Tăng dự án xanh",
      "Giảm động lực đầu tư bền vững",
      "Cải thiện môi trường",
      "Giảm ô nhiễm"
    ],
    "correct": 1,
    "explanation": "Doanh nghiệp \"bẩn\" vẫn được phép"
  },
  {
    "question": "Thiếu minh bạch trong chính sách nhập khẩu ảnh hưởng đến gì?",
    "options": [
      "Tăng xuất khẩu",
      "Thực thi cam kết WTO",
      "Giảm thuế",
      "Cải thiện logistics"
    ],
    "correct": 1,
    "explanation": "Rào cản phi thuế quan"
  },
  {
    "question": "Văn hóa \"không dám đấu tranh\" với tham nhũng dẫn đến gì?",
    "options": [
      "Tăng minh bạch",
      "Giảm vi phạm",
      "Tham nhũng lan rộng",
      "Cải thiện kỷ luật"
    ],
    "correct": 2,
    "explanation": "Văn hóa im lặng"
  },
  {
    "question": "Tham nhũng trong đánh giá tác động môi trường ảnh hưởng đến gì?",
    "options": [
      "Tăng dự án",
      "Uy tín với nhà đầu tư xanh",
      "Giảm chi phí",
      "Cải thiện môi trường"
    ],
    "correct": 1,
    "explanation": "Nhà đầu tư ESG lo ngại"
  },
  {
    "question": "Yếu kém nào làm Việt Nam khó dẫn dắt chuỗi giá trị toàn cầu?",
    "options": [
      "Dồi dào nguồn lực văn hóa",
      "Kỷ luật lao động cao",
      "Thiếu sáng tạo, chỉ gia công",
      "Minh bạch cao"
    ],
    "correct": 2,
    "explanation": "Do tâm lý bảo thủ"
  },
  {
    "question": "Bị động trong hội nhập văn hóa dẫn đến mất cân bằng nào trong kinh tế?",
    "options": [
      "Tăng xuất khẩu phim ảnh",
      "Giảm sức mạnh mềm, ảnh hưởng du lịch và thương hiệu",
      "Giảm tham nhũng",
      "Nâng cao kỹ năng lao động"
    ],
    "correct": 1,
    "explanation": "Không chủ động xuất khẩu giá trị văn hóa"
  },
  {
    "question": "Bị động văn hóa làm Việt Nam khó xuất khẩu gì để hỗ trợ kinh tế?",
    "options": [
      "Lao động giá rẻ",
      "Tài nguyên khoáng sản",
      "Công nghệ cao",
      "Giá trị văn hóa như ẩm thực, phim ảnh"
    ],
    "correct": 3,
    "explanation": "Mất cơ hội sức mạnh mềm"
  },
  {
    "question": "Thiếu sáng tạo từ trầm tích văn hóa khiến doanh nghiệp Việt Nam thường làm gì?",
    "options": [
      "Đầu tư lớn",
      "Sao chép thay vì dẫn dắt",
      "Hợp tác quốc tế",
      "Cải cách nhanh"
    ],
    "correct": 1,
    "explanation": "Vị thế gia công thấp"
  },
  {
    "question": "Văn hóa \"cộng đồng\" đôi khi dẫn đến hạn chế gì trong kinh doanh quốc tế?",
    "options": [
      "Tăng sáng tạo cá nhân",
      "Giảm quan liêu",
      "Ưu tiên tập thể hơn hiệu quả cá nhân",
      "Tăng tuân thủ thời gian"
    ],
    "correct": 2,
    "explanation": "Giảm tính cạnh tranh"
  },
  {
    "question": "Thiếu tinh thần sáng tạo trong giáo dục Việt Nam ảnh hưởng đến gì?",
    "options": [
      "Tăng số lượng sinh viên",
      "Giảm học phí",
      "Khả năng đổi mới sản phẩm",
      "Cải thiện cơ sở vật chất"
    ],
    "correct": 2,
    "explanation": "Học thuộc lòng thay vì sáng tạo"
  },
  {
    "question": "Bị động trong tiếp thu văn hóa nước ngoài dẫn đến gì?",
    "options": [
      "Tăng đổi mới",
      "Cải thiện hội nhập",
      "Thiếu chọn lọc, mất bản sắc",
      "Giảm bảo thủ"
    ],
    "correct": 2,
    "explanation": "Không chủ động bảo vệ giá trị"
  },
  {
    "question": "Thiếu sáng tạo trong marketing làm doanh nghiệp Việt khó làm gì?",
    "options": [
      "Bán hàng nội địa",
      "Giảm chi phí",
      "Tăng sản lượng",
      "Xây dựng thương hiệu quốc tế"
    ],
    "correct": 3,
    "explanation": "Chỉ dựa vào giá rẻ"
  },
  {
    "question": "Văn hóa \"học theo\" thay vì \"tạo ra\" ảnh hưởng đến lĩnh vực nào?",
    "options": [
      "Sản xuất gia công",
      "Xuất khẩu lao động",
      "Nghiên cứu và phát triển (R&D)",
      "Nông nghiệp truyền thống"
    ],
    "correct": 2,
    "explanation": "Ít bằng sáng chế"
  },
  {
    "question": "Bị động trong quảng bá văn hóa làm Việt Nam thua kém nước nào trong ASEAN?",
    "options": [
      "Lào về công nghiệp",
      "Myanmar về công nghệ",
      "Thái Lan về du lịch",
      "Campuchia về tài chính"
    ],
    "correct": 2,
    "explanation": "Thái Lan chủ động marketing"
  },
  {
    "question": "Thiếu sáng tạo trong thiết kế sản phẩm làm hàng Việt thường bị gì?",
    "options": [
      "Tăng nhu cầu",
      "Đánh giá thấp về giá trị gia tăng",
      "Cải thiện chất lượng",
      "Giảm cạnh tranh"
    ],
    "correct": 1,
    "explanation": "Chỉ gia công theo mẫu"
  },
  {
    "question": "Văn hóa \"ngại nổi bật\" cản trở gì trong khởi nghiệp?",
    "options": [
      "Duy trì doanh nghiệp",
      "Tăng lao động",
      "Phát triển startup sáng tạo",
      "Giảm chi phí"
    ],
    "correct": 2,
    "explanation": "Sợ thất bại trước cộng đồng"
  },
  {
    "question": "Bị động trong tham gia tổ chức quốc tế làm Việt Nam mất gì?",
    "options": [
      "Tăng thành viên",
      "Giảm cam kết",
      "Tiếng nói trong đàm phán",
      "Cải thiện quan hệ"
    ],
    "correct": 2,
    "explanation": "Ít chủ động đề xuất"
  },
  {
    "question": "Thiếu sáng tạo trong giải quyết vấn đề dẫn đến gì?",
    "options": [
      "Tăng hiệu quả",
      "Giảm chi phí",
      "Chậm thích nghi với thay đổi",
      "Cải thiện quản lý"
    ],
    "correct": 2,
    "explanation": "Áp dụng máy móc quy trình"
  },
  {
    "question": "Văn hóa \"không dám đặt câu hỏi\" ảnh hưởng đến gì?",
    "options": [
      "Tăng kỷ luật",
      "Khả năng đổi mới tổ chức",
      "Giảm xung đột",
      "Cải thiện đồng thuận"
    ],
    "correct": 1,
    "explanation": "Thiếu tư duy phản biện"
  },
  {
    "question": "Bị động trong nghiên cứu thị trường quốc tế làm doanh nghiệp Việt khó gì?",
    "options": [
      "Bán hàng quen thuộc",
      "Giảm chi phí",
      "Phát hiện cơ hội xuất khẩu mới",
      "Tăng sản lượng"
    ],
    "correct": 2,
    "explanation": "Chỉ chờ đơn hàng đến"
  },
  {
    "question": "Thiếu sáng tạo trong mô hình kinh doanh khiến doanh nghiệp Việt làm gì?",
    "options": [
      "Tăng giá trị gia tăng",
      "Cải thiện thương hiệu",
      "Cạnh tranh bằng giá thấp",
      "Giảm phụ thuộc"
    ],
    "correct": 2,
    "explanation": "Không tạo khác biệt"
  },
  {
    "question": "Văn hóa \"ngại thử nghiệm\" cản trở gì trong chuyển đổi số?",
    "options": [
      "Duy trì hệ thống cũ",
      "Tăng ổn định",
      "Ứng dụng công nghệ mới",
      "Giảm rủi ro"
    ],
    "correct": 2,
    "explanation": "Sợ thay đổi"
  },
  {
    "question": "Bị động trong xây dựng chuẩn mực quốc tế làm Việt Nam thường phải gì?",
    "options": [
      "Tạo chuẩn riêng",
      "Dẫn dắt khu vực",
      "Tuân theo chuẩn của nước khác",
      "Cải thiện vị thế"
    ],
    "correct": 2,
    "explanation": "Không chủ động đề xuất"
  },
  {
    "question": "Thiếu sáng tạo trong giải trí làm văn hóa Việt khó cạnh tranh với gì?",
    "options": [
      "Nội dung nội địa",
      "Làn sóng Hallyu Hàn Quốc",
      "Truyền thống dân gian",
      "Lễ hội địa phương"
    ],
    "correct": 1,
    "explanation": "Phim, nhạc Việt ít xuất khẩu"
  },
  {
    "question": "Hạn chế giáo dục văn hóa ở Việt Nam thể hiện ở việc thiếu gì cho lao động hội nhập?",
    "options": [
      "Dư thừa lao động chất lượng cao",
      "Tăng trưởng kinh tế số nhanh",
      "Kỹ năng mềm và tiếng Anh",
      "Giảm phụ thuộc giá rẻ"
    ],
    "correct": 2,
    "explanation": "Khó chuyển sang kinh tế tri thức"
  },
  {
    "question": "Hạn chế nguồn lực văn hóa dẫn đến thiếu gì trong hội nhập?",
    "options": [
      "Lao động dồi dào",
      "Tài nguyên thiên nhiên",
      "Ngân sách quảng bá quốc tế",
      "Dân số trẻ"
    ],
    "correct": 2,
    "explanation": "Giảm khả năng hỗ trợ kinh tế mềm"
  },
  {
    "question": "Hệ thống giáo dục nặng lý thuyết dẫn đến thiếu gì trong lao động?",
    "options": [
      "Số lượng lao động",
      "Tinh thần cộng đồng",
      "Kỹ năng thực hành cho kinh tế tri thức",
      "Bảo thủ"
    ],
    "correct": 2,
    "explanation": "Cản trở chuyển đổi kinh tế"
  },
  {
    "question": "Thiếu nguồn lực cho quảng bá văn hóa ảnh hưởng đến ngành nào?",
    "options": [
      "Công nghiệp",
      "Du lịch và thương hiệu quốc gia",
      "Nông nghiệp",
      "Tài chính"
    ],
    "correct": 1,
    "explanation": "Giảm thu nhập từ kinh tế mềm"
  },
  {
    "question": "Thiếu kỹ năng ngôn ngữ trong lao động Việt Nam ảnh hưởng đến gì?",
    "options": [
      "Sản xuất nội địa",
      "Nông nghiệp truyền thống",
      "Làm việc trong công ty đa quốc gia",
      "Xây dựng cơ bản"
    ],
    "correct": 2,
    "explanation": "Khó giao tiếp quốc tế"
  },
  {
    "question": "Giáo dục thiếu tư duy phản biện dẫn đến lao động có tính gì?",
    "options": [
      "Độc lập cao",
      "Tuân thủ máy móc, ít sáng tạo",
      "Linh hoạt mạnh",
      "Đổi mới nhanh"
    ],
    "correct": 1,
    "explanation": "Không thích nghi tốt"
  },
  {
    "question": "Thiếu đầu tư cho nghiên cứu văn hóa làm Việt Nam khó làm gì?",
    "options": [
      "Tăng xuất khẩu nông sản",
      "Giảm nhập khẩu",
      "Cải thiện công nghiệp",
      "Hiểu rõ giá trị để quảng bá"
    ],
    "correct": 3,
    "explanation": "Không định vị thế mạnh"
  },
  {
    "question": "Giáo dục nghệ thuật yếu làm Việt Nam thiếu gì?",
    "options": [
      "Lao động sản xuất",
      "Nông dân",
      "Nhân lực sáng tạo cho công nghiệp văn hóa",
      "Công nhân"
    ],
    "correct": 2,
    "explanation": "Ít nhà thiết kế, nghệ sĩ quốc tế"
  },
  {
    "question": "Thiếu nguồn lực cho bảo tồn di sản dẫn đến gì?",
    "options": [
      "Tăng khách du lịch",
      "Di sản bị xuống cấp, mất thu hút du lịch",
      "Cải thiện hạ tầng",
      "Giảm chi phí"
    ],
    "correct": 1,
    "explanation": "Giảm sức hút văn hóa"
  },
  {
    "question": "Giáo dục kỹ năng mềm yếu làm lao động Việt khó làm gì?",
    "options": [
      "Làm việc độc lập",
      "Sản xuất đơn giản",
      "Làm việc nhóm đa văn hóa",
      "Tuân thủ quy trình"
    ],
    "correct": 2,
    "explanation": "Thiếu giao tiếp, thương lượng"
  },
  {
    "question": "Thiếu chính sách hỗ trợ doanh nghiệp văn hóa làm gì?",
    "options": [
      "Tăng xuất khẩu",
      "Giảm nhập khẩu",
      "Khó phát triển công nghiệp sáng tạo",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Thiếu nguồn vốn, thị trường"
  },
  {
    "question": "Giáo dục công nghệ thông tin chậm dẫn đến gì?",
    "options": [
      "Dư thừa lập trình viên",
      "Tăng startup",
      "Thiếu nhân lực chuyển đổi số",
      "Cải thiện kinh tế số"
    ],
    "correct": 2,
    "explanation": "Không đáp ứng nhu cầu"
  },
  {
    "question": "Thiếu đầu tư cho giáo dục nghề nghiệp ảnh hưởng đến gì?",
    "options": [
      "Tăng công nhân",
      "Giảm thất nghiệp",
      "Chất lượng lao động kỹ thuật",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Không đạt chuẩn quốc tế"
  },
  {
    "question": "Giáo dục thiếu liên kết doanh nghiệp dẫn đến gì?",
    "options": [
      "Tăng việc làm",
      "Lao động không đáp ứng thực tế",
      "Giảm thất nghiệp",
      "Cải thiện kỹ năng"
    ],
    "correct": 1,
    "explanation": "Học xa thực hành"
  },
  {
    "question": "Thiếu nguồn lực cho đào tạo liên tục làm lao động khó gì?",
    "options": [
      "Giữ việc cũ",
      "Tăng lương",
      "Cập nhật kỹ năng mới",
      "Giảm giờ làm"
    ],
    "correct": 2,
    "explanation": "Kiến thức lỗi thời"
  },
  {
    "question": "Giáo dục thiếu quốc tế hóa dẫn đến sinh viên Việt có gì?",
    "options": [
      "Tăng cơ hội",
      "Giảm học phí",
      "Khó thích nghi môi trường đa văn hóa",
      "Cải thiện bằng cấp"
    ],
    "correct": 2,
    "explanation": "Thiếu trải nghiệm quốc tế"
  },
  {
    "question": "Thiếu đầu tư cho nghiên cứu khoa học làm Việt Nam khó gì?",
    "options": [
      "Tăng nhập khẩu",
      "Giảm chi phí",
      "Phát triển công nghệ nội địa",
      "Cải thiện sản xuất"
    ],
    "correct": 2,
    "explanation": "Phụ thuộc công nghệ nước ngoài"
  },
  {
    "question": "Giáo dục thiếu khởi nghiệp dẫn đến sinh viên có tư duy gì?",
    "options": [
      "Sáng tạo cao",
      "Mạo hiểm mạnh",
      "Ưa ổn định, ngại rủi ro",
      "Độc lập lớn"
    ],
    "correct": 2,
    "explanation": "Thiếu tinh thần khởi nghiệp"
  },
  {
    "question": "Thiếu nguồn lực cho thư viện, bảo tàng ảnh hưởng đến gì?",
    "options": [
      "Tăng khách tham quan",
      "Giảm chi phí",
      "Giáo dục văn hóa cho thế hệ trẻ",
      "Cải thiện cơ sở vật chất"
    ],
    "correct": 2,
    "explanation": "Thiếu nguồn học liệu"
  },
  {
    "question": "Giáo dục thiếu định hướng nghề nghiệp dẫn đến gì?",
    "options": [
      "Tăng việc làm",
      "Lãng phí nguồn nhân lực",
      "Giảm thất nghiệp",
      "Cải thiện thu nhập"
    ],
    "correct": 1,
    "explanation": "Học không đúng ngành cần"
  },
  {
    "question": "Nghị quyết nào của Đảng tập trung xây dựng con người phát triển toàn diện để khắc phục bảo thủ?",
    "options": [
      "Trung ương 9 khóa XII",
      "33-NQ/TW",
      "Trung ương 5 khóa VIII",
      "13-NQ/TW"
    ],
    "correct": 2,
    "explanation": "Đề ra 10 nhiệm vụ văn hóa"
  },
  {
    "question": "Nghị quyết 5 khóa VIII có bao nhiêu quan điểm chỉ đạo về văn hóa?",
    "options": [
      "10",
      "5",
      "15",
      "20"
    ],
    "correct": 1,
    "explanation": "Tập trung khắc phục yếu kém"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII nhấn mạnh văn hóa là gì?",
    "options": [
      "Phụ thuộc kinh tế",
      "Bổ trợ chính trị",
      "Nền tảng tinh thần của xã hội",
      "Công cụ quân sự"
    ],
    "correct": 2,
    "explanation": "Ngang hàng kinh tế, chính trị"
  },
  {
    "question": "Nghị quyết 5 khóa VIII đề ra xây dựng con người như thế nào?",
    "options": [
      "Chỉ về kinh tế",
      "Toàn diện, hài hòa, sáng tạo",
      "Tập trung quân sự",
      "Ưu tiên chính trị"
    ],
    "correct": 1,
    "explanation": "Khắc phục bảo thủ"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII đặt mục tiêu văn hóa phục vụ điều gì?",
    "options": [
      "Chiến tranh",
      "Cách mạng",
      "Công nghiệp hóa, hiện đại hóa",
      "Nông nghiệp truyền thống"
    ],
    "correct": 2,
    "explanation": "Hỗ trợ phát triển kinh tế"
  },
  {
    "question": "Nghị quyết 5 khóa VIII yêu cầu khắc phục tình trạng gì trong văn hóa?",
    "options": [
      "Phát triển nhanh",
      "Đổi mới mạnh",
      "Trì trệ, lạc hậu, bảo thủ",
      "Hội nhập sâu"
    ],
    "correct": 2,
    "explanation": "Cản trở hội nhập"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII chủ trương phát triển văn hóa theo hướng nào?",
    "options": [
      "Chỉ truyền thống",
      "Hoàn toàn nước ngoài",
      "Bỏ bản sắc",
      "Dân tộc, khoa học, đại chúng"
    ],
    "correct": 3,
    "explanation": "Định hướng Hồ Chí Minh"
  },
  {
    "question": "Nghị quyết 5 khóa VIII đề ra bao nhiêu nhiệm vụ văn hóa chính?",
    "options": [
      "5",
      "15",
      "20",
      "10"
    ],
    "correct": 3,
    "explanation": "Bao quát các lĩnh vực"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII nhấn mạnh xây dựng môi trường văn hóa như thế nào?",
    "options": [
      "Cứng nhắc",
      "Bảo thủ",
      "Lành mạnh, nhân văn",
      "Khép kín"
    ],
    "correct": 2,
    "explanation": "Hỗ trợ phát triển con người"
  },
  {
    "question": "Nghị quyết 5 khóa VIII đặt văn hóa trong mối quan hệ nào?",
    "options": [
      "Độc lập hoàn toàn",
      "Phụ thuộc kinh tế",
      "Thống nhất với kinh tế, chính trị, xã hội",
      "Tách biệt xã hội"
    ],
    "correct": 2,
    "explanation": "Phát triển đồng bộ"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII yêu cầu đổi mới gì trong quản lý văn hóa?",
    "options": [
      "Tăng quan liêu",
      "Cơ chế, chính sách",
      "Giảm đầu tư",
      "Bỏ quản lý"
    ],
    "correct": 1,
    "explanation": "Tạo động lực phát triển"
  },
  {
    "question": "Nghị quyết 5 khóa VIII nhấn mạnh vai trò của ai trong xây dựng văn hóa?",
    "options": [
      "Chỉ Đảng",
      "Chỉ Nhà nước",
      "Chỉ trí thức",
      "Toàn dân"
    ],
    "correct": 3,
    "explanation": "Văn hóa của dân, do dân"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII đề ra xây dựng hệ giá trị văn hóa như thế nào?",
    "options": [
      "Bỏ truyền thống",
      "Chỉ học nước ngoài",
      "Kế thừa truyền thống, tiếp thu tinh hoa",
      "Đóng cửa"
    ],
    "correct": 2,
    "explanation": "Cân bằng bản sắc và hội nhập"
  },
  {
    "question": "Nghị quyết 5 khóa VIII chủ trương phát triển văn hóa dân tộc để làm gì?",
    "options": [
      "Tách biệt thế giới",
      "Chống lại nước ngoài",
      "Bảo vệ bản sắc trong hội nhập",
      "Bỏ hiện đại hóa"
    ],
    "correct": 2,
    "explanation": "Hội nhập chủ động"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII yêu cầu đầu tư cho văn hóa như thế nào?",
    "options": [
      "Giảm đầu tư",
      "Chỉ nhà nước",
      "Bỏ qua văn hóa",
      "Tăng ngân sách, huy động xã hội"
    ],
    "correct": 3,
    "explanation": "Đảm bảo nguồn lực"
  },
  {
    "question": "Nghị quyết 5 khóa VIII đề ra chống gì trong văn hóa?",
    "options": [
      "Đổi mới",
      "Lạc hậu, lệch lạc, thoái hóa",
      "Hội nhập",
      "Hiện đại hóa"
    ],
    "correct": 1,
    "explanation": "Bảo vệ văn hóa lành mạnh"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII nhấn mạnh xây dựng đội ngũ văn hóa như thế nào?",
    "options": [
      "Chỉ chuyên môn",
      "Chỉ chính trị",
      "Vừa hồng vừa chuyên",
      "Không cần đào tạo"
    ],
    "correct": 2,
    "explanation": "Đảm bảo chất lượng"
  },
  {
    "question": "Nghị quyết 5 khóa VIII chủ trương phát triển công nghiệp văn hóa để làm gì?",
    "options": [
      "Giảm sản xuất",
      "Bỏ thị trường",
      "Tăng thu nhập, xuất khẩu văn hóa",
      "Chỉ phục vụ nội địa"
    ],
    "correct": 2,
    "explanation": "Kinh tế hóa văn hóa"
  },
  {
    "question": "Nghị quyết TW5 khóa VIII yêu cầu văn hóa gắn với gì?",
    "options": [
      "Chỉ giải trí",
      "Tách biệt kinh tế",
      "Phát triển kinh tế-xã hội",
      "Bỏ xã hội"
    ],
    "correct": 2,
    "explanation": "Phát triển đồng bộ"
  },
  {
    "question": "Nghị quyết 5 khóa VIII đặt mục tiêu xây dựng nền văn hóa như thế nào?",
    "options": [
      "Hoàn toàn nước ngoài",
      "Bảo thủ truyền thống",
      "Tách biệt thế giới",
      "Tiên tiến, đậm đà bản sắc dân tộc"
    ],
    "correct": 3,
    "explanation": "Cân bằng hiện đại và truyền thống"
  },
  {
    "question": "Nghị quyết Trung ương 9 khóa XI hài hòa giữa bảo tồn và gì?",
    "options": [
      "Tăng đồng hóa",
      "Phát triển kinh tế-xã hội",
      "Giảm hội nhập",
      "Bỏ lao động"
    ],
    "correct": 1,
    "explanation": "Hỗ trợ kinh tế di sản"
  },
  {
    "question": "Nghị quyết 9 khóa XI đề cập hài hòa văn hóa với gì?",
    "options": [
      "Chiến tranh",
      "Thể thao",
      "Kinh tế thị trường và hội nhập",
      "Giải trí"
    ],
    "correct": 2,
    "explanation": "Bảo tồn và phát triển"
  },
  {
    "question": "Nghị quyết TW9 khóa XI nhấn mạnh văn hóa là yếu tố gì của phát triển bền vững?",
    "options": [
      "Phụ thuộc",
      "Thứ yếu",
      "Nền tảng tinh thần",
      "Không quan trọng"
    ],
    "correct": 2,
    "explanation": "Trụ cột phát triển"
  },
  {
    "question": "Nghị quyết 9 khóa XI đề ra phát triển con người theo hướng nào?",
    "options": [
      "Chỉ kinh tế",
      "Chỉ chính trị",
      "Toàn diện, bền vững",
      "Chỉ quân sự"
    ],
    "correct": 2,
    "explanation": "Khắc phục bảo thủ"
  },
  {
    "question": "Nghị quyết TW9 khóa XI yêu cầu xây dựng môi trường văn hóa như thế nào?",
    "options": [
      "Tự do tuyệt đối",
      "Không quản lý",
      "Lành mạnh, an toàn",
      "Bảo thủ"
    ],
    "correct": 2,
    "explanation": "Bảo vệ thế hệ trẻ"
  },
  {
    "question": "Nghị quyết 9 khóa XI chủ trương phát triển văn hóa trong doanh nghiệp để làm gì?",
    "options": [
      "Giảm lợi nhuận",
      "Tăng xung đột",
      "Nâng cao năng suất, đạo đức",
      "Bỏ quản lý"
    ],
    "correct": 2,
    "explanation": "Văn hóa doanh nghiệp"
  },
  {
    "question": "Nghị quyết TW9 khóa XI nhấn mạnh vai trò của gia đình trong gì?",
    "options": [
      "Chỉ kinh tế",
      "Chỉ chính trị",
      "Không quan trọng",
      "Giáo dục văn hóa, đạo đức"
    ],
    "correct": 3,
    "explanation": "Tế bào xã hội"
  },
  {
    "question": "Nghị quyết 9 khóa XI đề ra xây dựng con người Việt Nam có phẩm chất gì?",
    "options": [
      "Bảo thủ",
      "Ích kỷ",
      "Yêu nước, nhân ái, đoàn kết",
      "Thụ động"
    ],
    "correct": 2,
    "explanation": "Giá trị cốt lõi"
  },
  {
    "question": "Nghị quyết TW9 khóa XI yêu cầu phát triển văn hóa thiểu số để làm gì?",
    "options": [
      "Đồng hóa",
      "Xóa bỏ",
      "Bảo tồn đa dạng, xóa đói giảm nghèo",
      "Tách biệt"
    ],
    "correct": 2,
    "explanation": "Đa dạng trong thống nhất"
  },
  {
    "question": "Nghị quyết 9 khóa XI chủ trương phát triển thị trường văn hóa như thế nào?",
    "options": [
      "Tự do tuyệt đối",
      "Lành mạnh, có quản lý",
      "Không quản lý",
      "Cấm hoàn toàn"
    ],
    "correct": 1,
    "explanation": "Cân bằng kinh tế và văn hóa"
  },
  {
    "question": "Hội nghị Văn hóa toàn quốc lần thứ nhất (1946) đặt nền móng cho chính sách văn hóa nào?",
    "options": [
      "Chỉ truyền thống",
      "Hoàn toàn nước ngoài",
      "Dân tộc, khoa học, đại chúng",
      "Phong kiến"
    ],
    "correct": 2,
    "explanation": "Định hướng Hồ Chí Minh"
  },
  {
    "question": "Đại hội Đảng lần thứ VI (1986) khởi đầu chính sách gì với văn hóa?",
    "options": [
      "Đóng cửa",
      "Bảo thủ",
      "Đổi mới, mở cửa",
      "Cách mạng"
    ],
    "correct": 2,
    "explanation": "Đổi mới toàn diện"
  },
  {
    "question": "Đại hội XI của Đảng (2011) nhấn mạnh văn hóa là gì?",
    "options": [
      "Phụ thuộc kinh tế",
      "Nền tảng tinh thần, động lực phát triển",
      "Thứ yếu",
      "Không quan trọng"
    ],
    "correct": 1,
    "explanation": "Vừa là mục tiêu vừa là động lực"
  },
  {
    "question": "Đại hội XII của Đảng (2016) đặt mục tiêu văn hóa đến 2020 là gì?",
    "options": [
      "Giữ nguyên hiện trạng",
      "Đóng cửa",
      "Xây dựng nền văn hóa tiên tiến",
      "Bỏ văn hóa"
    ],
    "correct": 2,
    "explanation": "Đậm đà bản sắc dân tộc"
  },
  {
    "question": "Đại hội XIII của Đảng (2021) nhấn mạnh văn hóa trong bối cảnh gì?",
    "options": [
      "Chiến tranh",
      "Đóng cửa",
      "Cách mạng công nghiệp 4.0 và hội nhập",
      "Bảo thủ"
    ],
    "correct": 2,
    "explanation": "Thích nghi thời đại mới"
  },
  {
    "question": "Hội nghị Văn hóa toàn quốc 2021 đề ra xây dựng con người Việt Nam thời kỳ nào?",
    "options": [
      "Nông nghiệp",
      "Phong kiến",
      "Công nghiệp hóa, hiện đại hóa, hội nhập",
      "Bao cấp"
    ],
    "correct": 2,
    "explanation": "Thích nghi yêu cầu mới"
  },
  {
    "question": "Các nghị quyết của Đảng về văn hóa đều nhấn mạnh nguyên tắc gì?",
    "options": [
      "Bỏ truyền thống",
      "Chỉ học nước ngoài",
      "Kế thừa và phát triển sáng tạo",
      "Đóng cửa"
    ],
    "correct": 2,
    "explanation": "Cân bằng bản sắc và hiện đại"
  },
  {
    "question": "Đường lối văn hóa của Đảng qua các kỳ đại hội thể hiện tính gì?",
    "options": [
      "Thay đổi liên tục",
      "Mâu thuẫn",
      "Kế thừa, phát triển, nhất quán",
      "Không rõ ràng"
    ],
    "correct": 2,
    "explanation": "Phát triển theo giai đoạn"
  },
  {
    "question": "Các nghị quyết về văn hóa của Đảng đều đặt văn hóa trong mối quan hệ nào?",
    "options": [
      "Độc lập hoàn toàn",
      "Tách biệt",
      "Hữu cơ với kinh tế, chính trị, xã hội",
      "Không liên quan"
    ],
    "correct": 2,
    "explanation": "Phát triển đồng bộ"
  },
  {
    "question": "Đường lối văn hóa của Đảng nhằm xây dựng nền văn hóa Việt Nam như thế nào?",
    "options": [
      "Bảo thủ",
      "Đóng cửa",
      "Mất bản sắc",
      "Tiên tiến, đậm đà bản sắc, hội nhập"
    ],
    "correct": 3,
    "explanation": "Mục tiêu toàn diện"
  },
  {
    "question": "Nghị quyết 59-NQ/TW nhằm cải thiện gì để thu hút FDI?",
    "options": [
      "Tăng trưởng xuất khẩu",
      "Giảm sáng tạo",
      "Môi trường kinh doanh, giảm quan liêu",
      "Tăng tham nhũng"
    ],
    "correct": 2,
    "explanation": "Cơ cấu lại kinh tế"
  },
  {
    "question": "Hoàn thiện môi trường kinh doanh minh bạch là nội dung của nghị quyết nào?",
    "options": [
      "Tăng thủ tục",
      "Giảm FDI",
      "Cải cách hành chính 59-NQ/TW",
      "Bỏ cam kết"
    ],
    "correct": 2,
    "explanation": "Giảm quan liêu"
  },
  {
    "question": "Nghị quyết 59 nhấn mạnh đổi mới sáng tạo để giảm gì?",
    "options": [
      "Tăng trưởng",
      "Bảo thủ tiểu nông",
      "Dân số",
      "Tài nguyên"
    ],
    "correct": 1,
    "explanation": "Nâng cao cạnh tranh"
  },
  {
    "question": "Nghị quyết 33-NQ/TW về xây dựng và phát triển văn hóa nhấn mạnh điều gì?",
    "options": [
      "Văn hóa không quan trọng",
      "Chỉ tập trung kinh tế",
      "Văn hóa là nền tảng tinh thần xã hội",
      "Bỏ qua văn hóa"
    ],
    "correct": 2,
    "explanation": "Động lực phát triển"
  },
  {
    "question": "Nghị quyết 33 đề ra xây dựng hệ giá trị văn hóa Việt Nam gồm những giá trị nào?",
    "options": [
      "Chỉ kinh tế",
      "Chỉ chính trị",
      "Yêu nước, đoàn kết, nhân ái, trách nhiệm",
      "Chỉ quân sự"
    ],
    "correct": 2,
    "explanation": "Giá trị cốt lõi"
  },
  {
    "question": "Nghị quyết 33-NQ/TW yêu cầu xây dựng con người Việt Nam có năng lực gì?",
    "options": [
      "Bảo thủ",
      "Thụ động",
      "Sáng tạo, thích nghi, hội nhập",
      "Ích kỷ"
    ],
    "correct": 2,
    "explanation": "Đáp ứng hội nhập"
  },
  {
    "question": "Nghị quyết 33 chủ trương phát triển công nghiệp văn hóa để đạt mục tiêu gì?",
    "options": [
      "Giảm sản xuất",
      "Bỏ thị trường",
      "Đóng góp 7% GDP đến 2030",
      "Chỉ phục vụ nội địa"
    ],
    "correct": 2,
    "explanation": "Kinh tế hóa văn hóa"
  },
  {
    "question": "Nghị quyết 33-NQ/TW nhấn mạnh phát triển văn hóa theo hướng nào?",
    "options": [
      "Đóng cửa",
      "Bị động",
      "Mất bản sắc",
      "Chủ động hội nhập, bảo vệ bản sắc"
    ],
    "correct": 3,
    "explanation": "Hội nhập tích cực"
  },
  {
    "question": "Nghị quyết 33 yêu cầu đổi mới cơ chế quản lý văn hóa theo hướng nào?",
    "options": [
      "Quản lý cứng nhắc",
      "Nhà nước bao cấp",
      "Xã hội hóa, thị trường có quản lý",
      "Không quản lý"
    ],
    "correct": 2,
    "explanation": "Huy động nguồn lực xã hội"
  },
  {
    "question": "Nghị quyết 33-NQ/TW đặt mục tiêu văn hóa trở thành động lực gì?",
    "options": [
      "Chỉ giải trí",
      "Không quan trọng",
      "Phát triển bền vững đất nước",
      "Phụ thuộc kinh tế"
    ],
    "correct": 2,
    "explanation": "Trụ cột phát triển"
  },
  {
    "question": "Cải cách hành chính trong đường lối Đảng nhằm giảm gì?",
    "options": [
      "Sáng tạo",
      "Giáo dục",
      "Thủ tục rườm rà",
      "Hội nhập"
    ],
    "correct": 2,
    "explanation": "Cải thiện môi trường kinh doanh"
  },
  {
    "question": "Chương trình cải cách hành chính giai đoạn 2021-2030 tập trung vào gì?",
    "options": [
      "Tăng giấy tờ",
      "Chính phủ điện tử, minh bạch",
      "Giảm công khai",
      "Tăng quan liêu"
    ],
    "correct": 1,
    "explanation": "Chuyển đổi số"
  },
  {
    "question": "Cải cách tư pháp nhằm khắc phục hạn chế gì trong hội nhập?",
    "options": [
      "Tăng tham nhũng",
      "Giảm công bằng",
      "Thiếu minh bạch, chậm giải quyết tranh chấp",
      "Tăng thủ tục"
    ],
    "correct": 2,
    "explanation": "Tăng niềm tin nhà đầu tư"
  },
  {
    "question": "Đảng chủ trương cải cách thủ tục hành chính theo hướng nào?",
    "options": [
      "Phức tạp hóa",
      "Chậm trễ",
      "Đơn giản, nhanh chóng, minh bạch",
      "Mờ ám"
    ],
    "correct": 2,
    "explanation": "Thuận lợi kinh doanh"
  },
  {
    "question": "Chống tham nhũng là nội dung quan trọng của đường lối nào?",
    "options": [
      "Chỉ kinh tế",
      "Chỉ quân sự",
      "Xây dựng Đảng, Nhà nước trong sạch",
      "Không quan trọng"
    ],
    "correct": 2,
    "explanation": "Nghị quyết Trung ương 4"
  },
  {
    "question": "Đảng yêu cầu cải cách quản lý nhà nước theo hướng nào?",
    "options": [
      "Nghiệp dư",
      "Lạc hậu",
      "Chuyên nghiệp, hiện đại, hiệu quả",
      "Kém hiệu quả"
    ],
    "correct": 2,
    "explanation": "Đáp ứng hội nhập"
  },
  {
    "question": "Cải cách chế độ công chức nhằm xây dựng đội ngũ như thế nào?",
    "options": [
      "Tham nhũng",
      "Kém năng lực",
      "Liêm khiết, năng lực cao",
      "Quan liêu"
    ],
    "correct": 2,
    "explanation": "Phục vụ tốt dân và doanh nghiệp"
  },
  {
    "question": "Đảng chủ trương xây dựng chính phủ điện tử để làm gì?",
    "options": [
      "Tăng giấy tờ",
      "Giảm thời gian, chi phí, tăng minh bạch",
      "Giảm công khai",
      "Tăng tham nhũng"
    ],
    "correct": 1,
    "explanation": "Chuyển đổi số"
  },
  {
    "question": "Cải cách pháp luật nhằm đảm bảo gì cho hoạt động kinh tế?",
    "options": [
      "Mâu thuẫn",
      "Mờ ám",
      "Đồng bộ, minh bạch, khả thi",
      "Khó thực thi"
    ],
    "correct": 2,
    "explanation": "Môi trường pháp lý lành mạnh"
  },
  {
    "question": "Đảng yêu cầu cải cách hệ thống thanh tra, kiểm tra theo hướng nào?",
    "options": [
      "Phụ thuộc",
      "Kín đáo",
      "Độc lập, công khai, hiệu quả",
      "Kém hiệu quả"
    ],
    "correct": 2,
    "explanation": "Chống tham nhũng"
  },
  {
    "question": "Để khắc phục bị động hội nhập, Đảng đề ra ngoại giao văn hóa như thế nào?",
    "options": [
      "Giảm quảng bá",
      "Tăng quan liêu",
      "Xây dựng trung tâm Việt Nam ở nước ngoài",
      "Bỏ di sản"
    ],
    "correct": 2,
    "explanation": "Tăng sức mạnh mềm"
  },
  {
    "question": "Chiến lược hội nhập của Đảng nhấn mạnh điều gì?",
    "options": [
      "Bị động đón nhận",
      "Giảm hội nhập",
      "Chủ động, sáng tạo bảo vệ chủ quyền",
      "Bỏ văn hóa"
    ],
    "correct": 2,
    "explanation": "Củng cố vị thế"
  },
  {
    "question": "Đường lối hội nhập chủ động giúp khắc phục hạn chế nào?",
    "options": [
      "Tăng quan liêu",
      "Giảm sáng tạo",
      "Bị động văn hóa",
      "Tăng tham nhũng"
    ],
    "correct": 2,
    "explanation": "Chủ động xuất khẩu giá trị"
  },
  {
    "question": "Ngoại giao văn hóa trong 40 năm Đổi Mới nhằm thúc đẩy gì?",
    "options": [
      "Giảm hội nhập",
      "Tăng đồng hóa",
      "Phát triển kinh tế qua giá trị dân tộc",
      "Bỏ quảng bá"
    ],
    "correct": 2,
    "explanation": "Trụ cột ngoại giao"
  },
  {
    "question": "Văn hóa là trụ cột trong đường lối nào của Đảng?",
    "options": [
      "Quân sự",
      "Ngoại giao và hội nhập",
      "Thể thao",
      "Nông nghiệp"
    ],
    "correct": 1,
    "explanation": "Hỗ trợ kinh tế"
  },
  {
    "question": "Đảng chủ trương xây dựng hình ảnh Việt Nam trên trường quốc tế như thế nào?",
    "options": [
      "Bảo thủ",
      "Đóng cửa",
      "Thân thiện, năng động, sáng tạo",
      "Thụ động"
    ],
    "correct": 2,
    "explanation": "Soft power"
  },
  {
    "question": "Để khắc phục thiếu nguồn lực, Đảng chủ trương xây dựng gì?",
    "options": [
      "Giảm ngân sách",
      "Tăng bị động",
      "Trung tâm quảng bá văn hóa quốc tế",
      "Bỏ ngoại giao"
    ],
    "correct": 2,
    "explanation": "Tăng hỗ trợ thương mại"
  },
  {
    "question": "Chiến lược quảng bá văn hóa ra nước ngoài giúp tăng gì?",
    "options": [
      "Bảo thủ",
      "Quan liêu",
      "Du lịch và thương mại",
      "Bị động"
    ],
    "correct": 2,
    "explanation": "Sức mạnh mềm"
  },
  {
    "question": "Đảng chủ trương phát triển văn hóa người Việt ở nước ngoài để làm gì?",
    "options": [
      "Tách biệt",
      "Quên gốc",
      "Kết nối kiều bào, tăng đầu tư",
      "Giảm liên hệ"
    ],
    "correct": 2,
    "explanation": "Cầu nối kinh tế"
  },
  {
    "question": "Ngoại giao văn hóa giúp Việt Nam khắc phục hạn chế nào trong FTA?",
    "options": [
      "Tăng xuất khẩu nông sản",
      "Giảm nhập khẩu",
      "Thiếu uy tín quốc tế",
      "Cải thiện công nghiệp"
    ],
    "correct": 2,
    "explanation": "Tăng niềm tin đối tác"
  },
  {
    "question": "Đảng chủ trương tổ chức các sự kiện văn hóa quốc tế tại Việt Nam để làm gì?",
    "options": [
      "Giảm khách",
      "Tăng chi phí",
      "Quảng bá đất nước, thu hút đầu tư",
      "Bỏ du lịch"
    ],
    "correct": 2,
    "explanation": "Marketing quốc gia"
  },
  {
    "question": "Chiến lược hội nhập văn hóa của Đảng nhấn mạnh nguyên tắc gì?",
    "options": [
      "Bị động",
      "Đón nhận tất cả",
      "Chủ động, chọn lọc, bảo vệ bản sắc",
      "Đóng cửa"
    ],
    "correct": 2,
    "explanation": "Hội nhập có chọn lọc"
  },
  {
    "question": "Đảng chủ trương phát triển ngành công nghiệp văn hóa nào có tiềm năng xuất khẩu?",
    "options": [
      "Chỉ nông nghiệp",
      "Chỉ công nghiệp nặng",
      "Phim ảnh, âm nhạc, ẩm thực",
      "Chỉ khai khoáng"
    ],
    "correct": 2,
    "explanation": "Sức mạnh mềm"
  },
  {
    "question": "Ngoại giao văn hóa giúp Việt Nam tăng cường gì trong ASEAN?",
    "options": [
      "Tách biệt",
      "Giảm hợp tác",
      "Vị thế và ảnh hưởng",
      "Bỏ hội nhập"
    ],
    "correct": 2,
    "explanation": "Vai trò tích cực"
  },
  {
    "question": "Đảng chủ trương xây dựng thương hiệu quốc gia qua gì?",
    "options": [
      "Chỉ giá rẻ",
      "Giảm chất lượng",
      "Văn hóa, du lịch, sản phẩm đặc trưng",
      "Bỏ quảng bá"
    ],
    "correct": 2,
    "explanation": "Nation branding"
  },
  {
    "question": "Chiến lược hội nhập văn hóa giúp Việt Nam đối phó với gì?",
    "options": [
      "Tăng đổi mới",
      "Giảm bảo thủ",
      "Nguy cơ đồng hóa văn hóa",
      "Cải thiện hợp tác"
    ],
    "correct": 2,
    "explanation": "Bảo vệ bản sắc"
  },
  {
    "question": "Đảng chủ trương hợp tác văn hóa quốc tế theo hướng nào?",
    "options": [
      "Một đối tác",
      "Đóng cửa",
      "Đa dạng hóa đối tác, đa phương hóa quan hệ",
      "Phụ thuộc"
    ],
    "correct": 2,
    "explanation": "Mở rộng quan hệ"
  },
  {
    "question": "Ngoại giao văn hóa giúp Việt Nam thu hút gì từ quốc tế?",
    "options": [
      "Giảm liên hệ",
      "Tách biệt",
      "Đầu tư, du khách, hợp tác",
      "Bỏ quan hệ"
    ],
    "correct": 2,
    "explanation": "Hỗ trợ kinh tế"
  },
  {
    "question": "Đảng chủ trương đào tạo đội ngũ ngoại giao văn hóa như thế nào?",
    "options": [
      "Nghiệp dư",
      "Thiếu kiến thức",
      "Chuyên nghiệp, am hiểu văn hóa",
      "Không đào tạo"
    ],
    "correct": 2,
    "explanation": "Nâng cao hiệu quả"
  },
  {
    "question": "Chiến lược hội nhập văn hóa của Đảng gắn văn hóa với gì?",
    "options": [
      "Chỉ giải trí",
      "Tách biệt kinh tế",
      "Phát triển kinh tế-xã hội bền vững",
      "Không liên quan"
    ],
    "correct": 2,
    "explanation": "Phát triển đồng bộ"
  },
  {
    "question": "Hệ giá trị văn hóa con người được Đảng đặt ngang hàng với gì?",
    "options": [
      "Quân sự",
      "Kinh tế và chính trị",
      "Thể thao",
      "Giải trí"
    ],
    "correct": 1,
    "explanation": "Chống tham nhũng, nâng kỹ năng"
  },
  {
    "question": "Xây dựng hệ giá trị văn hóa nhằm nâng cao gì cho lao động?",
    "options": [
      "Giảm giáo dục",
      "Tăng bảo thủ",
      "Kỹ năng và đạo đức",
      "Bỏ hội nhập"
    ],
    "correct": 2,
    "explanation": "Phát triển con người"
  },
  {
    "question": "Đảng chủ trương đầu tư giáo dục để khắc phục hạn chế nào?",
    "options": [
      "Tăng quan liêu",
      "Giảm FDI",
      "Thiếu kỹ năng mềm",
      "Tăng tham nhũng"
    ],
    "correct": 2,
    "explanation": "Cho lao động quốc tế"
  }
]

