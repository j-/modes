import * as React from 'react';
import * as classNames from 'classnames';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Card: React.StatelessComponent<CardProps> = ({ className, ...props }) => (
	<div className={classNames('Card', className)} {...props} />
);

export default Card;
