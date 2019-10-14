import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const AddHobbyButton = styled.button`
  &::before {
    content: "+ new hobby entry";
  }
  font-weight: 800;
  background-color: white;
  border-radius: 13px;
  font-size: 1.5rem;
  margin: auto 0;
  padding: 13px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s linear;

  ${({ isLoading }) =>
    isLoading &&
    `
    &::before {
      content: "• loading";
    }
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
  `}
`;

export const Table = styled.table`
  border-spacing: 1rem 1rem;
  text-align: left;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
