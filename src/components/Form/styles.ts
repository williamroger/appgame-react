import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  color: #45638c;

  span {
    display: flex;
    flex-direction: column;
    
    & + span {
      margin-top: 16px;
    }

    label {
      font-size: 15px;
    }

    input {
      color: #45638c;
      font-size: 16px;
      padding: 10px;
      border: 1px solid #e0e7ef;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-color: #45638c;
      }

      &::placeholder {
        color: #c3cad2;
      }
    }

    small {
      color: #ff6b6b;
      margin-top: 5px;
    }
  }
`;

export const FormBody = styled.div`
  padding: 24px 16px;
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #e0e7ef;

  button + button {
    margin-left: 15px;
  }
`;