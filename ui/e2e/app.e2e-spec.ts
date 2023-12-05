import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('ng-in-action App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to login', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toMatch(/login$/);
  });
});
