function fetchDB() {
    let p1 = fetch("https://fakestoreapi.com/products");
    // console.log(p1);
    
    p1.then((response)=>{
        // console.log(response);
        let p2= response.json();
        console.log(p2);


        p2.then((data)=>{
            console.log(data);
            displayData(data)// passing array of object to display func as argument
         });
        
    });
    p1.catch((err)=>{
       console.log(err);
        
    });
}
fetchDB();

function displayData(products) {
    console.log(products);
    products.map((ele) =>{
        // console.log(ele);
        

        //creating element dynamically
        let cardContainer=document.createElement("section");
        let cardTitle=document.createElement("h1");
        let productaImage=document.createElement("img");
        let contentWrapper = document.createElement("article");
        let ratingsp=document.createElement("span");
        let priceContainer=document.createElement("h4");
        let buy
        

        //adding content to an element dynamically
        cardTitle.textContent =ele.title;
        priceContainer.innerHTML=`&#8377; ${ele.price}`
        ratingsp.textContent=`${ele.rating.rate}⭐ ${ele.rating.count} Rating`;

        //setting attribute dynamically
        productaImage.setAttribute("src",ele.image);
        cardContainer.setAttribute("id","container");
        cardTitle.setAttribute("title",ele.description);
        contentWrapper.append(cardTitle,ratingsp,priceContainer,);

        // console.log(productaImage);
        
        //appending other elements to cardContainer(parent element)
        // cardContainer.append(productaImage,cardTitle);
        cardContainer.append(productaImage,contentWrapper);

        console.log(cardContainer);
        
        // appending parent element to body to display on UI
        document.body.append(cardContainer)
    })    
}