import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";

import insure_one from '../../assets/portfolio-detail/insure-one.jpg'
import insure_two from '../../assets/portfolio-detail/insure-two.jpg'
import insure_one1 from '../../assets/portfolio-detail/insure-one@2x.jpg'
import insure_two1 from '../../assets/portfolio-detail/insure-two@2x.jpg'

export default function Insure() {
    return (
        <>
            <Header />
            <main className="main-content">

                {/* PORTFOLIO DETAILS */}
                <div className="details">
                    <div className="container details__container details__container--insure"></div>
                </div>

                <section className="section-detail">
                    <div className="container section-detail__container">

                        <div className="detail detail--portfolio">
                            <div className="detail__content">
                                <h1 className="detail__title">Insure</h1>
                                <p className="detail__description detail__description--portfolio">This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>

                                <div className="detail__extra-info-wrapper">
                                    <div className="detail__extra-info">Interaction Design / Front End Development</div>
                                    <div className="detail__extra-info">HTML / CSS / JS</div>
                                </div>
                                <a className="button" href="#" target="_blank">Visit website</a>
                            </div>
                        </div>

                        <div className="info">
                            <div className="info__content">
                                <h2 className="info__title">Project Background</h2>
                                <p className="info__text">This project was a front-end challenge from <a href="https://www.frontendmentor.io/" target="_blank" tabIndex="-1">Frontend Mentor</a>. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.</p>
                            </div>

                            <div className="info__showcase">
                                <h2 className="info__title">Static Previews</h2>
                                <div className="info__showcase-img-wrapper">
                                    <div className="info__showcase-img-wrapper-inner">
                                        <img className="info__showcase-img" src={insure_one} alt="Layout Insure" width="635" height="400" srcSet={`${insure_one} 1x, ${insure_one1} 2x`} />
                                    </div>
                                    <div className="info__showcase-img-wrapper-inner">
                                        <img className="info__showcase-img" src={insure_two} alt="Layout Insure" width="635" height="400" srcSet={`${insure_two} 1x, ${insure_two1} 2x`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PAGE SLIDER */}
                <section className="slider">
                    <div className="container slider__container">
                        <h2 className="visually-hidden">Page slider</h2>
                        <h3 className="slider__page-title">
                            <Link className="slider__page-link" to='/portfolio/bookmark'>Bookmark</Link>
                        </h3>
                        <h3 className="slider__page-title slider__page-title--next">
                            <Link className="slider__page-link slider__page-link--next" to='/portfolio/fylo'>Fylo</Link>
                        </h3>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta">
                    <div className="container cta__container">
                        <h2 className="cta__title">Interested in doing a project together?</h2>
                        <Link className="button cta__button" to='/contact'>Contact me</Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}