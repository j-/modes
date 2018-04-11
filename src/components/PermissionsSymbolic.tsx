import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import MaybeFlagLabel from '../containers/MaybeFlagLabel';
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

const PermissionsSymbolic: React.StatelessComponent = () => (
	<div className="PermissionsSymbolic">
		<label className="PermissionsSymbolic-S_IRWXUGO">
			<FlagCheckbox flag={S_IRWXUGO} />
			<MaybeFlagLabel name="S_IRWXUGO" />
			<strong>All</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			<MaybeFlagLabel name="S_IRUGO" />
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			<MaybeFlagLabel name="S_IWUGO" />
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			<MaybeFlagLabel name="S_IXUGO" />
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXU">
			<FlagCheckbox flag={S_IRWXU} />
			<MaybeFlagLabel name="S_IRWXU" />
			<strong>User</strong>
		</label>
		<label className="PermissionsSymbolic-S_IRUSR">
			<FlagCheckbox flag={S_IRUSR} />
			<MaybeFlagLabel name="S_IRUSR" />
		</label>
		<label className="PermissionsSymbolic-S_IWUSR">
			<FlagCheckbox flag={S_IWUSR} />
			<MaybeFlagLabel name="S_IWUSR" />
		</label>
		<label className="PermissionsSymbolic-S_IXUSR">
			<FlagCheckbox flag={S_IXUSR} />
			<MaybeFlagLabel name="S_IXUSR" />
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			<MaybeFlagLabel name="S_IRUGO" />
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			<MaybeFlagLabel name="S_IWUGO" />
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			<MaybeFlagLabel name="S_IXUGO" />
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXG">
			<FlagCheckbox flag={S_IRWXG} />
			<MaybeFlagLabel name="S_IRWXG" />
			<strong>Group</strong>
		</label>
		<label className="PermissionsSymbolic-S_IRGRP">
			<FlagCheckbox flag={S_IRGRP} />
			<MaybeFlagLabel name="S_IRGRP" />
		</label>
		<label className="PermissionsSymbolic-S_IWGRP">
			<FlagCheckbox flag={S_IWGRP} />
			<MaybeFlagLabel name="S_IWGRP" />
		</label>
		<label className="PermissionsSymbolic-S_IXGRP">
			<FlagCheckbox flag={S_IXGRP} />
			<MaybeFlagLabel name="S_IXGRP" />
		</label>

		<label className="PermissionsSymbolic-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			<MaybeFlagLabel name="S_IRUGO" />
			<strong>r</strong>
		</label>
		<label className="PermissionsSymbolic-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			<MaybeFlagLabel name="S_IWUGO" />
			<strong>w</strong>
		</label>
		<label className="PermissionsSymbolic-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			<MaybeFlagLabel name="S_IXUGO" />
			<strong>x</strong>
		</label>

		<label className="PermissionsSymbolic-S_IRWXO">
			<FlagCheckbox flag={S_IRWXO} />
			<MaybeFlagLabel name="S_IRWXO" />
			<strong>Other</strong>
		</label>
		<label className="PermissionsSymbolic-S_IROTH">
			<FlagCheckbox flag={S_IROTH} />
			<MaybeFlagLabel name="S_IROTH" />
		</label>
		<label className="PermissionsSymbolic-S_IWOTH">
			<FlagCheckbox flag={S_IWOTH} />
			<MaybeFlagLabel name="S_IWOTH" />
		</label>
		<label className="PermissionsSymbolic-S_IXOTH">
			<FlagCheckbox flag={S_IXOTH} />
			<MaybeFlagLabel name="S_IXOTH" />
		</label>
	</div>
);

export default PermissionsSymbolic;
