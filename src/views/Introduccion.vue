<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.justify-content-around.align-items-center.p-2.p-md-3
    
      .col-md.col-lg-5
        img(src="@/assets/curso/temas/img-introduccion.png")

      .col-md.col-lg-7
        .bloque-texto-color-introduccion.p-4
          p Apreciado aprendiz, bienvenido a este componente formativo donde se conocerá qué son las redes, su clasificación y tipología, al igual que los medios de transmisión. También se estudiará la gestión de proyectos de tecnologías de la información, sus características, los tipos, cuál es el ciclo de vida de un proyecto y cómo lograr una implementación exitosa de las redes de datos en el proceso de instalación e implementación de la infraestructura de las tecnologías de la información y las telecomunicaciones.
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. 
        
        
    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
