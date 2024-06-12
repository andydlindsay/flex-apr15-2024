# M04W09 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asychronous Javascript And XML (AJAJ)
* eXtensible Markup Language
* allows your JS to make HTTP requests
* Web 2.0
* Microsoft

```xml
<user>
  <email>alice@mail.com</email>
  <password>1234</password>
</user>
```

```json
{
  "email": "alice@mail.com",
  "password": "1234"
}
```

### XML HTTP Request Object (XHR)

```js
$.ajax({
  method: 'GET',
  url: 'http://www.google.com',
  success: (response) => {},
  error: (err) => {}
})
```

http://localhost:8001/?name=hello&price=8.99&tagline=hello+world&calories=800

GET to the page you're on

name=hello&price=8.99&tagline=hello+world&calories=800
name=chocolate%20cake&price=14.99&tagline=tasty%20on%20tuesday&calories=1400











