import { beerColors } from './beerColors'
import valueToHex from './convert/hexColor'

export function srmToHex(srm) {
  return valueToHex(srm, beerColors)
}

function srmFromEbc(ebc) {
  return ebc * 0.508
}

function srmFromLovibond(lovibond) {
  return 1.3546 * lovibond - 0.76
}

function ebcFromSrm(srm) {
  return srm * 1.97
}

function lovibondFromSrm(srm) {
  return (srm + 0.76) / 1.3546
}

export function convertColorUnits(value, currentUnit, newUnit) {
  if (value === 0 || currentUnit === newUnit) {
    return value
  }
  switch (currentUnit) {
    case 'srm':
      if (newUnit === 'ebc') {
        return ebcFromSrm(value)
      }
      if (newUnit === 'lovibond') {
        return lovibondFromSrm(value)
      }
      break
    case 'ebc':
      if (newUnit === 'srm') {
        return srmFromEbc(value)
      }
      if (newUnit === 'lovibond') {
        return lovibondFromSrm(srmFromEbc(value))
      }
      break
    case 'lovibond':
      if (newUnit === 'srm') {
        return srmFromLovibond(value)
      }
      if (newUnit === 'ebc') {
        return ebcFromSrm(srmFromLovibond(value))
      }
      break
    default:
      throw new Error(`error converting unknown unit '${currentUnit}'`)
  }
  throw new Error(`error converting unknown unit '${newUnit}'`)
}
