import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Login () {
    return (
        <div className="container-main">
            <nav className="navbar">
            </nav>
            <div className="container">
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Não possui uma conta?</h2>
                        <p className="description description-primary">Cadastre-se agora!</p>
                        <Link to="/register">
                            <button className="btn-cadastro btn-primary">cadastro</button>
                        </Link>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">Bem vindo</h2>
                        <p className="title description description-second">Login</p>
                        <form className="form">
                            <label className="label-input">
                                <input type="text" placeholder="Email"/>
                            </label>

                            <label className="label-input">
                                <input type="password" placeholder="Senha"/>
                            </label>
                            <div className="div-lembrar-senha">
                                <input id="checkbox-input" type="checkbox"/>
                                <p className="description description-second">Lembre-se de mim</p>
                            </div>

                            <p className="description description-second">Esqueceu sua senha?</p>
                            <button className="btn-cadastro btn-second">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
