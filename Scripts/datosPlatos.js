// datosPlatos.js

const platos = {
	pizzas: [
		// Carne
		{
			nombre: "Americana premiun(Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni y jamón",
			precioPersonal: "Personal <strong>$</strong>15.000",
			precioMediana: "Mediana <strong>$</strong>27.500",
			precioGrande: "Grande <strong>$</strong>40.000",
		},
		{
			nombre: "Bey pepperoni (Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni y tocineta",
			precioPersonal: "Personal <strong>$</strong>15.000",
			precioMediana: "Mediana <strong>$</strong>27.500",
			precioGrande: "Grande <strong>$</strong>37.500",
		},
		{
			nombre: "Bolognesa",
			img: "img/pizza.jpg",
			descripcion: "Carne a la bolognesa, jamón y champiñones",
			precioPersonal: "Personal <strong>$</strong>12.000",
			precioMediana: "Mediana <strong>$</strong>23.000",
			precioGrande: "Grande <strong>$</strong>34.000",
		},
		{
			nombre: "California",
			img: "img/pizza.jpg",
			descripcion: "Chorizo especial, carne molida, pimentón y cebolla morada",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>25.000",
			precioGrande: "Grande <strong>$</strong>37.000",
		},
		{
			nombre: "Camarón cebolla y jamón",
			img: "img/pizza.jpg",
			descripcion: "Camarón, cebolla y jamón",
			precioPersonal: "Personal <strong>$</strong>18.000",
			precioMediana: "Mediana <strong>$</strong>28.000",
			precioGrande: "Grande <strong>$</strong>41.000",
		},
		{
			nombre: "Camarón al BBQ",
			img: "img/pizza.jpg",
			descripcion: "Camarón BBQ, tomate en pizzas y piña",
			precioPersonal: "Personal <strong>$</strong>18.000",
			precioMediana: "Mediana <strong>$</strong>29.000",
			precioGrande: "Grande <strong>$</strong>41.000",
		},
		{
			nombre: "Camarón marinero",
			img: "img/pizza.jpg",
			descripcion: "Camarones salteados en salsa marinera y cebolla",
			precioPersonal: "Personal <strong>$</strong>18.000",
			precioMediana: "Mediana <strong>$</strong>29.000",
			precioGrande: "Grande <strong>$</strong>41.000",
		},
		{
			nombre: "Costillas BBQ",
			img: "img/pizza.jpg",
			descripcion: "trozos de costilla horeado en salsa BBQ",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>38.500",
		},
		{
			nombre: "Criolla",
			img: "img/pizza.jpg",
			descripcion: "Carne desmechada, chorizo especial y maíz tierno",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>38.500",
		},
		{
			nombre: "Del campo",
			img: "img/pizza.jpg",
			descripcion: "Carne molida, tocineta y maíz tierno",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>38.500",
		},
		{
			nombre: "Genoveva",
			img: "img/pizza.jpg",
			descripcion: "Chorizo español, champiñones, cebolla y pimentón",
			precioPersonal: "Personal <strong>$</strong>11.500",
			precioMediana: "Mediana <strong>$</strong>23.000",
			precioGrande: "Grande <strong>$</strong>36.000",
		},
		{
			nombre: "Jamón y queso",
			img: "img/pizza.jpg",
			descripcion: "Jamón y queso",
			precioPersonal: "Personal <strong>$</strong>11.500",
			precioMediana: "Mediana <strong>$</strong>20.500",
			precioGrande: "Grande <strong>$</strong>30.500",
		},
		{
			nombre: "Lomito pimienta (Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Tirillas de lomo fino salteados en salsa pimienta",
			precioPersonal: "Personal <strong>$</strong>14.500",
			precioMediana: "Mediana <strong>$</strong>27.000",
			precioGrande: "Grande <strong>$</strong>38.000",
		},
		{
			nombre: "Madrileña",
			img: "img/pizza.jpg",
			descripcion: "Jamóm serrano, pepperoni y chorizo español",
			precioPersonal: "Personal <strong>$</strong>15.500",
			precioMediana: "Mediana <strong>$</strong>29.000",
			precioGrande: "Grande <strong>$</strong>41.000",
		},
		{
			nombre: "Oriental",
			img: "img/pizza.jpg",
			descripcion:
				"Lomo de res, pollo, champiñones y rices chinas, bañado en salsa oriental",
			precioPersonal: "Personal <strong>$</strong>14.500",
			precioMediana: "Mediana <strong>$</strong>26.500",
			precioGrande: "Grande <strong>$</strong>39.500",
		},
		{
			nombre: "Pepperoni maíz",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni y maíz tierno",
			precioPersonal: "Personal <strong>$</strong>14.500",
			precioMediana: "Mediana <strong>$</strong>27.000",
			precioGrande: "Grande <strong>$</strong>39.000",
		},
		{
			nombre: "Pepernata",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni, pimentón y cebolla morada",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>25.000",
			precioGrande: "Grande <strong>$</strong>38.000",
		},
		{
			nombre: "Pepperoni",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni y queso de la casa",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>25.000",
			precioGrande: "Grande <strong>$</strong>38.500",
		},
		{
			nombre: "Stroganoft",
			img: "img/pizza.jpg",
			descripcion: "Tirillas de lomo fino, champiñones y rúgula",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>26.500",
			precioGrande: "Grande <strong>$</strong>39.000",
		},
		{
			nombre: "Tocineta maíz",
			img: "img/pizza.jpg",
			descripcion: "Tocineta y maíz tierno",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>25.000",
			precioGrande: "Grande <strong>$</strong>38.500",
		},
		{
			nombre: "Renchera",
			img: "img/pizza.jpg",
			descripcion: "Chorizo, tocineta y maíz tierno",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>25.000",
			precioGrande: "Grande <strong>$</strong>39.500",
		},
		{
			nombre: "Tocineta y jamón",
			img: "img/pizza.jpg",
			descripcion: "jamón de cerdo ahmado y tocineta",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>24.000",
			precioGrande: "Grande <strong>$</strong>39.500",
		},
		// Mexicanas
		{
			nombre: "Chile (Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Carne a la bologesa, caraota y picante",
			precioPersonal: "Personal <strong>$</strong>",
			precioMediana: "Mediana <strong>$</strong>",
			precioGrande: "Grande <strong>$</strong>",
		},
		{
			nombre: "Jalisco (Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Carne a la bolognesa, chorizo especial y caraota",
			precioPersonal: "Personal <strong>$</strong>12.000",
			precioMediana: "Mediana <strong>$</strong>24.500",
			precioGrande: "Grande <strong>$</strong>33.500",
		},
		{
			nombre: "Picaleña(Picante)",
			img: "img/pizza.jpg",
			descripcion: "Pepperoni, jalapeños, pimentón y cebolla morada",
			precioPersonal: "Personal <strong>$</strong>13.000",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>36.500",
		},
		{
			nombre: "Texas Fox (Picantica)",
			img: "img/pizza.jpg",
			descripcion: "Chriozo, caraota, pico de gallo y guacamole",
			precioPersonal: "Personal <strong>$</strong>12.500",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>33.000",
		},
		{
			nombre: "Acapulco (Picantica)",
			img: "img/pizza.jpg",
			descripcion:
				"Carne desmechada, cebolla morada, tomate en pizzas y tostacos",
			precioPersonal: "Personal <strong>$</strong>13.500",
			precioMediana: "Mediana <strong>$</strong>25.500",
			precioGrande: "Grande <strong>$</strong>37.500",
		},
	],
	lasagnas: [
		{
			nombre: "Bolognesa",
			img: "img/lasagna.jpg",
			descripcion: "Carne a la bolognesa",
			precioPequeña: "Pequeña <strong>$</strong>14.500",
			precioGrande: "Grande <strong>$</strong>18.900",
		},
		{
			nombre: "Camarón marinero",
			img: "img/lasagna.jpg",
			descripcion: "Camarón, cebolla y salsa marinera",
			precioPequeña: "Pequeña <strong>$</strong>17.000",
			precioGrande: "Grande <strong>$</strong>21.400",
		},
		{
			nombre: "Camarón BBQ",
			img: "img/lasagna.jpg",
			descripcion: "Camarones al BBQ, tomota y piña",
			precioPequeña: "Pequeña <strong>$</strong>17.000",
			precioGrande: "Grande <strong>$</strong>21.500",
		},
		{
			nombre: "Fox especial",
			img: "img/lasagna.jpg",
			descripcion: "Pollo, jamón, champiñones y carne a la bolognesa",
			precioPequeña: "Pequeña <strong>$</strong>16.500",
			precioGrande: "Grande <strong>$</strong>21.000",
		},
		{
			nombre: "Pollo con champiñones",
			img: "img/lasagna.jpg",
			descripcion: "Pollo, champiñones y salsa bechamel",
			precioPequeña: "Pequeña <strong>$</strong>15.000",
			precioGrande: "Grande <strong>$</strong>18.900",
		},
		{
			nombre: "Polo carbonara",
			img: "img/lasagna.jpg",
			descripcion: "Pollo, tocineta y salsa bechamel",
			precioPequeña: "Pequeña <strong>$</strong>15.500",
			precioGrande: "Grande <strong>$</strong>19.900",
		},
		{
			nombre: "Vegetariana",
			img: "img/lasagna.jpg",
			descripcion: "Cebolla, pimentón, champiñones y salsa bechamel",
			precioPequeña: "Pequeña <strong>$</strong>12.500",
			precioGrande: "Grande <strong>$</strong>17.900",
		},
	],
	spaguetis: [
		{
			nombre: "Bolognsa",
			img: "img/pasta.jpg",
			descripcion: "Carne a la bolognesa",
			precio: "<strong>$</strong>15.400",
		},
		{
			nombre: "Camarones marineros y ajo",
			img: "img/pasta.jpg",
			descripcion: "Camarones en salsa marinera y cebolla",
			precio: "<strong>$</strong>20.900",
		},
		{
			nombre: "Pollo carbonara",
			img: "img/pasta.jpg",
			descripcion: "pollo, tocineta y salsa bechamel",
			precio: "<strong>$</strong>18.900",
		},
		{
			nombre: "Pollo bechamel",
			img: "img/pasta.jpg",
			descripcion: "pollo, champiñones y salsa bechamel",
			precio: "<strong>$</strong>15.400",
		},
		{
			nombre: "Vegetariano",
			img: "img/pasta.jpg",
			descripcion:
				"Cebolla morada, pimentón, champiñones, tomate, salsa bechamel y salsa napolitana",
			precio: "<strong>$</strong>14.900",
		},
	],
	otros: [
		{
			nombre: "Papas a la francesa",
			img: "img/francesa.jpg",
			descripcion: "Papas fritas 250g",
			precio: "<strong>$</strong>5.500",
		},
		{
			nombre: "Alitas BBQ",
			img: "img/francesa.jpg",
			descripcion:
				"cuatro alas bañadas en salsa BBQ, acompañadas de papas a la francesa, patacón y ensalada",
			precio: "<strong>$</strong>15.500",
		},
		{
			nombre: "Salchipapa sencilla",
			img: "img/francesa.jpg",
			descripcion: "Papas a la francesa, salchicha americana y salsas",
			precio: "<strong>$</strong>9.500",
		},
		{
			nombre: "Salchipapa con pollo",
			img: "img/francesa.jpg",
			descripcion:
				"Papas a la francesa, salchicha americana, pollo desmechado, queso gratinado y salsas",
			precio: "<strong>$</strong>11.500",
		},
		{
			nombre: "Salchipapa con carne",
			img: "img/francesa.jpg",
			descripcion:
				"Papas a la francesa, salchicha americana, carne desmechada, queso gratinado y salsas",
			precio: "<strong>$</strong>12.500",
		},
		{
			nombre: "Salchipapa especial",
			img: "img/francesa.jpg",
			descripcion:
				"Papas a la francesa, salchicha americana, pollo y carne desmechada, queso gratinado y salsas",
			precio: "<strong>$</strong>14.000",
		},
		{
			nombre: "Costillas BBQ",
			img: "img/francesa.jpg",
			descripcion:
				"Costillas de cerdo bañadas en salsa BBQ, acompañadas de papas a la francesa, patacón y ensalada",
			precio: "<strong>$</strong>15.000",
		},
		{
			nombre: "Perro caliente sencillo",
			img: "img/francesa.jpg",
			descripcion:
				"Salchicha americana, cebolla, queso, huevo de codorniz, papa chip y salsas",
			precio: "<strong>$</strong>8.000",
		},
		{
			nombre: "Perro caliente en combo",
			img: "img/francesa.jpg",
			descripcion:
				"Salchicha americana, cebolla, queso, huevo de codorniz, papa chip y salsas con papas a la francesa y gaseosa",
			precio: "<strong>$</strong>14.000",
		},
		{
			nombre: "Mazorcada ranchera",
			img: "img/francesa.jpg",
			descripcion:
				"Maíz tierno, chirzo, tocineta, carne desmechada, papa chip, salsa napolitana y queso gratinado",
			precio: "<strong>$</strong>17.000",
		},
		{
			nombre: "Mazorcada pollo champiñones",
			img: "img/francesa.jpg",
			descripcion:
				"Maíz tierno, pollo desmechado, champiñones, papa chip, salsa bechamel y queso gratinado",
			precio: "<strong>$</strong>16.900",
		},
		{
			nombre: "Mazorcada vegetariana",
			img: "img/francesa.jpg",
			descripcion:
				"Maíz tierno, zuquini, champiñones, papa chip, salsa bechamel y queso gratinado",
			precio: "<strong>$</strong>",
		},
	],
	mexicano: [
		{
			nombre: "Quesadillas",
			img: "/img/quesadilla.jpg",
			descripcion:
				"Tortillas de trigo, rellena de carne y/o pollo y queso, acompañado de guacamole y pico de gallo",
			precio: "<strong>$</strong>16.000",
		},
		{
			nombre: "Burrito",
			img: "/img/quesadilla.jpg",
			descripcion:
				"Tortillas de trigo, rellena de carne y/o pollo, maíz tierno, queso y lechuga, acompañado de guacamole y tostacos",
			precio: "<strong>$</strong>18.000",
		},
		{
			nombre: "Burrito vegetariano",
			img: "/img/quesadilla.jpg",
			descripcion:
				"Tortillas de trigo, rellena de zuquini, champiñones, maíz tierno, queso y lechuga, acompañado de guacamole y tostacos",
			precio: "<strong>$</strong>16.000",
		},
	],
	hamburguesas: [
		{
			nombre: "Sencilla",
			img: "/img/hamburguesa.jpg",
			descripcion: "Carne, lechuga, tomate, cebolla y queso",
			precio: "<strong>$</strong>9.000",
		},
		{
			nombre: "Fox ranchera",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Carne, tocineta, maíz tierno, lechuga, tomate, cebolla y queso, acompañada de papas a la francesa",
			precio: "<strong>$</strong>16.900",
		},
		{
			nombre: "Fox champiñón",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Carne, champiñones, lechuga, tomate, cebolla y queso, acompañada de papas a la francesa",
			precio: "<strong>$</strong>16.000",
		},
		{
			nombre: "Fox miel mostaza",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Carne, pollo en salsa miel mostaza, lechuga, tomate, cebolla y queso, acompañada de papas a la francesa",
			precio: "<strong>$</strong>17.000",
		},
		{
			nombre: "Fox del huerto",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Carne, pollo, jaón, champiñones, salsa cesar, lechuga, tomate, cebolla y queso, acompañada de papas a la francesa",
			precio: "<strong>$</strong>17.500",
		},
		{
			nombre: "Combo sencilla",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Hamburguesa sencilla acompañada de papas a la francesa y gaseosa 250ml",
			precio: "<strong>$</strong>14.000",
		},
		{
			nombre: "Combo especial",
			img: "/img/hamburguesa.jpg",
			descripcion:
				"Hamburguesa sencilla con doble carne y doble queso, acompañada de papas a la francesa y gaseosa 250ml",
			precio: "<strong>$</strong>17.000",
		},
	],
	bebidas: [
		//naturales
		{
			nombre: "Jugos en agua (variedad)",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>4.500",
		},
		{
			nombre: "Jugos en leche (variedad)",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>5.000",
		},
		{
			nombre: "Limonada natural",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>4.000",
		},
		{
			nombre: "Limonada cerezada",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>4.500",
		},
		{
			nombre: "Limonada de hierbabuena",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>4.500",
		},
		{
			nombre: "Limonada de coco",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>5.000",
		},
		// gaseosas y cervezas
		{
			nombre: "Agua sin gas",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>2.500",
		},
		{
			nombre: "Agua con gas",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>3.000",
		},
		{
			nombre: "Club colombia (dorada - roja)",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>5.000",
		},
		{
			nombre: "Poker",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>4.000",
		},
		{
			nombre: "Coronita",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>5.000",
		},
		{
			nombre: "Corona",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>6.000",
		},
		{
			nombre: "Gaseosa 1.5 (Productos coca cola)",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>7.500",
		},
		{
			nombre: "Gaseosa 1.5 (Productos postobón)",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>6.500",
		},
		{
			nombre: "Gaseosa 400",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>3.500",
		},
		{
			nombre: "Gaseosa 350",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>3.000",
		},
		{
			nombre: "Gaseosa 250",
			img: "/img/jugos.jpg",
			precio: "<strong>$</strong>2.000",
		},
	],
	// Agrega más categorías y platos según sea necesario
};

