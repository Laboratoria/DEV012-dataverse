import { dataOrdenadaZA, dataOrdenadaAZ, filtrarDatos } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filtrarDatos', () => {
  it('devuelve todos los datos si selectedValue es "Todos los productos"', () => {
    const selectedValue = 'Todos los productos';
    const resultado = filtrarDatos(fakeData, selectedValue);
    expect(resultado).toEqual(fakeData);
  });

  it('devuelve datos filtrados según la Clasificación si selectedValue NO es "Todos los productos"', () => {
    const selectedValue = fakeData.filter(element => element.clasificacion);
    const resultado = filtrarDatos(fakeData, selectedValue);
    const datosEsperados = fakeData.filter(element => element.clasificacion === selectedValue);
    expect(resultado).toEqual(datosEsperados);
  });
  it('devuelves 3 elementos clasificados como Antidiabéticos', () => {
    const selectedValue = "Antidiabética";
    const resultado = filtrarDatos(fakeData, selectedValue);
    expect(resultado.length).toBe(3);
  });//debe regresar x cantidad de elementos para x filtro
  it('devuelves 2 elementos clasificados como Emenagogos', () => {
    const selectedValue = "Emenagoga";
    const resultado = filtrarDatos(fakeData, selectedValue);
    expect(resultado.length).toBe(2);
  });
});



describe('Ordenar alfabétcamente de la A-Z', () => {

  it('Esta función debe ordenar la data de la A - Z', () => {
    expect(dataOrdenadaAZ(fakeData)).toEqual([{
      "planta": "Copalchi",
      "id": "1",
      "name": "Copalchi",
      "nombreCientifico": "Croton ciliatoglandulifer",
      "clasificacion": "Antidiabética",
      "shortDescription": "Antidiabético natural",
      "description": "El Copalchi es una planta endémica de México conocida por sus propiedades Antidiabéticas. Sus hojas se utilizan en infusiones tradicionales para ayudar a controlar los niveles de azúcar en la sangre. También se ha empleado en el tratamiento de problemas gastrointestinales. Sus compuestos activos pueden contribuir a la regulación de la glucosa en pacientes con diabetes.",
      "imageUrl": "./images/copachi.jpg",
      "facts": {
        "organoBeneficiado": "Sistema endocrino",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Sonora",
        "precioKgMxn": 260.00
      },
      "extraInfo": {
        "imageSource": "./images/copachi.jpg"
      }
    },
    {
      "planta": "Damiana",
      "id": "5",
      "name": "Damiana",
      "nombreCientifico": "Turnera diffusa",
      "clasificacion": "Emenagoga",
      "shortDescription": "Estimulante y afrodisíaco",
      "description": "La Damiana es una planta endémica de México conocida por sus propiedades afrodisíacas y estimulantes. Se ha utilizado para aumentar la energía y mejorar la función sexual. Además, se cree que puede tener beneficios para el sistema nervioso.",
      "imageUrl": "./images/5.turneraDiffusa.jpg",
      "facts": {
        "organoBeneficiado": "Sistema nervioso",
        "clasificacion": "Emenagoga",
        "estadoProductor": "Morelos",
        "precioKgMxn": 640.00
      },
      "extraInfo": {
        "imageSource": "/src/images/5.turneraDiffusa.jpg"
      }
    },
    {
      "planta": "Nopal",
      "id": "2",
      "name": "Nopal",
      "nombreCientifico": "Opuntia ficus-indica",
      "clasificacion": "Antidiabética",
      "shortDescription": "Superalimento mexicano",
      "description": "El Nopal es un cactus endémico de México y es considerado un superalimento. Sus pads son ricos en fibras y antioxidantes, y se ha utilizado tradicionalmente para controlar los niveles de azúcar en la sangre y mejorar la salud digestiva. Además, se cree que tiene propiedades antiinflamatorias y puede ayudar en la gestión de la diabetes.",
      "imageUrl": "./images/2.nopal.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Zacatecas",
        "precioKgMxn": 49.90
      },
      "extraInfo": {
        "imageSource": "/src/images/2.nopal.jpg"
      }
    },
    {
      "planta": "Tlanchalagua",
      "id": "4",
      "name": "Tlanchalagua",
      "nombreCientifico": "Gochnatia hypoleuca",
      "clasificacion": "Emenagoga",
      "shortDescription": "Herbolaria tradicional mexicana",
      "description": "La Tlanchalagua es una planta endémica de México con un uso tradicional en la herbolaria mexicana. Se ha empleado para aliviar afecciones gastrointestinales y su capacidad para ayudar en la digestión. Sus propiedades medicinales la hacen valiosa en la medicina tradicional mexicana.",
      "imageUrl": "./images/4.tlanchalagua.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Emenagoga",
        "estadoProductor": "Oaxaca",
        "precioKgMxn": 480.00
      },
      "extraInfo": {
        "imageSource": "/src/images/3.yacon.jpg"
      }
    },
    {
      "planta": "Yacon",
      "id": "3",
      "name": "Yacon",
      "nombreCientifico": "Smallanthus sonchifolius",
      "clasificacion": "Antidiabética",
      "shortDescription": "Endulzante natural y regulador glucémico",
      "description": "El Yacon es una planta endémica de México conocida por sus raíces dulces y bajas en calorías. Además de ser un endulzante natural, se ha estudiado por sus posibles efectos en la regulación de la glucosa en la sangre y la pérdida de peso. Sus fructooligosacáridos pueden beneficiar a las personas con diabetes y promover la salud digestiva.",
      "imageUrl": "./images/3.yacon.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Puebla",
        "precioKgMxn": 1700.00
      },
      "extraInfo": {
        "imageSource": "/src/images/3.yacon.jpg"
      }
    },

    ]);
  });
  it('Esta función debe mostrar una longitud de 5 elementos', () => {
    expect(fakeData.length).toBe(5); //  la longitud de fakeData debe ser 5 
  });
  it('La función dataOrdenadaAZ debe estar definida', () => {
    expect(dataOrdenadaAZ).toBeDefined()
  });
  it('ELa función dataOrdenadaAZ debe ser una función', () => {
    expect(typeof dataOrdenadaAZ).toBe('function')
  });

});

