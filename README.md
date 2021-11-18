===================================================
## Stellar Smart Contract (https://stellar.github.io/js-stellar-sdk/index.html)
===================================================
## Install 

### Init your origin folder

```terminal 
npm init -y
```

### Install the stellar-sdk with dependencies ot not

```terminal
npm install stellar-sdk dotenv inquirer
```
===================================================
# based on https://developers.stellar.org/docs/tutorials/create-account/

## Go to @(https://laboratory.stellar.org/#account-creator?network=test) and generate the key for your customers 
#### _exemple :_

```terminal
MARIE_PUBLIC=GAD4MEOBLN6B4IBEAVNKYJFYRGES45V4ARQR54TODYMWDFPXDKAEECAC
MARIE_SECRET=SAKA2VDVZWSLQVUDIN7J2P4EITZ72JJQ75RVIDR3B6BORBEPMVG3P2VW
```

## _Once the keys are generated test on the tab: Friendbot: Fund a test network account_

### _Go to https://stellar.expert/explorer/testnet
### _Check the research navbar on top-right => click on the testnet 
### _Copy the public key in the research navbar
### _If the handling is good you should see appear : Summuary and Account Balance
### _Copy all key into .env for all customers

===================================================

## Now you can run 
```terminal
npm start
```

===================================================

## answer the questions to create the contract

