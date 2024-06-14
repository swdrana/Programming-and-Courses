import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useUser } from "../../context/UserContext";
import app from "../../firebase/firebaseConfig";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { setUser, setDbUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";
  if (user) {
    // navigate(redirectTo);
  }
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loggedInUser = await signInWithEmailAndPassword(email, password);

      if (loggedInUser) {
        setUser(loggedInUser.user);

        const response = await axiosInstance.get(
          `/users/${loggedInUser.user.email}`
        );
        setDbUser(response.data);

        navigate(redirectTo);
      }
    } catch (error) {
      console.error(
        "Error logging in user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
