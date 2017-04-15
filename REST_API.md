# Bejelentkezés

## HTTP kérés formája

`POST http://host/bugtracker/login`

## A lekérdezés paraméterei

Nincs

## HTTP státusz kódok

  * **200 OK** sikeres bejelentkezés
  * **401 UNAUTHORIZED** sikertelen bejelentkezés, rossz felhasználónév vagy jelszó
  
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

  * **200 OK** az erőforrás rendelkezésre áll
  * **404 NOTFOUND** az erőforrás nem található 
  
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

  * **id** a projekt azonosítója

## HTTP státusz kódok

  * **200 OK** az erőforrás rendelkezésre áll
  * **404 NOTFOUND** az erőforrás nem található 
  
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
            "priority": "urgent",
            "status": {
                "description": "pending",
                "start_time": "2017.15.04"
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
            "priority": "urgent",
            "status": {
                "description": "pending",
                "start_time": "2017.15.04"
            }
        }
    ]
}
```