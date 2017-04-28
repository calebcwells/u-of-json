import { UofJsonPage } from './app.po';

describe('uof-json App', () => {
	let page: UofJsonPage;

	beforeEach(() => {
		page = new UofJsonPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('uoj works!');
	});
});
