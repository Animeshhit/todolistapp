import Styled from "styled-components";

interface PropsType {
  Type: "button" | "submit" | "reset";
  ButtonText: string;
}

const StyledButton = Styled.button`
 width:100%;
 background:${({ theme }) => theme.accent};
 border:none;
 outline:none;
 color:white;
 padding:0.8rem 1rem;
 border-radius:5px;
 margin-top:1rem;
 transition:opacity 0.3s ease;
 cursor:pointer;
 &:hover{
    opacity:0.8;
 }
`;

const Button = (props: PropsType) => {
  const { Type, ButtonText } = props;
  return (
    <>
      <StyledButton type={Type}>{ButtonText}</StyledButton>
    </>
  );
};

export default Button;
