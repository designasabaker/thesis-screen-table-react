import Ingredient from "./Ingredient";
import milkImg from "../assets/milk.png";
import spiceImg from "../assets/spice.png";
import {defaultColor} from "../Interfaces";

export const spice = new Ingredient("i1", 52, 55, 50, 50, spiceImg, {...defaultColor, r:40},3);
export const milk = new Ingredient("i2", 150, 55, 50, 50, milkImg, {...defaultColor},2);

export const ingredients = [spice, milk];

