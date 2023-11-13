import { MetaMaskButton } from "@metamask/sdk-react-ui";
import getAuthUser from "../../libs/auth/getAuthUser";

const Homepage = () => {
    const loggedOnUser = getAuthUser()
    return (
        <>
            <div className="homepage">
                <p>Wellcome, {loggedOnUser.name}</p>

                <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
            </div>
        </>
    )
}

export default Homepage