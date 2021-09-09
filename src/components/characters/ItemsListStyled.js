import styled from "styled-components"

const ItemPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 15vh;
  background: #e0dfdb;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ErrorWrapper = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  `
const LoaderWrapper = styled.div`
  margin-top: 20vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
`

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  justify-items: center;
  row-gap: 20px;
  margin-bottom: 5vh;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  align-items: stretch;
  justify-items: center;
  row-gap: 20px;
 margin: 10px;
`

const Container = styled.div`
  width: 1366px;
  margin: 0 auto;
  height: 100%;
  
  @media (max-width: 1030px){
    max-width: 860px;
  }

  @media (max-width: 790px){
    max-width: 700px;
  }

  @media (max-width: 435px){
    max-width: 400px;
  }

  @media (max-width: 380px){
    max-width: 350px;
  }

  @media (max-width: 330px){
    max-width: 300px;
  }
`;

export {
    ErrorWrapper,
    LoaderWrapper,
    ItemPageWrapper,
    FilterWrapper,
    ListWrapper,
    Container
}