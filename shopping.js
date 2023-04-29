const cardArray = [];

function display(cardProduct){
    let totalPrice = 0;
    // console.log(cardProduct);
    const tableBody = document.getElementById("card-products");
    tableBody.innerHTML = "";

    for(let i = 0; i < cardProduct.length; i++){
        // console.log(cardArray[i].productName,cardArray[i].productPrice);
        const name = cardArray[i].productName;
        const price = cardArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th> ${i + 1} </th>
        <td> ${name} </td>
        <td> ${price} </td>
        `;
       
            tableBody.appendChild(tr);
           // console.log(tr);
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td> Total Price </td>
    <td> ${totalPrice}</td>
    `;
    tableBody.appendChild(tr);
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
   document.getElementById("total-added-product").innerText = cardArray.length;
   display(cardArray);
}