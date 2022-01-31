/* eslint-disable import/extensions */
import chai from 'chai'
import convertColorUnits from './colorConverter.mjs'

const { expect } = chai

describe('convert color units', () => {
  it('should convert srm to ebc', () => {
    const srm = 12
    const result = convertColorUnits(srm, 'srm', 'ebc')

    expect(result).to.equal(23.64)
  })

  it('should convert srm to lovibond', () => {
    const srm = 12
    const result = convertColorUnits(srm, 'srm', 'lovibond')

    expect(result).to.be.closeTo(9.42, 0.01)
  })

  it('should convert ebc to srm', () => {
    const ebc = 12
    const result = convertColorUnits(ebc, 'ebc', 'srm')

    expect(result).to.be.closeTo(6.096, 0.001)
  })

  it('should convert ebc to lovibond', () => {
    const ebc = 12
    const result = convertColorUnits(ebc, 'ebc', 'lovibond')

    expect(result).to.be.closeTo(5.06, 0.01)
  })

  it('should convert lovibond to srm', () => {
    const lovibond = 12
    const result = convertColorUnits(lovibond, 'lovibond', 'srm')

    expect(result).to.be.closeTo(15.5, 0.01)
  })

  it('should convert lovibond to ebc', () => {
    const lovibond = 12
    const result = convertColorUnits(lovibond, 'lovibond', 'ebc')

    expect(result).to.be.closeTo(30.52, 0.01)
  })

  it('should return original value if new and current units are same', () => {
    const srm = 12.33
    const result = convertColorUnits(srm, 'srm', 'srm')

    expect(result).to.equal(srm)
  })

  it('should return 0 if input value is 0', () => {
    const srm = 0
    const result = convertColorUnits(srm, 'lovibond', 'srm')

    expect(result).to.equal(srm)
  })

  it('should throw if current unit is unknow', () => {
    const value = 10
    const invalidUnit = 'current'

    expect(() => convertColorUnits(value, invalidUnit, 'srm')).to.throw(
      `error converting unknown unit '${invalidUnit}'`
    )
  })

  it('should throw if new unit is unknow', () => {
    const value = 10
    const invalidUnit = 'new'

    expect(() => convertColorUnits(value, 'srm', invalidUnit)).to.throw(
      `error converting unknown unit '${invalidUnit}'`
    )
  })
})
