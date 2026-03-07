import { database } from './aquariumData.js';
let tipsHTML = '';

export const tipList = () => {
    for (const tip of database.tips){
        tipsHTML += `
        <article>
        <ul class="tips"> 
            <li class="tip">${tip.topic}: ${tip.text}</li>
        </u1>
        </article>`
    }
return tipsHTML
};