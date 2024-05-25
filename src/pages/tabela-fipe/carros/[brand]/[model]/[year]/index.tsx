import { IoChevronBack } from 'react-icons/io5'
import api from '@/services/api'
import { MaxWidthWrapper } from '@/components/maxWidthWrapper'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { IProps } from '@/views/cars/year/types'
import * as S from '@/views/cars/year/styles'
import CardBox from '@/components/Cards/CarBox'
import { ResultLayout } from '@/layouts/result'

const SearchResultPage = ({ carData }: IProps) => {
  return (
    <MaxWidthWrapper>
      <S.WrapperContainer>
        <S.HeadingContainer>
          <Heading color="gray_800" weight="bold">
            Tabela Fipe: {carData?.model}
          </Heading>
        </S.HeadingContainer>
        {carData && (
          <div>
            <S.PriceWrapper>
              <S.PriceContainer>
                <Text weight="extrabold" size="xxl">
                  {carData.price}
                </Text>
              </S.PriceContainer>
            </S.PriceWrapper>
            <S.MoreInformationContainer>
              <Text color="gray_800" weight="semibold">
                Outras informações:
              </Text>
              <p>Marca: {carData.brand}</p>
              <p>Ano: {carData.modelYear}</p>

              <S.BackButton className="w-full bg-[#5d01bc] mt-3">
                <S.Link href="/tabela-fipe">
                  <IoChevronBack size={24} />
                  Pesquisar outro carro
                </S.Link>
              </S.BackButton>
            </S.MoreInformationContainer>
          </div>
        )}
      </S.WrapperContainer>
      <section>
        <S.SubHeadingContainer>
          <Heading weight="semibold" size="sm" color="purple_500">
            Quer saber mais sobre outros carros?
          </Heading>
        </S.SubHeadingContainer>
        <S.RecomendationContainer>
          <CardBox price="R$138.894,00" brand="BYD" model="Dolphin" />
          <CardBox price="R$138.894,00" brand="BYD" model="Dolphin" />
          <CardBox price="R$138.894,00" brand="BYD" model="Dolphin" />
          <CardBox price="R$138.894,00" brand="BYD" model="Dolphin" />
          <CardBox price="R$138.894,00" brand="BYD" model="Dolphin" />
        </S.RecomendationContainer>
      </section>
    </MaxWidthWrapper>
  )
}

SearchResultPage.getLayout = (page: React.ReactNode) => (
  <ResultLayout>{page}</ResultLayout>
)

export default SearchResultPage

export const getServerSideProps = async (ctx: any) => {
  const { brand, model, year } = ctx.query

  let carData = null

  try {
    const res = await api.get(
      `/cars/brands/${brand}/models/${model}/years/${year}`
    )
    carData = res.data
  } catch (error) {
    console.log(error)
  }

  if (!brand || !model || !year) {
    return {
      redirect: {
        destination: '/tabela-fipe',
        permanent: false,
      },
    }
  }

  return {
    props: {
      carData: carData,
    },
  }
}
