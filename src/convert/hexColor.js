export default function valueToHex(value, colors) {
  let min = 0
  let max = colors.length - 1

  if (value < colors[min].value) {
    return colors[min].color
  }
  if (value > colors[max].value) {
    return colors[max].color
  }

  while (max > min + 1) {
    const mid = Math.floor((max + min) / 2)
    if (value > colors[mid].value) {
      min = mid + 1
    } else if (value < colors[mid].value) {
      max = mid - 1
    } else {
      return colors[mid].color
    }
  }

  const deltaMax = colors[max].value - value
  const deltaMin = value - colors[min].value
  if (deltaMax > deltaMin) {
    return colors[min].color
  }
  return colors[max].color
}
