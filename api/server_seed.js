/** 
 *  VisaGuideHN
 * 
 *  Copyright (c) 2014 United Stades Department of State
 *
 *  This product includes software developed by
 *  Acklen Avenue (http://acklenavenue.com).
 *
 *  Project Founder: Zennia Hancock, PhD
 **/

 var express = require('express'),
    fs = require('fs');


//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'production',
    config = require('./config/config'),
    mongoose = require('mongoose');

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
//require(__dirname + '/app/models/question');
require(__dirname + '/app/models/wizard');
require(__dirname + '/app/models/checklist');
require(__dirname + '/app/models/FAQ');
require(__dirname + '/app/models/resource');
Wizard = mongoose.model('Wizard');
//Question = mongoose.model('Question');
Checklist = mongoose.model('Checklist');
FAQ = mongoose.model('Faq');
Resource = mongoose.model('Resource');


var f1 = new FAQ({
    id: 1,
    faqs:[{
        title: "¿Qué hago una vez que haya determinado mi tipo de visa?",
        answer: "Una vez haya determinado el tipo de visa correcto, usted debe pagar la tasa de visa.  Cada solicitante de visa, incluyendo niños, debe pagar una tarifa no reembolsable y no transferible de solicitud de Visa Legible a Máquina (MRV), sea o no emitida la visa. La tarifa de solicitud para la visa está determinada por el tipo de visa a la cual usted desea solicitar."
    },
    {
        title: "¿Debería pedir ayuda para llenar la aplicación de la visa?",
        answer: "La solicitud de visa requiere información confidencial como: la dirección de su casa, números de teléfono, correo electrónico, datos de su pasaporte, y los nombres y fechas de nacimiento de sus padres. Si decide buscar ayuda para llenar la aplicación de visa, esa persona tendrá acceso a toda la información. "
    },
     {
        title: "¿Qué debería hacer si quiero presentar una denuncia sobre un fraude?",
        answer: "Para denuncias de fraude en visas, escríbanos a:  afuhonduras@state.gov o llámenos al 2238-5114 ext 4401. "
    },
    {
        title:"¿Para qué tipo de visa me ayuda esta app?",
        answer:"Acuérdese que este app le ayuda a prepararse para solicitar por primera vez una visa B1/B2, C1/D, F1/M1, o H2A/H2B, pero la solicitud en si se hace a través de la siguiente página de Internet:  http://www.ustraveldocs.com/hn_es.  Si tiene preguntas, llame por ayuda al:  2284-4922 (desde Honduras)."
    }]
});

var r1 = new Resource({
    id: 1,
    resources:[{
        title: 'Solicitud de visa',
        link: 'http://www.ustraveldocs.com/hn_es  También se puede llamar por ayuda al: 2284-4922 '
    },
    {
        title: 'Para los requisitos en cuanto a la foto, mire la sección “Fotos y Huellas Digitales” en la página web',
        link: 'http://www.ustraveldocs.com/hn_es '
    }]
});

