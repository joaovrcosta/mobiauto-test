import { useEffect } from 'react'
import { getModelYears } from '@/services/routes'
import { carStore } from '@/store/car'

interface IUseModelYears {
  vehicleType: string | null
  brand: string | null
  model: string | null
  isModelFilledIn: string | null
}

const useModelYears = ({
  vehicleType,
  brand,
  model,
  isModelFilledIn,
}: IUseModelYears) => {
  useEffect(() => {
    if (isModelFilledIn !== null) {
      getModelYears({ vehicleType, brand, model })
        .then((data) => {
          carStore.setState({ modelYears: data })
        })
        .catch((error) => {
          console.error('error:', error)
        })
    }
  }, [vehicleType, brand, model, isModelFilledIn])
}

export default useModelYears
