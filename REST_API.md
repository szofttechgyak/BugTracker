# Login

## HTTP kérés formája

`POST http://host/login?id=username&pwd=password`

## A lekérdezés paraméterei

  * *id* a felhasználó
  * *pwd* a felhasználóhoz megadott jelszó

## HTTP státusz kódok

  * *200 OK* sikeres bejelentkezés
  * *404 NOTFOUND* sikertelen bejelentkezés, rossz felhasználónév vagy jelszó
  
## Beküldött dokumentum

```json
{
    id: "almafa"
    pwd: "almafa123"
}
```