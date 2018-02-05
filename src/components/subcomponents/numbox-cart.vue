<template>
  	<div class="mui-numbox" data-numbox-min='1' style="height:25px;">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input class="mui-input-numbox" type="number" :value="initCount" ref="inpVal" @change="changeVal"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
    import mui from "../../lib/mui/js/mui.js";
    import {mapMutations} from 'vuex'
    export default{
        methods:{  
          ...mapMutations(["updateCount"]),
           changeVal(){
             const inpVal = parseInt(this.$refs.inpVal.value)
             this.updateCount({
                 id:this.id,
                 count:inpVal
             })           
           },
        },
        mounted() {      
            mui(".mui-numbox").numbox();
        },
        props:["initCount","id"]
    }
    
</script>
<style lang="scss" scoped>

</style>

