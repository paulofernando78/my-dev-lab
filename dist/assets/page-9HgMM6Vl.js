import{s as e}from"./index-WhkxeUrP.js";const t=`
  .not-found {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: var(--padding);
  }
`;class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${t}
      </style>
      <section class="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </section>
      
    `}}customElements.define("wc-404",n);export{n as default};
