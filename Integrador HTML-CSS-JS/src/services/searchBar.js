import { handleRenderList } from "../views/store";
import { handleGetProductLocalStorage } from "./persistance/localStorage"

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader")
    const product = handleGetProductLocalStorage();

    const result = product.filter((el) => el.name.toLowerCase().includes(inputHeader.value))
    handleRenderList(result);
}