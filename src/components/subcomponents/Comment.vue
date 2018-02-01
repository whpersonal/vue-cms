<template>
    <div>
        <h4 class="postComment">发表评论---{{id}}</h4>
        <hr>
        <textarea placeholder="请输入评论" maxlength="120" v-model="cmtMsg"></textarea>
        <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>
    <!-- 评论列表区域 -->
    <div class="cmt-list" v-for="(item,i) in commentList" :key="i">
      <div class="cmt-item">
        <div class="cmt-title">第{{i+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dataFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore"  v-show="!isover">加载更多</mt-button>
    
    </div>
</template>

<script>
// 加载mintui组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageindex: 1,
      commentList: [],
      cmtMsg:'',
      isover: false,
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    //  获取评论列表
    async getComment() {
        if(this.isover){
            return
        }
      const { data } = await this.$http.get(
        "./api/getcomments/" + this.id + "?pageindex=" + this.pageindex
      )
      if(data.status===0){
          if (data.message.length <= 0) {
                            Toast('已经到底了')
              return (this.isover = true);

          }
          this.commentList = this.commentList.concat(data.message)
      }
    //   console.log(this.commentList);
    },
    // 发表评论
    async postCmt(){
        // console.log(this.cmtMsg)
        if(this.cmtMsg.trim()<=0) return Toast("评论内容不能为空！");
        const {data} = await this.$http.post('/api/postcomment/'+this.id,{
            content:this.cmtMsg.trim()     
        })
        //  console.log(data)
        if(data.status===0){
            Toast("提交成功")
            const newCmt = {
                user_name :'哈哈',
                add_time:new Date(),
                content:this.cmtMsg.trim()
            }
            this.commentList.unshift(newCmt);
            this.cmtMsg=''
        }

    },
    // 获取更多评论
    getMore(){
        this.pageindex++
        this.getComment()

    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
textarea {
  margin: 0;
  font-size: 14px;
}
.cmt-list {
  margin: 5px 0;
  .cmt-item {
    .cmt-title {
      font-size: 14px;
      line-height: 30px;
      background-color: #ddd;
    }
    .cmt-body {
      font-size: 13px;
      line-height: 35px;
      text-indent: 2em;
    }
  }

}
</style>
