import { FC } from 'react';

interface IProps {
	stat: number;
}

const backgroundBar: any = {
	width: '50%',
	height: '5px',
	align: 'center',
	backgroundColor: '#FFCC00',
	borderRadius: '10px',
	textAlign: 'center',
	verticalAlign: 'middle',
	position: 'relative'
};

const percentBar: any = {
	height: '5px',
	maxWidth: '98%',
	backgroundColor: '#0075BE',
	borderRadius: '10px',
	position: 'absolute',
	top: '0',
	zIndex: '2'
};

const StatsBar: FC<IProps> = ({ stat }) => (
	<div style={backgroundBar}>
		<div style={{ width: `${(stat / 255) * 300}%`, ...percentBar }} />
	</div>
);

export default StatsBar;
