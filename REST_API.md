# Bejelentkezés

## HTTP kérés formája

`POST http://host/bugtracker/login`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeres bejelentkezés
  * **401 UNAUTHORIZED:** sikertelen bejelentkezés, rossz felhasználónév vagy jelszó
  
## Beküldött dokumentum

```json
{
    "username": "almafa",
    "password": "almafa123"
}

```

# Projektek megtekintése

A felhasználó projektjeinek kilistázása

## HTTP kérés formája

  * `GET http://host/bugtracker/api/projects`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## Válasz 
- Sikerült
```json
[
  {
    "id": 4,
    "projectName": "Project1 2 Updated",
    "projectDescription": "This is an 2 updated project",
    "defaultApprover": {
      "id": 11,
      "userName": "Pistaka",
      "emailAddress": "Pista@gmail.com",
      "password": "123456",
      "admin": false
    },
    "defaultDeveloper": {
      "id": 32,
      "userName": "admin",
      "emailAddress": "admin@bugtracker.com",
      "password": "admin",
      "admin": true
    },
    "s1Time": 2,
    "s2Time": 5,
    "s3Time": 7
  }
 ]
```
- Nem sikerült
```json
{
  "timestamp": 1509904771555,
  "status": 404,
  "error": "Not Found",
  "exception": "Some exception",
  "message": "Exception message",
  "path": "/api/projects"
}
```

# Konkrét projekt megtekintése

## HTTP kérés formája

  * `GET http://host/bugtracker/api/project/id`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## Válasz 
- Sikerült
```json
{
  "id": 4,
  "projectName": "Project1 2 Updated",
  "projectDescription": "This is an 2 updated project",
  "defaultApprover": {
    "id": 11,
    "userName": "Pistaka",
    "emailAddress": "Pista@gmail.com",
    "password": "123456",
    "admin": false
  },
  "defaultDeveloper": {
    "id": 32,
    "userName": "admin",
    "emailAddress": "admin@bugtracker.com",
    "password": "admin",
    "admin": true
  },
  "s1Time": 2,
  "s2Time": 5,
  "s3Time": 7
}
```
- Nem sikerült
```json
{
  "timestamp": 1509904771555,
  "status": 500,
  "error": "Internal Server Error",
  "exception": "org.springframework.orm.hibernate5.HibernateObjectRetrievalFailureException",
  "message": "No row with the given identifier exists: [hu.elte.inf.software.technology.bugtracker.domain.Project#1]; nested exception is org.hibernate.ObjectNotFoundException: No row with the given identifier exists: [hu.elte.inf.software.technology.bugtracker.domain.Project#1]",
  "path": "/api/project/1"
}
```

# Projekt hozzáadása

## HTTP kérés formája

`POST http://host/bugtracker/api/addProject`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeres hozzáadás
  * **400 BADREQUEST:** hiányos kitöltés
  
## Beküldött dokumentum

```json
{
  "projectName": "Project1 2 Updated",
  "projectDescription": "This is an 2 updated project",
  "defaultApprover": {
    "id": 11
  },
  "defaultDeveloper": {
    "id": 32
  },
  "s1Time": 2,
  "s2Time": 5,
  "s3Time": 7
}
```

## Válasz 
- Sikerült
 **200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509906360507,
  "status": 400,
  "error": "Bad Request",
  "exception": "org.springframework.http.converter.HttpMessageNotReadableException",
  "message": "Could not read JSON document: Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries\n at [Source: java.io.PushbackInputStream@10faed2; line: 3, column: 4]; nested exception is com.fasterxml.jackson.core.JsonParseException: Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries\n at [Source: java.io.PushbackInputStream@10faed2; line: 3, column: 4]",
  "path": "/api/addProject"
}
```

# Új ügyfél / fejlesztő / jóváhagyó hozzáadása
`POST http://host/bugtracker/api/addUser`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **201 CREATED:** sikeresen létre lett hozva a felhasználó
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználó létrehozására
  * **403 FORBIDDEN:** a létrehozni kívánt felhasználó már létezik 
  
## Beküldött dokumentum
```json
{
    "name": "Gipsz Jakab",
    "password": "pass",
    "email": "gipszjakab@company.com",
}
```

## Válasz 
- Sikerült - A felhasználó e-mail címére megkapja az automatikusan generált ideiglenes jelszavát, melyet az első belépés után kötelezően meg kell változtatnia.
```json
{
    "id": 1,
    "name": "Gipsz Jakab",
    "password": "pass",
    "email": "gipszjakab@gmail.com"
}
```
- Nem sikerült
```json
{
  "timestamp": 1509910031426,
  "status": 400,
  "error": "Bad Request",
  "exception": "org.springframework.http.converter.HttpMessageNotReadableException",
  "message": "exception message",
  "path": "/api/addUser"
}
```

