<template>
  	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input class="mui-input-numbox" type="number" value="1" ref="inpVal" @change="changeVal"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
    import mui from "../../lib/mui/js/mui.js";
    export default{
        // 此时拿到的max值为undefined
        props:["max"],
        methods:{  
           changeVal(){
            //    console.log(this.$refs.inpVal.value)
            const inpVal = parseInt(this.$refs.inpVal.value)
            this.$emit("func",inpVal)

           },
        
        },
        mounted() {      
            mui(".mui-numbox").numbox();
        },
        watch:{
            max:function(newVal,oldVal){
                // console.log(newVal+"------"+oldVal)
                // 当拿到真正的max，即newval时，将newval复制给max
                 mui(".mui-numbox").numbox().setOption("max", newVal);
            }
        }
    }
    
</script>
<style lang="scss" scoped>

</style>

