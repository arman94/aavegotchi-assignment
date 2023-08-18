import styles from '../../styles/components/realm-details/altar.module.css';
import { Button } from '../Button';

export default function Altar() {
  return (
    <div className={styles.altar}>
      <Button color="purple">Channel Alchemica</Button>
    </div>
  );
}
