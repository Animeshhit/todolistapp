import Styled from "styled-components";
import { Logo } from "../../lib/assets";

const AuthScreen = Styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthScreenWrapper = Styled.div`
  background: ${({ theme }) => theme.lightBg};
  padding: 2rem 3rem;
  border:0.2px solid ${({ theme }) => theme.borderColor};
  text-align: center;
  width: 500px;
  border-radius: 5px;
  img{
    margin-bottom:0.8rem;
  }
  form {
    padding: 1rem 0;
  }
  p{
    margin-top:0.8rem;
    font-size:0.9rem;
    a{
      text-decoration:none;
      color:${({ theme }) => theme.accent};
    }
  }
`;

interface PropType {
  children: React.ReactNode;
}

const AuthLayout: React.FC<PropType> = ({ children }) => {
  return (
    <AuthScreen>
      <AuthScreenWrapper>
        <img src={Logo} alt="Do It" />
        {children}
      </AuthScreenWrapper>
    </AuthScreen>
  );
};

export default AuthLayout;
