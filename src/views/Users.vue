<template>

  <section class="row">

    <userForm/>

    <userTable/>

  </section>

</template>


<script>
  
  import userForm from "../components/Users/Form";
  import userTable from "../components/Users/Table";

  export default {

    data(){
      return{
        usuarios: []
      }
    },
    
    components:{
      userForm,
      userTable
    },

    methods:{
      savePadre(usuario) {
        this.usuarios.push(usuario);
      }
    }

  }
</script>
