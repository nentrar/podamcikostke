---
title: chaptr
intro: Narzędzie do publikowania scenariuszy i nie tylko
date: 2026-11-13
category: Projekty
featuredImage: /assets/images/blog/chaptr-example.png
---
Na wstępie krótki follow-up z projektu "InteGRAcja RPG". Zakończyliśmy ostatnio drugie testowanie, było bardzo pozytywnie, pojawiły się nowe insighty i pierwsze mikro efekty. Jedna z osób, która przed rozpoczęciem naszych testów miała trudności z rozmawianiem, a będąc w roli "Dziennikarki" zaczęła podczas gry wychodzić z inicjatywą i dosłownie leadować całą grupę. Zdaję sobie sprawę, że na ten efekt na pewno miało wpływ więcej czynników ale i tak miło jest gdy widzi się coś takiego, co również potwierdził wychowawca placówki. 

Do opracowania zostały ostatnie szczegóły, zrobienie składu graficznego z wykorzystaniem autorskich grafik oraz stworzenie krótkiego filmu instruktażowego dla wychowawców placówek wsparcia dziennego, tak aby wejście w metodę pracy z młodzieżą było szybkie i łatwe. Szykuje się pracowita końcówka roku. 

# Skład graficzny scenariuszy

W międzyczasie chciałem się podzielić jednym małym narzędziem, które sobie opracowałem aby móc sprawniej publikować swoje scenariusze. Jest nim [chaptr](https://pypi.org/project/chaptr/) który w wielkim skrócie służy do tego, aby zmienić prosty tekst w Markdown, w gotowy PDF już do publikacji wedle stylu pod wybrany system RPG. Został on napisany w języku Python i korzysta się z niego z Terminala, ale jest to wygodne, bo potrzebujemy go w zasadzie dopiero gdy chcemy stworzyć szatę graficzną do naszego tekstu. 

Ta jest aktualnie podstawowa, natomiast w tym momencie tworzę style pod wybrane systemy, tak aby zmiana z Dungeons and Dragons and Zew Cthulhu wymagała jedynie podmiany wybranego stylu... a nie ślęczenia wiele godzin nad składem. To częsciowy powód dlaczego do tej pory opublikowałem tutaj tylko jeden scenariusz. Przygotowywanie składu graficznego (który będzie nie tylko ścianą tekstu wyciągniętą z MS Word), zajmowało mi tak wiele czasu, że w efekcie tej niemałej frustracji powstał właśnie **chaptr**.

## Pierwszy przystanek - Canva

Scenariusz do przygody ["Uwięzieni w głębinach"](https://www.podamcikostke.pl/scenarios/uwiezieni-w-glebinach/) stworzyłem na platformie Canva. Początkowo, biorąc pod uwagę, że jest to bardzo krótki scenariusz, chciałem zrobić z tego broszurę, ale nie spinało mi się to, bo oprócz samej przygody znajdują się tam również pomoce. Mogłem zawrzeć je osobno, ale wtedy bym musiał zrobić jakąś osobną przestrzeń na wszystkie te pliki. Powoli tworzę sobie takie miejsce na [itch.io](https://podamcikostke.itch.io), gdzie docelowo chciałbym umieszczać moje scenariusze, ale to w swoim czasie. 

Z efektu ostatecznego w "Uwięzionych..." jestem zadowolony. Ale trzeba też wiedzieć, że to nie jest jeden ciągły tekst, tylko każdy nagłówek i każdy paragraf to osobno wklejony obiekt. Co przy tak krótkim scenariuszu jeszcze nie jest problematyczne, ale już "Tajemnica Wyspy Wraków" liczy 20 stron A4... i nie jest to najdłuższy z moich scenariuszy. Innymi słowy - Canva nie jest rozwiązaniem. 

## Lochy Irenicusa

Zrezygnowałem zatem z Canvy i zaczałem w pierwszej kolejności z różnych gotowych rozwiązań, które by pozwalały na pisanie scenariusza jako tekst, a potem łatwa zamiana w gotowy do publikacji styl. Pierwszy wybór padł na [Latex](https://www.latex-project.org/get/), w którym można znaleźć nawet gotowe szablony pod Dungeons and Dragons. Co w takim razie poszło nie tak? No w pierwszej kolejności instalacja. Żeby wszystko działało poprawnie, trzeba zainstalować parę komponentów. I mnie cały czas coś się tam wywalało... tak, że trwało to parę godzin zanim mogłem zbudować sobie PDFa. 

Spędziłem trochę czasu z LaTeX... ale to nie było to. Chyba moim największym problemem było to jak bardzo trzeba było edytować ten tekst, dodawać oznaczenia nawet tam gdzie był zwykły paragraf czy nagłówek. I w efekcie ten tekst był przygotowany pod publikowanie... ale nie był użyteczny nigdzie indziej. Czyli znów musiałbym pisać scenariusz raz i składać go w LaTeX drugi raz. Tym samym TeX wylądował w koszu. 

Zaczęły się kolejne eksperymenty. Obisidian, Twine, Reedly. Ostatecznie doszedłem do punktu w którym nic - co znalazłem wtedy - mi nie pasowało, zatem postanowiłem zrobić dla siebie własne narzędzie. 

## chaptr

W **chaptr** piszę scenariusz po prostu tekstem, jedynie że od początku nadaję mu formę tak jakby jego odbiorcą był czytelnik, a nie tylko ja. Następnie mogę po prostu skorzystać z tego co napisałem na własnej sesji i dopracować. A gdy skończę - wybieram sobie styl w którym chcę opublikować scenariusz, składam z tego plik html, a następnie za pomocą WeasyPrint (inne narzędzie Python), robię z tego gotowy PDF.

Jest to prosty workflow, na którym mi zależało, a którego nigdzie nie mogłem znaleźć. Jeśli również szukasz podobnego narzędzia, które może pomóc Ci w publikowaniu scenariuszu - zapraszam do korzystania. Na [pypi](https://pypi.org/project/chaptr/) znajdują się wszystkie informacje jak sobie to narzędzie pobrać i zainstalować.   
Jest za darmo, dla każdego, na licencji MIT.

I niedługo, korzystając z niego, postaram się opublikować tutaj "Tajemnicę Wyspy Wraków", na podstawie której dopracowuję teraz styl "dungeon", pod przygody w Dungeons and Dragons ;)