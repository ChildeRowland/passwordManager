This is a locally running node app for storing passwords.  All the information is incrypted, and requires a master password for changes.

To try, run the following commands in the command line:

	$ git clone https://github.com/ChildeRowland/passwordManager
	$ cd passwordManager
	$ npm install

To see the list of commands run:

	node app.js --help

Add login credentials with:

	node app.js create

Find stored credentials with:

	node app.js find
