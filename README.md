# PIISW, W4N, IO, 2021/2022, semestr letni

# Lista zadań nr 5: Angular

## Zadania

1. (3 pkt) W aplikacji `Bookstore` zaimplementowano widok listy książek (dostępny pod linkiem `/books`). \
  Zaimplementuj widok szczegółowy dla książki prezentujący tytuł, autora, rok wydania oraz opis książki.
  
  (a) W serwisie `BooksService` zaimplementuj metodę `findBookById` i zintegruj ją z odpowiednim endpointem w backendzie. \
  Przykład URL endpointu: http://localhost:3000/api/books/1. \
  (b) Widok szczegółowy powinien być zaimplementowany jako nowy komponent modułu books. \
  (c) Dodaj routing `/books/:bookId/reviews` (Zwróć uwagę, że `bookId` oznacza w tym kontekście zmienną część URL), dane do widoku wczytaj przy pomocy resolvera. \
  Routing powinien wspierać tzw. _deep linking_, tj. powinna być możliwość wejścia bezpośrednio na widok szczegółowy po podaniu adresu do niego w polu adresu przeglądarki. \
  (d) Link `Reviews` elementu listy książek powinien przekierowywać do widoku szczegółowego. \
  (e) W widocznym miejscu na widoku szczegółowym umieść link pozwalający na powrót do widoku listy.

2. (6 pkt) Zaimplementuj widok edycji dla książki. \
   Widok edycji powinien składać się formularza oraz pól edycyjnych pozwalających na zmianę każdego pola obiektu `Book` za wyjątkiem identyfikatora (`id`). \
   Opis książki zrealizuj przy pomocy edytora `<textarea>`, pozostałe pola przy pomocy edytorów typu `<input>`. \
   Wykorzystaj mechanizm reaktywnych formularzy ( _reactive forms_ ).

  (a) Dodaj routing `/books/:bookId/edit`, dane do widoku `book-details` wczytaj przy pomocy resolvera (Zwróć uwagę, że można użyć identycznego resolvera jak w zadaniu 1.). Routing powinien wspierać deep linking. \
  (b) Link `Edit` elementu listy książek powinien przekierowywać do widoku edycji. \
  (c) Zaimplementuj walidację pól edycyjnych: \
    i. tytuł książki jest obowiązkowy i nie dłuższy niż 50 znaków, \
    ii. autor jest obowiązkowy i nie dłuższy niż 50 znaków, \
    iii. rok wydania jest liczbą z zakresu 1000 − 2023, \
    iv. opis jest nieobowiązkowy i nie dłuższy niż 1000 znaków. \
  Błędne pola powinny być podświetlone na czerwono. \
  (d) W serwisie `BooksService` zaimplementuj metodę `saveBook` i zintegruj ją z odpowiednim endpointem w backendzie.
  Przykład URL endpointu: `PUT` http://localhost:3000/api/books/1. \
  (e) Zaimplementuj przycisk `Save`. \
  Przycisk ten powinien być nieaktywny w przypadku wystąpienia jakiegokolwiek błędu walidacji, a także wtedy, gdy zawartość formularza edycyjnego nie została jeszcze
  przez użytkownika zmieniona. \
  Przycisk po naciśnięciu powinien spowodować zapis zmodyfikowanej książki z użyciem w.w. endpointu oraz przekierowanie na widok listy książek. Zmiana powinna
  być widoczna na liście książek. \
  (f) Zaimplementuj przycisk `Cancel`. \
  Przycisk ten powinien być zawsze aktywny. \
  Przycisk po naciśnięciu powinien przekierować na listę książek, edytowana książka nie powinna być zapisana.

3. (4 pkt) Rozszerz widok szczegółowy o listę recenzji. Wyświetl wszystkie recenzje, jedna pod drugą. Każda recenzja powinna zawierać autora, tytuł, treść oraz ocenę.

  (a) Wyświetlanie recenzji powinno być zrealizowane przy użyciu osobnego komponentu (jeden komponent na recenzję, użyj `*ngFor` do wyświetlenia listy). \
  (b) Zaimplementuj osobny serwis do wczytywania recenzji (należy w tym celu stworzyć osobny resolver).
  Zauważ, że `json-server` pozwala na odpytanie o recenzje dla danej książki z wykorzystaniem http://localhost:3000/api/reviews?forBook=1. \
  (c) Zintegruj wczytywanie recenzji z widokiem widoku szczegółowego.

