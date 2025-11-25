// JavaScript Document

function mulititable(){
    var thecount = 1;
	var thevalue = 12;
	var thedisplay="MULTIPLICATION TABLE OF  "+ thevalue + "<HR>";
	var answer;
	
	while(thecount<=12){
		answer = thevalue * thecount;
		thedisplay = thedisplay + thevalue + "   "+"times" + " "+ thecount + "=" + answer + "<br>";
		thecount = thecount + 1;
//		 thecount += 1;
	
	}
		
		  document.getElementById('anne'). innerHTML = thedisplay;
		  	  
		  
}


function timestable(){
    var a = 1;
	var answer = 12;
	var thedisplay="";
	var answer;
	
	for(a =1; a<=12; a++){
		answer = 11 * a;
		thedisplay = thedisplay +  " <br> 11 times" +" " + a +" " +" "+ "=" + answer +" " + "<br>";
	
//		 thecount += 1;
	
	}
		
		  document.getElementById('maryanne'). innerHTML = thedisplay;
		  	  
		  
}



function showanswer(){document.getElementById('answer1').style.display='inline';
					  document.getElementById('answer2').style.display='inline';
					  document.getElementById('answer3').style.display='inline';
		
	}
	function hideanswer(){document.getElementById('answer1').style.display='none';
					     document.getElementById('answer2').style.display='none';
					     document.getElementById('answer3').style.display='none';
			}

function click2() {
	var gab;
	gab = "Welcome to Nigeria!";
	//document.getElementById('mike').innerHTML= gab;
	alert(gab);
	alert("Welcome Mother General Julie.");
}

function welcomemsg(){
	var susan = document.getElementById('msg').value;
	var welcome = "Welcome to our site: Sr" + susan;
	alert (welcome);
}



function submitage() {
	var martha= document.getElementById('age').value;
	if(martha>20){
		alert("Welcome to our site!");
	   
	   } else {
		  alert("Sorry you are in the wrong Place!\nplease, Go to another website"); 
	   }

	   
  }



