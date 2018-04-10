import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import './PermissionsSymbolic.css';

import {
	S_IRWXUGO,
	S_IRUGO,
	S_IWUGO,
	S_IXUGO,

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
} from '../stat';

export interface PermissionsSymbolicProps {
	showFlag: boolean;
}

const PermissionsSymbolic: React.StatelessComponent<PermissionsSymbolicProps> = ({ showFlag }) => (
	<div className="PermissionsSymbolic">
		<label className="PermissionsSymbolic-S_IRWXUGO">
			<FlagCheckbox flag={S_IRWXUGO} />
			{showFlag && <code>S_IRWXUGO</code>}
			<strong>All</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			{showFlag && <code>S_IRUGO</code>}
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			{showFlag && <code>S_IWUGO</code>}
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			{showFlag && <code>S_IXUGO</code>}
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXU">
			<FlagCheckbox flag={S_IRWXU} />
			{showFlag && <code>S_IRWXU</code>}
			<strong>User</strong>
		</label>
		<label className="PermissionsSymbolic-S_IRUSR">
			<FlagCheckbox flag={S_IRUSR} />
			{showFlag && <code>S_IRUSR</code>}
		</label>
		<label className="PermissionsSymbolic-S_IWUSR">
			<FlagCheckbox flag={S_IWUSR} />
			{showFlag && <code>S_IWUSR</code>}
		</label>
		<label className="PermissionsSymbolic-S_IXUSR">
			<FlagCheckbox flag={S_IXUSR} />
			{showFlag && <code>S_IXUSR</code>}
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			{showFlag && <code>S_IRUGO</code>}
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			{showFlag && <code>S_IWUGO</code>}
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			{showFlag && <code>S_IXUGO</code>}
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXG">
			<FlagCheckbox flag={S_IRWXG} />
			{showFlag && <code>S_IRWXG</code>}
			<strong>Group</strong>
		</label>
		<label className="PermissionsSymbolic-S_IRGRP">
			<FlagCheckbox flag={S_IRGRP} />
			{showFlag && <code>S_IRGRP</code>}
		</label>
		<label className="PermissionsSymbolic-S_IWGRP">
			<FlagCheckbox flag={S_IWGRP} />
			{showFlag && <code>S_IWGRP</code>}
		</label>
		<label className="PermissionsSymbolic-S_IXGRP">
			<FlagCheckbox flag={S_IXGRP} />
			{showFlag && <code>S_IXGRP</code>}
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			{showFlag && <code>S_IRUGO</code>}
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			{showFlag && <code>S_IWUGO</code>}
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			{showFlag && <code>S_IXUGO</code>}
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXO">
			<FlagCheckbox flag={S_IRWXO} />
			{showFlag && <code>S_IRWXO</code>}
			<strong>Other</strong>
		</label>
		<label className="PermissionsSymbolic-S_IROTH">
			<FlagCheckbox flag={S_IROTH} />
			{showFlag && <code>S_IROTH</code>}
		</label>
		<label className="PermissionsSymbolic-S_IWOTH">
			<FlagCheckbox flag={S_IWOTH} />
			{showFlag && <code>S_IWOTH</code>}
		</label>
		<label className="PermissionsSymbolic-S_IXOTH">
			<FlagCheckbox flag={S_IXOTH} />
			{showFlag && <code>S_IXOTH</code>}
		</label>
	</div>
);

export default PermissionsSymbolic;
