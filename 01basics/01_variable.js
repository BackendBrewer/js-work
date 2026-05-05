const accountId = 13234
let accountEmail = "salman@example.com"
var accountPassword = "123456"
accountCity = "Lahore"
let accountState

// accountId = 2 // not changes give error because const variable can not be changed
accountEmail = "hs@h.com"
accountPassword = "23132"
accountCity = "Islamabad"

/*No use the var to declare a variable because it made error in loop scope and function scope scope is {} brackets*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);