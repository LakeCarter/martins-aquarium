import { database } from './aquariumData.js';
let locationHTML = ''

export const locationList = () => {
    for (const location of database.locations){
        locationHTML += `
        <article class = "locations">
            <section class = "location">
                <h2>${location.name}</h2>
                <h3>${location.country}</h3>
                <p>${location.description}</p>
            </section>
        </article>`
    }
return locationHTML
};