import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { user } = useUser();

  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
