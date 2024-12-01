import "./registerUser.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'confirmPassword' || name === 'password') {
            if (name === 'password' && formData.confirmPassword && value !== formData.confirmPassword) {
                setPasswordError('Las contraseñas no coinciden');
            } else if (name === 'confirmPassword' && value !== formData.password) {
                setPasswordError('Las contraseñas no coinciden');
            } else {
                setPasswordError('');
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Las contraseñas no coinciden');
            return;
        }

        if (passwordError) {
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:4006/api/usuarios/',
                {
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.email,
                    password: formData.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Registro exitoso:', response.data);
            navigate('/login');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    console.error('Error de respuesta:', err.response.data);
                    setError(`Error: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
                } else if (err.request) {
                    console.error('Error de solicitud:', err.request);
                    setError('No se recibió respuesta del servidor');
                } else {
                    console.error('Error:', err.message);
                    setError('Error al configurar la solicitud');
                }
            } else {
                console.error('Error desconocido:', err);
                setError('Ocurrió un error desconocido');
            }
        }
    };

    return (
        <div className="container">
            <h1 className="welcome-title">Registro de Usuario</h1>
            <div className="register-card">
                <div className="card-body">
                    <h3 className="register-title">Crear una cuenta</h3>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="form-control"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                className="form-control"
                                placeholder="Apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Correo Electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirmar Contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={!!passwordError}>
                            Registrarse
                        </button>
                        <p className="login-link">
                            ¿Ya tienes una cuenta?{" "}
                            <a href="/login" className="login-here">
                                Inicia sesión aquí
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
