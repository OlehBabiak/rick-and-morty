import styled from "styled-components"

const HeaderWrapper = styled.header`
  overflow: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;

  font-size: 1.47em;
`

const NavigationContent = styled.div`
  width: 1366px;
  height: 15vh;
  background: #719797;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;

  @media (max-width: 1030px) {
    max-width: 860px;
  }

  @media (max-width: 790px) {
    max-width: 700px;
  }

  @media (max-width: 435px) {
    max-width: 400px;
  }

  @media (max-width: 380px) {
    max-width: 350px;
  }

  @media (max-width: 330px) {
    max-width: 300px;
  }
`;

const DeskTopMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  justify-items: center;
  color: #d5dcdc;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: end;
    padding-right: 25px;
    color: #d5dcdc;
  };
`

export {
    HeaderWrapper,
    NavigationContent,
    MobileMenu,
    DeskTopMenu
}