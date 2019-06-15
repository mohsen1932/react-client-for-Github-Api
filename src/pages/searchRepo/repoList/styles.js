import styled from "styled-components";

export const ListUl = styled.ul`
  display: block;
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0 1rem;
  li {
    display: block;
    a {
      display: block;
      height: 70px;
      padding: 10px;
      background: #fff;
      position: relative;
      border: 1px solid #e5e5e5;
      margin: 5px 0;
      & > span {
        display: inline-block;
        float: left;
      }
      .avatar {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        float: none;
        cursor: pointer;
        display: inline-block;
      }
      &:hover {
        border: 1px solid #ddd;
        background: #f3f3f3;
      }
    }
  }
`;
export const UserInfo = styled.span`
  width: auto;
  height: 50px;
  padding: 0 0 0 80px;
  display: inline-block;
  & > span {
    margin: 2px 0;
  }
`;
export const Text = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${props => (props.color === "owner" ? "#999" : "#777")};
  font-weight: ${props => (props.color === "owner" ? "100" : "700")};
  i {
    margin: 0 5px 0 0;
  }
`;