4. (5 pkt) Dodaj możliwość dodawania nowej recenzji.
  
  (a) Stwórz komponent edycyjny z polami formularza pozwalającymi na podanie autora, tytułu i treści. \
  Komponent edycyjny można zrealizować zarówno jako osobny widok lub też pokazać go na widoku `book-details`. \
  (b) Wszystkie pola powinny być obowiązkowe - zaimplementuj odpowiednią walidację. \
  (c) Rozszerz serwis dla recenzji o funkcjonalność zapisu recenzji. \
  (d) Po zatwierdzeniu recenzji (przy użyciu np. przycisku `Save`) recenzja powinna być zapisana w backendzie, a widok szczegółowy odpowiednio zaktualizowany.

5. A(4 pkt) Wyszukiwanie pełnotekstowe książek.
  
  Na widoku listy książek umieść pole edycyjne pozwalające na wpisywanie tekstu. \
  Po wpisaniu co najmniej dwóch znaków lista książek powinna zostać zawężona do tych, które zawierają w swoich polach podany tekst.
  
  (a) Zauważ, że json-server pozwala na wykonania wyszukania pełnotekstowego dzięki następującemu zapytaniu: http://localhost:3000/api/books?q=query. \
  (b) Wyszukiwanie powinno zostać wykonane niezwłocznie po zakończeniu pisania przez użytkownika (brak konieczności naciśnięcia przycisku lub klawisza ENTER). \
  (c) Lista książek powinna zostać zaktualizowana (odpowiednio zawężona) bez przeładowywania strony. \
  (d) Zapewnij, że zapytania do serwera nie są wysyłane częściej niż raz na `200ms`.

--------------------------------------------------------------------------------------

# Bookstore
Bazowe repozytorium dla listy 5 (przedmiot "Projekt i implementacja systemów webowych").

## Instalacja narzędzi
Do pracy w trybie developerskim niezbędny jest `nodeJS` w wersji 14 lub 16. 
Do zarządzania wersjam środowiska `nodeJS` dobrze jest użyć `nvm`:

https://github.com/coreybutler/nvm-windows/releases

Po zainstalowaniu `nvm` dostępna jest komenda CLI, przy pomocy której możemy zainstalować odpowiednią wersję `nodeJS`, np.:

```
nvm list available
nvm install 14.18.1
nvm use 14.18.1
```

Po zainstalowaniu środowiska `nodeJS` dostępne będzie także narzędzie `npm`, którego użyjemy do zainstalowania Angular CLI:

```
npm install -g @angular/cli
```

## Przygotowanie repozytorium do pracy
Po sklonowaniu niniejszego repozytorium oraz po upewnieniu się, że zarówno `nodeJS` jak i `npm` są zainstalowane, należy, będąc wewnątrz katalogu z zawartością repozytorium, wykonać:

```
npm install
```

Komenda ta spowoduje zainstalowanie niezbędnych zależności.

## Uruchomienie backendu
Po zainstalowaniu zależności możliwe jest uruchomienie backendu za pomocą następującej komendy:

```
npm run backend:start
```

Nie należy zamykać terminala, na którym uruchomiliśmy backend.
Zatrzymanie pracy backendu możliwe jest po wciśnięciu CTRL-C.

## Uruchomienie frontendu w trybie develperskim
Tryb developerski pozwala na szybki restart frondendu w celu natychmiastowej weryfikacji napisanego kodu. 
Uruchomienie frontendu następuje po wykonaniu następującej komendy:

```
ng serve -o
```

Frontend w trybie developerskim dostępny będzie pod adresem: http:\\localhost:4200
Narzędzie `serve` monitoruje wszystkie pliki źródłowe i po wykryciu ich zmiany restartuje serwer oraz aplikację w przeglądarce.

## Korzystanie z Angular CLI
Jeśli zainstalowaliśmy Angular CLI globalnie (patrz wyżej), narzędzie to jest dostępne z linii poleceń poprzez wpisanie: `ng`.
Alternatywnie, Angular CLI może być także uruchomiony za pośrednictwem `npm`:

```
npm run ng <parametry>
```

## Wykorzystanie backendu
Backend wykorzystuje `json-server`, który serwuje zawartość pliku `backend/books.json`.

Serwer uruchamia się pod adresem:

http://localhost:3000/

Serwer oferuje REST API dla dwóch kolekcji obiektów:

* http://localhost:3000/api/books
* http://localhost:3000/api/reviews

w tym API do manipulacji pojedynczymi obiektami, np.:

* http://localhost:3000/api/books/1
* http://localhost:3000/api/reviews/2

Serwer obsługuje metody GET, POST, PUT, DELETE oferując tym samym podstawowe operacje typu CRUD.

Serwer obsługuje wyszukiwanie pełnotekstowe z wykorzystaniem parametru `q`:

http://localhost:3000/api/books?q=Lem

Serwer obsługuje wyszukiwanie wg wartości konkretnego pola, np.:

http://localhost:3000/api/reviews?forBook=1
