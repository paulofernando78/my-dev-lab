import{s}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as a,s as t}from"./renderSection-DkGTr7g2.js";import"./SubSection-Dx3IDIH1.js";import"./CardIcon-DIE4COqa.js";import"./Links-jNmpqXk5.js";import"./Image-BzCDZVMb.js";import"./Topic-7L1nWIDb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./Demo-Ciq0aQYx.js";import"./LessonNav-C8O3cQxq.js";class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){const e=[{sectionId:"Section",sectionLabel:"Section",description:`
          ...
        `,sampleAnswer:`

        `,notes:`
          ...
        `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],subSections:[{subSectionId:"sub-section",subSectionLabel:"Sub Section",description:`
              ...
            `,notes:`
              ...
            `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],topics:[{topicId:"topic",topicLabel:"Topic",description:`
                  ...
                `,notes:`
                  ...
                `,imgs:[{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"},{imgSrc:"/assets/images/semantic.jpg",alt:"Headings example"}],cardCodes:[{cardLabel:"HTML",language:"html",code:`

                  `},{cardLabel:"CSS",language:"css",code:`

                  `},{cardLabel:"Javascript",language:"js",code:`

                  `}],preview:`
                  <wc-></wc->
                `,sandbox:[{html:!0,css:!0,js:!0,console:!0}]},{topicId:"topic",topicLabel:"Topic",cardCodes:[{cardLabel:"HTML",language:"html",code:""}]},{topicId:"topic",topicLabel:"Topic",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""}]},{topicId:"topic",topicLabel:"Topic",cardCodes:[{cardLabel:"HTML",language:"html",code:""},{cardLabel:"CSS",language:"css",code:""},{cardLabel:"Javascript",language:"js",code:""}]}]}]},{sectionId:"resources",sectionLabel:"Resources",links:[{href:"https://www.google.com/",label:"link"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${s}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${a(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,t(this.shadowRoot,e)}}customElements.define("wc-boilerplate",c);export{c as default};
