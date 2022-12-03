import { Container, PinkText } from './styles';

interface LogoProps {
	size: string
}

export function Logo({ size }: LogoProps) {
	return (
		<Container size={size}>
			<PinkText>Berg</PinkText>Store
		</Container>
	);
}