describe('Ordenar alfabétcamente de la Z-A', () => {

  it('Esta función debe ordenar la data de la Z-A', () => {
    expect(dataOrdenadaZA(fakeData)).toEqual([{
      "planta": "Yacon",
      "id": "3",
      "name": "Yacon",
      "nombreCientifico": "Smallanthus sonchifolius",
      "clasificacion": "Antidiabética",
      "shortDescription": "Endulzante natural y regulador glucémico",
      "description": "El Yacon es una planta endémica de México conocida por sus raíces dulces y bajas en calorías. Además de ser un endulzante natural, se ha estudiado por sus posibles efectos en la regulación de la glucosa en la sangre y la pérdida de peso. Sus fructooligosacáridos pueden beneficiar a las personas con diabetes y promover la salud digestiva.",
      "imageUrl": "./images/3.yacon.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Puebla",
        "precioKgMxn": 1700.00
      },
      "extraInfo": {
        "imageSource": "/src/images/3.yacon.jpg"
      }
    },
    {
      "planta": "Tlanchalagua",
      "id": "4",
      "name": "Tlanchalagua",
      "nombreCientifico": "Gochnatia hypoleuca",
      "clasificacion": "Emenagoga",
      "shortDescription": "Herbolaria tradicional mexicana",
      "description": "La Tlanchalagua es una planta endémica de México con un uso tradicional en la herbolaria mexicana. Se ha empleado para aliviar afecciones gastrointestinales y su capacidad para ayudar en la digestión. Sus propiedades medicinales la hacen valiosa en la medicina tradicional mexicana.",
      "imageUrl": "./images/4.tlanchalagua.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Emenagoga",
        "estadoProductor": "Oaxaca",
        "precioKgMxn": 480.00
      },
      "extraInfo": {
        "imageSource": "/src/images/3.yacon.jpg"
      }
    },
    {
      "planta": "Nopal",
      "id": "2",
      "name": "Nopal",
      "nombreCientifico": "Opuntia ficus-indica",
      "clasificacion": "Antidiabética",
      "shortDescription": "Superalimento mexicano",
      "description": "El Nopal es un cactus endémico de México y es considerado un superalimento. Sus pads son ricos en fibras y antioxidantes, y se ha utilizado tradicionalmente para controlar los niveles de azúcar en la sangre y mejorar la salud digestiva. Además, se cree que tiene propiedades antiinflamatorias y puede ayudar en la gestión de la diabetes.",
      "imageUrl": "./images/2.nopal.jpg",
      "facts": {
        "organoBeneficiado": "Sistema digestivo",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Zacatecas",
        "precioKgMxn": 49.90
      },
      "extraInfo": {
        "imageSource": "/src/images/2.nopal.jpg"
      }
    },
    {
      "planta": "Damiana",
      "id": "5",
      "name": "Damiana",
      "nombreCientifico": "Turnera diffusa",
      "clasificacion": "Emenagoga",
      "shortDescription": "Estimulante y afrodisíaco",
      "description": "La Damiana es una planta endémica de México conocida por sus propiedades afrodisíacas y estimulantes. Se ha utilizado para aumentar la energía y mejorar la función sexual. Además, se cree que puede tener beneficios para el sistema nervioso.",
      "imageUrl": "./images/5.turneraDiffusa.jpg",
      "facts": {
        "organoBeneficiado": "Sistema nervioso",
        "clasificacion": "Emenagoga",
        "estadoProductor": "Morelos",
        "precioKgMxn": 640.00
      },
      "extraInfo": {
        "imageSource": "/src/images/5.turneraDiffusa.jpg"
      }
    },
    {
      "planta": "Copalchi",
      "id": "1",
      "name": "Copalchi",
      "nombreCientifico": "Croton ciliatoglandulifer",
      "clasificacion": "Antidiabética",
      "shortDescription": "Antidiabético natural",
      "description": "El Copalchi es una planta endémica de México conocida por sus propiedades Antidiabéticas. Sus hojas se utilizan en infusiones tradicionales para ayudar a controlar los niveles de azúcar en la sangre. También se ha empleado en el tratamiento de problemas gastrointestinales. Sus compuestos activos pueden contribuir a la regulación de la glucosa en pacientes con diabetes.",
      "imageUrl": "./images/copachi.jpg",
      "facts": {
        "organoBeneficiado": "Sistema endocrino",
        "clasificacion": "Antidiabética",
        "estadoProductor": "Sonora",
        "precioKgMxn": 260.00
      },
      "extraInfo": {
        "imageSource": "./images/copachi.jpg"
      }
    },

    ]);
  });
  it('Esta función debe mostrar una longitud de 5 elementos', () => {
    expect(fakeData.length).toBe(5); // Verifica la longitud de fakeData
  });
  it('La función dataOrdenadaAZ debe estar definida', () => {
    expect(dataOrdenadaAZ).toBeDefined()
  });
  it('ELa función dataOrdenadaAZ debe ser una función', () => {
    expect(typeof dataOrdenadaAZ).toBe('function')
  });
});
