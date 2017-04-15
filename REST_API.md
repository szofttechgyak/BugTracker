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
    "id": "almafa"
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
    data: [
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