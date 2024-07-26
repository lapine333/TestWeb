
// fincert SDK

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
  var _scriptElem = document.createElement('script');
  _scriptElem.src = getYesKeyUrl() + getYYYYMMDD();
  _scriptElem.id = "fincertSDK";
  document.querySelector("body").appendChild(_scriptElem);
  _scriptElem.onerror = function() {
    alert("loadSDK() 오류 발생");
  };
  _scriptElem.onload = function() {
    alert("loadSDK() 성공");
  }
}

function getYYYYMMDD() {
  var date = new Date();
  var year = date.getFullYear();
  var month = new String(date.getMonth() + 1);
  var day = new String(date.getDate());

  if(month.length == 1) {
    month = "0" + month;
  }
  if(day.length == 1) {
    day = "0" + day;
  }
  return year + month + day;
}
