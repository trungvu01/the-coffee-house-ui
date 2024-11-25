import { Home, Collections, Products, Pages, Blogs } from '../pages'
import { MainLayout, SidebarLayout } from '../layouts'
import config from '../config'

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.collections, component: Collections, layout: SidebarLayout },
    { path: config.routes.products, component: Products, layout: MainLayout },
    { path: config.routes.pages, component: Pages, layout: MainLayout },
    { path: config.routes.blogs, component: Blogs, layout: MainLayout }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
