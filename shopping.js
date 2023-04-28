const cardArray = [];

function dislay (cardProduct){
    // console.log(cardProduct);
    const tableBody = document.getElementById('card-products');
    for(let i=0; i<cardProduct.length; i++){
        // console.log(cardArray[i]);
        const name = cardArray[i].productName;
        const price = cardArray[i].productPrice;

        const tr = document.createElement('tr');
        
    }
}

function addToCard (element){
    // console.log('button clicked');
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

    const productName = element.parentNode.parentNode.children[0].innerText;
    
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName:productName,
        productPrice:parseInt(productPrice)
    }
    // console.log(productObj);
    cardArray.push(productObj);
    // console.log(cardArray);
    // console.log(cardArray,length);

    document.getElementById('total-added-product').innerText = cardArray.length;
    dislay(cardArray);
}