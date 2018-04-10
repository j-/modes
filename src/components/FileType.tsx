import * as React from 'react';

import {
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

const FileType: React.StatelessComponent<FileTypeProps> = ({ mode }) => {
	const textContent = (
		(mode & S_IFSOCK) === S_IFSOCK ? 'Socket' :
		(mode & S_IFLNK) === S_IFLNK ? 'Link' :
		(mode & S_IFREG) === S_IFREG ? 'Regular' :
		(mode & S_IFBLK) === S_IFBLK ? 'Block' :
		(mode & S_IFDIR) === S_IFDIR ? 'Directory' :
		(mode & S_IFCHR) === S_IFCHR ? 'Character' :
		(mode & S_IFIFO) === S_IFIFO ? 'Pipe' :
		'Unknown'
	);
	return <span className="FileType">{textContent}</span>;
};

export default FileType;
