
import Footer from '../components/Footer'
import Header from '../components/Navbar'


export default function Home() {
    return (
        <>
            < Header />
            <main className="main-content">

                {/* <!-- HERO  --> */}
                <div className="hero">
                    <div className="container hero__container">

                        <div className="hero__inner">
                            <div className="hero__content">
                                <div className="hero__text">Hey, I’m Alex Spencer and I love building beautiful websites</div>
                                <a className="button button--dark hero__button" href="#about">
                                    <span className="hero__button-icon-wrapper">
                                        <img className="hero__button-icon" src="img/icon.svg" alt="" aria-hidden="true" width="16" height="12" />
                                    </span>
                                    <span>About me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- ABOUT-ME  --> */}
                <div className="about" id="about">

                    <div className="container about__container">

                        <h1 className="visually-hidden">Section about author</h1>

                        <img className="about__img" src="img/man.jpg" alt="Man" width="540" height="600" srcset="img/man.jpg 1x, img/man@2x.jpg 2x" />

                        <div className="about__content-wrapper">
                            <div className="about__content">
                                <h2 className="about__title">About Me</h2>
                                <p className="about__description">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                                <a className="button" href="portfolio.html">Go to portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- CTA --> */}
                <section className="cta">

                    <div className="container cta__container">

                        <h2 className="cta__title">Interested in doing a project together?</h2>
                        <a className="button cta__button" href="contact.html">Contact me</a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}