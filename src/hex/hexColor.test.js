/* eslint-disable import/extensions */
import chai from 'chai'
import valueToHex from './hexColor.mjs'

const { expect } = chai

const colors = [
  { value: 1, color: '#fafad2' },
  { value: 2, color: '#fafacc' },
  { value: 3, color: '#fafac7' },
  { value: 4, color: '#fafac1' },
]

describe('value to hex', () => {
  it('should convert value to hex value', () => {
    const value = 2
    const result = valueToHex(value, colors)

    expect(result).to.equal('#fafacc')
  })

  it('should convert value below minimum to min value', () => {
    const value = -1
    const result = valueToHex(value, colors)

    expect(result).to.equal('#fafad2')
  })

  it('should convert value above maximum to max value', () => {
    const value = 32
    const result = valueToHex(value, colors)

    expect(result).to.equal('#fafac1')
  })
})
