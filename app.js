console.log('**starting password manager**');

var AccountDTO = require('./model.js').account;
var MasterPasswordDTO = require('./model.js').masterPassword;
var storage = require('node-persist');
var argv = require('./yargs.js');
var crypto = require('crypto-js');

storage.initSync();

var command = argv._[0];

function createAccount (name, user, password, masterPassword) {
	var accounts = getAccounts(masterPassword);
	var account = new AccountDTO(name, user, password);

	accounts.push(account);
	saveAccounts(accounts, masterPassword);

	return accounts;
}

function getAccount (accountName, masterPassword) {
	var accounts = getAccounts(masterPassword);
	var matchingAccount;

	for ( var i = 0; i < accounts.length; i++) {

		if ( accounts[i].name === accountName ) {
			matchingAccount = accounts[i];
		}
	}
	return matchingAccount;
}

function saveAccounts (accounts, masterPassword) {
	var encryptedAccounts = crypto.AES.encrypt( JSON.stringify(accounts), masterPassword );
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;
}

function getAccounts (masterPassword) {
	var encryptedAccounts = storage.getItemSync('accounts');
	var decryptedAccounts = [];

	if ( typeof(encryptedAccounts) !== 'undefined' ) {
		var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
		var decryptedAccounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	return decryptedAccounts;
}


if (command === 'create') {
	try {
		createAccount(argv.name, argv.user, argv.password, argv.masterPassword);
		console.log(argv.name + ' credentials saved');
	} catch (err) {
		console.log('Unable to create new entry');
	}
} else if (command === 'find') {
	try {
		var account = getAccount(argv.name, argv.masterPassword);
		console.log(account.name + ' - ' + account.user + ' - ' + account.password);
	} catch (err) {
		console.log('Unable to find entry');
	}
}

var pass = pass || new MasterPasswordDTO;
console.log(pass);

pass.change('goober');
console.log(pass);

