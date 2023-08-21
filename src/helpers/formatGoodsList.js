import { lsBusket } from "@/constants/localStorage";
import ls from "local-storage";
import findIndex from "lodash/findIndex";

export const formatGoodsList = (setGoodsList, addGood) => {
  let list = localStorage.getItem(lsBusket);
  let listcopy = [];
  if (list && addGood) {
    //add good
    try {
      const updated = list.slice(1, -1).replace(/\\/g, "");
      listcopy = JSON.parse(updated);
      let atIndex = findIndex(
        listcopy,
        (item) => addGood.id == item.id && item.option.id == addGood.option.id
      );
      if (atIndex >= 0) {
        listcopy[atIndex].quantity += addGood.quantity;
      } else {
        listcopy.push(addGood);
      }
    } catch {
      listcopy = [];
      listcopy.push(addGood);
    }
  } else if (!list && addGood) {
    listcopy.push(addGood);
  } else if (list && !addGood) {
    try{
      const updated = list.slice(1, -1).replace(/\\/g, "");
      listcopy = JSON.parse(updated);
    }
    catch{
      listcopy = []
    }
  }
  ls.set(lsBusket, JSON.stringify(listcopy));
  setGoodsList(listcopy);
};
