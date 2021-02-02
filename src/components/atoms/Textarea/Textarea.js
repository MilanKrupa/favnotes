import styled from 'styled-components';

const Textarea = styled.textarea`
  border-radius: 20px;
  height: 30vh;
  margin-top: 30px;
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  outline: none;
  transition: filter 0.2s;

  :focus {
    filter: brightness(97%);
  }

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;
export default Textarea;
