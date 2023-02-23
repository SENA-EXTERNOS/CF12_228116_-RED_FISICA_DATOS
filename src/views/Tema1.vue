<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Redes

    
    .row.container.justify-content-around.align-items-center

      .row.color-col-der-tar1-tema1
        .col-lg-5
            figure
              img(data-aos="fade-up-left")(src="@/assets/curso/temas/img-tarj1-tema1.png").img-tar1-tema1
        .col-lg-7
            p.texto-tar1-tema1.p-3 Hablemos primero sobre el concepto de #[strong  red de transmisión de datos], el cual se puede definir como una estructura o un conjunto de elementos interconectados entre sí, que comparten recursos y pueden transmitir información a través del intercambio de datos. Si analizamos y descomponemos estas palabras encontramos que hay dos palabras que vienen del latín: red, que emana del vocablo rete y que es sinónimo de malla; y datos, que es fruto de la evolución del vocablo datum que puede traducirse como dato. 

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      
      p Este conjunto de elementos está compuesto por diferentes componentes:
    
      TabsA.bloque-tabs-tema1
        .tarjeta.p-4(titulo="Hardware")
 
          .row
            .col-xl-6
              .texto-tabs-vert-tema1.p-4
                h4 Hardware
                p Está integrado por ordenadores, <em>smartphones</em>, servidores, impresoras, dispositivos de captura de datos, escáneres, fotocopiadoras, <em>firewalls</em>, armarios <em>rack</em>, <em>routers, switches,</em> puntos de acceso WiFi, <em>patch panels,</em> cableado de red, canaletas y rosetas, entre otros.

            .col-xl-6.mb-4
              figure
                img(src='@/assets/curso/temas/img-hardware-tabs-tema1.png', alt='Texto que describa la imagen').img-tabs-tema1
                //figcaption Leyenda de la imagen
    

        .tarjeta.p-4(titulo="Software")

          .row

            .col-xl-6
              .texto-tabs-vert-tema1.p-4
                h4 <em>Software</em>
                p En los elementos que conforman el <em>software</em>, podemos incluir el <em>software</em> del sistema operativo de los servidores, el <em>software</em> de administración de las impresoras, el <em>software</em> de administración de los escáneres, el <em>software</em> de administración de los <i>routers</i>, el <em>software</em> de administración de los <i>firewall</i>, entre otros.

            .col-xl-6.mb-4
              figure
                img(src='@/assets/curso/temas/img-software-tabs-tema.png', alt='Texto que describa la imagen').img-tabs-tema1
                //figcaption Leyenda de la imagen


    
        .tarjeta.p-4(titulo="Humano")

              .row

                .col-xl-6.p-4
                  .texto-tabs-vert-tema1.p-4
                    h4 Humano
                    p Son los encargados de la instalación, la puesta en funcionamiento, mantenimiento y actualización de las redes de datos; y dentro de estos tenemos a administrador de red, personal de soporte de la red, personal de la instalación de la red, entre otros. 

                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/img-humano-tabs-tema.png', alt='Texto que describa la imagen').img-tabs-tema1
                    //figcaption Leyenda de la imagen
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Los tipos de redes de transmisión de datos están definidos según su alcance y tamaño de la red, conozcamos algunos de los tipos más comunes: 

        TabsC.color-primario
          .py-3.py-md-4(titulo="LAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row

              .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img-lan-tema1.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                h4 LAN
                p Son las iniciales de <em>Local Area Network</em>, que significa una red de área local; se definen de esta manera porque autorizan la conexión de dispositivos en áreas relativamente pequeñas. Las redes de la empresa son las más empleadas en el desarrollo de intercambio de datos porque, por su condición, se aplica desde las empresas más limitadas hasta las más grandes. Consienten la interconexión de múltiples nodos (unidades de almacenamiento, impresoras y otros dispositivos) aunque no se encuentren conectados físicamente con los ordenadores. La desventaja más significativa se sustenta en que los nodos que se pueden conectar son limitados.
            
          .py-3.py-md-4(titulo="WAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-wan-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 WAN 
                p Son las iniciales de <em>Wide Area Network,</em> que indican una red de área extensa; es decir, su campo de influencia es bastante amplio, se puede obtener la conexión de equipos y dispositivos que se localizan en diferentes ubicaciones muy apartadas geográficamente. Esto significa que la red WAN cubre distancias de entre 100 y 1.000 kilómetros, lo que posibilita ofrecer conectividad a varias ciudades o, inclusive, a un país entero. Cuando se presenta la unión de varias redes LAN conectadas entre ellas se les da el nombre de redes de área amplia. Las redes de área amplia (WAN) más nombradas son las redes de las líneas telefónicas y los satélites, las cuales pueden ser puestas en práctica por organizaciones, utilizándolas según su necesidad establecida. Internet es una red WAN pública. 

          .py-3.py-md-4(titulo="MAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-man-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 MAN 
                p Son las iniciales de <em>Metropolitan Area Network,</em> que indican que la cobertura geográfica de esta red pertenece al tipo de la que se encuentra en el intermedio de las redes LAN y las WAN, de tal manera que soportan un mayor alcance que las LAN pero menor que las WAN; por esta razón, generalmente se implementan en áreas más reducidas como ciudades y poblados. La fibra óptica es el principal medio conductor que se utiliza en la transferencia de información, lo que posibilita no solo una conexión más rápida, sino también porcentajes de errores y suma de retardos temporales de una red (latencia) más bajos que otras redes y también son más estables y resistentes a las interferencias radioeléctricas.


          
          .py-3.py-md-4(titulo="WLAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-wlan-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-wlan-tema1
                  h4 WLAN
                  p Son las iniciales de <em>Wireless Local Network,</em> y significa que, en comparación con otras redes, en las de área local inalámbricas el intercambio de información se lleva  a cabo a través de ondas de radio. #[strong La inseguridad] está considerada como el principal inconveniente, debido a que cualquier individuo con una terminal inalámbrica puede conectarse a otro punto de acceso privado si este no cuenta con las medidas de seguridad apropiadas.

          .py-3.py-md-4(titulo="WMAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-wman-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-wwan-tema1
                  h4 WMAN
                  p Son las iniciales de <em>Wireless Metropolitan Network</em>, y significan que la red metropolitana inalámbrica es la versión inalámbrica convencional de las redes de áreas metropolitanas. Se diferencia de las MAN en que su alcance es mucho mayor. Esta tecnología se encuentra presente en modelos de comunicación como <em>Worldwide Interoperability for Microwave Access</em> WiMAX, (Interoperabilidad Mundial para Acceso con Microondas por sus siglas en inglés).

          
          .py-3.py-md-4(titulo="WWAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-wman-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-wwan-tema1
                  h4 WWAN
                  p Son las iniciales de <em>Wireless Wide Area Network,</em> que indican que la red inalámbrica de área amplia tiene una cobertura geográfica mucho más amplia que la que ofrecen las redes WMAN. En lugar de utilizar tecnologías de comunicaciones móviles como WiMAX, UMTS, GPRS, EDGE, CDMA2000, GSM, CDPD, Mobitex, HSPA y 3G, utiliza sistemas como el WiFi y el LMDS (Sistema de Distribución Local Multipunto, por sus siglas en inglés).

          .py-3.py-md-4(titulo="SAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-san-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-san-tema1
                  h4 SAN
                  p Son las iniciales de <em>Storage Area Network,</em> que significan que la red de área de almacenamiento es un modelo de red muy empleada por las organizaciones más grandes, porque accede a conectar diversas unidades de almacenamiento a las Redes de Área Local o LAN. Este prototipo de redes se usa en los computadores centrales comisionados para procesar una gran cantidad de datos de empresas gigantes. Estas redes también se consideran redes secundarias porque su función principal es ejercer de contingencia de los servicios de almacenamiento de datos.


          .py-3.py-md-4(titulo="PAN").color-fondo-tarjetas-tabs-tema1.p-4
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-pan-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-pan-tema1
                  h4 PAN
                  p Son las iniciales de <em>Personal Area Network,</em> que indican que la red de área personal conecta los dispositivos contiguos al usuario en un ambiente limitado, computadores, puntos de acceso a Internet, teléfonos móviles. Este tipo de red se pone en marcha en hogares o empresas muy limitados, pero con el tiempo y debido al desarrollo de estas, se redireccionan hacia otro modelo de red más compleja y que tenga más alcance.
 
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h2 Topologías

        p Con base en lo anterior, nos adentramos en un nuevo tema: la topología de red, que se define como la estructura del total de equipos, infraestructura y demás componentes de una red.
        p Y está definida mediante dos enfoques:

        .row.bloque-tar-topologias-tema1
        
          .col-lg-5
              .row.tarjeta.fondo-tar-topologias-tema1
                .col-auto
                    figure
                      img(src="@/assets/curso/temas/img-top-fisica.png", alt="alt").img100.img-topologias-tema1
                .col.p-4
                    h5.texto-topologias-tema1 La topología física
                    p.texto-topologias-tema1 Describe cómo se establece la conexión de todos los componentes a nivel de red, es decir, están encadenados mediante un enlace físico que generalmente es un cable eléctrico, un cable de red o mediante fibra óptica, entre otros.
          .col-lg-5.tar1-topologias-tema1
              .row.tarjeta.fondo-tar-topologias-tema1
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/img-topologia-logica.png", alt="alt").img100.img-topologias-tema1
                .col.p-4
                  h5.texto-topologias-tema1 La topología lógica
                  p.texto-topologias-tema1 Describe el modo conceptual en el que los datos de una red fluyen a través de los elementos físicos o <em>hardware</em> que suministra el <em>software</em>, lo que se convierte en una conexión lógica.
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Es importante tener presente que existen cinco topologías básicas y en el instante en que una empresa va a elegir qué modelo de topología utilizar, la elección dependerá del tamaño y la escala de la organización, sus objetivos comerciales y su presupuesto.
        
        br
        
        p Conozcamos cada una de ellas:

        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img-punto caliente-tema1.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

          .tarjeta.tarj-rosa-pto-caliente-tema1.p-3(x="8%" y="60%" numero="1")
            .h5.mb-2 Bus
            p En esta topología cada computadora o cada elemento de la red se encuentra acoplado a un segmento normal de cable de red. Este tramo de red se organiza como un bus lineal, esto es, un cable largo que va de un extremo a otro de la red y al cual se enchufa cada nodo. Los paquetes de datos o de información se transmiten a todos los dispositivos de red en esa sección. Las computadoras escuchan al bus de datos, y cuando están listas para transmitir, se aseguran que nadie más se encuentre transmitiendo en el ducto y, entonces, ellas envían sus paquetes de información. 

          .tarjeta.tarj-verde-pto-caliente-tema1.p-3(x="27%" y="90%" numero="2")
            .h5.mb-2 Anillo
            p En esta configuración se observa que cada nodo o computador de la red está conectado únicamente a otros dos nodos, el anterior y el posterior, de tal forma que la cadena de nodos se cierra formando un anillo. En este formato de configuración la información pasa por cada uno de los nodos, porque cada uno de ellos envía y recibe la información correspondiente.

          .tarjeta.tarj-azul-pto-caliente-tema1.p-3(x="41%" y="60%" numero="3")
            .h5.mb-2 Estrella
            p En esta categoría, los tramos de los componentes de conexión (cable, fibra óptica) de cada equipo o dispositivo de la red, se encuentran conectados a un elemento centralizado o concentrador <em>(hub)</em>. Un <em>hub</em> es un dispositivo que centraliza la conexión de varios equipos juntos para ampliar la red. En una topología en estrella las señales se transmiten desde el equipo a todos los equipos de la red, a través del concentrador.

          .tarjeta.tarj-amarillo-pto-caliente-tema1.p-3(x="58%" y="90%" numero="4")
            .h5.mb-2 Malla
            p En esta forma de conexión se establece que cada equipo o nodo se encuentre conectado, por un cable diferente, a cada uno del resto de los equipos. Los distintos dispositivos, a través de múltiples caminos, hacen que sea posible orientar el tráfico por vías alternativas, en caso de que algún nodo se encuentre averiado u ocupado.

          .tarjeta.tarj-roso-osc-pto-caliente-tema1.p-3(x="72%" y="60%" numero="5")
            .h5.mb-2 Arbol
            p La topología de árbol o jerárquica es aquella donde los nodos están organizados en forma de árbol. Aquí se combinan características de la de estrella con la de bus, y se mezclan y aplican las funcionalidades de las dos. El manejo es similar, por el modo de actuar del nodo de interconexión que trabaja en modo difusión, debido a que la información se esparce hacia todas las estaciones; solo que en esta topología, las ramificaciones se difunden, a partir de un punto raíz como la de estrella a la cantidad de divisiones como sea posible según las particularidades del árbol.

          .tarjeta.tarj-azul2-pto-caliente-tema1.p-3(x="92%" y="90%" numero="6")
            .h5.mb-2 Hibrida
            p En este formato de conexión las redes pueden utilizar distintas topologías para conectarse. Es una de las más usuales y procede de la unión de varios tipos de topología de red. Su ejecución se debe a la complejidad de la solución de red o al aumento en la cantidad de dispositivos y, por lo tanto, se hace imprescindible implantar una topología de este tipo.
        
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
        p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
