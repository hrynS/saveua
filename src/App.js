import { Fragment } from 'react';
import './App.css';
import headerImg from './assets/soldier_header.png';
import galleryVideo from './assets/gallery_video.mp4';
import logoImg from './assets/logo.png';
import { HistorySection } from './features/HistorySection';
import { FaqSection } from './features/FAQ';
import { Banner } from './features/Banner';
import { Footer } from './features/Footer';
import { Partners } from './features/Partners';
import { menuLinks, socialNetworksToIcons, TEAM, discordLink } from './constants';

const renderLogo = () => {
  return (
    <div className='logo__container'>
      <div className='logo'>
        <a href={menuLinks['Home']}>
          <img src={logoImg} />
          <span>Safe Ukraine</span>
        </a>
      </div>
      <div className='logo__bottom-text'>
        Your help means our life tomorrow.
      </div>
    </div>
  )
}

const renderMenuIcons = () => {
  return <div class="menu__items">
    {Object.values(socialNetworksToIcons).map(({ icon, link }) => {
      return (
        <a class="menu__item-link " href={link}>
          {icon}
        </a>
      )
    })}
  </div>
}

const renderMenuLinks = () => {
  return (
    <div>
      {Object.keys(menuLinks).map(item => {
        return (
          <a href={menuLinks[item]} className="footer__nav-link">
            {item}
          </a>
        );
      })}
    </div>
  )
};

const mobileWidthInPx = 800;

const isMobile = () => {
  return window.innerWidth <= mobileWidthInPx;
}

const renderTeamCarouselItem = () => {
  return TEAM.map(({
    name,
    occupation,
    linkedinUrl,
    imgSrc,
  }, idx) => {
    const itemsInRow = isMobile() ? 2 : 3;
    const isColumn = window.innerWidth <= 500;
    return (
      <div className='item'>
        <div className='carousel__header'>
          <div>
            <div className='item__title'>
              {name}
            </div>
            <div className='item__text'>
              {occupation}
            </div>
          </div>
          <a className='carousel__icon' href={linkedinUrl}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H40V40H0V0ZM10.25 16.625V30H14.5V16.625H10.25ZM10 12.375C10 13.75 11 14.75 12.375 14.75C13.75 14.75 14.75 13.75 14.75 12.375C14.75 11 13.75 10 12.375 10C11.125 10 10 11 10 12.375ZM25.75 30H29.75V21.75C29.75 17.625 27.25 16.25 24.875 16.25C22.75 16.25 21.25 17.625 20.875 18.5V16.625H16.875V30H21.125V22.875C21.125 21 22.375 20 23.625 20C24.875 20 25.75 20.625 25.75 22.75V30Z" fill="#4685FF" />
            </svg>
          </a>
        </div>
        <div className='carousel__img'>
          <img src={require(`./assets/${imgSrc}`)} />
          <div class="img__overlay"></div>
        </div>
        {(idx !== 0 && idx % itemsInRow !== 0 && !isColumn) && (<div className='vertical__divider'></div>)}
      </div>
    );
  });
};

function App() {
  return (
    <Fragment>
      <main>
        <header>
          <div class="menu__bar">
            {renderLogo()}
            {renderMenuIcons()}
          </div>
          <div>
            <div class="header__img">
              <img src={headerImg} />
            </div>
            <button><a href={discordLink}>Join the community</a></button>
          </div>
        </header>
        <section id="about" class="gallery">
          <div class="gallery__column">
            <h1>Safe Ukraine</h1>
            <div className='gallery__text'>
              This project was created to help our nation in this unfair and merciless war against the Ukrainian people!
              <br />
              <br />
              Our goal is that 100% of the funds raised go to the charity of our army, victims of the war, as well as assistance to the state
              Therefore, we want our community to decide where all the money raised will go. So that everything is as open and honest as possible with respect to everyone!
            </div>
          </div>
          <div class="gallery__column">
            <video autoPlay loop muted src={galleryVideo} />
            <div class="img__overlay"></div>
          </div>
        </section>
        <HistorySection />
        <section id="team" className="team">
          <h1>Our brave team!</h1>
          <div className="team__items">{renderTeamCarouselItem()}</div>
        </section>
        <Partners/>
        <FaqSection />
        <Banner />
        <Footer
          renderLogo={renderLogo}
          renderMenuLinks={renderMenuLinks}
          renderMenuIcons={renderMenuIcons}
        />
      </main>
    </Fragment>
  );
}

export default App;
