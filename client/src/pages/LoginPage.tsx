import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';

const LoginPage = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;

    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);
    const resProfile = await profileRequest();

    console.log(resProfile);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email@mail.com" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
