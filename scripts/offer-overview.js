export class OfferOverview {
    carouselBtnLeft = document.querySelector('.carousel-btn-left')
    carouselBtnRight = document.querySelector('.carousel-btn-right');
    offerOverviewCarousel = document.querySelector('.offer-overview-carousel')
    translateValue = 100;
    animationDuration = 300
    constructor() {
        this.setListeners()
    }
    setListeners() {
        this.carouselBtnLeft.addEventListener('click', e => this.translate(e))
        this.carouselBtnRight.addEventListener('click', e => this.translate(e))
    }

    translate(e) {
        const direction = e.target.dataset.direction;
 
        switch (direction) {
            case 'left':
                this.offerOverviewCarousel.animate([{
                    transform: `translateX(-${this.translateValue}px)`
                }], {
                    duration: this.animationDuration,
                    fill: 'backwards'
                })
                break;
            case 'right':
                this.offerOverviewCarousel.animate([{
                    transform: `translateX(${this.translateValue}px)`
                }], {
                    duration: this.animationDuration,
                    fill: 'backwards'
                })
                break;


        }
    }
}