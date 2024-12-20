import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyles } from './components'
import { LoginProvider, ToastProvider, ConfirmProvider } from './contexts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <LoginProvider>
                <ConfirmProvider>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                </ConfirmProvider>
            </LoginProvider>
        </ToastProvider>
    </StrictMode>
)
