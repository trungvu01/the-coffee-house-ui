import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyles } from './components'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </StrictMode>
)