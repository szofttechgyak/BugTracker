# Login

## HTTP k�r�s form�ja

`POST http://host/login?id=username&pwd=password`

## A lek�rdez�s param�terei

  * *id* a felhaszn�l�
  * *pwd* a felhaszn�l�hoz megadott jelsz�

## HTTP st�tusz k�dok

  * *200 OK* sikeres bejelentkez�s
  * *404 NOTFOUND* sikertelen bejelentkez�s, rossz felhaszn�l�n�v vagy jelsz�
  
## Bek�ld�tt dokumentum

```json
{
    id: "almafa"
    pwd: "almafa123"
}
```