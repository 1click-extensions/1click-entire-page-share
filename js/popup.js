$('.please-wait').text(chrome.i18n.getMessage('please_wait_scanning'));
chrome.runtime.sendMessage({
  action:'scan'
}, function(data){
    $('.please-wait').text(chrome.i18n.getMessage('please_wait_uploading'));
});