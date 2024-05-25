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
`
