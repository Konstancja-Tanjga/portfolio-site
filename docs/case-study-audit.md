# Audyt case studies z zakładki Work i plan zmian

Stan na 3 października 2026, gałąź `main` po PR #26.

Wzorcem jest **APplus Analytics** (`site/src/content/bi.ts`, `/work/applus-analytics`). Ten dokument opisuje ten wzorzec, porównuje z nim pozostałe 13 pozycji z zakładki Work (10 produktów i 3 wyróżnienia) i zawiera plan zmian. Każda liczba przy pozycji pochodzi z jej pliku treści, z plansz PNG (tam jest większość cytatów, np. „several hundred manufacturers”, „5 people”) albo z pliku Figmy portfolio (`J7Bt7UqoJm0gHO3IcUl48d`). Wszystko, co jest wnioskiem, a nie odczytem, jest tak oznaczone.

---

## 1. Jak zbudowany jest Analytics

Dziesięć elementów, w tej kolejności:

| # | Element | Co robi w Analytics | Bloki |
|---|---|---|---|
| 1 | Rama | Precyzyjna rola („Sole designer”), firma, produkt, skład zespołu, okres i release w pasku meta | pola `meta` i `cover` |
| 2 | In short (00) | Tabela na 30 sekund: Problem, My part, Decision 1–3, Evidence, Shipped | `spec` |
| 3 | Kontekst | „What it is” (akapit i ekran) oraz „Why this is a hard brief”: ograniczenie zapisane jako problem UI, zamknięte jednym zdaniem | `passage`, `shot`, `pull` |
| 4 | Ludzie | Persony z polami „Where it breaks today”, „So the product must” i zadaniem (BUILD, INTERROGATE…), bez zdjęć stockowych | `personas` |
| 5 | Research | Metoda, liczby ze źródłem i tabela „pytanie → decyzja” pokazująca, co research zmienił | `stats`, `spec` |
| 6 | Decyzje jako reguły | Reguła z uzasadnieniem i odrzuconą alternatywą, plus pełne use case'y (actor, trigger, flow, dwa wyjścia, why this shape, rule it sets) | `points`, `usecase` |
| 7 | System i inżynieria | Szablony stron, reguły powierzchni, wkład w design system, kod skopiowany dosłownie ze źródła | `annotated`, `evolution`, `code` |
| 8 | Ekrany | Pojedyncze ekrany z podpisem, który mówi, co widać. Realistyczne i spójne dane. Narracja nigdy nie siedzi w PNG | `shot`, `duo` |
| 9 | Delivery | Handoff i „after development”: review buildów, design QA wobec kryteriów akceptacji, uzgodnienie pliku z kodem | `spec`, `steps` |
| 10 | Wyniki | Liczby ze źródłem, uczciwa informacja o tym, czego jeszcze nie zmierzono, i plan pomiaru | `stats`, `points` |

Analytics trzyma też higienę:
- nie ma liczb bez źródła;
- nie ma zdjęć stockowych ani placeholderów;
- rola jest opisana tak samo jak na About i FOX;
- proza nie ma typowych tików AI (piętrowanych myślników, odwróceń „nie X, tylko Y”, zamykających puent).

---

## 2. Wyniki audytu

Skala: **H** — jest, **P** — częściowo, **M** — brak.

| Pozycja | 1 Rama | 2 In short | 3 Kontekst | 4 Ludzie | 5 Research | 6 Decyzje | 7 System | 8 Ekrany | 9 Delivery | 10 Wyniki | Tekst w PNG |
|---|---|---|---|---|---|---|---|---|---|---|---|
| APplus Documents (DMS) | P | M | P | M | P | P | P | M | H | M | prawie cały |
| APplus Best Practice Hub | P | M | P | P | P | P | P | M | M | M | prawie cały |
| Elly | P | M | P | M | P | P | P | M | P | P | prawie cały |
| APplus Flow mode | P | M | P | M | M | M | M | P | M | P | nie |
| Volvo Group ERP | P | M | P | M | P | M | P | P | M | M | prawie cały |
| Xecta | P | M | P | M | M | M | M | P | M | M | częściowo |
| Energy & Fuel (strona Xecta) | P | M | P | M | M | M | M | P | M | M | częściowo |
| Riyad Bank | P | M | P | M | M | M | P | P | M | P | częściowo |
| MojePZU | P | M | P | M | P | M | M | P | M | M | cały (jedna plansza) |
| Deloitte career site | P | M | M | M | P | P | M | P | M | M | cały (jedna plansza) |

