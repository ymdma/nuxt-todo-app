# nuxt-todo-app


・Firebaseへの接続確認2/22→エラー→Firebaseの設定解決2/23→Uncaught (in promise) FirebaseError（解決できず）

・現状コードにミスらしき部分は見当たらない
・Firebaseの方の、セキュリティールール絡み？
・一時保留、（1からやり直す？）

エラーメッセージ
*****
index.cjs.js?e89a:352 Uncaught (in promise) FirebaseError: Missing or insufficient permissions.

*****

2/25 新しく作り直す→解決


〜原因について〜

・記述にミスはなし→プロジェクトやFirestoreの設定の可能性大
  → 後ほど検証したい項目
      - create-nuxt-appにて
        ”
        ? Choose development tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
        ❯◯ jsconfig.json (Recommended for VS Code)
        "
        の、スペース押し忘れ疑惑。

      - 見落としているfirestoreの設定がないか

******

> My wondrous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
