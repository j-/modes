import {
	S_IFBLK,
	S_IFCHR,
	S_IFDIR,
	S_IFLNK,
	S_IFIFO,
	S_IFSOCK,
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
	(mode & S_ISUID ? 's' : (mode & S_IXUSR ? 'x' : '-'))
);

export const formatGroup = (mode: number): string => (
	(mode & S_IRGRP ? 'r' : '-') +
	(mode & S_IWGRP ? 'w' : '-') +
	(mode & S_ISGID ? 's' : (mode & S_IXGRP ? 'x' : '-'))
);

export const formatOther = (mode: number): string => (
	(mode & S_IROTH ? 'r' : '-') +
	(mode & S_IWOTH ? 'w' : '-') +
	(mode & S_ISVTX ? 't' : (mode & S_IXOTH ? 'x' : '-'))
);

export const formatSymbolString = (mode: number): string => (
	formatFileType(mode) +
	formatUser(mode) +
	formatGroup(mode) +
	formatOther(mode)
);
