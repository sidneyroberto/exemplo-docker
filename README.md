# exemplo-docker
Exemplo de projeto MERN em contêineres [Docker](https://docker.com), orquestrados com [Docker Compose](https://docs.docker.com/compose/).

Você pode achar as instruções para a instalação do Docker e Docker Compose em seu sistema operacional [aqui](https://docs.docker.com/install/) e [aqui](https://docs.docker.com/compose/install/).

Para executar instalar as dependências, execute os seguintes comandos:

##### `cd backend`

##### `npm i`

##### `cd ../frontend`

##### `npm i`

Para construir as imagens dos contêineres em modo de desenvolvimento, execute o seguinte comando (lembrando que todos os comandos do Docker devem ser executados a partir da raíz do projeto):

##### `docker-compose build`

Para subir os contêineres em modo de desenvolvimento, execute o seguinte comando:

##### `docker-compose up`

Alternativamente, caso queira subir os contêineres em modo detached (sem reter o terminal de linha de comando), execute o seguinte comando:

##### `docker-compose up -d`

Para construir as imagens do contêineres em modo de produção, execute o seguinte comando:

##### `docker-compose -f docker-compose-prod.yml build`

Para subir os contêineres em modo de produção, execute o seguinte comando:

##### `docker-compose -f docker-compose-prod.yml up`

De forma análoga, você pode executar o comando acima com o parâmetro `-d` para executar em modo detached.

Caso tenha subido os contêineres em modo detached, você pode visualizar os logs dos contêineres com o seguintes comando:

##### `docker-compose logs -f` (modo desenvolvimento)

##### `docker-compose -f docker-compose-prod.yml logs -f` (modo produção)
