import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './GlobalStyles.scss'

type childrenType = {
    children: React.ReactNode
}

function GlobalStyles({ children }: childrenType) {
    return children
}

export default GlobalStyles
