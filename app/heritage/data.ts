export interface Heritage {
  name: string
  type: string
  category: string
  description: string
  year: number
  location: string
  image: string
}

export const HERITAGE_ITEMS: Heritage[] = [
  // Di sản Thế giới - Di sản Văn hoá
  {
    name: "Quần thể di tích Cố đô Huế",
    type: "Di sản Văn hoá",
    category: "Di sản Thế giới",
    description: "Quần thể di tích cố đô Huế là di sản văn hóa thế giới đầu tiên của Việt Nam được UNESCO công nhận. Bao gồm các công trình kiến trúc như Hoàng thành, Tử Cấm thành, các lăng tẩm của các vua Nguyễn.",
    year: 1993,
    location: "Thừa Thiên Huế",
    image: "https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T10/QuanTheDiTichCoDoHue-1.jpg"
  },
  {
    name: "Phố cổ Hội An",
    type: "Di sản Văn hoá",
    category: "Di sản Thế giới",
    description: "Phố cổ Hội An là một đô thị cổ nổi tiếng với kiến trúc độc đáo kết hợp giữa văn hóa Việt Nam, Trung Hoa, Nhật Bản và phương Tây. Nơi đây từng là một thương cảng sầm uất.",
    year: 1999,
    location: "Quảng Nam",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/10/6/1101769/Hoi-An-22.jpeg"
  },
  {
    name: "Thánh địa Mỹ Sơn",
    type: "Di sản Văn hoá",
    category: "Di sản Thế giới",
    description: "Thánh địa Mỹ Sơn là quần thể đền tháp Chăm Pa cổ xưa nhất và quan trọng nhất của vương quốc Chăm Pa, được xây dựng từ thế kỷ 4 đến thế kỷ 13.",
    year: 1999,
    location: "Quảng Nam",
    image: "https://fvgtravel.com.vn/uploads/up/root/editor/2025/05/20/19/33/w1230/tha1747722808_5733.jpg"
  },
  {
    name: "Khu Di tích Trung tâm Hoàng thành Thăng Long",
    type: "Di sản Văn hoá",
    category: "Di sản Thế giới",
    description: "Hoàng thành Thăng Long là quần thể di tích gắn với lịch sử kinh thành Thăng Long - Hà Nội, thể hiện sự phát triển liên tục của văn hóa Việt Nam qua hơn 1000 năm.",
    year: 2010,
    location: "Hà Nội",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/7/1189286/Anh-Hoang-Thanh-Than-11.jpg"
  },
  {
    name: "Thành nhà Hồ",
    type: "Di sản Văn hoá",
    category: "Di sản Thế giới",
    description: "Thành nhà Hồ là một công trình kiến trúc độc đáo được xây dựng bằng đá lớn, là kinh đô của nước Đại Việt dưới triều Hồ (1400-1407).",
    year: 2011,
    location: "Thanh Hóa",
    image: "https://image.sggp.org.vn/1200x630/Uploaded/2025/lcgkcwvo/2023_11_14/1-9587.jpg.webp"
  },
  
  // Di sản Thế giới - Di sản Thiên nhiên
  {
    name: "Vườn Quốc gia Phong Nha-Kẻ Bàng",
    type: "Di sản Thiên nhiên",
    category: "Di sản Thế giới",
    description: "Vườn Quốc gia Phong Nha - Kẻ Bàng nổi tiếng với hệ thống hang động đá vôi lớn nhất thế giới, bao gồm hang Sơn Đoòng - hang động lớn nhất thế giới. Được UNESCO công nhận năm 2003 và tái công nhận năm 2015.",
    year: 2003,
    location: "Quảng Bình",
    image: "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TV/vuon-quoc-gia-phong-nha-ke-bang/vuon-quoc-gia-phong-nha-ke-bang.jpg"
  },
  {
    name: "Vịnh Hạ Long",
    type: "Di sản Thiên nhiên",
    category: "Di sản Thế giới",
    description: "Vịnh Hạ Long là một trong những kỳ quan thiên nhiên nổi tiếng nhất thế giới với hàng nghìn đảo đá vôi và hang động kỳ vĩ. Được UNESCO công nhận năm 1994, tái công nhận năm 2000 và 2011.",
    year: 1994,
    location: "Quảng Ninh",
    image: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh1_1625911963.jpg"
  },
  
  // Di sản Thế giới - Di sản Hỗn hợp
  {
    name: "Quần thể Danh thắng Tràng An",
    type: "Di sản Hỗn hợp",
    category: "Di sản Thế giới",
    description: "Quần thể danh thắng Tràng An là di sản hỗn hợp đầu tiên của Việt Nam, kết hợp giá trị văn hóa và thiên nhiên. Nơi đây có cảnh quan karst tuyệt đẹp và các di tích khảo cổ học quan trọng. Đây cũng là Di sản Hỗn hợp duy nhất tại Việt Nam và khu vực Đông Nam Á.",
    year: 2014,
    location: "Ninh Bình",
    image: "https://images.vietnamtourism.gov.vn/vn/images/2021/trang_an.jpg"
  },
  
  // Di sản Văn hóa Phi vật thể
  {
    name: "Nghệ thuật Bài chòi Trung bộ",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Nghệ thuật Bài chòi Trung Bộ là một loại hình nghệ thuật dân gian đặc trưng của vùng Trung Bộ, kết hợp giữa hát, diễn và trò chơi dân gian. Bài chòi được biểu diễn trong các dịp lễ hội, Tết Nguyên Đán.",
    year: 2017,
    location: "Trung Bộ",
    image: "https://danangfantasticity.com/wp-content/uploads/2025/08/nghe-thuat-bai-choi-trung-bo-viet-nam-da-nang-05.jpg"
  },
  {
    name: "Nhã nhạc Cung đình Huế",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Nhã nhạc cung đình Huế là thể loại nhạc cung đình thính phòng của Việt Nam, được biểu diễn trong các dịp lễ hội, nghi lễ của triều đình nhà Nguyễn. Đây là di sản phi vật thể đầu tiên của Việt Nam được UNESCO công nhận.",
    year: 2003,
    location: "Thừa Thiên Huế",
    image: "https://static.vinwonders.com/production/optimize_nha-nhac-cung-dinh-hue-topbanner_optimized.jpg"
  },
  {
    name: "Không gian Văn hóa Cồng chiêng Tây Nguyên",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Không gian văn hóa Cồng chiêng Tây Nguyên là di sản văn hóa phi vật thể đại diện của các dân tộc Tây Nguyên. Cồng chiêng gắn liền với đời sống tinh thần, lễ hội và các nghi thức truyền thống.",
    year: 2005,
    location: "Tây Nguyên",
    image: "https://images2.thanhnien.vn/528068263637045248/2023/11/28/anh-2-17011799669612016075586.jpg"
  },
  {
    name: "Dân ca Quan họ Bắc Ninh",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Dân ca Quan họ Bắc Ninh là loại hình dân ca độc đáo của vùng Kinh Bắc, được thể hiện qua hình thức hát đối đáp giữa các liền anh, liền chị. Quan họ là di sản văn hóa phi vật thể đại diện của nhân loại.",
    year: 2009,
    location: "Bắc Ninh, Bắc Giang",
    image: "https://tapchicongsan.org.vn/documents/20182/408068301/Tac+pham+Lop+hoc+hat+quan+ho+-+Tac+gia+Nguyen+Manh+Linh+%28Tuyen+Quang%29.jpg/2169726b-29dd-46e1-9103-26e311de11a2?t=1725955321000"
  },
  {
    name: "Ca Trù",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Ca trù là một loại hình nghệ thuật dân gian truyền thống của Việt Nam, kết hợp giữa hát, đàn và trống. Ca trù từng phổ biến ở miền Bắc Việt Nam và được coi là một trong những thể loại âm nhạc tinh tế nhất.",
    year: 2009,
    location: "Miền Bắc Việt Nam",
    image: "https://baochauelec.com/cdn/images/tin-tuc/ca-tru.jpg"
  },
  {
    name: "Hội Gióng ở đền Sóc và đền Phù Đổng",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Hội Gióng là lễ hội truyền thống lớn của Hà Nội, tưởng nhớ Thánh Gióng - một trong tứ bất tử của tín ngưỡng dân gian Việt Nam. Lễ hội được tổ chức tại đền Phù Đổng và đền Sóc.",
    year: 2010,
    location: "Hà Nội",
    image: "https://mia.vn/media/uploads/blog-du-lich/hoi-giong-soc-son-dac-sac-di-san-van-hoa-phi-vat-the-duoc-unesco-cong-nhan-1639044254.jpg"
  },
  {
    name: "Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Tín ngưỡng thờ cúng Hùng Vương là một tín ngưỡng dân gian độc đáo của người Việt, thể hiện lòng biết ơn đối với các Vua Hùng - những người có công dựng nước. Lễ hội được tổ chức tại Đền Hùng, Phú Thọ.",
    year: 2012,
    location: "Phú Thọ",
    image: "https://lh3.googleusercontent.com/proxy/IRXm9OfXTEeGd-5Pvp5ITIdMIKnhQUFvI5hj3m0Ctl_bBqyKikjpxtks5GNzYomqyqMZalteiL0JVZXePFtbHU7-MXcdNOZjJAG7lft4rLZ_QODBJp0a0WlsQLFFzo2zXALQZ3BhN4x63Nm2teU"
  },
  {
    name: "Nghệ thuật Đờn ca Tài tử Nam bộ",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Đờn ca tài tử Nam Bộ là loại hình nghệ thuật dân gian đặc trưng của vùng Nam Bộ, kết hợp giữa đàn và ca. Đây là một trong những di sản văn hóa phi vật thể đại diện của nhân loại.",
    year: 2013,
    location: "Nam Bộ",
    image: "https://media.baovanhoa.vn/zoom/1000/uploaded/nghiemthanh/2025_01_28/don_ca_tai_tu_EZAC.jpg"
  },
  {
    name: "Hát Ví-Giặm Nghệ Tĩnh",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Hát Ví-Giặm Nghệ Tĩnh là loại hình dân ca độc đáo của vùng Nghệ An và Hà Tĩnh, thể hiện tình cảm, tâm tư của người dân lao động qua các làn điệu dân ca truyền thống.",
    year: 2014,
    location: "Nghệ An, Hà Tĩnh",
    image: "https://static.tuoitre.vn/tto/i/s626/2014/11/28/2Pc7A6As.jpg"
  },
  {
    name: "Nghi lễ và trò chơi kéo co",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Nghi lễ và trò chơi kéo co là một di sản văn hóa phi vật thể đa quốc gia, được chia sẻ giữa Việt Nam, Campuchia, Hàn Quốc và Philippines. Ở Việt Nam, kéo co được tổ chức trong các lễ hội truyền thống.",
    year: 2015,
    location: "Nhiều tỉnh thành",
    image: "https://thanhnien.mediacdn.vn/Uploaded/trandong/2015_12_03/keo-co_YSFG.jpg?width=500"
  },
  {
    name: "Thực hành tín ngưỡng thờ Mẫu tam phủ",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Thực hành Tín ngưỡng thờ Mẫu Tam phủ là một tín ngưỡng dân gian độc đáo của người Việt, thể hiện sự tôn thờ các nữ thần (Mẫu) trong hệ thống tín ngưỡng dân gian. Tín ngưỡng này gắn liền với nghệ thuật hầu đồng.",
    year: 2016,
    location: "Nhiều tỉnh thành",
    image: "https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/08/12/vna-potal-tin-nguong-tho-mau-tam-phu-cua-nguoi-viet-duoc-unesco-cong-nhan-la-di-san-van-hoa-phi-vat-the-dai-dien-cua-nhan-loai-194056611-113677112-14-38-13.jpg"
  },
  {
    name: "Hát Xoan ở Phú Thọ",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Hát Xoan là loại hình dân ca độc đáo của vùng Phú Thọ, gắn liền với tín ngưỡng thờ cúng Hùng Vương. Hát Xoan được biểu diễn trong các dịp lễ hội, đặc biệt là lễ hội Đền Hùng.",
    year: 2011,
    location: "Phú Thọ",
    image: "https://file3.qdnd.vn/data/images/0/2019/12/04/tuanson/4.jpg"
  },
  {
    name: "Thực hành Then Tày, Nùng, Thái",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Thực hành Then là một nghi lễ tín ngưỡng độc đáo của các dân tộc Tày, Nùng, Thái ở miền Bắc Việt Nam. Then là một loại hình nghệ thuật tổng hợp bao gồm hát, múa, nhạc và nghi lễ tâm linh.",
    year: 2019,
    location: "Tây Bắc, Đông Bắc",
    image: "https://toquoc.mediacdn.vn/2019/12/13/then-1576191029934287865086.jpg"
  },
  {
    name: "Nghệ thuật Xòe Thái",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Nghệ thuật Xòe Thái là điệu múa truyền thống của dân tộc Thái ở Tây Bắc Việt Nam. Xòe Thái không chỉ là điệu múa mà còn là biểu tượng văn hóa, thể hiện tinh thần đoàn kết và gắn kết cộng đồng.",
    year: 2021,
    location: "Tây Bắc",
    image: "https://thanhnien.mediacdn.vn/Uploaded/kieutrinh/2021_12_15/xoethai1-8315.jpg"
  },
  {
    name: "Nghề làm Gốm của người Chăm",
    type: "Phi vật thể",
    category: "Di sản Văn hóa Phi vật thể",
    description: "Nghề làm Gốm của người Chăm là một nghề thủ công truyền thống độc đáo, được truyền từ đời này sang đời khác trong cộng đồng người Chăm. Gốm Chăm nổi tiếng với kỹ thuật làm gốm không dùng bàn xoay.",
    year: 2022,
    location: "Bình Thuận, Ninh Thuận",
    image: "https://thanhnien.mediacdn.vn/Uploaded/kieutrinh/2022_11_29/gomcham1-4074.jpg   "
  },
  
  // Di sản Tư liệu Thế giới
  {
    name: "Mộc bản triều Nguyễn",
    type: "Tư liệu Thế giới",
    category: "Di sản Văn hóa Tư liệu",
    description: "Mộc bản triều Nguyễn là khối tài liệu đặc biệt quý hiếm, gồm các bản khắc gỗ chữ Hán và chữ Nôm được sử dụng để in ấn các sách, văn bản trong suốt thời kỳ nhà Nguyễn (1802-1945). Được lưu trữ tại Trung tâm Lưu trữ Quốc gia IV, Đà Lạt-Lâm Đồng.",
    year: 2009,
    location: "Đà Lạt, Lâm Đồng",
    image: "https://toquoc.mediacdn.vn/2019/1/31/moc-ban-2-15489278013501706746235-crop-15489290579141800893559.jpg"
  },
  {
    name: "Bia Tiến sĩ tại Văn Miếu-Quốc Tử Giám",
    type: "Tư liệu Thế giới",
    category: "Di sản Văn hóa Tư liệu",
    description: "Bia đá các khoa thi Tiến sĩ là những tấm bia đá ghi danh các vị Tiến sĩ đỗ đạt trong các kỳ thi khoa cử dưới triều Lê và Mạc (1442-1779). Các bia đá này được đặt tại Văn Miếu - Quốc Tử Giám, Hà Nội.",
    year: 2011,
    location: "Hà Nội",
    image: "https://yootek.vn/wp-content/uploads/2025/05/gioi-thieuj-bia-tien-si-.jpg"
  },
  {
    name: "Châu bản triều Nguyễn",
    type: "Tư liệu Thế giới",
    category: "Di sản Văn hóa Tư liệu",
    description: "Châu bản triều Nguyễn là các văn bản hành chính của triều đình nhà Nguyễn, bao gồm các chỉ dụ, sắc dụ, tấu, phúc của các vua Nguyễn. Được lưu trữ tại Trung tâm Lưu trữ quốc gia I, số 18 Vũ Phạm Hàm, phường Yên Hòa, quận Cầu Giấy, Hà Nội.",
    year: 2017,
    location: "Hà Nội",
    image: "https://images.vietnamtourism.gov.vn/vn/images/2014/Chaubantrieunguyen.jpg"
  },
  
  // Di sản Tư liệu khu vực châu Á-Thái Bình Dương
  {
    name: "Mộc bản chùa Vĩnh Nghiêm",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Mộc bản chùa Vĩnh Nghiêm là khối mộc bản kinh Phật được khắc tại chùa Vĩnh Nghiêm (Bắc Giang) từ thế kỷ 16 đến thế kỷ 20. Đây là bộ sưu tập mộc bản kinh Phật lớn nhất và lâu đời nhất của Việt Nam.",
    year: 2012,
    location: "Bắc Giang",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/4/7/1176738/9-VHTT-996267-01.jpg"
  },
  {
    name: "Thơ văn trên kiến trúc cung đình Huế",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Thơ văn trên kiến trúc cung đình Huế là hệ thống các bài thơ, văn được khắc trên các công trình kiến trúc trong Hoàng thành Huế, thể hiện giá trị văn hóa, nghệ thuật và lịch sử của triều Nguyễn.",
    year: 2016,
    location: "Thừa Thiên Huế",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/V%C4%83n_th%C6%A1_ch%E1%BA%A1m_kh%E1%BA%AFc_trong_%C4%91i%E1%BB%87n_Th%C3%A1i_H%C3%B2a.jpg"
  },
  {
    name: "Mộc bản trường học Phúc Giang",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Mộc bản trường học Phúc Giang là bộ sưu tập mộc bản được sử dụng để in sách giáo khoa tại trường học Phúc Giang, một trong những trường học tư thục nổi tiếng của Việt Nam thời phong kiến.",
    year: 2016,
    location: "Hà Tĩnh",
    image: "https://file.qdnd.vn/data/images/0/2016/09/25/nguyenthao/moc%20ban%20truong%20hoc%20phuc%20giang%202.jpg?w=578"
  },
  {
    name: "Hoàng hoa sứ trình đồ (Hành trình đi sứ Trung Hoa)",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Hoàng hoa sứ trình đồ là bản đồ ghi lại hành trình đi sứ Trung Hoa của các sứ thần Việt Nam, thể hiện mối quan hệ ngoại giao giữa Việt Nam và Trung Hoa trong lịch sử.",
    year: 2018,
    location: "Hà Tĩnh",
    image: "https://diachivietnam.vn/uploads/article/hoang-hoa-su-trinh-do-1712562810.jpg"
  },
  {
    name: "Bia Ma nhai tại danh thắng Ngũ Hành Sơn, Đà Nẵng",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Bia Ma nhai tại danh thắng Ngũ Hành Sơn là hệ thống các bia đá được khắc trên vách đá tại khu danh thắng Ngũ Hành Sơn, ghi lại các bài thơ, văn bia có giá trị lịch sử và văn hóa.",
    year: 2022,
    location: "Đà Nẵng",
    image: "https://danangfantasticity.com/wp-content/uploads/2025/08/bia-ma-nhai-tai-danh-thang-ngu-hanh-son-da-nang-02.jpg"
  },
  {
    name: "Văn bản Hán Nôm làng Trường Lưu, Hà Tĩnh (1689-1943)",
    type: "Tư liệu khu vực",
    category: "Di sản Văn hóa Tư liệu",
    description: "Văn bản Hán Nôm làng Trường Lưu là bộ sưu tập các văn bản được viết bằng chữ Hán và chữ Nôm tại làng Trường Lưu, Hà Tĩnh, ghi lại lịch sử, văn hóa và đời sống của cộng đồng địa phương từ năm 1689 đến 1943.",
    year: 2022,
    location: "Hà Tĩnh",
    image: "https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2022/12/1/mot-trong-so-bo-suu-tap-van-ban-han-nom-lang-truong-luu1-2-1669885172355508302726.jpeg"
  },
  
  // Khu Dự trữ Sinh quyển Thế giới
  {
    name: "Khu Dự trữ Sinh quyển Rừng ngập mặn Cần Giờ",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Rừng ngập mặn Cần Giờ là hệ sinh thái rừng ngập mặn lớn nhất và đa dạng nhất của Việt Nam, có vai trò quan trọng trong bảo vệ môi trường và đa dạng sinh học.",
    year: 2000,
    location: "TP. Hồ Chí Minh",
    image: "https://lasiestahotels.com/saigon/wp-content/uploads/2023/02/batch_mangrove-forest-1.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Đồng Nai",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Đồng Nai là một trong những khu bảo tồn đa dạng sinh học quan trọng của Việt Nam, bao gồm các hệ sinh thái rừng nhiệt đới và các loài động thực vật quý hiếm.",
    year: 2011,
    location: "Đồng Nai",
    image: "https://www.thiennhien.net/wp-content/uploads/2022/05/0905_khudutrusinhcanhDN3.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Cát Bà",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Cát Bà là một quần đảo với hệ sinh thái biển và rừng đa dạng, nổi tiếng với loài voọc Cát Bà quý hiếm và các hệ sinh thái biển phong phú.",
    year: 2004,
    location: "TP. Hải Phòng",
    image: "https://special.vietnamplus.vn/wp-content/uploads/2021/09/Catba1-2400x1600.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Châu thổ sông Hồng",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Châu thổ sông Hồng bao gồm các hệ sinh thái đất ngập nước, rừng ngập mặn và các vùng đất canh tác, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển bền vững.",
    year: 2004,
    location: "Thái Bình, Nam Định, Ninh Bình",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ch%C3%A2u_th%E1%BB%95_s%C3%B4ng_H%E1%BB%93ng_1.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển ven biển và biển đảo Kiên Giang",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển ven biển và biển đảo Kiên Giang bao gồm các hệ sinh thái biển, đảo và ven biển đa dạng, có vai trò quan trọng trong bảo tồn đa dạng sinh học biển và phát triển du lịch sinh thái.",
    year: 2006,
    location: "Kiên Giang",
    image: "https://diachivietnam.vn/uploads/images/khu-du-tru-sinh-quyen-ven-bien-va-bien-dao-kien-giang-1.png"
  },
  {
    name: "Khu Dự trữ Sinh quyển miền tây Nghệ An",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển miền tây Nghệ An là một khu vực có hệ sinh thái rừng nhiệt đới đa dạng, bao gồm các loài động thực vật quý hiếm và có vai trò quan trọng trong bảo tồn đa dạng sinh học.",
    year: 2007,
    location: "Nghệ An",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Annamite_range_pu_mat_2007_05.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Mũi Cà Mau",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Mũi Cà Mau là điểm cực Nam của Việt Nam, có hệ sinh thái rừng ngập mặn và đất ngập nước đa dạng, có vai trò quan trọng trong bảo vệ môi trường và đa dạng sinh học.",
    year: 2009,
    location: "Cà Mau",
    image: "https://nbca.gov.vn/wp-content/uploads/2024/02/camau8.png"
  },
  {
    name: "Khu Dự trữ Sinh quyển Cù Lao Chàm",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Cù Lao Chàm là một quần đảo với hệ sinh thái biển và rừng đa dạng, nổi tiếng với các rạn san hô và hệ sinh thái biển phong phú, có vai trò quan trọng trong bảo tồn đa dạng sinh học biển.",
    year: 2009,
    location: "Quảng Nam",
    image: "https://chamdiscovery.com/wp-content/uploads/2022/10/53DCDA12-9C08-4874-B36F-8A9DE10EC81E.png"
  },
  {
    name: "Khu Dự trữ Sinh quyển Langbian",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Langbian bao gồm các hệ sinh thái rừng nhiệt đới và cao nguyên đa dạng, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển bền vững.",
    year: 2015,
    location: "Lâm Đồng",
    image: "https://images.vietnamtourism.gov.vn/vn/images/2015/vqgiabidoup.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Núi Chúa",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Núi Chúa là một khu vực có hệ sinh thái rừng khô hạn đặc trưng của vùng Nam Trung Bộ, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển bền vững.",
    year: 2021,
    location: "Ninh Thuận",
    image: "https://nbca.gov.vn/wp-content/uploads/2023/10/Nui-chua_277805068-695766825208534-6672-9770-3440-1649930015.jpg"
  },
  {
    name: "Khu Dự trữ Sinh quyển Cao nguyên Kon Hà Nừng",
    type: "Sinh quyển",
    category: "Khu Dự trữ Sinh quyển Thế giới",
    description: "Khu Dự trữ Sinh quyển Cao nguyên Kon Hà Nừng là một khu vực có hệ sinh thái rừng và cao nguyên đa dạng, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển bền vững.",
    year: 2021,
    location: "Gia Lai",
    image: "https://vnanet.vn/Data/Articles/2021/09/15/5668798/vna_potal_khu_du_tru_sinh_quyen_cao_nguyen_kon_ha_nung_duoc_dua_ra_de_unesco_xem_xet_cong_nhan_la_khu_du_tru_sinh_uuyen_cua_the_gioi_stand.jpg"
  },
  
  // Công viên Địa chất Toàn cầu UNESCO
  {
    name: "Công viên Địa chất Toàn cầu Cao nguyên đá Đồng Văn",
    type: "Địa chất",
    category: "Công viên Địa chất Toàn cầu UNESCO",
    description: "Công viên Địa chất Toàn cầu Cao nguyên đá Đồng Văn là một khu vực có địa chất đá vôi độc đáo, với các cảnh quan karst tuyệt đẹp và các di tích địa chất có giá trị khoa học cao.",
    year: 2010,
    location: "Hà Giang",
    image: "https://media.baovanhoa.vn/zoom/700_500/Portals/0/EasyGalleryImages/1/70432/IMG_1829.jpeg"
  },
  {
    name: "Công viên Địa chất Toàn cầu Non nước Cao Bằng",
    type: "Địa chất",
    category: "Công viên Địa chất Toàn cầu UNESCO",
    description: "Công viên Địa chất Toàn cầu Non nước Cao Bằng là một khu vực có địa chất đa dạng với các cảnh quan thiên nhiên tuyệt đẹp, các hang động và các di tích địa chất có giá trị khoa học và du lịch cao.",
    year: 2018,
    location: "Cao Bằng",
    image: "https://images.baodantoc.vn/uploads/2024/Thang-8/Ngay-16/CUONG/2a.jpg"
  },
  {
    name: "Công viên Địa chất Toàn cầu Đắk Nông",
    type: "Địa chất",
    category: "Công viên Địa chất Toàn cầu UNESCO",
    description: "Công viên Địa chất Toàn cầu Đắk Nông là một khu vực có địa chất núi lửa độc đáo, với các cảnh quan thiên nhiên tuyệt đẹp, các hang động và các di tích địa chất có giá trị khoa học và du lịch cao.",
    year: 2020,
    location: "Đắk Nông",
    image: "https://consosukien.vn/pic/News/Nam_2021/kham-pha-cong-vien-dia-chat-toan-cau-dak-nong.jpg"
  },
  
  // Khu Ramsar
  {
    name: "Vườn Quốc gia Xuân Thủy",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vườn Quốc gia Xuân Thủy là một khu vực đất ngập nước quan trọng, có vai trò quan trọng trong bảo tồn đa dạng sinh học và là nơi dừng chân của nhiều loài chim di cư quý hiếm.",
    year: 1989,
    location: "Nam Định",
    image: "https://sodulich.ninhbinh.gov.vn/uploads/images/SAN%20chim%20VQG%20Xuab%20Thu%E1%BB%B7%20--%20huy%E1%BB%87n%20Giao%20Thu%E1%BB%B7%2C%20t%E1%BB%89nh%20Nam%20D%E1%BB%8Bnh-%20Tr%E1%BA%A7n%20Hung.JPG"
  },
  {
    name: "Vùng đất ngập nước Bầu Sấu thuộc Vườn Quốc gia Cát Tiên",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vùng đất ngập nước Bầu Sấu là một khu vực đất ngập nước quan trọng trong Vườn Quốc gia Cát Tiên, có vai trò quan trọng trong bảo tồn đa dạng sinh học và là nơi sinh sống của nhiều loài động thực vật quý hiếm.",
    year: 2005,
    location: "Đồng Nai",
    image: "https://imgnvsk.vnanet.vn/MediaUpload/Medium/2023/11/16/316-17-17-25.png"
  },
  {
    name: "Hồ Ba Bể",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Hồ Ba Bể là một hồ nước ngọt tự nhiên lớn nhất miền Bắc Việt Nam, có cảnh quan thiên nhiên tuyệt đẹp và có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển du lịch sinh thái.",
    year: 2011,
    location: "Bắc Kạn",
    image: "https://cdn3.ivivu.com/2024/09/ho-ba-be-iVIVU-e1725613566982.jpg"
  },
  {
    name: "Vườn Quốc gia Tràm Chim",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vườn Quốc gia Tràm Chim là một khu vực đất ngập nước quan trọng, nổi tiếng với loài sếu đầu đỏ quý hiếm và có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển du lịch sinh thái.",
    year: 2012,
    location: "Đồng Tháp",
    image: "https://thamhiemmekong.com/wp-content/uploads/2019/12/vuon-quoc-gia-tram-chim-dong-thap-4.jpg"
  },
  {
    name: "Vườn Quốc gia Mũi Cà Mau",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vườn Quốc gia Mũi Cà Mau là một khu vực đất ngập nước quan trọng tại điểm cực Nam của Việt Nam, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển du lịch sinh thái.",
    year: 2013,
    location: "Cà Mau",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Muicamau.jpg"
  },
  {
    name: "Vườn Quốc gia Côn Đảo",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vườn Quốc gia Côn Đảo là một quần đảo với hệ sinh thái biển và rừng đa dạng, có vai trò quan trọng trong bảo tồn đa dạng sinh học biển và phát triển du lịch sinh thái.",
    year: 2014,
    location: "Bà Rịa - Vũng Tàu",
    image: "https://ik.imagekit.io/tvlk/blog/2023/09/vuon-quoc-gia-con-dao-5.jpeg"
  },
  {
    name: "Khu Bảo tồn đất ngập nước Láng Sen",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Khu Bảo tồn đất ngập nước Láng Sen là một khu vực đất ngập nước quan trọng, có vai trò quan trọng trong bảo tồn đa dạng sinh học và là nơi sinh sống của nhiều loài động thực vật quý hiếm.",
    year: 2015,
    location: "Long An",
    image: "https://ik.imagekit.io/tvlk/blog/2024/02/lang-sen-11.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"
  },
  {
    name: "Vườn Quốc gia U Minh Thượng",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Vườn Quốc gia U Minh Thượng là một khu vực rừng tràm và đất ngập nước quan trọng, có vai trò quan trọng trong bảo tồn đa dạng sinh học và phát triển du lịch sinh thái.",
    year: 2016,
    location: "Kiên Giang",
    image: "https://statics.vinpearl.com/vuon-quoc-gia-u-minh-thuong-0_1706158731.jpg"
  },
  {
    name: "Khu Bảo tồn Thiên nhiên đất ngập nước Vân Long",
    type: "Ramsar",
    category: "Khu Ramsar",
    description: "Khu Bảo tồn Thiên nhiên đất ngập nước Vân Long là một khu vực đất ngập nước quan trọng, nổi tiếng với loài voọc quần đùi trắng quý hiếm và có cảnh quan thiên nhiên tuyệt đẹp.",
    year: 2019,
    location: "Ninh Bình",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/6/11/738431/4.jpg"
  }
]
