

import Footer from '../components/Footer'
import Header from '../components/Navbar'

import manage from '../assets/portfolio-index/manage.jpg'

export default function Portfolio() {
    return (
        <>
            < Header />
            <main className="main-content">

                {/* <!-- PORTFOLIO  --> */}
                <section className="section-portfolio">

                    <h1 className="visually-hidden">All Projects</h1>

                    <div className="container section-portfolio__container">

                        <h2 className="visually-hidden">Project list</h2>

                        <ul className="portfolio">



                            {/* <!-- MANAGE  --> */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src={manage} alt="Layout Manage" width="540" height="500" srcset="img/portfolio-index/manage.jpg 1x, img/portfolio-index/manage@2x.jpg 2x" />
                                </div>

                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Manage</h3>
                                        <p className="detail__description">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
                                        <a className="button" href="portfolio-manage.html">View project</a>
                                    </div>
                                </div>
                            </li>

                            {/* <!-- BOOMARK --> */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src="img/portfolio-index/bookmark.jpg" alt="Layout Bookmark" width="540" height="500" srcset="img/portfolio-index/bookmark.jpg 1x, img/portfolio-index/bookmark@2x.jpg 2x" />
                                </div>

                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Bookmark</h3>
                                        <p className="detail__description">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
                                        <a className="button" href="portfolio-bookmark.html">View project</a>
                                    </div>
                                </div>
                            </li>

                            {/* <!-- INSURE--> */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src="img/portfolio-index/insure.jpg" alt="Layout Insure" width="540" height="500" srcset="img/portfolio-index/insure.jpg 1x, img/portfolio-index/insure@2x.jpg 2x" />
                                </div>

                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Insure</h3>
                                        <p className="detail__description">This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
                                        <a className="button" href="portfolio-insure.html">View project</a>
                                    </div>
                                </div>
                            </li>

                            {/* <!-- FYLO--> */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src="img/portfolio-index/fylo.jpg" alt="Layout Fylo" width="540" height="500" srcset="img/portfolio-index/fylo.jpg 1x, img/portfolio-index/fylo@2x.jpg 2x" />
                                </div>

                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Fylo</h3>
                                        <p className="detail__description">This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.</p>
                                        <a className="button" href="portfolio-fylo.html">View project</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>


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