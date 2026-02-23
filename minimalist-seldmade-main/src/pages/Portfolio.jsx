import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Navbar'

import manage from '../assets/portfolio-index/manage.jpg'
import manageRetina from '../assets/portfolio-index/manage@2x.jpg'
import bookmark from '../assets/portfolio-index/bookmark.jpg'
import bookmarkRetina from '../assets/portfolio-index/bookmark@2x.jpg'
import insure from '../assets/portfolio-index/insure.jpg'
import insureRetina from '../assets/portfolio-index/insure@2x.jpg'
import fylo from '../assets/portfolio-index/fylo.jpg'
import fyloRetina from '../assets/portfolio-index/fylo@2x.jpg'

export default function Portfolio() {
    return (
        <>
            <Header />
            <main className="main-content">
                <section className="section-portfolio">
                    <h1 className="visually-hidden">All Projects</h1>
                    <div className="container section-portfolio__container">
                        <h2 className="visually-hidden">Project list</h2>
                        <ul className="portfolio">

                            {/* MANAGE */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src={manage} alt="Layout Manage" width="540" height="500" srcSet={`${manage} 1x, ${manageRetina} 2x`} />
                                </div>
                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Manage</h3>
                                        <p className="detail__description">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
                                        <Link className="button" to="/portfolio/manage">View project</Link>
                                    </div>
                                </div>
                            </li>

                            {/* BOOKMARK */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src={bookmark} alt="Layout Bookmark" width="540" height="500" srcSet={`${bookmark} 1x, ${bookmarkRetina} 2x`} />
                                </div>
                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Bookmark</h3>
                                        <p className="detail__description">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
                                        <Link className="button" to="/portfolio/bookmark">View project</Link>
                                    </div>
                                </div>
                            </li>

                            {/* INSURE */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src={insure} alt="Layout Insure" width="540" height="500" srcSet={`${insure} 1x, ${insureRetina} 2x`} />
                                </div>
                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Insure</h3>
                                        <p className="detail__description">This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
                                        <Link className="button" to="/portfolio/insure">View project</Link>
                                    </div>
                                </div>
                            </li>

                            {/* FYLO */}
                            <li className="portfolio__item">
                                <div className="portfolio__img-wrapper">
                                    <img className="portfolio__img" src={fylo} alt="Layout Fylo" width="540" height="500" srcSet={`${fylo} 1x, ${fyloRetina} 2x`} />
                                </div>
                                <div className="detail">
                                    <div className="detail__content">
                                        <h3 className="detail__title">Fylo</h3>
                                        <p className="detail__description">This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.</p>
                                        <Link className="button" to="/portfolio/fylo">View project</Link>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta">
                    <div className="container cta__container">
                        <h2 className="cta__title">Interested in doing a project together?</h2>
                        <Link className="button cta__button" to="/contact">Contact me</Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}