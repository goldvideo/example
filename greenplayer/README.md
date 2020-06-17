# INTRODUCE

This example is based on GoldVideo open source project (https://github.com/goldvideo, It  is H.265 player for web）

You can download the code locally and run the trial.

## INSTSLL

```shell
	# npm -i goldvideo
	# provide goldvideo npm after, need download source code current.
	$ npm install
	# npm audit fix
	$ npm run dev
	$ npm run test
	$ npm run build
	# rollup -c
```

## CONFIG NGINX
```javascript
  server {
      listen       9900;
      location / {
          root   <path>/goldvideo;
          index  index.html index.htm;
          autoindex on;
      }
  }
```

## PREVIEW
	visit: http://127.0.0.1:9900/example/greenplayer/demo/demo.html