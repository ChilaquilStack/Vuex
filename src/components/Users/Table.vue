<template>
  
  <article class="col-md-6">
    
    <table class="table">
      
      <thead>
        <tr>
          <th scope="col">{{"#"}}</th>
          <th scope="col">{{"Firs"}}t</th>
          <th scope="col">{{"Last"}}</th>
          <th scope="col">{{"Email"}}</th>
          <th scope="col">{{"options"}}</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="(user,index) in usuarios" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{user._first}}</td>
          <td>{{user._last}}</td>
          <td>{{user._email}}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-warning btn-sm" @click="edit(user)">
                <span>
                  {{'Edit'}}
                </span>
              </button>
              <button class="btn btn-danger btn-sm" @click="remove(index)">
                <span>
                  {{'Delete'}}
                </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    
    </table>
  
  </article>

</template>

<script>

  export default {

    computed:{
      usuarios(){
        return this.$store.state.users;
      }
    },

    methods:{
      
      edit(user){
      
      },

      remove(index){
        
      }
    
    }

  }
</script>

