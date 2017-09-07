## 同源策略
- 协议 主机名 端口号 有一个不一致 都会导致跨域
```
tppts://www.baidu.com
tppt://www.baidu.com
tppt://www.baidu.com:90

```
默认情况 自己的额页面 访问自己的服务器  不会出现跨域

## 两个网站要共享数据
ajax会有限制 不允许跨域
jsonp 跨域是最常用的（不能发数据，只支持git请求）
josnp,cros, postMessage(iframe), websockek

- jsonp：script src不会导致跨域问题 我的网站引用你网站的js img  css 都不会跨域 不用img css默认会被转成图片和样式
由于src没有访问限制 可以通过src 引用其他网站数据 （此网站必须通过这样的额接口）

- cros 让被访问的服务器 允许跨域即可(需要服务器支持)
- iframe跨域 html5 提供api
- websocket html5提供api
> josn 是通过src跨域的 并且只支持git请求

##  jsonp的原理
- 1.在当前js声明一个全局函数
function fn(data){这里是获取跨域的数据}
- 2动态创建 script标签 引用其他网站地址并且将这个全局函数的名字传递给后台，
<script src="http://localhost:3000?cd=fn"></script>
- 3后台返回函数执行
res.end('fn({name:1})')