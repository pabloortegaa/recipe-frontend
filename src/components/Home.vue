<template >
    <div>
        <div class="wrapper box">            
            
            <div class="single-box"><img alt="" src="../assets/plato4.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato5.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato6.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato8.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato9.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato10.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato11.jpg"></div>
            <div class="single-box"><img alt="" src="../assets/plato12.jpg"></div>
            

        </div>
        <div class="title">
        <h1 style="background-color:#d2bb85;">Easy recipes with Pablo</h1>
        </div>
        <div class="btn">
        <button  v-on:click=gotoapp()  type="button" class="btn btn-primary" >
            Click to see the Recipes 
        </button>
        </div>
        <p>{{ msg }}</p>
    </div>
</template>




<script>
import axios from 'axios'
export default
{
    name: 'Home',
    data()
    {
        return {
            msg: '©All images used on the home page were taken by Chef Pablo Ortega.'
        }
    },
    methods: 
    {
        

        gotoapp(){
            this.$router.push('/recipes/')
        }

    }

}
</script>
<style scoped>

 * {
 	padding: 0;
 	margin: 0;
 	box-sizing: border-box;
 }
 .box {
 	display: flex;
 	align-items: flex-start;
 	background: #fff;
 	height: 150vh;
 	overflow: hidden;
 	position: relative;
 }
 .box .single-box img {
 	position: absolute;
 	min-width: 10%;
 	min-height: 10%;
 	height: auto;
 	background: #000;
 	-webkit-backface-visibility: hidden;
 	backface-visibility: hidden;
 	opacity: 0;
 	transform: scale(1.5) rotate(15deg);
 	-webkit-animation: animate 32s infinite;
 	animation: animate 32s infinite;
 }
 .box .single-box:nth-child(3) img {
 	-webkit-animation-delay: 8s;
 	animation-delay: 8s;
 }
 .box .single-box:nth-child(2) img {
 	-webkit-animation-delay: 16s;
 	animation-delay: 16s;
 }
 .box .single-box:nth-child(1) img {
 	-webkit-animation-delay: 24s;
 	animation-delay: 24s;
 }
 @keyframes animate {
 	25% {
 		opacity: 1;
 		transform: scale(1) rotate(0);
 	}
 	40% {
 		opacity: 0;
 	}
 }

div.title{

  position: absolute;
    width: 100%;
  top: 5%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h1{
    text-align: center;
    font-size: 50px;
    font-family: 'Lobster', cursive;
    color: rgb(6, 5, 3);
    text-shadow: 1px 2px 1px #d2bb85;
}
.center {
  displaY: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
p{
    padding:10%;
    text-align: center;
}

div.btn{

  position: absolute;
   
  top: 5%;
  left: 80%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.btn-primary{
    margin: 20%;
}
</style>