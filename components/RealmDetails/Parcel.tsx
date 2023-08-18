import Image from 'next/image';
import numbro from 'numbro';

import { Button } from '../Button';

import styles from '../../styles/components/realm-details/parcel.module.css';

const commaSeparatedNumber = (value: number) =>
  numbro(value).format({
    thousandSeparated: true,
    mantissa: 0,
  });
const averageDisplayNumber = (value: number) =>
  numbro(value).format({
    spaceSeparated: false,
    average: true,
    mantissa: 0,
  });

export const Parcel = () => {
  return (
    <div className={styles.parcelDetails}>
      <h3>STATS</h3>

      <div className={styles.parcelDetails__content}>
        <ul className={styles.parcelDetails__content_items}>
          <li>
            <Image
              src="/img/kek.png"
              width={41.17}
              height={37.87}
              alt="aavegotchi"
            />
          </li>
          <li>
            <Image
              src="/img/fud.png"
              width={41.17}
              height={37.87}
              alt="aavegotchi"
            />
          </li>
          <li>
            <Image
              src="/img/alpha.png"
              width={41.17}
              height={37.87}
              alt="aavegotchi"
            />
          </li>
          <li>
            <Image
              src="/img/fomo.png"
              width={41.17}
              height={37.87}
              alt="aavegotchi"
            />
          </li>
        </ul>

        <div className={styles.parcelDetails__content_spec}>
          <div>
            <p>Total Claimed</p>
            <ul>
              <li>{averageDisplayNumber(320123)}</li>
              <li>{averageDisplayNumber(887233)}</li>
              <li>{averageDisplayNumber(1982949)}</li>
              <li>{averageDisplayNumber(12452)}</li>
            </ul>
          </div>
          <div>
            <p>Harvest / Day</p>
            <ul>
              <li>{commaSeparatedNumber(15000)}</li>
              <li>{commaSeparatedNumber(2000)}</li>
              <li>{commaSeparatedNumber(1342)}</li>
              <li>{commaSeparatedNumber(1800)}</li>
            </ul>
          </div>
          <div>
            <p>Reservoirs Capacity</p>
            <ul>
              <li>{commaSeparatedNumber(17000)}</li>
              <li>{commaSeparatedNumber(13000)}</li>
              <li>{commaSeparatedNumber(2000)}</li>
              <li>{commaSeparatedNumber(1500)}</li>
            </ul>
          </div>
        </div>
      </div>

      <Button>Survey Parcel</Button>
    </div>
  );
};
