# M03W06 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

servers => have information
clients => want information

web servers => serve up content related to the web (html, css, js, images, documents, videos)
server has to speak HTTP

### HTTP
* Hyper Text Transfer Protocol
* built on top of TCP

* Requests
* Verb/method: POST, GET
* Path/url: http://localhost:3000/products
  * GET /cars, POST /login

* Response
* can contain anything
* has to contain a status code (404, 500, 200)
  * 1xx => low level routing
  * 2xx => everything is okay
  * 3xx => redirection
  * 4xx => client has made a mistake
  * 5xx => server has a problem

### Middleware
* code (callback) that sits between the request and the response

* parse (parsing) => turn data from one format to another

username=alice&password=1234

                                      server
browser <========== tcp/http ==========> middleware <===> middleware <==> route handler
                                                                            request
                                        body-parser       cookie-parser
                                        request.body      request.cookies
                                        next()              next()

























