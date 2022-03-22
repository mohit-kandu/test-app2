import React, { useState } from 'react'
import "./Login.css"
import loginHeroImg from "../../assets/loginHeroImg.png"
import google from "../../assets/google.png"
import facebook from "../../assets/Facebook.png"
import apple from "../../assets/apple.png"
import john from "../../assets/john.png"
import alina from "../../assets/alina.png"

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const userRe = /^[a-zA-Z][\w\d\s]+$/
        const emailRe = /\w@\w\.\w/
        const passRe = /[\d]+/
        if (!userRe.test(name) && !emailRe.test(name)) {
            setUsernameError(true)
            return
        }
        if (password.length < 8 || !passRe.test(password)) {
            setPasswordError(true)
            return
        }

        localStorage.setItem("user", `${name}`)
        window.location.reload()

    }
    return (
        <div className='login-container'>
            <div className='login-hero'>
                <nav>Your Logo</nav>
                <div className='px-3 below-login-hero'>
                    <div className='login-hero-left'>
                        <div>
                            <h1>Sign in to</h1>
                            <h6>Lorem Ipsum is simply </h6>
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className='login-hero-right'>
                        <img src={loginHeroImg} alt="Login hero" />
                    </div>
                    {/* sign in container */}
                    <div className="signin-container">
                        <div className='signin-header'>
                            <div className='mb-3'>
                                <p>Welcome to <span style={{ color: "#0089ED", fontWeight: "bold", margin: 0 }}>LOREM</span></p>
                                <h1>Sign in</h1>
                            </div>
                            <div className='signin-header-right'>
                                <p>No Account?</p>
                                <p className='cursor-pointer'>Sign up</p>
                            </div>
                        </div>
                        <div className='signin-options'>
                            <div className='d-flex align-items-center cursor-pointer'>
                                <img src={google} alt="login with google" />
                                <span>Sign in with Google</span>
                            </div>
                            <div className='facebook_apple'>
                                <div className='cursor-pointer'>
                                    <img src={facebook} alt="login with facebook" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img src={apple} alt="login with apple ID " />
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <form onSubmit={handleSubmit} className="login-form text-dark">
                                <div className='d-flex gap-1 flex-column mb-3'>
                                    <label htmlFor="name">Enter your username or email address</label>
                                    <input type="text"
                                        placeholder='Username or email address'
                                        name="username" id="username"
                                        value={name}
                                        onChange={e => {
                                            setName(e.target.value)
                                            setUsernameError(false)
                                        }}

                                    />
                                    {usernameError && <p className="text-danger" style={{ fontSize: "small" }}>Invalid Username</p>}
                                </div>
                                <div className='d-flex gap-1 flex-column mb-3'>
                                    <label htmlFor="">Enter your password</label>
                                    <input type="password"
                                        placeholder='Password'
                                        name="password" id="password"
                                        value={password}
                                        onChange={e => {
                                            setPassword(e.target.value)
                                            setPasswordError(false)
                                        }
                                        }
                                    />
                                    {passwordError && <p className="text-danger" style={{ fontSize: "small" }}>Password should be more than 8 characters</p>}
                                </div>
                                <p className='forgot-password'>Forgot Password</p>
                                <button
                                    className='submit-btn'
                                    type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recent-logins-container container'>
                <div className="recent-logins-header mb-4">
                    <h6>Login as</h6>
                </div>
                <div className='recent-logins'>
                    <div className='recent-login cursor-pointer'>
                        <div className='recent-login-close cursor-pointer'>x</div>
                        <div className='recent-login-details text-center'>
                            <div>
                                <img src={john} alt="" />
                            </div>
                            <p className='mt-2'>John Peter</p>
                            <p>Active 1 days ago</p>
                        </div>
                    </div>
                    <div className='recent-login cursor-pointer'>
                        <div className='recent-login-close cursor-pointer'>x</div>
                        <div className='recent-login-details text-center'>
                            <div>
                                <img src={alina} alt="" />
                            </div>
                            <p className='mt-2'>Alina Schmen</p>
                            <p>Active 1 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login