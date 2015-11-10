性能上报模块
=========

> 简介：依赖于ga的上报统计




##主要监控以下核心指标

	//网络时间:
	performance.timing.responseEnd - performance.timing.navigationStart

	//白屏时间(请求完毕到DOM加载完成):
	performance.timing.domInteractive - performance.timing.responseEnd

	//可操作时间(解释dom树耗时):
	performance.timing.domComplete - performance.timing.domInteractive

	//load事件的耗时:
	performance.timing.loadEventEnd - performance.timing.loadEventStart 

	//总下载时间:
	performance.timing.loadEventEnd - performance.timing.navigationStart  


##performance的时间


![](http://img.hb.aicdn.com/f843500aac6a5056fe7a66aee3e7242be3a8a664f5cb-eLPp0X)



##使用方式：
	
	//JS里面直接引用就ok
	require('performance-report')('xx产品名称');

