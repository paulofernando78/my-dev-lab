import{s as a}from"./styles-D2zBeGTj.js";import"./PageHeader-DKxin07F.js";import{r as s,s as t}from"./renderSection-DyoUKUCK.js";import"./CardIcon-BpS4dru2.js";import"./SubSection-DF8fSDKq.js";import"./Links-FCbr7Lwo.js";import"./Image-C4E2eAVl.js";import"./Topic-BbosjqFJ.js";import"./CardCode-yhvPs5fJ.js";import"./Code-fMuPM1Lh.js";import"./Demo-Ci2l3BAP.js";import"./LessonNav-Bi30Oqwd.js";import"./index-CJbI1lfT.js";const c=`

`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){const e=[{sectionId:"Section",sectionLabel:"Section",sectionAriaLabel:"...",description:`
          ...
        `,sampleAnswer:`
          
        `,notes:`
          ...
        `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],subSections:[{subSectionId:"sub-section",subSectionLabel:"Sub Section",subSectionAriaLabel:"...",description:`
              ...
            `,notes:`
              ...
            `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],topics:[{topicId:"topic",topicLabel:"Topic",topicAriaLabel:"...",description:`
                  ...
                `,notes:`
                  ...
                `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],cardCodes:[{cardLabel:"HTML",language:"html",code:`

                `},{cardLabel:"CSS",language:"css",code:`
                    
                `},{cardLabel:"Javascript",language:"js",code:`

                `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"topic",topicLabel:"Topic",topicAriaLabel:"...",cardCodes:[{cardLabel:"HTML",language:"html",code:`

                `}]},{topicId:"topic",topicLabel:"Topic",topicAriaLabel:"...",cardCodes:[{cardLabel:"HTML",language:"html",code:`

                `},{cardLabel:"CSS",language:"css",code:`
                    
                `}]},{topicId:"topic",topicLabel:"Topic",topicAriaLabel:"...",cardCodes:[{cardLabel:"HTML",language:"html",code:`

                `},{cardLabel:"CSS",language:"css",code:`
                    
                `},{cardLabel:"Javascript",language:"js",code:`

                `}]}]}]},{sectionId:"resources",sectionLabel:"Resources",sectionAriaLabel:"Resources",links:[{href:"https://www.google.com/",label:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${a}
        ${c}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${s(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,t(this.shadowRoot,e)}}customElements.define("wc-boilerplate",i);export{i as default};
