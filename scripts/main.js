import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { renderfishtoDOM} from './renderDOM.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
renderfishtoDOM(fishHTML,"fishList")
renderfishtoDOM(tipHTML,"tipList")
renderfishtoDOM(locationHTML,"locationList")