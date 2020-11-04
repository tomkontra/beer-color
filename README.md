# beer-color
Simple library to convert between beer/malt color units and to hex.

* Convert between SRM, EBC and Lovibond
* Hex conversion is only a rough approximation and not reflective of actual beer color as this is influenced by a wide range of factors such as lighting, glass size, etc.

## Usage

Installation: 

```sh
 npm install beer-color
```

Usage:

```javascript
const hex = srmToHex(3.6);
// '#efec2e'
const hex = ebcToHex(23.6);
// '#c07238'
const hex = lovibondToHex(0.5);
// '#fafad2'
```

```javascript
const ebc = convertColorUnits(12, 'srm', 'ebc');
// 23.64
const srm = convertColorUnits(12, 'ebc', 'srm');
// 6.096
const lovibond = convertColorUnits(12, 'ebc', 'lovibond');
// 5.06
```

## Testing
To run tests:

 ```sh 
 npm install

 npm run test
 ```

