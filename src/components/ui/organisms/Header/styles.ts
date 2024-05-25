import styled from 'styled-components'
import { Button } from '../../atoms/button'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;

  @media (max-width: 1280px) {
    gap: 1.5rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 0;
    padding: 0.5rem 1rem;
    width: 100%;
  }
`

export const NavContainer = styled.div`
  ul {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 568px) {
      display: none;
    }
  }
`
export const CheckButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple_500};
`
export const MobileHeading = styled.div`
  display: none;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 568px) {
    display: block;
  }
`
export const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.purple_500};
  }
`
