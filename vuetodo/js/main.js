var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (event) {
      // alert();
      if (this.newItem == '') return; //フォームが空の場合処理を止める(フォームが空の場合配列に追加されない)
      var todo = {
        item: this.newItem,
        isDone: false  //falseならタスク未完了
      };
      this.todos.push(todo); // toods配列の中に要素を追加していく
      this.newItem = '';// フォームのボタンを押したら値がクリアされる
    },
    deleteItem: function (index) { // 削除ボタンを押したときに削除するための関数
      // alert(index);
      this.todos.splice(index, 1) 
    }
  }
})