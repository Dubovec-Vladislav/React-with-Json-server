import React from 'react'
// import styles from './Home.module.css'
import CarItem from './CarItem'
import CreateCarForm from '../create-car-form/CreateCarForm'
import { CarService } from '../../../services/car.services'
import { useQuery } from '@tanstack/react-query'
import Header from '../../ui/header'

function Home(props) {
  const { data, isLoading, /*error*/ } = useQuery(['cars'],
    () => CarService.getAll())

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Cars catalog</h1>
      <Header />
      <CreateCarForm />
      {data.length ?
        data.map(car => (
          <CarItem car={car} key={car.id} />
        ))
        :
        <p>No cars</p>
      }
    </div>
  );
};

export default Home;