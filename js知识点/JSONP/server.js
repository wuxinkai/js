let url = require('url');
let http = require('http');
let fs = require('fs');
let mime = require('mime');
http.createServer(function (req,res) {
    let {pathname , query } = url.parse(req.url,true);
    if( pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        return  res.end(fs.readFileSync('./index.html'));
    }
    //jsonp和ajax无关 是跨域的一种手段

    if(pathname == '/getDate'){
        //获取服务器函数名
        let fnName = query.cb; //获取前台的名字叫 fn
        let date =new Date().toLocaleString();
        //讲数据放到函数中执行  //拼的是日期
        res.end(fnName+'("'+date+'")');  // fn("2017-4-23 15:33:39")
        return
    };
    if(pathname == '/getStudent'){
        let fnName = query.dd;
        let dstudent =JSON.stringify({name:'帅哥',age:8}); //拼的是对象
        //拼的是对象
         res.end(fnName+'('+dstudent+')');
        console.log(fnName+'('+dstudent+')');
        //res.end(`${fnName}("${dstudent}")`);  // es6 模板字符串
        //console.log(`${fnName}(${dstudent})`);

        return
    }

    try {
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        return  res.end(fs.readFileSync('.'+pathname));
    }catch(e){
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}).listen(8080);
