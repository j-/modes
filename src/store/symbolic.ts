import {
	S_IFBLK,
	S_IFCHR,
	S_IFDIR,
	S_IFLNK,
	S_IFIFO,
	S_IFSOCK,
	S_IFREG,

	S_ISUID,
	S_ISGID,
	S_ISVTX,

	S_IRUSR,
	S_IWUSR,
	S_IXUSR,

	S_IRGRP,
	S_IWGRP,
	S_IXGRP,

	S_IROTH,
	S_IWOTH,
	S_IXOTH,
} from '../stat';

export const formatFileType = (mode: number): string => (
	(mode & S_IFSOCK) === S_IFSOCK ? 's' :
	(mode & S_IFLNK) === S_IFLNK ? 'l' :
	(mode & S_IFBLK) === S_IFBLK ? 'b' :
	(mode & S_IFDIR) === S_IFDIR ? 'd' :
	(mode & S_IFCHR) === S_IFCHR ? 'c' :
	(mode & S_IFIFO) === S_IFIFO ? 'p' :
	'-'
);

export const formatUser = (mode: number): string => (
	(mode & S_IRUSR ? 'r' : '-') +
	(mode & S_IWUSR ? 'w' : '-') +
	(mode & S_ISUID ? (mode & S_IXUSR ? 's' : 'S') : (mode & S_IXUSR ? 'x' : '-'))
);

export const formatGroup = (mode: number): string => (
	(mode & S_IRGRP ? 'r' : '-') +
	(mode & S_IWGRP ? 'w' : '-') +
	(mode & S_ISGID ? (mode & S_IXGRP ? 's' : 'S') : (mode & S_IXGRP ? 'x' : '-'))
);

export const formatOther = (mode: number): string => (
	(mode & S_IROTH ? 'r' : '-') +
	(mode & S_IWOTH ? 'w' : '-') +
	(mode & S_ISVTX ? (mode & S_IXOTH ? 't' : 'T') : (mode & S_IXOTH ? 'x' : '-'))
);

export const formatSymbolicString = (mode: number): string => (
	formatFileType(mode) +
	formatUser(mode) +
	formatGroup(mode) +
	formatOther(mode)
);

export const parseFileType = (input: string): number | null => {
	switch (input) {
		case 's': return S_IFSOCK;
		case 'l': return S_IFLNK;
		case 'b': return S_IFBLK;
		case 'd': return S_IFDIR;
		case 'c': return S_IFCHR;
		case 'p': return S_IFIFO;
		case '-': return S_IFREG;
		default: return null;
	}
};

const symbolicExp = /^\s*([slbdcp\-])?(r|-)(w|-)(x|s|S|-)(r|-)(w|-)(x|s|S|-)(r|-)(w|-)(x|t|T|-)\s*$/;

export const parseSymbolicString = (input: string): number | null => {
	const match = input.match(symbolicExp);

	if (!match) {
		return null;
	}

	let result = 0;

	if (match[1]) {
		const type = parseFileType(match[1]);
		if (!type) {
			// Invalid file type. Exit early.
			return null;
		} else if (type !== S_IFREG) {
			// Ignore regular files.
			result += type;
		}
	}

	if (match[ 2] === 'r') { result += S_IRUSR; }
	if (match[ 3] === 'w') { result += S_IWUSR; }
	if (match[ 4] === 'x') { result += S_IXUSR; }
	if (match[ 4] === 's') { result += S_IXUSR; result += S_ISUID; }
	if (match[ 4] === 'S') { result += S_ISUID; }

	if (match[ 5] === 'r') { result += S_IRGRP; }
	if (match[ 6] === 'w') { result += S_IWGRP; }
	if (match[ 7] === 'x') { result += S_IXGRP; }
	if (match[ 7] === 's') { result += S_IXGRP; result += S_ISGID; }
	if (match[ 7] === 'S') { result += S_ISGID; }

	if (match[ 8] === 'r') { result += S_IROTH; }
	if (match[ 9] === 'w') { result += S_IWOTH; }
	if (match[10] === 'x') { result += S_IXOTH; }
	if (match[10] === 't') { result += S_IXOTH; result += S_ISVTX; }
	if (match[10] === 'T') { result += S_ISVTX; }

	return result;
};
