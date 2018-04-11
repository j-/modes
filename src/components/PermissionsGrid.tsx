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
		<FlagCheckbox className="PermissionsGrid-S_IRWXUGO" flag={S_IRWXUGO}>
			<MaybeFlagLabel name="S_IRWXUGO" />
			<strong>All</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IRUGO" flag={S_IRUGO}>
			<MaybeFlagLabel name="S_IRUGO" />
			<strong>Read</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IWUGO" flag={S_IWUGO}>
			<MaybeFlagLabel name="S_IWUGO" />
			<strong>Write</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IXUGO" flag={S_IXUGO}>
			<MaybeFlagLabel name="S_IXUGO" />
			<strong>Execute</strong>
		</FlagCheckbox>

		<FlagCheckbox className="PermissionsGrid-S_IRWXU" flag={S_IRWXU}>
			<MaybeFlagLabel name="S_IRWXU" />
			<strong>User</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IRUSR" flag={S_IRUSR}>
			<MaybeFlagLabel name="S_IRUSR" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IWUSR" flag={S_IWUSR}>
			<MaybeFlagLabel name="S_IWUSR" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IXUSR" flag={S_IXUSR}>
			<MaybeFlagLabel name="S_IXUSR" />
		</FlagCheckbox>

		<FlagCheckbox className="PermissionsGrid-S_IRWXG" flag={S_IRWXG}>
			<MaybeFlagLabel name="S_IRWXG" />
			<strong>Group</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IRGRP" flag={S_IRGRP}>
			<MaybeFlagLabel name="S_IRGRP" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IWGRP" flag={S_IWGRP}>
			<MaybeFlagLabel name="S_IWGRP" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IXGRP" flag={S_IXGRP}>
			<MaybeFlagLabel name="S_IXGRP" />
		</FlagCheckbox>

		<FlagCheckbox className="PermissionsGrid-S_IRWXO" flag={S_IRWXO}>
			<MaybeFlagLabel name="S_IRWXO" />
			<strong>Other</strong>
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IROTH" flag={S_IROTH}>
			<MaybeFlagLabel name="S_IROTH" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IWOTH" flag={S_IWOTH}>
			<MaybeFlagLabel name="S_IWOTH" />
		</FlagCheckbox>
		<FlagCheckbox className="PermissionsGrid-S_IXOTH" flag={S_IXOTH}>
			<MaybeFlagLabel name="S_IXOTH" />
		</FlagCheckbox>
	</div>
);

export default PermissionsGrid;
