<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Software</em> de planos y diagramas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img1-tema4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Para finalizar, abordemos el estudio de planos, diagramas y el #[em software] utilizado para tal fin.
            br
            br

            p Hablemos primero sobre el dibujo técnico: cuando hay que representar un objeto grande en un plano, por ejemplo, un camión, no es práctico dibujarlo con su tamaño real. En estos casos lo conveniente es dibujar el objeto a tamaño reducido. Si los objetos son demasiado pequeños, por ejemplo; un componente electrónico, es conveniente realizar el dibujo con un tamaño ampliado.
              br
              br
              | Por consiguiente, debemos hablar de la escala, la cual es la relación de ampliación o de reducción con la que se dibuja un objeto en papel.

    


    .row.container.justify-content-around.align-items-center.mb-5

        p Existen diferentes tipos de escala:

        TabsC.color-primario
          .py-3.py-md-4(titulo="Escala natural")
            .row
              .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img1-tabs-tema4.png', alt='Texto que describa la imagen').imagenes-tabs-tema4
                    //figcaption Leyenda de la imagen
              .col-md-6.mb-4.mb-md-0
                .texto-tabs-tema4

                  p Se utiliza para representar los objetos con un dibujo del mismo tamaño que la realidad. La escala natural se representa también como escala 1:1.
            
              
          .py-3.py-md-4(titulo="Escala de reducción")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img2-tabs-tema4.png', alt='Texto que describa la imagen').imagenes-tabs-tema4
                  //figcaption Leyenda de la imagen
              .col-md-6
                .texto-tabs-tema4

                  p Se utiliza cuando el tamaño del objeto es mayor que el tamaño de la hoja de papel. Una escala 1:10 significa que el dibujo tendrá un tamaño diez veces menor que el objeto real. 

          .py-3.py-md-4(titulo="Escala de ampliación")
            .row
              .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img-tabs-tema4.png', alt='Texto que describa la imagen').imagenes-tabs-tema4
                    //figcaption Leyenda de la imagen
              .col-md-6.mb-4.mb-md-0
                .texto-tabs-tema4

                  p Se utiliza para representar objetos pequeños. Una escala de ampliación 10:1 servirá para representar un engranaje de reloj de 5 milímetros, con un tamaño de 50 milímetros en el papel.
    br           


    .row.container.justify-content-around.align-items-center 
      .row 
        .col-lg-7
          .color-texto-tarj3-tema4
          p.texto-tarj3-tema4 Ahora, la simbología arquitectónica es el distintivo en el plano de todos los elementos (sean especificaciones, artefactos o estructuras) que forman parte de una construcción y que conforman cada dibujo arquitectónico. Esta es la manera en que se simbolizan todos los elementos corrientes como sillas, árboles, ventanas, paredes, muros, camas, entre otros; todo lo que se haga imprescindible plasmar en el esquema para que el mismo se encuentre completo. 
          p Etiquetar un plano implica dibujar un recuadro, la configuración de sectores para la colocación de una “carátula” y la conformación de áreas libres útiles, para referencias, notas, croquis y/o detalles. Los extremos del recuadro sirven para dar una conclusión al plano, para actuar de guía para ribetear o cortar copias y para la demarcación de ordenadas y abscisas para aprobar la referencia por coordenadas a cualquier punto de interés del plano: un detalle o la ubicación de una modificación o actualización. 

        .col-lg-5
            figure
                img(src='@/assets/curso/temas/img-tar2-tema4.png', alt='Texto que describa la imagen')

    br


    .row.container.justify-content-around.align-items-center 
      .row 
        .col-lg-12
          .color-texto-tarj4-tema4.p-3
            p Es importante analizar todas las generalidades y las funciones de las aplicaciones existentes en el mercado para realizar la elaboración de planos. Dentro de estas aplicaciones, vamos a estudiar las aplicaciones de diseños de planos que tengan las funcionalidades para poder establecer planos de construcciones y todas sus librerías y procedimientos.
            p En el campo eléctrico debemos conocer diferentes herramientas para el desarrollo de planos eléctricos y sus correspondientes escalamientos. Así mismo con las redes hay aplicaciones especializadas con el diseño y construcción de diagramas de redes.

    br
    br
    br

    .row.container.justify-content-around.align-items-center 

      P Dentro de los requerimientos de los <i>software</i> para realizar desarrollo de planos, debemos tener las siguientes características:
      
      br
      
      .row 
        .col-lg-6

          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Manejo de áreas de superficie y medidas personalizables.
            li 
              .lista-ol--cuadro__vineta
                span 2
              |  Funciones para importar un plano.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Diseño de techo sencillo.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Imprimir planos de planta a escala.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Calificación de salas, anotaciones y símbolos técnicos.

        .col-lg-6
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Posibilidad de personalizar las alturas de losas y techos.

            li 
              .lista-ol--cuadro__vineta
                span 7
              |  Biblioteca de aperturas personalizables.
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Fácil 3D a partir de planos de planta 2D.
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Vistas simultáneas en 2D y 3D.
            li 
              .lista-ol--cuadro__vineta
                span 10
              | Catálogo de proyectos domésticos con opciones colaborativas.

        p Por todos es conocido que el trazado de planos por ordenador facilita el trabajo, por eso es importante elegir el programa informático con el que se puedan cumplir los objetivos del diseño.
    
    br
    br
    br
    .row.justify-content-center.align-items-center
      .col-lg-4.p-4.px-5
        .row.justify-content-center.align-items-center.mb-5.brd-r
          .col-6
            figure
              img.img-116(src='@/assets/curso/temas/img-autocad-tema4.png', alt='Texto que describa la imagen').img-softw-diseno-tema4
          .col-6
            h4.text-center AutoCAD


      .col-lg-4.p-4.px-5
        .row.justify-content-center.align-items-center.mb-5.brd-r
          .col-6
            figure
              img.img-116(src='@/assets/curso/temas/img-archicad-tema4.png', alt='Texto que describa la imagen').img-softw-diseno-tema4
          .col-6
            h4.text-center ArchiCAD

      .col-lg-4.p-4.px-5
        .row.justify-content-center.align-items-center.mb-5.brd-r
          .col-6
            figure
              img.img-116(src='@/assets/curso/temas/img-microstation-tema4.png', alt='Texto que describa la imagen').img-softw-diseno-tema4
              
          .col-6
            h4.text-center MicroStation
      .col-lg-4.p-4.px-5
        .row.justify-content-center.align-items-center.mb-5.brd-r
          .col-6
            figure
              img.img-116(src='@/assets/curso/temas/img-allplan-tema4.png', alt='Texto que describa la imagen').img-softw-diseno-tema4
          .col-6
            h4.text-center Allplan

      .col-lg-4.p-4.px-5
        .row.justify-content-center.align-items-center.mb-5.brd-r
          .col-6
            figure
              img.img-116(src='@/assets/curso/temas/img-corelcad-tema4.png', alt='Texto que describa la imagen').img-softw-diseno-tema4
          .col-6
            h4.text-center CorelCAD



    .row.container.justify-content-around.align-items-center 
        .row 
          .col-lg-10.bloque-color-tarjfinal-tema4.p-4
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

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
