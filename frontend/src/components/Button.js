import styled from "styled-components"

const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  display: inline-block;
  padding: 20px;
  color: var(--white);
  font-weight: 700;
  border-radius: 20px;
`

function Button({children}) {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Button;