/*
var c1 = new Checklist({
    id: 1,
    visaType : "B1/B2",
    items :[{
        title_id : 1,
        title: 'Llevar partida de nacimiento a la entrevista', // en caso de ser si y pasa a la 3 
        tip: 'Al ser menor de edad, lleve su partida de identidad y asista en compañía de sus padres.',
        check: false
    },

    {
        title_id : 2,
        title: 'Realizar el pago de tarifa de solicitud visa con mi tarjeta Visa/MasterCard', // En caso de ser si y pasa a la 12
        tip: 'Al poseer una tarjeta Visa/MasterCard puede realizar el pago sin problema alguno.',
        check: false
    },

    {   title_id : 3,
        title: 'Realizar mi pago de solicitud de visa en linea', // En caso de ser si y pasa a la 12
        tip: 'Puede ingresar en la plataforma NetBanking de Citibank y pagar su tarifa de visa. ',
        check: false
    },
    {   title_id : 4,
        title: 'Realizar mi pago de tarifa de solicitud visa con PayPal',// En caso de ser si y pasa la  12
        tip: 'Al contar con PayPal usted tiene la opcion de realizar su pago de tarifa de visa con dicho servicio.',
        check: false
    },

    {   title_id : 5,
        title: 'Revisar opciones para hacer mi pago de tarifa de visa', // En caso de ser no y pasa a la 12
        tip: 'Las unicas opciones para realizar dicho pago son: Por netbanking de Citibank, PayPal, tarjeta Visa/MasterCard o efectivo en una sucursal de Citibank.',
        check: false
    },

     {  title_id : 6,
        title: 'Poseer pasaporte vigente', // En caso de ser no y pasa a la 13
        tip: 'Verificar si posee pasaporte vigente o en caso de no tener solicitar uno.',
        check: false
    },

     {  title_id : 7,
        title: 'Presentar itinerario del viaje y dirección del hospedaje al momento de la entrevista', // En caso de ser si y pasa a la 14 
        tip: 'Asegurar de tener un itinerario del viaje para dar respaldo al momento de su solicitud de visa.',
        check: false
    },

     {  title_id : 8,
        title: 'Presentar un listado de las ultimas 5 visitas a los Estados Unidos al momento de la entrevista', // En caso de ser si pasa a la 15
        tip: 'Puede revisar su pasaporte para saber la fecha exacta de entrada y salida de los Estados Unidos.',
        check: false
    },

     {  title_id : 9,
        title: 'Presentar un listado de viajes realizados en los ultimos 5 anios', // En caso de ser si y pasa a la 16
        tip: 'Puede revisar su pasaporte para saber la fecha exacta de entrada y salida de sus paises visitados',
        check: false
    },

     {  title_id : 10,
        title: 'Presentar constancia de trabajo al momento de la entrevista', // En caso de ser si pasa a la 17
        tip: 'Puede solicitar su constancia de trabajo en la empresa en que labora.',
        check: false
    },

     {  title_id : 11,
        title: 'Presentar constancia de estudios', // En caso de ser si pasar a la 18
        tip: 'Puede solicitar su constancia de estudios en el instituto donde estudia.',
        check: false
    },

     {  title_id : 12,
        title: 'Tener a mano su número de identificación de SEVIS, que se encuentra en el Formulario I-20A, I-20B, I-20MN, or DS-2019. En el mismo formulario está la dirección de su universidad en los EE.UU. ', // En caso de ser si pasar a la 20
        tip: 'Recurrir a los links de ayuda brindados por la aplicacion por si presenta alguna duda',
        check: false
    },

    {  title_id : 13,
        title: 'Constancia de trabajo del esposo u encargado de su manuntencion', // En caso de ser si pasar a la 20
        tip: 'La persona encargada puede solicitar la constancia en el lugar donde labora.',
        check: false
    },

    {  title_id : 14,
        title: 'Traer sus documentos financieros a la entrevista(Escrituras de terreno, evidencia de alquiler) ', // En caso de ser no pasar a la 21
        tip: 'Puede solicitar dichos documentos con abogados, bancos, encargado de brindar el servicio de alquiler,...etc',
        check: false
    },

    {  title_id : 15,
        title: 'Presentar constancia de cuenta bancaria', // pertenece al mismo id 14 En caso de ser si pasar a la pregunta 21
        tip: 'Puede solicitar su constancia bancaria con el banco al cual es afiliado.',
        check: false
    },

    {  title_id : 16,
        title: 'Llevar copia de petición I-129', // En caso de ser si pasar a la pregunta 23
        tip: 'Tenga a mano una copia de la petición I-129 cuando llene la solicitud para la visa. También le conviene llevarla a la entrevista. ',
        check: false
    },

    {  title_id : 17,
        title: 'Presentar licencia de marinero/a, libreta de marinero/a, certificados de cursos de marinero/a', // En caso de ser si pasa a la 23 
        tip: 'Verificar que todos sus documentos esten en regla y vigentes',
        check: false
    },

    {  title_id : 18,
        title: 'Verificar que mi fotografía cumpla los requisitos requeridos' , // En caso de ser no pasar a la pregunta 24
        tip: 'Puede guiarse con los links externos brindados en la aplicacion',
        check: false
    },
    
    {  title_id : 19,
        title: 'Verificar que mi fotografía cumpla los requisitos requeridos' , // En caso de ser no pasar a la pregunta 24
        tip: 'Puede guiarse con los links externos brindados en la aplicacion',
        check: false
    },

    {  title_id : 20,
        title: 'No olvidar los documentos requeridos por cada miembro de la familia', // En caso de ser si pasar a mostrar el checklist 
        tip: 'Puede realizar la encuesta de esta aplicacion por cada miembro de su familia y darse una idea de lo necesario para cada miembro.,',
        check: false
    }

    ]
 });
/*
 var c2 = new Checklist({
    id: 2,
    visaType :'B1/B2',
    items :[{
        title_id : 4
        title: 'Examen de sangre',
        tip: 'You should have your passport picures.',
        check: false
    },
    {   title_id : 4
        title: 'Itinerario de viaje',
        tip: 'If do not have the president signature you can not get your visa',
        check: false
    },
    {
        title_id : 4
        title: 'Carta de invitacion',
        tip: 'This involves asking your mother for permission to leave the country. Without her blessing, it would be very difficult to leave in peace. Go to your mother and ask her if it is ok for you to leave the country. If she says yes, find the President and tell him',
        check: false
    },
    {
        title_id : 4
        title: 'Examen Fisico',
        tip: 'Go for it!',
        check: false
    }
    ]
});

var c3 = new Checklist({
    id: 3,
    visaType :'C1',
    items :[{
        title: 'Permiso firmado de los padres',
        tip: 'You should have your passport picures.',
        check: false
    },
    {
        title: 'Certificado de estudios',
        tip: 'If do not have the president signature you can not get your visa',
        check: false
    },
    {
        title: 'Comprobante de pagos universitarios',
        tip: 'This involves asking your mother for permission to leave the country. Without her blessing, it would be very difficult to leave in peace. Go to your mother and ask her if it is ok for you to leave the country. If she says yes, find the President and tell him',
        check: false
    },
    {
        title: 'Confirmate de fondos',
        tip: 'Go for it!',
        check: false
    }
    ]
});

var c4 = new Checklist({
    id: 4,
    visaType :'F1-Academica',
    items :[{
        title: 'Pasaporte',
        tip: 'You should have your passport picures.',
        check: false
    },
    {
        title: 'Carta de invitacion de la institucion',
        tip: 'If do not have the president signature you can not get your visa',
        check: false
    },
    {
        title: 'Acta de defuncion del pariente',
        tip: 'This involves asking your mother for permission to leave the country. Without her blessing, it would be very difficult to leave in peace. Go to your mother and ask her if it is ok for you to leave the country. If she says yes, find the President and tell him',
        check: false
    },
    {
        title: 'Comprobantes medicos',
        tip: 'Go for it!',
        check: false
    }
    ]
});

var c5 = new Checklist({
    id: 5,
    visaType :'M1-Vocacional',
    items :[{
        title: 'Listado de productos a comerciar',
        tip: 'You should have your passport picures.',
        check: false
    },
    {
        title: 'Permiso legal del menor de edad',
        tip: 'If do not have the president signature you can not get your visa',
        check: false
    },
    {
        title: 'Listado de productos a importar',
        tip: 'This involves asking your mother for permission to leave the country. Without her blessing, it would be very difficult to leave in peace. Go to your mother and ask her if it is ok for you to leave the country. If she says yes, find the President and tell him',
        check: false
    },
    {
        title: 'Constancia de trabajo',
        tip: 'Go for it!',
        check: false
    }
    ]
});

var c6 = new Checklist({
    id: 6,
    visaType :'H2A & H2B',
    items :[{
        title: 'Permiso de la empresa',
        tip: 'You should have your passport picures.',
        check: false
    },
    {
        title: 'Constancia medica',
        tip: 'If do not have the president signature you can not get your visa',
        check: false
    },
    {
        title: 'Maletas listas',
        tip: 'This involves asking your mother for permission to leave the country. Without her blessing, it would be very difficult to leave in peace. Go to your mother and ask her if it is ok for you to leave the country. If she says yes, find the President and tell him',
        check: false
    },
    {
        title: 'Examen TOEFL con minimo 80%',
        tip: 'Go for it!',
        check: false
    }
    ]});
*/

