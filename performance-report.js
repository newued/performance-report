var performanceReport = function(productName) {
    if(window.performance){
        var timing = performance.timing;
        var loadTime = timing.loadEventEnd - timing.navigationStart;//过早获取时,loadEventEnd有时会是0
        if(loadTime <= 0) {
        // 未加载完，延迟200ms后继续times方法，直到成功
            setTimeout(function(){
                performanceReport(productName);
            }, 200);
            return;
        }
        var netWorkTime = timing.responseEnd - timing.navigationStart;
        var initDomTreeTime = timing.domInteractive - timing.responseEnd;
        var domReadyTime = timing.domComplete - timing.domInteractive; //过早获取时,domComplete有时会是0
        var loadEventTime = timing.loadEventEnd - timing.loadEventStart;
        var productName = productName+'核心指标';
        if(window.ga){
            ga('send', 'timing', {'timingCategory': productName,'timingVar': '网络时间','timingValue': netWorkTime});
            ga('send', 'timing', {'timingCategory': productName,'timingVar': '白屏时间(请求完毕到DOM加载完成)','timingValue': initDomTreeTime});
            ga('send', 'timing', {'timingCategory': productName,'timingVar': '可操作时间(解释dom树耗时)','timingValue': domReadyTime});
            ga('send', 'timing', {'timingCategory': productName,'timingVar': 'load事件的耗时','timingValue': loadEventTime});
            ga('send', 'timing', {'timingCategory': productName,'timingVar': '总下载时间','timingValue': loadTime});
        }
    }
}

if (typeof dwfis !== "undefined" && typeof dwfis.define === "function") {
    module.exports = performanceReport;
} else {
    window.performanceReport = performanceReport;
}