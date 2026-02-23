
import { Link } from 'react-router-dom'

import logo_white from '../assets/logo-white.svg'
import github from '../assets/social/github.svg'
import twitter from '../assets/social/twitter.svg'
import linkedin from '../assets/social/linkedin.svg'


export default function Footer() {
    return (
        <footer class="site-footer">

            <div class="container site-footer__container">

                {/* <!-- LOGO  --> */}
                <a class="logo site-footer__logo" href="index.html">
                    <img class="logo__img" src={logo_white} alt="Minimalist logo" width="60" height="32" />
                </a>

                {/* <!-- SITE NAVIGATOR  --> */}
                <div className="sitenav site-footer__sitenav">
                    <ul className="sitenav__list">
                        <li className="sitenav__item">
                            <Link className="sitenav__link sitenav__link--white" to="/">Home</Link>
                        </li>
                        <li className="sitenav__item">
                            <Link className="sitenav__link sitenav__link--white" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="sitenav__item">
                            <Link className="sitenav__link sitenav__link--white" to="/contact">Contact me</Link>
                        </li>
                    </ul>
                </div>

                {/* <!-- SOCIAL  --> */}
                <ul class="social">
                    <li class="social__item">
                        <a class="social__link" href="#" target="_blank">
                            <img class="social__icon" src={github} alt="GitHub" width="25" height="24" />
                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="#" target="_blank">
                            <img class="social__icon" src={twitter} alt="Twitter" width="24" height="19" />
                        </a>
                    </li>
                    <li class="social__item">
                        <a class="social__link" href="#" target="_blank">
                            <img class="social__icon" src={linkedin} alt="LinkedIn" width="24" height="24" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}