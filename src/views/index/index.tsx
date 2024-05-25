import { Heading } from '../../components/heading'
import { MaxWidthWrapper } from '../../components/maxWidthWrapper'
import { Text } from '../../components/text'
import * as S from './styles'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <main>
      <MaxWidthWrapper>
        <S.HeadingWrapper>
          <Heading color="gray_800" weight="bold" size="lg">
            Encontre o valor do seu veículo
          </Heading>
          <Text color="gray_800" weight="bold" size="xx1">
            Consulte o valor de um veículo de forma gratuita
          </Text>
          <S.ButtonContainer>
            <Link href="/tabela-fipe">
              <S.ConsultButton>Consultar Tabela Fipe</S.ConsultButton>
            </Link>
          </S.ButtonContainer>
        </S.HeadingWrapper>
      </MaxWidthWrapper>
    </main>
  )
}

export default IndexPage
