const getStoredCart= ( ) =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    else{
        return [];
    }
}

const saveCarToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCarToLS(cart);
}

export {addToLS}