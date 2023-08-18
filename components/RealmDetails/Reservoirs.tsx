import styles from '../../styles/components/realm-details/reservoirs.module.css';
import { Button } from '../Button';

export default function Reservoirs() {
  return (
    <div className={styles.reservoirs}>
      <div></div>

      <Button color="pink">Empty Reservoirs</Button>
    </div>
  );
}
