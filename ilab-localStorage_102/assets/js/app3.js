$(document).ready(function(){// should always be the beginning of a jQuery use
    var myFormData;
    // define two auxiliary functions
    function populateSelect(dataObject){//as the name says
	var htmlOption;
	$(dataObject).each(function(index,item){
	    htmlOption=$("<option/>").attr("data-index",index).attr("value",item["username"]).text(item["username"]);
	    $("form select").append(htmlOption);
	});
    }
    function storeLocally(name,value,daysAhead){// use local storage
	var expiresAt=new Date();
	if (! $.ezstorage.enabled())
	    return;
	expiresAt.setHours(expiresAt.getHours()+24*daysAhead);
	$.ezstorage.set(name,value,{expires:expiresAt});//2 parameters get us into localStorage, otherwise sessionStorage
    }
    // the main code starts here ; setup behaviors
    $("#existingNames").change(function(item){//react on selections
	$("#userPassword").val(myFormData[$("#existingNames :selected").attr("data-index")]["userPassword"]);// fill-in the password
	$(".submit").val("login");//we know it is not a new user
    });
    $("#button").click(function(){//what happens if we declare a new user
	$("label").first().remove();// not a select box anymore
	$("form").prepend($('<label for="username">Votre nom<input id="username" name="username" type="text" /></label>'));
	$("form input:not(:last-child)").val("");//just in case : void all input fields
	$(".submit").val("ok"); // this is a new user, the text is "ok", not "login"
    });
    $(".submit").click(function(event){//what happens if we "login" ?
	if (($(event.currentTarget).val())=="ok"){//we registered a new user
	    // missing : a check that the user is not present yet
	    myFormData.push($("form").toObject());//add one more user
	    storeLocally("myFormData",myFormData,5);
	}
	alert("je sais bien qu'il ne faut jamais faire alert mais j'avais envie");
	event.preventDefault();
    });
    // main code, do the job
    myFormData=$.ezstorage.get("myFormData");
    if ((myFormData==undefined)||(myFormData==null)){
	// define default values and pay tribute to original author
	myFormData=[{username:"Thronte",userPassword:"version_de_depart"},{username:"Delfosse",userPassword:"pour_faire_raccord"}];
	storeLocally("myFormData",myFormData,5);
    }
    populateSelect(myFormData);
});
