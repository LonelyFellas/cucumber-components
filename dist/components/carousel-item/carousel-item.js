import{B as i}from"../assets/base-element-f411db3f.js";customElements.define("cc-carousel-item",class extends i{connectedCallback(){super.render("<slot></slot>",`*{box-sizing:border-box}:host{display:flex;align-items:center;justify-content:center;flex-direction:column;scroll-snap-align:start;scroll-snap-stop:always;width:100%;height:100%;aspect-ratio:inherit}::slotted(img){width:100%;max-width:100%;height:100%;max-height:100%;object-fit:cover}
`),this.setAttribute("role","group"),this.setAttribute("aria-hidden","true");const t=Array.from(this.parentElement.querySelectorAll(this.localName)).findIndex(e=>e===this);this.setAttribute("aria-label",`Slide ${t+1}`),this.setAttribute("data-index",`${t+1}`)}});