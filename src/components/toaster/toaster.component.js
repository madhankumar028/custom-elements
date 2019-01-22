const TOASTER_STYLES = `
    .toaster-container {
        position: absolute;
        top: 5px;
        right: 0;
        padding: 0;
        margin: 0;
        background: red;
        color: #fff;
        height: 50px;
        width: 200px;
        text-align: center;
        box-sizing: border-box;
    }
`;

class ToasterComponent extends HTMLElement {

    static get observedAttribute() {
        return ['timer', 'hasCloseIcon', 'message', 'auto'];
    }

    constructor() {
        super();
    }

    render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${TOASTER_STYLES}</style>`;

        this.toaster = document.createElement('div');
        this.toaster.classList.add('toaster-container');
        this.toaster.innerHTML = `<p>${this.getAttribute('message')}</p>`;

        shadowRoot.appendChild(this.toaster);
    }
    
    connectedCallback() {
        this.toasterMessage = this.getAttribute('message') || 'DUMMY TEXT';
        this.toasterTiming = '3000';
        this.hasCloseIcon = this.getAttribute('hasCloseIcon') || false;

        this.render();
    }
}

window.customElements.define('toaster-component', ToasterComponent);
