# Firebase 雲端同步設定

目前網站已支援 Firebase Realtime Database。未設定前，進度和照片會存在同一台裝置的瀏覽器中。

## 需要建立的服務

1. 到 Firebase Console 建立專案。
2. 建立 Realtime Database。
3. 先選測試模式或設定只允許本專案讀寫。
4. 複製 Realtime Database URL，格式通常像：

```text
https://your-project-id-default-rtdb.firebaseio.com
```

## 填入網站

打開 `index.html`，找到：

```html
<script>
  window.CLOUD_CONFIG = {
    databaseURL: ""
  };
</script>
```

把 `databaseURL` 改成 Firebase Realtime Database URL：

```html
<script>
  window.CLOUD_CONFIG = {
    databaseURL: "https://your-project-id-default-rtdb.firebaseio.com"
  };
</script>
```

再 commit 並 push 到 GitHub Pages。

## 注意

家長後台密碼 `0913` 是前端畫面保護，適合家庭使用與避免孩子誤按。若要更嚴格的帳號權限，需要再加 Firebase Authentication。
