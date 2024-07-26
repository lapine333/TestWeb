
// 운영계인지 여부
var isProd = false;
var yeskey_url = "";

var yesKey_url_prod = "https://4user.yeskey.or.kr/v1/fincert.js?dt=";   // 운영
var yesKey_url_test = "https://t-4user.yeskey.or.kr/v1/fincert.js?dt="; // 테스트

function getYesKeyUrl() {
  if(isProd)
    return yesKey_url_prod;
  else 
    return yesKey_url_test;
}

function loadSDK() {
  var scriptElem = document.createElement("script");
}
