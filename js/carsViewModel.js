/* The viewmodel */
function carsViewModel() {
	var self = this;
	
	// Properties
	self.id = ko.observable();
	self.concesionario = ko.observable();
	self.cif = ko.observable();			
	self.coches = ko.observableArray();	
	
	//Methods
	self.mostrarconcesionario =  function (id) {
		//ko.mapping.fromJS(getModel(id),{},self);
		var model = getModel(id);
		self.id(model.id);
		self.concesionario(model.concesionario);
		self.cif(model.cif);
		self.coches(model.coches);
	};
	
	self.removeCoche = function(data) {
		self.coches.remove(data);
	};
	self.addCoche = function(data) {
		var serializedForm = $(data).serializeArray();
		var newcar = [ ];
		$.each(serializedForm, function() {
			if (this.name != "color")
			{
				newcar[this.name] = this.value;
			}
			else
			{
			    if (!newcar["colores"]) {
				    newcar["colores"] = [];
				}				
				newcar["colores"].push(new Color(this.value));
			}
		});
		self.coches.push(new Coche(newcar.marca, newcar.modelo, newcar.colores ));
	};		
	
	self.mostrarconcesionario("1");
}

function Color(color) {
	this.color = color;
}

function Coche(marca, modelo, colores) {
	this.marca = marca;
	this.modelo = modelo;
	this.colores = colores;
}

/* Get data */
function getModel(id) {
    if (id == "1") {
		var object = 
		{		
			id: "1",
			concesionario:"Automoviles Marte S.A.",
			cif: "A12345678",
			coches: [
						{ marca:"Mercedes", modelo:"Clase A", colores : [{color:"white"}, {color:"yellow"},{color:"green"}] },
						{ marca:"Audi", modelo:"A4", colores : [{color:"red"}, {color:"black"},{color:"green"}] },
						{ marca:"Citroen", modelo:"C5", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Citroen", modelo:"C5", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Mercedes", modelo:"SLK", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Kia", modelo:"Sportage", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Ford", modelo:"Ka", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Renault", modelo:"Clio", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Ford", modelo:"Focus", colores : [{color:"red"}, {color:"black"},{color:"green"}] },
						{ marca:"Citroen", modelo:"Xsara", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Audi", modelo:"TT", colores : [{color:"red"}, {color:"yellow"},{color:"blue"}] },
						{ marca:"Lamborgini", modelo:"Diablo", colores : [{color:"red"}, {color:"black"},{color:"green"}] },
						{ marca:"Seat", modelo:"600", colores : [{color:"green"}, {color:"black"},{color:"yellow"}] },
						{ marca:"Fiat", modelo:"500", colores : [{color:"red"}, {color:"orange"},{color:"green"}] }
					]
		}
	}
	else if (id == "2") {
		var object = 
		{		
			id: "2",
			concesionario:"Automoviles Jupiter S.A.",
			cif: "B33345678",
			coches: [
						{ marca:"Kia", modelo:"Picanto", colores : [{color:"red"}, {color:"orange"},{color:"green"}] },
						{ marca:"Mazda", modelo:"X5", colores : [{color:"black"}, {color:"yellow"},{color:"green"}] },
						{ marca:"Hyundai", modelo:"Accent", colores : [{color:"red"}, {color:"yellow"},{color:"black"}] }
					]
		}	
	}
	else if (id == "3") {
		var object = 
		{		
			id: "3",
			concesionario:"Automoviles Saturno S.A.",
			cif: "A12444678",
			coches: [
						{ marca:"Toyota", modelo:"Prius", colores : [{color:"blue"}, {color:"yellow"},{color:"green"}] },
						{ marca:"Audi", modelo:"A3", colores : [{color:"red"}, {color:"grey"},{color:"green"}] },
						{ marca:"Ferrari", modelo:"F40", colores : [{color:"red"}, {color:"blue"},{color:"green"}] }
					]
		}	
	}	
	return object;		
}	