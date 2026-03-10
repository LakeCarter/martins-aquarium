import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { renderfishtoDOM} from './renderDOM.js'
import { getMostHolyFish, getSoldierFish, getRegularFish } from './mostHoly.js'
import { database } from './aquariumData.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Generate the Most Holy Fish
const mostHolyFish = getMostHolyFish(database.fish)
// Generate the Soldier Fish
const soldierFish = getSoldierFish(database.fish)
// Generate the Regular Fish
const regularFish = getRegularFish(database.fish)


// Render each HTML string to the correct DOM element
//renderfishtoDOM(fishHTML,"fishList")
renderfishtoDOM(tipHTML,"tipList")
renderfishtoDOM(locationHTML,"locationList")

const htmlElement = document.getElementById(`fishList`)


htmlElement.innerHTML = `${mostHolyFish}${soldierFish}${regularFish}`