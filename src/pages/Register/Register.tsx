import AuthLayout from "../../components/Auth/AuthLayout";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthLayout>
      <h2>Create Your Account</h2>
      <form>
        <Input
          PlaceHolder="Jhon Doe"
          Type="text"
          Id="username"
          Label="UserName"
        />
        <Input
          PlaceHolder="*******"
          Type="password"
          Id="password"
          Label="Password"
        />
        <Input
          PlaceHolder="********"
          Type="password"
          Id="CPassword"
          Label="Confirm Password"
        />
        <Button Type="submit" ButtonText="Register" />
      </form>
      <p>
        Already have an account? <Link to="/auth/login">Login now</Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
