# dotbim-ts

Open-source TypeScript parser and encoder for dotbim file format.

dotbim's website: https://dotbim.net/

Here you can find small manual for developers regarding development of tools that will work with .bim file format: https://github.com/paireks/dotbim/blob/master/DeveloperTips.md

## Installation

```cmd
npm install @baid-group/dotbim-ts
//or
yarn add @baid-group/dotbim-ts
```

## Using the library

### Parse
```ts
import { parse } from '@baid/dotbim-ts';
import { readFileSync } from 'fs';

const fileData: string = readFileSync('path/to/file.bim', {encoding: 'utf-8'});

parse(fileData)

```

### Encode
```ts
import { encode, BimFile } from '@baid/dotbim-ts';

const dataToEncode: BimFile = {
    // some valid dotbim object
}

encode(dataToEncode);

```

## Developed
dotbim-ts is developed and maintained by Baid Group for everyone in BIM community!

## License
dotbim-ts is licensed under the MIT license. Please read the LICENSE file in this repository for more details.