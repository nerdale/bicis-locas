function validateForm(){

	//name validation, empty field and first character uppercase
	function nombre(){
		var nombre = document.getElementById('name').value;
		var ver = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		if (nombre === null || nombre.length === 0){
			alert('¡Error! El campo nombre no debe estar vacío');
			return false;
		}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			alert('¡Error! El primer caracter debe ser mayúscula');
			return false;
		}else if( /[0-9]/.test(nombre)){
			alert('¡Error! Sólo debe ingresar letras');
			return false;
		}else{
			alert('EXIITOOOOO');
			return true;
		}
	}
	nombre();

	//lastname validation, empty field and first character uppercase
	function apellido(){
		var apellido = document.getElementById('lastname').value;
		if (apellido === null || apellido.length === 0){
			alert('¡Error! El campo apellido no debe estar vacío');
			return false;
		}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			alert('¡Error! El primer caracter debe ser mayúscula');
			return false;
		}else if( /[0-9]/.test(apellido)){
			alert('¡Error! Sólo debe ingresar letras');
			return false;			
		}else{
			alert('EXIITOOOOO');
			return true;
		}
	}		
	apellido();

	//email validation 
	function correo(){
		var correo = document.getElementById('input-email').value;
		var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		if( correo === null || correo.length === 0){
			alert('¡Error! El campo correo no debe estar vacío');
			return false;
		}else if (verificar.test(correo)){
			alert('El correo ' + correo + ' ha sido ingresado correctamente');
			return true;
		}else{
			alert('¡Error! El correo es incorrecto, por favor ingrese un dato válido');
			return false;
		}
	}
	correo(); 

	//password validation
	function password(){
		var contrasenia = document.getElementById('input-password').value;
		if(contrasenia == null || contrasenia.length === 0){
			alert('¡Error! El campo password no debe estar vacío');
			return false;
		}else if (contrasenia.length < 6 ) {
			alert('¡Error! La contraseña debe tener al menos 6 caracteres');
			return false;
		}else if(contrasenia === 'password' || contrasenia === '123456' || contrasenia === '098754'){
			alert('¡Error! Contraseña inválida');
			return false;
		}else{
			alert('Contraseña ingresada con éxito')
			return true;			
		}

	}
	password();	

	//list validation
	function lista(){
		var seleccion = document.getElementByClassName('form-control').value;
		if(seleccion === null || seleccion === 0){
			alert('¡Error! debe seleccionar una opción');
			return false;
		}else{
			alert('OK');
			return true;
		}
	}
	lista();
}