<template>
 <div class="h-screen w-full grid grid-col">
     <!--   nav bar-->
     <nav class="nav-wrapper flex justify-between h-16">
       <!--     left-side-->
       <div class="flex space-x-3">
         <div class="logo flex justify-center items-center">
           <a>Logo</a>

         </div>
         <div class="search-bar relative  flex justify-center items-center">
           <div class="absolute inset-y-0 start-0 ps-3 flex items-center">
             <span class="material-icons-outlined ">search</span>
           </div>
           <input class="ps-10 border border-gray-300 h-10 rounded-md lg:w-72 text-gray-700 focus:ring-blue-400 focus:border-blue-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search all Loans" />
         </div>
       </div>
       <!--     right side-->
       <div class="flex items-center justify-center pe-4 space-x-3">
           <div><a>Borrow</a></div>
           <div><p>Lend</p></div>
           <div><p>About</p></div>
           <div><a>Log in</a></div>
       </div>
     </nav>
<!--     main content-->
     <div class="absolute bg-sky-300 h-96 grid grid-cols-2 w-full">
       <div class="col-span-1 flex flex-col justify-center items-center ps-12 ">
         <div class="lg:w-96 w-64">
           <h1 class="md:text-5xl text-2xl">Soko Pesa Lending Platform</h1>
           <h2 class="pt-3 text-left">Offer loans to other users on their non-fungilbe tokens</h2>
         </div>
       </div>
       <div class="flex justify-center  items-center pb-8">
         <img  src="../assets/images/Lend3.png" class="h-80"/>
       </div>
     </div>

     <div class="absolute flex w-full z-9 justify-center mt-80 drop-shadow-lg p-8">
       <div class="grid grid-cols-4 bg-gray-50 space-x-3 rounded-lg  w-full p-6 h-auto">

         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="relative">
             <img class="rounded-t-lg w-full" src="../assets/images/coffess.jpeg" alt="" />
             <div class="absolute bottom-1 left-2 bg-white rounded-xl p-1 flex">
               <span class="material-icons-round">place</span>
               <span class="text-sm">Nairobi, kenya</span>
             </div>
           </div>
           <div class="p-5">
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$1,050 helps Margaret to purchase farm inputs to boost produce</p>
           </div>
         </div>

         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="relative">
             <img class="rounded-t-lg w-full" src="../assets/images/coffess.jpeg" alt="" />
             <div class="absolute bottom-1 left-2 bg-white rounded-xl p-1 flex">
               <span class="material-icons-round">place</span>
               <span class="text-sm">Nairobi, kenya</span>
             </div>
           </div>
           <div class="p-5">
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$1,050 helps Margaret to purchase farm inputs to boost produce</p>
           </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="relative w-full">
             <img class="rounded-t-lg w-full" src="../assets/images/coffess.jpeg" alt="" />
             <div class="absolute bottom-1 left-2 bg-white rounded-xl p-1 flex">
               <span class="material-icons-round">place</span>
               <span class="text-sm">Nairobi, kenya</span>
             </div>
           </div>
           <div class="p-5">
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$1,050 helps Margaret to purchase farm inputs to boost produce</p>
           </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="relative">
             <img class="rounded-t-lg w-full" src="../assets/images/coffess.jpeg" alt="" />
             <div class="absolute bottom-1 left-2 bg-white rounded-xl p-1 flex">
               <span class="material-icons-round">place</span>
               <span class="text-sm">Nairobi, kenya</span>
             </div>
           </div>
           <div class="p-5">
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$1,050 helps Margaret to purchase farm inputs to boost produce</p>
           </div>
         </div>
       </div>
     </div>
<!--   <div class="pt-80">-->
<!--     <div class="">-->
<!--       <h1>Realise your impact</h1>-->

<!--     </div>-->

<!--   </div>-->
 </div>
</template>
<script setup lang="ts">
</script>