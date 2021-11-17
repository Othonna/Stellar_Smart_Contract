# Tutorial First Smart Contract Stellar

### Init your origin folder

```terminal 
npm init -y
```

### Install the stellar-sdk with dependencies ot not

```terminal
npm install stellar-sdk dotenv inquirer
```

### or 

```terminal
npm install --save stellar-sdk
```

==================================================

## __Create js file and api folder__

#### _create a index.js in the origin folder_

#### _create a folder : api_

#### _create a index.js in the api folder_

===================================================

## __Server SDK configuration__

#### _api folder > index.js_

```terminal
const StellarSdk = require ('stellar-sdk');

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
```

