import './App.css';
import headerImg from './assets/soldier_header.png';
import galleryImg from './assets/gallery_img.png';
import logoImg from './assets/logo.png';
import { ImagesCarousel } from './features/ImagesCarousel';
import { HistorySection } from './features/HistorySection';
import { FaqSection } from './features/FAQ';
import { Banner } from './features/Banner';
import { Footer } from './features/Footer';
import { menuLinks, socialNetworksToIcons, TEAM, discordLink } from './constants';
import { Fragment } from 'react';

const renderDivider = () => (
  <div class="divider">
    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="82" viewBox="0 0 1440 82">
      <path d="M719.5 81.7015L0 0V5399H1440V0L719.5 81.7015Z" />
    </svg>
  </div>
);

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

const renderCarouselImageItem = (item, { isSelected }) => {
  if (isSelected) {
    return (
      <div className='carousel__img selected'>
        {item}
        <div class="img__overlay"></div>
      </div>);
  }

  return (
    <div className='carousel__img'>
      {item}
      <div class="img__overlay"></div>
    </div>);
};

const importAll = (r) => {
  return r.keys().map(r);
}

const listOfImages = importAll(require.context('./assets/gallery', false, /\.(png)$/));
console.log('listOfImages', listOfImages);

const getCarouselImages = () => {
  return listOfImages.map((image, idx) => <img key={idx} src={image} />)
};

const renderTeamCarouselItem = () => {
  return TEAM.map(({
    name,
    occupation,
    linkedinUrl,
    imgSrc,
  }, idx) => {
    return (
      <div className='carousel__item'>
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
        {idx !== 0 && (<div className='vertical__divider'></div>)}
      </div>
    );
  });
};

const mobileWidthInPx = 800;

const isMobile = () => {
  console.log('innerWidth', window.innerWidth);
  return window.innerWidth <= mobileWidthInPx;
}

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
        {renderDivider()}
        <section id="about" class="gallery">
          <div class="gallery__column">
            <h1>Safe Ukraine NFT</h1>
            <div className='gallery__text'>
              This project was created to help our army in this unfair and merciless war against the Ukrainian people, in the first place.
              We want that 100% of raised money form minting NFTs will be automatically sent to the support fund of the Ukrainian army!
            </div>
          </div>
          <div class="gallery__column">
            <img src={galleryImg} />
            <div class="img__overlay"></div>
          </div>
        </section>
        <section class="images__gallery">
          <ImagesCarousel
            infiniteLoop={true}
            items={getCarouselImages()}
            renderItem={renderCarouselImageItem}
            centerSlidePercentage={isMobile() ? 80 : 33}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
          />
        </section>
        <HistorySection />
        <section id="team" className="team">
          <h1>Our brave team!</h1>
          <ImagesCarousel
            infiniteLoop={false}
            items={renderTeamCarouselItem()}
            centerSlidePercentage={isMobile() ? 80 : 33}
            showArrows={false}
            showStatus={false}
          />
        </section>
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
