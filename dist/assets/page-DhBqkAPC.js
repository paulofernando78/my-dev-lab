import{s as t}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as i,s as o}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./CardCode-DTGEN7ch.js";import"./Links-jNmpqXk5.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";import"./Spacer-MCI0SMHI.js";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=[{sectionId:"keyboard-shortcuts",sectionLabel:"Keyboard shortcuts",description:`
            <style>
              td:first-child {
                font-weight: bold
              }
            </style>
            <p>Essential VS Code keyboard shortcuts to improve speed and productivity while coding.</p>
            <wc-spacer></wc-spacer>
            <table>
            <tr>
              <td>Ctrl + D</td>
              <td>Mutiple selected</td>
            </tr>
            <tr>
              <td>Shift + Alt</td>
              <td>duplicate line</td>
            </tr>
            <tr>
              <td>Alt + Z:</td>
              <td>VS Code Alignment</td>
            </tr>
            <tr>
              <td>Crtl + space</td>
              <td>VS Code folder</td>
            </tr>
          </table>
        `},{sectionId:"settings",sectionLabel:"Settings",description:`
          <p>Recommended VS Code settings for a cleaner, smoother, and more productive coding experience.</p>
          <wc-spacer></wc-spacer>
          <ul>
            <li>Bracket pair: on</li>
            <li>word map: on</li>
            <li>cursor smooth: on</li>
            <li>blink: expand</li>
          </ul>
          
        `},{sectionId:"extensions",sectionLabel:"Extensions",description:`
        <p>Mac: ⇧ Cmd + ⌘ Shift + X</p>
        <p>Windows: Crtl + Shift + X</p>
        <wc-spacer></wc-spacer>  
        <ul>
            <li>ESLint</li>
            <li>HTMLHint</li>
            <li>vscode-icons</li>
            <li>Prettier - Code Formatter</li>
            <li>Javascript (ES6) code snippets</li>
            <li>Figma for VS Code</li>
            <li>Error Lens</li>
            <li>Auto Rename Tag</li>
            <li>htmltagwrap</li>
            <li>Better Comments</li>
            <li>Code Snap</li>
            <li>Snippets Creator</li>
            <li>Path Intellisense</li>
            <li>Image preview</li>
            <li>es6-string-html (for Web Components)</li>
          </ul>
        `},{sectionId:"links",sectionLabel:"Links",links:[{href:"https://code.visualstudio.com/",label:"VS Code | The open source AI code editor"}]}];this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${i(e)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,e)}}customElements.define("wc-tools-ide-vs-code",s);export{s as default};
