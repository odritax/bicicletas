function validateForm(){
	var	nombre = document.getElementById("name");
	var apellidos=document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var pass = document.getElementById('input-password');
	var tipo_bici= document.getElementsByTagName('select')[0];
	
	function alertar(mensaje,elemento){
		var span = elemento.parentNode.children[2];
		if (!span) {
			var span =document.createElement('span');
		}
		span.innerHTML=mensaje;
		elemento.parentNode.appendChild(span);
	}
	function remover(elemento){
		var span = elemento.parentNode.children[2];
		if (!span){return};
		elemento.parentNode.removeChild(span);
	}
	if( nombre.value.length == 0|| nombre.value=="" ) {
		alertar("Debe ingresar NOMBRE",nombre);
	}
	else if (!nombre.value.match(/^[ a-z A-Z]+$/)){
		alertar("el nombre SOLO PUEDE CONTENER LETRAS A-Z",nombre);
	}
	else if(nombre.value.charAt(0)!=nombre.value.charAt(0).toUpperCase()){
	    alertar("La primera letra del nombre debe ser MAYÚSCULA",nombre);
	} else {
		remover(nombre);
	}

	if( apellidos.value == "" || apellidos.value.length == 0 || /^\s+$/.test(apellidos.value) ) {
		alertar("Debe ingresar APELLIDO",apellidos);
	}	
	else if (!apellidos.value.match(/^[ a-z A-Z]+$/)){
		alertar("el apellido SOLO PUEDE CONTENER LETRAS A-Z",apellidos);
	}
	else if (apellidos.value.charAt(0)!=apellidos.value.charAt(0).toUpperCase()){
		span_apellido.innerHTML="La primera letra del apellido debe ser MAYÚSCULA";
	}
	else {
		remover(apellidos);
	}

	if( email.value == "" || email.value.length == 0 || /^\s+$/.test(email.value) ) {
		alertar("Ingrese EMAIL",email);
	}
	else if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)) {
		alertar("ingrese MAIL válido",email);
	}
    else {
		remover(email);
	}
	if( pass.value == "" || pass.value.length == 0 || /^\s+$/.test(pass.value) ) {
		alertar("Ingrese PASS.",pass);
	}
    else if (pass.value=="123456" || pass.value=="password"|| pass.value=="098754") {
		alertar("Ingrese otra PASS",pass);
	}
	else if (pass.value.length<=6){
		alertar("Su contraseña debe contener al menos 6 carácteres intente nuevamente",pass);
	}else {
		remover(pass);
	}

	if(tipo_bici.value[0]=="0"){
		alertar("Selecciona el TIPO DE BICICLETA",tipo_bici);
	}
	else {
		var span = tipo_bici.parentNode.children[1];
		if (!span){return};
		tipo_bici.parentNode.removeChild(span);
	
	}
	
	// || tipo_bici=="urbana"|| tipo_bici=="treking"|| tipo_bici=="electrica"|| tipo_bici=="estatica"	
}