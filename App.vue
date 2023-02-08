<template>


<div class="container h-screen min-w-full bg-black mx-auto flex flex-col justify-center items-center" id="example-2">
        <div class="absolute inset-x-0 top-0 h-16 text-white text-center py-8 text-4xl">UpVote!</div>
    
    
    
            <div class="w-5/12 h-36 bg-white my-3 flex ">
    <div class="w-3/12 h-full p-3 flex items-center justify-center text-9xl" id=" img" ><i class="fa-sharp fa-solid fa-image" ></i></div> 
    <div class="text-left ml-1.5 my-2" id="head-text">
    <h3 class="text-sky-500 my-1.5"><a href="">TinFold: Tailored tinfoil hats</a> </h3>
    <h5>We have your measurements and shipping address.</h5>
    <div class="flex ">   
        <h6 class="text-xs my-3">Submited by:</h6> <img src="img/man (1).png" alt="man" style="width: vw; height: 2vw; margin-left:10px ; padding-top: 10px;">
    </div>
    </div>

    <div class="flex justify-end items-center w-1/12 ml-14">
    <button ><i class="fa-sharp fa-solid fa-caret-up"></i></button> 
    <span class="p-1">17</span>
    </div>
    </div>

    <div class="w-5/12 h-36 bg-white my-3 flex ">
        <div class="w-3/12 h-full p-3 flex items-center justify-center text-9xl" id=" img" ><i class="fa-sharp fa-solid fa-image" ></i></div> 
        <div class="text-left ml-1.5 my-2" id="head-text">
        <h3 class="text-sky-500 my-1.5"><a href="">TinFold: Tailored tinfoil hats</a> </h3>
        <h5>We have your measurements and shipping address.</h5>
        <div class="flex ">   
            <h6 class="text-xs my-3">Submited by:</h6> <img src="img/man.png" alt="man" style="width: vw; height: 2vw; margin-left:10px ; padding-top: 10px;">
        </div>
        </div>
    
        <div class="flex justify-end items-center w-1/12 ml-14">
            <button  @click="counter2++"><i class="fa-sharp fa-solid fa-caret-up"></i></button> 
            <h2 class="p-1" >{{counter2}}</h2>
            </div>
            </div>


        <div class="w-5/12 h-36 bg-white my-3 flex ">
            <div class="w-3/12 h-full p-3 flex items-center justify-center text-9xl" id=" img" ><i class="fa-sharp fa-solid fa-image" ></i></div> 
            <div class="text-left ml-1.5 my-2" id="head-text">
            <h3 class="text-sky-500 my-1.5"><a href="">TinFold: Tailored tinfoil hats</a> </h3>
            <h5>We have your measurements and shipping address.</h5>
            <div class="flex ">   
                <h6 class="text-xs my-3">Submited by:</h6> <img src="img/man (2).png" alt="man" style="width: vw; height: 2vw; margin-left:10px ; padding-top: 10px;">
            </div>
            </div>
        
            <div class="flex justify-end items-center w-1/12 ml-14">
                <button  @click="counter3++"><i class="fa-sharp fa-solid fa-caret-up"></i></button> 
                <h2 class="p-1" >{{counter3}}</h2>
                </div>
                </div>



            <div class="w-5/12 h-36 bg-white my-3 flex " id="app">
                <div class="w-3/12 h-full p-3 flex items-center justify-center text-9xl" id=" img" ><i class="fa-sharp fa-solid fa-image" ></i></div> 
                <div class="text-left ml-1.5 my-2 " id="head-text">
                <h3 class="text-sky-500 my-1.5"><a href="">TinFold: Tailored tinfoil hats</a> </h3>
                <h5>We have your measurements and shipping address.</h5>
                <div class="flex ">   
                    <h6 class="text-xs my-3">Submited by:</h6> <img src="img/man (1).png" alt="man" style="width: vw; height: 2vw; margin-left:10px ; padding-top: 10px;">
                </div>
             
                </div>
            
                <div class="flex justify-end items-center w-1/12 ml-14">
                <button  @click="counter4++"><i class="fa-sharp fa-solid fa-caret-up"></i></button> 
                <h2 class="p-1" >{{counter4}}</h2>
                </div>
                </div>
</div>










</template>

<script>

import { mapState, mapMutations } from "vuex";
 export default {
    name:"App",
    methods: {
        ...mapMutations(["incrementCounter"]),
    },
    computed: {
        ...mapState(["storeCounter"])
    }
 }

</script>
