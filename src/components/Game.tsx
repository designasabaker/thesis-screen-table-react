import {FC} from 'react';
import {observer} from "mobx-react";
import {ingredients} from '../stores';
import IngredientGraphics from "./IngredientGraphics";
import Pot from "./Pot";
import style from '../global.module.scss';

export const Game: FC = () => {
    return(
        <>
            {/* ingredient(s) graphics*/}
            <div className={style.canvas}>
               {ingredients.map((ingredient) => (<IngredientGraphics ingredient={ingredient} />))}
            </div>
            {/*  game pot(s) */}
            <Pot posX={200} posY={200} width={500} height={500} srcImg={''} monitoredIngredients={ingredients} />
        </>
    )
}

export default observer(Game);