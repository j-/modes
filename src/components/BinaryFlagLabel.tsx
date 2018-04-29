import * as React from 'react';

export interface BinaryFlagLabelProps {
	flag: number;
	highlightedFlag: number | null;
}

const BinaryFlagLabel: React.StatelessComponent<BinaryFlagLabelProps> = ({ flag, highlightedFlag }) => {
	const children: React.ReactChild[] = [];
	for (let i = 0; i < 16; i++) {
		const index = 15 - i;
		const bit = 1 << index;
		const checked = bit & flag;
		const str = checked ? '1' : '0';
		if (checked) {
			const highlighted = highlightedFlag && bit & highlightedFlag;
			children.push(highlighted ?
				<strong key={index}>{str}</strong> :
				<span key={index}>{str}</span>
			);
		} else {
			children.push(str);
		}
	}
	return <code className="BinaryFlagLabel">{children}</code>;
};

export default BinaryFlagLabel;
