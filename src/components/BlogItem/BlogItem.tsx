import classNames from 'classnames/bind'

import styles from './BlogItem.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

type blogType = {
    cate: string
    title: string
    path: string
    img: string
    dated: string
    tag?: string
    desc: string
    featured?: boolean
}

type propsType = {
    blog: blogType
    className?: string
}

function BlogItem({ blog, className }: propsType) {
    const classes = cx('wrapper', className && [className])

    return (
        <article className={classes}>
            <Link className={cx('blog-link')} to={blog.path}>
                <img className={cx('blog-img')} src={blog.img} alt={blog.title} />
            </Link>
            <div className={cx('blog-info')}>
                <Link to={blog.path}>
                    <h4 className={cx('blog-title')}>{blog.title}</h4>
                </Link>
                <span className={cx('blog-published')}>{blog.dated}</span>
                <p className={cx('blog-desc')}>{blog.desc}</p>
                {blog.tag && (
                    <Link className={cx('blog-tag')} to=''>
                        <FontAwesomeIcon className={cx('tag-icon')} icon={faTag} />
                        {blog.tag.slice(1)}
                    </Link>
                )}
            </div>
        </article>
    )
}

export default BlogItem
