import styled from 'styled-components';

export const Container = styled.div`
  padding: 45px 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
  color: #45638c;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

export const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 24px;
  font-weight: 400;
  color: #45638c;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;

  span {
    color: #45638c;
    font-weight: 500;
    font-size: 15px;

    &:not(:last-of-type) {
      flex: 1;
    }

    &:first-of-type {
      padding-left: 10px;
    }

    &:last-of-type {
      width: 110px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  color: #45638c;
  padding: 15px 10px;
  border: 1px solid #e0e7ef;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 300;
    
    &:not(:last-of-type) {
      flex: 1;
    }

    &:last-of-type {
      width: 100px;

      button + button {
        margin-left: 5px;
      } 
    }
  }
`;

export const FooterList = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;

export const Form = styled.form`
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