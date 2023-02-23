<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de proyectos de TI


    .row.container.justify-content-around.align-items-center
      
      .row 
        .col-lg-12.bloque-texto-tar1-tema3.p-4
          p Un proyecto de gestión de tecnologías de información es un proceso o un conjunto etapas que se debe establecer para lograr el cumplimiento de un objetivo o unos requerimientos preestablecidos.
          p Para conocer cada una de esas etapas, le invitamos a ver el siguiente video:

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p Los proyectos de tecnologías de la información se pueden agrupar de tres maneras, tal como se muestra a continuación: 
        
        br
        
        p Conozcamos cada una de ellas: 

        .bg--img_03
          .row.justify-content-center.mb-4
            .col-lg-7
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-tarjetas-acordeon")
                .row(titulo="Proyectos de hardware")
                  .col-12
                    p.mb-0 Este tipo de procesos se dan al interior de las organizaciones por el tiempo de obsolescencia de los equipos o dispositivos utilizados, es decir, en el caso de los computadores, estos tienen definido un tiempo de vida según los criterios de actualización tecnológica establecidos por las empresas. Hay compañías en las cuales el tiempo de vida útil de un computador es de dos años, hay otras con tres años y otras con hasta cinco años. Este lapso de tiempo es el que me valida el desarrollo y la implementación de los proyectos de cambios de equipos, en el caso de los computadores.

                .row(titulo="Proyectos de software")
                  .col-12
                    p.mb-0 Este tipo de planes se dan como producto del plan estratégico de sistemas de información de las organizaciones, en el cual se deben establecer los procesos de desarrollo o adquisidores de sistemas de información, en el caso de nuevos requerimientos de <em>software</em>. Cuando hay la necesidad de realizar una actualización a los sistemas, también se dan inicio a estos proyectos como consecuencia de modificaciones a los <em>software</em> existentes.

                .row(titulo="Proyectos mixtos")
                  .col-12
                    p.mb-0 Son aquellos que agrupan los dos componentes, de <em>hardware</em> y <em>software</em> al mismo tiempo. Un ejemplo de estos es un cambio de un servidor; como consecuencia del cambio de la máquina, hay que realizar también la actualización del <em>software</em> del sistema operativo.

            .col-lg-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-proyectos-ti-azul.png", alt="alt").img400.m-auto

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h2 Ciclo de vida de un proyecto

        .row
          .col-lg-8
            p.p-3 El ciclo de vida de la gestión de un proyecto detalla los procesos de alto nivel que son imprescindibles para que la ejecución del proyecto sea exitosa.
            p.bloque-texto-rosa-ciclo-vida.p-4 Uno de los efectos para que el progreso de un proyecto no sea exitoso es el despilfarro de dinero y de recursos, esto se puede evitar con una gestión de proyectos competente, lamentablemente más de la mitad de los proyectos no exitosos se malogran por fallas en el proceso de planificación.
            
          .col-lg-4
              figure
                  img(data-aos="fade-left")(src="@/assets/curso/temas/img-ciclo-vid-proyecto.png", alt="alt")
    
    br
    br
    br


    .row.container.justify-content-around.align-items-center


        p El ciclo de vida de la gestión de un proyecto acostumbra a distinguirse en cuatro fases, las cuales conforman el recorrido del proyecto desde un inicio hasta un fin: 

        .row 
          .col-lg-12

            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/img-pto-caliente-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

              .tarjeta.tarj-rosa-pto-caliente-tema3.p-3(x="1%" y="10%" numero="1")
                .h5.mb-2 Iniciación
                p La primera fase es la de identificar necesidades o exigencias solicitadas, una dificultad o una oportunidad y luego proponer, voluntariamente ideas sobre las formas en las que se puede cubrir esta necesidad, darle solución a esta situación o aprovechar la oportunidad. En esta etapa se define el objetivo para el proyecto , se establece si el proyecto es factible, se indican el alcance y los entregables.

              .tarjeta.tarj-azul-pto-caliente-tema3.p-3(x="27%" y="10%" numero="2")
                .h5.mb-2 Planificación
                p Una vez que el proyecto ha sido aprobado, la realiza la notificación de trabajo o documento para la iniciación del proyecto, por tanto, se inicia el avance hacia la fase de planificación.
                P Esta fase se separa en tareas más pequeñas el proyecto general, se organizan los respectivos equipos y el cronograma para obtener el cumplimiento de las actividades. Se definen los objetivos más limitados dentro del proyecto general y se valida que sean alcanzables. 


              .tarjeta.tarj-rosa-pto-caliente-tema3.p-3(x="53%" y="10%" numero="3")
                .h5.mb-2 Ejecución
                p El plan se convierte en acción cuando se llega a la etapa de ejecución. En esta fase, la labor del gerente del proyecto es la de conservar el proceso bajo control, organizar a los integrantes del equipo, aplicar los cronogramas y asegurar que el trabajo se realice según el plan original.

              .tarjeta.tarj-azul-pto-caliente-tema3.p-3(x="79%" y="10%" numero="4")
                .h5.mb-2 Cierre
                p En esta fase se proporcionan los entregables finales, se liberan los recursos del proyecto y se establece el éxito del proyecto. Todavía quedan actividades sustanciales por realizar cómo: evaluar qué fue lo que funcionó y qué fue lo que no funcionó en el proyecto.

          p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
          p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!
          p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laudantium, cupiditate enim adipisci a molestias maxime vero facilis sit? Eum incidunt maiores odit perferendis magni earum cumque, molestias ut ab!

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-7
          p.bloque-txt-color-import-objt-proy.p-3 Es de gran importancia tener en cuenta que los objetivos del proyecto son la estructura fundamental sobre la cual se lleva a cabo la valoración final.
           br
           | Se define o establece un objetivo general que debe cumplir al 100% con lo solicitado y/o los requerimientos establecidos dentro del proceso de aprobación inicial.
          p.p-3 Después de definido el objetivo macro o general se desagrega en objetivos más pequeños para así poder establecer las tareas, los tiempos, los cronogramas y las personas encargadas de cada uno de estos.
           br
           | La sumatoria de estos pequeños objetivos, es decir, su ejecución, deben establecer el logro del objetivo general. 

        .col-lg-5
           figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/img-objetivos-proy.png', alt='Texto que describa la imagen')
       
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      .row 
        .col-lg-12
          p.bloque-txt-color-import-objt-proy.p-3 La gestión de proyectos es un campo en constante evolución, en el que se deben considerar varios enfoques para asegurar el éxito. 
           | Una metodología de gestión de proyectos es un sistema de principios, técnicas y procedimientos usados por personas que trabajan en una misma disciplina. Las metodologías fundamentales se diferencian no solo por la manera en que están estructuradas, sino también por la naturaleza de los entregables, la afluencia de trabajo e incluso, por el <em>software</em> de gestión de proyectos que utilizan.
    
    br
    br

    .row.container.justify-content-around.align-items-center

      p Conozcamos las metodologías de gestión de proyectos más utilizadas, la cuales ayudan a lograr parte del éxito en el proyecto:

      SlyderF(columnas="col-lg-6 col-xl-4").bloque-arrusel-tar-tema2
        //1
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-agil.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center FIRST
          p.text-center.texto-carrusel-tema2 Metodología Ágil
          p.texto-invisible Lorem ipsum 
        //2
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-cascada.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 2
          p.text-center.texto-carrusel-tema2 Modelo de cascada
          p.texto-invisible Lorem ipsum 
        //3
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-scrum.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 3
          p.text-center.texto-carrusel-tema2 Metodología Scrum
          p.texto-invisible Lorem ipsum 
        //4
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-kanban.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 4
          p.text-center.texto-carrusel-tema2 Metodología Kanban
          p.texto-invisible Lorem ipsum 
        //5
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-scrumban.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Metodología Scrumban
          p.texto-invisible Lorem ipsum 
        //6
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-prince2.png' alt='AvatarTop').img-carrusel-tema2
          
          //h2.text-center 6
          
          p.text-center.texto-carrusel-tema2 Metodología PRINCE2
          p.texto-invisible Lorem ipsum 
        
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-six-sigma.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Metodología Six Sigma
          p.texto-invisible Lorem ipsum 
        //7
        
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-cpm.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Método de la ruta crítica (CPM)
          p.texto-invisible Lorem ipsum 
        //8
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-ccpm.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Gestión de proyectos por cadena crítica (CCPM)
          //p.texto-invisible Lorem ipsum 

        //9
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-lean.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Metodología Lean
          p.texto-invisible Lorem ipsum 
        //10
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-pmi.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Guía PMBOK® del Project Management Institute (PMI)
          //p.texto-invisible Lorem ipsum 

        //11
        .tarjeta.color-tarjetas-carrusel-tema2.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/img-metod-XP.png' alt='AvatarTop').img-carrusel-tema2
          //h2.text-center 5
          p.text-center.texto-carrusel-tema2 Programación extrema (XP)
          p.texto-invisible Lorem ipsum 





</template>

<script>
export default {
  name: 'Tema3',
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