# Felhasználók lekérése

A rendszerben szereplő felhasználók kilistázása.

## HTTP kérés formája

  * `GET http://host/bugtracker/api/users`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** a lekérdezés sikeres
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználók listázására
  
## Válasz 
- Sikerült
```json
[
  {
    "id": 11,
    "userName": "Pistaka",
    "emailAddress": "Pista@gmail.com",
    "password": "123456",
    "admin": false
  },
  {
    "id": 12,
    "userName": "bec1ke",
    "emailAddress": "beci@gmail.com",
    "password": "123",
    "admin": false
  }
 ]
```
- Nem sikerült
```json
{
  "timestamp": 1509911744521,
  "status": 401,
  "error": "Unauthorized",
  "message": "exception message",
  "path": "/api/users"
}
```

# Konkrét felhasználó lekérése

Egy rendszerben szereplő felhasználó adatainak lekérése.

## HTTP kérés formája

  * `GET http://host/bugtracker/api/user/id`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználók listázására

## Válasz 
- Sikerült
```json
{
    "id": 1,
    "name": "Gipsz Jakab",
    "password": "pass",
    "email": "gipszjakab@gmail.com"
}
```
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 404,
  "error": "Not Found",
  "exception": "oexception",
  "message": "exception message",
  "path": "/api/user/1"
}
```

# Ügyfél / Fejlesztő / Jóváhagyó projekthez rendelése
`POST http://host/bugtracker/api/addProjectUser`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeresen hozzá lett rendelve a megadott szerepkörrel a felhasználó a projekthez
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználó projekthez rendeléséhez

## Beküldött dokumentum

```json
{
	"user":{
		"id": 11
	},
	"project":{
		"id":4
	},
	"role":"developer"
}
```
## Válasz 
- Sikerült
**200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 401,
  "error": "Unauthorized",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addProjectUser"
}
```

# Felhasználóhoz rendelt projektek lekérése
`GET http://host/bugtracker/api/assignedProjects/id`

## A lekérdezés paraméterei

  * **id:** a felhasználó azonosítója

## HTTP státusz kódok

  * **200 OK:** sikeresen visszakaptuk a felhasználóhoz rendelt projektek listáját
  * **401 UNAUTHORIZED:** nincs megfelelő jog a lekérdezés végrehajtására

## Válasz 
- Sikerült
```json
[
  {
    "id": 5,
    "projectName": "Bugtracker",
    "projectDescription": "Bugtracker Project",
    "defaultApprover": {
      "id": 27,
      "userName": "kiraly",
      "emailAddress": "alex@alex",
      "password": "123",
      "admin": false
    },
    "defaultDeveloper": {
      "id": 12,
      "userName": "bec1ke",
      "emailAddress": "beci@gmail.com"
    },
    "s1Time": 2,
    "s2Time": 5,
    "s3Time": 7
  }
]
```
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 401,
  "error": "Unauthorized",
  "exception": "exception",
  "message": "exception message",
  "path": "/api//assignedProjects/27"
}
```

#  Hibajegy / Igény létrehozása

## HTTP kérés formája

`POST http://host/bugtracker/api/addTicket`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** az igény létre lett hozva
  * **400 BADREQUEST:** hiányos kitöltés
  * **401 UNAUTHORIZED:** nincs megfelelő jog igény létrehozására
  
## Beküldött dokumentum
```json
{
    "ticketName": "Postman TicketTestName",
    "ticketType": "Bug",
    "owner": {
      "id": 11
    },
    "reporter": {
      "id": 12
    },
    "project": {
      "id": 4
    },
    "priority": "C",
    "spentTime": 1,
    "ticketDescription": "Postman TestDescription"
}
```
## Válasz 
- Sikerült
**200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 400,
  "error": "Bad Request",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addTicket"
}
```
```json
{
  "timestamp": 1509911823555,
  "status": 401,
  "error": "Unauthorized",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addTicket"
}
```
  
# Hibajegy / Igény megtekintése

## HTTP kérés formája

`GET http://host/bugtracker/api/ticket/id`

## A lekérdezés paraméterei

  * **id:** a hibajegy azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
 
