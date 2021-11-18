//  Exemple avec 3 comptes
// 1. compte de Alice
// 2. compte de Bob
// 3. compte de Escrow (entiercement)


// création d'une interface 
// il te demande d'abord qui tu es ?
// faire différentes opérations 
 
const inquirer = require('inquirer');
const createEscrow = require('./functions/alice/create-escrow.js');
const fundEscrow = require('./functions/alice/fund-escrow.js');
const releaseFunds = require('./functions/alice/release-funds.js');
const setEscrowMultisig = require('./functions/alice/set-escrow-multisig.js');
const signFundsRelease = require('./functions/alice/sign-funds-release.js');
const withdraw = require('./functions/bob/withdraw.js');

const start = async () => {
  try {
    const whoAreYou = [
      {
        type: 'list',
        name: 'whois',
        message: 'Who are you ? Alice or Bob ?',
        choices: ['Alice', 'Bob']
      }
    ];

    const { whois } = await inquirer.prompt(whoAreYou);

    if (whois === 'Alice') {
      const aliceActions = [
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do ?',
          choices: [
            {
              name: 'Create a escrow',
              value: 'createEscrow'
            },
            {
              name: 'Add the multi-signature mechanism',
              value: 'setEscrowMultisig'
            },
            {
              name: 'Fund escrow',
              value: 'fundEscrow'
            },
            {
              name: 'releaseFunds',
              value: 'releaseFunds'
            },
            {
              name: 'signFundsRelease',
              value: 'signFundsRelease'
            }
          ]
        }
      ];

      const { action } = await inquirer.prompt(aliceActions);

      switch (action) {
        case 'createEscrow':
          createEscrow();
          break;
        case 'setEscrowMultisig':
          setEscrowMultisig();
          break;
        case 'fundEscrow':
          fundEscrow();
          break;
        case 'releaseFunds':
          releaseFunds();
          break;
        case 'signFundsRelease':
          signFundsRelease();
          break;
      }
    } else {
      const bobActions = [
        {
          type: 'list',
          name: 'action',
          message: '¿What do you want to do?',
          choices: [
            {
              name: 'Withdraw funds',
              value: 'withdraw'
            }
          ]
        }
      ];

      const { action } = await inquirer.prompt(bobActions);

      switch (action) {
        case 'withdraw':
          withdraw();
          break;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

start();