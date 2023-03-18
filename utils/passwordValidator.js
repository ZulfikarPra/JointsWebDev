function passwordValidator(password){
    console.log(password)
    const isWhiteSpace = password.includes(" ")
    const isLength = password.length >= 8
    const isUpperCase = /^(?=.*[A-Z])/

    if(isWhiteSpace){
        throw new Error("Password cannot contain white spaces")
    }
    if(!isLength){
        throw new Error("Password must be at least 8 characters")
    }
    if(!isUpperCase.test(password)){
        throw new Error("Password must contain at least one uppercase letter")
    }
}

module.exports = passwordValidator