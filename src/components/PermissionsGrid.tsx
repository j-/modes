import * as React from 'react';
import FlagCheckbox from '../containers/FlagCheckbox';
import MaybeFlagLabel from '../containers/MaybeFlagLabel';
import './PermissionsGrid.css';

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

const PermissionsGrid: React.StatelessComponent = () => (
	<div className="PermissionsGrid">
		<label className="PermissionsGrid-S_IRWXUGO">
			<FlagCheckbox flag={S_IRWXUGO} />
			<MaybeFlagLabel name="S_IRWXUGO" />
			<strong>All</strong>
		</label>
		<label className="PermissionsGrid-S_IRUGO">
			<FlagCheckbox flag={S_IRUGO} />
			<MaybeFlagLabel name="S_IRUGO" />
			<strong>Read</strong>
		</label>
		<label className="PermissionsGrid-S_IWUGO">
			<FlagCheckbox flag={S_IWUGO} />
			<MaybeFlagLabel name="S_IWUGO" />
			<strong>Write</strong>
		</label>
		<label className="PermissionsGrid-S_IXUGO">
			<FlagCheckbox flag={S_IXUGO} />
			<MaybeFlagLabel name="S_IXUGO" />
			<strong>Execute</strong>
		</label>

		<label className="PermissionsGrid-S_IRWXU">
			<FlagCheckbox flag={S_IRWXU} />
			<MaybeFlagLabel name="S_IRWXU" />
			<strong>User</strong>
		</label>
		<label className="PermissionsGrid-S_IRUSR">
			<FlagCheckbox flag={S_IRUSR} />
			<MaybeFlagLabel name="S_IRUSR" />
		</label>
		<label className="PermissionsGrid-S_IWUSR">
			<FlagCheckbox flag={S_IWUSR} />
			<MaybeFlagLabel name="S_IWUSR" />
		</label>
		<label className="PermissionsGrid-S_IXUSR">
			<FlagCheckbox flag={S_IXUSR} />
			<MaybeFlagLabel name="S_IXUSR" />
		</label>

		<label className="PermissionsGrid-S_IRWXG">
			<FlagCheckbox flag={S_IRWXG} />
			<MaybeFlagLabel name="S_IRWXG" />
			<strong>Group</strong>
		</label>
		<label className="PermissionsGrid-S_IRGRP">
			<FlagCheckbox flag={S_IRGRP} />
			<MaybeFlagLabel name="S_IRGRP" />
		</label>
		<label className="PermissionsGrid-S_IWGRP">
			<FlagCheckbox flag={S_IWGRP} />
			<MaybeFlagLabel name="S_IWGRP" />
		</label>
		<label className="PermissionsGrid-S_IXGRP">
			<FlagCheckbox flag={S_IXGRP} />
			<MaybeFlagLabel name="S_IXGRP" />
		</label>

		<label className="PermissionsGrid-S_IRWXO">
			<FlagCheckbox flag={S_IRWXO} />
			<MaybeFlagLabel name="S_IRWXO" />
			<strong>Other</strong>
		</label>
		<label className="PermissionsGrid-S_IROTH">
			<FlagCheckbox flag={S_IROTH} />
			<MaybeFlagLabel name="S_IROTH" />
		</label>
		<label className="PermissionsGrid-S_IWOTH">
			<FlagCheckbox flag={S_IWOTH} />
			<MaybeFlagLabel name="S_IWOTH" />
		</label>
		<label className="PermissionsGrid-S_IXOTH">
			<FlagCheckbox flag={S_IXOTH} />
			<MaybeFlagLabel name="S_IXOTH" />
		</label>
	</div>
);

export default PermissionsGrid;
