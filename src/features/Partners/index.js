import partnerImg from '../../assets/partner.png';
import './style.css';

export const Partners = () => {
    return (
        <section id="partners">
          <h1 className='display-block'>Our partner</h1>
          <div className='partners__container'>
            <div className='partners__description'>
                Ukraine Support Foundation
            <br/>
            <br/>
            A benevolent foundation, created by Ukrainians in Poland to help support that support of Ukraine, as it suffered from the war with Russia.
            </div>
          <div className='partners__cta'>
            <div className='partners__img-container'>
              <img src={partnerImg} />
            </div>
            <button className='inverted'><a href="https://ukrfundation.com/">to the website</a></button>
          </div>
          </div>
        </section>
    );
}