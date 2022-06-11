const companyDepartment = ['Department 1' , 'Department 2', 'Department 3', 'Department 4' ];
const companySalaries = [50000, 60000, 70000, 80000];
const Employees = [['art', 'Hannah', 'Cameron'], ['Jake', 'Grethel', 'Tanya', 'Braheem'], ['Arnell'] ,['Ben', 'Mathias']];

for (i = 0; i < companyDepartment.length; i++){
    if (companySalaries[i] > 70000){
        console.log (Employees[i]);
}}
