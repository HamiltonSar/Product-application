import { ProductPrices , PreventDefault } from "./prices.object.js";
import { GenerateItem  , TicketGenerator , ResetListContainer , DeleteIndividualChild, GenerateRandomKey } from "./elementsgenerator.js";


const form = document.getElementById("form");
const buttontolist = document.getElementById("buttontolist");
const valuePriceContainer = document.getElementById("valuePriceContainer");
const optionsContainer = document.getElementById("optionsContainer");
const  listContainer = document.getElementById("listContainer");
const buttonAddToCarContainer = document.getElementById("buttonAddToCarContainer");
const buttonAddToCar = document.getElementById("buttonAddToCar");
const ticketContainerPanel = document.getElementById("ticketContainerPanel");
const ticketsContainer = document.getElementById("ticketsContainer");
let  optionKey , optionValue , collectionValues = [] , collectionProduct = [];
const buttonToListContainer = document.getElementById("buttonToListContainer");
const productListPanel = document.getElementById("productListPanel");
let newProductsArray = [] , newValuesArray = [];

const PriceSelection = (e) => {
    optionKey = e.target.value;
    optionValue = ProductPrices[optionKey.toLowerCase()];
    valuePriceContainer.innerHTML = optionValue;
}

const AddProductToList = () => {
    collectionProduct = [ ...collectionProduct , optionKey ];
    collectionValues = [...collectionValues ,  optionValue];
    GenerateItem(optionKey , optionValue , listContainer , buttonAddToCarContainer);
}


const AddTicketGenerator = () => {
    let key = "";
    let totalProduct = null;
    let totalValue = 0;
    const randomId = Math.floor(Math.random() * 100);
    collectionValues.forEach(e => totalValue += e);
    totalProduct = collectionProduct.length;

    const patterns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * patterns.length);
    key += patterns.charAt(index);
  }

    GenerateRandomKey(key);
    TicketGenerator(ticketsContainer ,  randomId , totalProduct , totalValue , key);
    ResetListContainer(listContainer);
    collectionValues = [];
    collectionProduct = [];
    ticketContainerPanel.style.display = "block";
    buttonAddToCarContainer.style.display = "none";
}

//Elements manipulation 

form.addEventListener("click" , PreventDefault);


optionsContainer.addEventListener("click" , ()=> {
    buttonToListContainer.style.display = "flex";
})


listContainer.addEventListener("click" , (e)=> {
    const children = listContainer.querySelectorAll(".productlistcontainer__itemcontainer");
    const arrayChildren = Array.from(children);
    // console.log(arrayChildren.indexOf(e.target))
    DeleteIndividualChild(e , listContainer , buttonAddToCarContainer);
    newValuesArray = collectionValues.indexOf(collectionValues.filter( index => index !== collectionValues.indexOf(arrayChildren.indexOf(e.target))));
    newProductsArray = collectionProduct.indexOf(collectionProduct.filter( index => index !== collectionProduct.indexOf(arrayChildren.indexOf(e.target))));
    console.log(newProductsArray , newValuesArray)
    
})


ticketsContainer.addEventListener("click" , (e)=> {DeleteIndividualChild(e , ticketsContainer , ticketContainerPanel )});
optionsContainer.addEventListener("click" , PriceSelection );
buttontolist.addEventListener("click" , AddProductToList );
buttonAddToCar.addEventListener("click" , AddTicketGenerator);