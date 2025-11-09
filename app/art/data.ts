export interface Art {
  name: string
  category: string
  description: string
  origin: string
  image: string
}

export const ART_ITEMS: Art[] = [
  // Nhạc cụ dân tộc
  {
    name: "Đàn Tranh",
    category: "Nhạc cụ dân tộc",
    description: "Đàn tranh là nhạc cụ dây gảy của Việt Nam, có 16-25 dây. Đàn tranh được sử dụng trong nhiều thể loại âm nhạc truyền thống như nhạc cung đình, ca trù, đờn ca tài tử.",
    origin: "Việt Nam",
    image: "https://bizweb.dktcdn.net/thumb/grande/100/333/188/products/dan-tranh-co-bao-nhieu-day-0-3-f853dc23-8fdf-437f-a8c9-238f34a224d6.jpg?v=1601689688983"
  },
  {
    name: "Đàn Bầu",
    category: "Nhạc cụ dân tộc",
    description: "Đàn bầu là nhạc cụ độc đáo của Việt Nam, chỉ có một dây duy nhất nhưng có thể tạo ra nhiều âm thanh khác nhau. Đàn bầu có âm sắc trầm ấm, mượt mà, rất đặc trưng.",
    origin: "Việt Nam",
    image: "https://nhaccumoza.com/mt-content/uploads/2020/09/gioi-thieu-ve-nhac-cu-dan-bau-cua-viet-nam.jpg"
  },
  {
    name: "Đàn Nguyệt",
    category: "Nhạc cụ dân tộc",
    description: "Đàn nguyệt (đàn kìm) là nhạc cụ dây gảy có 2 dây, thân đàn hình tròn như mặt trăng. Đàn nguyệt được sử dụng trong nhiều thể loại âm nhạc truyền thống Việt Nam.",
    origin: "Việt Nam",
    image: "https://tongkhonhaccu.com/Data/upload/images/Product/nh%E1%BA%A1c%20c%E1%BB%A5%20d%C3%A2n%20t%E1%BB%99c/%C4%90%C3%A0n%20Nguy%E1%BB%87t%20g%E1%BB%97%20Mun%20Ph%C3%ADm%20G%E1%BB%97/dan-nguyet-go-mun.jpg"
  },
  {
    name: "Đàn Nhị",
    category: "Nhạc cụ dân tộc",
    description: "Đàn nhị là nhạc cụ dây kéo có 2 dây, được sử dụng rộng rãi trong âm nhạc truyền thống Việt Nam. Đàn nhị có âm sắc cao, trong trẻo, thường được dùng trong dàn nhạc dân tộc.",
    origin: "Việt Nam",
    image: "https://media.dolenglish.vn/PUBLIC/MEDIA/28e72f8e-2503-4074-a970-1316947a69a5.jpg"
  },
  {
    name: "Đàn Tỳ Bà",
    category: "Nhạc cụ dân tộc",
    description: "Đàn tỳ bà là nhạc cụ dây gảy có 4 dây, có nguồn gốc từ Trung Hoa nhưng đã được Việt Nam hóa. Đàn tỳ bà được sử dụng trong nhạc cung đình và các thể loại âm nhạc truyền thống.",
    origin: "Việt Nam",
    image: "https://nhacculinhnhi.com/wp-content/uploads/2023/09/dan-ty-ba-1.jpg"
  },
  {
    name: "Sáo Trúc",
    category: "Nhạc cụ dân tộc",
    description: "Sáo trúc là nhạc cụ thổi bằng tre, trúc, có âm thanh trong trẻo, du dương. Sáo trúc được sử dụng rộng rãi trong âm nhạc dân gian và hiện đại Việt Nam.",
    origin: "Việt Nam",
    image: "https://saotrucviet.com/content/images/thumbs/0001411_sao-truc-gia-re-m5-nua-bac_650.jpeg"
  },
  {
    name: "Cồng Chiêng",
    category: "Nhạc cụ dân tộc",
    description: "Cồng chiêng là nhạc cụ gõ bằng đồng của các dân tộc Tây Nguyên. Cồng chiêng không chỉ là nhạc cụ mà còn là biểu tượng văn hóa, gắn liền với đời sống tinh thần của người Tây Nguyên.",
    origin: "Tây Nguyên",
    image: "https://images2.thanhnien.vn/528068263637045248/2023/11/28/anh-2-17011799669612016075586.jpg"
  },
  {
    name: "Đàn Đáy",
    category: "Nhạc cụ dân tộc",
    description: "Đàn đáy là nhạc cụ dây gảy đặc trưng của ca trù, có 3 dây và cần đàn rất dài. Đàn đáy có âm sắc trầm, sâu lắng, tạo nên nét đặc trưng của nghệ thuật ca trù.",
    origin: "Miền Bắc",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Chi%C3%AAng_%C4%91%E1%BB%93ng.jpg/330px-Chi%C3%AAng_%C4%91%E1%BB%93ng.jpg"
  },
  {
    name: "Trống Cơm",
    category: "Nhạc cụ dân tộc",
    description: "Trống cơm là nhạc cụ gõ truyền thống của Việt Nam, được làm từ gỗ và da trâu. Trống cơm được sử dụng trong nhiều lễ hội và nghi thức truyền thống.",
    origin: "Việt Nam",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tr%E1%BB%91ng_c%C6%A1m_-_55cm.jpg"
  },
  {
    name: "Đàn Tam Thập Lục",
    category: "Nhạc cụ dân tộc",
    description: "Đàn tam thập lục là nhạc cụ dây gảy có 36 dây, được sử dụng trong nhạc cung đình và các thể loại âm nhạc truyền thống. Đàn có âm sắc trong trẻo, thanh thoát.",
    origin: "Việt Nam",
    image: "https://media.dolenglish.vn/PUBLIC/MEDIA/d3bfb0ad-3925-4162-980f-8af8112795e3.jpg"
  },
  
  // Sân khấu truyền thống
  {
    name: "Tuồng",
    category: "Sân khấu truyền thống",
    description: "Tuồng là loại hình sân khấu cổ điển của Việt Nam, có nguồn gốc từ miền Trung. Tuồng kết hợp giữa hát, múa, võ thuật và diễn xuất, thường diễn các vở về lịch sử, anh hùng dân tộc.",
    origin: "Miền Trung",
    image: "https://baochauelec.com/cdn/images/tin-tuc/hat-tuong-5.jpg"
  },
  {
    name: "Chèo",
    category: "Sân khấu truyền thống",
    description: "Chèo là loại hình sân khấu dân gian của miền Bắc Việt Nam, có tính chất hài hước, dí dỏm. Chèo thường diễn các vở về đời sống dân gian, tình yêu, gia đình với ngôn ngữ dân dã, gần gũi.",
    origin: "Miền Bắc",
    image: "https://dbnd.1cdn.vn/2023/02/06/images-2cae99c722739fd7811264aa2403900993eb37755c460b4db54e22b98d759dfaab975879e50109050cc2fe7b49432248-_anh-bai-vh.jpg"
  },
  {
    name: "Cải Lương",
    category: "Sân khấu truyền thống",
    description: "Cải lương là loại hình sân khấu truyền thống của miền Nam Việt Nam, kết hợp giữa hát và diễn xuất. Cải lương có âm nhạc đặc trưng với đờn ca tài tử, thường diễn các vở về tình cảm, gia đình.",
    origin: "Miền Nam",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tu_duc_dang_roi.JPG"
  },
  {
    name: "Múa Rối Nước",
    category: "Sân khấu truyền thống",
    description: "Múa rối nước là nghệ thuật biểu diễn độc đáo của Việt Nam, diễn trên mặt nước. Các con rối được điều khiển bằng các cơ chế phức tạp dưới nước, tạo nên những màn trình diễn sinh động, hấp dẫn.",
    origin: "Đồng bằng Bắc Bộ",
    image: "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TA/MB/Water%20Puppet%20Show%20Hanoi/water-puppet-show-hanoi-thumb.jpg"
  },
  {
    name: "Hát Bội",
    category: "Sân khấu truyền thống",
    description: "Hát bội là loại hình sân khấu cổ điển của miền Nam, có nguồn gốc từ tuồng. Hát bội kết hợp hát, múa, võ thuật, thường diễn các vở về lịch sử, truyền thuyết với trang phục và hóa trang đặc trưng.",
    origin: "Miền Nam",
    image: "https://statics.vinpearl.com/hat-boi-binh-dinh-3_1716636323.jpg"
  },
  
  // Lễ hội
  {
    name: "Lễ hội Đền Hùng",
    category: "Lễ hội",
    description: "Lễ hội Đền Hùng là lễ hội lớn nhất của Việt Nam, tưởng nhớ các Vua Hùng - những người có công dựng nước. Lễ hội được tổ chức tại Đền Hùng, Phú Thọ vào ngày 10 tháng 3 âm lịch hàng năm.",
    origin: "Phú Thọ",
    image: "https://lh3.googleusercontent.com/proxy/IRXm9OfXTEeGd-5Pvp5ITIdMIKnhQUFvI5hj3m0Ctl_bBqyKikjpxtks5GNzYomqyqMZalteiL0JVZXePFtbHU7-MXcdNOZjJAG7lft4rLZ_QODBJp0a0WlsQLFFzo2zXALQZ3BhN4x63Nm2teU"
  },
  {
    name: "Lễ hội Chùa Hương",
    category: "Lễ hội",
    description: "Lễ hội Chùa Hương là lễ hội lớn của miền Bắc, diễn ra tại chùa Hương, Hà Nội. Lễ hội kéo dài từ tháng giêng đến tháng 3 âm lịch, thu hút hàng triệu du khách hành hương và tham quan.",
    origin: "Hà Nội",
    image: "https://cdn.hoabinhevents.com/hbt/wp-content/uploads/2025/01/13112338/le-hoi-chua-huong.jpg"
  },
  {
    name: "Lễ hội Gióng",
    category: "Lễ hội",
    description: "Lễ hội Gióng là lễ hội truyền thống lớn của Hà Nội, tưởng nhớ Thánh Gióng - một trong tứ bất tử của tín ngưỡng dân gian Việt Nam. Lễ hội được tổ chức tại đền Phù Đổng và đền Sóc với nhiều nghi thức độc đáo.",
    origin: "Hà Nội",
    image: "https://mia.vn/media/uploads/blog-du-lich/hoi-giong-soc-son-dac-sac-di-san-van-hoa-phi-vat-the-duoc-unesco-cong-nhan-1639044254.jpg"
  },
  {
    name: "Lễ hội Yên Tử",
    category: "Lễ hội",
    description: "Lễ hội Yên Tử là lễ hội Phật giáo lớn của miền Bắc, diễn ra tại Yên Tử, Quảng Ninh. Lễ hội kéo dài từ tháng giêng đến tháng 3 âm lịch, thu hút hàng triệu Phật tử và du khách hành hương.",
    origin: "Quảng Ninh",
    image: "https://statics.vinpearl.com/le-hoi-yen-tu-1_1638981935.jpg"
  },
  {
    name: "Lễ hội Cổ Loa",
    category: "Lễ hội",
    description: "Lễ hội Cổ Loa là lễ hội truyền thống của Hà Nội, tưởng nhớ An Dương Vương và công chúa Mỵ Châu. Lễ hội được tổ chức tại đền Cổ Loa với nhiều hoạt động văn hóa, thể thao dân gian.",
    origin: "Hà Nội",
    image: "https://statics.vinpearl.com/le-hoi-den-co-loa-1_1677848988.jpg"
  },
  {
    name: "Lễ hội Lim",
    category: "Lễ hội",
    description: "Lễ hội Lim là lễ hội lớn của Bắc Ninh, nổi tiếng với hội hát Quan họ. Lễ hội được tổ chức vào ngày 13 tháng giêng âm lịch, là nơi gặp gỡ của các liền anh, liền chị Quan họ.",
    origin: "Bắc Ninh",
    image: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/12/hoi-lim-thumbnail.jpg"
  },
  {
    name: "Lễ hội Đền Trần",
    category: "Lễ hội",
    description: "Lễ hội Đền Trần là lễ hội lớn của Nam Định, tưởng nhớ các vua Trần. Lễ hội được tổ chức vào tháng 8 âm lịch với nhiều nghi thức truyền thống và hoạt động văn hóa đặc sắc.",
    origin: "Nam Định",
    image: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/12/le-hoi-den-tran-thumbnail.jpg"
  },
  {
    name: "Lễ hội Chùa Bái Đính",
    category: "Lễ hội",
    description: "Lễ hội Chùa Bái Đính là lễ hội Phật giáo lớn của Ninh Bình, diễn ra từ tháng giêng đến hết tháng 3 âm lịch. Chùa Bái Đính là quần thể chùa lớn nhất Đông Nam Á, thu hút hàng triệu du khách.",
    origin: "Ninh Bình",
    image: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a398012a89f726f59c2d2f16171a2e599e3341f229ebdd0ee092c20a9f3a320d81de6/a5-7316.jpg"
  },
  {
    name: "Lễ hội Đền Ngọc Sơn",
    category: "Lễ hội",
    description: "Lễ hội Đền Ngọc Sơn là lễ hội truyền thống của Hà Nội, diễn ra tại đền Ngọc Sơn trên hồ Hoàn Kiếm. Lễ hội có nhiều hoạt động văn hóa, tín ngưỡng và là điểm đến yêu thích của người dân Thủ đô.",
    origin: "Hà Nội",
    image: "https://bvhttdl.mediacdn.vn/291773308735864832/2024/2/1/img8825-1706751863366-1706751863501223674657-1706754819016-17067548205661388816791.jpeg"
  },
  {
    name: "Lễ hội Katê",
    category: "Lễ hội",
    description: "Lễ hội Katê là lễ hội lớn nhất của người Chăm, được tổ chức vào tháng 7 lịch Chăm (khoảng tháng 9-10 dương lịch). Lễ hội có nhiều nghi thức tín ngưỡng, múa hát và các hoạt động văn hóa đặc sắc.",
    origin: "Ninh Thuận, Bình Thuận",
    image: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/12/le-hoi-kate-thumbnail.jpg"
  },
  
  // Múa dân gian
  {
    name: "Múa Lân",
    category: "Múa dân gian",
    description: "Múa lân là điệu múa truyền thống phổ biến trong các lễ hội, Tết Nguyên Đán của Việt Nam. Múa lân thường được biểu diễn bởi các vũ công trong trang phục lân, kết hợp với trống, chiêng tạo không khí vui tươi, nhộn nhịp.",
    origin: "Việt Nam",
    image: "https://i.ytimg.com/vi/cQM2OWkTpq4/maxresdefault.jpg"
  },
  {
    name: "Múa Rồng",
    category: "Múa dân gian",
    description: "Múa rồng là điệu múa truyền thống trong các lễ hội, Tết của Việt Nam. Múa rồng thường được biểu diễn bởi nhiều người cùng điều khiển một con rồng dài, tạo nên những màn trình diễn uyển chuyển, sống động.",
    origin: "Việt Nam",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785ef103012ced2a21df8e4194a2f81cf99102c9c17a2800dfa420d46b7f6fb119f3baf0aa24dfd57111e811a4b44265e78/mua-rong-3-8753.jpg"
  },
  {
    name: "Múa Xòe Thái",
    category: "Múa dân gian",
    description: "Múa Xòe Thái là điệu múa truyền thống của dân tộc Thái ở Tây Bắc Việt Nam. Xòe Thái không chỉ là điệu múa mà còn là biểu tượng văn hóa, thể hiện tinh thần đoàn kết và gắn kết cộng đồng.",
    origin: "Tây Bắc",
    image: "https://i.ytimg.com/vi/tvdvZJbQ5HQ/maxresdefault.jpg"
  },
  {
    name: "Múa Sạp",
    category: "Múa dân gian",
    description: "Múa sạp là điệu múa truyền thống của các dân tộc Tây Bắc, được biểu diễn bằng cách nhảy qua các thanh tre đập vào nhau theo nhịp. Múa sạp tạo không khí vui tươi, sôi động trong các lễ hội.",
    origin: "Tây Bắc",
    image: "https://media.baosonla.org.vn/public/hieupt/2024-03-04/66(1).jpg"
  },
  {
    name: "Múa Quạt",
    category: "Múa dân gian",
    description: "Múa quạt là điệu múa dân gian phổ biến của Việt Nam, thường được biểu diễn bởi các cô gái với chiếc quạt trong tay. Múa quạt có động tác uyển chuyển, nhẹ nhàng, thể hiện vẻ đẹp duyên dáng của người phụ nữ Việt.",
    origin: "Việt Nam",
    image: "https://vananhcorporation.vn/wp-content/uploads/2016/07/van-anh-event-to-chuc-su-kien-mua-dan-gian-mua-quat-vietnamese-dance-4-2.jpg"
  },
  {
    name: "Múa Nón",
    category: "Múa dân gian",
    description: "Múa nón là điệu múa dân gian đặc trưng của Việt Nam, sử dụng chiếc nón lá làm đạo cụ. Múa nón có động tác nhẹ nhàng, uyển chuyển, thể hiện vẻ đẹp truyền thống của người phụ nữ Việt Nam.",
    origin: "Việt Nam",
    image: "https://i.ytimg.com/vi/zJ4aK5j_OY4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gWCgqMA8=&rs=AOn4CLAHByEXtpFkkAl2BAH52Y9fe0zOKA"
  },
  
  // Nghệ thuật biểu diễn
  {
    name: "Hát Quan họ",
    category: "Nghệ thuật biểu diễn",
    description: "Hát Quan họ là loại hình dân ca độc đáo của vùng Kinh Bắc (Bắc Ninh, Bắc Giang), được thể hiện qua hình thức hát đối đáp giữa các liền anh, liền chị. Quan họ là di sản văn hóa phi vật thể đại diện của nhân loại.",
    origin: "Bắc Ninh, Bắc Giang",
    image: "https://statics.vinpearl.com/nhung-nghe-sy-hat-quan-ho-bac-ninh_1753065397.jpg"
  },
  {
    name: "Ca Trù",
    category: "Nghệ thuật biểu diễn",
    description: "Ca trù là một loại hình nghệ thuật dân gian truyền thống của Việt Nam, kết hợp giữa hát, đàn và trống. Ca trù từng phổ biến ở miền Bắc Việt Nam và được coi là một trong những thể loại âm nhạc tinh tế nhất.",
    origin: "Miền Bắc",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/2/23/786202/12-VHTT-583845-8-01.jpg"
  },
  {
    name: "Đờn ca Tài tử",
    category: "Nghệ thuật biểu diễn",
    description: "Đờn ca tài tử Nam Bộ là loại hình nghệ thuật dân gian đặc trưng của vùng Nam Bộ, kết hợp giữa đàn và ca. Đây là một trong những di sản văn hóa phi vật thể đại diện của nhân loại.",
    origin: "Nam Bộ",
    image: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef8fb8fb7ea441329a44fa70681e308851c480aae64229ea544bd9aded69e57a3c10585891dfdc0efc42155e2f65965814/t1510scl5-5409.jpg"
  },
  {
    name: "Hát Ví-Giặm",
    category: "Nghệ thuật biểu diễn",
    description: "Hát Ví-Giặm Nghệ Tĩnh là loại hình dân ca độc đáo của vùng Nghệ An và Hà Tĩnh, thể hiện tình cảm, tâm tư của người dân lao động qua các làn điệu dân ca truyền thống.",
    origin: "Nghệ An, Hà Tĩnh",
    image: "https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/18/8/2/anh-8.jpg"
  },
  {
    name: "Hát Xoan",
    category: "Nghệ thuật biểu diễn",
    description: "Hát Xoan là loại hình dân ca độc đáo của vùng Phú Thọ, gắn liền với tín ngưỡng thờ cúng Hùng Vương. Hát Xoan được biểu diễn trong các dịp lễ hội, đặc biệt là lễ hội Đền Hùng.",
    origin: "Phú Thọ",
    image: "https://bvhttdl.mediacdn.vn/documents/491813/882271/Xoan+15+-+1183.jpg"
  },
  {
    name: "Hát Then",
    category: "Nghệ thuật biểu diễn",
    description: "Thực hành Then là một nghi lễ tín ngưỡng độc đáo của các dân tộc Tày, Nùng, Thái ở miền Bắc Việt Nam. Then là một loại hình nghệ thuật tổng hợp bao gồm hát, múa, nhạc và nghi lễ tâm linh.",
    origin: "Tây Bắc, Đông Bắc",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/N%C3%B4ng_Thi_L%C3%ACm_ngh%E1%BB%87_nh%C3%A2n_h%C3%A1t_Then.jpg"
  },
  {
    name: "Hát Bài chòi",
    category: "Nghệ thuật biểu diễn",
    description: "Nghệ thuật Bài chòi Trung Bộ là một loại hình nghệ thuật dân gian đặc trưng của vùng Trung Bộ, kết hợp giữa hát, diễn và trò chơi dân gian. Bài chòi được biểu diễn trong các dịp lễ hội, Tết Nguyên Đán.",
    origin: "Trung Bộ",
    image: "https://images2.thanhnien.vn/528068263637045248/2024/5/2/hat-bai-choi-hoi-an-anh-nam-thinh-17146400493291506969946.jpg"
  },
  {
    name: "Nhã nhạc Cung đình Huế",
    category: "Nghệ thuật biểu diễn",
    description: "Nhã nhạc cung đình Huế là thể loại nhạc cung đình thính phòng của Việt Nam, được biểu diễn trong các dịp lễ hội, nghi lễ của triều đình nhà Nguyễn. Đây là di sản phi vật thể đầu tiên của Việt Nam được UNESCO công nhận.",
    origin: "Thừa Thiên Huế",
    image: "https://static.vinwonders.com/production/optimize_nha-nhac-cung-dinh-hue-topbanner_optimized.jpg"
  }
]

