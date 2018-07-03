$('.please-wait').text(chrome.i18n.getMessage('please_wait_scanning'));

chrome.runtime.sendMessage({
  action:'scan'
});
chrome.runtime.onMessage.addListener(function(data, sender, sendBack) {
  if('startUpload' == data.action){
  	$('.scan-animation').hide();
  	$('.cssload-conveyor').show().css('display','inline-block')
  	$('.please-wait').text(chrome.i18n.getMessage('please_wait_uploading'));
  }
});

