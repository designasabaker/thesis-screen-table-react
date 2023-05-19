import {observer} from "mobx-react";
import ControlBtn from "./ControlBtn";
import ControlBtnTypeEnum from "../enums/ControlBtnTypeEnum";

const IngredientGraphics = (props:{ingredient:any}) => {
    const { ingredient } = props;
    return (
        <>
            <img key={ingredient.id}
                 style={{
                     position: 'absolute',
                     left: ingredient.x,
                     top: ingredient.y,
                     width: ingredient.width,
                     height: ingredient.height,
                 }}
                 src={ingredient.srcImg}
                 alt={`Ingredient-${ingredient.id}`}
            />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.UP} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.LEFT} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.RIGHT} ingredient={ingredient} />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.DOWN} ingredient={ingredient} />
        </>
        )}

export default observer(IngredientGraphics);