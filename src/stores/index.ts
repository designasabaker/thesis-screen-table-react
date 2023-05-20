import Ingredient from "./Ingredient";
import milkImg from "../assets/milk.png";
import spiceImg from "../assets/spice.png";

export const spice = new Ingredient("i1", 52, 55, 50, 50, spiceImg, 50);
export const milk = new Ingredient("i2", 150, 55, 50, 50, milkImg, -10);

export const ingredients = [spice, milk];

