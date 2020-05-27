const pic = document.getElementById("pic");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const role = document.getElementById("role");

//get Gary's info first: works!
const teamfunction = () => {
   fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
    .then(response => response.json())
    .then(data => {
           var fName = data['1']['employeefname'];
           var lName = data['1']['employeelname'];
           var employeebio = data['1']['employeebio'];
           var rolename = data['1']['roles'][0]['rolename'];
           var rolecolor = data['1']['roles'][0]['rolecolor'];
           var feature = data['1']['employeeisfeatured'];

           var imgurl = 'http://sandbox.bittsdevelopment.com/code1/employeepics/1.jpg';

           name.innerHTML = fName + " " +lName;
           bio.innerHTML = employeebio;
           role.innerHTML = rolename;
           role.style.backgroundColor = rolecolor;
           pic.innerHTML = '<img class="img" src="'+imgurl+'" alt="team member picture">';

           //undefined
           console.log(data.length);
       
    })
}
teamfunction();