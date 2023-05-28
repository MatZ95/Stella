Aplikacja „Stella” zarządzająca wyglądem nocnego  nieba.

1. Ogólne informacje. 
Przedstawiana aplikacja umożliwia prowadzenie obserwacji gwiazd oraz warunków pogodowych takich jak zachmurzenie, zamglenie oraz opady  atmosferyczne. Założeniem aplikacji jest umożliwienie dodawania nowych gwiazd do gwiazdozbioru (bazy danych) oraz śledzenie poszczególnych zbiorów – konstelacji. Aplikacja została napisana używając języka JavaScript/  Node.js oraz połączona z bazą danych Mongo DB.

2. Podstawowe funkcje aplikacji:
1. Wybór poziomu zachmurzenia 

   

2. Wybór fazy księżyca

3. Wybór rodzaju opadów atmosferycznych

4. Wybór poziomu gęstości mgły


      3.Zarządzanie gwiazdami i konstelacjami.
      
○ dodawanie

○ usuwanie oraz edycja danych



○ możliwość przejrzenia szczegółów wybranego elementu

○ możliwość przypisania gwiazdy do konstelacji

○ tworzenie nowej konstelacji

○ możliwość usunięcia gwiazdy z konstelacji

○ możliwość zaświecenia danej gwiazdy / gwiazd

○ możliwość wyłączenia danej gwiazdy / gwiazd


Ogólny widok UI umożliwiające wykonywanie założonych funkcji

Budowa gwiazdy

Budowa konstelacji

Otrzymany błąd w przypadku zdeponowania niepełnych informacji s sekcji konstelacji

_______________________________________________________________________________________________
Testy funkcji dodawania nowej gwiazdy do gwiazdozbioru
_______________________________________________________________________________________________

Stan początkowy:
Dwie dodane gwiazdy.


Używając przycisku „Add” wywołujemy funkcję tworzenia nowej gwiazdy nadając jej Nazwę oraz Opis, zakładanym rezultatem jest utworzenie nowego wpisu ze zdeklarowanymi danymi do powyższej listy gwiazd.

Uzyskany rezultat:



Lista dodanych gwiazd została uzupełniona no nowy wpis, symbol gwiazdy został dodany to gwieździstego nieba.
- Funkcjonalność potwierdzona
_______________________________________________________________________________________________
Testy funkcji edycji gwiazdy w gwiazdozbiorze
_______________________________________________________________________________________________

Stan początkowy:

Zakładanym rezultatem jest zmiana wartości Nazwy oraz opisu Przykładu testowego używając przycisku „Edit” wywołującego funkcję edycji rekordów.
Wartości przed zmianami:

Wartości po zmianach:

Wprowadzone wartości zapisane widoczne z głównego UI: - Funkcjonalność potwierdzona

_______________________________________________________________________________________________
Testy funkcji usuwania gwiazdy z gwiazdozbioru
_______________________________________________________________________________________________

Stan początkowy:
Trzy dodane gwiazdy.

Zakładanym rezultatem jest usunięcie dodanej wcześniej Testowej gwiazdy używając przycisku „Delete” wywołującego funkcję usuwania rekordów.
Po kliknięciu „Delete” rekord nr. Zostaje usunięty z listy gwiazd oraz z gwieździstego nieba.
Stan po wywołaniu funkcji: - Funkcjonalność potwierdzona
_______________________________________________________________________________________________
Testy funkcji dodawania nowej konstelacji do gwiazdozbioru
_______________________________________________________________________________________________

Stan początkowy:
Dwie dodane konstelacje.

Zakładany rezultat:
Wywołując funkcję tworzenia nowego recordu za pomocą przyciusku „Add” dodajemy nową konstelację gwiezdną do naszej listy. Zdeklarowana Nazwa i Opis oraz wybrane gwiazdy zostają dodane do nowo utworzonego wpisu.

Uzyskany rezultat:
 

Nowa konstelacja została dodana do Listy gwiazdozbioru oraz gwieździstego nieba. - Funkcjonalność potwierdzona

_______________________________________________________________________________________________
Testy funkcji edycji konstelacji w gwiazdozbiorze
_______________________________________________________________________________________________

Stan początkowy:


Zakładany rezultat:
Zmiana Nazwy oraz opisu wg. Załączonego zrzutu ekranu, wykluczenie jednej z przypisanych gwiazd.


Uzyskany rezultat: 
Wpis został edytowany, Nowe wartości zostały zaktualizowane na liście. - Funkcjonalność potwierdzona

_______________________________________________________________________________________________
Testy funkcji usuwania konstelacji z gwiazdozbioru
_______________________________________________________________________________________________

Stan początkowy, trzy dodane konstelacje.

Zakładany rezultat:
Używając funkcji usuwania poprzez użycie przycisku  „Delete” usunięcie Testowego wpisu o nazwie „TEST1”
Uzyskany rezultat:
Wpis konstelacji został usunięty z listy gwiazdozbioru oraz gwieździstego nieba.- Funkcjonalność potwierdzona
_______________________________________________________________________________________________
Testy funkcji zaświecania oraz gaszenia wybranej gwiazdy.
_______________________________________________________________________________________________
Stan początkowy:
Obie gwiazdy widoczne na niebie, nie są podświetlone.

Zakładany rezultat:
Wybrana gwiazda zostanie podświetlona poprzez wywołane kliknięcia na jej powierzchni. Poświata zostanie widoczna do momentu powtórnego kliknięcia, które spowoduje jej zgaszenie. 

Uzyskany rezultat:

Gwiazda zmieniła kolor na żółty, po ponownym kliknięciu została wyszarzona. –Funkcjonalność potwierdzona.
