import styled from "styled-components"

const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  align-items: stretch;
  justify-items: center;
  margin-top: auto;
`

export  {
    PaginationWrapper
}