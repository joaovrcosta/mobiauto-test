import { create } from 'zustand'

interface Option {
  name?: string
  code?: string
}

interface ICarStore {
  brand: string | null
  model: string | null
  year: string | null
  brands: Option[] | null
  models: Option[] | null
  modelYears: Option[] | null
  setBrand: (brand: string) => void
  setModel: (model: string | null) => void
  setYear: (year: string | null) => void
  setBrands: (brands: Option[] | null) => void
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
  setBrand: (brand: string) => set({ brand }),
  setModel: (model: string | null) => set({ model }),
  setYear: (year: string | null) => set({ year }),
  setBrands: (brands: Option[] | null) => set({ brands }),
  setModels: (models: Option[] | null) => set({ models }),
  setModelYears: (modelYears: Option[] | null) => set({ modelYears }),
}))