var w1 = new Wizard(
    {
        id : 1,
        questions: [
            {
                id : 1,
                title : '¿Por qué quiere viajar a los EE.UU.?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Turismo',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 2,
                        title: 'Para visitar a un amigo/un pariente',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 3,
                        title: 'Por razones de negocios',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 4,
                        title: 'Para hacer una capacitación',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 5,
                        title: 'Para participar en un evento/asistir a un congreso',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 6,
                        title: 'Por razones médicas',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'B1/B2 con un valor de $160.00'
                    },
                    {
                        id: 7,
                        title: 'Para poder viajar a otro país',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'C1 con un valor de $160.00'

                    },
                    {
                        id: 8,
                        title: 'Por que soy marinero/a',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'C1/D con un valor de $160.00'
                    },
                    {
                        id: 9,
                        title: 'Para estudiar/aprender algo',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'F1-académico & M1-vocacional con un valor de $160.00'
                    },
                    {
                        id: 10,
                        title: 'Para trabajar de obrero',
                        tip: '',
                        antitip: '',
                        next_question: 2,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: 'H2A & H2B con un valor de $190.00'
                    },
                    {
                        id: 11,
                        title: 'Otra razón',
                        tip: 'Esta aplicación no abarca todas las clases de visa.  Recomendamos que visite esta página de Internet para más información:  http://cdn.ustraveldocs.com/hn',
                        antitip: '',
                        next_question: -1,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 2,
                title : '¿Es usted menor de edad?',
                tip : 'Todo solicitante menor de 21 años debe presentar su Partida de Nacimiento original y  presentarse con ambos padres biológicos a la entrevista.',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Todo solicitante menor de 21 años debe presentar su Partida de Nacimiento original y  presentarse con ambos padres biológicos a la entrevista.  En cualquier otra situación, puede comunicarse con un representante de servicio al cliente al 2284-4922.  El horario es las 8:00 am hasta las 7:00 pm lunes a viernes, y desde las 9:00 am hasta las 3:00 pm los sábados.',
                        antitip: '',
                        next_question: 3,
                        checklist_id: -1,
                        checklist: {
                            title: 'Llevar partida de nacimiento a la entrevista', // en caso de ser si y pasa a la 3 
                            tip: 'Al ser menor de edad, lleve su partida de identidad y asista en compañía de sus padres.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 3,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 3,
                title : '¿Es usted hondureño?',
                tip : 'El Programa de Extensión de Visas (Visa Waiver Program - VWP) permite a los ciudadanos de algunos países viajar a los Estados Unidos por turismo o negocios (objetivo de las visas de visitante) para estadías de 90 días o menos sin necesidad de obtener una visa. No todos los países participan en el VWP (por ejemplo, El Salvador, Guatemala, y Nicaragua).',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: '',
                        antitip: '',
                        next_question: 4,
                        checklist_id: -1,
                        checklist:{},
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'El Programa de Extensión de Visas (Visa Waiver Program - VWP) permite a los ciudadanos de algunos países viajar a los Estados Unidos por turismo o negocios (objetivo de las visas de visitante) para estadías de 90 días o menos sin necesidad de obtener una visa. No todos los países participan en el VWP (por ejemplo, El Salvador, Guatemala, y Nicaragua).  Si tiene alguna duda, revise esta página para ver si su país participa: http://travel.state.gov/visa/temp/without/without_1990.html',
                        antitip: '',
                        next_question: 4,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 4,
                title : '¿Tiene usted tarjeta de crédito Visa o MasterCard?',
                tip : 'Se puede realizar el pago con tarjeta de crédito (Visa o MasterCard solamente), en la página de Internet.',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Puede realizar el pago en línea al poseer tarjeta.',
                        antitip: '',
                        next_question: 5,
                        checklist_id: -1,
                        checklist:{
                            title: 'Realizar el pago de tarifa de solicitud visa con mi tarjeta Visa/MasterCard', // En caso de ser si y pasa a la 12
                            tip: 'Al poseer una tarjeta Visa/MasterCard puede realizar el pago sin problema alguno.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: ' ',
                        antitip: '',
                        next_question: 5,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            
            {
                id : 5,
                title : '¿Es usted cliente de Citibank Honduras?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Puede ingresar en la plataforma NetBanking de Citibank y pagar su tarifa de visa.',
                        antitip: '',
                        next_question: 6,
                        checklist_id: -1,
                        checklist: {
                            title: 'Realizar mi pago de solicitud de visa en línea', // En caso de ser si y pasa a la 12
                            tip: 'Puede ingresar en la plataforma NetBanking de Citibank y pagar su tarifa de visa. ',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 6,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]

            },
            {
                id : 6,
                title : '¿Usted usa PayPal?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Puede usar su cuenta de PayPal para pagar la tarifa.',
                        antitip: '',
                        next_question: 7,
                        checklist_id: -1,
                        checklist: {
                            title: 'Realizar mi pago de tarifa de solicitud visa con PayPal',// En caso de ser si y pasa la  12
                            tip: 'Al contar con PayPal usted tiene la opción de realizar su pago de tarifa de visa con dicho servicio.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 7,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 7,
                title : '¿Hay una sucursal de Citibank cerca de donde vive?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Usted puede pagar en efectivo la tarifa para la solicitud de visa de no inmigrante en Citibank Honduras. Antes de ir a la sucursal, usted debe imprimir la boleta de pago que es aplicable para la solicitud de visa, la cual se encuentra disponible cuando haga la solicitud por la página de Internet:  http://www.ustraveldocs.com/hn_es .',
                        antitip: '',
                        next_question: 8,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'Las únicas opciones para pagar la tarifa de la visa son por tarjeta de crédito, por NetBanking de Citibank, por PayPal, o por efectivo en una sucursal  de Citibank.  ',
                        antitip: '',
                        next_question: 8,
                        checklist_id: -1,
                        checklist: {
                            title: 'Revisar opciones para hacer mi pago de tarifa de visa', // En caso de ser no y pasa a la 12
                            tip: 'Las únicas opciones para realizar dicho pago son: Por netbanking de Citibank, PayPal, tarjeta Visa/MasterCard o efectivo en una sucursal de Citibank.',
                            check: false
                        },
                        visa_type: ''
                    }
                ]
            },
            {
                id : 8,
                title : '¿Tiene usted un pasaporte con al menos seis meses de vigencia?',
                tip : 'Es necesario que tenga pasaporte con por lo menos seis meses de vigencia, si quiere solicitar una visa y viajar a los EE.UU.',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: '',
                        antitip: 'El pasaporte es un documento personal. No se lo entregue a nadie.',
                        next_question: 9,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'Es necesario que tenga pasaporte con por lo menos seis meses de vigencia, si quiere solicitar una visa y viajar a los EE.UU.',
                        antitip: 'El pasaporte es un documento personal. No se lo entregue a nadie.',
                        next_question: 9,
                        checklist_id: -1,
                        checklist: {
                            title: 'Poseer pasaporte vigente', // En caso de ser no y pasa a la 13
                            tip: 'Verificar si posee pasaporte vigente o en caso de no tener solicitar uno.',
                            check: false
                        },
                        visa_type: ''
                    }
                ]
            },
            {
                id : 9,
                title : '¿Sabe adónde va a viajar?',
                tip : 'No es necesario ni tener un itinerario ni comprar boletos ahora mismo, pero es mejor que usted sepa adónde va a viajar antes de solicitar la visa.',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: '',
                        antitip: 'No crea las historias de los demás, siempre diga la verdad en su formulario.',
                        next_question: 10,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'No es necesario ni tener un itinerario ni comprar boletos ahora mismo, pero es mejor que usted sepa adónde va a viajar antes de solicitar la visa. También debe saber la dirección del lugar donde se va a alojar durante su estancia.',
                        antitip: '¿Tiene familia ilegal en los Estados Unidos?  Usted puede calificar para una visa por sus propios méritos.',
                        next_question: 10,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar itinerario del viaje y dirección del hospedaje al momento de la entrevista', // En caso de ser si y pasa a la 14 
                            tip: 'Asegurar de tener un itinerario del viaje para dar respaldo al momento de su solicitud de visa.',
                            check: false
                        },
                        visa_type: ''
                    }
                ]
            },
            {
                id : 10,
                title : '¿Usted ya ha visitado los EE.UU.?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Antes de solicitar la visa, tiene que hacer una lista de las fechas (entradas y salidas) de sus viajes anteriores a los EE.UU. Incluya las fechas para las últimas CINCO visitas.',
                        antitip: '',
                        next_question: 11,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar un listado de las ultimas 5 visitas a los Estados Unidos al momento de la entrevista', // En caso de ser si pasa a la 15
                            tip: 'Puede revisar su pasaporte para saber la fecha exacta de entrada y salida de los Estados Unidos.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 11,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 11,
                title : '¿Ha visitado otros países?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: '¿Cuáles? Haga una lista de los países que ha visitado durante los últimos cinco años.',
                        antitip: '',
                        next_question: 12,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar un listado de viajes realizados en los últimos 5 años', // En caso de ser si y pasa a la 16
                            tip: 'Puede revisar su pasaporte para saber la fecha exacta de entrada y salida de sus países visitados',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 12,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            
            {
                id : 12,
                title : '¿Usted trabaja?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'La solicitud para la visa le pide dónde trabaja, el cargo que ocupa, la dirección de la compañía, y su sueldo.  Acuérdese de traer su constancia de trabajo a la entrevista.',
                        antitip: 'Mentir o presentar documentos falsos puede ser penalizado por las leyes hondureñas y  negarle la entrada permanentemente a los Estados Unidos. Nadie le puede cobrar por una visa de trabajo. ',
                        next_question: 13,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar constancia de trabajo al momento de la entrevista', // En caso de ser si pasa a la 17
                            tip: 'Puede solicitar su constancia de trabajo en la empresa en que labora.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'Nadie le puede cobrar por una visa de trabajo.',
                        antitip: '',
                        next_question: 13,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 13,
                title : '¿Es estudiante?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'La solicitud para la visa le pide el nombre y la dirección de su escuela/universidad. Acuérdese de traer su constancia de estudios a la entrevista.',
                        antitip: '',
                        next_question: 14,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar constancia de estudios', // En caso de ser si pasar a la 18
                            tip: 'Puede solicitar su constancia de estudios en el instituto donde estudia.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 15,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 14,
                title : '¿Va a estudiar en los EE.UU.?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'A la hora de llenar la solicitud para la visa, tenga a mano su número de identificación de SEVIS, que se encuentra en el Formulario I-20A, I-20B, I-20MN, o DS-2019.  En el mismo formulario está la dirección de su universidad en los EE.UU.',
                        antitip: '',
                        next_question: 16,
                        checklist_id: -1,
                        checklist: {
                            title: 'Tener a mano su número de identificación de SEVIS, que se encuentra en el Formulario I-20A, I-20B, I-20MN, o DS-2019. En el mismo formulario está la dirección de su universidad en los EE.UU. ', // En caso de ser si pasar a la 20
                            tip: 'Recurrir a los links de ayuda brindados por la aplicación por si presenta alguna duda',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 15,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 15,
                title : '¿Es ama de casa?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Acuérdese de traer la constancia de trabajo de su esposo a la entrevista.',
                        antitip: 'Mentir o presentar documentos falsos puede ser penalizado por las leyes hondureñas y  negarle la entrada permanentemente a los Estados Unidos.',
                        next_question: 16,
                        checklist_id: -1,
                        checklist: {
                            title: 'Constancia de trabajo del esposo u encargado de su manutención', // En caso de ser si pasar a la 20
                            tip: 'La persona encargada puede solicitar la constancia en el lugar donde labora.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '',
                        next_question: 16,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 16,
                title : '¿Tiene cuenta bancaria?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Acuérdese de traer su constancia de banco a la entrevista.',
                        antitip: 'Mentir o presentar documentos falsos puede ser penalizado por las leyes hondureñas y  negarle la entrada permanentemente a los Estados Unidos.',
                        next_question: 17,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar constancia de cuenta bancaria', // pertenece al mismo id 14 En caso de ser si pasar a la pregunta 21
                            tip: 'Puede solicitar su constancia bancaria con el banco al cual es afiliado.',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'Si no tiene constancia de banco, le conviene traer sus documentos financieros a la entrevista (escrituras de terreno, evidencia de alquileres, etc.). ',
                        antitip: 'Mentir o presentar documentos falsos puede ser penalizado por las leyes hondureñas y  negarle la entrada permanentemente a los Estados Unidos.',
                        next_question: 17,
                        checklist_id: -1,
                        checklist: {
                            title: 'Traer sus documentos financieros a la entrevista(Escrituras de terreno, evidencia de alquiler).', // En caso de ser no pasar a la 21
                            tip: 'Puede solicitar dichos documentos con abogados, bancos, encargado de brindar el servicio de alquiler,...etc.',
                            check: false
                        },
                        visa_type: ''
                    }
                ]
            },
            {
                id : 17,
                title : '¿Usted va a los EE.UU para trabajar de obrero?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Tenga a mano una copia de la petición I-129 cuando llene la solicitud para la visa. También le conviene llevarla a la entrevista.',
                        antitip: 'Mentir o presentar documentos falsos puede ser penalizado por las leyes hondureñas y  negarle la entrada permanentemente a los Estados Unidos. Nadie le puede cobrar por una visa de trabajo. ',
                        next_question: 19,
                        checklist_id: -1,
                        checklist: {
                            title: 'Llevar copia de petición I-129', // En caso de ser si pasar a la pregunta 23
                            tip: 'Tenga a mano una copia de la petición I-129 cuando llene la solicitud para la visa. También le conviene llevarla a la entrevista. ',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: 'Nadie le puede cobrar por una visa de trabajo. ',
                        next_question: 18,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 18,
                title : '¿Usted va  a los EE.UU. para trabajar de marinero/a (marino/a)?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title : 'Sí',
                        tip: 'Los marineros/as deben llevar los documentos siguientes a la entrevista:  Licencia de marinero/a; libreta de marinero/a; certificados de cursos de marinero/a. Nadie le puede cobrar por una visa de trabajo. ',
                        antitip: '',
                        next_question: 19,
                        checklist_id: -1,
                        checklist: {
                            title: 'Presentar licencia de marinero/a, libreta de marinero/a, certificados de cursos de marinero/a', // En caso de ser si pasa a la 23 
                            tip: 'Verificar que todos sus documentos estén en regla y vigentes',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title : 'No',
                        tip: '',
                        antitip: 'Nadie le puede cobrar por una visa de trabajo. ',
                        next_question: 19,
                        checklist_id: -1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
            {
                id : 19,
                title : '¿Ya tiene una fotografía digital para subir a la solicitud para la visa?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Acuérdese que la fotografía debe cumplir con ciertos criterios en cuanto a tamaño y contenido, y debe haber sido tomada dentro de los últimos seis meses.  Para los requisitos en cuanto a la foto, mire la sección “Fotos y Huellas Digitales” en la página web http://www.ustraveldocs.com/hn_es.',
                        antitip: '',
                        next_question: 20,
                        checklist_id: -1,
                        checklist: {
                            title: 'Verificar que mi fotografía cumpla los requisitos requeridos' , // En caso de ser no pasar a la pregunta 24
                            tip: 'Puede guiarse con los links externos brindados en la aplicación',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: 'Al solicitar la visa, usted debe subir al Formulario DS-160 (la solicitud para la visa) una fotografía digital tomada dentro de los últimos seis meses. Usted debe traer una copia de su fotografía a la Embajada el día de su cita.  Para los requisitos en cuanto a la foto, mire la sección “Fotos y Huellas Digitales” en la página web http://www.ustraveldocs.com/hn_es.',
                        antitip: '',
                        next_question: 20,
                        checklist_id: -1,
                        checklist: {
                            title: 'Verificar que mi fotografía cumpla los requisitos requeridos' , // En caso de ser no pasar a la pregunta 24
                            tip: 'Puede guiarse con los links externos brindados en la aplicación',
                            check: false
                        },
                        visa_type: ''
                    }
                ]
            },
            {
                id : 20,
                title : '¿Solicitará la visa con su familia?',
                tip : '',
                answers : [
                    {
                        id: 1,
                        title: 'Sí',
                        tip: 'Acuérdese de llevar los documentos requeridos para cada persona.',
                        antitip: '',
                        next_question: 0,
                        checklist_id: 1,
                        check:{
                            title: 'No olvidar los documentos requeridos por cada miembro de la familia', // En caso de ser si pasar a mostrar el checklist 
                            tip: 'Puede realizar la encuesta de esta aplicación por cada miembro de su familia y darse una idea de lo necesario para cada miembro.,',
                            check: false
                        },
                        visa_type: ''
                    },
                    {
                        id: 2,
                        title: 'No',
                        tip: '',
                        antitip: '¿Soltero? Su estado civil no determina si califica para una visa.',
                        next_question: 0,
                        checklist_id: 1,
                        checklist: {},
                        visa_type: ''
                    }
                ]
            },
        ]
    }
);



  w1.save(function(err, result) {
        if (err) {
          console.log('Error:' + err);
            }
        else {
            console.log('Result:' + result);
        }
    } );

 
var app = express();
//Start the app by listening on <port>
var port = config.port;
app.listen(port);
console.log('Express app started on port ' + port);