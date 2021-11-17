//  Exemple avec 3 comptes
// 1. compte de Marie
// 2. compte de Jean
// 3. compte de Escrow (entiercement)


// création d'une interface 
// il te demande d'abord qui tu es
// Marie to Jean
// faire différentes opération 

const inquirer = require('inquirer');

inquirer
 
  .prompt([  
        {
        type: 'list',
        name: 'who is',
        message: 'It\'s Marie or Jean',
        choices: ['Marie', 'Jean'],
    },
  ])

  .then((answers) => {
    console.log(answers)
  })

  .catch((error) => {
    console.error(error);
  });