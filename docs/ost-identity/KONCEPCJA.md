# OST: koncepcja case study

Plan nowego case study w Work: pomysł i identyfikacja wizualna
Ogólnopolskiej Strefy Talentu. Spisane 11 października 2026 przed
budową treści; jutro z tego pliku powstaje `site/src/content/ost.ts`
według `docs/case-study-kit/` (RULES, TEMPLATE, CHECKLIST) i `docs/STYLE.md`.

Źródła: `~/Documents/OST` (trzy koncepcje z 26 września, księga znaku 1.0,
papier firmowy, wizytówka, teczka, roll-up, strona, seria social 13–16.10,
eksport SVG, ramka ambasadora) oraz repo generatorów
`Konstancja-Tanjga/ost-ambasador` (publiczne, https://ost-ambasador.vercel.app).

## 1. Oś opowieści

Jedno zdanie, które case study ma udowodnić:

> Nazwa programu stała się formułą, a każda reguła systemu wynika z jednej
> koralowej kreski, która oznacza ucznia.

Dlaczego to dobra oś: każda decyzja w materiałach da się sprowadzić do
kreski ucznia. Szczelina w każdej wersji (nawet w czerni i graverze), pole
ochronne mierzone jednostką K = wysokość kreski, koral jako kształt, nigdy
tekst, w generatorze nic nie wchodzi na twarz, bo kreska stoi obok. To daje
case study to, czego wymaga kit: reguły z identyfikatorami, które wracają
w podpisach, folderach i hotspotach.

Druga nić, mocna dla rekrutera: identyfikacja była projektowana pod twarde
wskaźniki programu, nie tylko pod estetykę. Brief CRM podaje dwa KPI:
co najmniej 60% nauczycieli spoza informatyki i co najmniej 50% z miejscowości
poniżej 25 tys. mieszkańców. Koncept `>_` odpadł, bo kojarzy się z IT;
posty 2/4 i 3/4 serii social mówią wprost do małych miejscowości
i do nauczycieli wszystkich przedmiotów. (Zgoda na cytowanie KPI: jest.)

## 2. Metadane

| Pole | Wartość robocza |
| --- | --- |
| slug | `ogolnopolska-strefa-talentu` |
| title | Ogólnopolska Strefa Talentu |
| what (karta) | A visual identity that reads as a formula: ∀∃, for every student there exists a talent |
| group | nowa grupa `identity`, w Work jako pasmo „Visual identity” |
| Role | Idea, visual identity, brand book, applications, and the ambassador generators |
| Client | Stowarzyszenie Talent, programme Ogólnopolska Strefa Talentu (zgoda na podanie: jest) |
| Period | September to October 2026 (koncepcje 26.09, księga 1.0 październik) |
| Team | sama; wybór konceptu po stronie przedstawiciela OST |
| Live | strona programu: www.ost.edu.pl; generatory: ost-ambasador.vercel.app |
| Source | github.com/Konstancja-Tanjga/ost-ambasador |

Język strony: angielski (British), artefakty po polsku. Każde polskie hasło
na planszy dostaje w podpisie tłumaczenie, na przykład „Kolejność ma
znaczenie” (Order matters).

## 3. Mapowanie na stały stos rozdziałów

Kit jest pisany pod produkt; tu każdy rozdział dostaje odpowiednik
w identyfikacji. Kolejność i numeracja zostają, nazwy rozdziałów też,
chyba że wskazano inaczej. Rozdziały bez materiału wypadają.

| N | Rozdział | Co tam wchodzi | Blok |
| --- | --- | --- | --- |
| cover | Cover | TypeCover lub `layers`: znak na ciepłej bieli, key visual ∃∀ → ∀∃, post 1/4, roll-up, generator, strona w MacBooku | `cover` |
| meta | Metadata | tabela z punktu 2 | `MetaStrip` |
| 00 | In short | Context, Problem, My role and scope, Decision 1–3, Outcome, Period and team (szkic niżej) | `brief` |
| 01 | What it is | co oddałam, jako punkty; potem karuzela: znak, księga, social, roll-up, teczka, wizytówka, papier, strona, generator | `points` + `carousel` |
| 01a | Why this is a hard brief | 4–5 ograniczeń, najtrudniejsze pierwsze | `points` |
| 02 | Who it is for | trzy grupy z decku: nauczyciele, uczniowie 12–19, rodzice i partnerzy; czwarta: ambasadorzy | `personas` |
| 03 | Discovery and research | metoda prof. Szubartowskiego, „zadanie z gwiazdką” jako język uczniów, 126 medali jako dowód; złożony diagram „jeden wzór / każdy swój” | `points` + folded `shot` |
| 04 | What the mark had to answer (zamiast „What the audit asked”) | plansza „Nie VE, nie AE” i test 15 mm z pytaniami w dymkach | `duo` z `hotspots` |
| 05 | First prototypes | trzy koncepty i wybór, potem dwa rysunki ∃ (połączona kreska vs szczelina) | `flow` |
| 06 | Design system | ewolucja: koncept B (deck) → księga 1.0; paleta 4 kolorów z kontrastami; dwa kroje | `evolution` + `palette` + `spec` |
| 06a | Mark architecture (zamiast „Screen architecture”) | siatka 164 × 88 j., proporcje znak/nazwa/podpis, pole ochronne 2K, minima druk/ekran, z identyfikatorami reguł | `annotated` |
| 07 | Design and sign-off | aplikacje: papier firmowy, wizytówka, teczka, roll-up A/B, strona desktop i mobile | `set` |
| 08 | Three use cases | trzy kafle dossier (punkt 4) | `dossier` + `usecase` |
| 09 | Handoff | paczka SVG z manifestem, pliki do drukarni, szablon Word i Google Docs, 12 PNG z opisami i alt tekstami, generatory | `steps` |
| 10 | Evidence | tylko liczby zmierzone lub policzone (punkt 5); klipy z generatora | `stats` + `video` |
| 11 | What I would do differently | dwa `joint`: co zrobiłabym inaczej, co zmierzę | `joint` |

Dwie zmiany nazw (04 i 06a) łamią literę kitu („a chapter is never renamed”),
ale nie jego cel: reguła zakazuje nazw, które brzmią większe niż treść.
„What the audit asked” przy znaku, który nie miał audytu, byłoby
nieprawdą. Do decyzji, patrz pytania.

### Szkic „In short”

- **Context.** Stowarzyszenie Talent startuje z pilotażem upowszechnienia
  metody prof. Szubartowskiego w szkołach w całej Polsce.
- **Problem.** Program nie miał nazwy w obrazie: jeden znak musiał mówić do
  nauczycieli, uczniów i rodziców i działać od przypinki 15 mm po roll-up.
- **My role and scope.** Pomysł, trzy koncepty, księga znaku, wszystkie
  aplikacje i dwa generatory grafik dla ambasadorów.
- **Decision 1.** ∀∃ zamiast gwiazdki i `>_`: jedyny koncept silny u wszystkich
  trzech grup i niekojarzący się wyłącznie z informatyką.
- **Decision 2.** Koralowa kreska ucznia jest oddzielona szczeliną w każdej
  wersji i wyznacza jednostkę pola ochronnego.
- **Decision 3.** Generator w przeglądarce zamiast pliku z ramką: zdjęcie nie
  opuszcza urządzenia, a nic nie zasłania twarzy.
- **Outcome.** Do uzupełnienia faktami; rekrutacja i seria postów startują
  13 października 2026, więc dziś nie ma jeszcze wyniku do podania.
- **Period and team.** Wrzesień do października 2026; pracowałam sama, koncept
  wybrał przedstawiciel OST.

### Rozdział 05: sekwencja

1. **Zadanie z gwiazdką.** Gwiazdka o sześciu ramionach różnej długości;
   generator osobistej gwiazdki z imienia. Odpadła w wyborze przedstawiciela OST;
   nie dopisujemy powodów, których nie ma w materiałach.
2. **Twoja kolej `>_`.** Kursor czeka na ucznia. Odpadła: główne ryzyko
   z własnej oceny, skojarzenie wyłącznie z informatyką, przy KPI 60%
   nauczycieli spoza informatyki; rodzice i partnerzy oceniani jako „średni”.
3. **Dla każdego istnieje ∀∃.** Nazwa jako formuła, kolejność ma znaczenie.
   Wybrana przez przedstawiciela OST. Uzasadnienie podajemy jako parafrazę,
   nie cytat: koncept zgadzał się z jego wyobrażeniem programu i z postacią
   prof. Szubartowskiego, który uczył informatyki, więc symbole z logiki
   pasują do metody.
4. **Rysunek ∃.** Kreska połączona z ramą (w czerni zlewa się) kontra
   szczelina (uczeń ma własne miejsce w każdej wersji). Wybrana szczelina.
5. **Ryzyko i jego obsługa.** Kwantyfikatory zna mało kto; stały podpis
   „Dla każdego ucznia istnieje talent.” i hasła, które znak rozwiązują.

## 4. Trzy use case (rozdział 08)

Jeden na obszar: ludzie, kampania, biuro programu. Wszystkie w szablonie
z RULES.md §3 (actor, trigger, precondition, flow, dwa exits, postcondition,
why z odrzuconą alternatywą, rule).

**UC-01 Pokazać, że wspieram program, bez programu graficznego**
(obszar: ambasadorzy)
- Actor: ambasadorka albo ambasador, nauczyciel lub osoba wspierająca, nie
  grafik. Stan: chce pomóc, ale nie chce pytać „gdzie mam kliknąć”.
- Trigger: OST prosi kilkanaście osób o post na start rekrutacji.
- Flow: wgraj zdjęcie → wybierz hasło → format 4:5 albo 9:16 → przeciągnij
  kadr, suwak powiększenia → pobierz PNG. Notatki: duotone w granacie
  i ciepłej bieli, żeby kilkanaście różnych zdjęć wyglądało jak jedna
  kampania; zdjęcie stoi w ramie ∃.
- Exits: pobiera PNG / zamyka stronę i nic nie zostaje (brak serwera, bazy,
  logowania).
- Why: odrzucona ramka z koralowym paskiem na szyi („jak cenzura
  w kryminale”, PDF `Dla kazdego istnieje_Ambasador.pdf`) i szablon
  wymagający programu graficznego.
- Rule **G1**: żaden element znaku nie wchodzi na twarz. Gdzie jeszcze:
  zdjęcia na plakatach i w teczce, logo na spokojnej części kadru albo na pasie
  granatu (księga s. 30).

**UC-02 Zaprosić nauczyciela z małej miejscowości, który nie uczy informatyki**
(obszar: kampania rekrutacyjna)
- Actor: osoba prowadząca komunikację programu. Stan: ma cztery dni i trzy
  formaty, a program ma twarde KPI.
- Flow: seria 4 grafik × 3 formaty (IG 4:5, LinkedIn, story); wspólna siatka;
  2/4 „Dla każdego, także daleko od dużych miast” (punkty układają się
  w Polskę bez konturu), 3/4 „Talent nie wybiera przedmiotu” (lista
  przedmiotów, każdy z koralowym punktem); hasło A/B, opisy IG i LinkedIn,
  alt tekst do każdej grafiki.
- Exits: publikuje wariant A / publikuje wariant B.
- Why: odrzucony jeden post ogólny „rusza program”; nie mówi do grup, na
  których program musi zrobić wynik.
- Rule **S1**: każdy post ma ten sam dół: przycisk w koralu na granacie,
  adres, „Bezpłatny udział”. Gdzie jeszcze: roll-up, strona, teczka.

**UC-03 Napisać list do dyrektora szkoły bez grafika**
(obszar: biuro programu)
- Actor: asystent projektu. Stan: ma Worda albo Google Docs i nie ma
  InDesigna.
- Flow: szablon `.docx` z nagłówkiem i stopką; style OST Adresat, Data,
  Temat, Podpis; druga strona z samym sygnetem ∃; osobny plik na papier
  z drukarni offsetowej; instrukcja dla Google Docs, które nie przenoszą
  stylów.
- Exits: drukuje na zwykłym papierze z grafiką / drukuje na papierze
  z drukarni bez grafiki.
- Why: odrzucony sam PDF papieru firmowego; zespół programu pisze w Wordzie
  i w Google Docs.
- Rule **T1**: identyfikacja działa bez projektantki. Kroje na licencji OFL,
  logo zamienione na krzywe, marginesy zapisane w szablonie. Gdzie jeszcze:
  generator, paczka SVG z wbudowanym polem ochronnym.

## 5. Identyfikatory reguł

Do użycia w podpisach, hotspotach i folderach `annotated`:

| Id | Reguła | Źródło |
| --- | --- | --- |
| M1 | Jedna grubość kreski, 12 j., w obu znakach | księga s. 05 |
| M2 | Szczelina 8 j. w każdej wersji, także czarnej i białej | s. 05, 10 |
| M3 | Kolejność ∀∃, nigdy ∃∀ | s. 03, 32 |
| M4 | Poprzeczka ∀ wybiega poza ramiona, pion ∃ wysunięty: nie „VE”, nie „AE” | s. 07 |
| K1 | Pole ochronne 2K, K = wysokość kreski ucznia | s. 12–13 |
| K2 | Minima: sygnet 8 mm i 16 px, logo z podpisem 72 mm i 380 px | s. 14–15 |
| C1 | Koral to kształt, nie tekst; na jasnym tle nigdy tekst | s. 18, 20 |
| C2 | Koral ciemny #D8411F dla kreski do 25 mm | s. 14, 16 |
| C3 | Granat prowadzi (45%), koral akcentuje (5% + 3%) | s. 17 |
| T1 | Archivo ExtraBold tylko wersalikami w hasłach; Outfit w tekście; bez kursywy | s. 21–24 |
| G1 | Nic nie wchodzi na twarz | README generatorów |
| S1 | Wspólny dół każdego posta | Social media INFO |

## 6. Dowody: co wolno podać jako liczbę

Tylko to, co policzone albo zmierzone, ze źródłem:

- kontrasty WCAG 2.2 z księgi s. 18: granat na bieli 15,7:1, koral na granacie
  5,1:1, #FF5A36 na ciepłej bieli 2,7:1 (dlatego C1);
- minima: sygnet czytelny w 8 mm i 16 px (s. 06 decku, s. 14–15 księgi);
- skala zestawu: 33 strony księgi, 28 plików SVG, 12 grafik social, 2 generatory;
- 126 medali uczniów prof. Szubartowskiego: liczba z materiałów
  zamawiającego, podać jako ich dane, nie mój wynik.

Nie podajemy: wyników rekrutacji (startuje 13.10), liczby pobrań z generatora
(celowo bez śledzenia), wyników testu z rodzicami i uczniami klas 4–6. Test się
odbył, wyniki są tajemnicą projektu; piszemy tylko, że znak przeszedł test
z tymi grupami przed wdrożeniem.

Klipy (nagrane Playwrightem z generatora, jak w Reading the sky):
wgranie zdjęcia i duotone; przeciąganie kadru 4:5 → 9:16; zmiana hasła.
Animacja logo 4 s istnieje tylko jako opis klatek; jeśli zrobimy ją w kodzie,
to jako osobną decyzję, nie jako dowód.

## 7. Obrazy do przygotowania

- Plansze z PDF-ów, rasteryzowane w 2x do WebP 1600/2400/full
  (brak `pdftoppm`; użyjemy Playwright/Chromium albo PyMuPDF w scratchpadzie).
- Znak rysowany z plików SVG, nie z rastra: cover, paleta, siatka.
- Strona desktop i mobile: MacBook i telefon, zgodnie z kitem.
- Druki: płaskie plansze (kit dopuszcza płaskie dla plansz).
- Social: 12 PNG z `SocialMedia.zip`, przekodowane do WebP.
- Procesowe pliki i skrypty eksportu: `docs/ost-identity/`, w tym samym
  commicie co treść.

## 8. Ustalenia z 11 października

1. Identyfikacja zaakceptowana; wolno podać Stowarzyszenie Talent i KPI 60%
   i 50% z briefu CRM.
2. Pracowałam sama. Kredyt bez Claude.
3. Koncept wybrał przedstawiciel OST.
4. Test z rodzicami i uczniami klas 4–6 się odbył.
5. Miejsce: Work, nowe pasmo „Visual identity” (nowa wartość `Group`:
   `identity`, nowy `Band` na stronie głównej pod Products).
6. Nazwy rozdziałów 04 i 06a dopasowane do znaku: zgoda.
7. CRM OST zostaje poza portfolio. Z briefu bierzemy tylko dwa KPI.

## 9. Ustalenia z 12 października

- Wyniki testu z klas 4–6: tajemnica projektu. Nie podajemy liczb ani
  wniosków, tylko fakt, że test był.
- Powód wyboru ∀∃: parafraza w rozdziale 05 (bez cudzysłowu, bo nie mamy
  dosłownych słów).
- www.ost.edu.pl działa i pokazuje identyfikację: link w metadanych,
  zrzut strony w rozdziale 07 obok projektu desktop i mobile.
