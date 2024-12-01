import { blogTitles } from './menuService'
import images from '../assets/images'

const blogsService = [
    {
        cate: 'Coffeeholic',
        title: 'BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG HIỆN ĐẠI CỦA GIỚI TRẺ',
        path: '/pages/chuyen-ca-phe-va-tra/bat-gap-sai-gon-xua-trong-mon-uong-hien-dai-cua-gioi-tre',
        img: images.blog_1,
        dated: '01/11/2023',
        desc: 'Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài Gòn xưa cũ. Trên những góc phố, trong các bức ảnh, trong vô số tác phẩm văn chương... và dĩ nhiên trong cả thiên đường ẩm thực phong phú. Món ăn đường phố Sài Gòn nức tiếng qua bao nhiêu thế hệ, trong đó có một món tưởng bình dị nhưng lại là “kho báu” của tuổi thơ, và là cảm hứng cho các tín đồ ăn uống.'
    },
    {
        cate: 'Coffeeholic',
        title: 'CHỈ CHỌN CÀ PHÊ MỖI SÁNG NHƯNG CŨNG KHIẾN CUỘC SỐNG CỦA BẠN THÊM THÚ VỊ, TẠI SAO KHÔNG?',
        path: '/pages/chuyen-ca-phe-va-tra/chi-chon-ca-phe-moi-sang-nhung-cung-khien-cuoc-song-cua-ban-them-thu-v',
        img: images.blog_2,
        dated: '30/10/2023',
        desc: 'Thực chất, bạn không nhất thiết phải làm gì to tát để tạo nên một ngày rực rỡ. Chỉ cần bắt đầu từ những việc nhỏ nhặt nhất, khi bạn đứng trước quầy cà phê mỗi sáng, mạnh dạn thử một thức uống mới mẻ và phá cách.'
    },
    {
        cate: 'Coffeeholic',
        title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON',
        path: '/pages/chuyen-ca-phe-va-tra/ca-phe-sua-espresso-the-coffee-house-bat-lon-bat-vi-ngon-1',
        img: images.blog_3,
        dated: '09/02/2023',
        tag: blogTitles.chuyencaphe,
        desc: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm hương vị cà phê hoàn toàn mới.'
    },
    {
        cate: 'Coffeeholic',
        title: 'SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI',
        path: '/pages/chuyen-ca-phe-va-tra/signature-the-coffee-house-da-quay-tro-lai',
        img: images.blog_4,
        dated: '12/02/2023',
        tag: blogTitles.inthemood,
        desc: 'Mới đây, các "tín đồ" cà phê đang bàn tán xôn xao về SIGNATURE - Biểu tượng văn hóa cà phê của The Coffee House đã quay trở lại.',
        featured: true
    },
    {
        cate: 'Coffeeholic',
        title: 'UỐNG GÌ KHI TỚI SIGNATURE BY THE COFFEE HOUSE?',
        path: '/pages/chuyen-ca-phe-va-tra/uong-gi-khi-toi-signature-by-the-coffee-house',
        img: images.blog_5,
        dated: '09/02/2023',
        tag: blogTitles.chuyencaphe,
        desc: 'Vừa qua, The Coffee House chính thức khai trương cửa hàng SIGNATURE by The Coffee House, chuyên phục vụ cà phê đặc sản, các món ăn đa bản sắc ấy ý tưởng từ cà phê và trà và gây ấn tượng với không gian cảm hứng bài trí hành trình cà phê đặc sắc, làm nên một cuộc hẹn tròn đầy.'
    },
    {
        cate: 'Teaholic',
        title: 'TRUNG THU NÀY, SAO BẠN KHÔNG TỰ CHO MÌNH "DỪNG MỘT CHÚT THÔI, THƯỞNG MỘT CHÚT TRÔI"?',
        path: '/pages/chuyen-ca-phe-va-tra/trung-thu-nay-sao-ban-khong-tu-cho-minh-dung-mot-chut-thoi-thuong-m',
        img: images.blog_6,
        dated: '19/09/2023',
        tag: blogTitles.cauchuyenvetra,
        desc: 'Bạn có từng nghe: “Trung thu thôi mà, có gì đâu mà chơi”, hay “Trung thu càng ngày càng chán”...? Sự bận rộn đến mức “điên rồ” đã khiến chúng ta dần quên đi: bản thân mỗi người cũng đã từng háo hức mỗi khi Trung thu đến. Vậy thì mùa trăng năm nay, sao không thử “dừng một chút thôi”, vì chúng ta đều xứng đáng tự thương mình, và tự “thưởng một chút trôi”. '
    },
    {
        cate: 'Teaholic',
        title: 'BỘ SƯU TẬP CẦU TOÀN KÈO THƠM: "VÍA" MAY MẮN KHÔNG THỂ BỎ LỠ TẾT NÀY',
        path: '/pages/chuyen-ca-phe-va-tra/bo-suu-tap-cau-toan-keo-thom-via-may-man-khong-the-bo-lo-tet-nay',
        img: images.blog_7,
        dated: '16/01/2023',
        desc: 'Tết nay vẫn giống Tết xưa, không hề mai một nét văn hoá truyền thống mà còn thêm vào những hoạt động “xin vía” hiện đại, trẻ trung. Ví như giới trẻ đang lên lịch ghé The Coffee House - “địa điểm xin vía mới nổi” để vừa thưởng thức bộ sưu tập thức uống dành riêng cho Tết vừa mong năm mới Cầu Toàn Kèo Thơm.'
    },
    {
        cate: 'Teaholic',
        title: '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY',
        path: '/pages/chuyen-ca-phe-va-tra/khuay-de-thay-trang-trung-thu-nay',
        img: images.blog_8,
        dated: '16/08/2022',
        tag: blogTitles.cauchuyenvetra,
        desc: 'Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè và người thân. Và trải nghiệm độc đáo “Khuấy để thấy trăng” của The Coffee House như khuấy lên niềm hạnh phúc, nao nức về một trung thu đầy thú vị mà không người trẻ nào muốn bỏ lỡ.'
    },
    {
        cate: 'Teaholic',
        title: 'UỐNG TRÀ HIBISCUS CÓ BỊ MẤT NGỦ HAY KHÔNG?',
        path: '/pages/chuyen-ca-phe-va-tra/uong-tra-hibiscus-co-bi-mat-ngu-hay-khong',
        img: images.blog_9,
        dated: '25/05/2022',
        tag: blogTitles.cauchuyenvetra,
        desc: 'Trà hoa Hibiscus luôn nằm trong top những loại trà healthy được nhiều người ưa chuộng bởi sở hữu nhiều dược tính tốt cho sức khỏe và sắc đẹp. Tuy thế, nhiều người vẫn băn khoăn không biết Hibiscus có chứa caffeine, gây mất ngủ hay không?'
    },
    {
        cate: 'Blog',
        title: 'THE COFFEE HOUSE PHẢN HỒI VỀ SỰ CỐ VỠ KÍNH DO GIÔNG LỐC TẠI CỬA HÀNG THE COFFEE HOUSE THÁI HÀ, HÀ NỘI',
        path: '/pages/chuyen-ca-phe-va-tra/the-coffee-house-phan-hoi-ve-su-co-vo-kinh-do-giong-loc-tai-cua-hang-t',
        img: images.blog_10,
        dated: '09/05/2024',
        desc: 'Vào tối ngày 20 tháng 04 năm 2024, Hà Nội có xuất hiện giông lốc kèm mưa đá, gây vỡ kính tại toà nhà Việt Tower - 01 Thái Hà, nơi The Coffee House (TCH) thuê mở địa điểm kinh doanh. Sự cố thiên tai này đã khiến một số khách hàng và nhân viên bị thương ở các mức độ khác nhau. Ngay khi sự cố xảy ra, TCH đã ngay lập tức đưa người bị thương vào viện chữa trị. Đồng thời tích cực phối hợp với các cơ quan chức năng & BQL tòa nhà Việt Tower (bên cho thuê và vận hành tòa nhà) xác định thiệt hại và đề xuất phương án hỗ trợ.'
    },
    {
        cate: 'Blog',
        title: '“XUÂN LÊN ĐI!”: LỜI CHÚC Ý NGHĨA CHO NĂM THÌN ĐIỀU CHI CŨNG NHƯ Ý',
        path: '/pages/chuyen-ca-phe-va-tra/xuan-len-di-loi-chuc-y-nghia-cho-nam-thin-dieu-chi-cung-nhu-y',
        img: images.blog_11,
        dated: '23/02/2024',
        tag: blogTitles.inthemood,
        desc: 'Mùa xuân đã rộn ràng khắp nơi, mang theo nguồn sống dào dạt cùng mọi ước nguyện may mắn. Bạn cầu mong gì cho mình và người thân trong những chiếc lộc trao tay đón xuân mới?'
    },
    {
        cate: 'Blog',
        title: 'LY CÀ PHÊ SỮA ĐÁ VIỆT NAM XUẤT HIỆN Ở QUẢNG TRƯỜNG THỜI ĐẠI NEW YORK',
        path: '/pages/chuyen-ca-phe-va-tra/the-coffee-house-tu-hao-mang-ly-ca-phe-sua-da-viet-nam-den-quang-truon',
        img: images.blog_12,
        dated: '21/11/2023',
        tag: blogTitles.humanofTHC,
        desc: 'Ấn tượng và tự hào, hình ảnh Việt Nam tiếp tục được lên sóng tại Quảng trường Thời Đại (New York) với ly cà phê sữa đá quen thuộc, đi cùng thương hiệu The Coffee House. '
    },
    {
        cate: 'Blog',
        title: 'NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI',
        path: '/pages/chuyen-ca-phe-va-tra/nguoc-len-tay-bac-goi-vi-moc-ve-xuoi',
        img: images.blog_13,
        dated: '16/08/2023',
        tag: blogTitles.review,
        desc: 'Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa… đó là rẻo cao Tây Bắc luôn làm say lòng lữ khách miền xuôi. Và nép mình bên dưới núi non hùng vĩ ấy còn có món quà gói trọn vị thiên nhiên: trà xanh Tây Bắc.',
        featured: true
    }
]

export default blogsService
