import { Browser, Page, launch } from 'puppeteer';

let browser: Browser;
let page: Page;

beforeAll(async () => {
	browser = await launch();
	page = await browser.newPage();
	await page.goto('http://localhost:3000/');
});

afterAll(() => {
	browser.close();
});

it('has the right title', async () => {
	expect(await page.title()).toBe('Modes');
});
