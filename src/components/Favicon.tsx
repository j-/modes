import * as React from 'react';

import {
	S_IRUSR,
	S_IWUSR,
	S_IXUSR,

	S_IRGRP,
	S_IWGRP,
	S_IXGRP,

	S_IROTH,
	S_IWOTH,
	S_IXOTH,
} from '../stat';

export interface FaviconProps {
	mode: number;
}

export default class Favicon extends React.Component<FaviconProps> {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private icon: HTMLLinkElement;

	componentWillMount () {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 16;
		this.canvas.height = 16;
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		this.icon = document.createElement('link');
		this.icon.rel = 'shortcut icon';
	}

	componentDidMount () {
		this.clean();
		this.draw();
		this.attach();
	}

	componentWillUnmount () {
		this.detach();
	}

	componentDidUpdate () {
		this.draw();
		this.attach();
	}

	render () {
		return null;
	}

	private clean () {
		const { head } = document;
		const icons = head.querySelectorAll('link[rel~=shortcut], link[rel~=icon]');
		for (let i = 0; i < icons.length; i++) {
			const icon = icons[i];
			head.removeChild(icon);
		}
	}

	private draw () {
		const { mode } = this.props;
		this.ctx.clearRect(0, 0, 16, 16);
		if (mode & S_IRUSR) { this.ctx.fillRect(0, 0, 4, 4); }
		if (mode & S_IWUSR) { this.ctx.fillRect(5, 0, 4, 4); }
		if (mode & S_IXUSR) { this.ctx.fillRect(10, 0, 4, 4); }
		if (mode & S_IRGRP) { this.ctx.fillRect(0, 5, 4, 4); }
		if (mode & S_IWGRP) { this.ctx.fillRect(5, 5, 4, 4); }
		if (mode & S_IXGRP) { this.ctx.fillRect(10, 5, 4, 4); }
		if (mode & S_IROTH) { this.ctx.fillRect(0, 10, 4, 4); }
		if (mode & S_IWOTH) { this.ctx.fillRect(5, 10, 4, 4); }
		if (mode & S_IXOTH) { this.ctx.fillRect(10, 10, 4, 4); }
		this.icon.href = this.canvas.toDataURL();
	}

	private attach () {
		document.head.appendChild(this.icon);
	}

	private detach () {
		document.head.removeChild(this.icon);
	}
}
