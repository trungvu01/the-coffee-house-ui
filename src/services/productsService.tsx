import images from '../assets/images'

const productsService = [
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Highlight',
        title: 'Trà Xanh Espresso Marble',
        price: 49,
        imgs: [images.prod_1, images.prod_2, images.prod_3],
        thumb: images.prod_1_thumb,
        path: '/products/tra-xanh-espresso-marble',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Cho ngày thêm tươi, tỉnh, êm, mượt với Trà Xanh Espresso Marble. Đây là sự mai mối bất ngờ giữa trà xanh Tây Bắc vị mộc và cà phê Arabica Đà Lạt. Muốn ngày thêm chút highlight, nhớ tìm đến sự bất ngờ này bạn nhé!'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Việt Nam',
        title: 'Cà Phê Sữa Hạnh Nhân Kem Cheese',
        price: 59,
        imgs: [images.prod_2],
        thumb: images.prod_2_thumb,
        path: '/products/ca-phe-sua-hanh-nhan-kem-cheese',
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Cà phê espresso sữa hạnh nhân mượt mà sánh đôi cùng kem cheese béo mịn, êm gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Việt Nam',
        title: 'Bạc Xỉu Lắc Sữa Yến Mạch',
        price: 45,
        imgs: [images.prod_3],
        thumb: images.prod_3_thumb,
        path: '/products/bac-xiu-lac-sua-yen-mach',
        desc: 'Ngày thêm rộn ràng với Bạc Xỉu Lắc Sữa Yến Mạch. Cà phê phin Robusta đượm hương “lắc tới bến” cùng sữa yến mạch sánh mịn và đá đập mát lạnh. Lắc trước rồi hớp, hớp trực tiếp từ nắp lại càng ngon. *Để giữ trọn vị, Bạc Xỉu Lắc luôn được phục vụ kèm đá với định lượng đá không đổi.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Việt Nam',
        title: 'Bạc Xỉu Lắc Caramel Muối',
        price: 45,
        imgs: [images.prod_4],
        thumb: images.prod_4_thumb,
        path: '/products/bac-xiu-lac-caramel-muoi',
        desc: 'Ngày thêm ngọt ngào với Bạc Xỉu Lắc Caramel Muối Hồng. Cà phê phin Robusta đượm hương “lắc tới bến” cùng sữa yến mạch sánh mịn, Caramel Muối thơm ngon và đá đập mát lạnh. Lắc trước rồi hớp, hớp trực tiếp từ nắp lại càng ngon. *Để giữ trọn vị, Bạc Xỉu Lắc luôn được phục vụ với định lượng đá và độ ngọt không đổi.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Việt Nam',
        title: 'Bạc Xỉu Lắc Hạnh Nhân Nướng',
        price: 45,
        imgs: [images.prod_5],
        thumb: images.prod_5_thumb,
        path: '/products/bac-xiu-lac-hanh-nhan-nuong',
        desc: 'Ngày thêm dịu êm với Bạc Xỉu Lắc Hạnh Nhân Nướng. Cà phê phin Robusta đượm hương “lắc tới bến” cùng sữa yến mạch sánh mịn, Hạnh Nhân Nướng thơm bùi và đá đập mát lạnh. Lắc trước rồi hớp, hớp trực tiếp từ nắp lại càng ngon. *Để giữ trọn vị, Bạc Xỉu Lắc luôn được phục vụ với định lượng đá và độ ngọt không đổi.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Việt Nam',
        title: 'Bơ Arabica',
        price: 45,
        imgs: [images.prod_6],
        thumb: images.prod_6_thumb,
        path: '/products/bo-arabica',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Trái Vải', moreFee: 10 },
            { name: 'Đào Miếng', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Bơ sáp Đắk Lắk dẻo quẹo hòa quyện cùng Cà phê Arabica Cầu Đất êm mượt. Khuấy đều để thưởng thức hương vị tươi tỉnh, đầy mới lạ!'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Máy',
        title: 'Đường Đen Marble Latte',
        price: 55,
        imgs: [images.prod_7],
        thumb: images.prod_7_thumb,
        path: '/products/duong-den-marble-latte',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Đường Đen Marble Latte êm dịu cực hấp dẫn bởi vị cà phê đắng nhẹ hoà quyện cùng vị đường đen ngọt thơm và sữa tươi béo mịn. Sự kết hợp đầy mới mẻ của cà phê và đường đen cũng tạo nên diện mạo phân tầng đẹp mắt. Đây là lựa chọn đáng thử để bạn khởi đầu ngày mới đầy hứng khởi. - Khuấy đều trước khi sử dụng'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Máy',
        title: 'Caramel Macchiato Đá',
        price: 55,
        imgs: [images.prod_8],
        thumb: images.prod_8_thumb,
        path: '/products/caramel-macchiato-da',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Khuấy đều trước khi sử dụng Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Máy',
        title: 'Caramel Macchiato Nóng',
        price: 55,
        imgs: [images.prod_9_1, images.prod_9_2, images.prod_9_3],
        thumb: images.prod_9_thumb,
        path: '/products/caramel-macchiato-nong',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Máy',
        title: 'Latte Đá',
        price: 55,
        imgs: [images.prod_10],
        thumb: images.prod_10_thumb,
        path: '/products/latte-da',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cà Phê Máy',
        title: 'Latte Nóng',
        price: 55,
        imgs: [images.prod_11_1, images.prod_11_2, images.prod_11_3],
        thumb: images.prod_11_thumb,
        path: '/products/latte-nong',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cold Brew',
        title: 'Cold Brew Kim Quất',
        price: 45,
        imgs: [images.prod_12],
        thumb: images.prod_12_thumb,
        path: '/products/cold-brew-kim-quat',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Vị chua ngọt của Kim Quất làm dậy lên hương vị trái cây tự nhiên vốn sẵn có trong hạt cà phê Arabica Cầu Đất, mang đến một ly Cold Brew vừa nhẹ nhàng và thanh mát, đã khát ngày hè.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cold Brew',
        title: 'Cold Brew Sữa Tươi',
        price: 45,
        imgs: [images.prod_13],
        thumb: images.prod_13_thumb,
        path: '/products/cold-brew-sua-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Thanh mát và cân bằng với hương vị cà phê nguyên bản 100% Arabica Cầu Đất cùng sữa tươi thơm béo cho từng ngụm tròn vị, hấp dẫn.'
    },
    {
        cate: 'Cà Phê',
        type: 'Cold Brew',
        title: 'Cold Brew Truyền Thống',
        price: 45,
        imgs: [images.prod_14],
        thumb: images.prod_14_thumb,
        path: '/products/cold-brew-truyen-thong',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Tại The Coffee House, Cold Brew được ủ và phục vụ mỗi ngày từ 100% hạt Arabica Cầu Đất với hương gỗ thông, hạt dẻ, nốt sô-cô-la đặc trưng, thoang thoảng hương khói nhẹ giúp Cold Brew giữ nguyên vị tươi mới.'
    },
    {
        cate: 'Trái Cây Xay 0°C',
        type: 'Trái Cây Xay 0°C',
        title: 'Bơ Sữa Phô Mai Tươi',
        price: 55,
        imgs: [images.prod_15],
        thumb: images.prod_15_thumb,
        path: '/products/bo-sua-pho-mai-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Bơ sáp Đắk Lắk dẻo quẹo hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Sữa Oolong Tứ Quý đượm hương càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái. Lưu ý: Sản phẩm không kèm phao',
        inHome: true
    },
    {
        cate: 'Trái Cây Xay 0°C',
        type: 'Trái Cây Xay 0°C',
        title: 'Dâu Phô Mai Tươi',
        price: 55,
        imgs: [images.prod_16],
        thumb: images.prod_16_thumb,
        path: '/products/dau-pho-mai-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Dâu tây Đà Lạt chín mọng hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Oolong Tứ Quý đượm hương và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái. Lưu ý: Sản phẩm không kèm phao',
        inHome: true
    },
    {
        cate: 'Trái Cây Xay 0°C',
        type: 'Trái Cây Xay 0°C',
        title: 'Mận Phô Mai Tươi',
        price: 55,
        imgs: [images.prod_17],
        thumb: images.prod_17_thumb,
        path: '/products/man-pho-mai-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Mận hậu đặc sản Mộc Châu đỏ thơm căng mọng, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Oolong Tứ Quý đượm hương và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái. Lưu ý: Sản phẩm không kèm phao'
    },
    {
        cate: 'Trái Cây Xay 0°C',
        type: 'Trái Cây Xay 0°C',
        title: 'Mãng Cầu Phô Mai Tươi',
        price: 55,
        imgs: [images.prod_18],
        thumb: images.prod_18_thumb,
        path: '/products/mang-cau-pho-mai-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Mãng cầu Nam Bộ chín tự nhiên đậm vị, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Xanh Tây Bắc êm dịu và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái. Lưu ý: Sản phẩm không kèm phao'
    },
    {
        cate: 'Trái Cây Xay 0°C',
        type: 'Trái Cây Xay 0°C',
        title: 'Nho Phô Mai Tươi',
        price: 55,
        imgs: [images.prod_19],
        thumb: images.prod_19_thumb,
        path: '/products/nho-pho-mai-tuoi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Nho xanh vào vụ mọng nước ngọt thơm, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Xanh Tây Bắc êm dịu và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái. Lưu ý: Sản phẩm không kèm phao'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Oolong Tứ Quý Dâu Trân Châu',
        price: 49,
        imgs: [images.prod_20],
        thumb: images.prod_20_thumb,
        path: '/products/oolong-tu-quy-dau-tran-chau',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Sảng khoái với vị dâu chín mọng chua thanh. Nền trà Oolong Tứ Quý đậm hương, ngọt thanh hậu vị. Thêm tận hưởng với trân châu trắng giòn dai.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Oolong Tứ Quý Kim Quất Trân Châu',
        price: 49,
        imgs: [images.prod_21],
        thumb: images.prod_21_thumb,
        path: '/products/oolong-tu-quy-kim-quat-tran-chau',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Đậm hương trà, sảng khoái du xuân cùng Oolong Tứ Quý Kim Quất Trân Châu. Vị nước cốt kim quất tươi chua ngọt, thêm trân châu giòn dai.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Oolong Tứ Quý Vải',
        price: 49,
        imgs: [images.prod_22],
        thumb: images.prod_22_thumb,
        path: '/products/oolong-tu-quy-vai',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Đậm hương trà, thanh mát sắc xuân với Oolong Tứ Quý Vải. Cảm nhận hương hoa đầu mùa, hòa quyện cùng vị vải chín mọng căng tràn sức sống.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Trà Đào Cam Sả - Đá',
        price: 49,
        imgs: [images.prod_23_1, images.prod_23_2, images.prod_23_3],
        thumb: images.prod_23_thumb,
        path: '/products/tra-dao-cam-sa-da',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Oolong Tứ Quý Sen',
        price: 49,
        imgs: [images.prod_24_1, images.prod_24_2, images.prod_24_3, images.prod_24_4],
        thumb: images.prod_24_thumb,
        path: '/products/oolong-tu-quy-sen',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Hi-Tea',
        title: 'Hi-Tea Đào Kombucha',
        price: 59,
        imgs: [images.prod_25],
        thumb: images.prod_25_thumb,
        path: '/products/hi-tea-dao-kombucha',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Trà hoa Hibiscus 0% caffeine chua nhẹ, kết hợp cùng trà lên men Kombucha hoàn toàn tự nhiên và Đào thanh mát tạo nên Hi-Tea Đào Kombucha chua ngọt cực cuốn. Đặc biệt Kombucha Detox giàu axit hữu cơ, Đào nhiều chất xơ giúp thanh lọc cơ thể và hỗ trợ giảm cân hiệu quả. Lưu ý: Khuấy đều trước khi dùng',
        inHome: true
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Hi-Tea Yuzu Kombucha',
        price: 59,
        imgs: [images.prod_26],
        thumb: images.prod_26_thumb,
        path: '/products/hi-tea-yuzu-kombucha',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Trà hoa Hibiscus 0% caffeine thanh mát, hòa quyện cùng trà lên men Kombucha 100% tự nhiên và mứt Yuzu Marmalade (quýt Nhật) mang đến hương vị chua chua lạ miệng. Đặc biệt, Hi-Tea Yuzu Kombucha cực hợp cho team thích detox, muốn sáng da nhờ Kombucha Detox nhiều chất chống oxy hoá cùng Yuzu giàu vitamin C. Lưu ý: Khuấy đều trước khi dùng'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Hi-Tea Yuzu Trân Châu',
        price: 49,
        imgs: [images.prod_27_1, images.prod_27_2, images.prod_27_3],
        thumb: images.prod_27_thumb,
        path: '/products/hi-tea-yuzu-tran-chau',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.'
    },
    {
        cate: 'Trà Trái Cây - HiTea',
        type: 'Trà Trái Cây',
        title: 'Hi-Tea Vải',
        price: 49,
        imgs: [images.prod_28_1, images.prod_28_2, images.prod_28_3],
        thumb: images.prod_28_thumb,
        path: '/products/hi-tea-vai',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 16 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.',
        inHome: true
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Oolong Sữa Hạnh Nhân (Nóng)',
        price: 55,
        imgs: [images.prod_29],
        thumb: images.prod_29_thumb,
        path: '/products/oolong-sua-hanh-nhan-nong',
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Oolong Tứ Quý đượm hương sánh đôi cùng sữa hạnh nhân béo bùi, thơm ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!'
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Oolong Sữa Hạnh Nhân Trân Châu Hoàng Kim',
        price: 59,
        imgs: [images.prod_30],
        thumb: images.prod_30_thumb,
        path: '/products/oolong-sua-hanh-nhan-tran-chau-hoang-kim',
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Oolong Tứ Quý sữa hạnh nhân đượm hương sánh đôi cùng Trân Châu Hoàng Kim dẻo mềm, hấp dẫn gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!'
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Trà Sữa Oolong Tứ Quý Sương Sáo',
        price: 55,
        imgs: [images.prod_31],
        thumb: images.prod_31_thumb,
        path: '/products/tra-sua-oolong-tu-quy-suong-sao-1',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 4 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Trà Oolong Tứ Quý ngạt ngào hoa cỏ mùa xuân, hòa quyện cùng sữa thơm mịn màng, sương sáo thanh mát. Đó là Lộc Yêu Yêu ngọt ngào mà Nhà gửi gắm đến bạn.'
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Trà Sữa Oolong BLao',
        price: 39,
        imgs: [images.prod_32],
        thumb: images.prod_32_thumb,
        path: '/products/tra-sua-oolong-blao-2',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Tận hưởng hương vị núi rừng mát lành lắng đọng trong từng ngụm Trà Sữa Oolong B’Lao của Nhà. Từng lá trà được Nhà chắt chiu từ B’Lao (Lâm Đồng), sao (rang) kỹ càng để giữ trọn vị Oolong đậm đà, quyện cùng sữa thơm béo, hấp dẫn.'
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Trà Sữa Oolong Tứ Quý Bơ',
        price: 59,
        imgs: [images.prod_33],
        thumb: images.prod_33_thumb,
        path: '/products/tra-sua-oolong-tu-quy-bo',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Lớn', moreFee: 6 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Bơ sáp Đắk Lắk dẻo quẹo hòa quyện cùng Trà Sữa Oolong Tứ Quý đượm hương. Khó cưỡng với hương vị ngọt ngào, đậm bơ, sánh mịn. Khuấy đều để thưởng trọn vị bạn nhé!'
    },
    {
        cate: 'Trà Sữa',
        type: 'Trà Sữa',
        title: 'Trà Sữa Oolong Nướng Sương Sáo',
        price: 55,
        imgs: [images.prod_34],
        thumb: images.prod_34_thumb,
        path: '/products/tra-sua-oolong-nuong-suong-sao',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Lớn', moreFee: 4 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Tận hưởng hương vị Oolong nướng đậm đà được Nhà rang kỹ càng, quyện cùng sữa thơm béo, càng thêm hấp dẫn với sương sáo thanh mát.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte Sữa Hạnh Nhân (Nóng)',
        price: 55,
        imgs: [images.prod_35],
        thumb: images.prod_35_thumb,
        path: '/products/tra-xanh-latte-sua-hanh-nhan-nong',
        topping: [
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân béo bùi, ấm áp gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte Sữa Hạnh Nhân',
        price: 59,
        imgs: [images.prod_36],
        thumb: images.prod_36_thumb,
        path: '/products/tra-xanh-latte-sua-hanh-nhan',
        topping: [
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Espresso Marble',
        price: 49,
        imgs: [images.prod_37],
        thumb: images.prod_37_thumb,
        path: '/products/tra-xanh-espresso-marble',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Cho ngày thêm tươi, tỉnh, êm, mượt với Trà Xanh Espresso Marble. Đây là sự mai mối bất ngờ giữa trà xanh Tây Bắc vị mộc và cà phê Arabica Đà Lạt. Muốn ngày thêm chút highlight, nhớ tìm đến sự bất ngờ này bạn nhé!'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte Sữa Yến Mạch',
        price: 55,
        imgs: [images.prod_38],
        thumb: images.prod_38_thumb,
        path: '/products/tra-xanh-latte-sua-yen-mach',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Vị matcha êm mượt nhờ kết hợp với sữa yến mạch. *Khuấy đều để thưởng trọn hương vị.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte Đậm Vị',
        price: 49,
        imgs: [images.prod_39],
        thumb: images.prod_39_thumb,
        path: '/products/tra-xanh-latte-dam-vi',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Lựa chọn phù hợp cho ai thích matcha đậm nhưng ngại đắng. *Khuấy đều để thưởng trọn hương vị.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte',
        price: 45,
        imgs: [images.prod_40],
        thumb: images.prod_40_thumb,
        path: '/products/tra-xanh-latte-1',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 6 },
            { name: 'Lớn', moreFee: 10 }
        ],
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Best seller 2023 - rất phù hợp cho ai muốn nhập môn matcha. *Khuấy đều để thưởng trọn hương vị.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Trà Xanh Tây Bắc',
        title: 'Trà Xanh Latte Sữa Yến Mạch (Nóng)',
        price: 55,
        imgs: [images.prod_41],
        thumb: images.prod_41_thumb,
        path: '/products/tra-xanh-latte-sua-yen-mach-nong',
        desc: 'Vị matcha êm mượt nhờ kết hợp với sữa yến mạch (ui da nóng quá). *Khuấy đều để thưởng trọn hương vị.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Chocolate',
        title: 'Choco Sữa Hạnh Nhân Kem Cheese',
        price: 59,
        imgs: [images.prod_42],
        thumb: images.prod_42_thumb,
        path: '/products/choco-sua-hanh-nhan-kem-cheese',
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Cacao sữa hạnh nhân thơm bùi sánh đôi cùng kem cheese beo béo, ngọt ngào gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Chocolate',
        title: 'Chocolate Đá',
        price: 55,
        imgs: [images.prod_43],
        thumb: images.prod_43_thumb,
        path: '/products/chocolate-da',
        topping: [
            { name: 'Đào miếng', moreFee: 10 },
            { name: 'Trái vải', moreFee: 10 },
            { name: 'Sốt Caramel', moreFee: 10 },
            { name: 'Shot Espresso', moreFee: 10 },
            { name: 'Trân châu trắng', moreFee: 10 }
        ],
        desc: 'Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy, ấm nóng. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.'
    },
    {
        cate: 'Trà Xanh - Chocolate',
        type: 'Chocolate',
        title: 'Chocolate Nóng',
        price: 55,
        imgs: [images.prod_44_1, images.prod_44_2],
        thumb: images.prod_44_thumb,
        path: '/products/chocolate-nong',
        topping: [{ name: 'Trân châu trắng', moreFee: 10 }],
        desc: 'Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.'
    },
    {
        cate: 'Thức uống đá xay',
        type: 'Đá xay Frosty',
        title: 'Frosty Phin-Gato',
        price: 55,
        imgs: [images.prod_45],
        thumb: images.prod_45_thumb,
        path: '/products/frosty-phin-gato',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 14 }
        ],
        desc: 'Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng'
    },
    {
        cate: 'Thức uống đá xay',
        type: 'Đá xay Frosty',
        title: 'Frosty Bánh Kem Dâu',
        price: 59,
        imgs: [images.prod_46],
        thumb: images.prod_46_thumb,
        path: '/products/frosty-banh-kem-dau',
        size: [
            { name: 'Nhỏ', moreFee: 0 },
            { name: 'Vừa', moreFee: 10 },
            { name: 'Lớn', moreFee: 14 }
        ],
        desc: 'Bồng bềnh như một đám mây, Đá Xay Frosty Bánh Kem Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh mặn',
        title: 'Bánh Mì Que Chà Bông Phô Mai Bơ Cay',
        price: 22,
        imgs: [images.prod_47],
        thumb: images.prod_47_thumb,
        path: '/products/banh-mi-que-cha-bong-pho-mai-bo-cay',
        desc: 'Aiiiii Bánh Mì Chà Bông Phô Mai hônggg? Chà bông tơi mịn đẫm phô mai Mozzarella kéo sợi, cay hít hà. Rộp rộp vỏ bánh giòn rụm nóng hổi, thêm ngấu nghiến với xốt bơ đậm đà.',
        inHome: true
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh mặn',
        title: 'Bánh Mì Que Pate',
        price: 15,
        imgs: [images.prod_48_1, images.prod_48_2, images.prod_48_3],
        thumb: images.prod_48_thumb,
        path: '/products/banh-mi-que-pate',
        desc: 'Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị.'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh mặn',
        title: 'Bánh Mì Que Pate Cay',
        price: 15,
        imgs: [images.prod_49_1, images.prod_49_2, images.prod_49_3],
        thumb: images.prod_49_thumb,
        path: '/products/banh-mi-que-pate-cay',
        desc: 'Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà và 1 chút cay cay sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị.'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh mặn',
        title: 'Croissant trứng muối',
        price: 39,
        imgs: [images.prod_50_1, images.prod_50_2],
        thumb: images.prod_50_thumb,
        path: '/products/croissant-trung-muoi',
        desc: 'Croissant trứng muối thơm lừng, bên ngoài vỏ bánh giòn hấp dẫn bên trong trứng muối vị ngon khó cưỡng.'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh ngọt',
        title: 'Mochi Kem Trà Sữa Trân Châu',
        price: 19,
        imgs: [images.prod_51],
        thumb: images.prod_51_thumb,
        path: '/products/mochi-kem-tra-sua-tran-chau',
        desc: 'Ngoài dẻo thơm, trong mát lạnh với kem vị trà sữa. Một cắn là say đắm, hai cắn là ngất ngây với trân châu giòn dai. *Bánh cần được bảo quản mát và dùng ngon nhất trong vòng 2 giờ sau khi nhận hàng.'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh ngọt',
        title: 'Mochi Kem Phúc Bồn Tử',
        price: 19,
        imgs: [images.prod_52_1, images.prod_52_2],
        thumb: images.prod_52_thumb,
        path: '/products/mochi-kem-phuc-bon-tu',
        desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.',
        inHome: true
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh ngọt',
        title: 'Mochi Kem Việt Quất',
        price: 19,
        imgs: [images.prod_53_1, images.prod_53_2],
        thumb: images.prod_53_thumb,
        path: '/products/mochi-kem-viet-quat',
        desc: 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh Pastry',
        title: 'Butter Croissant',
        price: 29,
        imgs: [images.prod_54],
        thumb: images.prod_54_thumb,
        path: '/products/butter-croissant',
        desc: 'Cắn một miếng, vỏ bánh ngàn lớp giòn thơm bơ béo, rồi mịn tan trong miệng. Cực dính khi nhâm nhi Butter Croissant với cà phê hoặc chấm cùng các món nước có foam trứng của Nhà'
    },
    {
        cate: 'Bánh & Snack',
        type: 'Bánh Pastry',
        title: 'Choco Croffle',
        price: 39,
        imgs: [images.prod_55],
        thumb: images.prod_55_thumb,
        path: '/products/choco-croffle',
        desc: 'Lạ mắt, bắt vị với chiếc bánh Croffle được làm từ cốt bánh Croissant nướng trong khuôn Waffle tổ ong. Trong mềm mịn, ngoài giòn thơm, thêm topping sô cô la tan chảy, ăn là yêu!'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Đen Đá Túi (30 gói x 16g)',
        price: 116,
        imgs: [images.prod_56],
        thumb: images.prod_56_thumb,
        path: '/products/ca-phe-den-da-tui-30-goi-x-16g',
        desc: 'Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Đen Đá Hộp (14 gói x 16g)',
        price: 66,
        imgs: [images.prod_57],
        thumb: images.prod_57_thumb,
        path: '/products/ca-phe-den-da-hop-14-goi-x-16g',
        desc: 'Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Sữa Đá Hòa Tan Túi 25x22G',
        price: 127,
        imgs: [images.prod_58_1, images.prod_58_2],
        thumb: images.prod_58_thumb,
        path: '/products/ca-phe-sua-da-hoa-tan-tui-25x22g-1',
        desc: 'Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)',
        price: 53,
        imgs: [images.prod_59],
        thumb: images.prod_59_thumb,
        path: '/products/ca-phe-sua-da-hoa-tan-10-goi-x-22g-1',
        desc: 'Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Rang Xay Original 1 250G',
        price: 82,
        imgs: [images.prod_60_1, images.prod_60_2, images.prod_60_3],
        thumb: images.prod_60_thumb,
        path: '/products/ca-phe-rang-xay-original-1-250g-1',
        desc: 'Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.'
    },
    {
        cate: 'Thưởng Thức Tại Nhà',
        type: 'Cà phê tại nhà',
        title: 'Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)',
        price: 55,
        imgs: [images.prod_61_1, images.prod_61_2, images.prod_61_3],
        thumb: images.prod_61_thumb,
        path: '/products/ca-phe-hoa-tan-dam-vi-viet-18-goi-x-16-gam',
        desc: 'Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.'
    }
]

export default productsService
