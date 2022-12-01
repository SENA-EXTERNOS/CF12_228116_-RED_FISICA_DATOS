<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medios de transmisión 

    
    .row.container.justify-content-around.align-items-center

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/img1-tema2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.texto-tar1-tema2.mb-0 El medio de transmisión se refiere al camino físico que se recorre entre el transmisor y el receptor. Forma el canal que acepta la transmisión de información entre dos terminales en una red. Por lo general, las comunicaciones se realizan usando ondas electromagnéticas que se propagan a través del canal. Intermitentemente, el canal es un medio físico y otras veces no lo es, debido a que las ondas electromagnéticas son capaces de ser transmitidas por el vacío.



    br
    br
    br

    .row.container.justify-content-around.align-items-center

      p Dentro de los medios de transmisión, encontramos los siguientes tipos o categorías: 

      .row.color-der-tar1-tema2
      
        .col-lg-6
          h4.bloque-texto-tar2.tema2 Pares trenzados
          p.bloque-texto-tar2.tema2 Esta clasificación de los medios de transmisión está conformada por dos alambres de cobre aislados, por lo general de 1 mm de espesor. Los alambres se entrelazan de forma helicoidal, como en una molécula de ADN. La forma trenzada del cable  se usa para reducir la interferencia eléctrica con relación a los pares contiguos que se encuentran en sus cercanías. 
    
        .col-lg-6
            
            figure
                img(src="@/assets/curso/temas/pares-trenzados-am-tema2.png", alt="alt").img2-tema2

            p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit
        


    .row.container.justify-content-around.align-items-center


      AcordionA(tipo="a" clase-tarjeta="tarjeta fondo-tarjetas-acordeon")

        .row(titulo="Cable coaxial")
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema2 Este cable coaxial está conformado por un alambre de cobre duro en su parte central y establece el núcleo, que se encuentra rodeado por un material aislante. Este material, con conductividad eléctrica nula, está rodeado por un conductor cilíndrico que asiduamente se muestra como una malla de tejido trenzado y el conductor exterior está cubierto por una capa de plástico protector. 
        
          .col-md-6
            figure
              img(data-aos="flip-left")(src='@/assets/curso/temas/img-cable-coaxial-tema2.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        
        .row(titulo="Fibra óptica")
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema2 Un cable de fibra óptica está conformado por tres secciones concéntricas. La más interna, el núcleo, se apoya en una o más hebras o fibras, hechas de cristal o plástico; cada una de estas fibras lleva un revestimiento de cristal o plástico con propiedades ópticas diferentes a las del núcleo. La capa más externa, que recubre una o más fibras, debe estar compuesta de un material opaco y resistente.
        
          .col-md-6
            figure
              img(data-aos="flip-left")(src='@/assets/curso/temas/img-fibra-optica-tema2.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        
        .row(titulo="Radio enlaces de VHF y UHF")
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema2 Estas bandas cubren más o menos desde 55 a 550 MHz (megahercios). Se pueden utilizar en todas las direcciones o sentidos (omnidireccionales), pero la ionosfera es transparente a ellas. Su alcance máximo es de un centenar de kilómetros y las velocidades que permite son del orden de los 9600 bps (bits por segundo). Su aplicación suele estar relacionada con los radioaficionados, equipos de comunicación militares, televisión y aviones.       
          .col-md-6
            figure
              img(data-aos="flip-left")(src='@/assets/curso/temas/img-radio-enlaces-tema2.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        
        .row(titulo="Microondas")
          .col-md-6.mb-4.mb-md-0
            p.texto-acordeon-tema2 Aunque también se aplican en hornos, las microondas permiten transmisiones terrestres y con satélites. Debido a sus frecuencias, del orden de 1 a 10 GHz (gigahercios), las microondas son muy intermitentes y solo se pueden utilizar en situaciones donde se presenta una línea visual que une al emisor y al receptor. Los enlaces de microondas permiten grandes velocidades de transmisión, del orden de 10 Mbps (Megabit por segundo).
        
          .col-md-6
            figure
              img(data-aos="flip-left")(src='@/assets/curso/temas/img-microondas-tema2.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      p Dentro del proceso de configuración e instalación de una red de transmisión de datos, se deben definir claramente las características de estas debido a que, de sus especificaciones y reglamentación, dependen la funcionalidad, el alcance y la efectividad de las redes.
      p Las  características que  se deben tener en cuenta a la hora de realizar el diseño de una red, son las siguientes:

      SlyderF(columnas="col-lg-6 col-xl-4").bloque-arrusel-tar-tema2
        //1
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img1-carr-tema1.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center FIRST
          p.text-center.texto-carrusel-tema2 El tipo de conductor utilizado.
          p.texto-invisible Lorem ipsum 
        //2
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img2-carr-tema1.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 2
          p.text-center.texto-carrusel-tema2 La velocidad máxima de transmisión.
          p.texto-invisible Lorem ipsum 
        //3
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img3-carr-tema1.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 3
          p.text-center.texto-carrusel-tema2 Las distancias máximas que se ofrecen entre repetidores.
        //4
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img4-carr-tema1.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 4
          p.text-center.texto-carrusel-tema2 La inmunidad frente a interferencias electromagnéticas.
        //5
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img5-carr-tema1.png.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 La facilidad de instalación.
          p.texto-invisible Lorem ipsum 
        //6
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(data-aos="flip-left")(src='@/assets/curso/temas/img6-carr-tema1.png' alt='AvatarTop').img-carrusel-tema2
          
          //h2.text-center 6
          
          p.text-center.texto-carrusel-tema2 La capacidad de soportar diferentes tecnologías de nivel de enlace.
      
      p.texto-inf-carrusel-tema2 Seguidamente viene el proceso de instalación de redes, el cual podemos dividir en las siguientes etapas: instalación eléctrica y aire acondicionado, instalación del cableado de la red, estructuración del cableado e instalación del centro de procesamiento de datos. Ampliemos la información sobre cada una de ellas.
    
    br
    separador

    br

    .row.container.justify-content-around.align-items-center

        #la-instalacion-electrica-y-de-aire-acondicionado
        .titulo-segundo.color-acento-contenido
          h2 2.1  La instalación eléctrica y de aire acondicionado

        .row
          .col-lg-6
            p.color-texto-inst-elec-tema2.p-2 Es fundamental que la instalación eléctrica se encuentre muy bien hecha, porque si no es así, se corren riesgos delicados e importantes, incluyendo el de electrocución. Los contratiempos eléctricos acostumbran generar problemas intermitentes, difíciles de diagnosticar y estimulan sustanciales deterioros en los dispositivos de red.
            p.p-2 Todos los dispositivos de red deben conectarse a enchufes con puesta a tierra, lo mismo que las carcasas de los dispositivos, los armarios, las canaletas mecánicas, etc. Al mismo tiempo, toda la instalación debe estar conectada a la tierra de la estructura; por lo tanto, se debe comprobar que el número de picas de tierra que tiene es suficiente para lograr una puesta a tierra aceptable.
          
          .col-lg-6
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/img-inst-electr-tema2.png', alt='Texto que describa la imagen')

        p Otra situación importante que se debe resolver se origina
          | 
          span.etiqueta por los cortes de corriente o las subidas y bajadas de tensión; para resolverlo se pueden utilizar sistemas de alimentación ininterrumpida (SAI).
        p Normalmente, los sistemas de alimentación ininterrumpida corrigen todas las deficiencias de la corriente eléctrica; esto quiere decir, que actúan de estabilizadores, aseguran el fluido frente a cortes de corriente, suministran el flujo eléctrico adecuado, etc.



    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #instalacion-del-cableado-de-red
        .titulo-segundo.color-acento-contenido
          h2 2.2  Instalación del cableado de red
        
        p Una instalación del cableado de red, según las directrices del proyecto, se apoya en la ejecución ordenada de la instalación de un conjunto de tareas que restablecen en facilitar el servicio que necesita el cliente que solicitó la instalación.
        p Algunas de estas tareas se pueden aplicar en el tiempo y esto se debe tener en cuenta cuando se estructure el calendario para la instalación. A continuación, describimos algunas de estas tareas:

        .row
          .col-lg-8.order-2.order-lg-1
            TabsA.color-acento-botones.mb-5        
              .tarjeta.clr-paleYellow.p-4(titulo="Instalación de las tomas de corriente")
                //h4 Instalación de las tomas de corriente
                p Esta tarea acostumbra ser llevada a cabo por un electricista, pero desde el punto de vista del proyecto, se debe tener seguridad de que existen suficientes tomacorrientes para alimentar todos los equipos de comunicaciones.

              .tarjeta.clr-paleYellow.p-4(titulo="Instalación de rosetas y jacks")
                //h4 Instalación de rosetas y jacks
                p Se refiere a la instalación de los puntos de red finales desde donde se conectan los equipos de comunicaciones, utilizando latiguillos (cables). La mayor parte de estas conexiones residen en canaletas o en armarios de cableado.

              .tarjeta.clr-paleYellow.p-4(titulo="Tendido de los cables")
                //h4 Instalación de rosetas y jacks
                p En esta tarea se mide la distancia que cada cable debe recorrer y se adiciona una longitud discreta que permita trabajar con el cable, cómodamente, antes de cortarlo. Tener la seguridad de que el cable que se utiliza cuente con la certificación necesaria.
  

              .tarjeta.clr-paleYellow.p-4(titulo="Cross-connect")
                //h4 Cross-connect
                p Ensamble de los cables en los <em>patch panels</em> y en las rosetas, haciendo uso de las herramientas correctas y apropiadas de crimpado.

              .tarjeta.clr-paleYellow.p-4(titulo="Probado de los cables instalados")
                //h4 Probado de los cables instalados
                p Cada uno de los cables que se construyó y se conectorizó debe ser probado de forma inmediata para asegurar que cumplirá su función de forma correcta.

              .tarjeta.clr-paleYellow.p-4(titulo="Etiquetado y documentación del cable y conectores")
                //h4 Cross-connect
                p Cada uno de los cables debe ser etiquetado en ambos extremos, como también los conectores de <em>patch panels</em> y rosetas, de modo que queden identificados rotundamente y sin ambigüedades.

              .tarjeta.clr-paleYellow.p-4(titulo="Instalación de los adaptadores de red")
                //h4 Probado de los cables instalados
                p Una considerable cantidad de los equipos informáticos ya vienen con la tarjeta de red instalada pero, necesariamente, esto no tiene que ser de esta manera.

              .tarjeta.clr-paleYellow.p-4(titulo="Instalación de los dispositivos de red")
                //h4 Probado de los cables instalados
                p Se refiere a la instalación de los concentradores, conmutadores, puentes y encaminadores. Algunos de estos dispositivos deben ser configurados y caracterizados antes de proporcionar sus servicios.

              .tarjeta.clr-paleYellow.p-4(titulo="Configuración")
                //h4 Probado de los cables instalados
                p Configuración del <em>software</em> de red en clientes y servidores de la red.
              

                
          .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-down-left")
            figure
              img(src="@/assets/curso/temas/img-inst-cableado-azul-tema2.png", alt="alt", style="width:450px;").m-auto

    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #estructuracion-del-cableado
        .titulo-segundo.color-acento-contenido
          h2 2.3  Estructuración del cableado
        
        .row 
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/img-estruct-cableado-tema2.png", alt="alt").img-estruc-cableado

          .col-lg-7
            p.p-1 Se refiere a la localización del cableado en cada puesto de trabajo. A cada ubicación deben llegar todos los posibles medios de transmisión de la señal que requiera cada equipamiento: UTP, STP, fibra óptica, cables para el uso de transceptores y balums, etc.
            p.bloque-texto-rojo-estruc-cableado En esta preparación se manifiesta una clasificación jerárquica de subsistemas de cableado estructurado, clasificación que no es inflexible; inclusive, las designaciones de cada subsistema pueden variar desde unos textos técnicos a otros.

    br
    br

    .row.container.justify-content-around.align-items-center

        p Conozcamos cada uno de estos subsistemas:

        .bg--img_03
          .row.justify-content-center.mb-4
            .col-lg-4
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/img-estruct-cableado-azul-tema2.png", alt="alt").img400.m-auto
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-acordeon-estruc-cableado")
                .row(titulo="Subsistema horizontal o de planta")
                  .col-12
                    p.mb-0 En este subsistema es recomendable instalar una canaleta o un subsuelo, por donde se transportan a cada puesto de trabajo o ubicación, los sistemas de cableado correspondientes. Las exigencias de ancho de banda pueden necesitar el uso de dispositivos especiales para conmutar paquetes de red o centralizar y repartir el cableado en estrella. 

                .row(titulo="Subsistema distribuidor o administrador")
                  .col-12
                    p.mb-0 Este subsistema se refiere a la inclusión de los racks, los distribuidores de red con sus latiguillos, etc.

                .row(titulo="Subsistema vertical o backbone")
                  .col-12
                    p.mb-0 Este subsistema es el delegado para comunicar todos los subsistemas horizontales; por esta razón, para realizarlo, requiere de medios de transmisión de señal con un ancho de banda elevado y de alta protección. Los <em>backbones</em> más modernos han sido construidos con tecnología ATM, redes FDDI o Gigabit Ethernet. Este tipo de comunicaciones es perfecto para utilizarlo en instalaciones que requieran de aplicaciones multimedia.

                .row(titulo="Subsistema de campus")
                  .col-12
                    p.mb-0 Este subsistema es el que extiende la red de área local al ambiente o entorno de varios edificios; es por eso que, en cuanto a su extensión, se asemeja a una red MAN, pero conserva toda la funcionalidad de una red de área local. El medio de transmisión que se utiliza con mayor regularidad es la fibra óptica, con topología de doble anillo.

                .row(titulo="Cuartos de entrada de servicios, telecomunicaciones y equipos")
                  .col-12
                    p.mb-0 Se refiere a los lugares convenientes para acopiar las #[strong  entradas de los servicios externos] a la estructura (líneas telefónicas, accesos a Internet, recepción de TV por cable o satélite, etc.), #[strong la instalación de la maquinaria de comunicaciones] y los #[strong equipamientos informáticos centralizados.] En algunas organizaciones existen los tres tipos de espacios, en otras se presenta el #[strong  cuarto de equipos] que incluye el de telecomunicaciones y el de entrada de servicios que es sustituido por un armario receptor.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        #instalacion-del-centro-de-procesamiento-de-datos
        .titulo-segundo.color-acento-contenido
          h2 2.4  Instalación del centro de procesamiento de datos

        .row 
          .col-lg-5
            figure(data-aos="zoom-in-down")
                img(src="@/assets/curso/temas/img-inst-centro-datos-azul-tema2.png", alt="alt").img-inst-procesamiento-datos

          .col-lg-7
            .bloque-color-inst-centro-datos
            p.texto-inst-centro-datos Algunas de las instalaciones de naturaleza variada, no solo de red, pueden llevarse a cabo de manera simultánea, debido a que acostumbran ser diferentes profesionales los que acometen cada parte de la instalación: electricistas, instaladores de cables y certificadores, aire acondicionado, etc. Una vez que las canalizaciones han sido instaladas y probadas, se inicia el montaje de servidores y dispositivos de red. Es desde ese momento que se podrán empezar a probar los servicios de red, antes de llegar al régimen de explotación.
            p.texto-inst-centro-datos Es importante cuidar la accesibilidad a los equipos en el Centro de Proceso de Datos (CPD), para que se pueda actuar de forma rápida en el caso que se presente una avería. También las consolas de los servidores deben estar bien protegidas, porque cuando se tiene acceso a una consola, se permite manipular fácilmente el servidor al que pertenece. Los espacios donde se instalan servidores o implican puntos neurálgicos de las comunicaciones, están obligados a ser lugares de estancia cómoda, aunque cerrados bajo llave; por lo general, el acceso a estos espacios se lleva a cabo bajo la supervisión de algún sistema de control de presencia, con tarjetas de bandas magnéticas, reconocimiento biométrico u otros sistemas de identificación, particularmente seguros.

    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #sistema-de-unidades-de-medidas
        .titulo-segundo.color-acento-contenido
          h2 2.5  Sistema de unidades de medidas
      
    
        .row
          .col-lg-6
            
              figure
                img(data-aos="fade-up")(src="@/assets/curso/temas/img-sist-unid-medid.png", alt="alt").img-der-tar-sist-unid
              br
              
          
          .col-lg-6.color-der-tar-sist-unid 
            .texto-tar-sist-unid.p-3
              p Un sistema de unidades de medida se refiere a un conjunto de unidades verídicas consistentes, normalizadas, uniformes y apropiadamente descritas que funcionan para satisfacer las necesidades de medición. Generalmente, definen unas pocas unidades de medida. 
              p En este espacio es importante hablar del sistema de medida y control, debido a que este realiza las labores de medición de magnitudes físicas, químicas, biológicas y procesa estas informaciones para regular el manejo del sistema físico que se aspira controlar, según los datos obtenidos durante el proceso de adquisición de datos y de la medición.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Existen varios sistemas de medidas, entre los cuales encontramos los siguientes:

        
        .row
          .col-sm-4.col-xl-3.mb-3.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido
                

                  figure
                    img(data-aos="fade-down")(src="@/assets/curso/temas/img1-tar-conect-tema2.png", alt="alt").imagenes-tarjetas-animadas-tema3
                  br
                  br
                  br
                  br
                  br
                  br
                  
                  
          
                .tarjeta-slide__img.p-xl-5

                  h4 Sistema Internacional de Unidades (SI) 
                  p Es la versión actualizada del sistema métrico y el que más se utiliza en la actualidad. Sus unidades básicas son: el metro, el kilogramo, el segundo, el amperio, el kelvin, la candela y el mol.
                  br
                  br
                  br
                  br
                  br
                  br
                  

          .col-sm-4.col-xl-3.mb-3.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido
                
                  figure
                    img(data-aos="fade-down")(src="@/assets/curso/temas/img2-tar-conect-tema2.png", alt="alt").imagenes-tarjetas-animadas-tema3
                  br
                  br
                  br
                  br
                  br
                  br

                .tarjeta-slide__img.p-xl-5
                  //h3.color-texto-tarjetas-animadas-tema3.p-2 Dominio

                  h4 Sistema métrico decimal
                  p Es el primer sistema unificado de medidas que se formó. Es un sistema de unidades fundamentado en el metro como unidad base; las unidades de mayor tamaño se denominan múltiplos, y las de menor tamaño se denominan submúltiplos. Sistema de unidades relacionadas entre sí por múltiplos o submúltiplos de 10. 
                  br
                  br
                  

          .col-sm-4.col-xl-3.mb-3.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido
                
                  figure
                    img(data-aos="fade-down")(src="@/assets/curso/temas/img3-tar-conect-tema2.png", alt="alt").imagenes-tarjetas-animadas-tema3
                  br
                  br
                  br
                  br
                  br
                  br
                  

                .tarjeta-slide__img.p-xl-5
                  //h3.color-texto-tarjetas-animadas-tema3.p-2 Dominio
 
                  h4 Sistema anglosajón de unidades 
                  p Es el sistema anglosajón tradicional de unidades; se refiere a un conjunto de unidades de medida que son distintas a las del sistema métrico decimal, que se utilizan en la actualidad, como la medida principal.
                  br
                  br
                  br
                  br
                  br


          .col-sm-4.col-xl-3.mb-3.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido
                
                  figure
                    img(data-aos="fade-down")(src="@/assets/curso/temas/img4-tar-conect-tema2.png", alt="alt").imagenes-tarjetas-animadas-tema3
                  br
                  br
                  br
                  br
                  br
                  br

                .tarjeta-slide__img.p-xl-5
                  //h3.color-texto-tarjetas-animadas-tema3.p-2 Dominio
                  
                  h4 Sistema MKS de unidades
                  p Se refiere a un sistema de unidades que recibe su nombre de las unidades que acoge como básicas y que utiliza como unidades fundamentales: el metro, el kilogramo y el segundo, como unidades de longitud, masa y tiempo respectivamente. El sistema MKS de unidades sentó las bases para el Sistema Internacional de Unidades SI, que en la actualidad se utiliza como estándar internacional.

                  




</template>

<script>
export default {
  name: 'Tema2',
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
