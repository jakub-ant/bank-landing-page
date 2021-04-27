export class Header {
    headerEl = document.querySelector('.header');
    headerMenuList = document.querySelector('.header-menu-list');
    headerMenuCheckbox = document.querySelector('#header-menu-checkbox');
    showList = false;
    hideBtnHiddenClass ='hide-btn-hidden';
    constructor() {
        this.setEventListeners();
    };
    setEventListeners() {
        this.headerMenuCheckbox.addEventListener('click', () => this.showListAnimate());
    };

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
            menuAnimation(-200);
        } else {
            menuAnimation();
        };
        this.showList = !this.showList;
    }
    hideThePanel() {
        this.headerEl.classList.add(this.hideBtnHiddenClass)
    }
    update(model){
        if (model.hidden) {
        this.hideThePanel();
        }
    }
}