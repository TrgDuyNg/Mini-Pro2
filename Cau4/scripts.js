function validateUser(user){
    if(user.isActive == true && user.isAdmin == true)
        return true;
    else
        return false; 
}

var user1 = {isActive: true, isAdmin: true, username: 'Duy'}
var user2 = {isActive: false, isAdmin: true, username: 'Nhi'}

console.log(validateUser(user1))
console.log(validateUser(user2))