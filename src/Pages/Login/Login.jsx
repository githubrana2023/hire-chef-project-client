import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [error, setError] = useState(null);
  const { handleLogin, setUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle(googleProvider)
      .then((res) => {
        setUser(res.user);
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  const handleGithubLogin = () => {
    signInWithGithub(githubProvider)
      .then((res) => {
        setUser(res.user);
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      return setError("Email and Password required");
    }

    handleLogin(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setError("");
        navigate(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full md:w-[450px] ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <span className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  value={password}
                  required
                />
                <span
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </span>
              <label className="label flex-col items-start gap-3">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
                <span className="w-full text-red-500 text-center">{error}</span>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              New to Hire Chef ?
              <Link to="/register" className="label underline">
                Register
              </Link>
            </label>
          </form>
          
          <span className="text-center">Or</span>

          <div
            className="flex items-center justify-evenly pb-8 pt-3"
            
          >
            <button className="">
              <FcGoogle className="text-4xl" onClick={handleGoogleLogin}/>
            </button>
            <button className="" onClick={handleGithubLogin}>
              <BsGithub className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
