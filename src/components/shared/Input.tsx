import Styled from "styled-components";

interface PropsType {
  Id: string;
  Label: string;
  Type: string;
  PlaceHolder: string;
}

const InputWrapper = Styled.div`
 text-align:left;
`;
const InputLabel = Styled.label`
  display:block;
  margin-block:0.5rem;
  font-size:0.8rem;
`;
const InputBox = Styled.input`
 border:none;
 outline:none;
 padding:0.7rem 1.2rem;
 border-radius:5px;
 width:100%;
 margin-bottom:0.5rem;
`;

export const Input = (props: PropsType) => {
  const { Label, Id, PlaceHolder, Type } = props;
  return (
    <InputWrapper>
      <InputLabel htmlFor={Id}>{Label}</InputLabel>
      <InputBox placeholder={PlaceHolder} id={Id} type={Type} />
    </InputWrapper>
  );
};

export default Input;
