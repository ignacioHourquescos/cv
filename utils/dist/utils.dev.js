"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var portfolio = [///HSR ABOGADOS
{
  color: "INSITUTIONAL WEB",
  title: {
    es: "ESTUDIO DE ABOGADOS",
    en: "Mayorista El Fuerte"
  },
  type: {
    es: "Web design",
    en: "Web design"
  },
  desc: {
    es: "Web Institucional para firma de abogados. ",
    en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
    pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos"
  },
  link: "https://www.mayoristaelfuerte.com",
  img: "/HSRCEL.png",
  // icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
  icons: ["node", "html"],
  postion: 1
}, ///RENOVAPP
{
  padding: "14rem",
  title: {
    es: "PANEL DE CONTROL A MEDIDA",
    en: "Mayorista El Fuerte",
    pt: "Mayorista El Fuerte"
  },
  type: {
    es: "Web design",
    en: "Web design",
    pt: "Web design"
  },
  desc: {
    es: "Se desarollo una aplicacion web para mostrar los principales indicadores del negocio en tiempo real, e incluir algunos aspectos relacionasdos con inventario e informaciond e clietnes ",
    en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
    pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos"
  },
  link: "https://www.mayoristaelfuerte.com",
  img: "/renovapp.png",
  // icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
  icons: ["node", "html"],
  color: "WEBAPP",
  postion: 1
}, ///ELFUERTE
{
  title: {
    es: "MAYORISTA DE ALIMENTOS ",
    en: "Mayorista El Fuerte",
    pt: "Mayorista El Fuerte"
  },
  type: {
    es: "Web design",
    en: "Web design",
    pt: "Web design"
  },
  desc: {
    es: "Web para distribuidora mayorista. Se hizo foco en el diseño de un sistema de lista de precios agiles",
    en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
    pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos"
  },
  link: "https://www.mayoristaelfuerte.com",
  img: "/elfuerte.png",
  // icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
  icons: ["node", "html"],
  color: "DYNAMIC WEB",
  postion: 1
}, //CAMARA
{
  title: {
    es: "CAMARA DE GASTRONOMICA ",
    en: "Gastronomic Chamber ",
    pt: "Câmara Gastronomica "
  },
  type: {
    es: "web Design",
    en: "web Design",
    pt: "web Design"
  },
  desc: {
    es: "Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de compartir información para mejorar la competitividad del sector",
    en: "First phase of a long term plan which seekes to group gastonomic agents which share information in order to improve competitiveness",
    pt: "Primeira etapa do projeto que reúne agentes gastronômicos com o objetivo de compartilhar informações para melhorar a competitividade do setor"
  },
  link: "https://camaraquilmes.netlify.app",
  img: "/camara2.png",
  icons: ["node", "html"],
  color: "WEB",
  postion: 1
}, //RENOVA
{
  title: {
    es: "DISTRIBUIDORA AUTOPARTES",
    en: "Car Wholesaler",
    pt: "Distribuidor autopeças"
  },
  type: {
    es: "web App"
  },
  desc: {
    es: "A partir de un sistema de gestión en SQL, se hizo una conexión via Node.js, generando una vista web para mostrar precios y stock de manera dinámica",
    en: "Web view for ERP software based on SQL. Using Node.js a friendly interface was built for clients to access key information",
    pt: "A partir de um sistema de gestão em SQL, se fez uma conexão via Node.js, gerando uma vista web para mostrar preços e estoque de forma dinâmica"
  },
  link: "https://listasrenova.netlify.app/views/html/indexofertas.html",
  img: "/renova.png",
  icons: ["node", "html"],
  color: "WEBAPP",
  postion: 1
}, //lIBRERIA 770
{
  title: {
    es: "OFFICE SUPPLIES",
    en: "Office supplies Wholesaler",
    pt: "Livrería de atacado "
  },
  type: {
    es: "Web Design"
  },
  desc: {
    es: "Web comercial para librería. Se armaron secciones de ofertas de productos puntuales para diferentes tipos de clientes",
    en: "Commercial web for office supplies company. Specific section were designed for different tpo of clients",
    pt: "Site comercial para livraría. Seções de ofertas de produtos específicos foram disenhadas para diferentes tipos de clientes"
  },
  link: "https://www.libreria770.com",
  img: "/libreria770.png",
  icons: ["node", "html"],
  color: "WEBAPP",
  postion: 0
}, //POLO SALES
{
  title: {
    es: "Polo Sales",
    en: "Polo Sales",
    pt: "Polo Sales"
  },
  type: {
    es: "Rapid prototyping"
  },
  desc: {
    es: "Prototipo funcional de plataforma de remate de caballos. Se busco generar un producto rápido, para corroborar demanda del mismo e iterar la version",
    en: "Polo horses auctioning rapid prototype. aimed to rapidly generate a version, in order to test demand and iterate it",
    pt: "Protótipo funcional de plataforma de leilão de cavalos. O objetivo era gerar um produto rápido, para confirmar a demanda e logo iterar a versão"
  },
  link: "https://polosales.netlify.app",
  img: "/polosales.png",
  icons: ["node", "html"],
  color: "PROTOTYPE",
  postion: 0
}, //SISTEMA PEDIDOS
{
  title: {
    es: "Sistema de Pedidos",
    en: "Micro logisitcs",
    pt: "Sistema de Peididos"
  },
  type: {
    es: "UX/UI Prototyping"
  },
  desc: {
    es: "Prototipo funcional para sistema de pedidos logísticos de distribuidora mayorista",
    en: "Prototype to manage intern wholesaler logistics ",
    pt: "Protótipo funcional para o sistema de pedidos de logística de distribuidor de atacado"
  },
  link: "https://www.behance.net/gallery/94688655/_",
  img: "/polosales.png",
  icons: ["node", "html"],
  color: "PROTOTYPE",
  postion: 0
}, {
  padding: "0",
  title: {
    es: "GANGADECO",
    en: "GangaDeco ",
    pt: "GangaDeco "
  },
  type: {
    es: "E-commerce",
    en: "E-commerce",
    pt: "E-commerce"
  },
  desc: {
    es: "E-commerce armado para tienda de articulos de bazar y decoracion",
    en: "deco e-commerce",
    pt: "E-commerce de produtos de decoracao"
  },
  link: "https://gangadeco.netlify.app",
  img: "/lagaleracel.png",
  // icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
  icons: ["node", "html"],
  color: "PROTOTYPE",
  postion: 1
}, //ALMACEN DE PRODCUTORES
{
  title: {
    es: "Almacen de Productores",
    en: "Almacen de Productores",
    pt: "Almacen de Productores"
  },
  type: {
    es: "Web design"
  },
  desc: {
    es: "Showroom virtual de productos regionales. Se hizo foco en la estética de la presentacién del producto, marca y branding",
    en: "Virtual showroom for dely prodcuts. Aimed to develop unique design & branding",
    pt: "Showroom virtual de produtos regionais. O foco foi feito na estética da apresentação do produto, marca e branding"
  },
  link: "https://www.behance.net/gallery/94639591/Almacen-de-Productores",
  img: "/polosales.png",
  icons: ["node", "html"],
  color: "PROTOTYPE",
  postion: 0
}, //QUE HACEMOS HOY
{
  title: {
    es: "Que Hacemos Hoy",
    en: "Que Hacemos Hoy",
    pt: "Que Hacemos Hoy"
  },
  type: {
    es: "UX/UI Prototyping"
  },
  desc: {
    es: "Prototipo funcional de apliación de información de eventos culturales",
    en: "App prototype for cultural events and gatherings",
    pt: "Showroom virtual de produtos regionais. O foco foi feito na estética da apresentação do produto, marca e branding"
  },
  link: "https://www.behance.net/gallery/96068307/QueHacemosHoy",
  img: "/polosales.png",
  icons: ["node", "html"],
  color: "PROTOTYPE",
  postion: 0
}];
var _default = portfolio;
exports["default"] = _default;