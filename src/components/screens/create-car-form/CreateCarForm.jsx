import React from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import { useCreateCar } from './useCreateCar'

function CreateCarForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const { createCar } = useCreateCar(reset);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <div>

        <input {...register('name', { required: 'Name is required!' })}
          type="text" placeholder="Name" />
        {errors?.name?.message && <p>Name is required</p>}
      </div>
      <div>
        <input {...register('price', { required: 'Price is required' })}
          type="number" placeholder="Price" />
        {errors?.name?.message && <p>Price is required</p>}
      </div>
      <div>
        <input {...register('image', { required: 'Image is required' })}
          type="text" placeholder="Image" />
      </div>

      {/* <div><input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" /></div>
      <div><input onChange={e => setPrice(e.target.value)} value={price} type="number" placeholder="Price" /></div>
      <div><input onChange={e => setImage(e.target.value)} value={image} type="text" placeholder="Image" /></div> */}

      <button>Create</button>
    </form>
  );
};

export default CreateCarForm;