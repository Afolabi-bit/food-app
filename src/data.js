import TomatoPizza from "./images/tomato-pizza.jpg";
import ChickenSharwarma from "./images/chicken-shawarma.jpg";
import RiceAndSauce from "./images/rice-and-sauce.jpg";
import Sandwich from "./images/sandwich.jpg";
import FullChicken from "./images/full-chicken.jpg";
import SpecialCombo from "./images/special-combo.jpg";
import SpecialComboTwo from "./images/special-combo-2.jpg";
import SpecialComboThree from "./images/special-combo-3.jpg";
import SpecialComboFour from "./images/special-combo-4.jpg";
import ChickenSalad from "./images/chicken-salad.jpg";
import SpecialPizza from "./images/special-pizza.jpg";
import SpecialPancake from "./images/special-pancake.jpg";
import SpecialPizzaTwo from "./images/special-pizza-2.jpg";
import KoreanBeef from "./images/korean-beef.jpg";
import Burger from "./images/burger.jpg";
import Food from "./images/food.jpg";
import Bluesky from "./images/bluesky.jpg";
import RedFrisken from "./images/red-frisken.jpg";
import Pucci from "./images/pucci's-pizza.jpg";
import Allure from "./images/allure-joint.jpg";
import Ladies from "./images/ladies-joint.jpg";
import FoodPalace from "./images/food-palace.jpg";

const MenuList = [
  {
    id: 3,
    name: "Rice & sauce",
    time: "1hr 30mins",
    image: RiceAndSauce,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 4,
    name: "Sandwich",
    time: "1hr 30mins",
    image: Sandwich,
    price: "$40.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 5,
    name: "Full Chicken",
    time: "1hr 30mins",
    image: FullChicken,
    price: "$23.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 6,
    name: "Special Combo",
    time: "1hr 30mins",
    image: SpecialCombo,
    price: "$15.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 7,
    name: "Special Pizza",
    time: "1hr 30mins",
    image: SpecialPizza,
    price: "$35.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 8,
    name: "Special Pancake",
    time: "1hr 30mins",
    image: SpecialPancake,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 9,
    name: "Special Pizza",
    time: "1hr 30mins",
    image: SpecialPizzaTwo,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 1,
    name: "Tomato Pizza",
    time: "30mins",
    image: TomatoPizza,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 2,
    name: "Chicken Shawarma",
    time: "15mins",
    image: ChickenSharwarma,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 10,
    name: "Special Combo",
    time: "1hr 30mins",
    image: SpecialComboThree,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 11,
    name: "Korean Beef",
    time: "1hr 30mins",
    image: KoreanBeef,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque.",
  },
  {
    id: 16,
    name: "Special Combo",
    time: "1hr 30mins",
    image: SpecialComboFour,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque",
  },
  {
    id: 12,
    name: "Special Combo",
    time: "1hr 30mins",
    image: SpecialComboTwo,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque",
  },
  {
    id: 13,
    name: "Chicken Salad",
    time: "1hr 30mins",
    image: ChickenSalad,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque",
  },
  {
    id: 14,
    name: "Special Combo",
    time: "1hr 30mins",
    image: Burger,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque",
  },
  {
    id: 15,
    name: "Special Combo",
    time: "1hr 30mins",
    image: Food,
    price: "$30.00",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro sequi excepturi consectetur sit dignissimos quia, atque ducimus numquam neque",
  },
];

export const colors = [
  "fuchsia-200",
  "slate-200",
  "rose-200",
  "amber-200",
  "emerald-200",
];

export const BookingList = [
  {
    id: 1,
    name: "Bluesky Joint",
    open: "Tues-Friday",
    image: Bluesky,
  },
  {
    id: 2,
    name: "Red Frisken",
    open: "Mon-Friday",
    image: RedFrisken,
  },
  {
    id: 3,
    name: "Pucci's Pizza",
    open: "Wed-Friday",
    image: Pucci,
  },
  {
    id: 4,
    name: "Allure Joint",
    open: "Tues-Friday",
    image: Allure,
  },
  {
    id: 5,
    name: "Ladies Joint",
    open: "Tues-Friday",
    image: Ladies,
  },
  {
    id: 6,
    name: "Food Palace",
    open: "Tues-Friday",
    image: FoodPalace,
  },
];

export default MenuList;
