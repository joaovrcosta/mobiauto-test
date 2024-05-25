import { Heading } from '../../components/heading'
import { MaxWidthWrapper } from '../../components/maxWidthWrapper'
import { Text } from '../../components/text'
import * as S from './styles'
import Link from 'next/link'
import { FaCarSide } from 'react-icons/fa'
import { FaLightbulb, FaMoneyBill } from 'react-icons/fa'
import { BrandBox } from '@/components/BrandBox'
import { IoIosArrowForward } from 'react-icons/io'

const IndexPage = () => {
  return (
    <main>
      <MaxWidthWrapper>
        <S.HeadingWrapper>
          <Heading color="purple_500" weight="bold" size="lgg">
            Encontre o valor do seu veículo
          </Heading>
          <Text color="gray_800" weight="bold" size="xx1">
            Consulte o valor de um veículo de forma gratuita
          </Text>
          <S.ButtonContainer>
            <Link href="/tabela-fipe">
              <S.ConsultButton size="lg">
                Consultar agora
                <IoIosArrowForward size={24} />
              </S.ConsultButton>
            </Link>
          </S.ButtonContainer>
        </S.HeadingWrapper>
      </MaxWidthWrapper>
      <S.BenefitsHero>
        <MaxWidthWrapper>
          <ul>
            <li>
              <S.BenefitCircleIcon>
                <FaMoneyBill size={24} />
              </S.BenefitCircleIcon>
              <Text color="gray_800" weight="medium">
                Preços de compra e venda atualizados
              </Text>
            </li>
            <li>
              <S.BenefitCircleIcon>
                <FaCarSide size={24} />
              </S.BenefitCircleIcon>
              <Text color="gray_800" weight="medium">
                Veja o valor do veículo na sua região e no Brasil
              </Text>
            </li>
            <li>
              <S.BenefitCircleIcon>
                <FaLightbulb size={24} />
              </S.BenefitCircleIcon>
              <Text color="gray_800" weight="medium">
                Saiba quanto vale seu carro atual, ou seu futuro carro
              </Text>
            </li>
          </ul>
        </MaxWidthWrapper>
      </S.BenefitsHero>
      <section>
        <MaxWidthWrapper>
          <S.BrandHeroHeading>
            <Heading color="gray_800" weight="bold" size="md">
              Consulte carros por marca
            </Heading>
          </S.BrandHeroHeading>
          <S.BrandsContainer>
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089243/transform/fl_progressive,f_webp,q_70,w_96"
              name="CAOA Chery"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089244/transform/fl_progressive,f_webp,q_70,w_96"
              name="Chevrolet"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089245/transform/fl_progressive,f_webp,q_70,w_96"
              name="Citroën"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089246/transform/fl_progressive,f_webp,q_70,w_96"
              name="Fiat"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089247/transform/fl_progressive,f_webp,q_70,w_96"
              name="Ford"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089248/transform/fl_progressive,f_webp,q_70,w_96"
              name="Honda"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089249/transform/fl_progressive,f_webp,q_70,w_96"
              name="Hyundai"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089250/transform/fl_progressive,f_webp,q_70,w_96"
              name="Jeep"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64089251/transform/fl_progressive,f_webp,q_70,w_96"
              name="Nissan"
            />
            <BrandBox
              imageUrl="https://image1.mobiauto.com.br/images/api/images/v1.0/64195544/transform/fl_progressive,f_webp,q_70,w_96"
              name="Peugeot"
            />
          </S.BrandsContainer>
          <S.SeeMoreContainer>
            <S.SeeMoreButton variant="link">
              Ver mais marcas de carro
            </S.SeeMoreButton>
          </S.SeeMoreContainer>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}

export default IndexPage
