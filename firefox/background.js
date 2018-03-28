/// <reference path="qrcode.js" />

// Get the current URL.
// @param {function(string)} callback - called when the URL of the current tab is found
function getCurrentTabUrl(callback) {
  // query information for the current tab
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least one tab
    var tab = tabs[0];
    // A tab is a plain object that provides information about the tab.
    var url = tab.url;
    callback(url);
  });
}

// fires when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {

  getCurrentTabUrl(function (url) {
    // creates a new QRCode object, by passing a reference to a DOM element 
    // and specifing the desired dimensions
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 120,
      height: 120
    });
    
    // creates the QR code
    qrcode.makeCode(url);

  });
});