import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>         
            <div className="auth-layout d-flex align-items-center py-4 bg-body-tertiary">   
            <Outlet/></div>  
                
        </>
        
    );
}

export default AuthLayout