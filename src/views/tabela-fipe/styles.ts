import styled from 'styled-components'
import { Button } from '../../components/ui/atoms/button'

export const MainContainer = styled.div``

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
export const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple_500};

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray_200};
    color: ${({ theme }) => theme.colors.gray_600};
  }
`
