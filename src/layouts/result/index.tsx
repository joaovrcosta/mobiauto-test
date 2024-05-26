import { Header } from '@/components/ui/organisms/Header'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function ResultLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export const Container = styled.main`
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`
