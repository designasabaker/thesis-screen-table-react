import {makeAutoObservable} from "mobx";
import ControlBtnTypeEnum from "../enums/ControlBtnTypeEnum";
import {Icolor} from "../Interfaces";
import {defaultColor} from "../Interfaces";


export class Ingredient {
    id = "1";
    x = 100;
    y = 100;
    width = 100;
    height = 100;
    srcImg = "";
    color=defaultColor;
    // private
    TIME_INTERVAL = 15;
    STEP = 1;
    intervalId = 0;
    MOVING_TIME_LIMIT = 1000;


    constructor(id: string, x: number, y: number, width: number, height: number, srcImg: string, color:Icolor, step?: number) {
        makeAutoObservable(this);
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.srcImg = srcImg;
        this.color = color;
        if (step) {
            this.STEP = step;
        }
    }

    isNextPositionOutsideBorder = (x: number, y: number) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const new_x = this.x + x;
        const new_y = this.y + y;

        // 检查是否超出浏览器窗口的可见区域
        return (new_x - this.width <= 0 ||
            new_x + this.width * 2 >= windowWidth ||
            new_y - this.height <= 0 ||
            new_y + this.height * 2 >= windowHeight)
    };

    //helper function
    translate(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    //helper function
    quitTranslate() {
        clearInterval(this.intervalId);
    }

    startTranslate(btnType: ControlBtnTypeEnum) {
        // clear all movement
        this.quitTranslate();

        let step2d = [0, 0];
        switch (btnType) {
            case ControlBtnTypeEnum.UP:
                step2d = [0, -this.STEP];
                break;
            case ControlBtnTypeEnum.DOWN:
                step2d = [0, this.STEP];
                break;
            case ControlBtnTypeEnum.LEFT:
                step2d = [-this.STEP, 0];
                break;
            case ControlBtnTypeEnum.RIGHT:
                step2d = [this.STEP, 0];
                break;
            default:
                break;
        }

        // start moving
        this.intervalId = setInterval(() => {
            if (this.isNextPositionOutsideBorder(step2d[0], step2d[1])) return; // next step is outside border, quit
            this.translate(step2d[0], step2d[1]);
        }, this.TIME_INTERVAL);

        // auto stop
        setTimeout(() => {
            this.quitTranslate();
        }, this.MOVING_TIME_LIMIT);
    }
}

export default Ingredient;