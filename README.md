<!--
 * @Author: your name
 * @Date: 2021-09-28 16:40:38
 * @LastEditTime: 2021-10-18 10:05:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chinese-poetry-namer\README.md
-->
# chinese-poetry-namer

## Naming tools for Chinese Poetry 古诗词取名工具

## 灵感来自于

[chinese-poetry]](https://github.com/chinese-poetry/chinese-poetry)

[gushi_namer]](https://github.com/holynova/gushi_namer)

[PiPiName]](https://github.com/wz930206/PiPiName)

项目前端基于[vue-h5-template]](https://github.com/sunniejs/vue-h5-template)

## 项目启动

### 前端

```bash
git clone https://github.com/wz930206/chinese-poetry-namer.git

cd chinese-poetry-namer

yarn

yarn serve
```
### 后端

```bash
git clone https://github.com/wz930206/PiPiName.git

cd PiPiName

pip install opencc-python-reimplemented

pip install flask
```
## 项目上线

### 前端

```bash
yarn build
```

### 后端

```bash
把PiPiName项目下文件复制到服务器上

pip install opencc-python-reimplemented

pip install flask

. run.sh 
```

### nginx

```bash
server {
  listen 9020;
  server_name 127.0.0.1;
  access_log off;
  index index.html index.htm index.php;
  root /var/www/html/name;
  location /rest/ {
        proxy_pass      http://127.0.0.1:9021/rest/;
        proxy_set_header        Host $host;
        proxy_set_header        X-Real-IP  $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        X-Forwarded-Proto  $scheme;
        proxy_connect_timeout   60;
        proxy_read_timeout 600;
        proxy_send_timeout      600;
  }
}
```

# 关于我

体验更多工具，关注公众号”Ur Home“。

回复加群，即可加入”Ur Home交流群“

 <p>
  <img src="./static/gzh_code.jpg" width="256" style="display:inline;">
</p>

扫描添加下方的微信并备注 UrHome，交流学习，及时获取最新动态。

<p>
  <img src="./static/wx_code.jpg" width="256" style="display:inline;">
</p>