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
        if (this.showList) {
            this.headerMenuList.animate([{
                transform: 'translateX(-200px)'
            }], {
                duration: 300,
                fill: 'forwards'
            });
        } else {
            this.headerMenuList.animate([{
                transform: 'translateX(0)'
            }], {
                duration: 300,
                fill: 'forwards'
            });
        }
        this.showList = !this.showList
    }
}