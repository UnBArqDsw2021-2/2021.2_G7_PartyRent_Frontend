/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Modal, Button } from 'react-bootstrap';
import api from '../services/api';

import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');
    const [alertText, setAlertText] = useState('');

    async function handleLogin() {
        // try {
        //     const responseUser = await api.put('/users', { email, password });
        //     console.log(responseUser);
        //     if (responseUser.status == 200 || responseUser.status == 200) {
        //         if (responseUser.data.password != password) {
        //             console.log('Não deu bom');
        //         } else {
        //             console.log('deu bom');
        //         }
        //     }
        // } catch (err) {
        //     if (err.response.status === 404 || err.response.status === 400) {
        //         setShow(true);
        //         setVariant('danger');
        //         setAlertText('Email/Senha incorretos, digite novamente.');
        //     }
        //     if (err.response.status === 500) {
        //         setShow(true);
        //         setVariant('danger');
        //         setAlertText(
        //             'Ocorreu algum erro no seu login, tente novamente.',
        //         );
        //     }
    }

    return (
        <div className="container-main">
            <nav className="navbar"></nav>
            <div className="container">
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">
                            Não possui uma conta?
                        </h2>
                        <p className="description description-primary">
                            Cadastre-se agora!
                        </p>
                        <Link to="/register">
                            <button className="btn-cadastro btn-primary">
                                cadastro
                            </button>
                        </Link>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">Bem Vindo</h2>
                        <p className="title description description-second">
                            Login
                        </p>
                        <form className="form">
                            <label className="label-input">
                                <input
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label className="label-input">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </label>
                            <div className="div-lembrar-senha">
                                <input id="checkbox-input" type="checkbox" />
                                <p className="description description-second">
                                    Lembre-se de mim
                                </p>
                            </div>

                            <p className="description description-second">
                                Esqueceu sua senha?
                            </p>
                            <button
                                className="btn-cadastro btn-second"
                                onClick={() => handleLogin(email, password)}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
