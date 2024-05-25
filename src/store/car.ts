import { create } from 'zustand'

interface Option {
  name?: string
  code?: string
}

interface ICarStore {
  brand: string | null
  model: string | null
  year: string | null
  brands: string[] | null
  models: Option[] | null
  modelYears: Option[] | null
  setBrand: (brand: string | null) => void
  setModel: (model: string | null) => void
  setYear: (year: string | null) => void
  setBrands: (brands: string[] | null) => void
  setModels: (models: Option[] | null) => void
  setModelYears: (modelYears: Option[] | null) => void
}

export const carStore = create<ICarStore>((set) => ({
  brand: null,
  model: null,
  year: null,
  brands: null,
  models: null,
  modelYears: null,
  setBrand: (brand: string | null) => set({ brand }),
  setModel: (model: string | null) => set({ model }),
  setYear: (year: string | null) => set({ year }),
  setBrands: (brands: string[] | null) => set({ brands }),
  setModels: (models: Option[] | null) => set({ models }),
  setModelYears: (modelYears: Option[] | null) => set({ modelYears }),
}))
