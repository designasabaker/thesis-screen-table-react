import {useEffect, useMemo, useState} from "react";
import Ingredient   from "../stores/Ingredient";
import {observer} from "mobx-react";

interface PotProps {
    posX: number;
    posY: number;
    width: number;
    height: number;
    srcImg: string;
    monitoredIngredients: Ingredient[];
}

const Pot = (props:PotProps) =>{
    const initialColor = {
        r: 0,
        g: 10,
        b: 10,
    };
    const [color,setColor] = useState(initialColor);

    const {
        posX, posY, width, height, monitoredIngredients,
    } = props;

    // helper function: check if ONE ingredient is inside the pot
    const checkIngredient = (ingredient: Ingredient) => {
        return (ingredient.x >= posX
            && ingredient.x <= posX + width
            && ingredient.y >= posY
            && ingredient.y <= posY + height)
    };

    // check how many ingredients are inside the pot
    const insideIngredientsNum:number = monitoredIngredients.filter(checkIngredient).length;

    const insideIngredientsRedValSum: number = useMemo(()=>monitoredIngredients.reduce((redVal, ingredient) => {
        return redVal + (checkIngredient(ingredient) ? ingredient.redValueChange : 0);
    }, 0),[insideIngredientsNum]);

    useEffect(()=>{
        setColor({
                ...color,
                r: insideIngredientsRedValSum / (insideIngredientsNum === 0 ? 1 : insideIngredientsNum ),
            }
        )
    }, [insideIngredientsRedValSum]);

    return (
        <div
            style={{
                position: 'fixed',
                zIndex: -10,
                left: posX,
                top: posY,
                width: width,
                height: height,
                background: `rgb(${color.r},${color.g},${color.b})`,
            }}
        >
            POT

        </div>)
}
export default  observer(Pot);