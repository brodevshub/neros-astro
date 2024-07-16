import { useState } from 'react';
import Swal from 'sweetalert2';
import './send-email/send-email.css';

export default function SendEmail() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;
        let error = '';

        if (!formData.name.trim()) {
            error = 'El campo nombre es obligatorio';
            valid = false;
        } else if (formData.name.length > 100) {
            error = 'El campo nombre no puede tener más de 100 caracteres';
            valid = false;
        } else if (!formData.email.trim()) {
            error = 'El campo email es obligatorio';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error = 'El campo email no es válido';
            valid = false;
        } else if (!formData.message.trim()) {
            error = 'El campo mensaje es obligatorio';
            valid = false;
        } else if (formData.message.length > 1000) {
            error = 'El campo mensaje no puede tener más de 1000 caracteres';
            valid = false;
        }

        if (valid) {
            sendEmail();
        } else {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    };

    const sendEmail = async () => {
        try {
            const res = await fetch("/api/send/send-email.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            Swal.fire({
                title: '¡Correo enviado!',
                text: 'Pronto recibirá una respuesta, gracias',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema con el envío',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div id="newsletter">
            <div>
                <h2>Te escuchamos: contacto@fisioterapianeros.com</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Completo"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="test@test.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Escriba aquí su comentario..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <input type="submit" value='Enviar' />
                </form>
            </div>
        </div>
    );
}
