import * as React from 'react';
import FlagsItem from './FlagsItem';
import './FlagsList.css';

import {
	S_IFMT,
	S_IFSOCK,
	S_IFLNK,
	S_IFREG,
	S_IFBLK,
	S_IFDIR,
	S_IFCHR,
	S_IFIFO,
	S_ISUID,
	S_ISGID,
	S_ISVTX,

	S_IRWXU,
	S_IRUSR,
	S_IWUSR,
	S_IXUSR,

	S_IRWXG,
	S_IRGRP,
	S_IWGRP,
	S_IXGRP,

	S_IRWXO,
	S_IROTH,
	S_IWOTH,
	S_IXOTH,

	S_IRWXUGO,
	S_IALLUGO,
	S_IRUGO,
	S_IWUGO,
	S_IXUGO,
} from '../stat';

const FlagsList: React.StatelessComponent = () => (
	<div className="FlagsList">
		<FlagsItem flag={S_IFMT}>S_IFMT</FlagsItem>
		<FlagsItem flag={S_IFSOCK}>S_IFSOCK</FlagsItem>
		<FlagsItem flag={S_IFLNK}>S_IFLNK</FlagsItem>
		<FlagsItem flag={S_IFREG}>S_IFREG</FlagsItem>
		<FlagsItem flag={S_IFBLK}>S_IFBLK</FlagsItem>
		<FlagsItem flag={S_IFDIR}>S_IFDIR</FlagsItem>
		<FlagsItem flag={S_IFCHR}>S_IFCHR</FlagsItem>
		<FlagsItem flag={S_IFIFO}>S_IFIFO</FlagsItem>
		<FlagsItem flag={S_ISUID}>S_ISUID</FlagsItem>
		<FlagsItem flag={S_ISGID}>S_ISGID</FlagsItem>
		<FlagsItem flag={S_ISVTX}>S_ISVTX</FlagsItem>
		<br />
		<FlagsItem flag={S_IRWXU}>S_IRWXU</FlagsItem>
		<FlagsItem flag={S_IRUSR}>S_IRUSR</FlagsItem>
		<FlagsItem flag={S_IWUSR}>S_IWUSR</FlagsItem>
		<FlagsItem flag={S_IXUSR}>S_IXUSR</FlagsItem>
		<br />
		<FlagsItem flag={S_IRWXG}>S_IRWXG</FlagsItem>
		<FlagsItem flag={S_IRGRP}>S_IRGRP</FlagsItem>
		<FlagsItem flag={S_IWGRP}>S_IWGRP</FlagsItem>
		<FlagsItem flag={S_IXGRP}>S_IXGRP</FlagsItem>
		<br />
		<FlagsItem flag={S_IRWXO}>S_IRWXO</FlagsItem>
		<FlagsItem flag={S_IROTH}>S_IROTH</FlagsItem>
		<FlagsItem flag={S_IWOTH}>S_IWOTH</FlagsItem>
		<FlagsItem flag={S_IXOTH}>S_IXOTH</FlagsItem>
		<br />
		<FlagsItem flag={S_IRWXUGO}>S_IRWXUGO</FlagsItem>
		<FlagsItem flag={S_IALLUGO}>S_IALLUGO</FlagsItem>
		<FlagsItem flag={S_IRUGO}>S_IRUGO</FlagsItem>
		<FlagsItem flag={S_IWUGO}>S_IWUGO</FlagsItem>
		<FlagsItem flag={S_IXUGO}>S_IXUGO</FlagsItem>
	</div>
);

export default FlagsList;
