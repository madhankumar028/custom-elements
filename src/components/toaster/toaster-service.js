export class ToasterElement extends customElements {

    static get observedAttribute() {
        return ['timer', 'hasCloseIcon'];
    }

    constructor() {
        super(this);
        // TODO: creation of shadow dom for toaster component
    }
    
    connectedCallback() {

    }

    disconnectedCallback() {

    }
}
