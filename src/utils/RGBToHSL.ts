import {rgb, hsl } from "../Interfaces";

const DEFAULT_HSL:hsl = {
    h: 34,
    s: 75,
    l: 50,
}

const RGBToHSL = (rgbObj:rgb) => {
    const r = rgbObj.r / 255;
    const g = rgbObj.g / 255;
    const b = rgbObj.b / 255;

    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;

    const hslObj:hsl = {
        h: 60 * h < 0 ? 60 * h + 360 : 60 * h,
        s: 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        l: (100 * (2 * l - s)) / 2,
    }
    return hslObj;
};

const HSLToRGB = (hslObj:hsl) => {
    const s = hslObj.s / 100;
    const l = hslObj.l / 100;
    const k = (n:number) => (n + hslObj.h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n:number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const rgbObj:rgb = {r:255 * f(0), g:255 * f(8), b:255 * f(4)}

    return rgbObj;
};

export const RGBToGray = (rgbObj:rgb) => {
    const gray = (rgbObj.r + rgbObj.g + rgbObj.b) / 3;
    return {r: gray, g: gray, b: gray};
}

export const RGBToBodybackground= (rgbObj:rgb) => {
    const newLightness = (rgbObj.r + rgbObj.g + rgbObj.b) / 3;
    const newHSL = {
        ...DEFAULT_HSL,
        l: newLightness,
    };

    return HSLToRGB(newHSL);
}

export const RGBToCounterGray = (rgbObj:rgb) => {
    const gray =255 - (rgbObj.r + rgbObj.g + rgbObj.b) / 3;
    return {r: gray, g: gray, b: gray};
}

export default RGBToHSL;