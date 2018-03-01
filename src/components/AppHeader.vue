<template>
    <nav>
    <h1>GGJournals</h1>
	<label for="show-menu" class="show-menu">Show Menu</label>
	<input type="checkbox" id="show-menu" role="button">
        <ul id="menu">
	    <li><router-link to="/">Home</router-link></li>
	    <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
	</ul>
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Gudea');
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
 /*Strip the ul of padding and list styling*/
 h1 {
    font-family: 'Pacifico', cursive;
     font-size: 100px;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 50px;
     color: rgb(5, 74, 40);
     text-align: center;
 }
 .clear {
     float: clear;
 }
 nav {
     display: grid;
 }
 ul {
     list-style-type:none;
     margin-left:42%;
     padding:0;
     font-family: 'Gudea', sans-serif;
    font-size: 20px;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: left;
     margin-right: 1px;
 }
 /*Style for menu links*/
 li a {
     display:block;
     margin-right: 20px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: rgb(5, 74, 40);
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
    color: grey;
 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }
</style>
