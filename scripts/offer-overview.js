export class OfferOverview {
    carouselBtnLeft = document.querySelector('.carousel-btn-left')
    carouselBtnRight = document.querySelector('.carousel-btn-right');
    offerOverviewCarousel = document.querySelector('.offer-overview-carousel')
    translateValue = 100;
    animationDuration = 300;
    animationMoved = {
        state: false,
        direction: null
    }
    constructor() {
        this.setListeners()
    }
    setListeners() {
        this.carouselBtnLeft.addEventListener('click', e => this.translate(e))
        this.carouselBtnRight.addEventListener('click', e => this.translate(e))
    }

    translate(e) {
        const checkAnimation = () => {
            const direction = e.target.dataset.direction
            if (this.animationMoved.state && !(this.animationMoved.direction == direction)) {
                return 'reset';
            } else {
                return direction;
            }
        }
        const animateCarousel = (translateValue = 0) => {
            this.offerOverviewCarousel.animate([{
                transform: `translateX(${translateValue}px)`
            }], {
                duration: this.animationDuration,
                fill: 'forwards'
            })
        }
        switch (checkAnimation()) {
            case 'reset':
                this.animationMoved.state = false;
                this.animationMoved.direction = null
                animateCarousel()
                break;
            case 'left':
                this.animationMoved.state = true;
                this.animationMoved.direction = 'left'
                animateCarousel(-this.translateValue)
                break;
            case 'right':
                this.animationMoved.state = true;
                this.animationMoved.direction = 'right'
                animateCarousel(this.translateValue)
                break;
        }
    }
}