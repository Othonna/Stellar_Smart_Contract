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

export { server };
```

===================================================

## Create actions folder 

#### _with name of all persons on contract_


===================================================

## Create a .env and .gitignore

### _in the .env_

#### generate the key for your customers @(https://laboratory.stellar.org/#account-creator?network=test)
#### _exemple :_

```terminal
MARIE_PUBLIC=GAD4MEOBLN6B4IBEAVNKYJFYRGES45V4ARQR54TODYMWDFPXDKAEECAC
MARIE_SECRET=SAKA2VDVZWSLQVUDIN7J2P4EITZ72JJQ75RVIDR3B6BORBEPMVG3P2VW
```

===================================================

## _Once the keys are generated test on the tab: Friendbot: Fund a test network account_

### _Go to https://stellar.expert/explorer/testnet
### _Check the research navbar on top-right => click on the testnet 
### _Copy the public key in the research navbar
### _If the handling is good you should see appear : Summuary and Account Balance



