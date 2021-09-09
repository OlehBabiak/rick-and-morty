import styled from "styled-components"

const DetailContentWrapper = styled.div`
  margin-top: 20vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  justify-items: center;

  @media (max-width: 435px){
    justify-items: left;
  }
`

const DetailPageWrapper = styled.div`
  margin-top: 15vh;

`


export {
    DetailContentWrapper,
    DetailPageWrapper
}
