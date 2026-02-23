
import Footer from '../components/Footer'
import Header from '../components/Navbar'

export default function Contact() {
    return (
        <>
            < Header />
            <main className="main-content">

                <div className="section-contact">
                    <div className="container section-contact__container">

                        <h1 className="visually-hidden">Contact page</h1>

                        {/* <!-- GET-IN-TOUCH  --> */}
                        <section className="section-contact__content-inner">
                            <h2 className="section-contact__content-title">Get in Touch</h2>
                            <div className="section-contact__content-info">
                                <p className="section-contact__content-info-text">I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>

                                {/* <!-- SOCIAL  --> */}
                                <ul className="social">
                                    <li className="social__item">
                                        <a className="social__link" href="#" target="_blank">
                                            <img className="social__icon" src="img/social/github-black.svg" alt="GitHub" width="25" height="24" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a className="social__link" href="#" target="_blank">
                                            <img className="social__icon" src="img/social/twitter-black.svg" alt="Twitter" width="24" height="19" />
                                        </a>
                                    </li>
                                    <li className="social__item">
                                        <a className="social__link" href="#" target="_blank">
                                            <img className="social__icon" src="img/social/linkedin-black.svg" alt="LinkedIn" width="24" height="24" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </div>

                    {/* <!-- SECTION-FORM  --> */}
                    <section className="section-form">
                        <div className="container section-form__container">

                            <form className="form" action="https://echo.htmlacademy.ru/" method="GET" target="_blank">
                                <div className="form__inner">

                                    <h2 className="form__title">Contact Me</h2>

                                    <div className="form__area">
                                        <div className="form__input-wrapper">
                                            <label className="label" for="auth-name">Name</label>
                                            <input className="form__input" type="text" id="auth-name" name="Your name is" placeholder="Jane Appleseed" aria-label="Enter your name" required />
                                            <div className="validation-error">This field is required</div>
                                        </div>

                                        <div className="form__input-wrapper">
                                            <label className="label" for="auth-email">Email address</label>
                                            <input className="form__input" type="email" id="auth-email" name="Your email is" placeholder="email@example.com" aria-label="Enter your email" required />
                                            <div className="validation-error">This field is required</div>
                                        </div>

                                        <div className="form__textarea-wrapper">
                                            <label className="label" for="auth-message">Message</label>
                                            <textarea className="form__textarea" name="Your message" id="auth-message" placeholder="How can I help?" aria-label="Enter your message" required></textarea>
                                            <div className="validation-error">This field is required</div>
                                        </div>

                                        {/* <!-- BUTTON-SUBMIT  --> */}
                                        <button className="button button--dark form__button" type="submit">Send message</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </section>
                </div>



            </main>
            <Footer />
        </>
    )
}