import useUserState from "../authProvider/useUserState";

export default function Login() {
  const { loginByGoogle } = useUserState();

  const handleGoogleLogin = async () => {
    try {
      const response = await loginByGoogle();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-48 border flex items-center justify-center">
      <button className="btn btn-success block" onClick={handleGoogleLogin}>
        Login With Google
      </button>
    </div>
  );
}
