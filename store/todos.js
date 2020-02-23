// 読み込み
import firebase from '~/plugins/firebase' //firebaseの初期化設定ファイル
import { firestoreAction } from 'vuexfire' //vuecfireが用意しているfirestoreActionを呼び出す

// データベースの設定
const db = firebase.firestore()
const todosRef = db.collection('todos') // "collectionはtodosを使う"という設定

// ステートの定義
export const state = () => ({
  todos: [] // todo一覧を管理するtodosを配列で定義
})

// アクション
export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => { // Action呼出 引数は、本来なら第一引数にはcontextが入るが、こう書くとこれのみ受け取れる
    bindFirestoreRef('todos', todosRef) //bind(関連付け)したいデータの名前'todos'とコレクションへの参照(2)を渡すとstate.todos(上のステート)にcloudfirestoreのデータが関連付けされる
  }),

  // todoの追加をする時に呼ばれるアクション
  add: firestoreAction((context, name) => { // 1引数にcontext(不使用)、2引数にtodoの名前を受け取る
    if(name.trim()) { // 入力が空白でないか確認。空白の場合無効に。
      todosRef.add({ // todosRefのaddメソッドを使ってデータをfirestoreに登録。
        name: name,
        done: false, // タスクの完了・未完了
        created: firebase.firestore.FieldValue.serverTimestamp() // created_at
      })
    }
  }),
  // todoの削除
  remove: firestoreAction((context, id) => { // idはremoveを呼ぶ時に引数として使用
    todosRef.doc(id).delete() // idが一致するデータを削除
  }),

  // チェックボックス操作時のアクション todoの完了・未完了を管理するための機能
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done // 現在の値を反転して使用したい
    })
  })
}