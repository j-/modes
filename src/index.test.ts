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

it('renders the default mode in decimal', async () => {
	await page.waitForSelector('.Mode');
	const element = await page.$('.Mode');
	expect(element).toBeTruthy();
	const textContent = await page.$eval('.Mode', (el) => el.textContent);
	expect(textContent).toBe('511');
});
