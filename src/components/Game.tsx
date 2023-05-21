import {FC, Suspense, useEffect} from 'react';
import {observer} from "mobx-react";
import IngredientGraphics from "./IngredientGraphics";
import Pot from "./Pot";
import style from '../global.module.scss';
import {Ingredient} from "../stores";

import IngredientsJSONList from "../Data/Ingredients"; // import from local file

const INGREDIENT_WIDTH = 50;
const INGREDIENT_HEIGHT = 50;
// const numOfIngredients = IngredientsJSONList.length;
// const screenWidth = window.innerWidth;
const unitWidth = INGREDIENT_WIDTH * 3; // image size + 2 * button size, button has same size with image

let ingredients: Ingredient[] = [];
function init(){
    ingredients = IngredientsJSONList.sort((a,b) => (parseInt(a.id) - parseInt(b.id))).map((ingredient, index) => {
        return new Ingredient(ingredient.id, index * unitWidth + INGREDIENT_WIDTH + 20, 100, INGREDIENT_WIDTH, INGREDIENT_HEIGHT, ingredient.srcImg, ingredient.color, ingredient.step);
    });
}
export const Game: FC = () => {
    useEffect(init, [])

    return(
        <Suspense fallback={<p>Loading...</p>}>
            {/* ingredient(s) graphics*/}
            <div className={style.canvas}>
               {ingredients.map((ingredient, index) => (<IngredientGraphics key={index} ingredient={ingredient} />))}
            </div>
            {/*  game pot(s) */}
            <Pot id={1} posX={100} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={2} posX={500} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={3} posX={900} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
        </Suspense>
    )
}

export default observer(Game);