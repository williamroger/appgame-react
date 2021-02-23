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

export const Content = styled.div`
  margin-top: 50px;
`;

export const GroupKey = styled.div`
  width: 250px;
  position: relative;
`;

export const TitleKey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #45638c;
  border-radius: 50%;
  color: #fff;
  font-weight: 400;
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Key = styled.div`
  background: #fff;
  color: #45638c;
  font-weight: 400;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid #e0e7ef;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);
`;

export const Footer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;