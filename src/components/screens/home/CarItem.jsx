import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function CarItem({ car }) {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={car.image} alt="car-1" />
      </div>
      <div className={styles.inf}>
        <h2>{car.name}</h2>
        <p>{new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'USD',
        })
          .format(Number(car.price))}</p>
        <p>{car.class}</p>
        <div>
          <Link to={`car/${car.id}`} className="btn">Read more</Link>
        </div>
        <div>
          <Link to="/" className="btn">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default CarItem;