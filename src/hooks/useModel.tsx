import { useEffect } from 'react'
import { getModels } from '@/services/routes'
import { carStore } from '@/store/car'

interface IUseModel {
  vehicleType: string
  brand: string | null
}

const useModel = ({ vehicleType, brand }: IUseModel) => {
  useEffect(() => {
    if (brand !== '') {
      getModels({ vehicleType, brand })
        .then((data) => {
          carStore.setState({ models: data })
        })
        .catch((error) => {
          console.error('error:', error)
        })
    }
  }, [vehicleType, brand])
}

export default useModel
