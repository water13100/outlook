// 設定計時器
var timer = setTimeout(showChatbot, 10000);
var close = setTimeout(closeChatbot, 20000);
// 顯示客服機器人的對話框
      function showChatbot() {
        document.getElementById("dialog-box").style.display = "block";
      }
// 關閉客服機器人的對話框
function closeChatbot() {
  document.getElementById("dialog-box").style.display = "none";
}