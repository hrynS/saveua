import './style.css';

export const Footer = ({ renderLogo, renderMenuLinks, renderMenuIcons }) => {
    return (
        <footer>
            <div>
                {renderLogo()}
                <div className='footer__copyright'>
                    ©2022 SafeUkr. All rights reserved.
                </div>
            </div>
            <div className='footer__menu'>
                {renderMenuLinks()}
                {renderMenuIcons()}
            </div>
        </footer>
    );
}   