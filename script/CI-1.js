//document.addEventListener("DOMContentLoaded", function() { //make sure DOM is ready
const membersContainer = document.getElementById("all-members");
const rolesContainer = document.getElementById("all-roles");
const rolesbtn = document.getElementById("showroles");
//const moreheight = 6em;
//const lessheight = 3em;
const allMembers = () => {
   fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
    .then(response => response.json())
    .then(data => {
       const teamnum = Number(Object.keys(data).length);
       //console.log("teamnum: " + teamnum + typeof(teamnum));
       for(let i=1; i<=teamnum; i++){
           let fName = data[i]['employeefname'];
           let lName = data[i]['employeelname'];
           let feature = data[i]['employeeisfeatured'];
           let imgurl = `http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg`;
           let employeebio = data[i]['employeebio'];
           let roles = data[i]['roles'];        
           membersContainer.innerHTML +=
               `<div class="container">
                    <div class="crown">${(feature ==1 ? "👑 " : "")}</div>
                    <div class="info">
                        <div class="pic"><img class="img" src="${imgurl}" alt="team member picture"></div>
                        <div class="name">${fName + " " +lName}</div>
                            ${(()=> {
                               return(
                               (employeebio.length >= 100) ? `<p class="bio">${employeebio}</p><span class="dot"> ... </span><br/>
                                <div class="showbtn">
                                    Show more
                                </div>` : `<p class="bio">${employeebio}</p>`);})()
                            } 
                        <div class="roles">
                            ${roles.map((role) => 
                                `<button class="role" value="" style="background-color: ${role.rolecolor};">
                                    ${role.rolename}
                                </button>`).join("")} <!--replace the "," with ""-->
                        </div>
                    </div>
                </div>`;
            //console.log("employeebio.length: "+ employeebio.length);
           
           let showbtn = document.querySelector(".showbtn");
           console.log("showbtn: "+showbtn); //before addlistener:"showbtn: [object HTMLDivElement]"|after addlistener:null
           //showbtn.addEventListener("click", showbio); //Uncaught (in promise) TypeError: Cannot read property 'addEventListener' of null | guess: something wrong with the <div> scope
            var showbio = () => {
               let bioinfo = document.querySelector(".bio");
               if(bioinfo.style.height === "3em") {
                   bioinfo.style.height = "6em";
                   showbtn.innerHTML = "Show less";
               } else {
                   bioinfo.style.height = "3em";
                   showbtn.innerHTML = "Show more";
               }
            }     
       };//for loop ends
       //possible solution1: need to create a temporary scope to preserve i's value,tried closure
       //onXXX event scope: global 
    })
}
//show all roles when click the "View all roles" button
const allRoles = () => {
    if (rolesbtn.textContent === "View all roles") {
        rolesbtn.innerHTML = "Hide all roles";
        fetch('http://sandbox.bittsdevelopment.com/code1/fetchroles.php')
            .then(response => response.json())
            .then(roledata => {
            const rolenum = Number(Object.keys(roledata).length);
            for(let i=0; i<=rolenum; i++) {
                let rolename = roledata[i]['rolename'];
                let rolecolor = roledata[i]['rolecolor'];
                let roleid = roledata[i]['roleid'];
                rolesContainer.innerHTML += 
                    `<div class="role rolediv" style="background-color: ${rolecolor};">${rolename}</div>`;
            }
        }) 
    } else {
        rolesbtn.innerHTML = "View all roles";
        rolesContainer.innerHTML = "";
    }
}

allMembers();
//});

//next step:
//    fix the "show more"
//    replace innerHtml with createElement and appendChild  
//    show all the team memebers with certain role when click the role button