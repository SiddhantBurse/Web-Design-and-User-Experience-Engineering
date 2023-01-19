function myFunction() {
	const myDIVs = document.getElementsByClassName("myDIVs");
	for (let i = 0; i < myDivs.length; i++) {
	  if (myDivs[i].style.display === "none") {
		  myDivs[i].style.display = "block";
	  } else {
		  myDivs[i].style.display = "none";
	  }
	}
  } 