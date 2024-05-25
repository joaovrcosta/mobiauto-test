import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 280px;
  width: 243px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;

  @media (max-width: 768px) {
    width: 100%;
  }

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

  div h1 {
    color: ${({ theme }) => theme.colors.purple_500};
    font-weight: 600;
    font-size: 26px;
  }
`
export const PricingContainer = styled.div`
  margin-top: 2rem;

  p {
    color: ${({ theme }) => theme.colors.purple_500};
    font-weight: 600;
  }
`
