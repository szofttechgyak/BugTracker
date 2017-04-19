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
}
```

## A lekérdezés eredménye
A felhasználó e-mail címére megkapja az automatikusan generált ideiglenes jelszavát, melyet az első belépés után kötelezően meg kell változtatnia.

# Felhasználók lekérése

A rendszerben szereplő felhasználók kilistázása.

## HTTP kérés formája

  * `GET http://host/bugtracker/users`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK:** a lekérdezés sikeres
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználók listázására
  
## A lekért dokumentum

A lekért dokumentum tartalmazza a rendszerben szereplő felhasználók adatait

```json
{
    "users": [
        {
            "id": 1,
            "name": "Gipsz Jakab",
            "email": "gipszjakab@gmail.com"
        },
        {
            "id": 2,
            "name": "Kert Elek",
            "email": "kertelek@xyz.com"
        }
    ]
}
```

# Konkrét felhasználó lekérése

Egy rendszerben szereplő felhasználó adatainak lekérése.

## HTTP kérés formája

  * `GET http://host/bugtracker/user?id=1`

## A lekérdezés paraméterei

  * **id:** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK:** az erőforrás rendelkezésre áll
  * **404 NOTFOUND:** az erőforrás nem található 
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználók listázására
  
## A lekért dokumentum

A lekért dokumentum tartalmazza a megadott azonosítójú felhasználó adatait.

```json
{
    "id": 1,
    "name": "Gipsz Jakab",
    "email": "gipszjakab@gmail.com"
}
```

# Ügyfél / Fejlesztő / Jóváhagyó projekthez rendelése
`POST http://host/bugtracker/assign?projectID=1&userID=1&role=client`

## A lekérdezés paraméterei

  * **projectID:** a projekt azonosítója
  * **userID:** a felhasználó azonosítója
  * **role:** a felhasználó szerepköre a projektben

## HTTP státusz kódok

  * **200 OK:** sikeresen hozzá lett rendelve a megadott szerepkörrel a felhasználó a projekthez
  * **401 UNAUTHORIZED:** nincs megfelelő jog felhasználó projekthez rendeléséhez
  
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
