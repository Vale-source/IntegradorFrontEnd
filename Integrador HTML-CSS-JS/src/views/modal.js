import { activeProduct, setActiveProduct } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/product";

export const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    handleCancelButton();
});

const handleCancelButton = () => {
    closeModal();
};

export const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});


export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";

    const buttonDelete = document.getElementById("deleteButton")

    if (activeProduct){
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none"
;    }

    if (activeProduct) {
        const name = document.getElementById("name"),
            image = document.getElementById("img"),
            price = document.getElementById("price"),
            categories = document.getElementById("category");

        name.value = activeProduct.name;
        image.value = activeProduct.image;
        price.value = activeProduct.price;
        categories.value = activeProduct.categories;
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setActiveProduct(null);
    resetModal();
};

export const resetModal = () => {
    const name = document.getElementById("name"),
        image = document.getElementById("img"),
        price = document.getElementById("price"),
        categories = document.getElementById("category");

    name.value = "";
    image.value = "";
    price.value = 0;
    categories.value = "Seleccione una categoria";
};

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", () => {
    handleButtonDelete();
})

const handleButtonDelete = () => {
    handleDeleteProduct();
} 