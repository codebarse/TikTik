// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action") {
      console.log(window.location.href);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": window.location.href});
    }
  }
);