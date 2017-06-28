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
## Válasz 
- Sikerült
```json
{
...
}
```
- Nem sikerült
```json
{
...
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
{
...
}
```
- Nem sikerült
```json
{
...
}
```

# Konkrét projekt megtekintése

## HTTP kérés formája

  * `GET http://host/bugtracker/api/project/id

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## Válasz 
- Sikerült
```json
{
...
}
```
- Nem sikerült
```json
{
...
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
...
}
```

## Válasz 
- Sikerült
```json
{
...
}
```
- Nem sikerült
```json
{
...
}
```

# Új ügyfél / fejlesztő / jóváhagyó hozzáadása
`POST http://host/bugtracker/api/addUser`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeresen létre lett hozva a felhasználó
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
...
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
{
...
}
```
- Nem sikerült
```json
{
...
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
...
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
		"id": 11,
        ...
	},
	"project":{
		"id":4
        ...
	},
	"role":"developer"
}
```
## Válasz 
- Sikerült
```json
{
...
}
```
- Nem sikerült
```json
{
...
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
```json
{
...
}
```
- Nem sikerült
```json
{
...
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
    "ticketName": "Hiányzik a REST API dokumentáció",
    "ticketType": "Bug"
    "owner": {
        "id": 3,
        "name": "user1",
        .....
    },
    "reporter": {
        "id": 3,
        "name": "user1",
        ....
    },
    "project": {
    	"id": 4,
        "projectName": "Project Name"
        ...
    }
    ...
}
```
- Nem sikerült
```json
{
...
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
```json
{
...
}
```
- Nem sikerült
```json
{
...
}
```

# Hibajegy / Igény státuszának váltása

## HTTP kérés formája

`POST http://host/bugtracker/api/addStatus`

## HTTP státusz kódok

  * **200 OK:** a státusz változás sikeresen megtörtént
  * **403 FORBIDDEN:** a megadott státusz változtatás nem engedélyezett
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
```json
{
...
}
```
- Nem sikerült
```json
{
...
}
```
