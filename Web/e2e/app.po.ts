import { browser, element, by } from 'protractor';

export class UofJsonPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('uoj-root h1')).getText();
	}
}
