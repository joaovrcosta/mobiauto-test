import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FormData } from './types'
import { searchFipeSchema } from './schemas'
import { Form } from '@/components/Form'
import useBrand from '@/hooks/useBrand'
import useModel from '@/hooks/useModel'
import useModelYears from '@/hooks/useModelYears'
import { useEffect } from 'react'
import { carStore } from '@/store/car'
import { Combobox } from '@/components/ui/molecules/combobox'
import { Spinner } from '@/components/Spinner'
import { MaxWidthWrapper } from '@/components/maxWidthWrapper'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import Card from '@/components/Cards/Card'

const TabelaFipePage = () => {
  const { register, handleSubmit, formState, setValue, watch, setError } =
    useForm<FormData>({
      resolver: zodResolver(searchFipeSchema),
    })
  const { isSubmitting } = formState
  const { brand, year, brands, model, setModel, setYear, models, modelYears } =
    carStore()

  const router = useRouter()
  const vehicleType = 'cars'

  useEffect(() => {
    setValue('brand', brand)
    setValue('model', model)
    setValue('year', year)
  }, [brand, model, year, setValue])

  const isModelFilledIn = watch('model')
  const isYearFilledIn = watch('year')

  useBrand({ vehicleType })
  useModel({ vehicleType, brand })
  useModelYears({ vehicleType, brand, model, isModelFilledIn })

  const onSubmit = async ({ brand, model, year }: FormData) => {
    if (brand && model && year) {
      await router.push(`/tabela-fipe/carros/${brand}/${model}/${year}`)
      setModel(null)
      setYear(null)
    } else {
      setError('root', {
        type: 'manual',
        message: 'Por favor, preencha todos os campos obrigatórios.',
      })
    }
  }

  return (
    <main>
      <MaxWidthWrapper>
        <S.HeadingWrapper>
          <Heading weight="bold" color="gray_800">
            Tabela Fipe
          </Heading>
          <Text weight="semibold" color="gray_800">
            Consulte o valor de um veículo de forma gratuita
          </Text>
        </S.HeadingWrapper>
        <S.CardSection>
          <Card variant="lg" hug={false}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Combobox
                placeholder="Marca"
                options={brands}
                {...register('brand')}
              />
              {formState.errors.brand && (
                <Text color="danger_500" weight="medium">
                  Campo deve ser preenchido
                </Text>
              )}
              <Combobox
                placeholder="Modelo"
                options={models}
                {...register('model')}
              />
              {formState.errors.model && (
                <Text color="danger_500" weight="medium">
                  Campo deve ser preenchido
                </Text>
              )}
              {model !== null && (
                <>
                  <Combobox
                    placeholder="Ano"
                    options={modelYears}
                    {...register('year')}
                  />
                  {formState.errors.year && (
                    <Text color="danger_500" weight="medium">
                      Campo deve ser preenchido
                    </Text>
                  )}
                </>
              )}
              {isSubmitting ? (
                <Spinner size="md" baseColor="blue_950" variant="secondary" />
              ) : (
                <>
                  <S.SearchButton disabled={!isYearFilledIn} type="submit">
                    Consultar preço
                  </S.SearchButton>
                </>
              )}
            </Form>
          </Card>
        </S.CardSection>
      </MaxWidthWrapper>
    </main>
  )
}

export default TabelaFipePage
