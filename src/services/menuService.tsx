import config from '../config'

const menuService = [
    { title: 'Cà phê', path: '/collections/thuong-thuc-tai-nha' },
    { title: 'Trà', path: '/collections/hi-tea-healthy' },
    {
        title: 'Menu',
        path: '/collections/all',
        children: [
            { title: 'Tất Cả', path: '/collections/all' },
            {
                title: 'Cà Phê',
                path: '/collections/ca-phe',
                children: [
                    { title: 'Cà Phê Highlight', path: '/collections/ca-phe-highlight-2' },
                    { title: 'Cà Phê Việt Nam', path: '/collections/ca-phe-viet-nam' },
                    { title: 'Cà Phê Máy', path: '/collections/ca-phe-may' },
                    { title: 'Cold Brew', path: '/collections/cold-brew' }
                ]
            },
            {
                title: 'Trái Cây Xay 0°C',
                path: '/collections/trai-cay-xay-0-c',
                children: [{ title: 'Trái Cây Xay 0°C', path: '/collections/trai-cay-xay-0-c' }]
            },
            {
                title: 'Trà Trái Cây - HiTea',
                path: '/collections/hi-tea-healthy',
                children: [
                    { title: 'Trà Trái Cây', path: '/collections/tra-trai-cay' },
                    { title: 'Hi-Tea', path: '/collections/hi-tea-tra' }
                ]
            },
            {
                title: 'Trà Sữa',
                path: '/collections/tra-sua-macchiato',
                children: [{ title: 'Trà Sữa', path: '/collections/tra-sua' }]
            },
            {
                title: 'Trà Xanh - Chocolate',
                path: '/collections/tra-xanh-tay-bac',
                children: [
                    { title: 'Trà Xanh Tây Bắc', path: '/collections/tra-xanh-tay-bac' },
                    { title: 'Chocolate', path: '/collections/thuc-uong-khac' }
                ]
            },
            {
                title: 'Thức uống đá xay',
                path: '/collections/da-xay-frosty-1',
                children: [{ title: 'Đá xay Frosty', path: '/collections/da-xay-frosty-1' }]
            },
            {
                title: 'Bánh & Snack',
                path: '/collections/banh',
                children: [
                    { title: 'Bánh mặn', path: '/collections/banh-man' },
                    { title: 'Bánh ngọt', path: '/collections/banh-ngot' },
                    { title: 'Bánh Pastry', path: '/collections/banh-pastry' }
                ]
            },
            {
                title: 'Thưởng Thức Tại Nhà',
                path: '/collections/thuong-thuc-tai-nha',
                children: [{ title: 'Cà phê tại nhà', path: '/collections/ca-phe-tai-nha' }]
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
