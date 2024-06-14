import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import app from "../../firebase/firebaseConfig";

const auth = getAuth(app);

function Logout() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out user:", error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
}

export default Logout;
