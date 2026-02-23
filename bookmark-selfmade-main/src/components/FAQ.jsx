import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 4,
    question: 'What about other Chromium browsers?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="faq">
      <div className="content faq__content">
        <h2 className="content__title">Frequently Asked Questions</h2>
        <p className="content__description">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </div>

      <div className="faq__accordion">
        <div className="faq__accordion-inner">
          {faqs.map((faq) => (
            <section key={faq.id} className="accordion">
              <header className="accordion__header">
                <h3 className="accordion__title">{faq.question}</h3>
                <button
                  className="accordion__button js-accordion-toggler"
                  type="button"
                  onClick={() => toggle(faq.id)}
                >
                  <svg className="accordion__button-icon" width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2 2 8 8 8-8" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </button>
              </header>
              <div className={`accordion__content js-accordion-content ${openId === faq.id ? 'accordion__content--open' : ''}`}>
                <div className="accordion__text">{faq.answer}</div>
              </div>
            </section>
          ))}
        </div>
        <a className="button button--blue" href="#">More info</a>
      </div>
    </section>
  )
}