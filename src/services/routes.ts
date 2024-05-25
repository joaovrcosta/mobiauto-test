import api from './api'
import { IGetModelYears, IGetModels } from './types'

export const getModels = async ({ vehicleType, brand }: IGetModels) => {
  try {
    const response = await api.get(
      `https://fipe.parallelum.com.br/api/v2/${vehicleType}/brands/${brand}/models`
    )
    return response.data
  } catch (error) {
    console.error('error ao buscar modelos:', error)
    throw error
  }
}

export const getModelYears = async ({
  vehicleType,
  brand,
  model,
}: IGetModelYears) => {
  try {
    const response = await api.get(
      `https://fipe.parallelum.com.br/api/v2/${vehicleType}/brands/${brand}/models/${model}/years`
    )
    return response.data
  } catch (error) {
    console.error('error ao buscar anos:', error)

    throw error
  }
}
