function Account (name, user, password) {
	this.name = name;
	this.user = user;
	this.password = password;
}

function MasterPassword () {
	this.password = "password";
}

MasterPassword.prototype.change = function (newPassword) {
	this.password = newPassword;
}

module.exports = {
	account: Account,
	masterPassword: MasterPassword
}