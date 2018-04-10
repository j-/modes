import * as React from 'react';

import {
	S_IFMT,
	S_IFSOCK,
	S_IFLNK,
	S_IFREG,
	S_IFBLK,
	S_IFDIR,
	S_IFCHR,
	S_IFIFO,
} from '../stat';

export interface FileTypeProps {
	mode: number;
}

const getFileType = (mode: number): string | null => {
	switch (mode & S_IFMT) {
		case S_IFSOCK: return 'Socket';
		case S_IFLNK: return 'Link';
		case S_IFREG: return 'Regular';
		case S_IFBLK: return 'Block';
		case S_IFDIR: return 'Directory';
		case S_IFCHR: return 'Character';
		case S_IFIFO: return 'Pipe';
		default: return null;
	}
};

const FileType: React.StatelessComponent<FileTypeProps> = ({ mode }) => {
	const fileType = getFileType(mode);
	const content = fileType || <em>Unknown</em>;
	return <span className="FileType">{content}</span>;
};

export default FileType;
