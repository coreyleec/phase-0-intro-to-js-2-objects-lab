let employee = {
        name: 'Sam',
        streetAddress: '11 Broadway'
  }

  function updateEmployeeWithKeyAndValue(employee, key, value){
    //return Object.assign({}, employee, { [key]: value})
    const newObject = { ...employee}
    newObject[key] = value
    return newObject  
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, { [key]: value})
//     employee[key] = value
//     return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    const newEmployee = key.assign(key, value)
    return newEmployee
}


    



