# New Beginning — kancelaria prawa rodzinnego

Wielostronicowa, responsywna strona demonstracyjna dla marki **New Beginning**. Klasyczny styl redakcyjny, jasne tło, bordo i granat, autorskie elementy wizualne oraz subtelne animacje.

## Zawartość

- Strona główna (`index.html`)
- O kancelarii (`o-kancelarii.html`)
- Zakres pomocy (`uslugi.html`)
- Rozwód i separacja (`rozwod.html`)
- Dzieci i alimenty (`dzieci-i-alimenty.html`)
- Podział majątku (`podzial-majatku.html`)
- Proces współpracy (`proces.html`)
- Poradnik (`wiedza.html`)
- Kontakt (`kontakt.html`)
- Polityka prywatności (`polityka-prywatnosci.html`)
- Strona błędu (`404.html`)

## Uruchomienie

Otwórz `index.html` w przeglądarce. Aby użyć serwera lokalnego:

```bash
python -m http.server 8000
```

Następnie wejdź na `http://localhost:8000`.

## Publikacja przez GitHub Pages

1. Utwórz **publiczne** repozytorium, `newbeginning`, na koncie GitHub.
2. Wyślij zawartość tego katalogu bezpośrednio do **głównego katalogu** repozytorium na gałąź `main`.
3. W repozytorium wybierz **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Wybierz `main` i `/(root)`, następnie **Save**.
5. Link do witryny powinien mieć postać `https://<login>.github.io/newbeginning/`, ale będzie aktywny dopiero po zakończeniu publikacji.

Brak frameworka i procesu buildowania. Podstrony i zasoby używają względnych ścieżek, dzięki czemu działają w podkatalogu GitHub Pages.

## Formularz kontaktowy

Strona korzysta ze standardowego `mailto:`. Po zatwierdzeniu formularza przygotowuje e-mail do `dom@dom.com` w aplikacji pocztowej użytkownika. **Nie wysyła wiadomości automatycznie i nie zapisuje danych na serwerze.** Jeśli potrzebny jest działający formularz bez klienta pocztowego, konieczne będzie podłączenie osobnej usługi lub backendu.

## Treści demonstracyjne

Strona nie podaje fikcyjnych nazwisk adwokatów, biura, opinii ani wskaźników skuteczności. To projekt pokazowy, a nie rzeczywista oferta kancelarii. Przed komercyjnym wykorzystaniem należy uzupełnić dane przedsiębiorcy, zweryfikować treści prawne i dostosować politykę prywatności.

## Zasoby

- Grafiki w `assets/` zostały opracowane na potrzeby tej demonstracji przy użyciu generatywnego tworzenia obrazów i następnie poddane kadrowaniu oraz optymalizacji.
- Fonty: DM Sans i Playfair Display (Google Fonts), z bezpiecznymi systemowymi zamiennikami.

© 2026 New Beginning — projekt demonstracyjny.
