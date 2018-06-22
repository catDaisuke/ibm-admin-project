<template>
    <div>
      <b-container  fluid>
        <b-row>
        <b-col align-self="center" sm="10">
        <table class="table table-fixed table-striped">
            <thead>
                <tr>
                    <td><b-btn v-b-modal.newModal>new youtube</b-btn></td>
                    <td>YoutubeId</td>
                    <td>画面表示名</td>
                    <td>カテゴリ</td>
                    <td>削除フラグ</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in youtubeList" :key="item.youtubeid">
                    <td><b-btn v-b-modal.editModal>edit</b-btn></td>
                    <td>{{item.youtubeid}}</td>
                    <td>{{item.youtubename}}</td>
                    <td>{{item.categoryid}}</td>
                    <td>{{item.delflg}}</td>
                </tr>
            </tbody>
        </table>
        </b-col>
        </b-row>
        <b-modal id="editModal">
            工事中
        </b-modal>
        <b-modal id="newModal" size="lg">
            <b-container fluid>
            <b-row>
                <b-col sm="2" >youtubeid</b-col>
                <b-col sm="2"><b-btn v-on:click='helpYoutubeId'>?</b-btn></b-col>
                <b-col sm="8"><b-form-input v-model="formInput.youtubeid"></b-form-input></b-col>
            </b-row>
            <b-row>
                <b-col sm="2">画面表示名</b-col>
                <b-col sm="2"></b-col>
                <b-col sm="8"><b-form-input v-model="formInput.youtubename"></b-form-input></b-col>
            </b-row>
            <b-row>
                <b-col sm="2">カテゴリID</b-col>
                <b-col sm="2"><b-btn v-on:click='helpCagetory'>?</b-btn></b-col>
                <b-col sm="8"><b-form-input type="number" v-model="formInput.categoryid"></b-form-input></b-col>
            </b-row>
            <b-row>
                <b-col sm="2">投入者ID</b-col>
                <b-col sm="2"></b-col>
                <b-col sm="8"><b-form-input v-model="formInput.insuser"></b-form-input></b-col>
            </b-row>
            </b-container>
            <b-btn v-on:click="submit">登録</b-btn>
        </b-modal>
      </b-container>
    </div>
</template>
<script>
import axios from 'axios'
import alertify from 'alertify.js'
export default {
  name: 'editYoutubeId',
  props: {},
  data () {
    return {
      youtubeList: null,
      categoryList: null,
      formInput: {
        youtubeid: null,
        youtubename: null,
        categoryid: null,
        insuser: null,
        delflg: '0'
      }
    }
  },
  created: function () {
    let that = this
    axios.get(`https://emotion-api-project-ibm.herokuapp.com/youtube/all`)
      .then(response => {
        that.$data.youtubeList = response.data
        axios.get(`https://emotion-api-project-ibm.herokuapp.com/category`)
          .then(response => {
            that.$data.categoryList = response.data
          })
          .catch(e => {
            alert('test')
            console.log(e)
          })
      })
      .catch(e => {
        alert('通信に失敗しました')
        console.log(e)
      })
  },
  methods: {
    helpCagetory: function () {
      var message = 'カテゴリは以下から選択してください<br>'
      for (var i = 0; i < this.$data.categoryList.length; i++) {
        message = message + this.$data.categoryList[i].categoryid + this.$data.categoryList[i].categoryname + '<br>'
      }
      alertify.alert(message)
    },
    helpYoutubeId: function () {
      var message = 'youtubeIdとは、youtubeを一意に特定するIDです。URLのv=以降の部分です。<br>'
       + '詳細は<a href="https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1161467451">リンク</a>をご覧ください。'
      alertify.alert(message)
    },
    submit: function () {
      var that = this
      axios.post(`https://emotion-api-project-ibm.herokuapp.com/youtube`, {
        youtubeid : that.$data.formInput.youtubeid,
        youtubename : that.$data.formInput.youtubename,
        categoryid : that.$data.formInput.categoryid,
        insuser : that.$data.formInput.insuser,
        delflg : that.$data.formInput.delflg
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
          if(response === null || response.data === null || response.data === undefined || response.data === ''){
            alert('入力に誤りがあります')
          } else {
            alert('登録完了しました。画面を更新してください')
          }
        })
        .catch(e => {
          alert('登録に失敗しました')
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
</style>
