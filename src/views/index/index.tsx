import { Heading } from '../../components/heading'
import { MaxWidthWrapper } from '../../components/maxWidthWrapper'
import { Text } from '../../components/text'
import * as S from './styles'

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
        </S.HeadingWrapper>
      </MaxWidthWrapper>
    </main>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default IndexPage
