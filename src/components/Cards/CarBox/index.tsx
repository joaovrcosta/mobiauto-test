import * as S from './styles'
import { ICar } from './types'

export default function CardBox({ brand, model, price }: ICar) {
  return (
    <S.Container>
      <S.CardBoxWrapper>
        <div>
          <h1>{brand}</h1>
          <p color="gray_800">{model}</p>
        </div>
        <S.PricingContainer>
          <p>{price}</p>
        </S.PricingContainer>
      </S.CardBoxWrapper>
      <div className="view-text">Visualizar</div>
    </S.Container>
  )
}
