import {LitElement, html, css, property} from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class Ti8mNavItemCustomComponent extends LitElement {

  static styles = css`
    :host{
        font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;
        outline: 0;
        cursor: pointer;
    }

    :host(:hover) a{
      opacity: 1 !important;
    }

    :host(.active) a{
      opacity: 1 !important;
    }

    li {
        margin-right: 32px;
        float: left;
        position: relative;
        transition: all .3s ease;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        opacity: 1;
    }

    a{
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        color: #292929;
        opacity: .5;
        transition: all .3s ease;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        max-width: 100%;
        white-space: normal;
        text-decoration: none;
        outline: 0;

    }
  `;

  @property( { type : String }  ) href;
  @property( { type : String }  ) title;

  constructor() {
    super();
    this.href = '';
    this.title = 'Not defined';
  }

  render() {
    return html`
      <li>
            ${this.title}
        </li>
    `;
  }
}
