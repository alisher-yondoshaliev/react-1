import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(true)
      return
    }
    setError(false)
    // submit logic here
    window.open(`https://echo.htmlacademy.ru?email=${email}`, '_blank')
  }

  return (
    <section className="cta">
      <div className="cta__container container">
        <div className="cta__inner">
          <span className="cta__badge">35,000+ ALREADY JOINED</span>
          <h2 className="cta__title">Stay up-to-date with what<br />we're doing</h2>
          <div className="cta__form-wrapper">
            <form className="cta__form" onSubmit={handleSubmit}>
              <div className="cta__form-inner">
                <div className="cta__form-input-wrapper">
                  <input
                    className="cta__form-input"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError(false)
                    }}
                  />
                  {error && (
                    <span className="cta__form-input-errormsg">Whoops, make sure it's an email</span>
                  )}
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
  )
}