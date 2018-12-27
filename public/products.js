//callBack should be a function that takes one argument
//the one argument will be an array of product objects  
/*
(products)=>{console.log(products)}
 */    
function getProducts(callBack){ 
    fetch(`https://api.backendless.com/${applicationId}/${apiKey}/data/products`).then(r=>r.json()).then(callBack);
}