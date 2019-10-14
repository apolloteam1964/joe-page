import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex: 1;
    margin-bottom: 1rem;
  }

  input,
  textarea {
    margin-left: 10px;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    padding: 4px;
  }

  .error {
    color: red;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
