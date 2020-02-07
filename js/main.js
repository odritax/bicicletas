function validateForm(){
	var	nombre = document.getElementById("name").value;
	var apellidos=document.getElementById('lastname').value;
	var email= document.getElementById('input-email').value;
	var pass = document.getElementById('input-password').value;
	var tipo_bici= document.getElementsByTagName('select')[0].value;

	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		alert("Debe ingresar su NOMBRE");
	  return false;
	}
	else if (!nombre.match(/^[ a-z A-Z]+$/)){
		alert("el nombre SOLO PUEDE CONTENER LETRAS A-Z");
		return false;
	}
	else if(nombre.charAt(0)!=nombre.charAt(0).toUpperCase()){
		alert("La primera letra del nombre debe ser MAYÚSCULA");
		return false;
	}

	else if( apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos) ) {
		alert("Debe ingresar APELLIDO");
	  return false;
	}	
	else if (!apellidos.match(/^[ a-z A-Z]+$/)){
		alert("el apellido SOLO PUEDE CONTENER LETRAS A-Z");
		return false;
	}
	else if (apellidos.charAt(0)!=apellidos.charAt(0).toUpperCase()){
		alert("La primera letra del apellido debe ser MAYÚSCULA");
		return false;
	}
	else if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
		alert("Ingrese EMAIL");
	  return false;
	}
	else if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
		alert("ingrese MAIL válido")
		return false;
	  }
	else if( pass == null || pass.length == 0 || /^\s+$/.test(pass) ) {
		alert("Ingrese PASS");
	  return false;
	}
    else if (pass=="123456" || pass=="password"|| pass=="098754") {
		alert("Ingrese otra PASS");
		return false;
	}
	else if (pass.length<=6){
		alert("Su contraseña debe contener al menos 6 carácteres intente nuevamente");
	}
	else if (tipo_bici=="0"){
		alert("Selecciona el TIPO DE BICICLETA");
		 return false;
	}
	return true;
    //else if( !(/^[A-Z]$/.test(nombre)) ) {
		//alert("Ingrese SOLO letras");
		//return false;
	  //}
	// || tipo_bici=="urbana"|| tipo_bici=="treking"|| tipo_bici=="electrica"|| tipo_bici=="estatica"	
}