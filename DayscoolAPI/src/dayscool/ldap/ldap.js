var ldap = require('ldapjs');

var ldapServer = 'ldap://3.236.27.51:636';

var client = ldap.createClient({
  url: ldapServer
});

var user = 'ldap://3.236.27.51:636';
var password = 'admin';



function createLdapEntry( usuario, contrasena ) {

	client.bind(user,password, function(err) {
		console.log(err)
	})

	var entry = {
		objectclass: ['account', 'simpleSecurityObject'],
		userPassword: contrasena
	};

	client.add('uid='+ usuario +',cn=user,dc=arqsoft,dc=unal,dc=edu,dc=co', entry ,function(err) {
			console.log(err)
	});

	client.unbind()
}


function searchUserLdap(usuario, contrasena) {

	client.bind(user,password, function(err) {
		console.log(err)
	})

	client.search("uid=" + usuario +",cn=user,dc=arqsoft,dc=unal,dc=edu,dc=co", function(err, res) {
		console.log(err);
		var retorno = false;
	
		res.on('searchEntry', function(ent) {
			if(ent.object.userPassword == contrasena) {
				console.log("wiii");
				retorno = true;
				return true
			}
		});
		return retorno
	})
	client.unbind()
}



export {createLdapEntry, searchUserLdap}