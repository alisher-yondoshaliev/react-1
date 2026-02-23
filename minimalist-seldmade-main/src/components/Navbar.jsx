

import logo from "../assets/logo.svg"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    return (
        
        <header class="site-header">
            <div class="container site-header__container">

                {/* <!-- LOGO  --> */}
                <a class="logo site-header__logo" href="index.html">
                    <img class="logo__img" src={logo} alt="Minimalist logo" width="60" height="32" />
                </a>

                {/* <!-- SITE NAVIGATOR  --> */}
                <nav className="sitenav site-header__sitenav">
                    <ul className="sitenav__list">
                        <li className="sitenav__item">
                            <Link
                                className={`sitenav__link ${location.pathname === '/' ? 'sitenav__link--active' : ''}`}
                                to="/">Home</Link>
                        </li>
                        <li className="sitenav__item">
                            <Link
                                className={`sitenav__link ${location.pathname === '/portfolio' ? 'sitenav__link--active' : ''}`}
                                to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="sitenav__item">
                            <Link
                                className={`sitenav__link ${location.pathname === '/contact' ? 'sitenav__link--active' : ''}`}
                                to="/contact">Contact me</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}