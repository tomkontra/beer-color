import { expect } from 'chai'
import { ebcToHex, lovibondToHex, srmToHex } from './toHex'

describe('srm to hex', () => {
  it('should convert srm to hex value', () => {
    const srm = 12
    const result = srmToHex(srm)

    expect(result).to.equal('#c07238')
  })

  it('should convert srm value below 0.1 to min value', () => {
    const srm = -1
    const result = srmToHex(srm)

    expect(result).to.equal('#fafad2')
  })

  it('should convert srm value above 31 to max value', () => {
    const srm = 32
    const result = srmToHex(srm)

    expect(result).to.equal('#060201')
  })
})

describe('ebc to hex', () => {
  it('should convert ebc to hex value', () => {
    const ebc = 23.6
    const result = ebcToHex(ebc)

    expect(result).to.equal('#c07238')
  })

  it('should convert ebc value below 0.2 to min value', () => {
    const ebc = -1
    const result = ebcToHex(ebc)

    expect(result).to.equal('#fafad2')
  })

  it('should convert ebc value above 61 to max value', () => {
    const ebc = 62
    const result = ebcToHex(ebc)

    expect(result).to.equal('#060201')
  })
})

describe('lovibond to hex', () => {
  it('should convert lovibond to hex value', () => {
    const lovibond = 9.45
    const result = lovibondToHex(lovibond)

    expect(result).to.equal('#c07238')
  })

  it('should convert lovibond value below 0.63 to min value', () => {
    const lovibond = 0.1
    const result = lovibondToHex(lovibond)

    expect(result).to.equal('#fafad2')
  })

  it('should convert lovibond value above 23.5 to max value', () => {
    const lovibond = 25
    const result = lovibondToHex(lovibond)

    expect(result).to.equal('#060201')
  })
})
