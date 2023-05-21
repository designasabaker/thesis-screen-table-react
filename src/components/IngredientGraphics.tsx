import {observer} from "mobx-react";
import ControlBtn from "./ControlBtn";
import ControlBtnTypeEnum from "../enums/ControlBtnTypeEnum";
import {motion} from "framer-motion";

const IngredientGraphics = (props:any) => {
    const { ingredientObj } = props;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}>
            <img key={ingredientObj.id}
                 style={{
                     position: 'absolute',
                     left: ingredientObj.x,
                     top: ingredientObj.y,
                     width: ingredientObj.width,
                     height: ingredientObj.height,
                     zIndex:100,
                 }}
                 src={ingredientObj.srcImg}
                 alt={`Ingredient-${ingredientObj.name}`}
            />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.UP} ingredient={ingredientObj} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.LEFT} ingredient={ingredientObj} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.RIGHT} ingredient={ingredientObj} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.DOWN} ingredient={ingredientObj} />
        </motion.div>
        )}

export default observer(IngredientGraphics);