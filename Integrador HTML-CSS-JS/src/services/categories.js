// ===== Categoria =====

import { activeCategory } from "../../main";
import { handleRenderList } from "../views/store";
import { handleGetProductLocalStorage } from "./persistance/localStorage";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case activeCategory:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories === categoryIn)
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const majorPriceResult = products.sort((a,b) => b.price - a.price)
            handleRenderList(majorPriceResult);
            break;
        case "menorPrecio":
            const minorPriceResult = products.sort((a,b) => a.price - b.price)
            handleRenderList(minorPriceResult);
            break;
    }
}



//render de la vista categorias
export const renderCategories = () => {
    document.getElementById("listFilter").innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;
    
    const ulList = document.getElementById("listFilter");
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener('click', () => {
            handleClikc(liElement);
        });
    });

    const handleClikc = (element) => {
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive")
            } else {
                if (element === el ) {
                    el.classList.add("liActive")
                }
            }
        })
    }
};
