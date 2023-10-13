export default {
  global: {
    componenteFormativo: 'Red física de datos',
    descripcionCurso:
      'En este componente formativo se van a desarrollar conceptos generales de redes, sistemas de medidas, gestión de proyectos de tecnologías de información y software de planos y diagramas, que se deben tener en cuenta para lograr una implementación exitosa de las redes de datos, en el proceso de instalación e implementación de la infraestructura de tecnologías de la información y las telecomunicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/dos-triangulos-superiores.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/engrane-dec2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/blanco-y-flecha-dec-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/lista-chequeo-dec4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/triangulo-superior-verde.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/parte-blanca-wifi.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/parte-verde-wifi.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Redes',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medios de transmisión ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de proyectos de TI',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Software</i> de planos y diagramas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Redes',
      referencia:
        'Gorgona, S. (s.f.). <em>Teoría de Redes Computacionales.<em>',
      tipo: 'PDF',
      link:
        'https://www.oas.org/juridico/spanish/cyber/cyb29_computer_int_sp.pdf',
    },
    {
      tema: 'Medios de transmisión',
      referencia:
        'CEM – Centro Español de Metrología. (s.f.). <em>El Sistema Internacional de Unidades, SI.</em>',
      tipo: 'Artículo ',
      link:
        'https://www.cem.es/es/cem/metrologia/sistema-internacional-unidades-si#:~:text=Las%20siete%20unidades%20b%C3%A1sicas%20del,%2C%20kelvin%2C%20mol%20y%20candela',
    },
    {
      tema: 'Gestión de proyectos de TI',
      referencia:
        'Team Asana. (2022). Gestión de proyectos de TI: Guía para gerentes y equipos. ',
      tipo: 'Artículo ',
      link: 'https://asana.com/es/resources/it-project-management',
    },
    {
      tema: '<em>Software</em> de planos y diagramas',
      referencia:
        'Fundación laboral de la construcción. (s.f.). <em>Conoce los programas que más utilizan los arquitectos para elaborar planos.</em>',
      tipo: 'Artículo ',
      link:
        'https://blog.fundacionlaboral.org/sector/conoce-los-programas-que-mas-utilizan-los-arquitectos-para-elaborar-planos/',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'dispositivo de <em>hardware</em> que se inserta en una estación de trabajo de una red y le permite comunicarse con otros elementos unidos a la red. ',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'capacidad de un cableado en <em>bits</em> por segundos. También se utiliza este término para describir la capacidad de rendimiento medida de un medio o un protocolo de red específico.',
    },
    {
      termino: 'Autenticación',
      significado:
        'acto de verificar la identidad suministrada a través de la red por un usuario o una entidad remotos, como un programa.',
    },
    {
      termino: 'Banda ancha',
      significado:
        'modalidad de transmisión de red que utiliza la señalización análoga para enviar información sobre un amplio rango de frecuencias.',
    },
    {
      termino: 'Cable',
      significado:
        'medio de transmisión de alambre de cobre o fibra óptica que se envuelve en una cubierta protectora.',
    },

    {
      termino: 'Cable coaxial',
      significado:
        'consta de un alambre de cobre duro en su parte central, es decir, que constituye el núcleo, el cual se encuentra rodeado por un material aislante.',
    },
    {
      termino: 'DNS',
      significado:
        'sistema de nombre de dominios. Un sistema de internet que resuelve los nombres de dominios en direcciones IP.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que dirige o enruta paquetes a través de las redes. Un enrutador funciona con una dirección de mensajes IP a fin de determinar la mejor ruta hacia su destino.',
    },
    {
      termino: 'Fibra óptica',
      significado:
        'tipo de cable de red que utiliza delgados filamentos de vidrio para transportar información digital que ha sido transformada en impulsos de luz. ',
    },
    {
      termino: 'Pares trenzados',
      significado:
        'consiste en dos alambres de cobre aislados, en general de 1 mm de espesor. Los alambres se entrelazan en forma helicoidal, como en una molécula de ADN.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barcia, N., et al. (2005). <em>Redes de computadores y arquitecturas de comunicaciones. Supuestos prácticos.</em> Prentice-Hall.',
      link:
        'https://kupdf.net/download/redes-de-computadores-y-arquitecturas-de-comunic_5b0cd701e2b6f53768b40c4d_pdf',
    },
    {
      referencia:
        'Beasley, J. S. (2008). <em>Networking.</em> Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Candelas, F. A., et al. (2001). <em>Sistemas para la transmisión de datos.</em> ',
      link: '',
    },
    {
      referencia:
        'Cisco Systems. (s.f.). <em>Academia de Networking de Cisco Systems: Guía del primer año CCNA 1 y 2.</em> ',
      link:
        'https://www.elsolucionario.org/academia-de-networking-de-cisco-systems-guia-del-primer-ano-ccna-1-y-2-v-3-1/',
    },
    {
      referencia:
        'Gil, P. (2010). <em>Redes de Computadores (Transparencias temas de teoría del 1 al 9).</em>',
      link: 'http://rua.ua.es/dspace/handle/10045/15586',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
