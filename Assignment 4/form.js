

	var form = document.getElementById("myForm");
	form.addEventListener("submit", submitted);

	var validName = false;
	var validName = false;
	var validPhone = false;
	var validLName = false;
	var streetAddress1 = false;
	var validstate = false;
	var validcity = false;
	var validzipcode = false;
	var validstreetAddress1 =false;
	var validzz1 =false;
	var validcomments=false;
	var validtitle= false;
	var validsuper=false;
	var validcar=false;


	// regex checks variables
	var regExName = /^[a-zA-Z]+$/;
	var regExEmail = /@northeastern.edu\s*$/;
	var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
	var regZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

	var firstName = document.getElementById("firstName");
	firstName.addEventListener("input", validate);

	var emailId = document.getElementById("emailId");
	emailId.addEventListener("input", validate);

	var phoneNumber = document.getElementById("phoneNumber");
	phoneNumber.addEventListener("input", validate);

	var lastName = document.getElementById("lastName");
	lastName.addEventListener("input", validate);

	var streetAddress1 = document.getElementById("streetAddress1");
	streetAddress1.addEventListener("input", validate);

	var state = document.getElementById("state");
	state.addEventListener("input", validate);

	var city = document.getElementById("city");
	city.addEventListener("input", validate);


	var zipcode = document.getElementById("zipcode");
	zipcode.addEventListener("input", validate);

	var zz1 = document.getElementById("zz1");
	zz1.addEventListener("input", validate);

	var comments = document.getElementById("comments");
	comments.addEventListener("input", validate);

	var title = document.getElementsByClassName("title");;
    

	function validate(e) {
		console.log("validate");
	var value = e.target.value;
	console.log(value);
	var type = this.id;
	var em = "error_" + type;



	switch (type) {
	case "firstName":
	if (!value.trim().match(regExName)) {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validName = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validName = true;
				}
	break;

	case "emailId":
	if (!value.trim().match(regExEmail)) {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validEmail = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validEmail = true;
				}
	break;

	case "phoneNumber":
	if (!value.trim().match(regExPhone)) {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validPhone = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validPhone = true;
				}
	break;

	case "lastName":
	if (!value.trim().match(regExName)) {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validLName = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validLName = true;
				}
	break;

	case "streetAddress1":
	if (value.trim()=="") {
	document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validstreetAddress1 = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validstreetAddress1 = true;
				}
	break;

	case "state":
	if (!value.trim().match(regExName)) {
	document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validstate = false;

				}
	else {
	document.getElementById(em).style.display = "none";
	this.style.border = "";
	validstate = true;
				}
	break;

	case "city":
	if (!value.trim().match(regExName)) {
	document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validcity = false;
				}
	else {
	document.getElementById(em).style.display = "none";
	this.style.border = "";
	validcity = true;
				}
	break;

	case "zipcode":
	if (!value.trim().match(regZipCode)) {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validzipcode = false;
				}
	else {
		document.getElementById(em).style.display = "none";
	this.style.border = "";
	validzipcode = true;
				}
	break;

	case "comments":
	if (value.trim()=="") {
		document.getElementById(em).style.display = "block";
	this.style.border = "2px solid red";
	validcomments = false;
				}
	else {
		
	validcomments = true;
				}
	break;

	case "zz1":
	if (value.trim()=="") {
		
	validzz1 = false;
				}
	else {
		
	validzz1 = true;
				}
	break;

	



		}


	}

	function getCars(select){
    var selectedString = select.options[select.selectedIndex].value;
	if(selectedString == 1)
	{
	document.getElementById("cars_target1").style.display = "block";
	document.getElementById("cars_target2").style.display = "none";
	document.getElementById("cars_target3").style.display = "none";
	document.getElementById("cars_target4").style.display = "none";
	document.getElementById("cars_target5").style.display = "none";
	//document.querySelector('input[name="Choose"]:checked').checked = false;

	var chbx = document.querySelectorAll('[name="cars2"], [name="cars3"], [name="cars4"], [name="cars5"]');
	console.log(chbx);

	for(i = 0; i < chbx.length; i++) {

		chbx[i].checked = false;}

	document.getElementById("zz").style.display = "none";
	
	
            
    }



	else if(selectedString == 2)
	{
	document.getElementById("cars_target2").style.display = "block";
	document.getElementById("cars_target1").style.display = "none";
	document.getElementById("cars_target3").style.display = "none";
	document.getElementById("cars_target4").style.display = "none";
	document.getElementById("cars_target5").style.display = "none";

	var chbx = document.querySelectorAll('[name="cars1"], [name="cars3"], [name="cars4"], [name="cars5"]');
	console.log(chbx);

	for(i = 0; i < chbx.length; i++) {

		chbx[i].checked = false;}

	document.getElementById("zz").style.display = "none";
	

	
    }

	else if(selectedString == 3)
	{
	document.getElementById("cars_target3").style.display = "block";
	document.getElementById("cars_target2").style.display = "none";
	document.getElementById("cars_target1").style.display = "none";
	document.getElementById("cars_target4").style.display = "none";
	document.getElementById("cars_target5").style.display = "none";

	var chbx = document.querySelectorAll('[name="cars2"], [name="cars1"], [name="cars4"], [name="cars5"]');
	console.log(chbx);

	for(i = 0; i < chbx.length; i++) {

		chbx[i].checked = false;}

	document.getElementById("zz").style.display = "none";
	
    }
	else if(selectedString == 4)
	{
	document.getElementById("cars_target4").style.display = "block";
	document.getElementById("cars_target2").style.display = "none";
	document.getElementById("cars_target3").style.display = "none";
	document.getElementById("cars_target1").style.display = "none";
	document.getElementById("cars_target5").style.display = "none";

	var chbx = document.querySelectorAll('[name="cars2"], [name="cars3"], [name="cars1"], [name="cars5"]');
	console.log(chbx);

	for(i = 0; i < chbx.length; i++) {

		chbx[i].checked = false;}

	document.getElementById("zz").style.display = "none";
	
    }
	else if(selectedString == 5)
	{
	document.getElementById("cars_target5").style.display = "block";
	document.getElementById("cars_target2").style.display = "none";
	document.getElementById("cars_target3").style.display = "none";
	document.getElementById("cars_target4").style.display = "none";
	document.getElementById("cars_target1").style.display = "none";
	var chbx = document.querySelectorAll('[name="cars2"], [name="cars3"], [name="cars4"], [name="cars1"]');
	console.log(chbx);

	for(i = 0; i < chbx.length; i++) {

		chbx[i].checked = false;}

	document.getElementById("zz").style.display = "none";
	
    }

	else {
	document.getElementById("cars_target5").style.display = "none";
	document.getElementById("cars_target2").style.display = "none";
	document.getElementById("cars_target3").style.display = "none";
	document.getElementById("cars_target4").style.display = "none";
	document.getElementById("cars_target1").style.display = "none";
	document.getElementById("zz").style.display = "none";
    }
}

	function myFunction(el) {
		//var checkBox = document.getElementById("example");
		//console.log(checkBox)
		console.log("sid");
	var text = document.getElementById("zz");
	console.log(text);
	if (el.checked == true){
		//console.log(text+ "inside");
		text.style.display = "block";
  } else {
		text.style.display = "none";
	console.log("gd")
  }
}

	function addTabel(){
		var table = document.getElementById("table");
	var row = table.insertRow(-1);
	var title = row.insertCell(0);
	var FirstName = row.insertCell(1);
	var lastName= row.insertCell(2);
	var emailId= row.insertCell(3);
	var phoneNumber = row.insertCell(4);
	var streetAddress1 = row.insertCell(5);
	var streetAddress2= row.insertCell(6);
	var city = row.insertCell(7);
	var state = row.insertCell(8);
	var zipcode= row.insertCell(9);
	var Howdidyouhear = row.insertCell(10);
	var comment= row.insertCell(11);
	var Chooseacar = row.insertCell(12);

	title.innerHTML = displayRadioValue() ;
	console.log(document.getElementsByName("title").value);
	FirstName.innerHTML = document.getElementById("firstName").value;
	lastName.innerHTML = document.getElementById("lastName").value;
	emailId.innerHTML=document.getElementById("emailId").value;
	phoneNumber.innerHTML=document.getElementById("phoneNumber").value;
	streetAddress1.innerHTML=document.getElementById("streetAddress1").value;
	streetAddress2.innerHTML=document.getElementById("streetAddress2").value;
	city.innerHTML=document.getElementById("city").value;
	state.innerHTML=document.getElementById("state").value;
	zipcode.innerHTML=document.getElementById("zipcode").value;
	Howdidyouhear.innerHTML= displaycheckValue();
	Chooseacar.innerHTML= displayChooseeCar();

	comment.innerHTML=document.getElementById("comments").value;
	

                
	}


	function displayRadioValue() {
            var ele = document.getElementsByName('title');

	for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                return ele[i].value;
            }
        }
	}

	function displaycheckValue() {
            var chk = document.getElementsByName('source');
	var collect =""
	for(i = 0; i < chk.length; i++) {
                if(chk[i].checked){
		//return chk[i].value;
		collect = collect + " " + chk[i].value ;
				 
            }
        }
	return collect;
	}

	function displayChooseeCar() {
            var ele = document.querySelectorAll('[name="cars2"], [name="cars3"], [name="cars4"], [name="cars1"],[name="cars5"]');
			var zz1 =document.getElementById("zz1").value;
			console.log(zz)
	for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                return ele[i].value +" "+zz1;
		
				
            }
        }
		
	}



	function submitted(e) {
	e.preventDefault();
	ValidaterRadio();
	 ValidaterRadio1() ;
	 selection()
	console.log("submitted");
	console.log(validName + "|" + validEmail + "|" + validPhone + "|" + validstreetAddress1  + "|" + validzz1 + "|" + validcomments + "|" + validtitle + "|" + validsuper + "|" + validcar);
	
	if(validName && validEmail && validPhone && validLName && validstate && validcity && validzipcode && validstreetAddress1 && validzz1 && validcomments && validtitle && validsuper && validcar ) {
		alert("Data Saved Successfully");
	//window.location.href = "FeedbackComplete.html";
	addTabel();
	document.getElementById("myForm").reset();
		}
	else {
		alert("Please enter details");
		}
	}

	function ValidaterRadio() {
		var getSelectedValue = document.querySelector( 'input[name="title"]:checked');   
if(getSelectedValue != null) {
	validtitle= true;
           }
 else {  
         
		 validtitle= false;
	}}

function ValidaterRadio1() {
		var getSelectedValue = document.querySelector( 'input[class="super"]:checked');   
if(getSelectedValue != null) {
	validsuper= true;
           }
 else {  
         
		 validsuper= false;
	}}
function selection()
{    
    var sel = document.getElementById('cars');    
    var selectedText = sel.options[sel.selectedIndex].text;
    if (selectedText.startsWith("Select")) {

		validcar=false;
            
   }
   else{
    validcar=true;
}
}
