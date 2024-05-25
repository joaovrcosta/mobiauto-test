import * as zod from 'zod'

export const searchFipeSchema = zod.object({
  brand: zod
    .string()
    .nonempty()
    .min(1, { message: 'Por favor, selecione uma marca.' }),
  model: zod
    .string()
    .nonempty()
    .min(1, { message: 'Por favor, selecione um modelo.' }),
  year: zod
    .string()
    .nonempty()
    .min(1, { message: 'Por favor, selecione um ano.' }),
})