Wyróżnienia (ERP System of the Year, Bydgoszcz Design Challenge, Possible Reality) mają z założenia lżejszą poprzeczkę. Oceniam je w punkcie 6.

**Co łączy wszystkie pozycje:** żadna nie ma rozdziału „In short”, persony w formie bloku `personas`, bloku `usecase`, bloku `code`, ekranów z podpisami ani rozdziału z wynikami. Poza Analytics podpisy mają tylko trzy zestawy obrazków na Riyad; pozostałe obrazki są bez podpisu. Komponent `Shot` renderuje obrazy z `alt=""` i zakłada, że podpis jest obok, więc czytnik ekranu pomija te obrazki w całości.

---

## 3. Problemy przekrojowe

### 3.1 Pilne: dane osobowe i wiarygodność

Te rzeczy trzeba usunąć przed wszystkim innym, bo szkodzą bez względu na jakość reszty:

| Gdzie | Problem |
|---|---|
| Volvo, plansze 06, 14, 17 | Prawdopodobnie prawdziwe dane osobowe: imiona respondentów z Dovetail (Geraldine, Lone Bang, Nagendra), rekord użytkownika z adresem e-mail @volvo.com i identyfikatorami, nazwisko „Kowalska” w nagłówku |
| DMS, rozdział 16 | Zrzut konkurenta (d3VIEW) z prawdziwymi loginami i adresami e-mail |
| Elly, rozdział 03 | Twój służbowy adres e-mail na zrzucie z Opery |
| BPH, rozdział 04 | Nazwiska na zrzucie starego modala i karta „ChatGPT” w przeglądarce |
| Riyad, 00, 02, 27 | Wymyśleni autorzy podpisani pod prawdziwymi firmami („Harry Bailey, Deloitte”, „Jack Loewe, BCG”, „Mary Brown, The Economist”). Do tego tekst z Wikipedii i „second line of the title” |
| Riyad, 15–22 | Portrety, które najpewniej wygenerowało AI (wniosek), podpisane jako „The illustration system” |
| DMS, rozdział 13; BPH, rozdział 02 | Zdjęcia stockowe ze znakiem wodnym Unsplash+ |
| Flow | Strona mówi „I owned the concept end to end”, a twoja notatka (`~/Downloads/TODO.md`) zapisuje, że Flow mode powstał w APplus 8 (X.2023), czyli przed twoim startem, i że sformułowania o autorstwie poprawiłaś już w CV |
| Flow, Volvo | Liczby bez źródła: „6 → 1 clicks”, „3 workarounds”, „+5% adoption, −12% incidents, 11% savings”. W TODO.md zapisałaś: „Metryki UX — nie istnieją, nie mierzycie” |

### 3.2 Sprzeczności między stronami

