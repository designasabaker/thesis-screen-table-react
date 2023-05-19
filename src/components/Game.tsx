import {FC} from 'react';
import {observer} from "mobx-react";
import {ingredients} from '../stores';
import IngredientGraphics from "./IngredientGraphics";
import style from '../global.module.scss';

export const Game: FC = () => {
    return(
        <>
            {/* ingredient(s) graphics*/}
            <div className={style.canvas}>
               {ingredients.map((ingredient) => (<IngredientGraphics ingredient={ingredient} />))}
            </div>
            {/*  game pot(s) */}
        </>
    )
}

export default observer(Game);