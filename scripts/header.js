export class Header {
    headerMenuList = document.querySelector('.header-menu-list');
    headerMenuCheckbox = document.querySelector('#header-menu-checkbox');
    showList = false;
    constructor() {
        this.setEventListeners()
    }
    setEventListeners() {
        this.headerMenuCheckbox.addEventListener('click', () => this.showListAnimate())
    }

    showListAnimate() {
        const menuAnimation = (translateValue = 0) => {
            this.headerMenuList.animate([{
                transform: `translateX(${translateValue}px)`
            }], {
                duration: 300,
                fill: 'forwards'
            });
        }
        if (this.showList) {
            menuAnimation(-200)
        } else {
            menuAnimation()
        }
        this.showList = !this.showList
    }
}