| Temat | Co mówią strony | Do ustalenia |
|---|---|---|
| Tytuł | About i Home mówią „Lead Product Designer”. DMS, BPH, Elly i Flow mówią „Lead designer”. Volvo: „Senior UX/UI designer”. Xecta i strona Xecta: „Senior UX & UI designer”. Nagroda: „Lead Designer / UX Engineer” | Jedna formuła dla projektów APplus (proponuję: „Lead Product Designer”, a przy rolach jednoosobowych „sole designer on the product”). Projekty historyczne zachowują tytuł z tamtego okresu, opisany wprost jako tytuł z danego roku |
| FOX | Analytics: „FOX, which I own”. BPH: „v2.3 then v3.0, which I developed with one other designer”. DMS: „FOX 2.3 co-authored” w latach 2025–26 | Jedno zdanie o własności FOX na całej stronie. Do tego: na jakiej wersji FOX wyszły DMS i BPH |
| Liczba klientów | DMS: „several hundred manufacturers”. BPH: „2,000+ customers running APplus” (ze źródłem) | Jedna liczba ze źródłem |
| Nagroda 2025 | Plakietka na DMS, choć DMS ruszył w październiku 2025, w miesiącu wręczenia. Flow „contributed”. Strona nagrody mówi, że nagroda „covers” Flow, Elly i design system | Co faktycznie było pokazywane w pitchu |
| Reguły powierzchni R1–R9 | Siedzą w DMS (rozdział 21), choć cytują PR-07, czyli Analytics | Usunąć z DMS albo podpisać „authored in PR-07 (Analytics), applied here” |
| Zespół DMS | W meta 8 osób, w podsumowaniu „5 people” | Właściwa liczba |

### 3.3 Proza

Na każdej stronie poza Analytics wracają te same tiki:
- odwrócenia „not X — it is Y” (Elly ×6, DMS ×6, BPH ×5, Volvo, Xecta, Riyad);
- dwuwierszowe aforyzmy „Why?” zamykające każdy rozdział DMS;
- ten sam aforyzm o „mood boardzie” na DMS i na BPH;
- piętrowane myślniki.

Przy przepisywaniu obowiązuje reguła z pamięci projektu: proste, konkretne zdania w twoim głosie, liczby zamiast efektu.

---

## 4. Docelowa głębokość

Portfolio na stanowisko Lead Product Designer potrzebuje 3–4 głębokich case studies, a nie dziesięciu równych. Propozycja:

| Głębokość | Pozycje | Dlaczego |
|---|---|---|
| **DEEP** (pełny wzorzec Analytics) | Analytics (gotowe), **Elly**, **DMS**, **BPH** | Projekty APplus, w których byłaś jedyną albo prowadzącą projektantką. Najwięcej gotowego materiału, w tym w Figmie, i najbliżej roli |
| **MEDIUM** (In short, problem, 2–3 decyzje, ekrany, wynik) | **Volvo**, **MojePZU**, **Flow mode** (po wyjaśnieniu autorstwa) | Volvo: prawdziwy redesign legacy z researchem (15 adminów, card sorting, Maze). PZU: najlepiej udokumentowany research (54 IDI w trzech iteracjach). Flow: wymaga ustalenia, co jest twoje |
| **SHORT** | **Xecta + strona Xecta** (połączone w jedną stronę), **Riyad Bank** | Zakres jako różnorodność domen. Za mało materiału, a dla Riyad także problemy z obrazkami |
| **Do sekcji „Earlier, without a page”** | **Deloitte career site** | Strona kariery na SharePoincie, 2019, projekt solowy. Nie wspiera historii enterprise. Wiersz Deloitte w Earlier już istnieje |
| **Wyróżnienia** | Nagroda, Bydgoszcz, Possible Reality | Lekkie poprawki faktów, podpisy i jedno zdanie o roli |

Kolejność na liście Work po zmianach: Analytics, Elly, DMS, BPH, Volvo, PZU, Flow, Xecta, Riyad.

---

## 5. Plan dla każdej pozycji

Statusy w tabelach:
- **GOTOWE** — materiał istnieje i wystarczy go przenieść do tekstu (wskazuję gdzie);
- **POTRZEBNE** — potrzebna informacja od ciebie.

### 5.1 Elly (DEEP). Pierwsza do przepisania, bo ma najwięcej gotowego materiału.

