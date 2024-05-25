import * as S from './styles'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FormData } from './types'
import { searchFipeSchema } from './schemas'
import api from '../../services/api'
import { MaxWidthWrapper } from '../../components/maxWidthWrapper'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import Card from '../../components/Cards/Card'
import { Combobox } from '../../components/ui/molecules/combobox'
import { carStore } from '../../store/car'
import { Spinner } from '../../components/Spinner'
import brands from '../../shared/brands.json'

const TabelaFipePage = () => {
  const [models, setModels] = useState([])
  const [modelYears, setModelYears] = useState([])
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<FormData>({
      resolver: zodResolver(searchFipeSchema),
    })

  const { isSubmitting } = formState
  const isYearFilledIn = watch('year')

  const router = useRouter()
  const vehicleType = 'cars'
  const { brand, model, year, setModel, setYear } = carStore()

  useEffect(() => {
    setValue('brand', brand)
    setValue('model', model)
    setValue('year', year)
  }, [brand, model, year, setValue])

  useEffect(() => {
    api
      .get(
        `https://fipe.parallelum.com.br/api/v2/${vehicleType}/brands/${brand}/models`
      )
      .then((response) => {
        setModels(response.data)
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro ao buscar os modelos de veículos:',
          error
        )
      })
  }, [brand])

  useEffect(() => {
    api
      .get(
        `https://fipe.parallelum.com.br/api/v2/${vehicleType}/brands/${brand}/models/${model}/years`
      )
      .then((response) => {
        setModelYears(response.data)
      })
      .catch((error) => {
        console.error(
          'Ocorreu um erro ao buscar os modelos de veículos:',
          error
        )
      })
  }, [model])

  const dataSubmit = async ({ brand, model, year }: any) => {
    await router.push(`/tabela-fipe/carros/${brand}/${model}/${year}`)
    setModel(null)
    setYear(null)
  }

  return (
    <main>
      <MaxWidthWrapper>
        <S.HeadingWrapper>
          <Heading color="gray_800" weight="bold" size="lg">
            Tabela Fipe
          </Heading>
          <Text color="gray_800" weight="bold" size="xx1">
            Consulte o valor de um veículo de forma gratuita
          </Text>
        </S.HeadingWrapper>
        <S.CardSection>
          <Card variant="md" hug={false} rounding="rounded">
            <S.FormContainer onSubmit={handleSubmit(dataSubmit)}>
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
                    Consultar
                  </S.SearchButton>
                </>
              )}
            </S.FormContainer>
          </Card>
        </S.CardSection>
      </MaxWidthWrapper>
    </main>
  )
}

export default TabelaFipePage
