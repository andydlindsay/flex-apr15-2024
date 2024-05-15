# M02W05 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo (chat)

### Networking
* two machines talking to one another
* LAN Party

* server => has information
* client => wants information

### Internet Protocol (IP)
* each machine in the network has a unique IP address
* 192.168.8.8 IPv4 (street address)
* IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* port => identifies a running process on the machine (apt number)
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres

### Packets
* all data is broken into small packets
* header => the sender and the receiver
* number 1/500 400/500

### TCP Transmission Control Protocol
* has to have a persistent connection
* three way handshake
* packets are reordered on arrival
* any lost packets are resent

### UDP User Datagram Protocol
* connectionless protocol
* packets can arrive in any order
* no error recovery
* speed

### Event-Driven Programming
* program against certain events occurring
* callback


"Move: up"
"Move: right"

"Name: alice"
"hello world"



















