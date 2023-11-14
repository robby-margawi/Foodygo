import { MetaMaskButton } from "@metamask/sdk-react-ui";
import getAuthUser from "../../libs/auth/getAuthUser";
import DarkNavbar from "../../components/DarkNavbar";

const Homepage = () => {
    const loggedOnUser = getAuthUser()
    return (
        <>          
            <DarkNavbar userName={loggedOnUser.name}/>            
            <div className="content">
                <div className="metamask-button-wrapper">
                    <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> 
                </div>  
            </div>      
        </>
    )
}

export default Homepage