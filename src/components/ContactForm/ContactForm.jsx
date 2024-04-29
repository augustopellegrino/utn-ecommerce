import './ContactForm.css'

const ContactForm = () => {
    return (
        <>
            <form id='contactForm'>
                <h3 >Personalizamos tu producto</h3>
                <p>Podes contarnos sobre el producto personalizado que necesites,
                    especificanos
                    todos los detalles y la cantidad. Nosotros realizamos una cotización, y nos contactamos con vos.</p>
                <label>Nombre y Apellido
                    <input type="text" placeholder="Ingresa tu nombre completo" id="contactForm-user" />
                </label>
                <label>Email
                    <input type="email" placeholder="Integresa tu email" id="contactForm-email" />
                </label>
                <label>Cantidad
                    <input type="number" placeholder="Integresa la cantidad de productos" id="contactForm-number" min={1} />
                </label>
                <label>Mensaje
                    <textarea placeholder="Integresa tu mensaje" id="contactForm-textarea" />
                </label>
                <button>Enviar</button>
            </form>
        </>
    )
}

export default ContactForm
