# M04W09 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* **A**synchronous **J**avaScript **A**nd **X**ML
* Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
* Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
* The widespread use of AJAX was one of the factors that led to Web 2.0
* Originally retrieved data sent using `XML`, but modern applications use `JSON` instead

### XMLHttpRequest Object
* AJAX is implemented using the `XMLHttpRequest` (`XHR`) object
* Modern libraries (such as `jQuery` or `axios`) provide us with easy-to-use wrappers for the `XHR` object

### jQuery AJAX
* jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  success: (data) => {
    console.log('this request succeeded and here\'s the data', data);
  },
  error: (error) => {
    console.log('this request failed and this was the error', error);
  }
});
```

### Useful Links
* [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [Wikipedia: AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [MDN: XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
