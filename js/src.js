
var trueData = false;//var trueData = true;
                     //console.log(trueData);
function myfunction()
{
	if (trueData === true) {
		var x = document.getElementById("msg");
		x.className ="show"
		setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
	}
}

function validation(){
	var fuser = document.getElementById("fusername").value;
	var luser = document.getElementById("lusername").value;
	var emails = document.getElementById("email").value;
	var password = document.getElementById("pass").value;
	var confirmpass = document.getElementById("conpass").value;
	if(fuser == ""){
		document.getElementById("first-username-error").style.display =" block";
		
		return false;
						}else{
							document.getElementById("first-username-error").style.display = 'none';
						}

						if(luser == ""){
							document.getElementById("last-username-error").style.display =" block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("last-username-error").style.display = 'none';
						}

						if(emails == ""){
							document.getElementById("em-error").style.display ="block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("em-error").style.display = 'none';
						}
						if(password == ""){
							document.getElementById("pas-error").style.display ="block";
							trueData === true;
							return false;
						}
						else{
							document.getElementById("pas-error").style.display = 'none';
						}
						if(confirmpass == ""){
							document.getElementById("cpas-error").style.display ="block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("cpas-error").style.display = 'none';
						}
						trueData = true;
						return true;
					}
					
function log()
					{
						var user = document.getElementById("username").value;
					
						var pwd = document.getElementById("password").value;
					

						if(user == ""){
							document.getElementById("usern-error").style.display ="block";
							trueData = true;
							return false;
						}else{
							document.getElementById("usern-error").style.display ="none";
						}

						if(pwd == ""){
							document.getElementById("pass-error").style.display ="block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("pass-error").style.display = 'none';
						}

						
						window.location.href = 'cong.html';//for redirect the page.
					}
					

					
					function ret()
					{
						var olpass = document.getElementById("oldpass").value;
					
						var nepass = document.getElementById("newpass").value;
						var copass = document.getElementById("conpass").value;
					

						if(olpass == ""){
							document.getElementById("opass-error").style.display =" block";
							trueData = true;
							return false;
						}else{
							document.getElementById("opass-error").style.display = 'none';
						}

						if(nepass == ""){
							document.getElementById("npass-error").style.display  =" block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("npass-error").style.display = 'none';
						}

						if(copass == ""){
							document.getElementById("cpass-error").style.display ="block";
							trueData = true;
							return false;
						}
						else{
							document.getElementById("cpass-error").style.display = 'none';
						}
						return true;


						
						// window.location.href = 'cong.html';//for redirect the page.
					}
					
function fog()
					{
						var id = document.getElementById("email").value;
					
						if(id == ""){
							document.getElementById("emails-error").style.display  ="block ";
							trueData = true;
							return false;
						}else{
							document.getElementById("emails-error").style.display = 'none';
						}
						document.getElementById("snackbar").style.display = 'block';
						
						return true;
					}
					