Materiał na stronie i w Figmie (strona „Elly” 303:40755):
- trzy ograniczenia;
- audyt archetypów i teardown Opera Aria;
- decyzja „floating vs pinned” z odrzuconą alternatywą;
- 12 use case'ów;
- reguły trybu głosowego i trzy stany błędu;
- prototyp z 331 interakcjami;
- badanie z 13 uczestnikami, 9 cytatów i wyniki 13/13, 12/13, 11/13, 7/13;
- film od producenta z twoim tłumaczeniem napisów.

W Figmie są komponenty wszystkich stanów Elly, więc ekrany da się wyeksportować pojedynczo i wypełnić realistycznymi danymi, tak jak w Analytics.

| Rozdział | Status |
|---|---|
| 00 In short | POTRZEBNE: co dokładnie wyszło w APplus 9 |
| 01 What it is, 01a Hard brief | GOTOWE (rozdziały 01 i 02a, okładka 339:94487) |
| 02 Who it is for (persony użytkowników końcowych) | POTRZEBNE: kim są użytkownicy, key users czy konsultanci |
| 03 Discovery: archetypy i Aria | GOTOWE (rozdział 03) |
| 04 Floating vs pinned (`duo` i reguła) | GOTOWE (rozdział 04), do poprawienia 330 → 380 px |
| 05 Use case „pytanie tekstowe” (`usecase`) i reguły | GOTOWE (rozdziały 05 i 06, komponenty w Figmie) |
| 06 Stany błędów (`annotated`) | GOTOWE dla 3 stanów. Stany low-confidence i handoff: POTRZEBNE (TODO.md mówi, że ich nie ma) |
| 07 Prototyp | GOTOWE (rozdział 07) |
| 08 Research: liczby, cytaty, „pytanie → decyzja” | Częściowo. Do wyjaśnienia sprzeczności poniżej |
| 09 System (FOX, sidebar, theming) | POTRZEBNE: czy był wkład w FOX lub kod |
| 10 After development | POTRZEBNE |
| 11 Live product (film i ekrany z produkcji) | Film GOTOWY. Ekrany z produkcji POTRZEBNE (dziś są tam mockupy) |
| 12 Wyniki i plan pomiaru | POTRZEBNE |

Sprzeczności do wyjaśnienia:
- 13 uczestników, ale 9 sesji;
- 8 + 5 + 1 = 14, a nie 13;
- „13/13 found it immediately” kontra „discovery problem”;
- testowany prototyp pokazywał źródła czy nie;
- „Citations shipped as a direct result”, skoro badanie było 14–25.04.2025, a release w kwietniu 2025.

### 5.2 APplus Documents, DMS (DEEP)

Materiał:
- hard brief GoBD;
- łańcuch traceability;
- 6 sesji z SME;
- prototypy Figma Make;
- reguły walidacji tagów i szablonów uprawnień;
- natywny rozdział „After development” (już jest).

Kandydaci na use case: usunięcie dokumentu objętego retencją, przywrócenie jako nowa wersja, walidacja tagów, szablon uprawnień.

| Rozdział | Status |
|---|---|
| 00 In short | POTRZEBNE: status release, data, wersja APplus |
| 01 What it is, 01a Hard brief (GoBD) | GOTOWE (rozdziały 12 i 14), do przepisania bez odwróceń |
| 02 Persony: magazyn, finanse, compliance, audyt | POTRZEBNE: zadanie każdej roli i miejsce, w którym coś się dziś psuje |
| 03 Research: 6 sesji z SME, „pytanie → decyzja” | Częściowo. POTRZEBNE: daty, liczba osób, co zmieniły |
| 04 Konkurencja (d3VIEW, weclapp, xentral) | GOTOWE po zamazaniu danych osobowych |
| 05 Prototypy Figma Make | GOTOWE (rozdział 18a) |
| 06 System: szablon szczegółów dokumentu, pętla FOX | GOTOWE. R1–R9: decyzja z 3.2 |
| 07 Sign-off i 1–2 bloki `usecase` | Częściowo. Kroki i wyjścia do potwierdzenia |
| 08 Handoff i kod | POTRZEBNE: co budowałaś w kodzie, link do PR lub Storybooka |
| 09 After development | GOTOWE, do przepisania bez tików |
| Ekrany z podpisami | POTRZEBNE: eksport z Figmy (ramki 256:188323, 189026, 189081) z realistycznymi danymi, bez dat z 2024 roku |
| Wyniki | POTRZEBNE. „5 people” do usunięcia |

