import classNames from 'classnames/bind'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

import styles from './Blogs.module.scss'
import services from '../../services'
import { Button, BlogItem } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import images from '../../assets/images'

const cx = classNames.bind(styles)

type tabType = {
    name: string
    path: string
}

const BLOGS = services.menuService.find((item) => item.title === 'Chuyện nhà')

const BLOG_TABS: tabType[] = [{ name: 'Tất cả', path: '/pages/chuyen-ca-phe-va-tra' }]

const BLOG_FEATURED = services.blogsService
    .filter((blog) => blog.featured)
    .slice(0, 2)
    .reverse()

const CLASSES_FEATURED = ['col-12 col-lg-4', 'col-12 col-lg-8']

const BLOG_GROUP_IMGS = [images.blog_group_1, images.blog_group_2, images.blog_group_3]

services.menuService
    .find((item) => item.title === 'Chuyện nhà')
    ?.children?.forEach((tab) => {
        BLOG_TABS.push({ name: tab.title, path: tab.path })
    })

function Blogs() {
    const { tabName } = useParams()

    const BLOGS_GROUP_DATA = useMemo(() => {
        switch (tabName) {
            case 'coffeeholic':
                return services.blogsService.filter((blog) => blog.cate === 'Coffeeholic')
            case 'teaholic':
                return services.blogsService.filter((blog) => blog.cate === 'Teaholic')
            case 'blogs':
                return services.blogsService.filter((blog) => blog.cate === 'Blog')
            default:
                return []
        }
    }, [tabName])

    const [appearedBlogs, setAppearedBlogs] = useState(BLOGS_GROUP_DATA)

    useEffect(() => {
        setAppearedBlogs(BLOGS_GROUP_DATA.slice(0, 3))
    }, [BLOGS_GROUP_DATA])

    const handleShowAllBlogs = () => {
        setAppearedBlogs(BLOGS_GROUP_DATA)
    }

    return (
        <>
            {/* header */}
            <header className={cx('page-header')}>
                <div className='container'>
                    <h1>Chuyện Nhà</h1>
                    <p className={cx('page-content')}>
                        The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ
                        chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.
                    </p>
                    <ul className={cx('page-tabs')}>
                        {BLOG_TABS.map((tab, index) => {
                            return (
                                <li key={index}>
                                    <Button
                                        rounded
                                        to={tab.path}
                                        className={cx('tab-btn', {
                                            active:
                                                '/pages/chuyen-ca-phe-va-tra' + (tabName ? `/${tabName}` : '') ===
                                                tab.path
                                        })}
                                    >
                                        {tab.name}
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </header>

            {tabName === undefined ? (
                <>
                    {/* featured */}
                    <div className={cx('page-featured')}>
                        <div className='container'>
                            <div className='row'>
                                {BLOG_FEATURED.map((blog, index) => {
                                    return (
                                        <div key={index} className={CLASSES_FEATURED[index]}>
                                            <article className={cx('featured-item', `featured-item-${index}`)}>
                                                <Link to={blog.path}>
                                                    <img
                                                        className={cx('featured-img', `featured-img-${index}`)}
                                                        src={blog.img}
                                                        alt={blog.title}
                                                    />
                                                </Link>
                                                <div className={cx('featured-info')}>
                                                    <Link to={blog.path}>
                                                        <h4 className={cx('featured-title')}>{blog.title}</h4>
                                                    </Link>
                                                    <span className={cx('featured-published')}>{blog.dated}</span>
                                                    <p className={cx('featured-desc', `featured-desc-${index}`)}>
                                                        {blog.desc}
                                                    </p>
                                                    {blog.featured && (
                                                        <Link className={cx('featured-tag')} to=''>
                                                            <FontAwesomeIcon className={cx('tag-icon')} icon={faTag} />
                                                            {blog.tag.slice(1)}
                                                        </Link>
                                                    )}
                                                </div>
                                            </article>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* blog group */}
                    {BLOGS?.children?.map((tab, index) => {
                        return (
                            <div key={index} className={cx('blog-group')}>
                                <div className='container'>
                                    <div className={cx('row', 'blog-group-row')}>
                                        <div className='col-12 col-lg-6 col-md-4 d-none d-md-flex'>
                                            <img
                                                className={cx('blog-group-img')}
                                                src={BLOG_GROUP_IMGS[index]}
                                                alt={tab.title}
                                            />
                                        </div>
                                        <div className=' col-12 col-lg-6 col-md-8'>
                                            <h3 className={cx('blog-group-title')}>
                                                <Link to={tab.path}>{tab.title}</Link>
                                            </h3>
                                            {services.blogsService
                                                .filter((blog) => blog.cate === tab.title)
                                                .slice(0, 3)
                                                .map((blog, index) => {
                                                    return <BlogItem key={index} blog={blog} />
                                                })}

                                            <Button className={cx('action-btn')} primary to={tab.path}>
                                                Tìm hiểu thêm
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : (
                <div className={cx('page-blogs')}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-8'>
                                {appearedBlogs.map((blog, index) => {
                                    return <BlogItem key={index} blog={blog} />
                                })}
                                {appearedBlogs.length === 3 && (
                                    <Button className={cx('page-blogs-btn')} primary onClick={handleShowAllBlogs}>
                                        Xem tất cả
                                    </Button>
                                )}
                            </div>
                            <div className='col-4 d-none d-md-block'>
                                <aside className={cx('blogs-sidebar')}>
                                    {BLOGS?.children?.map((cate, index) => {
                                        return (
                                            <div key={index} className={cx('blogs-sidebar-cate')}>
                                                <h3>{cate.title}</h3>
                                                <ul className={cx('cate-list')}>
                                                    {cate?.children?.map((item, index) => {
                                                        return (
                                                            <li className={cx('cate-item')} key={index}>
                                                                <Link to=''>{item.title}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Blogs
