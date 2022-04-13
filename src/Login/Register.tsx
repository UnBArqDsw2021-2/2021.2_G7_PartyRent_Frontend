import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/"></Link>
            </nav>
            <div className="container">
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">
                            Já sou cadastrado
                        </h2>
                        <p className="description description-primary">
                            matenha-se conectado
                        </p>
                        <p className="description description-primary">
                            faça o login com suas informações pessoais
                        </p>
                        <Link to="/login">
                            <button className="btn-cadastro btn-primary">
                                entrar
                            </button>
                        </Link>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">Criar sua Conta</h2>
                        <p className="description description-second">
                            preencha os dados
                        </p>
                        <form className="form">
                            <label className="label-input">
                                <i className="fas fa-user icon-modify"></i>
                                <input type="text" placeholder="Nome" />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Email" />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input type="password" placeholder="Senha" />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input
                                    type="tel"
                                    required
                                    placeholder="(99) 99999-9999"
                                    maxLength={11}
                                />
                            </label>

                            <button className="btn-cadastro btn-second">
                                registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
