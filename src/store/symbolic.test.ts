import {
	parseFileType,
	parseSymbolicString,
} from './symbolic';

describe('parseFileType()', () => {
	it('handles sockets', () => {
		expect(parseFileType('s')).toBe(0o140000);
	});

	it('handles links', () => {
		expect(parseFileType('l')).toBe(0o120000);
	});

	it('handles regular files', () => {
		expect(parseFileType('-')).toBe(0o100000);
	});

	it('handles blocks', () => {
		expect(parseFileType('b')).toBe(0o60000);
	});

	it('handles directories', () => {
		expect(parseFileType('d')).toBe(0o40000);
	});

	it('handles characters', () => {
		expect(parseFileType('c')).toBe(0o20000);
	});

	it('handles pipes', () => {
		expect(parseFileType('p')).toBe(0o10000);
	});
});

describe('parseSymbolicString()', () => {
	it('handles empty inputs', () => {
		expect(parseSymbolicString('')).toBeNull();
	});

	it('handles 9 dashes', () => {
		expect(parseSymbolicString('---------')).toBe(0);
	});

	it('handles 10 dashes', () => {
		expect(parseSymbolicString('----------')).toBe(0);
	});

	it('will trim spaces', () => {
		expect(parseSymbolicString('   ----------')).toBe(0);
		expect(parseSymbolicString('----------   ')).toBe(0);
		expect(parseSymbolicString('  ---------- ')).toBe(0);
	});

	it('handles basic symbolic strings', () => {
		expect(parseSymbolicString('--x--x--x')).toBe(0o111);
		expect(parseSymbolicString('-w--w--w-')).toBe(0o222);
		expect(parseSymbolicString('-wx-wx-wx')).toBe(0o333);
		expect(parseSymbolicString('r--r--r--')).toBe(0o444);
		expect(parseSymbolicString('r-xr-xr-x')).toBe(0o555);
		expect(parseSymbolicString('rw-rw-rw-')).toBe(0o666);
		expect(parseSymbolicString('rwxrwxrwx')).toBe(0o777);
		expect(parseSymbolicString('rwx------')).toBe(0o700);
		expect(parseSymbolicString('rwxr-xr-x')).toBe(0o755);
	});

	it('handles sticky bits', () => {
		expect(parseSymbolicString('rwsrwxrwx')).toBe(0o4777);
		expect(parseSymbolicString('rwsrwsrwx')).toBe(0o6777);
		expect(parseSymbolicString('rwsrwsrwT')).toBe(0o7776);
		expect(parseSymbolicString('rwsrwsrwt')).toBe(0o7777);
	});

	it('handles file types', () => {
		expect(parseSymbolicString('sr-xr-xr-x')).toBe(0o140555);
		expect(parseSymbolicString('lr-xr-xr-x')).toBe(0o120555);
		expect(parseSymbolicString('br-xr-xr-x')).toBe(0o60555);
		expect(parseSymbolicString('dr-xr-xr-x')).toBe(0o40555);
		expect(parseSymbolicString('cr-xr-xr-x')).toBe(0o20555);
		expect(parseSymbolicString('pr-xr-xr-x')).toBe(0o10555);
	});

	it('ignores regular files', () => {
		expect(parseSymbolicString('-r-xr-xr-x')).toBe(0o555);
	});

	it('returns null for invalid strings', () => {
		expect(parseSymbolicString('foobar')).toBeNull();
		expect(parseSymbolicString('rwxrwxrw')).toBeNull();
		expect(parseSymbolicString('rwx')).toBeNull();
		expect(parseSymbolicString('rwxrwxrwxr')).toBeNull();
		expect(parseSymbolicString('rxwrwxrwx')).toBeNull();
		expect(parseSymbolicString('Rwxrwxrwx')).toBeNull();
		expect(parseSymbolicString('rwxrwxrwx-')).toBeNull();
		expect(parseSymbolicString('--rwxrwxrwx')).toBeNull();
	});
});
