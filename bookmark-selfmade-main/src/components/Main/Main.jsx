import './Main.css'

import tablet from '../../assets/tablet.svg'
import simple_bokmark from '../../assets/slide/simple-bokmarking.svg'
import speedy_searching from '../../assets/slide/speedy-searching.svg'
import easy_sharing from '../../assets/slide/easy-sharing.svg'
import chroome from '../../assets/browser/chroome.svg'
import firefox from '../../assets/browser/firefox.svg'
import opera from '../../assets/browser/opera.svg'

export default function Main() {
    return (
        <main className="main-content">
            <div className="hero">
                <div className="container hero__container">
                    <div className="hero__content">
                        <h1 className="hero__title">A Simple Bookmark Manager</h1>
                        <p className="hero__description">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                        <div className="hero__button-wrapper">
                            <button className="button button--big">Get it on Chrome</button>
                            <button className="button button--big button--big-light">Get it on Firefox</button>
                        </div>
                    </div>

                    <img className="hero__img" src={tablet} alt="" aria-label="hidden" width="578" height="385" />
                </div>
            </div>


            {/* <!-- FEATURES  --> */}
            <section className="index-features">
                <div className="index-features__container container">
                    <div className="content index-features__content">
                        <h2 className="content__title">Features</h2>
                        <div className="content__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
                    </div>


                    {/* <!-- TABS  --> */}
                    <div className="tabs">
                        <ul className="tabs__list">
                            <li className="tabs__item tabs__item--active js-tabs__item">
                                <a className="tabs__link js-tabs__link" href="#simple-bookmarking">
                                    Simple bookmarking
                                </a>
                            </li>
                            <li className="tabs__item js-tabs__item">
                                <a className="tabs__link js-tabs__link" href="#speedy-searching">
                                    Speedy searching
                                </a>
                            </li>
                            <li className="tabs__item js-tabs__item">
                                <a className="tabs__link js-tabs__link" href="#easy-sharing">
                                    Easy sharing
                                </a>
                            </li>
                        </ul>


                        <section className="tab-panels">
                            <h2 className="visually-hidden">Feature's TabLink</h2>

                            {/* <!-- SIMPLE BOOOKMARKING  --> */}
                            <div className="tab-panels__tab-panel js-tab-panel tab-panels__tab-panel--active" id="simple-bookmarking">
                                <div className="tab-panels__tab-panel-inner" >
                                    <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-simple-bookmarking" src={simple_bokmark} alt="Tablet" width="536" height="346" />
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Bookmark in one click</h2>
                                        <p className="tab-panels__tab-panel-content-description">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                                        <a className="button button--blue" href="#">More info</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- SPEEDY SEARCHING  --> */}
                            <div className="tab-panels__tab-panel js-tab-panel" id="speedy-searching">
                                <div className="tab-panels__tab-panel-inner">
                                    <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-speedy-searching" src={speedy_searching} alt="Speedy searching's img" width="468" height="393" />
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Intelligent search</h2>
                                        <p className="tab-panels__tab-panel-content-description">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                                        <a className="button button--blue" href="#">More info</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- EASY SHARING --> */}
                            <div className="tab-panels__tab-panel js-tab-panel" id="easy-sharing">
                                <div className="tab-panels__tab-panel-inner">
                                    <img className="tab-panels__tab-panel-img tab-panels__tab-panel-img-easy-sharing" src={easy_sharing} alt="Easy sharing's img" width="440" height="380" />
                                    <div className="tab-panels__tab-panel-content">
                                        <h2 className="tab-panels__tab-panel-content-title">Share your bookmarks</h2>
                                        <p className="tab-panels__tab-panel-content-description">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                                        <a className="button button--blue" href="#">More info</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </section>


            {/* <!-- EXTENSIONS  --> */}
            <section className="extension">
                <div className="extension__container container">
                    <div className="content extension__content">
                        <h2 className="content__title">Download the extension</h2>
                        <p className="content__description">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                    </div>

                    <div className="extension__list-wrapper">
                        <ul className="extension__list">
                            {/* <!-- CHROOME  --> */}
                            <li className="extension__item">
                                <div className="extension__card">
                                    <img className="extension__img" src={chroome} alt="Chroome extension" width="102" height="100" />
                                    <div className="extension__card-content">
                                        <h3 className="extension__card-title">Add to Chrome</h3>
                                        <p className="extension__card-description">Minimum version 62</p>
                                    </div>
                                    <button className="button button--big button--big-blue" type="button">Add & Install Extension</button>
                                </div>
                            </li>
                            {/* <!-- FIREFOX  --> */}
                            <li className="extension__item">
                                <div className="extension__card">
                                    <img className="extension__img" src={firefox} alt="Firefox extension" width="105" height="100" />
                                    <div className="extension__card-content">
                                        <h3 className="extension__card-title">Add to Firefox</h3>
                                        <p className="extension__card-description">Minimum version 55</p>
                                    </div>
                                    <button className="button button--big button--big-blue" type="button">Add & Install Extension</button>
                                </div>
                            </li>
                            {/* <!-- OPERA  --> */}
                            <li className="extension__item">
                                <div className="extension__card">
                                    <img className="extension__img" src={opera} alt="Opera extension" width="96" height="100" />
                                    <div className="extension__card-content">
                                        <h3 className="extension__card-title">Add to Opera</h3>
                                        <p className="extension__card-description">Minimum version 46</p>
                                    </div>
                                    <button className="button button--big button--big-blue" type="button">Add & Install Extension</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* <!-- FAQ --> */}
            <section className="faq">
                <div className="content faq__content">
                    <h2 className="content__title">Frequently Asked Questions</h2>
                    <p className="content__description">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                </div>


                {/* <!-- ACCORDION  --> */}
                <div className="faq__accordion">
                    <div className="faq__accordion-inner">
                        <section className="accordion">
                            <header className="accordion__header">
                                <h3 className="accordion__title">What is Bookmark?</h3>
                                <button className="accordion__button js-accordion-toggler" type="button">
                                    <svg className="accordion__button-icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 8 8 8-8" stroke="currentColor" stroke-width="3" /></svg>
                                </button>
                            </header>
                            <div className="accordion__content js-accordion-content">
                                <div className="accordion__text">Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa,
                                    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
                            </div>
                        </section>
                        <section className="accordion">
                            <header className="accordion__header">
                                <h3 className="accordion__title">How can I request a new browser?</h3>
                                <button className="accordion__button js-accordion-toggler" type="button">
                                    <svg className="accordion__button-icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 8 8 8-8" stroke="currentColor" stroke-width="3" /></svg>
                                </button>
                            </header>
                            <div className="accordion__content js-accordion-content">
                                <div className="accordion__text">Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa,
                                    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
                            </div>
                        </section>
                        <section className="accordion">
                            <header className="accordion__header">
                                <h3 className="accordion__title">Is there a mobile app?</h3>
                                <button className="accordion__button js-accordion-toggler" type="button">
                                    <svg className="accordion__button-icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 8 8 8-8" stroke="currentColor" stroke-width="3" /></svg>
                                </button>
                            </header>
                            <div className="accordion__content js-accordion-content">
                                <div className="accordion__text">Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa,
                                    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
                            </div>
                        </section>
                        <section className="accordion">
                            <header className="accordion__header">
                                <h3 className="accordion__title">What about other Chromium browsers?</h3>
                                <button className="accordion__button js-accordion-toggler" type="button">
                                    <svg className="accordion__button-icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 8 8 8-8" stroke="currentColor" stroke-width="3" /></svg>
                                </button>
                            </header>
                            <div className="accordion__content js-accordion-content">
                                <div className="accordion__text">Vivamus luctus eros aliquet convallis ultricies. Mauris augumassa,
                                    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
                            </div>
                        </section>
                    </div>
                    <a className="button button--blue" href="#">More info</a>
                </div>

            </section>


            {/* <!-- CTA  --> */}
            <section className="cta">
                <div className="cta__container container">
                    <div className="cta__inner">
                        <span className="cta__badge">35,000+ ALREADY JOINED</span>
                        <h2 className="cta__title">Stay up-to-date with what<br />we’re doing</h2>
                        <div className="cta__form-wrapper">
                            <form className="cta__form" action="https://echo.htmlacademy.ru" method="GET" target="_blank">

                                <div className="cta__form-inner">
                                    <div className="cta__form-input-wrapper">
                                        <input className="cta__form-input" type="email" placeholder="Enter your email address" name="email" required />
                                        <span className="cta__form-input-errormsg">Whoops, make sure it’s an email</span>
                                    </div>
                                    <div>
                                        <button className="button button--red button--red-contact-us" type="submit">Contact Us</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}