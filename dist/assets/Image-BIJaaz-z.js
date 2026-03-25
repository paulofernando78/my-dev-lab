import{s}from"./styles-DqAceQQB.js";const c=`
  :host {
    display: block;
    aspect-ratio: 16 / 9
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){const t=this.getAttribute("src")??"",e=this.getAttribute("alt")??"image";this.shadowRoot.innerHTML=`
      <style>
        ${s}
        ${c}
      </style>
      <img src="${t}" alt="${e}" />
    `}}customElements.define("wc-image",o);
