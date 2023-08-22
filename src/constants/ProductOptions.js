import { find } from "lodash";

export const bootleSize = [
  {
    id: 1,
    name: "1 Bottle",
    priceMultiplication: 1,
  },
  {
    id: 2,
    name: "2 Bottle",
    priceMultiplication: 2,
  },
  {
    id: 3,
    name: "3 Bottle",
    priceMultiplication: 3,
  },
  {
    id: 4,
    name: "4 Bottle",
    priceMultiplication: 4,
  },
  {
    id: 5,
    name: "5 Bottle",
    priceMultiplication: 5,
  },
  {
    id: 6,
    name: "100 gr",
    priceMultiplication: 0.2,
  },
  {
    id: 7,
    name: "250 gr",
    priceMultiplication: 0.5,
  },
  {
    id: 8,
    name: "300 gr",
    priceMultiplication: 0.7,
  },
  {
    id: 9,
    name: "x1",
    priceMultiplication: 1,
  },
  {
    id: 10,
    name: "x2",
    priceMultiplication: 2,
  },
  {
    id: 11,
    name: "x5",
    priceMultiplication: 5,
  },
];
export const getSelectedOption = (id) => {
  return find(bootleSize, (op) => op.id == id);
};
