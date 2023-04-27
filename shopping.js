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
    console.log(productObj);
}