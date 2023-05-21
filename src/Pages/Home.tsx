import {FC} from "react";
import style from '../global.module.scss';
import {Link} from "react-router-dom";

export const Home:FC = () => {
    return (
        <>
            <Link
                className={style.startBtn}
                to="/game"
            >
                Start the Game
            </Link>
        </>
    )
}

export default Home