import styled, { css } from 'styled-components'
import { ColorThemeType } from '../../../core/constants/theme'

export type sizeVariants = 'sm' | 'md' | 'lg'
interface ICard {
  backgroundColor: ColorThemeType
  borderColor?: ColorThemeType
  variant: sizeVariants
  boxShadow: boolean
  rounding: 'rounded' | 'rounded-none'
  hug?: boolean
  hugVertical?: boolean
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 1.5rem;
      `
    case 'md':
      return css`
        padding: 1.75rem;
      `
    case 'lg':
      return css`
        padding: 2rem;
      `
  }
}

export const Card = styled.div<ICard>`
  ${({ variant }) => sizeVariants(variant)}
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.25rem'
      case 'rounded-none':
        return '0'
      default:
        return '0.25rem'
    }
  }};

  box-shadow: ${({ boxShadow }) =>
    boxShadow ? 'rgba(0, 0, 0, 0.16) 0px 1px 2px' : 'none'};
  width: fit-content;

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
      `
    }
  }}

  ${({ hugVertical }) => {
    if (hugVertical) {
      return css`
        height: 100%;
      `
    }
  }}
`
