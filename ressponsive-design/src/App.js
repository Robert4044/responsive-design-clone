import { useState } from 'react'
import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='App'>
            <header className='header'>
                <div className='container'>
                    <h1>Start Bootstrap</h1>
                    <nav className='nav-bar'>
                        <p className='nav-item'>Services</p>
                        <p className='nav-item'>Portfolio</p>
                        <p className='nav-item'>About</p>
                        <p className='nav-item'>Team</p>
                        <p className='nav-item'>Contact</p>
                    </nav>

                    <button className='hamburger' onClick={toggleMenu}>
                        Menu{'    '} <i class='fas fa-bars'></i>
                    </button>

                    <nav
                        className={`mobile-nav ${
                            isMenuOpen ? null : 'mobile-nav-hide'
                        }`}>
                        <p className='mobile-nav-item'>Services</p>
                        <p className='mobile-nav-item'>Portfolio</p>
                        <p className='mobile-nav-item'>About</p>
                        <p className='mobile-nav-item'>Team</p>
                        <p className='mobile-nav-item'>Contact</p>
                    </nav>
                </div>

                <section className='header-info'>
                    <p className='section-welcome'>Welcome to Our Studio!</p>
                    <p className='section-text'>IT'S NICE TO MEET YOU</p>
                    <button className='btn-section'>TELL ME MORE</button>
                </section>
            </header>
            <section className='services'>
                <h1 className='services-title'>Services</h1>
                <p className='services-text'>
                    Lorem ipsum, dolor sit amet consectetur.
                </p>
                <div className='services-container'>
                    <div className='ecommerce-container'>
                        <i className='fas fa-shopping-cart cart fa-4x'></i>
                        <p className='commerce-text'>E-Commerce</p>
                        <p className='commerce-lorem'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minima maxime quam architecto quo inventore
                            harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div className='responsive-container'>
                        <i class='fas fa-desktop cart fa-4x'></i>
                        <p className='commerce-text'>Responsive Design</p>
                        <p className='commerce-lorem'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minima maxime quam architecto quo inventore
                            harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div className='web-container'>
                        <i class='fas fa-lock cart fa-4x'></i>
                        <p className='commerce-text'>Web Security</p>
                        <p className='commerce-lorem'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minima maxime quam architecto quo inventore
                            harum ex magni, dicta impedit.
                        </p>
                    </div>
                </div>
            </section>
            <section className='section-portfolio'>
                <h1 className='services-title'>Portfolio</h1>
                <p className='services-text'>
                    Lorem ipsum, dolor sit amet consectetur.
                </p>
                <div className='portfolio-cards'></div>
            </section>
        </div>
    )
}

export default App
