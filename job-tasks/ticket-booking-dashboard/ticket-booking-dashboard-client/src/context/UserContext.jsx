import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axiosInstance from '../axiosConfig';
import app from '../firebase/firebaseConfig';

const auth = getAuth(app);
const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          const response = await axiosInstance.get(`/users/${firebaseUser.email}`);
          setDbUser(response.data);
        } catch (error) {
          console.error('Error fetching db user:', error);
        }
      } else {
        setUser(null);
        setDbUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, dbUser, loading, setUser, setDbUser }}>
      {!loading && children}
    </UserContext.Provider>
  );
};