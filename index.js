let head = `
<ul class="navegacion nav">
    <a href="index.html"><img class="logo" src="/Img/descarga.png" alt="vit_log"></a>
    <div class="etiquetas">
        <li class="item1">
            <a class="link_et1" href="index.html">INICIO</a>
        </li>
        <li class="item2">
            <a class="link_et2" href="tratamientos.html">TRATAMIENTOS</a>
        </li>
        <li class="item3">
            <a class="link_et3" href="especialistas.html">EQUIPO</a>
        </li>
        <li class="item4">
            <a class="link_et4" href="contacto.html">CONTACTO</a>
        </li>
    </div>
</ul>
`
document.getElementById("idheader").innerHTML = head

let foot = `
<!--UBICACION-->

<div class="ubicacion">
    <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13139.526355949269!2d-58.5020496!3d-34.581862599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64c098b0e67%3A0x4f28c3a2b8ffefe4!2sVilla%20Pueyrred%C3%B3n%2C%20CABA!5e0!3m2!1ses!2sar!4v1666113458454!5m2!1ses!2sar"
          style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
</div>
<img src="/Img/descarga.png" alt="logo" class="logo_foot">
<div class="direc_foot">
    <div class="direccion">
        <div class="direc">
            <p><i class="fa-solid fa-location-dot"></i> Calle falsa 123, Villa Pueyrredón, Capital Federal</p><br>
            <p><i class="fa-solid fa-phone"></i> +66666666666</p>
        </div>
        <br>
        <div class="horario">
            <h1><i class="fa-regular fa-clock"></i> HORARIOS</h1><br>
            <p>Lunes a Viernes de 9 a 20hs</p>
            <p>Sabados de 9 a 16hs</p>
        </div>
    </div>
</div>
<div class="redes">
    <h1>REDES</h1>
    <br>
    <p><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/vitalite.ok/" target="_blank" tittle="vitalite"> Vitalite.ok</a></p> <!--Insta-->
    <p><i class="fa-brands fa-whatsapp"></i><a href="https://api.whatsapp.com/send/?phone=541162530438&text&type=phone_number&app_absent=0" target="_blank" tittle="wtsp"> whatsapp</a></p> <!--wtsp-->
</div>
`
document.getElementById("idfoot").innerHTML= foot

 //--------------------------------------------------------------------------------------------------------

 const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^\d{7,8}$/, // 7 a 8 numeros
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	dni: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
		case "consulta":
			validarCampos(expresiones.consulta, e.target,'consulta');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.dni && campos.correo && campos.telefono ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});