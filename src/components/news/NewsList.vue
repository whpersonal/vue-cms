<template>
  <div>
   <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
			<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<router-link :to="'/home/newsinfo/' + item.id"><h1 class="title">{{item.title}}</h1></router-link>
						<p class='mui-ellipsis'>
                             <span>发表时间：{{item.add_time | dataFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                         </p>
					</div>
			</li>

	</ul>

  </div>
</template>

<script>
    export default {
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            async getNewsList(){
                const {data} = await this.$http.get("/api/getnewslist")
                // console.log(data)
                this.newsList = data.message
                // console.log(this.newsList)
            }
        }
    }
</script>




<style lang="scss" scoped>
    .mui-table-view{
        .title{
            font-size: 13px;
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: rgb(163, 162, 162);
        }
    }
</style>

