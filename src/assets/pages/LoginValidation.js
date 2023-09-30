function Validation(values) {
    let error = {}
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const password_pattern = /^[A-Za-z]\w{7,14}$/

if(values.email === ""){
    error.email = "email should not be empty "
}else if (!email_pattern.test(values.email)) {
    error.email = "email dont match"
}else {
    error.email= ""
}

if(values.password === ""){
    error.password = "password should not be empty "
}else if (!password_pattern.test(values.password)) {
    error.password = "password dont match"
}else {
    error.password= ""
}
return error

}
 export default Validation