import classNames from 'classnames/bind'
import React, { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Login.module.scss'
import images from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import services from '../../services'
import config from '../../config'
import { LoginContext, ToastContext } from '../../contexts'

const cx = classNames.bind(styles)

const ACCOUNTS = services.accountsService

function Login() {
    const [isSignIn, setIsSignIn] = useState(true)
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const loginContext = useContext(LoginContext)
    const addToast = useContext(ToastContext)
    const loginLocation = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (loginLocation.pathname === '/login' && loginContext?.isLoggedIn) {
            navigate(config.routes.home)
        }
    }, [loginLocation.pathname, loginContext?.isLoggedIn, navigate])

    const handleChangeForm = () => {
        setNameInput('')
        setEmailInput('')
        setPasswordInput('')
        setIsSignIn(!isSignIn)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLElement | null
        const isSignInForm = !!target?.closest('.' + cx('sign-in')) //default: true

        if (isSignInForm) {
            const currentAccount = ACCOUNTS.find(
                (account) => account.nameAccount === emailInput && account.password === passwordInput
            )

            if (currentAccount) {
                const currentUser = services.usersService.find((user) => user.userId === currentAccount.id)
                const currentCart = services.cartService.find((cart) => cart.id === currentUser?.userCartId)
                if (currentUser) {
                    loginContext?.login(currentUser, currentCart?.products || [])
                    if (addToast) {
                        addToast('success', 'Đăng nhập thành công.', 3010)
                    }
                }
            } else {
                e.preventDefault()
                if (addToast) {
                    addToast('error', 'Vui lòng nhập đầy đủ và chính xác thông tin tài khoản của bạn!', 3010)
                }
            }
        } else {
            //Handle Sign Up Form
            e.preventDefault()
            if (addToast) {
                addToast('info', 'Chức năng này đang bảo trì.', 3010)
            }
        }
    }

    return (
        <div className={cx('login-page')}>
            <div
                className={cx('container-form', {
                    'sign-up': !isSignIn
                })}
            >
                <form className={cx('form-wrapper')}>
                    <h2>{isSignIn ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
                    <div className={cx('social')}>
                        <a href='#'>
                            <FontAwesomeIcon icon={faGoogle} className={cx('social-icon')} />
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faFacebook} className={cx('social-icon')} />
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faLinkedin} className={cx('social-icon')} />
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faTwitter} className={cx('social-icon')} />
                        </a>
                    </div>
                    <span>{isSignIn ? 'hoặc đăng nhập với email của bạn' : 'hoặc đăng ký với email của bạn'}</span>

                    {!isSignIn && (
                        <label className={cx('field-input')}>
                            <span>Tên của bạn</span>
                            <input
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                type='text'
                                placeholder='Tên của bạn...'
                            />
                        </label>
                    )}

                    <label className={cx('field-input')}>
                        <span>Email</span>
                        <input
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            type='email'
                            placeholder='Email của bạn...'
                        />
                    </label>
                    <label className={cx('field-input')}>
                        <span>Mật khẩu</span>
                        <input
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            type='password'
                            placeholder='Mật khẩu của bạn...'
                        />
                    </label>

                    {isSignIn && (
                        <Link className={cx('forget-link')} to='/'>
                            Bạn không nhớ mật khẩu?
                        </Link>
                    )}
                    <Button
                        to={config.routes.home}
                        onClick={(e) => handleSubmit(e)}
                        primary
                        className={cx('submit-btn', isSignIn ? 'sign-in' : 'sign-up')}
                    >
                        {isSignIn ? 'Đăng Nhập' : 'Đăng Ký'}
                    </Button>
                </form>
                <div className={cx('switch-block')}>
                    <h2>{isSignIn ? 'Mừng Bạn Đến Với' : 'Mừng Bạn Trở Lại'}</h2>
                    <img src={images.logo} alt='THE COFFEE HOUSE' />
                    <p>
                        {isSignIn
                            ? 'Đăng ký tài khoản để sử dụng tất cả tính năng của chúng tôi.'
                            : 'Đăng nhập tài khoản để sử dụng tất cả tính năng của chúng tôi.'}
                    </p>
                    <Button onClick={handleChangeForm} outline className={cx('switch-form-btn')}>
                        {isSignIn ? 'Đăng Ký' : 'Đăng Nhập'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
