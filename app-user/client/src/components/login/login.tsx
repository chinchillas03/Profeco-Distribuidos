import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
       
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const params = new URLSearchParams();
            params.append('email', formData.email);
            params.append('password', formData.password);

            const response = await axios.post(
                'http://localhost:4007/api/auth/token',
                params,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            console.log('Respuesta del servidor:', response.data);
            navigate('/index');
        } catch (e) {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="container">
            <h1 className="welcome-title">¡Bienvenido!</h1>
            <div className="login-card">
                <div className="card-body">
                    <h3 className="login-title">Inicio de Sesión</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email" // Atributo agregado
                                className="form-control"
                                placeholder="Correo Electrónico"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password" // Atributo agregado
                                className="form-control"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Iniciar Sesión
                        </button>
                        <div className="divider">
                            <span>o</span>
                        </div>

                        <p className="register-link">
                            ¿No tienes una cuenta?{' '}
                            <a href="/register" className="register-here">
                                Regístrate aquí
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
