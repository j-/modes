import * as React from 'react';
import * as classNames from 'classnames';
import './Section.css';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Section: React.StatelessComponent<SectionProps> = ({ className, ...props }) => (
	<div className={classNames('Section', className)} {...props} />
);

export default Section;
