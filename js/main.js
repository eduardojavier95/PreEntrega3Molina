// ******************************************************************************************************
// Complementaries functions
// ******************************************************************************************************
function showProdCart(cart) {
    let prodCart = "";
    for (const prod of cart) {
        prodCart += `${prod.name}\n`;
    }
    if (cart.length === 0) {
        alert("No hay productos en el carrito aun. Agrega algun producto y vuelva por aqui para verlos.");
    } else {
        alert(`Los productos son los siguientes:\n${prodCart}`);
    }
}

function showProdStore() {
    let prodStore = "";
    for (const prod of products) {
        prodStore += `${prod.id}. ${prod.name} --- ${prod.price}\n`;
    }
    alert(`Estos son los productos disponibles en la tienda: \n ${prodStore}`);
}

function addProdCart(cart) {
    let prodId = -1;
    let prodStore = "";
    for (const prod of products) {
        prodStore += `${prod.id}. ${prod.name} --- ${prod.price}\n`;
    }

    while (prodId !== 0) {
        prodId = parseInt(prompt(`Entre el id del producto que desea agregar: \n${prodStore} \n0. Para salir.`));
        if (0 < prodId && prodId <= 9) {
            let prodToCart = products.find((product) => prodId === product.id);
            cart.push(prodToCart);
        } else if (prodId == 0) {
            break;
        } else {
            alert("No tenemos disponible ese producto por el momento, estamos trabajando en eso.");
            break;
        }
    }
    return cart;
}

function deleteProdCart(cart) {
    let prodId = -1;
    while (prodId !== 0) {
        if (cart.length !== 0) {
            let prodCart = "";
            for (const prod of cart) {
                prodCart += `${prod.id}. ${prod.name} --- ${prod.price}\n`;
            }
            prodId = parseInt(prompt(`Entre el id del producto que desea eliminar: \n${prodCart} \n0. Para salir.`));
            if (0 < prodId && prodId <= 9) {
                let prodToCart = cart.find((product) => prodId === product.id);
                if (prodToCart !== undefined) {
                    let indexToDelete = cart.indexOf(prodToCart);
                    if (indexToDelete !== -1) {
                        cart.splice(indexToDelete, 1);
                    }
                } else {
                    alert("Ese producto no se encuentra en el carrito, chequeelo de nuevo.");
                }
            } else if (prodId == 0) {
                break;
            } else {

                alert("No tenemos disponible ese producto por el momento, estamos trabajando en eso.");
                break;
            }
        } else {
            alert("No hay productos en el carrito");
            prodId = 0;
        }
    }
    return cart
}

function checkTotal(cart) {
    let total = 0;
    for (const prod of cart) {
        console.log(prod);
        total += prod.price;
    }
    alert(`Usted debe pagar un total de: $${total} por los productos en su carrito.`);
}

// ******************************************************************************************************
// Main Function
// ******************************************************************************************************

function main() {

    let option = 1;
    let cart = Array();

    while (option !== 0) {
        option = parseInt(
            prompt(
                `Entre el numero de la accion deseada:
1. Listar productos de el carrito.
2. Agregar productos al carrito.
3. Borrar productos de el carrito.
4. Listar productos de la tienda.
5. Chequear total a pagar.
0. Para salir.
                `
            )
        );
        switch (option) {
            case 0:
                break;
            case 1:
                showProdCart(cart);
                break;
            case 2:
                cart = addProdCart(cart);
                break;
            case 3:
                cart = deleteProdCart(cart);
                break;
            case 4:
                showProdStore();
                break;
            case 5:
                checkTotal(cart);
                break;
            default:
                alert("Option no disponible, vuelva a intentarlo.");
        }
    }
}


// ******************************************************************************************************
// Call to main function
// ******************************************************************************************************

main();