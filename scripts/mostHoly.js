export const getMostHolyFish = (fishData) => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fish of fishData) {
        if(fish.length % 3 === 0) {
         holyFish += `
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
    }

    return holyFish
}

export const getSoldierFish = (fishData) => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""

    for (const fish of fishData) {
        if(fish.length % 5 === 0) {
         soldierFish += `
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
    }

    return soldierFish
}

export const getRegularFish = (fishData) => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ""

    for (const fish of fishData) {
        if(fish.length % 5 !== 0 && fish.length % 3 !== 0 ) {
         regularFish += `
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
    }

    return regularFish
}