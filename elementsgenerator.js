export const GenerateItem = (optionKey ,optionValue , listcontainer , buttonAddToCarContainer ) => {
    const elementCreated = document.createElement("H2");
    elementCreated.className = "productlistcontainer__itemcontainer";
    elementCreated.innerHTML = `Product: ${optionKey} - Price: ${ optionValue }`;
    (listcontainer.hasChildNodes()) ? buttonAddToCarContainer.style.display = "flex" :  buttonAddToCarContainer.style.display = "none";
    return listcontainer.appendChild( elementCreated );
}


export const TicketGenerator = (ticketsContainer ,  iditem , productitems , totalprice , key) => {
    const tickectContainerCreated = document.createElement("H2");
    tickectContainerCreated.className = "ticketscontainer__items";
    tickectContainerCreated.innerHTML = `Id : ${iditem} || Products : ${productitems} || Total price: $${totalprice}.00 , || Key : ${key}`;
    return ticketsContainer.appendChild(tickectContainerCreated);
}

export const ResetListContainer = (listContainer) => {
    listContainer.innerHTML = "";
}

export const DeleteIndividualChild = (e , container  , hidecontainer ) => {
    const element = e.target;
    element.remove();
    element.style.backgroundColor = "red";
      if(!(container.hasChildNodes())){
        hidecontainer.style.display = "none";
      }
}

export const GenerateErrorMessage = () => {
    const errormessagecontainer = document.createElement("DIV");
    errormessagecontainer.innerHTML = `<h2>You cannot add to list a empty value!</h2>`;
}

export const GenerateRandomKey = (keyItem) => {
    const patterns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    keyItem = "";
      for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random() * patterns.length);
        keyItem += patterns.charAt(index);
      }
    return keyItem;
}



