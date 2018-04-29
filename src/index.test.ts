import { Browser, Page, launch } from 'puppeteer';

let browser: Browser;
let page: Page;

const getValue = (el: HTMLInputElement) => el.value;

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

it('can empty octal value', async () => {
	await page.focus('#Inputs-input-octal');
	await page.keyboard.down('Control');
	await page.keyboard.press('KeyA');
	await page.keyboard.up('Control');
	await page.keyboard.press('Backspace');
	expect(await page.$eval('#Inputs-input-decimal', getValue)).toBe('0');
	expect(await page.$eval('#Inputs-input-symbolic', getValue)).toBe('----------');
});

it('can set octal value', async () => {
	await page.focus('#Inputs-input-octal');
	await page.keyboard.down('Control');
	await page.keyboard.press('KeyA');
	await page.keyboard.up('Control');
	await page.keyboard.type('47777');
	expect(await page.$eval('#Inputs-input-decimal', getValue)).toBe('20479');
	expect(await page.$eval('#Inputs-input-symbolic', getValue)).toBe('drwsrwsrwt');
});
