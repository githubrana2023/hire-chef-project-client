import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, setUser, auth, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .catch((err) => setError(err));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;

    if (!email) {
      return setError("Email is required");
    } else if (!password) {
      return setError("Password is required");
    } else if (!displayName) {
      return setError("Name is required");
    } else if (!photoURL) {
      return setError("Photo Url is required");
    } else if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    register(email, password)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        handleLogOut();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full md:w-[450px]">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
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
                  type={showPassword?"text":"password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                required
                />
                <span
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </span>

              <label className="label">
                Already have an account ? <Link to="/login">Login</Link>
              </label>
            </div>
            {error && <label className="label text-red-500">{error}</label>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
