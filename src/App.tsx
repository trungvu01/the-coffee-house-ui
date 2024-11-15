import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}
        >
            <div className='app' style={{ height: 1200 }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout
                        const Page = route.component
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
