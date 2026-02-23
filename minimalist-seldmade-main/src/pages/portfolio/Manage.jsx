import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";

import manage_one from '../../assets/portfolio-detail/manage-one.jpg'
import manage_two from '../../assets/portfolio-detail/manage-two.jpg'
import manage_one1 from '../../assets/portfolio-detail/manage-one@2x.jpg'
import manage_two1 from '../../assets/portfolio-detail/manage-two@2x.jpg'

export default function Manage() {
    return (
        <>
            <Header />
            <main className="main-content">

                {/* PORTFOLIO DETAILS */}
                <div className="details">
                    <div className="container details__container details__container--portfolio"></div>
                </div>

                <section className="section-detail">
                    <div className="container section-detail__container">

                        <div className="detail detail--portfolio">
                            <div className="detail__content">
                                <h1 className="detail__title">Manage</h1>
                                <p className="detail__description detail__description--portfolio">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>

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
                                        <img className="info__showcase-img" src={manage_one} alt="Layout Manage" width="635" height="400" srcSet={`${manage_one} 1x, ${manage_one1} 2x`} />
                                    </div>
                                    <div className="info__showcase-img-wrapper-inner">
                                        <img className="info__showcase-img" src={manage_two} alt="Layout Manage" width="635" height="400" srcSet={`${manage_two} 1x, ${manage_two1} 2x`} />
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
                        {/* Previous project */}
                        <h3 className="slider__page-title">
                            <Link className="slider__page-link" to='/portfolio/fylo'>Fylo</Link>
                        </h3>
                        {/* Next project */}
                        <h3 className="slider__page-title slider__page-title--next">
                            <Link className="slider__page-link slider__page-link--next" to='/portfolio/bookmark'>Bookmark</Link>
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