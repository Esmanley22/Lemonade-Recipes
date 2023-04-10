import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
    children: React.ReactNode;
}

const AuthChecker =({ children }: Props) => {
    const navigate = useNavigate();

    const signInOnClick = async () => {
      const response = await signInWithRedirect(auth, Providers.google);
  }
    
  useEffect(() => {
    const auth_state = onAuthStateChanged(auth, (user) => {
      if (!user) {
         console.log(user)
        // setTimeout( () => { window.location.reload() }, 50000)
        signInOnClick()
        navigate('/dashboard');
        
      }
    });
    return () => auth_state();
  }, [auth, navigate]);

  return (
    <>{children}</>
  )
}

export default AuthChecker


  // This will just check if the user is logged in, if so, it returns the children
  // (which are passed as props - it's just whatever component is either protected
  // or not)
  // otherwise it sends them to the login route