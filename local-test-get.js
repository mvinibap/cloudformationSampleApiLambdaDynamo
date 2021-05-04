require("events").EventEmitter.prototype._maxListeners = 100;
require("dotenv").config();

var event = {
  // pathParameters: {
  //   id: 14249
  // },
  queryStringParameters: {
    // page: 20
    // document: 35741711880
  },
  body: {
  },
  headers: {
    // Authorization: "eyJraWQiOiJPWFk3TmxtZE1KQW41RG9DbVR1NlwvakF0d0R1R2JxeTBqVlwvemUrYVlPNms9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2b2xlcDZhMnU4aHFrZDk0a2xkMm5hOGJndCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiY2FyYWRocmFzXC9vcHMtaW5jb21lLWFwaSBjYXJhZGhyYXNcL2NhcmRzIGNhcmFkaHJhc1wvZWZ0IGNhcmFkaHJhc1wvcmVhZCBjYXJhZGhyYXNcL2ludm9pY2VwYXltZW50IGNhcmFkaHJhc1wvYWp1c3Rlcy1maW5hbmNlaXJvcyBjYXJhZGhyYXNcL3RhcmlmZiBjYXJhZGhyYXNcL2tub3d5b3VyY2xpZW50IGNhcmFkaHJhc1wvb3BzLWFjY291bnQtYXBpIGNhcmFkaHJhc1wvc3BsaXQgY2FyYWRocmFzXC93YXJtdXAgY2FyYWRocmFzXC9hdXRob3JpemVyIGNhcmFkaHJhc1wvY2FyYWRocmFzYmFsYW5jZXIgY2FyYWRocmFzXC9iaWxsZXQgY2FyYWRocmFzXC9pbmRpdmlkdWFsc1Bvc3QgY2FyYWRocmFzXC9pc3N1ZXItYmFsYW5jZSBjYXJhZGhyYXNcL3AybSBjYXJhZGhyYXNcL2NyeXB0IGNhcmFkaHJhc1wvcDJwdHJhbnNmZXIgY2FyYWRocmFzXC9vbW5pY2hhbm5lbCBjYXJhZGhyYXNcL3RlZHRyYW5zYWN0aW9uYWwgY2FyYWRocmFzXC9jbmFiLXByb2Nlc3NvciBjYXJhZGhyYXNcL2FwaVBERiBjYXJhZGhyYXNcL2NhcmFkaHJhc3BheW1lbnRzIGNhcmFkaHJhc1wvdHJhbnNwb3J0Y2FyZHMgY2FyYWRocmFzXC93cml0ZSBjYXJhZGhyYXNcL2Jhbmt0cmFuc2ZlcnMgY2FyYWRocmFzXC9wYXltZW50cyBjYXJhZGhyYXNcL3JlY2hhcmdlcyBjYXJhZGhyYXNcL2NkdC1hdXRob3JpemVyIGNhcmFkaHJhc1wvYWNjb3VudC1wZGYgY2FyYWRocmFzXC9vcGVyYXRvciIsImF1dGhfdGltZSI6MTU4Nzk5Mjk5OCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfQTduT1BBeDBvIiwiZXhwIjoxNTg3OTk2NTk4LCJpYXQiOjE1ODc5OTI5OTgsInZlcnNpb24iOjIsImp0aSI6ImNmNzM1YTI0LTIzYWItNGRhZS05Nzc5LTBmODllNDMwZDIzZCIsImNsaWVudF9pZCI6IjZvbGVwNmEydThocWtkOTRrbGQybmE4Ymd0In0.IedRW8P1Ju47xTGVDLWshWcEycbV7D1jY8N9GYxn9kTI3up95FJmTwv4390Bg-HfA6As_Fpa_g2bJFfRH7mpuDROfWpcjTRB3tJWIG1Y-7sSyGewexSIzmhxBmXAk7EjC7J_387tvpnL8vEYqNrzvMNKXdEw0V2U7trK1-NCivWJtcJy_AY2XDvY5d3xgNiHODzU7sOjq3a9IbJ0mRye4-rFdKgdI02LU3hBAejpP07beb6hCjVFOQj9Z0-LpG8OpcKzSstKLLJz2RkRpisxTtGrCaRFCzTyu2o_PUqKHZRhxBL23ZcoPkBaXhmwAfsgUmnxTgzXz7lZlkxzq1uCoA"
  },
  requestContext: {
    requestId: "huahuahuahuhauhauhau"
  }
};

event.body = JSON.stringify(event.body);

var result = new Promise((resolve, reject) => {
  var res = require("./src/handlers/base-route-get").run(event);
  resolve(res);
}).then(data => {
  console.log(data);
});
