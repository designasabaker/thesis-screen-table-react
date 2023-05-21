import {useEffect, useMemo, useRef, useState} from "react";
import Ingredient   from "../stores/Ingredient";
import {observer} from "mobx-react";
import style from '../global.module.scss';
import {Icolor} from "../Interfaces";
import { motion } from 'framer-motion';

interface PotProps {
    id: number;
    posX: number;
    posY: number;
    width: number;
    height: number;
    srcImg: string;
    monitoredIngredients: Ingredient[];
}

const Pot = (props:PotProps) =>{
    const divRef = useRef(null);

    // initial water color
    const initialColor = {
        r: 0,
        g: 0,
        b: 0,
    };

    const [color,setColor] = useState(initialColor);
    const [displayColor,setDisplayColor] = useState(initialColor);

    const {
        id, posX, posY, width, height, monitoredIngredients,
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
    // console.log(`Pot ${id} has ${insideIngredientsNum} ingredients inside.`);

    const insideIngredientsColorSum: Icolor = useMemo(() => monitoredIngredients.reduce((colorVal, ingredient) => {
        return !checkIngredient(ingredient) ? colorVal : {r: colorVal.r + ingredient.color.r, g: colorVal.g + ingredient.color.g, b: colorVal.b + ingredient.color.b}
    }, initialColor),[insideIngredientsNum]);

    useEffect(()=>{
        const averageIndex = (insideIngredientsNum === 0 ? 1 : insideIngredientsNum);
        setColor({
                ...color,
                r: insideIngredientsColorSum.r / averageIndex,
                g: insideIngredientsColorSum.g / averageIndex,
                b: insideIngredientsColorSum.b / averageIndex,
            }
        )
    }, [insideIngredientsNum]);

    useEffect(() => {
        const divElement = divRef.current;

        const intervalId = setInterval(() => {
            if (divElement) {
                const computedStyle = getComputedStyle(divElement);
                const backgroundColor = computedStyle.backgroundColor;
                const rgbValues = backgroundColor.match(/\d+/g);
                if (rgbValues) {
                    const [r, g, b] = rgbValues.map(Number);
                    setDisplayColor({ r, g, b });
                }
            }
        }, 100); // 每100毫秒更新一次颜色值

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
            className={style.potContainer}
            style={{
                left: posX,
                top: posY,
                width: width,
                height: height,
                zIndex: -30,
            }}
        >
            <p>POT{id} {!!displayColor && `R${displayColor.r} G${displayColor.g} B${displayColor.b}`}</p>
            <div
                ref={divRef}
                className={style.pot}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
                    // boxShadow: 'inset 0 0 120px 0 #c7c7c7',
                }} >

            </div>

        </motion.div>)
}
export default  observer(Pot);