import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarService } from '../../../services/car.services'
import CarItem from '../home/CarItem'
import { withAuth } from '../../../HOC/withAuth'

function CarDetail(props) {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
    }
    fetchData();
  }, [id])

  if (!car?.name) return <p>Loading...</p>

  return (
    <CarItem car={car} key={car.id} />
  );
};

export default withAuth(CarDetail);