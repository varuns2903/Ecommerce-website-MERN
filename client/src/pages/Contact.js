import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/ContactStyle.css'

const Contact = ()=>{
    return (
        <Layout title={'Contact'}>
            <div>
                <header>
                    <h1>Contact Us</h1>
                    <p>Have questions or feedback? We'd love to hear from you!</p>
                </header>
                <section>
                    <h2>Contact Information</h2>
                    <p>If you need assistance, feel free to reach out to our customer support team. We're here to help!</p>
                    <address>
                        Email: <a href="mailto:varuns90150@gmail.com">varuns90150@gmail.com</a><br />
                        Phone: +91 9141835306<br />
                        Address: Karnataka, India
                    </address>
                </section>
                <section>
                    <h2>Contact Form</h2>
                    <p>Alternatively, you can use the form below to send us a message:</p>
                    <form action="" method="post">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" name="message" rows={4} required defaultValue={""} />
                        <button type="submit">Send Message</button>
                    </form>
                </section>
                <footer>
                    <p>For general inquiries, please email <a href="mailto:varuns90150@gmail.com">varuns90150@gmail.com</a></p>
                </footer>
            </div>

        </Layout>
    )
}

export default Contact