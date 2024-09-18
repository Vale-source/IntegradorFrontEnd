//===== STORE =====

import { openModal } from "./modal";
import { handleGetProductLocalStorage } from "../services/persistance/localStorage"
import { setActiveProduct } from "../../main";

export const handleGetProductsToStore = () =>  {
    
    const products = handleGetProductLocalStorage();

    handleRenderList(products);

}

export const handleRenderList = (productsIn) => {

    const burgers = productsIn.filter((el) => el.categories === "Hamburguesas");
    const fries = productsIn.filter((el) => el.categories === "Papas");
    const drink = productsIn.filter((el) => el.categories === "Gaseosas");

    const renderProductGroup = (products, title) => {
        if (products.length > 0) {
            const productsHTML = products.map((prod, index) => {
                return `
                <div class="containerTargetItem" id="product-${prod.categories}-${index}">
                    <div>
                        <img src="${prod.image}" />
                        <div>
                            <h2>${prod.name}</h2>
                        </div>
                        <div id="targetProps">
                            <p><b>Precio:</b> $ ${prod.price}</p>
                        </div>
                    </div>
                </div>
                `;
            });

            return `
            <section class="sectionStore">
                <div class="containerTitleSection">
                <h3>${title}</h3>
                </div>
                <div class="containerProductStore">${productsHTML.join("")}</div>
            </section>
            `;
        } else {
            return "";
        }
    };

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(fries, "Papas")}
        ${renderProductGroup(drink, "Gaseosas")}
    `;

    const addEvents = (product) => {
        product.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);
            productContainer.addEventListener("click", () => {
                setActiveProduct(element)
                openModal()
            })
        });
    };

    addEvents(burgers);
    addEvents(fries);
    addEvents(drink);
};

