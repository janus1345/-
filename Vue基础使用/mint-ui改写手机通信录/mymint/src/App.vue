<template>
  <div id="app">
  <mt-header title="手机通信录" fixed>
 
    <mt-button icon="back" slot='left'>返回</mt-button>
 
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<mt-index-list>
  <mt-index-section v-for="item in userData" :index="item.index" :key="item.id">
    <mt-cell  v-for="user in item.users" :title="user.name" :key="user.id" @click.native='telAlert(user.tel)'></mt-cell>
    
  </mt-index-section>
  
</mt-index-list>
    
  </div>
</template>

<script>
import {MessageBox} from 'mint-ui'
 var userData=[
    {'index':'A','users':[
    {'name':'a1','tel':'130994359041'},
    {'name':'a2','tel':'130994359042'},
    {'name':'a3','tel':'130994359043'},
    {'name':'a4','tel':'130994359044'},
    ]},
    {'index':'B','users':[
    {'name':'b1','tel':'130994359045'},
    {'name':'b2','tel':'130994359046'},
    {'name':'b3','tel':'130994359047'},
    {'name':'b4','tel':'130994359048'},
    ]},
    {'index':'C','users':[
    {'name':'c1','tel':'130994359049'},
    {'name':'c2','tel':'130994359050'},
    {'name':'c3','tel':'130994359051'},
    {'name':'c4','tel':'130994359052'},
    ]},
    {'index':'D','users':[
    {'name':'d1','tel':'130994359053'},
    {'name':'d2','tel':'130994359054'},
    {'name':'d3','tel':'130994359055'},
    {'name':'d4','tel':'130994359056'},
    ]},
    {'index':'E','users':[
    {'name':'e1','tel':'130994359053'},
    {'name':'e2','tel':'130994359054'},
    {'name':'e3','tel':'130994359055'},
    {'name':'e4','tel':'130994359056'},
    ]},
    {'index':'F','users':[
    {'name':'f1','tel':'130994359053'},
    {'name':'f2','tel':'130994359054'},
    {'name':'f3','tel':'130994359055'},
    {'name':'f4','tel':'130994359056'},
    ]},

    ];


export default {
  name: 'app',
  data () {
    return {
     userData:userData
    }
  },
  methods:{
    telAlert:function(tel){
        MessageBox({
          title:'呼叫',
          message:tel,
          showCancelButton:true,

        }).then(function(){
          alert(111);
        });
    }
  }
}
</script>

<style lang="scss">
*{margin: 0; padding: 0;}

</style>
