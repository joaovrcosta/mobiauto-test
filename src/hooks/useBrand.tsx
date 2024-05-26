import { useEffect } from 'react'
import { getBrands } from '@/services/routes'
import { carStore } from '@/store/car'

interface IUseBrand {
  vehicleType: string
}

const useBrand = ({ vehicleType }: IUseBrand) => {
  useEffect(() => {
    if (vehicleType !== null) {
      getBrands(vehicleType)
        .then((data) => {
          carStore.setState({ brands: data })
        })
        .catch((error) => {
          console.error('error:', error)
        })
    }
  }, [vehicleType])
}

export default useBrand
