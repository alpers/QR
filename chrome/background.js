/// <reference path="qrcode.js" />
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  getCurrentTabUrl(function (url) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 120,
      height: 120
    });
    qrcode.makeCode(url);
  });
});