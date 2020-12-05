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
                <section className='portfolio-cards'>
                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
                            alt=''
                        />

                        <h2 className='port-title'>Threads</h2>
                        <h3 className='port-desc'>Illustration</h3>
                    </div>

                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1486&q=80'
                            alt=''
                        />
                        <h2 className='port-title'>Explore</h2>
                        <h3 className='port-desc'>Graphic Design</h3>
                    </div>
                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            alt=''
                        />
                        <h2 className='port-title'>Finish</h2>
                        <h3 className='port-desc'>Identity</h3>
                    </div>
                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
                            alt=''
                        />
                        <h2 className='port-title'>Lines</h2>
                        <h3 className='port-desc'>Branding</h3>
                    </div>
                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            alt=''
                        />
                        <h2 className='port-title'>Southwest</h2>
                        <h3 className='port-desc'>Website Design</h3>
                    </div>
                    <div className='single-cards'>
                        <img
                            src='https://images.unsplash.com/photo-1509573563917-a778dc0a5477?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                            alt=''
                        />
                        <h2 className='port-title'>Window</h2>
                        <h3 className='port-desc'>Photography</h3>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default App
