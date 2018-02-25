import { browser, element, by } from 'protractor';
export class LoginPage {
  navigateTo() {
    return browser.get('login');
  }
  getTitle() {
    return element(by.css('mat-card-title')).getText();
  }

  enterNewUserName(newName: string) {
    const newUserField = element(by.css('[name="name"]'));
    newUserField.sendKeys(newName);
  }

  getAddUserButton() {
    return element(by.css('[data-aid="register-user'));
  }

  isAddUserButtonDisabled() {
    return this.getAddUserButton().getAttribute('disabled');
  }

  getExistingUsers() {
    return element.all(by.css('app-list mat-list-item'));
  }
}
