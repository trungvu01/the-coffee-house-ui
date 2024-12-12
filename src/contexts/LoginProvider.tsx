import React, { createContext, useState } from 'react'

type propsType = {
    children: React.ReactNode
}

type userType = {
    userId: string
    userAccountId: string
    userCartId: string
    avatar: string
    userName: string
    address: string
    phone: string
}
type cartType = {
    name: string
    size?: string
    topping?: string
    quantity: number
    totalPrice: number
}

type dataType = {
    info: userType | undefined
    cart: cartType[] | undefined
}

type loginType = {
    isLoggedIn: boolean
    login: (userData: userType, userCart: cartType[]) => void
    logout: () => void
    handleCartData: (newCart: cartType[]) => void
    getUser: () => { info: userType; cart: cartType[] }
}

const LoginContext = createContext<loginType | undefined>(undefined)

const LoginProvider = ({ children }: propsType) => {
    const user: dataType = JSON.parse(localStorage.getItem('user') || 'false')
    const [isLoggedIn, setIsLoggedIn] = useState(!!user.info)

    const login = (userData: userType, userCart: cartType[]) => {
        setIsLoggedIn(true)

        const user: dataType = {
            info: userData,
            cart: userCart
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.setItem('user', JSON.stringify(false))
    }

    const handleCartData = (newCart: cartType[]) => {
        const user: dataType = {
            info: JSON.parse(localStorage.getItem('user') || 'false').info,
            cart: newCart
        }
        localStorage.setItem('user', JSON.stringify(user))
    }

    const getUser = () => {
        return JSON.parse(localStorage.getItem('user') || 'false')
    }

    const value: loginType = {
        isLoggedIn,
        login,
        logout,
        handleCartData,
        getUser
    }

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

export { LoginContext, LoginProvider }