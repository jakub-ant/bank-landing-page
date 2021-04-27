import {
    downloadHide
} from './download-hide.js'
export class Download {
    downloadEl = document.querySelector('.download');
    hideDownloadBtn = document.querySelector('#hide-download-btn');
    hideBtnHiddenClass = 'hide-btn-hidden';
    constructor() {
        this.hideDownloadBtn.addEventListener('click', () => downloadHide.hide());
    }
    hideThePanel() {
        this.downloadEl.classList.add(this.hideBtnHiddenClass);
    }
    update(model) {
        if (model.hidden) {
            this.hideThePanel();
        }
    }
}