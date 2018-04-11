import * as React from 'react';
import Card from './Card';
import FileTypeUnknownRadio from '../containers/FileTypeUnknownRadio';
import FileTypeRadio from '../containers/FileTypeRadio';
import './FileTypes.css';

import {
	S_IFSOCK,
	S_IFLNK,
	S_IFREG,
	S_IFBLK,
	S_IFDIR,
	S_IFCHR,
	S_IFIFO,
} from '../stat';

export interface FileTypesProps {
	showFlag: boolean;
}

const FileTypes: React.StatelessComponent<FileTypesProps> = ({ showFlag }) => (
	<Card className="FileTypes">
		<h2>File type</h2>

		<fieldset>
			<div className="FileTypes-radios">
				<label>
					<FileTypeUnknownRadio name="FileTypeRadio" />
					<strong>Unknown</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFSOCK} />
					{showFlag && <code>S_IFSOCK</code>}
					<strong>Socket</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFLNK} />
					{showFlag && <code>S_IFLNK</code>}
					<strong>Link</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFREG} />
					{showFlag && <code>S_IFREG</code>}
					<strong>Regular</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFBLK} />
					{showFlag && <code>S_IFBLK</code>}
					<strong>Block</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFDIR} />
					{showFlag && <code>S_IFDIR</code>}
					<strong>Directory</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFCHR} />
					{showFlag && <code>S_IFCHR</code>}
					<strong>Character</strong>
				</label>
				<label>
					<FileTypeRadio name="FileTypeRadio" flag={S_IFIFO} />
					{showFlag && <code>S_IFIFO</code>}
					<strong>Pipe</strong>
				</label>
			</div>
		</fieldset>
	</Card>
);

export default FileTypes;
