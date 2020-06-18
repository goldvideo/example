# INTRODUCE

This example is based on GoldVideo open source project (https://github.com/goldvideo/h265player, It  is H.265 player for web）

You can download the code and run the demo.

## INSTSLL

```shell
	$ npm i goldvideo-player
	$ npm install
	# npm audit fix
	$ npm run dev   # dev mode
	# npm run test  # test mode
	# npm run build # production mode
	# rollup -c     # build es module
```

## PERPARE LIBRARY

- Copy lib files(libffmpeg.js, libffmpeg.wasm) from [h265player/dist/lib](../../h265player/dist/lib). 
	or compile from [docoder_wasm](../../docoder_wasm) module

## CONFIG NGINX
```javascript
  server {
      listen       8000;
      location / {
          root   <path>/goldvideo;
          index  index.html index.htm;
          autoindex on;
      }
  }
```

## PREVIEW
	visit: http://127.0.0.1:8000/example/greenplayer/demo/demo.html