import { Button } from '@/components/ui/atoms/button'
import styled from 'styled-components'

export const WrapperContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_50};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 6px;
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const PriceContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 32px;
  padding: 1rem;
  color: white;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`
export const MoreInformationContainer = styled.div`
  margin-top: 1rem;
`

export const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple_500};
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const RecomendationContainer = styled.div`
  margin-top: 1rem;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`

export const CarBox = styled.div`
  position: relative;
  height: 280px;
  width: 243px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;

  .view-text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.purple_500};
    color: white;
    text-align: center;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    cursor: pointer;
    border-radius: 8px 8px 0 0;
  }

  &:hover .view-text {
    transform: translateY(0);
  }
`

export const CardBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const PricingContainer = styled.div`
  margin-top: 2rem;
`

export const SubHeadingContainer = styled.div`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`
