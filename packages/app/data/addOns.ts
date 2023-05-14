import { addOn } from "app/types";

export const addOns: addOn[] = [
    {
        id: 'onlineservice',
        name: 'Online service',
        desc: 'Access to multiplayer games',
        priceAddMo: 1,
        priceAddYr: 10
    },
    {
        id: 'largerstorage',
        name: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        priceAddMo: 2,
        priceAddYr: 20
    },
    {
        id: 'custom',
        name: 'Customizable Profile',
        desc: 'Custom theme on your profile',
        priceAddMo: 2,
        priceAddYr: 20
    }
];