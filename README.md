# Prova MT

Está api serve para retornar dados especificos de 10 cidades que tem o maior percentual
de casos do COVID-19 filtrados por Unidade Federativa, Data inicial e Data final.


# Começar por aqui
- Clone o repositorio
```
git clone --depth=1 https://github.com/sousaprogramador/prova_mt.git <project_name>
```
- Instale as dependências
```
cd <project_name>
yarn
```
- Rode o projeto com a seguinte instrução
```
yarn dev
```

Finalmente, utilizar um client rest para consumir a api em `http://localhost:3333/info` e enviando os query params logo em seguida da url: `?state=PR&dateStart=2020-05-10&dateEnd=2020-05-18`.
