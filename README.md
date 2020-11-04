# beer-color
Convert between SRM, EBC, Lovibond and to hex

## Usage

Installation: 

```sh
 npm install beer-color
```

Usage:

```javascript
const hex = srmToHex(3.6);
// '#efec2e'
```

```javascript
const ebc = convertColorUnits(12, 'srm', 'ebc');
// 23.64
const srm = convertColorUnits(12, 'ebc', 'srm');
// 6.096
```

## Testing
To run tests:

 ```sh 
 npm install

 npm run test
 ```

