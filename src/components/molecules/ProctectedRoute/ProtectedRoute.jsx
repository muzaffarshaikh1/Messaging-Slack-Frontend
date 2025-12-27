import { useAuth } from '@/hooks/apis/auth/context/useAuth'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
  
    const {auth} = useAuth();

    if(auth.isLoading){
        return <div>Loading...</div>
    }

    if(!auth.user || !auth.token){
        
        return <Navigate to='/auth/signin' />
    }
  
    return <>{children}</>
}

export default ProtectedRoute