## Válasz 
- Sikerült : A lekért dokumentum tartalmazza a hibajegyhez tartozó információkat
```json
{
  "id": 1,
  "ticketName": "TicketTestName",
  "ticketType": "Bug",
  "owner": {
    "id": 11,
    "userName": "Pistaka",
    "emailAddress": "Pista@gmail.com",
    "password": "123456",
    "admin": false
  },
  "reporter": {
    "id": 12,
    "userName": "bec1ke",
    "emailAddress": "beci@gmail.com",
    "password": "123",
    "admin": false
  },
  "project": {
    "id": 4,
    "projectName": "Project1 2 Updated",
    "projectDescription": "This is an 2 updated project",
    "defaultApprover": {
      "id": 11,
      "userName": "Pistaka",
      "emailAddress": "Pista@gmail.com",
      "password": "123456",
      "admin": false
    },
    "defaultDeveloper": {
      "id": 32,
      "userName": "admin",
      "emailAddress": "admin@bugtracker.com",
      "password": "admin",
      "admin": true
    },
    "s1Time": 2,
    "s2Time": 5,
    "s3Time": 7
  },
  "priority": "A",
  "spentTime": 5,
  "ticketDescription": "TestDescription"
}
```
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 404,
  "error": "Not Found",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/ticket/1"
}
```

# Projekthez tartozó hibajegyek megtekintése

## HTTP kérés formája

`GET http://host/bugtracker/api/ticketsByProject/id`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
 
## Válasz 
- Sikerült : A lekért dokumentum tartalmazza a projekthez tartozó hibajegyeket
```json
[
  {
    "id": 8,
    "ticketName": "UI is slow",
    "ticketType": "Feature request",
    "owner": {
      "id": 34,
      "userName": "user",
      "emailAddress": "user@bugtracker.com"
    },
    "reporter": {
      "id": 34,
      "userName": "user",
      "emailAddress": "user@bugtracker.com"
    },
    "project": {
      "id": 12,
      "projectName": "TestProject2",
      "projectDescription": "2 This is a test project",
      "defaultApprover": {
        "id": 27,
        "userName": "kiraly",
        "emailAddress": "alex@alex"
      },
      "defaultDeveloper": {
        "id": 29,
        "userName": "Marcsi2",
        "emailAddress": "Marcsi@gmail.com"
      },
      "s1Time": 2,
      "s2Time": 5,
      "s3Time": 7
    },
    "priority": "B",
    "spentTime": 0,
    "ticketDescription": "The UI is slow. Please investigate it."
  }
]
```
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 404,
  "error": "Not Found",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/ticketsByProject/12"
}
```
  
# Hibajegyhez / Igényhez megjegyzés fűzése

## HTTP kérés formája

`POST http://host/bugtracker/api/addComment`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** az megjegyzés sikeresen a hibajegyhez / igényhez lett fűzve.
  * **400 BADREQUEST:** hiányos kitöltés
  * **404 NOT FOUND:** nem található megadott azonosítójú projektben megadott azonosítójú hibajegy / igény
  
## Beküldött dokumentum

```json
{
	"owner":{
		"id": 11
	},
	"ticket":{
		"id":1
	},
	"description":"developer",
	"date":"2017-05-30"
}
```
## Válasz 
- Sikerült
**200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 404,
  "error": "Not Found",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addComment"
}
```

```json
{
  "timestamp": 1509911823555,
  "status": 400,
  "error": "Bad Request",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addComment"
}
```

# Hibajegy / Igény státuszának létrehozása

## HTTP kérés formája

`POST http://host/bugtracker/api/addStatus`

## HTTP státusz kódok

  * **200 OK:** a státusz létrehozás sikeresen megtörtént
  * **403 FORBIDDEN:** a megadott státusz hozzáadás nem engedélyezett
  * **404 NOT FOUND:** nem található megadott azonosítójú projektben megadott azonosítójú hibajegy / igény

## Beküldött dokumentum

```json
{
	"user":{
		"id": 11
	},
	"ticket":{
		"id":1
	},
	"description":"someStatus",
	"endTime":"2017-05-30",
	"statusName":"Closed"
}
```

## Válasz 
- Sikerült
**200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 400,
  "error": "Bad Request",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/addStatus"
}
```
# Hibajegy / Igény státuszának létrehozása

## HTTP kérés formája

`POST http://host/bugtracker/api/updateStatus`

## HTTP státusz kódok

  * **200 OK:** a státusz váltás sikeresen megtörtént
  * **403 FORBIDDEN:** a megadott státusz váltás nem engedélyezett
  * **404 NOT FOUND:** nem található megadott azonosítójú projektben megadott azonosítójú hibajegy / igény
 ## Beküldött dokumentum

```json
{
	"user":{
		"id": 11
	},
	"ticket":{
		"id":1
	},
	"description":"someStatus",
	"endTime":"2017-05-30",
	"statusName":"Closed"
}
```
## Válasz 
- Sikerült
**200 OK**
- Nem sikerült
```json
{
  "timestamp": 1509911823555,
  "status": 400,
  "error": "Bad Request",
  "exception": "exception",
  "message": "exception message",
  "path": "/api/updateStatus"
}
```
