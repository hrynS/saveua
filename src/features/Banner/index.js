import bannerImg from '../../assets/banner.png';
import { discordLink } from '../../constants';
import './style.css';

export const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner__content'>
                <img src={bannerImg} />
                <div className='banner__text'>
                    <h2>Join the community</h2>
                    <div className='text'>
                        Your help means our life tomorrow. Help our country today!
                    </div>
                    <button><a href={discordLink}>Join our discord</a></button>
                </div>
            </div>
        </section>
    );
}