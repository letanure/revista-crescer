# Infográficos Revista Crescer

## Desenvolvimento

Os infográficos estão em uma estrutura usando [middleman](http://middlemanapp.com/), semelhante à padrão do rails.

Basta clonar o projeto, instalar as dependências e iniciar o servidor do _middleman_.

```bash
$ git clone git@github.com:letanure/revista-crescer.git
$ bundle install
$ middleman server
```

Depois, acesse localmente em [http://0.0.0.0:4567/](http://0.0.0.0:4567/)

### Estrutura

```yml
.
├──── build = arquivos estáticos gerados pelo middleman, de todos os gráficos
│
├──── data  = arquivos .yml com dados de cada infográfico
│     ├─ nome-do-infografico-1.yml
│     └─ nome-do-infografico-2.yml
│
├──── source
│     ├─ assets
│     │  ├─── fonts = fontes usadas pelos infográficos
│     │  │
│     │  ├─┰─ images
│     │  │ ├─ nome-do-infografico-1 = imagens de um dos infográfico 1
│     │  │ ├─ nome-do-infografico-2 = imagens de um dos infográfico 2
│     │  │ └─ ...
│     │  │
│     │  ├─ javascripts
│     │  │  ├─ nome-do-infografico-1 = scripts de um dos infográfico 1
│     │  │  ├─ nome-do-infografico-2 = scripts de um dos infográfico 2
│     │  │  ├─ ...
│     │  │  │─ nome-do-infografico-1.js = script do infográfico 1, importa todos da pasta correspondente
│     │  │  └─ nome-do-infografico-2.js = script do infográfico 2, importa todos da pasta correspondente
│     │  │
│     │  └─ stylesheets
│     │     ├─ nome-do-infografico-1 = sass partials de um dos infográfico 1
│     │     ├─ nome-do-infografico-2 = sass partials de um dos infográfico 2
│     │     ├─ ...
│     │     │─ nome-do-infografico-1.css = estilo do infográfico 1, importa todos da pasta correspondente
│     │     └─ nome-do-infografico-2.css = estilo do infográfico 2, importa todos da pasta correspondente
│     │
│     ├─ nome-do-infografico-1  = markup de um dos infográfico-1
│     ├─ nome-do-infografico-2  = markup de um dos infográfico-2
│     ├─ ...
│     ├─ index.html.erb = lista de todos infográficos
│     │
│     └─ layouts = estrutura HTML base para todos infográficos
│
```

## Deploy

Para deploy, utilizamos o [middleman-deploy](https://github.com/tvaughan/middleman-deploy).
Para deploy no _github pages_, faça:

```bash
$ middleman build [--clean]
$ middleman deploy [--build-before]
```

Deploy em produção, confira a documentação da _gem_ e configure de acordo.
