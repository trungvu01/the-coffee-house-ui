import config from '../config'

const menuService = [
    { title: 'Cà phê', path: '/ca-phe-tai-nha' },
    { title: 'Trà', path: '/tra-tai-nha' },
    {
        title: 'Menu',
        path: '/all',
        children: [
            { title: 'Tất Cả', path: '/all' },
            {
                title: 'Cà Phê',
                path: '/ca-phe',
                children: [
                    { title: 'Cà Phê Highlight', path: '/ca-phe-highlight-2' },
                    { title: 'Cà Phê Việt Nam', path: '/ca-phe-viet-nam' },
                    { title: 'Cà Phê Máy', path: '/ca-phe-may' },
                    { title: 'Cold Brew', path: '/cold-brew' }
                ]
            },
            {
                title: 'Trái Cây Xay 0°C',
                path: '/trai-cay-xay-0-c',
                children: [{ title: 'Trái Cây Xay 0°C', path: '/trai-cay-xay-0-c' }]
            },
            {
                title: 'Trà Trái Cây - HiTea',
                path: '/hi-tea-healthy',
                children: [
                    { title: 'Trà Trái Cây', path: '/tra-trai-cay' },
                    { title: 'Hi-Tea', path: '/hi-tea-tra' }
                ]
            },
            {
                title: 'Trà Sữa',
                path: '/tra-sua-macchiato',
                children: [{ title: 'Trà Sữa', path: '/tra-sua' }]
            },
            {
                title: 'Trà Xanh - Chocolate',
                path: '/tra-xanh-tay-bac',
                children: [
                    { title: 'Trà Xanh Tây Bắc', path: '/tra-xanh-tay-bac' },
                    { title: 'Chocolate', path: '/thuc-uong-khac' }
                ]
            },
            {
                title: 'Thức uống đá xay',
                path: '/da-xay-frosty-1',
                children: [{ title: 'Đá xay Frosty', path: '/da-xay-frosty-1' }]
            },
            {
                title: 'Bánh & Snack',
                path: '/banh',
                children: [
                    { title: 'Bánh mặn', path: '/banh-man' },
                    { title: 'Bánh ngọt', path: '/banh-ngot' },
                    { title: 'Bánh Pastry', path: '/banh-pastry' }
                ]
            },
            {
                title: 'Thưởng Thức Tại Nhà',
                path: '/thuong-thuc-tai-nha',
                children: [{ title: 'Cà phê tại nhà', path: '/ca-phe-tai-nha' }]
            }
        ]
    },
    {
        title: 'Chuyện nhà',
        path: config.routes.blogs,
        children: [
            {
                title: 'Coffeeholic',
                path: config.routes.blogs + '?b=1000676335',
                children: [
                    {
                        title: '#chuyencaphe',
                        path: config.routes.blogs + '?b=1000676335&h=chuyencaphe'
                    },
                    {
                        title: '#phacaphe',
                        path: config.routes.blogs + '?b=1000676335&h=phacaphe'
                    }
                ]
            },
            {
                title: 'Teaholic',
                path: config.routes.blogs + '?b=1000676336',
                children: [
                    {
                        title: '#phatra',
                        path: config.routes.blogs + '?b=1000676336&h=phatra'
                    },
                    {
                        title: '#cauchuyenvetra',
                        path: config.routes.blogs + '?b=1000676336&h=cauchuyenvetra'
                    }
                ]
            },
            {
                title: 'Blog',
                path: config.routes.blogs + '?b=1000676337',
                children: [
                    {
                        title: '#inthemood',
                        path: config.routes.blogs + '?b=1000676337&h=inthemood'
                    },
                    {
                        title: '#Review',
                        path: config.routes.blogs + '?b=1000676337&h=Review'
                    },
                    {
                        title: '#HumanofTHC',
                        path: config.routes.blogs + '?b=1000676337&h=HumanofTHC'
                    }
                ]
            }
        ]
    },
    { title: 'Cảm hứng CloudFee', path: '/cloudfee-the-he-ca-phe-moi' },
    { title: 'Cửa hàng', path: '/danh-sach-cua-hang' },
    { title: 'Tuyển dụng', path: '/tuyen-dung' }
]

export default menuService
