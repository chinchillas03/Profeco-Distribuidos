import "./registerUser.css";
export default function RegisterForm() {
    return (
        <div className="container">
            <h1 className="welcome-title">Registro de Usuario</h1>
            <div className="register-card">
                <div className="card-body">
                    <h3 className="register-title">Crear una cuenta</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                id="nombre"
                                className="form-control"
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="apellido"
                                className="form-control"
                                placeholder="Apellido"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Correo Electrónico"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Contraseña"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                id="confirm-password"
                                className="form-control"
                                placeholder="Confirmar Contraseña"
                                required
                            />
                        </div>
                        

                        <button className="btn btn-primary" type="submit">
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