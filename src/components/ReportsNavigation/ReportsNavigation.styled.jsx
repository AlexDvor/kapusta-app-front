import styled from '@emotion/styled';

export const ReportBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 1280px) {
  }
`;

export const ReportHeader = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    margin: 0 0 0 111px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 0 205px;
  }
`;
