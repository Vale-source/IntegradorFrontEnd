// ===== LOCALSTORAGE =====
// Traer productos
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products
    } else {
        return []
    }
}

//Guardar productos
export const setInLocalStorage = (productIn) => {

    let productsInLocal = handleGetProductLocalStorage();
    
    const existingIndex = productsInLocal.findIndex((productsLocal) => {
        return productsLocal.id === productIn.id;
    });
    
    if(existingIndex !== -1) {
        productsInLocal[existingIndex] = productIn;
    } else {
        productsInLocal.push(productIn);
    }

    localStorage.setItem("products", JSON.stringify(productsInLocal))
}