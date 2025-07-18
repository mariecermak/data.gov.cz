---
layout: contained
title: Nástroje pro tvorbu popisu dat
ref: DataModelling-Tools
lang: cs
---

Zde najdete představení nástrojů, pomocí kterých lze popisy dat vytvářet - včetně návodů a šablon. Vedle námi poskytnutých a podporovaných nástrojů níže lze využít i jiné. Jediný požadavek, který musí nástroje splnit je, že umožňují vytvořit soubor se slovníkem, který je kompatibilní s [otevřenou formální normou pro slovníky]. 

<gov-message color="primary" type="bold"><gov-icon type="components" name="lightbulb-fill" slot="icon"></gov-icon>Dne 7. 7. 2025 byly vydány nové verze návodů a šablon pro popis dat. Dosavadní šablony jsou stále podporované, ale u nových slovníků či úprav silně doporučujeme použít nové verze. Pro více informací navštivte <a href="./historie-verzí">historii verzí podkladů pro popis dat</a>.</gov-message>

### Tabulka pro popis dat   
Tabulkové řešení jsme připravili především pro ty, kteří s popisem dat začínají a v úřadě nemají zkušenosti s nástroji na tvorbu popisu dat v grafické podobě (neboli s diagramy/pohledy). Tabulka je nejjednodušší řešení pro základní popis dat. Nevyžaduje vynaložení speciálních kapacit kromě znalce oblastí, které jste zvolili pro tvorbu slovníků. Berte však na vědomí, že s růstem počtu pojmů, vlastností a vztahů ale roste komplikovanost a klesá srozumitelnost tabulky. Šablona je připravena ve formátu XLSX (pro Microsoft Excel).

##### Ke stažení
* [Návod pro popis dat pomocí tabulky]
* [Šablona pro Excel (obsahuje příkladový slovník)]

###	Archi
[Archi] je nástroj na modelování v jazyku ArchiMate. Nástroj je zdarma ke stažení i k jakémukoliv využití (podle permisivní licence MIT)  a dostupný je pro Windows, Linux i macOS. Jazyk ArchiMate se používá pro vyjádření architektury podniku. Pro Archi jsme vytvořili šablonu pro popis dat, se kterou můžete začít nový projekt, nebo ji naimportujete do vašeho existujícího projektu.

##### Ke stažení

* [Návod pro popis dat pomocí Archi]
* [Šablona pro Archi (obsahuje příkladový slovník)]

### Enterprise Architect  
[Sparx Enterprise Architect] je oproti Archi komerční nástroj, který podporuje několik modelovacích jazyků, včetně ArchiMate a UML. Připravili jsme šablonu a MDG technologii pro popis dat, pomocí které můžete tvořit slovníky.

##### Ke stažení

* [Návod pro popis dat pomocí Sparx Enterprise Architect]
* [MDG technologie] (pro stažení klikněte pravým tlačítkem na odkaz a zvolte "Uložit odkaz jako...")
* [XMI export s příkladovým slovníkem] (pro stažení klikněte pravým tlačítkem na odkaz a zvolte "Uložit odkaz jako...")


### Výrobní linka
[Výrobní linka] je balíček softwarových nástrojů, který slouží k vytváření slovníků a jejich následné publikaci. Jeho součástí jsou
*	nástroje na tvorbu slovníků TermIT a OntoGrapher,
*	prohlížecí nástroj ShowIT,
*	nástroj pro tvorbu datových specifikací Dataspecer.

Ukázku těchto nástrojů naleznete ve školení [Modelování popisu dat ve veřejné správě]. O přístup do Výrobní linky žádejte na e-mailové adrese <a href= "mailto:data@dia.gov.cz">data@dia.gov.cz</a> - nezapomeňte uvést, pro jakou oblast slovník tvoříte a jak ho plánujete využít (např. evidence údajů agendy do RPP nebo výkladový slovník).

[otevřenou formální normou pro slovníky]: https://ofn.gov.cz/slovníky  "Otevřená formální norma pro slovníky"
[Archi]: https://archimatetool.com "Archi"
[Sparx Enterprise Architect]: https://sparxsystems.com/products/ea/ "Sparx Enterprise Architect"
[Modelování popisu dat ve veřejné správě]: ../../vzdělávání/e-learning/modelování-významu-dat-ve-veřejné-správě/ "Školení Modelování popisu dat ve veřejné správě"
[Výrobní linka]: https://slovník.gov.cz/modelujeme/ "Výrobní linka"
[Návod pro popis dat pomocí tabulky]: ../../přílohy/popis-dat/dokumenty/Návod-pro-popis-dat-Tabulka.pdf "Návod pro popis dat pomocí tabulky"
[Šablona pro Excel (obsahuje příkladový slovník)]: ../../přílohy/popis-dat/šablony/Šablona-pro-popis-dat.xlsx "Šablona ve formátu XLSX (obsahuje příkladový slovník)"
[Návod pro popis dat pomocí Archi]: ../../přílohy/popis-dat/dokumenty/Návod-pro-popis-dat-Archi.pdf "Návod pro popis dat pomocí Archi"
[Šablona pro Archi (obsahuje příkladový slovník)]: ../../přílohy/popis-dat/šablony/Šablona-pro-popis-dat.architemplate "Šablona pro Archi (obsahuje příkladový slovník)"
[Návod pro popis dat pomocí Sparx Enterprise Architect]:  ../../přílohy/popis-dat/dokumenty/Návod-pro-popis-dat-EA.pdf "Návod pro popis dat pomocí Sparx Enterprise Architect"
[MDG technologie]: ../../přílohy/popis-dat/šablony/slovníkyMDG.xml "MDG technologie"
[XMI export s příkladovým slovníkem]: ../../přílohy/popis-dat/šablony/Příkladový-slovník.xml "XMI export s příkladovým slovníkem"
