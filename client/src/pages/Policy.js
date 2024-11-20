import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/PolicyStyle.css'

const Policy = ()=>{
    return (
        <Layout title={'Privacy Policy'}>
            <div>
                <header>
                    <h1>Privacy Policy</h1>
                    <p>Protecting your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information on our website.</p>
                </header>
                <section>
                    <h2>Information We Collect</h2>
                    <p>We collect personal information, such as your name, email address, and shipping address when you make a purchase on our website. We also collect non-personal information, such as browser type and IP address, to improve our website's performance and user experience.</p>
                </section>
                <section>
                    <h2>How We Use Your Information</h2>
                    <p>We use your personal information to process your orders, provide customer support, and improve our products and services. We may also use non-personal information for analytics and marketing purposes.</p>
                </section>
                <section>
                    <h2>Sharing Your Information</h2>
                    <p>We do not sell, trade, or rent your personal information to third parties. Your information is only shared with trusted service providers who assist us in operating our website, conducting business, or servicing you.</p>
                </section>
                <section>
                    <h2>Cookies</h2>
                    <p>We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.</p>
                </section>
                <section>
                    <h2>Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. If you have any concerns about your privacy, please contact us at <a href="mailto:varuns90150@gmail.com">varuns90150@gmail.com</a>.</p>
                </section>
                <footer>
                    <p>For any privacy-related inquiries, please email <a href="mailto:varuns90150@gmail.com">varuns90150@gmail.com</a></p>
                </footer>
            </div>

        </Layout>
    )
}

export default Policy