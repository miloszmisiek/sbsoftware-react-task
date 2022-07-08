# Zadanie rekrutacyjne
---
## Ogolne
W zadaniu zostal podany link ktory zwracal Endpoint w postaci obiektu JSON.
Pierwszy problem do rozwiazania polegal na obejsciu CORS (Cross-Origin Resource Sharing) , ktory uniemozliwial zebrania danych z linku.
Rozwiazanie:
- uzyty zostla serwer PROXY https://cors-anywhere.herokuapp.com/
- aby dane mogly zostac poprawnie zebrane nalezy przejsc do strony [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo) a nastepnie kliknac przycisk `Request temporary access to the demo server`
- jezeli harmonijka miala by zostac uzyta w trypie produkcyjnym, lepszym rozwiazaniem byloby stworzyc wlasny serwer PROXY w celu rozwiazania problemu

## Zarzadanie stanem przez Redux Toolkit
Do stworzenia aplikacji zostal uzyty React.js z wykorzystaniem [Redux Toolkit](https://redux-toolkit.js.org/) do zarzadzania stanu - z doumentacji mozna wyczytac ze jest to preferencyjna metoda wykorzystywana do tworzenia projektow.

## Harmonijka 'klon' forBET
Harmonijka dostarczona w tym projekcie jest proba stworzenia kopii menu ze strony [forBET](https://www.iforbet.pl/).
Efekty koncowe:
1. **Sukcesy:**
   - Wszystkie dane sa przetworzone z API Endpoint.
   - Harmonijka zawiera 3 zagniedzone poziomy zgodnie z zakresem "level" obiektu JSON
   - Glowne zakladki to obiekty, ktorych klucz "parentCategory" jest wartosci 0
   - Kazdy kolejny poziom jest w relacji do poziomu zakladki rodzica z jego "categoryId"
   - Obiekt JSON zostal przesortowany wedlug klucza "sortOrder"
   - Przy kazdym tytule zakladki jest dolaczona informacja z klucza "eventsCount"
   - Kategorie Esportowe zostaly wyselekcjonowane i zgrupowane w oddzielna kategorie 'Esport' na koncu harmonijki zgodnie z wytycznymi z zdania.
2. **Bugi/bledy:**
   - Zakladka nie zamyka sie jezeli zostanie otwarta kolejna - blad zostal zauwazony przy koncowym etapie budowania harmonijki, w obcenej postaci i z obecnym doswiadczniem wydaje sie to byc skomplikowanym procesem, nalezaloby przebudowac konstrukcje aby uwzglednic ta funkcje.
   - Zmiana koloru przy klikniecu zakladki z poziomu 2 i 3 - j/w
   - Ikonki przy kategoriach - w tresci zadania jest notatka *"Pod ocenę nie jest brany design"* w zwiazku z tym ikonki nie zostaly uzyte w zadaniu.

## Responsywnosc
Zbyt malo elementow na stronie by mozna ocenic jak efektywnie wykorzystac responsywnosc do urzadzen mobilnych - pominete w zadaniu.

## Instrukcja dzialania
1. Kliknij w komponent aby wyswietlic jego nastepny poziom:
   
   ![Poziomy](../doc/poziomy.png)

2. W poziomie trzecim sa widoczne pola checkbox ktore mozna zaznaczyc kliknieciem na pole lub tekst.

    ![Checkbox](../doc/checkbox.png)