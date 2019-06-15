import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;
export const TopBar = styled.div`
  width: 100%;
  background: #26292c;
  height: 50px;
  color: #fff;
  float: left;
  position: relative;
  padding: 0 1rem;
  h2,
  i {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    float: left;
  }
  i {
    font-size: 2rem;
    margin: 0 5px 0 0;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  float: left;
  text-align: center;
  h1 {
    line-height: 3rem;
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;
