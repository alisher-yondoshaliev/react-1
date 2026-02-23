import chrome from '../assets/img/browser/chroome.svg'
import firefox from '../assets/img/browser/firefox.svg'
import opera from '../assets/img/browser/opera.svg'

const browsers = [
  { img: chrome, alt: 'Chrome extension', title: 'Add to Chrome', version: 'Minimum version 62' },
  { img: firefox, alt: 'Firefox extension', title: 'Add to Firefox', version: 'Minimum version 55' },
  { img: opera, alt: 'Opera extension', title: 'Add to Opera', version: 'Minimum version 46' },
]

export default function Downloads() {
  return (
    <section className="extension">
      <div className="extension__container container">

        <div className="content extension__content">
          <h2 className="content__title">Download the extension</h2>
          <p className="content__description">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </div>

        <div className="extension__list-wrapper">
          <ul className="extension__list">
            {browsers.map((browser) => (
              <li key={browser.title} className="extension__item">
                <div className="extension__card">
                  <img className="extension__img" src={browser.img} alt={browser.alt} width="102" height="100" />
                  <div className="extension__card-content">
                    <h3 className="extension__card-title">{browser.title}</h3>
                    <p className="extension__card-description">{browser.version}</p>
                  </div>
                  <button className="button button--big button--big-blue" type="button">Add & Install Extension</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}