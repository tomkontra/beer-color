import convertColorUnits from '../colorConverter'
import beerColors from './beerColorMap'
import valueToHex from './hexColor'

export function srmToHex(srm) {
  return valueToHex(srm, beerColors)
}

export function ebcToHex(ebc) {
  const srm = convertColorUnits(ebc, 'ebc', 'srm')
  return srmToHex(srm)
}

export function lovibondToHex(lovibond) {
  const srm = convertColorUnits(lovibond, 'lovibond', 'srm')
  return srmToHex(srm)
}
