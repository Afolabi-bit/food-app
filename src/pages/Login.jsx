import Password from "../images/Password.png";
import Facebook from "../images/Facebook.png";
import Google from "../images/Google.png";

const Login = () => {
  return (
    <main className="pb-9 pt-6 px-4 flex flex-col text-center justify-end md:justify-center items-center overflow-hidden min-h-screen  w-screen">
      <img src={Password} alt="password" />
      <form action="#" className="w-full  md:w-2/3 lg:w-2/5">
        <h1 className="font-semibold text-lg mb-12">Login to your account</h1>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Email"
          className="w-full border-[#888] border mb-6 rounded-[10px]  h-[52px] pl-4"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="w-full border-zinc-500 mb-6 border rounded-[10px]  h-[52px] pl-4"
        />
        <p className="text-md font-medium mb-6">or continue with</p>
        <div className="flex justify-between mx-auto w-full md:w-2/3 mb-4">
          <button className="flex h-[44px]">
            <img src={Facebook} alt="facebook logo" className="mr-2" />
            <span className="font-medium">Facebook</span>
          </button>
          <button className="flex h-[44px]">
            <img src={Google} alt="Google logo" className="mr-2" />
            <span className="font-medium">Google</span>
          </button>
        </div>
        <p className="text-[#DB040B] mb-3">forgot your password?</p>
        <button className="w-full  bg-[#25401D] text-white h-[52px] rounded-[10px] mb-4">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
