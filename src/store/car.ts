import { create } from 'zustand'

interface ICarStore {
  brand: string | null
  model: string | null
  year: string | null
  setBrand: (brand: string | null) => void
  setModel: (model: string | null) => void
  setYear: (year: string | null) => void
}

export const carStore = create<ICarStore>((set) => ({
  brand: null,
  model: null,
  year: null,
  setBrand: (brand: string | null) => set({ brand }),
  setModel: (model: string | null) => set({ model }),
  setYear: (year: string | null) => set({ year }),
}))
