import {observer} from "mobx-react";
import ControlBtn from "./ControlBtn";
import ControlBtnTypeEnum from "../enums/ControlBtnTypeEnum";
import {motion} from "framer-motion";

const IngredientGraphics = (props:{ingredient:any}) => {
    const { ingredient } = props;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}>
            <img key={ingredient.id}
                 style={{
                     position: 'absolute',
                     left: ingredient.x,
                     top: ingredient.y,
                     width: ingredient.width,
                     height: ingredient.height,
                     zIndex:100,
                 }}
                 src={ingredient.srcImg}
                 alt={`Ingredient-${ingredient.id}`}
            />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.UP} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.LEFT} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.RIGHT} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.DOWN} ingredient={ingredient} />
        </motion.div>
        )}

export default observer(IngredientGraphics);