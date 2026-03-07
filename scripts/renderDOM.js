export const renderfishtoDOM = (HTML,elementID) => {
    const htmlElement = document.getElementById(`${elementID}`);

    if (htmlElement){
        htmlElement.innerHTML = HTML;
    }
    else{
        console.error(`Could not find element with id "${elementID}"`);
    }
};