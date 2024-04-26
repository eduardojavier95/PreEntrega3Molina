

function showProdStore() {
    let prodStore = document.getElementById("products");
    for (const prod of products) {
        prodStore.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${prod.image}" class="card-img-top" alt="${prod.name}" width="100" height=200>
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <hr />
                    <p>Price: $${prod.price}</p>
                </div>
                <div class="card-footer text-center">
                    <button type="button" class="btn btn-primary" onClick="addProdCart(${prod.id})">
                        Add
                    </button>

                </div>
            </div>
        </div>
        `;
    }
}

function showProdCart() {
    let prodCart = document.getElementById("cart_products");
    for (const prod of products) {
        if (localStorage.getItem(prod.id)) {
            prodCart.innerHTML += `
            <div class="card" id="${prod.id}">
                <img src="${prod.image}" class="card-img-top" alt="${prod.name}">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" onClick="deleteProdCart(${prod.id})">
                        Remove
                    </button>
                </div>
            </div>
        `
        }

    }
}

function addProdCart(prodId) {
    let prodCart = document.getElementById("cart")
    let prod = products.find((product) => prodId === product.id)
    localStorage.setItem(prod.id, JSON.stringify(prod))
    prodCart.innerHTML += `
            <div class="card my-2" id="${prod.id}">
                <img src="${prod.image}" class="card-img-top" alt="${prod.name}">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" onClick="deleteProdCart(${prod.id})">
                        Remove
                    </button>
                </div>
            </div>
        `
    Swal.fire({
        title: "Product added to cart successfully",
        position: "top",
        icon: "success",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false
    });
}

function deleteProdCart(prodId) {
    let prodCart = document.getElementById(`${prodId}`)
    prodCart.remove()
    localStorage.removeItem(prodId)
    Swal.fire({
        title: "Product removed from cart successfully",
        position: "top",
        icon: "success",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false
    });
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
    showProdStore()
    showProdCart()

}


// ******************************************************************************************************
// Call to main function
// ******************************************************************************************************

main();