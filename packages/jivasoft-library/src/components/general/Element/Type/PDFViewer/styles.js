import styled from 'styled-components'

export const DocumentViwerWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.bga3};
  background: ${({ theme }) => theme.bga3};
  width: ${({ height }) => (height ? 'fit-content' : '100%')};
  // height: 100px;
  border-radius: ${({ height }) => (height ? '5px' : '10px')} ;
  overflow: hidden;
`
export const Toolbar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.bga3};
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Actions = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
