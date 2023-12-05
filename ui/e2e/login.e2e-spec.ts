import { browser } from 'protractor';
import { LoginPage } from './login.po';
describe('ng-in-action Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should show correct title', () => {
    page.navigateTo();

    expect(page.getTitle()).toEqual('Login');
  });

  it('Add User button is disabled', () => {
    page.navigateTo();

    expect(page.isAddUserButtonDisabled()).toBeTruthy();
  });

  it('Should enable Add User button after entering text', () => {
    page.navigateTo();

    page.enterNewUserName('TestUser');

    expect(page.isAddUserButtonDisabled()).toBeFalsy();
  });

  it('Should have at least 3 users to select', () => {
    page.navigateTo();
    expect(page.getExistingUsers().count()).toBeGreaterThanOrEqual(3);
  });

  it('Should navigate to chat after selecting User', () => {
    page.navigateTo();
    page.getExistingUsers().first().click();

    browser.waitForAngularEnabled(false);
    browser.sleep(100);
    expect(browser.getCurrentUrl()).toMatch(/chat$/);
  });
});
