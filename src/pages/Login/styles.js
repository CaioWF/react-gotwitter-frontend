import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  margin: 20px 0 0;
  width: 100%;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InputLogin = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 44px;
  padding: 0 15px;
  font-size: 14px;
  outline: 0;
`;

export const ButtonLogin = styled.button`
  margin: 10px 0 0;
  background: #4bb0ee;
  border-radius: 5px;
  height: 44px;
  border: 0;
  outline: 0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #42a1db;
  }
`;
