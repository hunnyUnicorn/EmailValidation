import AuthLayout from '../../containers/layout/AuthLayout'
import LoginForm from '../../containers/auth/LoginForm'
import Header from '../../containers/layout/Header';

const AuthPage = () => {
  return (
    <AuthLayout>
      <Header/>
      <LoginForm/>
    </AuthLayout>
  );
}

export default AuthPage;