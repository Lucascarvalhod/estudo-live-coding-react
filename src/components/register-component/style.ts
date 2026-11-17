
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }

  &[aria-invalid="true"] {
    border-color: #dc2626;
  }
`;

export const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
