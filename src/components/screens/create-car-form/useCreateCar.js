import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../services/car.services"

export const useCreateCar = (reset) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(['create car'], data => CarService.create(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('cars') // Чтобы вызвать перерисовку после добавления новой машины
      reset();
    },
  });

  const createCar = data => {
    mutate(data);
  };

  return { createCar };
}