### 5.3 APplus Best Practice Hub (DEEP)

Materiał:
- audyt starego modala z adnotacjami;
- benchmark;
- decyzja o wejściu z menu bocznego;
- reguły: instalacja bez dodatkowego kroku, „update available” na górze listy, spójna logika tagów;
- dwa use case'y, US1 (wyszukiwanie i filtry) i US3 (instalacja);
- komponenty BPH w FOX 3.0;
- liczby produktowe ze źródłem (applus-erp.de).

| Rozdział | Status |
|---|---|
| 00 In short | POTRZEBNE: release, data, wyniki |
| 01 What it is, 01a Hard brief („redesign, który spowalnia instalację, to regresja”) | GOTOWE (rozdziały 01 i 08) |
| 02 Persony: instalujący (konsultant lub admin) i publikujący (Asseco) | Częściowo. POTRZEBNE: problemy publikującego |
| 03 Audyt i research, „pytanie → decyzja” | Częściowo. POTRZEBNE: z iloma osobami rozmawiałaś i co to zmieniło |
| 04 Wejście z menu i odrzucona alternatywa | Częściowo. Alternatywa POTRZEBNA |
| 05 Ewolucja: modal → lista → karty | Częściowo. POTRZEBNE: dlaczego lista przegrała z kartami |
| 06 Use case'y US1 i US3 (`usecase`) | GOTOWE (rozdziały 07 i 08). US2, US4 i US5 POTRZEBNE albo usunąć liczbę „5 user stories” |
| 07 Design system (komponenty BPH w FOX 3.0) | Częściowo |
| 08 Delivery | POTRZEBNE |
| Ekrany | POTRZEBNE: prawdziwe nazwy szablonów, spójne wersje (dziś „Latest v2.4” i v2.5 „Current” naraz), bez „Headline”, „Board 1” i „Volvo Buses”, jeśli nazwa klienta nie jest zatwierdzona |
| Wyniki | POTRZEBNE. Liczby produktowe z rozdziału 03 przechodzą do rozdziału 01 |

### 5.4 Volvo Group ERP (MEDIUM)

Najpierw usunąć dane osobowe (3.1), plansze z samymi zdjęciami marketingowymi i Audi, przykładowe persony ze stockowymi zdjęciami, ogólną prozę o IAM z martwymi przypisami [1][2] oraz liczby z planszy 09.

Zostaje:
- research: 15 adminów, card sorting, Usability Hub i Maze, wywiady po 45 minut;
- pary przed i po (15–19).

Docelowe rozdziały: In short, What it is, Problem (stare ekrany), Research i „pytanie → decyzja”, trzy decyzje (wyszukiwanie progresywne, raporty z kryteriów, szablon e-maila), ekrany przed i po z podpisami, Wynik.

Do ujednolicenia:
- strona mówi „ERP do magazynu i finansów”, a plansze pokazują narzędzie IAM dla ponad 500 aplikacji;
- 4 czy 2 developerów;
- sierpień czy lipiec 2023;
- „twenty years” kontra 2007.

### 5.5 MojePZU (MEDIUM)

Cała treść jest w jednej planszy (02, 1440×6130 px). Materiał jest mocny:
- 6 warsztatów biznesowych;
- 24, 18 i 12 IDI (razem 54) przy prototypach 1.0, 2.0 i 3.0;
- insighty i cytat.

Przepisać jako tekst: In short, Problem, Research (`stats`), 2–3 decyzje „co zmienił research między wersjami”, ekrany, Wynik.

