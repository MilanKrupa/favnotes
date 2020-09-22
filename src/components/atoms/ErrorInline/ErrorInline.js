import styled from 'styled-components';

const ErrorInline = styled.div`
  padding: 15px 0 0 30px;
  color: ${({ theme }) => theme.orange};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export default ErrorInline;
