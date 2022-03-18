import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import { useEffect } from "react";

export const ImagesCarousel = ({ items, ...props }) => {
    useEffect(() => {
        document.addEventListener('click', ({ target }) => {
            console.log('CLICK', target);
        })
    }, [])

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        const className = `carousel__indicator ${isSelected ? 'selected' : ''}`;
        return (
            <div
                className={className}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
            >
                <span
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                >
                </span>
            </div>
        )
    }

    return (
        <div className="carousel__container">
            <Carousel
                showStatus={true}
                centerMode={true}
                renderIndicator={renderIndicator}
                {...props}
            >
                {items}
            </Carousel>
        </div>
    )
}