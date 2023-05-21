import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header >
                <h1>Cook</h1>
                <p>Move the ingredients to the pot </p>
            </header>
            <Outlet />
        </>
    );
};
export default Home;
