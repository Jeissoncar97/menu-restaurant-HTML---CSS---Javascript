// Obtén referencias a los elementos del DOM
const menuItems = document.querySelectorAll(".menu a");
const platosContainer = document.querySelector(".platos");
const tituloPlatos = document.getElementById("titulo-platos"); // Referencia al título de los platos

// Función para mostrar los platos de una categoría específica
function mostrarPlatos(categoria) {
	const platosCategoria = platos[categoria];
	const tituloCategoria = obtenerTituloCategoria(categoria);

	// Establecer el contenido del título
	tituloPlatos.textContent = tituloCategoria;

	platosContainer.innerHTML = "";

	platosCategoria.forEach((plato, index) => {
		agregarPlato(plato, categoria, index);
	});
}

// Función para obtener el título de la categoría
function obtenerTituloCategoria(categoria) {
	switch (categoria) {
		case "pizzas":
			return "Pizzas";
		case "lasagnas":
			return "Lasagnas";
		case "spaguetis":
			return "Spagguetis";
		case "otros":
			return "Otros gustos";
		case "mexicano":
			return "Platos mexicanos";
		case "hamburguesas":
			return "Hamburguesas";
		case "bebidas":
			return "Bebidas";
		default:
			return "Otras categorías";
	}
}

// Función para agregar un plato al contenedor de platos
function agregarPlato(plato, categoria, index) {
	const platoElement = document.createElement("div");
	platoElement.classList.add("plato");
	platoElement.dataset.categoria = categoria;
	platoElement.dataset.id = index;
	platoElement.innerHTML = `<img class="imagen-platos" src="${plato.img}"><h4>${plato.nombre}</h4>`;

	// Agregar evento de clic para mostrar el modal al hacer clic en el plato
	platoElement.addEventListener("click", function () {
		console.log("Plato clickeado:", plato);
		mostrarModal(plato);
	});

	// Agregar información adicional según la categoría del plato
	if (categoria === "pizzas") {
		platoElement.innerHTML += `<p>${plato.descripcion}</p><p>${plato.precioPersonal}</p><p>${plato.precioMediana}</p><p>${plato.precioGrande}</p>`;
	} else if (categoria === "lasagnas") {
		platoElement.innerHTML += `<p>${plato.descripcion}</p><p>${plato.precioPequeña}</p><p>${plato.precioGrande}</p>`;
	} else {
		platoElement.innerHTML += `<p>${plato.descripcion}</p><p>${plato.precio}</p>`;
	}

	platosContainer.appendChild(platoElement);
}

// Agregar un evento de clic a cada elemento del menú
menuItems.forEach((item) => {
	item.addEventListener("click", function (event) {
		event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
		const categoria = this.id; // Obtener la categoría del enlace
		mostrarPlatos(categoria); // Mostrar los platos correspondientes
	});
});

// Mostrar platos de la primera categoría al cargar la página
mostrarPlatos(menuItems[0].id);

// Modal
// Modal
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close"); // Obtén el botón de cierre una vez aquí
// Función para mostrar el modal
function mostrarModal(platoData) {
	const platoModalContent = document.getElementById("plato-modal-content");
	platoModalContent.innerHTML = `
    <img class="imagen-platos" src="${platoData.img}">
    <h4>${platoData.nombre}</h4>
    ${
			platoData.descripcion
				? `<p class = "primer-parrafo">${platoData.descripcion}</p>`
				: ""
		}
    ${platoData.precioPequeña ? `<p>${platoData.precioPequeña}</p>` : " "}
    ${platoData.precioPersonal ? `<p>${platoData.precioPersonal}</p>` : ""}
    ${platoData.precioMediana ? `<p>${platoData.precioMediana}</p>` : ""}
    ${platoData.precioGrande ? `<p>${platoData.precioGrande}</p>` : ""}
    ${platoData.precio ? `<p>${platoData.precio}</p>` : ""}
  `;
	modal.style.display = "block";

	// Agregar evento de clic al botón de cierre para cerrar el modal

	// Cerrar el modal haciendo clic fuera del contenido
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			cerrarModal();
		}
	});
}

// Función para cerrar el modal
function cerrarModal() {
	modal.style.display = "none"; // Ocultar el modal
}

// Agregar evento de clic al botón de cierre para cerrar el modal
closeBtn.addEventListener("click", cerrarModal);

// Cerrar el modal haciendo clic fuera del contenido
window.addEventListener("click", function (event) {
	if (event.target === modal) {
		cerrarModal();
	}
});
