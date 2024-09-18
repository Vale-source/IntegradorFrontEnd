import Swal from "sweetalert2";
import { activeProduct } from "../../main";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistance/localStorage";

export const handleSaveOrModifyElements = () => {
    const name = document.getElementById("name").value,
        image = document.getElementById("img").value,
        price = document.getElementById("price").value,
        categories = document.getElementById("category").value;

    let object = null;

    if (activeProduct) {
        object = {
            ...activeProduct,
            name,
            image,
            price,
            categories,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            name,
            image,
            price,
            categories,
        };
    }

    Swal.fire({
        title: "¡Listo!",
        text: "¡Producto guardado correctamente!",
        icon: "success"
    });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Si, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const filteredProducts = products.filter((el) => el.id !== activeProduct.id);
            localStorage.setItem("products", JSON.stringify(filteredProducts));
            const newProduct = handleGetProductLocalStorage();
            handleRenderList(newProduct);
            closeModal();
        } else {
            closeModal();
        }
    });
};
