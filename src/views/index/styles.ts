import { Button } from '@/components/ui/atoms/button'
import styled from 'styled-components'

export const HeadingWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 2rem;
`

export const ConsultButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple_500};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 46px;
`
export const BenefitsHero = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.5rem 4rem;
  margin-bottom: 2.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 128px;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      height: auto;
    }
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 240px;
    text-align: center;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    svg {
      color: ${({ theme }) => theme.colors.purple_500};
    }
  }
`

export const BenefitCircleIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_100};
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`

export const BrandHeroHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const BrandsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem 1rem 4rem 1rem;
`

export const SeeMoreButton = styled(Button)`
  color: ${({ theme }) => theme.colors.purple_500};
`
