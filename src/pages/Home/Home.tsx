import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './Home.module.scss'
import './Home.scss'
import { Button, ProductItem, SliderImage } from '../../components'
import images from '../../assets/images'
import services from '../../services'

const cx = classNames.bind(styles)

const BANNER = {
    default: [images.banner1, images.banner2, images.banner3, images.banner4, images.banner5],
    replacement: [images.banner1_1, images.banner2_1, images.banner3_1, images.banner4_1, images.banner5_1]
}

const STORE_1 = {
    default: [images.store_img_1, images.store_img_2, images.store_img_3, images.store_img_4, images.store_img_5]
}

const STORE_2 = {
    default: [images.store_img_6, images.store_img_7, images.store_img_8, images.store_img_9, images.store_img_10]
}

const PRODUCTS_HOME = services.productsService.filter((item) => item.inHome)

const BLOG_HOME = services.menuService.find((item) => item.title === 'Chuyện nhà')

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
}

function Home() {
    return (
        <>
            <section className={cx('banner')}>
                <SliderImage data={BANNER} classNameItem={cx('banner-img')} />
            </section>

            {/* highlight */}
            <section className={cx('highlight')}>
                <div className='container'>
                    <div className='row'>
                        <Link to='/trai-cay-xay-0-c' className='col-lg-6 col-12'>
                            <img className={cx('banner-HL')} src={images.bannerHL} />
                        </Link>
                        {PRODUCTS_HOME.map((item, index) => {
                            return (
                                <div className='col-lg-3 col-6' key={index}>
                                    <ProductItem product={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={cx('cta')}>
                {/* cta top */}
                <section className={cx('cloudtee')}>
                    <div className='container'>
                        <div className={cx('info')}>
                            <img src={images.cloudtee_header_img} alt='Trà Xanh TÂY BẮC' className={cx('header-img')} />
                            <p className={cx('desc')}>
                                Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì nhiêu, nguồn nước
                                mát lành, bao bọc bởi mây và sương cùng nền nhiệt độ mát mẻ quanh năm, những búp trà ở
                                Tây Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí, và tinh hoa đất
                                trời.Chính khí hậu đặc trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây đã
                                tạo ra Trà Xanh vị mộc dễ uống, dễ yêu, không thể trộn lẫn với bất kỳ vùng miền nào
                                khác.
                            </p>
                            <Button to='/collections/tra-xanh-tay-bac' primary className={cx('cloudtee-btn')}>
                                Thử ngay
                            </Button>
                        </div>
                    </div>
                </section>

                {/* cta bottom */}
                <div className={cx('store_home')}>
                    <div className='container'>
                        <Slider {...settings} className='store_home-slider'>
                            <div className='container'>
                                <section className={cx('store-item')}>
                                    <div className={cx('store-info')}>
                                        <header className={cx('store-header')}>
                                            <h3>
                                                SIGNATURE
                                                <br />
                                                By The Coffee House
                                            </h3>
                                        </header>
                                        <p className={cx('store-desc')}>
                                            Nơi cuộc hẹn tròn đầy với Cà phê đặc sản, Món ăn đa bản sắc và Không gian
                                            cảm hứng.
                                        </p>
                                        <Button
                                            to='/pages/chuyen-ca-phe-va-tra/signature-the-coffee-house-da-quay-tro-lai'
                                            primary
                                            className={cx('store_home-btn')}
                                        >
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>

                                    <div className={cx('store-slider')}>
                                        <SliderImage data={STORE_1} classNameItem={cx('store-img')} />
                                    </div>
                                </section>
                            </div>

                            <div className='container'>
                                <section className={cx('store-item')}>
                                    <div className={cx('store-info')}>
                                        <header className={cx('store-header')}>
                                            <h3>
                                                The Coffee House
                                                <br />
                                                Grace Tower
                                            </h3>
                                        </header>
                                        <p className={cx('store-desc')}>
                                            Nhà mới toạ lạc tại The Grace Tower thuộc tuyến đường nhộn nhịp và sầm uất
                                            tại Quận 7. Ghé Nhà cà phê nha!
                                        </p>
                                        <Button
                                            to='/pages/chuyen-ca-phe-va-tra/signature-the-coffee-house-da-quay-tro-lai'
                                            primary
                                            className={cx('store_home-btn')}
                                        >
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>

                                    <div className={cx('store-slider')}>
                                        <SliderImage data={STORE_2} classNameItem={cx('store-img')} />
                                    </div>
                                </section>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Blog Home */}
            <section className={cx('blog')}>
                <div className='container'>
                    <header className={cx('blog-header')}>
                        <img src={images.cup_cafe} />
                        <h2>Chuyện Nhà</h2>
                    </header>

                    {BLOG_HOME?.children?.map((item, index) => {
                        return (
                            <div key={index} className={cx('blog-cate')}>
                                <h3 className={cx('blog-cate-title')}>
                                    <Link to={item.path}>{item.title}</Link>
                                </h3>
                                <div className='row'>
                                    {services.blogsService
                                        .filter((blog) => blog.cate === item.title)
                                        .slice(0, 3)
                                        .map((blog, index) => {
                                            return (
                                                <div className='col-lg-4 col-sm-6 col-12' key={index}>
                                                    <article>
                                                        <Link className={cx('blog-link')} to={blog.path}>
                                                            <img
                                                                className={cx('blog-img')}
                                                                src={blog.img}
                                                                alt={blog.title}
                                                            />
                                                        </Link>
                                                        <div className={cx('blog-info')}>
                                                            <span className={cx('blog-published')}>{blog.dated}</span>
                                                            <Link to={blog.path}>
                                                                <h4 className={cx('blog-title')}>{blog.title}</h4>
                                                            </Link>
                                                            <p className={cx('blog-desc')}>{blog.desc}</p>
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home
