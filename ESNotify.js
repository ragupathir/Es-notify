class ESNotify {

    constructor() {
        this.container = document.querySelector('#esnotify-view');
        if (this.container === null) {
            this.container = document.createElement("div");
            this.container.id = 'esnotify-view';
            this.container.classList.add('esnotify-view');
            document.body.appendChild(this.container);
        }
        this.view = document.createElement("div");
        this.hideTimeout = 0;
        this.hideBound = this.remove.bind(this);
    }

    info(message, time) {
        this.toast(message, time, 'esnotify-info');
    }
    warning(message, time) {
        this.toast(message, time, 'esnotify-warning');
    }
    error(message, time) {
        this.toast(message, time, 'esnotify-error');
    }
    toast(message, time, toastType = 'esnotify-info') {
        this.view.classList.add('esnotify-toast');
        this.view.onclick = this.onclickHide;
        if (typeof toastType == 'string' || toastType instanceof String) {
            this.view.classList.add(toastType);
        }
        this.view.style.animationDuration = `${time}ms`;
        this.view.appendChild(document.createTextNode(message));
        this.container.appendChild(this.view);
        clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(this.hideBound, time);
    }
    onclickHide() {
        this.style.display = 'none';
    }
    remove() {
        this.view.parentNode.removeChild(this.view);
    }
}

export { ESNotify }
