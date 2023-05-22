import {observer} from "mobx-react";
import ControlBtn from "./ControlBtn";
import ControlBtnTypeEnum from "../enums/ControlBtnTypeEnum";
import {motion} from "framer-motion";
import {useCallback} from "react";

const IngredientGraphics = (props:any) => {
    const {ingredientObj} = props;

    const handleMouseDown = useCallback((event: any) => {
        event.preventDefault();
        const {clientX, clientY} = event;
        if (clientX > ingredientObj.x && clientX < ingredientObj.x + ingredientObj.width && clientY > ingredientObj.y && clientY < ingredientObj.y + ingredientObj.height) {
            // ingredientObj.x = clientX - ingredientObj.width / 2;
            // ingredientObj.y = clientY - ingredientObj.height / 2;
            ingredientObj.setPosition(clientX - ingredientObj.width / 2, clientY - ingredientObj.height / 2);
            ingredientObj.setIsDragging(true);
        } else {
            ingredientObj.setIsDragging(false);
        }
    }, []);

    const handleMouseMove = useCallback((event: any) => {
        event.preventDefault();
        if (ingredientObj.isDragging) {
            const {clientX, clientY} = event;
            // setPosition({ x: clientX, y: clientY });
            // ingredientObj.x = clientX - ingredientObj.width / 2;
            // ingredientObj.y = clientY - ingredientObj.height / 2;
            ingredientObj.setPosition(clientX - ingredientObj.width / 2, clientY - ingredientObj.height / 2);
        }
    }, []);

    const handleMouseUp = useCallback(() => {
        if (ingredientObj.isDragging) {
            ingredientObj.setIsDragging(false);
        }
    }, []);

    return (
        // <div
        //     style={{
        //         position: 'absolute',
        //         zIndex:100,
        //     }}>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
        >
            <img key={ingredientObj.id}
                 style={{
                     position: 'absolute',
                     left: ingredientObj.x,
                     top: ingredientObj.y,
                     width: ingredientObj.width,
                     height: ingredientObj.height,
                     cursor: ingredientObj.isDragging ? 'grabbing' : 'grab',
                     zIndex: 100,
                 }}
                 src={ingredientObj.srcImg}
                 alt={`Ingredient-${ingredientObj.name}`}
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
            />
            <ControlBtn controlBtnType={ControlBtnTypeEnum.UP} ingredient={ingredientObj}/>
            <ControlBtn controlBtnType={ControlBtnTypeEnum.LEFT} ingredient={ingredientObj}/>
            <ControlBtn controlBtnType={ControlBtnTypeEnum.RIGHT} ingredient={ingredientObj}/>
            <ControlBtn controlBtnType={ControlBtnTypeEnum.DOWN} ingredient={ingredientObj}/>
        </motion.div>
)
};

export default observer(IngredientGraphics);