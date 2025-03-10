import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import AuthLayout from "../../components/Auth/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => (
  <AuthLayout>
    <h2>Welcome Back</h2>
    <form>
      <Input
        PlaceHolder="John Doe"
        Type="text"
        Id="username"
        Label="UserName"
      />
      <Input
        PlaceHolder="*********"
        Type="password"
        Id="password"
        Label="Password"
      />
      <Button Type="submit" ButtonText="Login" />
    </form>
    <p>
      Don't have an account? <Link to="/auth/register">Register now</Link>
    </p>
  </AuthLayout>
);

export default Login;
