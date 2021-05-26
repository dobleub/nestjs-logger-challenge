
### Instructions

* Clone this project and create your own challenge branches. ✅
* Create a public repository and push your commits using git flow. ✅
* Share us the repository url when you finish.

### Introduction

Console logs are the most used tool to register actions or changes in a system regardless of a language or framework.

Console logs achieve a purpose but, what's happen if we have an api with autoscaled infrastructure? Logs were saved in host console but, if one of them servers is deleted after autoscalling process... that's strategy useless because we can't to recover those console logs.

We must to store these logs centrally. So, the storage way lets us choose one of more strategies according our needs.

Your mission, if you decide to accept it...

#### Challenges

* Create a nestjs api. ✅
* Enable a socket gateway in the same API server port. ✅
* Expose an endpoint to send messages with dynamic event names to connected sockets:
  1. All sockets connected in a room.
  2. All sockets connected to the socket server.
* Create a logger NestJS library using pattern designs and OOP that stores using:
  1. NestJS Logger module.
  2. Javascript Console object.
  3. Mongodb
  4. Another one that you love madly.

### Restrictions

* Don't use any or unknown type.

Each Logger class must execute the same method `log`, you must think that this library can be used by another application modules or subapplications and it can use different strategies to store those logs each time that is imported.

`POST /events`

An event emited by http endpoint could be something like this:
```
{
    "event": "order.created",
    "room": "9d283b4a-c87f-4337-ac2e-fe71ad0c6c42",
    "data": {
        "orderId": "cfa3f520-fa3f-4859-b5b0-a0b4e32e593f",
        "amount": 100,
        "products": [
            { "id": "d4c792cd-8690-400f-bc89-b1c5acef4903", "price": 50, "qty": 2 }
        ]
    }
}
```

Or something like this:
```
{
    "event": "order.paid",
    "room": "9d283b4a-c87f-4337-ac2e-fe71ad0c6c42",
    "data": {
        "orderId": "cfa3f520-fa3f-4859-b5b0-a0b4e32e593f",
        "paymentId": "9b933a6d-dbcc-49e5-8bab-eecce7957155",
        "authorizationNumber": "000057863456384534",
        "cardType": "credit",
        "last4": "9199"
    }
}
```

Or something like this... this event must be sent to all connected sockets.
```
{
    "event": "customer.suscribed",
    "data": {
        "suscriptionId": "7e2983f4-4d1d-4961-80d6-7ef8a9abe19a",
        "name": "John Doe",
        "email": "john.doe+awesome-newsletter@x.com",
    }
}
```

You don't know each event names, just log that.

NestJS Logger module logs something like this:

```
[Nest] 16366 - 05/25/2021, 9:46:00 PM  [order.created] orderId: cfa3f520-fa3f-4859-b5b0-a0b4e32e593f +4ms
[Nest] 16366 - 05/25/2021, 9:46:25 PM  [order.paid] paymentId: 9b933a6d-dbcc-49e5-8bab-eecce7957155 +5ms
[Nest] 16366 - 05/25/2021, 9:46:25 PM  [order.paid] paymentId: 9b933a6d-dbcc-49e5-8bab-eecce7957155 +5ms
[Nest] 16366 - 05/25/2021, 11:11:11 PM  [customer.suscribed] suscriptionId 7e2983f4-4d1d-4961-80d6-7ef8a9abe19a +3ms
[Nest] 16366 - 05/25/2021, 11:11:11 PM  [customer.suscribed] event sent to: 82c0fb8b-9e2c-40d4-910f-43c2e40d520c +6ms
[Nest] 16366 - 05/26/2021, 11:11:11 AM  [customer.suscribed] event sent to:7ac982c2-ae34-42be-b690-3d4fe1f2a6ea +4ms
[Nest] 16366 - 05/25/2021, 11:11:11 AM  [customer.suscribed] event sent to:acfc86bf-bce5-4218-8ef0-6f44c89ff053 +3ms
```

You must to consider emit each http event request described above regardless its name.

### Nice to have

* A little bit of unit testing.
* Docker containers.
* Heroku deployment.

### References
 
* Socket.io https://socket.io/
* NestJS https://docs.nestjs.com/
