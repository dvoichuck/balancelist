import { listItem } from "./listSlice";

export function getListFromLocalStorage(): listItem[] {
    const localList = localStorage.getItem('list')
    let list = []

    if (localList) {
        list = JSON.parse(localList)
    }

    return list
}

export function setListToLocalStorage(list: listItem[]) {
    localStorage.setItem("list", JSON.stringify(list));
}
