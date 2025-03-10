import Styled from "styled-components";

function Login() {
  return <Text>Hello world</Text>;
}

const Text = Styled.p`
  color:${({ theme }) => theme.accent};
  font-size:2rem;
`;

export default Login;
