var clock = new Clock();
clock.display(document.getElementById("clock"))
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
        window.setTimeout(function(){clock.display(ele);},1000);
    };
    this.result = function(){
        var da = this.year+" 年 "+this.month+" 月 "+this.days+" 日 "+this.day+" "+this.hour+" : "+this.minute+" :"+this.second
        return da
    };
}