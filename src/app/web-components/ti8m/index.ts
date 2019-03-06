import {Ti8mLogoCustomComponent} from './ti8m-logo';
import {Ti8mNavBarCustomComponent} from './ti8m-nav-bar';
import {Ti8mNavItemCustomComponent} from './ti8m-nav-item';
import {Ti8mNavItemGroupCustomComponent} from './ti8m-nav-item-group';
import {Ti8mNavItemUserCustomComponent} from './ti8m-nav-item-user';

export function defineTi8mCustomComponents() {

  customElements.define('tim-logo', Ti8mLogoCustomComponent);
  customElements.define('tim-nav-bar', Ti8mNavBarCustomComponent);
  customElements.define('tim-nav-item', Ti8mNavItemCustomComponent);
  customElements.define('tim-nav-item-group', Ti8mNavItemGroupCustomComponent);
  customElements.define('tim-nav-item-user', Ti8mNavItemUserCustomComponent);
}
