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
    "id": "almafa",
    "pwd": "almafa123"
}
```
[comment]: <> ------------------------------------------------------------------------------------------
# Új ügyfél / fejlesztő / jóváhagyó hozzáadása
`POST http://host/bugtracker/create_user`

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
    "email": "gipszjakab@company.com",
    "type": "client"
}
```

## A lekérdezés eredménye
A felhasználó e-mail címére megkapja az automatikusan generált ideiglenes jelszavát, melyet az első belépés után kötelezően meg kell változtatnia.
[comment]: <> ------------------------------------------------------------------------------------------

# Projektek megtekintése

A felhasználó projektjeinek kilistázása

## HTTP kérés formája

  * `GET http://host/bugtracker/projects`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## A lekért dokumentum

A lekért dokumentum tartalmazza a projektek azonosítóit és neveit

```json
{
    "data": [
        {
            "id": 1,
            "name": "Bug Tracker"
        },
        {
            "id": 3,
            "name": "Bug Tracker teszt" 
        }
    ]
}
```

# Konkrét projekt megtekintése

## HTTP kérés formája

  * `GET http://host/bugtracker/projects?id=1`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## A lekért dokumentum

A lekért dokumentum tartalmazza a projekthez tartozó információkat

```json
{
    "id": 1,
    "name": "Bug Tracker",
    "default_approver": {
        "id": 1,
        "name": "almafa",
    },
    "default_developer": {
        "id": 2,
        "name": "almafa2",
    },
    "s1": 10,
    "s2": 20,
    "s3": 30,
    "tickets": [
        {
            "id": 1,
            "name": "Hiányzik a REST API dokumentáció",
            "owner": {
                "id": 3,
                "name": "user1"
            },
            "reporter": {
                "id": 3,
                "name": "user1"
            },
            "priority": "s1",
            "status": {
                "description": "pending",
                "start_time": "2017.04.15",
                "end_time": ""
            }
        },
        {
            "id": 2,
            "name": "Hiányos az adatmodell",
            "owner": {
                "id": 4,
                "name": "user2"
            },
            "reporter": {
                "id": 4,
                "name": "user2"
            },
            "priority": "s1",
            "status": {
                "description": "pending",
                "start_time": "2017.04.15",
                "end_time": ""
            }
        }
    ],
    "history": [
        {
            "id": 1,
            "description": "Új hibajegy került felvételre: Hiányzik a REST API dokumentáció",
            "date": "2017.04.15."
        },
        {
            "id": 2,
            "description": "Új hibajegy került felvételre: Hiányos az adatmodell",
            "date": "2017.04.15."
        }
    ]
}
```

# Projekt hozzáadása

## HTTP kérés formája

`POST http://host/bugtracker/new_project`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeres hozzáadás
  * **400 BADREQUEST:** hiányos kitöltés
  
## Beküldött dokumentum

```json
{
    "name": "Bug Tracker",
    "description": "A Bug Tracker projekthez tartozó hibajegyek kezelése",
    "default_approver": "almafa",
    "default_developer": "almafa2",
    "s1": 10,
    "s2": 20,
    "s3": 30
}
```

# Felhasználó hozzáadása

## HTTP kérés formája

`POST http://host/bugtracker/new_user`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** sikeres hozzáadás
  * **400 BADREQUEST:** hiányos kitöltés
  
## Beküldött dokumentum

```json
{
    "name": "almafa3",
    "email": "almafa3@bugtracker.hu",
    "role": "user",
    "password": "1234"
}
```

# Hibajegy megtekintése

## HTTP kérés formája

`GET http://host/bugtracker/projects?id=1&ticketid=1`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója
  * **ticketid:** a hibajegy azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  
## Lekért dokumentum

A lekért dokumentum tartalmazza a hibajegyhez tartozó információkat

```json
{
    "id": 1,
    "name": "Hiányzik a REST API dokumentáció",
    "owner": {
        "id": 3,
        "name": "user1"
    },
    "reporter": {
        "id": 3,
        "name": "user1"
    },
    "priority": "s1",
    "status": {
        "description": "pending",
        "start_time": "2017.04.15",
        "end_time": ""
    },
    "history": [
        {
            "id": 1,
            "description": "A hibajegy felvételre került",
            "date": "2017.04.15."
        }
    ],
    "comments": [
        {
            "id": 1,
            "owner": "user1",
            "description": "Nagyon sürgős, kérlek csináljátok meg",
            "date": "2017.04.15."
        }
    ]
}
```
