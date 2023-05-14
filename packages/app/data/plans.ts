import advanced from "../images/icon-advanced.png"
import arcade from "../images/icon-arcade.png"
import { plans as plansType } from "app/types";
import pro from "../images/icon-pro.png"

export const plans: plansType[] = [
    {
        name: 'Arcade',
        icon: arcade,
        priceMo: 9,
        priceYr: 90,
        tab: 1
    },
    {
        name: 'Advanced',
        icon: advanced,
        priceMo: 12,
        priceYr: 120,
        tab: 2
    },
    {
        name: 'Pro',
        icon: pro,
        priceMo: 15,
        priceYr: 150,
        tab: 3
    }
];