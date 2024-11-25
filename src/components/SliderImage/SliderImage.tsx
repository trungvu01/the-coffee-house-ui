import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './SliderImage.scss'

type listImgType = {
    default: string[]
    replacement?: string[]
}

type propType = {
    data: listImgType
    className?: string
    classNameItem?: string
}

function SliderImage({ data, classNameItem, className }: propType) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    }

    return (
        <Slider className={className} {...settings}>
            {data.default.map((img, index) => {
                return (
                    <div key={index}>
                        <picture>
                            {data.replacement && (
                                <source media='(max-width: 767.98px)' srcSet={data.replacement[index]} />
                            )}
                            <img className={classNameItem} src={img} style={{ cursor: 'pointer' }} />
                        </picture>
                    </div>
                )
            })}
        </Slider>
    )
}

export default SliderImage
