# dotbim-ts

## Description

Open-source TypeScript parser and encoder for dotbim file format. Read more about dotbim here: https://github.com/paireks/dotbim

dotbim's website: https://dotbim.net/

Here you can find small manual for developers regarding development of tools that will work with .bim file format: https://github.com/paireks/dotbim/blob/master/DeveloperTips.md

## Installation

```cmd
npm install @baid/dotbim-ts

//or

yarn add @baid/dotbim-ts
```

## Using the library

### Parse
```cmd
import { parse } from '@baid/dotbim-ts';

const parsedData = parse()

```

### Encode
```cmd
import { encode, BimFile } from '@baid/dotbim-ts';

const dataToEncode: BimFile = {
    // some valid dotbim object
}

encode(dataToEncode);

```