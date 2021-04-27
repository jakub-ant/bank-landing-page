class DownloadHide {
    hidden = false;
    observers =[];

    hide() {
        this.hidden = true;
        this.onHidenotifyObservers();
    }

    addObserver(o) {
        this.observers.push(o);
    }

    onHidenotifyObservers() {
        this.observers.forEach(o => o.update(this));
    }
}

export const downloadHide = new DownloadHide();
 