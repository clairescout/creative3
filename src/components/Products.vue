

<template>
<carousel :navigationEnabled="true">
  <slide>
    <img src='/static/images/boat.jpg'>
  </slide>
  <slide>
    <img src='/static/images/lilacs.jpg'>
  </slide>
  <slide>
    <img src='/static/images/flowers.jpg'>
  </slide>
  <slide>
    <img src='/static/images/leaves.jpg'>
  </slide>
  <slide>
    <img src='/static/images/flipbook.jpg'>
  </slide>
  <slide>
    <img src='/static/images/outside.jpg'>
  </slide>
  <slide>
    <img src='/static/images/rainbowpages.jpg'>
  </slide>
  <slide>
    <img src='/static/images/spelling.jpg'>
  </slide>
</carousel>

</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
 name: 'Products',
 components: {
   Carousel,
   Slide
 }

};
</script>

<style scoped>

 body {
     padding: 0px;
     margin: 0px;
 }
 img {

  height: 600px;
  width: auto;
 }


</style>
