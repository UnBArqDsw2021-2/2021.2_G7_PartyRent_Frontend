import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Modal, Button } from 'react-bootstrap';
import api from '../services/api';

function Register() {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [variant, setVariant] = useState('');
    const [alertText, setAlertText] = useState('');

    async function handleRegister() {
        try {
            const response = await api
                .post('/users/', {
                    username,
                    phone_number: phone,
                    email,
                    password,
                })
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        alert('Usuário cadastrado corretamente.');
                        self.location = '/login';
                    }
                });
        } catch (err) {
            if (
                err.response.status === 404 ||
                err.response.status === 400 ||
                err.response.status === 500
            ) {
                alert('Ocorreu algum erro no seu cadastro, tente novamente.');
            }
        }
    }
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
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    value={username}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-envelope icon-modify"></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </label>

                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input
                                    type="tel"
                                    required
                                    placeholder="(99) 99999-9999"
                                    maxLength={14}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>

                            <button
                                className="btn-cadastro btn-second"
                                onClick={() => handleRegister()}
                            >
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
