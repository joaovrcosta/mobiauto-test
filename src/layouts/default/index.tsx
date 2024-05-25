import styled from 'styled-components'
import { Header } from '../../components/ui/organisms/Header'

interface ILayout {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export const Container = styled.main`
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`
