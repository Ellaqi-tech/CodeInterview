document.addEventListener("DOMContentLoaded", function() { //make sure DOM is ready
const mainContainer = document.getElementById("main-container");
//const moreheight = 6em;
//const lessheight = 3em;
const teamfunction = () => {
   fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
    .then(response => response.json())
    .then(data => {
       const teamnum = Number(Object.keys(data).length);
       //console.log("teamnum: " + teamnum + typeof(teamnum));
       //var foo = [];

//for (let j = 0; j <= teamnum-1; j++) 
       for(let i in data.1) {
           let fName = data[foo.i].employeefname;
           let lName = data[i]['employeelname'];
           let feature = data[i]['employeeisfeatured'];
           let imgurl = `http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg`;
           let employeebio = data[i]['employeebio'];
           let roles = data[i]['roles'];    
           
           mainContainer.innerHTML +=
               `<div class="container">
                    <div class="crown">${(feature ==1 ? "👑 " : "")}</div>
                    <div class="info">
                        <div class="pic"><img class="img" src="${imgurl}" alt="team member picture"></div>
                        <div class="name">${fName + " " +lName}</div>
                        
                            ${(()=> {
                               return(
                               (employeebio.length >= 100) ? `<p class="bio">${employeebio}</p><span class="dot">...</span><br/>
                                <div id="showbtn">
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
            //console.log("i: "+i);
            //console.log("employeebio.length: "+ employeebio.length);
           
           let showbtn = document.getElementById("showbtn");
//           console.log("showbtn: "+showbtn);
           showbtn.addEventListener("click", showbio);
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
                  
       })//end of for loop    ; need to create a temporary scope to preserve i's value, onXXX event scope: global 
       
    })
    
}
teamfunction();

});