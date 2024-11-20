import React from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/AboutStyle.css'

const About = ()=>{
    return (
        <Layout title={'About'}>
            <div>
                <header>
                    <h1>About Our E-commerce Store</h1>
                    <p>Welcome to our online shopping experience. Discover more about our journey and commitment to providing the best for our customers.</p>
                </header>
                <section>
                    <h2>Our Mission</h2>
                    <p>At Your E-commerce App, our mission is to make online shopping a seamless and enjoyable experience for everyone. We aim to offer a wide range of quality products, excellent customer service, and secure transactions.</p>
                </section>
                <section>
                    <h2>Our Team</h2>
                    <p>We have a dedicated team of professionals working behind the scenes to ensure your shopping experience is top-notch. From web developers and designers to customer support representatives, each member plays a crucial role in making our platform user-friendly and efficient.</p>
                    {/* Add team member information here */}
                    <ul>
                        <li>VARUN S</li>
                        <li>VYOM AGARWAL</li>
                        <li>VYOM GUPTA</li>
                        <li>YEDUNANDAN</li>
                    </ul>
                </section>
                <section>
                    <h2>Our Story</h2>
                    <p>E-commerce App was founded in 2023 with the vision of creating an online marketplace that caters to the diverse needs of our customers. Over the years, we have grown and adapted to the ever-changing e-commerce landscape, always striving to provide the best products and services.</p>
                </section>
                <footer>
                    <p>Contact us at <a href="mailto:varuns90150@gmail.com">varuns90150@gmail.com</a></p>
                </footer>
            </div>
        </Layout>
    )
}

export default About    