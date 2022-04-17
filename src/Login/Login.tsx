/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Modal, Button } from 'react-bootstrap';
import './styles.css';
import api from '../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');
    const [alertText, setAlertText] = useState('');

    async function handleLogin() {
        try {
            await api.get('/users/').then((response) => {
                var dados = response.data;
                for (var usuario of dados) {
                    if (usuario.email === email) {
                        localStorage.setItem('idUser', usuario.id);
                        self.location = '/cart';
                        return true;
                    }
                }
                alert('Login ou senha incorreta');
            });
        } catch (err) {
            try {
                if (
                    err.response.status === 404 ||
                    err.response.status === 400 ||
                    err.response.status === 500
                ) {
                    alert('Usuario ou senha incorreto');
                }
            } catch {
                alert(
                    'Ocorreu um erro com o sistema, tente novamente mais tarde',
                );
            }
        }
    }

    return (
        <div className="container-main">

        
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">
                            Não possui uma conta?
                        </h2>
                        <p className="description description-primary">
                            Cadastre-se agora!
                        </p>
                        <Link to="/register">
                            <button className="btn-cadastro">
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
                                    placeholder="Email"
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
                            <input className='check' type="checkbox" />
                            <p className="description description-second">
                                Lembre-se de mim
                            </p>  
                            
                            </div>
                            <div className='Escsenha'>
                            <p className="description description-second">
                                Esqueceu sua senha?
                            </p>
                            </div>

                            <button
                                className="btn-cadastro btn-second"
                                onClick={() => handleLogin()}
                            >
                                Login
                            </button>
                        </form>
                    </div>
               
            </div>
        </div>
    );
}

export default Login;
