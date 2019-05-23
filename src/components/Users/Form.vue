<template>

  <article class="col-xs-12 col-md-6">

    <form>
      
      <div class="form-group">
        <label for="firstName">{{"First Name"}}</label>
        <input
          type="imput"
          id="firstName"
          class="form-control"
          v-model="user.first"
          placeholder="Enter First Name"
        >
      </div>

      <div class="form-group">
        <label for="lastName">{{"Last Name"}}</label>
        <input
          type="input"
          id="lastName" 
          v-model="user.last"
          class="form-control" 
          placeholder="Enter Last Name"
        >
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">{{"Email address"}}</label>
        <input 
          type="email" 
          class="form-control" 
          v-model="user.email"
          id="email" 
          placeholder="Enter email"
          aria-describedby="emailHelp" 
        >
        <small id="emailHelp" class="form-text text-muted">{{"We'll never share your email with anyone else."}}</small>
      </div>
    
      <div class="form-group">
        <label for="password">{{"Password"}}</label>
        <input 
          type="password" 
          class="form-control" 
          id="password" 
          placeholder="Password"
          v-model="user.password"
        >
      </div>
      
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">{{"Check me out"}}</label>
      </div>

      <button type="button" class="btn btn-primary" @click="save">{{"Save"}}</button>

    </form>

  </article>
  
</template>

<script>

import User from '../../models/User';
import UsersVue from '../../views/Users.vue';

  export default {
    
    name: 'user-form',

    methods:{

      save(){
        const user = {...this.user};
        this.$store.dispatch('saveAction', user);
      }

    },
    computed:{
      user(){
        return this.$store.state.user;
      }
    }

  }

</script>