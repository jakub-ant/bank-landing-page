export class InnerContainer {
    element = document.querySelector('#inner-container');
    hideBtnHiddenClass = 'hide-btn-hidden';

    update(model) {
        if (model.hidden) {
            this.element.classList.add(this.hideBtnHiddenClass);
        }
    }
}