# INTRODUCE

This example is based on GoldVideo open source project (https://github.com/goldvideo/h265player, It  is H.265 player for web）

You can download the code and run the demo.

## INSTALL

```shell
	$ npm i goldvideo-player     # @see https://www.npmjs.com/package/goldvideo-player
	$ npm install                # maybe need input `npm audit fix` etc. 
	$ npm run dev                # @see package.json
```

## PREPARE LIBRARY[optional]

- Copy lib files(`libffmpeg.js, libffmpeg.wasm`) to `dist/lib` from [h265player/dist/lib](../../h265player/dist/lib). 
	or compile from [docoder_wasm](../../docoder_wasm) module by self. This example includes these lib files already.

## CONFIG NGINX
```javascript
  server {
      listen       8000;
      location /example/greenplayer {
          root   <path>/goldvideo;
          index  index.html index.htm;
          autoindex on;
      }
  }
```

## PREVIEW
visit: http://127.0.0.1:8000/example/greenplayer/demo/demo.html
