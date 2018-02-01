<template>
    <div>
        <h2 class="title">{{newsinfo.title}}</h2>
        <p class="info">
            <span>发表时间 : {{newsinfo.add_time | dataFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <p v-html="newsinfo.content"></p>
        <comment :id="id"></comment>
    </div>
</template>
<script>
    import comment from "../subcomponents/Comment.vue"
    export default {
    data() {
        return {
        newsinfo: {} // 默认新闻详情是一个空对象
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        async getNewsList() {
        const  { data }  = await this.$http.get('/api/getnew/'+this.id);
        //   console.log(data)
            if(data.status === 0){
            this.newsinfo = data.message[0]
            }
        }
    },
    props:["id"],
    // 将评论组件注册为自己的私有组件
    components:{
        comment
    }
    };
</script>
<style lang="scss" scoped>
.title {
  font-size: 15px;
  text-align: center;
  color: red;
  margin: 15px 0;
}
.info {
  display: flex;
  color: #26a2ff;
  font-size: 13px;
  justify-content: space-between;
}
</style>

