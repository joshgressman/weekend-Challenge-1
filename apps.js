
$(document).ready(function(){
   var array = [];
  //  var payroll = 0;
//stop default click action
   $('#employeeinfo').on('submit', function(event){
     event.preventDefault();
  //new varible empty object
  var values = {};
  //.serialize method creates a javascript array of objects
  var fields = $('#employeeinfo').serializeArray();

  //take index of arrays and convert into object properties with a function
  //taking the name of the form element and inserting value into object
  fields.forEach(function(element, index, array){
    //forEach method executes a provided functon one per array ellemet
    values[element.name] = element.value;
  });
    console.log(values);
    //this is working!!
  //clear out imputs after submit empties input box
  $('#employeeinfo').find('input[type=text]').val('');

  appendDom(values);
});
function appendDom(empInfo){
  $('#container').append('<div class="person"><button class="button">Remove</button></div>');

  var $el = $('#container').children().last();
    $el.append('<p>'+ 'Name: ' + empInfo.employeefirstname  + ' ' + empInfo.employeelastname + ' / ID Number: ' + empInfo.employeeidnumber + ' / Job Title: ' + empInfo.employeejobtitle + ' / Annual Salary: ' + empInfo.employeesalary + '</p>');

    var salaryInt = parseInt(empInfo.employeesalary);
    var monthlyCost =  salaryInt / 12;
    //pushes motnhly cost to global scope array
     array.push(monthlyCost);
     //updates current salary

    //for loop is inceasing too much after first loop? ... but works
    var payroll = 0;
    for(var i = 0; i < array.length; i++){
      payroll +=  array[i];
    }
    $('#updatedCost').text("$" +payroll);

   //remove the $el div
   $($el, '.button').on('click', function (){
     $(this).remove();
   });
}

});
