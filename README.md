# Skynet - Sistema de relatórios para escolas de aviação 

Esse projeto surgiu de um trabalho na disciplina de Engenharia de Software
da minha faculdade. Ele tem a finalidade de facilitar a gestão de uma escola
de aviação, imprimindo relatórios das classes, cadastrando usuários e aeronaves.

Esse backend foi feito usando TypeScript, TypeORM com PostgresSQL como DB SQL 
e Docker. 

Como rodar: 

1. Crie o arquivo `.env` na raiz do projeto com as seguintes variáveis: <br />
  `PORT` = à escolha <br />
  `JWT_SECRET` = à escolha <br />
  `NODE_ENV` = development <br />
  `DB_TYPE` = postgres <br />
  `SERVER_ADDRESS` = preferencialmente localhost <br />
  `POSTGRES_ADDRESS` = preferencialmente localhost <br />
  `POSTGRES_USER` = o usuário padrão caso rode com docker-compose é 'postgres' <br />
  `POSTGRES_PASSWORD` = a senha padrão caso rode localmente é '1234' <br />
  `POSTGRES_DB` = skynet <br />
  `POSTGRES_PORT` = a porta padrão caso rode localmente é '5432' <br />

2. Crie o arquivo `database.env` na raiz do projeto com as seguintes variáveis: <br />
  `POSTGRES_USER` = postgres <br />
  `POSTGRES_PASSWORD` = a senha padrão caso rode localmente é '1234' <br />
  `POSTGRES_DB` = skynet <br />
  `POSTGRES_PORT` = à escolha <br />
  
  > esse arquivo serve como configuração pro container de banco de dados, referenciado no docker-compose.yml
  
3. Caso queira rodar localmente, utilize o comando `docker-compose up --build`. Após isso caso o container 
rode sem problemas, aparecerá um log com as configurações de conexão com o banco e se a conexão está ativa.

4. (Opcional) Caso queira rodar em um banco de dados à parte do container, basta rodar no terminal o comando `yarn` e logo após isso
`yarn start`. 

