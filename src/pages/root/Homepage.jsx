import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import { MetaMaskButton } from "@metamask/sdk-react-ui";

const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
            </div>
        </>
    )
}

export default Homepage