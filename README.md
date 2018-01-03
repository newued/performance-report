# 性能上报模块

----------





## 一些常规的性能数据计算方法
	DNS时间 = domainLookupEnd - domainLookupStart
	TCP时间 = connectEnd - connectStart
	后端时间 = responseEnd - connectEnd
	
	白屏时间 = domInteractive - navigationStart
	整屏时间 = loadEventEnd - navigationStart
	
	解析dom树耗时 = domComplete - domInteractiverequest
	请求耗时 = responseEnd - responseStart


## 标准

<table><thead><tr><th>属性</th><th>含义</th></tr></thead><tbody><tr><td>navigationStart</td><td>准备加载新页面的起始时间</td></tr><tr><td>redirectStart</td><td>如果发生了HTTP重定向，并且从导航开始，中间的每次重定向，都和当前文档同域的话，就返回开始重定向的timing.fetchStart的值。其他情况，则返回0</td></tr><tr><td>redirectEnd</td><td>如果发生了HTTP重定向，并且从导航开始，中间的每次重定向，都和当前文档同域的话，就返回最后一次重定向，接收到最后一个字节数据后的那个时间.其他情况则返回0</td></tr><tr><td>fetchStart</td><td>如果一个新的资源获取被发起，则 fetchStart必须返回用户代理开始检查其相关缓存的那个时间，其他情况则返回开始获取该资源的时间</td></tr><tr><td>domainLookupStart</td><td>返回用户代理对当前文档所属域进行DNS查询开始的时间。如果此请求没有DNS查询过程，如长连接，资源cache,甚至是本地资源等。 那么就返回 fetchStart的值</td></tr><tr><td>domainLookupEnd</td><td>返回用户代理对结束对当前文档所属域进行DNS查询的时间。如果此请求没有DNS查询过程，如长连接，资源cache，甚至是本地资源等。那么就返回 fetchStart的值</td></tr><tr><td>connectStart</td><td>返回用户代理向服务器服务器请求文档，开始建立连接的那个时间，如果此连接是一个长连接，又或者直接从缓存中获取资源（即没有与服务器建立连接）。则返回domainLookupEnd的值</td></tr><tr><td>(secureConnectionStart)</td><td>可选特性。用户代理如果没有对应的东东，就要把这个设置为undefined。如果有这个东东，并且是HTTPS协议，那么就要返回开始SSL握手的那个时间。 如果不是HTTPS， 那么就返回0</td></tr><tr><td>connectEnd</td><td>返回用户代理向服务器服务器请求文档，建立连接成功后的那个时间，如果此连接是一个长连接，又或者直接从缓存中获取资源（即没有与服务器建立连接）。则返回domainLookupEnd的值</td></tr><tr><td>requestStart</td><td>返回从服务器、缓存、本地资源等，开始请求文档的时间</td></tr><tr><td>responseStart</td><td>返回用户代理从服务器、缓存、本地资源中，接收到第一个字节数据的时间</td></tr><tr><td>responseEnd</td><td>返回用户代理接收到最后一个字符的时间，和当前连接被关闭的时间中，更早的那个。同样，文档可能来自服务器、缓存、或本地资源</td></tr><tr><td>domLoading</td><td>返回用户代理把其文档的 "current document readiness" 设置为 "loading"的时候</td></tr><tr><td>domInteractive</td><td>返回用户代理把其文档的 "current document readiness" 设置为 "interactive"的时候.</td></tr><tr><td>domContentLoadedEventStart</td><td>返回文档发生 DOMContentLoaded事件的时间</td></tr><tr><td>domContentLoadedEventEnd</td><td>文档的DOMContentLoaded 事件的结束时间</td></tr><tr><td>domComplete</td><td>返回用户代理把其文档的 "current document readiness" 设置为 "complete"的时候</td></tr><tr><td>loadEventStart</td><td>文档触发load事件的时间。如果load事件没有触发，那么该接口就返回0</td></tr><tr><td>loadEventEnd</td><td>文档触发load事件结束后的时间。如果load事件没有触发，那么该接口就返回0</td></tr></tbody></table>



## performance的时间


![](http://img.hb.aicdn.com/f843500aac6a5056fe7a66aee3e7242be3a8a664f5cb-eLPp0X)



