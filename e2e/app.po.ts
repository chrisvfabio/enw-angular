import { browser, element, by } from 'protractor';

export class EssentialNordicWalkingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('enw-root h1')).getText();
  }
}
