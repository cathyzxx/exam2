<template>
  <div class="about">
    <h1>音乐专辑测试接口</h1>
    <pre>
GET http://39.99.185.180:3000/albums
Accept: application/json

###

POST http://39.99.185.180:3000/albums
Content-Type: application/json

{
  "album_name": "my album",
  "price": 216
}

###

DELETE http://39.99.185.180:3000/albums/5e1680416847d8312b777253
Accept: application/json

###

</pre>
  </div>
</template>
