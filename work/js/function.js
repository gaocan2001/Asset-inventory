function is_weixn() {
    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
}

function scanCode() {
    if (!this.is_weixn()) {
      alert('请用微信打开页面，扫码功能仅支持微信页面')
      return
    }
    first_href = "http://192.168.1.108:8081/%E5%B7%A5%E5%85%B7%E7%9B%98%E7%82%B9%E6%8F%90%E4%BA%A4.html";
    // location.href = `http://sao315.com/w/api/saoyisao?redirect_uri=${encodeURIComponent(href)}`
    location.href = "http://sao315.com/w/api/saoyisao?redirect_uri=" + encodeURIComponent(first_href);
    // location.href = "http://sao315.com/w/api/saoyisao?redirect_uri=" + encodeURIComponent(location.href);
}

function GetQueryString(name){
    var reg = new RegExp("\\b"+ name +"=([^&]*)");
    var r = location.href.match(reg);
    if (r!=null) return decodeURIComponent(r[1]);
}

function ReturnResult(qr){
    var ad = document.querySelector('.total');
    var adtr = document.createElement('tr');
    ad.appendChild(adtr);
    ad.appendChild(document.createTextNode(qr));
}

function Clock(){
    var date = new Date();
    this.year = date.getFullYear()  //获取年
    this.month = date.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
    this.day = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")[date.getDay()]  //获取日
    this.days = date.getDate() //获取日期
    this.hour = date.getHours() < 10? "0"+date.getHours():date.getHours();  //获取小时
    this.minute = date.getMinutes() < 10? "0"+date.getMinutes():date.getMinutes(); //获取分钟
    this.second = date.getSeconds() < 10? "0"+date.getSeconds():date.getSeconds();   //获取秒

    this.display = function(ele){
        var clock = new Clock();
        ele.innerHTML = '盘点时间: ' + clock.result();
        // window.setTimeout(function(){clock.display(ele);},1000);
    };
    this.ReturnDate = function(ele){
        var clock = new Clock();
        ele.innerHTML = this.year + "-" + this.month + "-" + this.days;
        // window.setTimeout(function(){clock.display(ele);},1000);
    };
    this.result = function(){
        var da = this.year+" 年 "+this.month+" 月 "+this.days+" 日 "+this.day+" "+this.hour+" : "+this.minute+" :"+this.second
        return da
    };
}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串 包括"?"
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {  //如果要检索的字符串值没有出现，则该方法返回 -1。
        var str = url.substring(1);  //substring() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}