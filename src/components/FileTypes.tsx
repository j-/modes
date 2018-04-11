import * as React from 'react';
import Section from './Section';
import Card from './Card';
import FileTypeUnknownRadio from '../containers/FileTypeUnknownRadio';
import FileTypeRadio from '../containers/FileTypeRadio';
import MaybeFlagLabel from '../containers/MaybeFlagLabel';
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

const FileTypes: React.StatelessComponent = () => (
	<Section className="FileTypes">
		<Card>
			<h2>File type</h2>

			<fieldset>
				<div className="FileTypes-radios">
					<FileTypeUnknownRadio name="FileTypeRadio">
						<strong>Unknown</strong>
					</FileTypeUnknownRadio>

					<FileTypeRadio flag={S_IFSOCK}>
						<MaybeFlagLabel name="S_IFSOCK" />
						<strong>Socket</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFLNK}>
						<MaybeFlagLabel name="S_IFLNK" />
						<strong>Link</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFREG}>
						<MaybeFlagLabel name="S_IFREG" />
						<strong>Regular</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFBLK}>
						<MaybeFlagLabel name="S_IFBLK" />
						<strong>Block</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFDIR}>
						<MaybeFlagLabel name="S_IFDIR" />
						<strong>Directory</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFCHR}>
						<MaybeFlagLabel name="S_IFCHR" />
						<strong>Character</strong>
					</FileTypeRadio>

					<FileTypeRadio name="FileTypeRadio" flag={S_IFIFO}>
						<MaybeFlagLabel name="S_IFIFO" />
						<strong>Pipe</strong>
					</FileTypeRadio>
				</div>
			</fieldset>
		</Card>
	</Section>
);

export default FileTypes;
