import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();
// hi 
  console.log("PrivateRoute - Loading:", loading);
  console.log("PrivateRoute - User:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    // console.log("PrivateRoute - No User, redirecting to login");
    return <Navigate to="/login" state={{ from: location }} />;
  }

//   console.log("PrivateRoute - User authenticated, rendering outlet");
  return (
    <div>
      {/* <p>Private Route: User authenticated</p> */}
      {/* <Outlet/> */}
      { children }
    </div>
  );
};

export default PrivateRoute;
