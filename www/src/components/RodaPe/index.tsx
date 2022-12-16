import styles from './RodaPe.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

export default function RodaPe() {
	return(
		<footer className={styles.rodape}>
			<Logo />
		</footer>
	);
}