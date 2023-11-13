import { Navigate, Outlet  } from "react-router-dom"
import isAuth from "../libs/auth/isAuth"


// eslint-disable-next-line react/prop-types
const PrivateComponent = ({redirectTo = "/sign-in", children }) => {
    const isAuthenticated = isAuth()
    if (!isAuthenticated) {
        return <Navigate replace="true" to={redirectTo} state={ { from : '${location.pathname}${location.search}'} }/>
       }
       return children ? children : <Outlet />
}

export default PrivateComponent