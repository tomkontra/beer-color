# beer-color

<p>
    <a href="https://www.npmjs.com/package/beer-color" alt="npm">
    <img alt="npm" src="https://img.shields.io/npm/v/beer-color">
    </a>
</p>

Simple library to convert between beer/malt color units and to hex.

* Convert between SRM, EBC and Lovibond
* Hex conversion is only a rough approximation and not an accurate prediction of actual beer color as this is influenced by a wide range of factors such as lighting, glass size, yeast action, additions, etc.

## Usage

Install the module with: 

```sh
 npm install beer-color
```

```javascript
import { ebcToHex, lovibondToHex, srmToHex } from 'beer-color';

const hex = srmToHex(3.6);
// '#efec2e'
const hex = ebcToHex(23.6);
// '#c07238'
const hex = lovibondToHex(0.5);
// '#fafad2'
```

```javascript
import { convertColorUnits } from 'beer-color';

const ebc = convertColorUnits(12, 'srm', 'ebc');
// 23.64
const srm = convertColorUnits(12, 'ebc', 'srm');
// 6.096
const lovibond = convertColorUnits(12, 'ebc', 'lovibond');
// 5.06
```

## Documentation

### srmToHex(value)
* `value` `number` SRM value to convert

returns approximate hex color equivalent

### ebcToHex(value)
* `value` `number` EBC value to convert

returns approximate hex color equivalent

### lovibondToHex(value)
* `value` `number` lovibond value to convert

returns approximate hex color equivalent

### convertColorUnits(value, sourceUnit, targetUnit)
* `value` `number` value to convert
* `sourceUnit` `'srm' | 'ebc' | 'lovibond'` unit of value parameter
* `targetUnit` `'srm' | 'ebc' | 'lovibond'` unit to convert to

returns converted value for the specified unit

## Testing
To run tests:

 ```sh 
 npm install

 npm run test
 ```