Do poprawienia:
- tytuł „UI designer” kontra rola badawcza na planszy;
- obietnica „account setup” i „motion” bez pokrycia;
- czy projekt w ogóle wszedł na produkcję.

### 5.6 APplus Flow mode (MEDIUM, wstrzymane do czasu odpowiedzi)

Najpierw ustalić, co jest twoje, a co jest bazą z APplus 8 (2023), np. mobile, tablet, przełącznik tenantów albo późniejszy redesign. Do tego czasu:
- usunąć „owned the concept end to end”;
- usunąć statystyki bez źródła;
- usunąć plakietki OMR i ISO;
- przenieść zdjęcie trofeum na stronę nagrody;
- sprawdzić, czy lewy ekran na planszy 07 („Document Management System”) to Flow, czy DMS.

### 5.7 Xecta i strona Xecta (SHORT, jedna strona)

Połączyć w jedną stronę „Xecta: produkt i strona” z kontrastem „ten sam klient, odwrotna publiczność”. Taki kontrast już jest w opisie strony.

Do wyjaśnienia:
- ekrany mają daty z 2022–2023, a współpraca według strony skończyła się w lipcu 2021;
- „owned end to end” kontra „mockups and prototypes with a UX designer and a researcher”;
- „Energy & Fuel Ind.” nie pojawia się nigdzie na planszach.

### 5.8 Riyad Bank (SHORT)

Usunąć wymyślonych autorów, tekst z Wikipedii, placeholdery i „NTF”, a także portrety 15–22 (albo podmienić je na prawdziwy system ilustracji).

Zostaje:
- akapit o decyzji 3D-nawigacji ze szkicem (03);
- 4–5 oczyszczonych ekranów;
- rok, zespół, link do sklepu.

Rozdziały mają przeskok 01 → 03.

### 5.9 Deloitte career site (do „Earlier”)

Przenieść do sekcji „Earlier, without a page” jako drugą linię wiersza Deloitte. Jeśli wolisz zostawić stronę jako MEDIUM, materiał jest na planszy 02:
- 12 IDI;
- trzy zasady;
- decyzje w układzie Why/Plan.

Do poprawienia:
- zdanie otwierające o „wrong candidate” nie ma pokrycia w planszach;
- okres 2017–2021 to czas zatrudnienia, a projekt to wrzesień–listopad 2019;
- w planszy jest powtórzony akapit i literówki.

---

## 6. Wyróżnienia

| Strona | Poprawki |
|---|---|
| ERP System of the Year 2025 | Certyfikat mówi „GOLD, User Experience ERP, Asseco Solutions AG”: wpisać to dokładnie zamiast „won”, „User Experience”, „DACH”. Tytuł „Lead Designer / UX Engineer” opisać wprost jako tytuł z 2025 roku albo ujednolicić. Dodać podpis pod zdjęciem certyfikatu i jeden ekran produktu z podpisem. Z twoim udziałem: co było pokazywane w pitchu, link do wyników |
| Bydgoszcz Design Challenge | Etykieta „CIVIC DESIGN” nie pasuje do tematu (promocja polskiego designu, pamiątki regionalne). Dodać rok (2022), twoją rolę i liczebność zespołu, podpisy pod 05 i 06, autorów zdjęć (Ład, Kurzatkowski). 02–04 skrócić do jednego zdania |
| Possible Reality | Zrzut pokazuje projekt „Circulence” i trzy autorki, a strona mówi o „The Wisdom of a Vanishing Adventure” i nie wymienia współautorek. Ustalić, który tytuł jest właściwy, dopisać zespół, rok, link do filmu, 1–2 kadry z podpisem. Usunąć pointę z opisu |

---

## 7. Kolejność prac

