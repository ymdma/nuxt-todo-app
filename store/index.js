import { vuexfireMutations } from 'vuexfire'
// vuexfireの機能を読み込んで使えるようにする
export const mutations = {
  ...vuexfireMutations // vuexが定義しているミューテーションが使えるようになる
}
// * mutationsはルートのストア(index.js)で作る必要がある。(todo.jsに書いたらエラーになる)