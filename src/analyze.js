import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
class analyzer extends LitElement{
    static get styles() {
        return [super.styles,
        css`
       
    
        `];
      }

      render() {
        return html`
    <div class="wrapper">
      <div>${this.title}</div>
      <slot></slot>
    </div>`;
    
      }


}