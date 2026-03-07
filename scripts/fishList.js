import { database } from './aquariumData.js';

let fishHTML = '';

export const fishList = () => {
    // Generate an HTML representation of each fish
    
    for (const fish of database.fish){
        fishHTML += `
            <article class = "fish">
                <img src = "${fish.image}" alt="${fish.name} image"
                class = "fish_image">
                <div class = "fish_details">
                    <h2 class = "fish_name">Name: ${fish.name}</h2>
                    <u1 class = "fish_information">
                        <li>Species:${fish.species}</li>
                        <li>Length:${fish.length}</li>
                        <li>Location:${fish.location}</li>
                        <li>Diet:${fish.diet}</li>
                    </u1>
                    </div> 
            </article>`; 

    }
    return fishHTML
};