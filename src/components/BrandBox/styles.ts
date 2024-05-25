import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 246px;
  height: 132px;
  padding: 1rem;
  margin-bottom: 0.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
    border-radius: 8px;
  }
`
