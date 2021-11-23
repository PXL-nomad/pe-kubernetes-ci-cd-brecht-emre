# Kubernetes CI/CD

## De Applicatie

### FrontEnd-Applicatie/

Deze folder bevat een front-end Angular applicatie die met de backend API praat. Documentatie is voorzien hoe deze te deployen.

### BackEnd-Applicatie/

Deze folder bevat een back-end applicatie; de API is gebouwd in NodeJS Express en gedocumenteerd met Swagger. Daarnaast wordt de data opgeslagen in een aparte mongoDB.

Helaas was de back-end applicatie te laat klaar en is er dus geen documentatie geschreven over hoe te deployen.
Voor dringende vragen kan je altijd terecht op ventieldopje1337@everwake.org

## De Opdracht

Zet een CI/CD pipeline op die de applicatie in _BackEnd-Applicatie/_ & _FrontEnd-Applicatie/_ deployet in een provisioned k3d cluster.

- Voor het CI stuk gebruik je Jenkins of Jenkins X.
- Voor het CD stuk gebruik je een GitOps systeem naar keuze.

De gebruikte CI/CD oplossingen worden eveneens in de cluster gedeployed.

### Bonuspunten

- Gebruik van Jenkins X voor CI en CD.
- 2 deployment lines: Test en Production
- De hele CI/CD set-up automated als infrastructure-as-code.

## Demo

- Toon een gedeployde, werkende applicatie.
- Verander source code van de applicatie, commit en even later staat er automatisch een nieuwe deployment klaar.
- Toon de nieuw gedeployde, werkende applicatie

## Deliverables

Deze oplossing moet testbaar zijn vanop een andere machine dmv deze repo.

1. Voor elke stap van de opdracht een werkende omgeving. Nieuwe scripts en/of manifest files documenteer je in deze repository.

2. Manuele handelingen die nodig zijn om de oplossing op te zetten zijn allemaal gedocumenteerd in deze repo. Idealiter zijn er geen manuele handelingen vereist. (zie: _Bonuspunten_ hierboven)

3. De Demo is zo beknopt mogelijk, maar toch volledig gedocumenteerd. (korte, no-nonsense bulletpoints die ik thuis kan naspelen)

## Concept Verwachtingen

1. Er wordt verwacht dat de gebruikte Kubernetes concepten en onderdelen kunnen worden uitgelegd.
   Enkele voorbeelden:
   - Gebruik je een ClusterIP, dan kan je uitleggen wat een ClusterIP doet. Er worden geen formele definities verwacht, maar wel toepasbare kennis.
   - Gebruik je een Kubernetes Deployment, dan kan je conceptueel uitleggen hoe dat werkt. Dat wil ook zeggen dat je bv begrijpt dat een Deployment een ReplicaSet maakt, die op zijn beurt pods aanmaakt. Dit is Kubernetes _praktische_ basiskennis.
   - Je kan uitleggen hoe de network flow in je applicatie gebeurt.
2. Als je extra technolgie gebruikt, begrijp je die zowel conceptueel als praktisch, en kan je die verklaren. Een voorbeeld van extra technologie is het gebruik van Jenkins en Jenkins agents.
