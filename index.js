const employee={

house:{
name: "micheal",
streetAddress: "568 west jackson",

}



}

function updateEmployeeWithKeyAndValue(employee, key, value){

return {
...employee,
[key]: value,

}

}
    
    




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

employee[key]=value;
return employee;

}
destructivelyUpdateEmployeeWithKeyAndValue("james", "wilson",);



function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){

delete employee[key];
return employee;
}