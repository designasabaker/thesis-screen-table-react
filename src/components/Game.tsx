import {FC, Suspense, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import IngredientGraphics from "./IngredientGraphics";
import Pot from "./Pot";
import style from '../global.module.scss';
import {Ingredient} from "../stores";
// Import the functions you need from the SDKs you need
import getIngredients from '../firebase';
import {Iingredient} from "../Interfaces";

// import IngredientsJSONList from "../Data/Ingredients";

const INGREDIENT_WIDTH = 50;
const INGREDIENT_HEIGHT = 50;
// const numOfIngredients = IngredientsJSONList.length;
// const screenWidth = window.innerWidth;
const unitWidth = INGREDIENT_WIDTH * 3; // image size + 2 * button size, button has same size with image


export const Game: FC = () => {
    const init = async () => {
        const IngredientsJSONList: Iingredient[] = await getIngredients();
        // console.log(IngredientsJSONList, 'IngredientsJSONList')
        const ingredients = IngredientsJSONList.sort((a,b) => (parseInt(a.id) - parseInt(b.id))).map((ingredientJSON, index) => {
            return new Ingredient(ingredientJSON.name, ingredientJSON.id, index * unitWidth + INGREDIENT_WIDTH + 20, 100, INGREDIENT_WIDTH, INGREDIENT_HEIGHT, ingredientJSON.srcImg, ingredientJSON.color, ingredientJSON.step);
        });
        setIngredients(ingredients);
        return true;
    }

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(()=>{
        init();
    }, [])

    return(
        <Suspense fallback={<p>Loading...</p>}>
            {/* ingredient(s) graphics*/}
            <div className={style.canvas}>
               {ingredients.map((ingredientObj, index) => (<IngredientGraphics key={index} ingredientObj={ingredientObj} />))}
            </div>
            {/*  game pot(s) */}
            <Pot id={1} posX={100} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={2} posX={500} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
            <Pot id={3} posX={900} posY={200} width={300} height={300} srcImg={''} monitoredIngredients={ingredients} />
        </Suspense>
    )
}

export default observer(Game);