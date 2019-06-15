import styled from "styled-components";

export const LoadingRow = styled.li`
  display: block;
  width: 100%;
  height: 70px;
  padding: 1rem;
  border: 1px solid #eee;
  position: relative;
  margin: 10px 0;
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
export const UserInfo = styled.div`
  width: auto;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  & > div {
    margin: 5px 0;
  }
`;
export const Text = styled.div`
  width: ${props => props.width}px;
  height: 1rem;
  border-radius: 0.15rem;
`;
