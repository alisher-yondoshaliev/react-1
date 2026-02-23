import { useState } from 'react'

import simpleBookmarking from '../assets/img/slide/simple-bokmarking.svg'
import speedySearching from '../assets/img/slide/speedy-searching.svg'
import easySharing from '../assets/img/slide/easy-sharing.svg'

const tabs = [
  {
    id: 'simple-bookmarking',
    label: 'Simple bookmarking',
    img: simpleBookmarking,
    imgAlt: 'Tablet',
    imgWidth: 536,
    imgHeight: 346,
    imgClass: 'tab-panels__tab-panel-img-simple-bookmarking',
    title: 'Bookmark in one click',
    description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 'speedy-searching',
    label: 'Speedy searching',
    img: speedySearching,
    imgAlt: "Speedy searching's img",
    imgWidth: 468,
    imgHeight: 393,
    imgClass: 'tab-panels__tab-panel-img-speedy-searching',
    title: 'Intelligent search',
    description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 'easy-sharing',
    label: 'Easy sharing',
    img: easySharing,
    imgAlt: "Easy sharing's img",
    imgWidth: 440,
    imgHeight: 380,
    imgClass: 'tab-panels__tab-panel-img-easy-sharing',
    title: 'Share your bookmarks',
    description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState('simple-bookmarking')

  return (
    <section className="index-features">
      <div className="index-features__container container">

        <div className="content index-features__content">
          <h2 className="content__title">Features</h2>
          <div className="content__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
        </div>

        {/* TABS */}
        <div className="tabs">
          <ul className="tabs__list">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`tabs__item js-tabs__item ${activeTab === tab.id ? 'tabs__item--active' : ''}`}
              >
                <a
                  className="tabs__link js-tabs__link"
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(tab.id)
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          <section className="tab-panels">
            <h2 className="visually-hidden">Feature's TabLink</h2>

            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-panels__tab-panel js-tab-panel ${activeTab === tab.id ? 'tab-panels__tab-panel--active' : ''}`}
                id={tab.id}
              >
                <div className="tab-panels__tab-panel-inner">
                  <img
                    className={`tab-panels__tab-panel-img ${tab.imgClass}`}
                    src={tab.img}
                    alt={tab.imgAlt}
                    width={tab.imgWidth}
                    height={tab.imgHeight}
                  />
                  <div className="tab-panels__tab-panel-content">
                    <h2 className="tab-panels__tab-panel-content-title">{tab.title}</h2>
                    <p className="tab-panels__tab-panel-content-description">{tab.description}</p>
                    <a className="button button--blue" href="#">More info</a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

      </div>
    </section>
  )
}