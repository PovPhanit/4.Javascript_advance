const icon =document.querySelectorAll(".icon span");
for(let i=0;i<icon.length;i++){
    icon[i].addEventListener("click",function(){
        const current=document.querySelector(".icon-active");
        current.className=current.className.replace("icon-active","");
        icon[i].className="icon-active";
    });
}

const btnBar =document.querySelectorAll(".btn-bar a");
for(let i=0;i<btnBar.length;i++){
    btnBar[i].addEventListener("click",function(){
        const current=document.querySelector(".btn-bar-active");
        current.className=current.className.replace("btn-bar-active","");
        btnBar[i].className="btn-bar-active";
    });
}
const footer=document.querySelector(".footer");

// filter Gallery 
const cards=document.querySelectorAll(".carts");
    btnBar[1].addEventListener("click",function(e){
        footer.classList.add("active");
        for(let j=0;j<cards.length;j++){
            if(cards[j].getAttribute("name")==="Car"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });

    btnBar[2].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Motor"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[3].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Cap"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[4].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Speaker"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[5].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.add("active");
            if(cards[j].getAttribute("name")==="Musical"){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="none";
            }
        }
    });
    btnBar[0].addEventListener("click",function(e){
        for(let j=0;j<cards.length;j++){
            footer.classList.remove("active");
            if(cards[j].getAttribute("name")===""){
                cards[j].style.display="flex";
            }
            else{
                cards[j].style.display="flex";
            }
        }
    });



    // ============================================================
    //                     Update and Delete
    const containerCard=document.querySelector(".content-card");
    const image=document.querySelector(".img");
    const title=document.querySelector(".title");
    const price=document.querySelector(".price");
    const formSummit=document.querySelector(".formSummit")
    const card=[
        {img:"Image/car-1lamboghini.png",
        price:788500,
        title:"Lamboghini"
        },
        {img:"Image/Music-1Piano.png",
        price:688500,
        title:"Piano"
        },
        {img:"Image/speaker-1HeadPhone.png",
        price:588500,
        title:"Speaker"
        },
        
    ];



    
   class cardUpdate{
    #workCard=[
        {img:"Image/car-1lamboghini.png",
        price:788500,
        title:"Lamboghini"
        },
        {img:"Image/Music-1Piano.png",
        price:688500,
        title:"Piano"
        },
        {img:"Image/speaker-1HeadPhone.png",
        price:588500,
        title:"Speaker"
        },
    ];
    constructor(){
        this._getCardStorage();
        this._updateCard();
    }
    _updateCard(){
        formSummit.addEventListener('submit',(e)=>{
            e.preventDefault();
            const newCard={
                img:image.value,
                title:title.value,
                price:price.value,
            };
            console.log(newCard);
            this.#workCard.push(newCard);
            console.log(this.#workCard);
            this._setCardStorage();
            location.reload();
        })
    }
    _setCardStorage(){
        localStorage.setItem("saveCard",JSON.stringify(this.#workCard));
    }
    _getCardStorage(){
        const getCard=localStorage.getItem('saveCard');
       const json =JSON.parse(getCard);
       console.log(json);
       this.#workCard=json.flat(1);
       console.log(this.#workCard);
       console.log(this.#workCard[0]);
       this.#workCard.forEach((cards)=>{
        const html=`
        <div class="carts" name="Car">
                <div class="Image">
                    <img src=${cards.img} alt="">
                </div>
                <div class="Content">
                    <div class="title">${cards.title}</div>
                    <div class="price">Price  <span>${cards.price}</span></div>
                    <div class="description">It is a good product...</div>
                    <button class="add-to-card">Add to Cart</button>
                    <button class="detail">Detail</button>
                </div>
            </div>
        `;
        containerCard.insertAdjacentHTML('beforeend',html);
    });
       
    }

   }
new cardUpdate();




   
    
    