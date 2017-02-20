# suimin 
[![npm version](https://badge.fury.io/js/suimin.svg)](https://badge.fury.io/js/suimin)

sleep function for javascript

## Installation

```sh
npm install suimin --save
```

## Usage
```javascript
const suimin = require('suimin');

async function test() {
  console.log('Taking a break...');
  await suimin(2000);
  console.log('Two second later');
}

test();
```

## Test

```bash
npm install
npm test
```


## License
[MIT license](http://opensource.org/licenses/mit-license.php)