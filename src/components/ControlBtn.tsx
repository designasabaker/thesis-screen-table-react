import ControlBtnTypeEnum  from '../enums/ControlBtnTypeEnum';
import {AiOutlineCaretDown, AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineCaretUp} from "react-icons/all";

const btnTextMap = {
    [ControlBtnTypeEnum.UP]: <AiOutlineCaretUp />,
    [ControlBtnTypeEnum.DOWN]: <AiOutlineCaretDown />,
    [ControlBtnTypeEnum.LEFT]: <AiOutlineCaretLeft />,
    [ControlBtnTypeEnum.RIGHT]: <AiOutlineCaretRight />,
}

interface ControlBtnProps {
    controlBtnType: ControlBtnTypeEnum;
    ingredient: any;
}
const ControlBtn = (props: ControlBtnProps) => {
    const { controlBtnType, ingredient } = props;
    const btnText = btnTextMap[controlBtnType];
    const topPosMap ={
        [ControlBtnTypeEnum.UP]: ingredient.y - ingredient.height,
        [ControlBtnTypeEnum.DOWN]: ingredient.y + ingredient.height,
        [ControlBtnTypeEnum.LEFT]: ingredient.y,
        [ControlBtnTypeEnum.RIGHT]: ingredient.y,
    }
    const leftPosMap ={
        [ControlBtnTypeEnum.UP]: ingredient.x,
        [ControlBtnTypeEnum.DOWN]: ingredient.x,
        [ControlBtnTypeEnum.LEFT]: ingredient.x - ingredient.width,
        [ControlBtnTypeEnum.RIGHT]: ingredient.x + ingredient.width,
    }

    return (
        <button
            style={{
                position: 'absolute',
                left: leftPosMap[controlBtnType],
                top: topPosMap[controlBtnType],
                width: ingredient.width,
                height: ingredient.height,
                textAlign: 'center',
                zIndex: 100,
            }}
            type="button"
            onClick={()=>ingredient.startTranslate(controlBtnType)}
        >
            {btnText}
        </button>

    )
}

export default ControlBtn;