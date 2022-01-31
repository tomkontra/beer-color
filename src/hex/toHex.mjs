/* eslint-disable import/extensions */
import convertColorUnits from '../colorConverter.mjs'
import beerColors from './beerColorMap.mjs'
import valueToHex from './hexColor.mjs'

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
