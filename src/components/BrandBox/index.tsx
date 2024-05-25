import Image from 'next/image'
import * as S from './styles'
import { IBrandBox } from './types'
import { Text } from '../text'

export function BrandBox({ imageUrl, name }: IBrandBox) {
  return (
    <S.Container>
      <Image src={imageUrl} alt={name} width={96} height={96} />
      <Text weight="semibold" color="gray_800">
        {name}
      </Text>
    </S.Container>
  )
}
