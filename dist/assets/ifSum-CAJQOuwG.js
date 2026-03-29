import{s as o}from"./index-WhkxeUrP.js";const a=".inner-container{display:flex;flex-direction:column;align-items:center;gap:10px;width:max-content;margin-block:1rem;padding-inline:1rem}.apple{width:24px}span{display:block}button{width:max-content}";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=this.shadowRoot.querySelector("button");e&&e.addEventListener("click",()=>{const t=this.shadowRoot.querySelector("#counter"),n=Number(t.textContent)+1;if(n<=5)t.textContent=n;else{const s=this.shadowRoot.querySelector("#msg");s.innerText="You've reached max items per person."}})}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${o}
        ${a}
      </style>
      <div>
        <span>Apples on sale.</span>
        <span>Max 5 per person.</span>
        <div class="inner-container">
          <image
            src="/assets/images/apple.png"
            alt="apple icon"
            class="apple"
          ></image>
          <button>Add</button>
          <div id="counter">0</div>
        </div>
        <span id="msg"></span>
      </div>
    `}}customElements.define("wc-if-sum",i);
