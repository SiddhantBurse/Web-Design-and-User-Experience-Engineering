//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};


var x = 1;
function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  row.class="note";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);

  cell1.innerHTML = "<input type='checkbox' onclick='yellow(this)' id='remember'> <br> <br><img src='down.png' style='width:25px' class='exit' id='myDiv'+ x onclick='myFunction(this)'/>";
  console.log(x);

  cell2.innerHTML = "Student"+x;
  cell3.innerHTML = "Teacher"+x;
  cell4.innerHTML = "Approved";
  cell5.innerHTML = "Fall";
  cell6.innerHTML = "TA";
  cell7.innerHTML = "2356";
  cell8.innerHTML = "100%";
  cell9.innerHTML="<button onclick='del(this)'>Delete</button>";
  cell9.id="sid"+x;
  document.getElementById("sid"+x).style.display="none";
  cell10.innerHTML = "<button onclick='btnedit()'>Edit</button>";

  cell10.id="edit"+x;
  document.getElementById("edit"+x).style.display="none";

  var rowx = table.insertRow(-1);
  rowx.id = "myDiv" + x;
  var cell11 = rowx.insertCell(0);
  cell11.id="cool"+x
  document.getElementById("cool"+x).colSpan = "8"; 
  cell11.innerHTML =  "Advisor: <br><br> Award Details <br> Summer 1-2014(TA) <br>Budget Number:<br> Tuition Number:<br>Comments:<br><br><br>Award Status:<br><br><br>";

  x = x + 1;
  alert("New Record added");
  //console.log(x);

}
function btnedit()
{
  alert("Sucesfully edited");

}


function del(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i++);
  console.log(i);
  alert("that Record deleted successfully.");
  x--;
}





function yellow(el){
  if (el.checked){ 
  el.parentElement.parentElement.classList.toggle("selected");
  console.log(el);
  var sb = document.getElementById("sb");
  console.log(sb);
  sb.disabled = false;
  sb.className = 'enable';

  var sb = document.getElementById("ss");
  sb.hidden=false;
  // ss.className = 'thtab';
  
  var sj = document.getElementById("sp");
  sj.hidden=false;
  

  deledit();

  
  //alert("checked");
  }
  else{
    var sb = document.getElementById("sb");
    sb.disabled = true;
    sb.className="";

    var sb = document.getElementById("ss");
    ss.className = "";
    sb.hidden=true;

    var sj = document.getElementById("sp");
    sj.hidden=true;

    
    deledit1();
    el.parentElement.parentElement.classList.toggle("selected");
    
  }
}



  

function myFunction(z){
  console.log(z);
  
  var j = z.parentNode.parentNode.rowIndex;
  console.log(j);
  j++;
  var s = document.getElementsByTagName("tr")[j];

  if (s.style.display === "none") {
    s.style.display = "table-row";
  } else {
    s.style.display = "none";
  }
}
 

function deledit(yy){
  x--;
  var yy = document.getElementById("sid"+x);
  console.log(yy);
  yy.style.display="table-cell";

  var jj = document.getElementById("edit"+x);
  console.log(jj);
  jj.style.display="table-cell";

  
 
 x++;
}

function deledit1(yy){

  x--;
  var yy = document.getElementById("sid"+x);
  console.log(yy);
  yy.style.display="none";

  var jj = document.getElementById("edit"+x);
  console.log(jj);
  jj.style.display="none";

  
 
 x++;

}



var t = new Title("CONNECT WITH ME!");