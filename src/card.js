import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
class card extends LitElement{
    static get styles() {
        return super.styles,
        css`
        :host{
     display: inline-flex; 
    }
    .list{
  display: inline-block;
}

.card{
    background-color:aqua;
   border-radius: 16px;
  font-size: 20px;
  padding:16px;
  width:300px;
  margin: 8px 8px;
}
.image{
   height: 200px;
  max-width: 200px;
}
@media(max-width: 800px){
    .details{
      display: inline;
    }
}
@media ( max-width: 500px){
    .details{
      display: none;
    }
}
 `;
    }
}
   constructor() {
    super();
    this.title = "";
    this.image ="#";
    this.text = "";
    this.link = "#";
      }

      render() {
        return html`
    <div id="cardlist">
        <div class="card">
          <img
            class="image"
            src= ${this.image} 
          />
          <h1 class="title">${this.title}</h1>
          <p class="text">${this.text}</p>
       <summary>Description</summary>
       <div>
        <slot>${this.text2}</slot>
       </div>
        </details>
          <a class="link" href=${this.link}>
          </a>
          
        </div>
      </div>  
      `;
  }

