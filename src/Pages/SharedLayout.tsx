import { Outlet } from 'react-router-dom';
import {useAppContext} from "../contexts/AppContext";

const Home = () => {
    const {bodyBackground} = useAppContext();
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: `rgb(${bodyBackground.r},${bodyBackground.g},${bodyBackground.b})`,
                transition: 'background-color 0.5s ease-in-out',
                }}
        >
            <header >
                <h1>Cook</h1>
                <p>Move the ingredients to the pot </p>
            </header>
            <Outlet />
        </div>
    );
};
export default Home;
