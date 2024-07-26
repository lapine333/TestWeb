
// fincert SDK

// 운영계인지 여부
var isProd = false;

var yesKey_url_prod = "https://4user.yeskey.or.kr/v1/fincert.js?dt=";   // 운영
var yesKey_url_test = "https://t-4user.yeskey.or.kr/v1/fincert.js?dt="; // 테스트

var yeskey_url = "";
var initParam = {};
var FinCert;

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
    //alert("loadSDK() 성공");
    //initSDK();

    FinCert.Sdk.sign(signParam);
  }
}

function initSDK() {
  var param = {};
  if(isProd) {
    param.orgCode = "RF10050000";
    param.apiKey  = "a259d367-69c0-44d3-b552-c90c2a15bae3";
  } else {
    param.orgCode = "D201100083";
    param.apiKey  = "a68fb972-9d93-4ed2-8093-bcac8727eb26";
  }
  param.lang = "ko";

  //initParam = JSON.stringify(param);
  //console.log("initParam = ",initParam);
  
  initParam.success = initSdk_SucCallback;
  initParam.fail = initSdk_FailCallback;

  _init();
}

function initSdk_SucCallback() {
  alert("success");
}

function initSdk_FailCallback() {
  alert("fail");
}

var FinCert;
function _init() {
  if(!FinCert) {
    setTimeout(_init,200);
    return;
  }
  FinCert.Sdk.init(initParam)
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