1. **Etap 0: higiena (bez nowej treści).** Wszystko z 3.1, plus podpisy pod obrazkami, które zostają. Można to zrobić od razu po twojej decyzji, co usunąć, a co zamazać.
2. **Etap 1: decyzje przekrojowe (3.2).** Tytuły, zdanie o FOX, liczba klientów, R1–R9, nagroda. Jedna rozmowa, potem poprawki w kilku plikach.
3. **Etap 2: DEEP.** Elly → DMS → BPH, każda na osobnej gałęzi i w osobnym PR. Na każdą: przepisanie na natywne bloki, eksport ekranów z Figmy z realistycznymi danymi, review przed PR.
4. **Etap 3: MEDIUM.** Volvo → PZU → Flow (Flow po wyjaśnieniu autorstwa).
5. **Etap 4: SHORT i porządki.** Xecta z jej stroną, Riyad, Deloitte do Earlier, wyróżnienia, nowa kolejność listy Work.

Etapy 0 i 1 nie wymagają nowych materiałów, tylko twoich decyzji. Etapy 2–4 ruszają, gdy odpowiesz na pytania z sekcji 8 dla danej pozycji.

---

## 8. Pytania do ciebie

**Przekrojowe**
1. Jedna formuła roli dla projektów APplus i jedno zdanie o własności FOX (3.2).
2. Na jakiej wersji FOX wyszły DMS i BPH?
3. Liczba klientów APplus: 2000+ (źródło: applus-erp.de) czy „several hundred”?
4. Co było pokazywane w pitchu ERP System of the Year i kto prezentował?
5. Reguły R1–R9: zostają tylko w Analytics?

**Elly**
1. 13 uczestników, 9 sesji, 8 + 5 + 1 = 14: jak jest naprawdę?
2. Czy testowany prototyp pokazywał źródła? Kiedy cytowania weszły do produktu?
3. Czy stany handoff i low-confidence powstały?
4. Skąd jest twarz awatara (stock, AI, licencja)?
5. Kim są użytkownicy końcowi?

**DMS**
1. Status release i data, wersja APplus.
2. Zespół: 8 czy 5 osób?
3. 6 sesji z SME: daty, uczestnicy, 2–3 rzeczy, które zmieniły.
4. Zadania i problemy czterech ról.
5. Co budowałaś w kodzie?

**BPH**
1. Release, data, wyniki (instalacje, opublikowane szablony).
2. Czy rozmawiałaś z konsultantami lub adminami? Ile osób?
3. Pozostałe trzy user stories.
4. Czy nazwa „Volvo Buses” jest zatwierdzona do publikacji?
5. Jak wyglądało review i QA buildów?

**Volvo**
1. IAM czy ERP?
2. Liczba developerów i data końca projektu.
3. Czy imiona i identyfikatory na 06, 14 i 17 należą do prawdziwych osób?
4. Skąd liczby z planszy 09?
5. Co konkretnie znaczy „rozwinięcie Volvo DS”?

**PZU**
1. Czy projekt wszedł na produkcję?
2. Twoja rola: UI czy research i warsztaty?
3. Co zmieniło się między prototypami 1.0, 2.0 i 3.0?
4. Skąd „account setup”, „motion” i mobile?

**Flow**
1. Co jest twoje względem APplus 8 (2023)? Który release, jaki okres?
2. Czy liczby „6 → 1”, „3 workarounds” i „deployed across the base” zostają, czy znikają?
3. Jaki był research?
4. Czy lewy ekran na planszy 07 to Flow, czy DMS?

**Xecta**
1. Czy ekrany z datami 2022–2023 to twoje projekty?
2. Rola: „end to end” czy mockupy w zespole z UX designerem i researcherem?
3. Skąd nazwa „Energy & Fuel Ind.”?

**Riyad**
1. Rok i zespół.
2. Czy A/B testy i wywiady z C-level były twoje, ile ich było?
3. Czy masz czyste eksporty ekranów?

**Deloitte**
1. „Earlier” czy MEDIUM?
2. Czy redesign wszedł na produkcję?

**Wyróżnienia**
1. Bydgoszcz: twoja rola i liczebność zespołu.
2. Possible Reality: czy to ten sam projekt co „Circulence”? Link do filmu.
