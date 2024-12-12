import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyles } from './components'
import { LoginProvider, ToastProvider } from './contexts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <LoginProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </LoginProvider>
        </ToastProvider>
    </StrictMode>
)
