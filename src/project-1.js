import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class project1 extends DDDSuper(LitElement) {

  static get tag() {
    return "project-1";
  }

  constructor() {
    super();
    this.title = "";
    this.name = "";
    this.description = "";
    this.logo;
    this.theme = "";
    this.created = "";
    this.lastupdate= "";
    this.url = ""
    this.checksite = false;
  }

  static get properties() {
    return {
      title: { type: String },
      name:{ type: String},
      checksite:{type: Boolean}
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--project-1-font-size, var(--ddd-font-size-s));
        margin: 0;
    padding: 0;
    bod-sizing: border-box;
    font-family: 'Poppins', sans-serif;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      
      div {
        padding: 0;
        margin: 0;
      }

  
.container{
    width: 100%;
    min-height: 100vh;
    padding: 5%;
    background-image: linear-gradient(rgba(0,8,51,0.9),rgba(0,8,51,0.9));
    background-position: center;
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
}
.search-bar{
    width: 100%;
    max-width: 700px;
    background: rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    border-radius:60px;
    padding:10px 20px
}
    `];
  }

  checksite(){
    if(this.url = ''){
      this.url = 'https://haxtheweb.org/site.json';
    }
    if(this.url && this.url.endsWith('site.json')){
      this.checksite = true;
    }
  }

  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <slot></slot>
</div>`;

  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(project1.tag, project1);