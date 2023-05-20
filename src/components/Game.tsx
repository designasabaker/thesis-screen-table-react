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
               {ingredients.map((ingredient, index) => (<IngredientGraphics key={index} ingredient={ingredient} />))}
            </div>
            {/*  game pot(s) */}
            <Pot id={1} posX={100} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={2} posX={500} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={3} posX={900} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
        </>
    )
}

export default observer(Game);