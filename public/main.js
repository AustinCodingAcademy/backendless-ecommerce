//const applicationId = "";
//const apiKey = "";
      

function init(){
    fetch(`https://api.backendless.com/${applicationId}/${apiKey}/data/products`).then(r=>r.json()).then((products)=>{
      if(products.length === 0){
          loadProducts();
      }
    });
}
function loadProducts(){
    let options = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },body: JSON.stringify(products) 
       };
       
    fetch(`https://api.backendless.com/${applicationId}/${apiKey}/data/bulk/products`,options).then(r=>r.json()).then((products)=>{
      if(products.length === 0){
          loadProducts();
      }
    });
}


const products = [{
    "_id": 1,
    "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
    "description": "Psychotropic drugs, not elsewhere classified",
    "reviews": 46,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
    "price": "$95.11",
    "category": "food",
    "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }, {
      "description": "incubate strategic e-tailers",
      "rating": 5
    }, {
      "description": "transition synergistic partnerships",
      "rating": 1
    }, {
      "description": "matrix dynamic web-readiness",
      "rating": 1
    }, {
      "description": "exploit impactful platforms",
      "rating": 4
    }, {
      "description": "repurpose mission-critical schemas",
      "rating": 1
    }, {
      "description": "iterate open-source interfaces",
      "rating": 3
    }, {
      "description": "repurpose impactful interfaces",
      "rating": 1
    }]
  }, {
    "_id": 2,
    "name": "Topiramate",
    "description": "Injury of ulnar nerve at forearm level, left arm, sequela",
    "reviews": 2,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/125x134.jpg/cc0000/ffffff",
    "price": "$37.09",
    "category": "food",
    "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }, {
      "description": "incubate strategic e-tailers",
      "rating": 5
    }, {
      "description": "transition synergistic partnerships",
      "rating": 1
    }
  ]
  }, {
    "_id": 3,
    "name": "Almond",
    "description": "Other disorders of continuity of bone, unsp tibia and fibula",
    "reviews": 27,
    "rating": 5,
    "imgUrl": "http://dummyimage.com/149x190.jpg/dddddd/000000",
    "price": "$51.83",
    "category": "food",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 4,
    "name": "VYTORIN",
    "description": "Orchard as the place of occurrence of the external cause",
    "reviews": 60,
    "rating": 3,
    "imgUrl": "http://dummyimage.com/162x153.jpg/cc0000/ffffff",
    "price": "$86.93",
    "category": "electronics",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 5,
    "name": "Decolorized Iodine",
    "description": "Injury",
    "reviews": 20,
    "rating": 1,
    "imgUrl": "http://dummyimage.com/120x245.jpg/cc0000/ffffff",
    "price": "$70.10",
    "category": "electronics",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 6,
    "name": "Fresh Sugar Honey Tinted Lip Treatment SPF15",
    "description": "Unspecified open wound ",
    "reviews": 79,
    "rating": 3,
    "imgUrl": "http://dummyimage.com/211x227.bmp/5fa2dd/ffffff",
    "price": "$39.25",
    "category": "electronics",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 7,
    "name": "LBel",
    "description": "2-Propanol",
    "reviews": 76,
    "rating": 3,
    "imgUrl": "http://dummyimage.com/212x144.jpg/ff4444/ffffff",
    "price": "$99.91",
    "category": "sporting",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 8,
    "name": "Cholestyramine",
    "description": "Laceration without foreign body of trachea, sequela",
    "reviews": 74,
    "rating": 3,
    "imgUrl": "http://dummyimage.com/204x175.jpg/5fa2dd/ffffff",
    "price": "$67.17",
    "category": "sporting",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 9,
    "name": "Risperidone",
    "description": "cephalospor/oth beta-lactm antibiot, undet, sequela",
    "reviews": 9,
    "rating": 1,
    "imgUrl": "http://dummyimage.com/212x108.bmp/cc0000/ffffff",
    "price": "$96.84",
    "category": "sporting",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }
  ]
  }, {
    "_id": 10,
    "name": "MAC",
    "description": "Other Gram-negative sepsis",
    "reviews": 45,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/189x109.png/cc0000/ffffff",
    "price": "$74.37",
    "category": "sporting",
     "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }
  ]
  }];