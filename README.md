# Sistema de Autenticação com Cadastro, Login e Consulta de Usuários

Este projeto implementa um sistema básico de autenticação de usuários com rotas de **cadastro**, **login** e **consulta**. Ele utiliza **JWT (JSON Web Token)** para autenticação e **bcrypt** para hash de senhas. A aplicação foi construída com **Node.js** e **Express.js**, conectada a um banco de dados MySQL.

## Funcionalidades

- **Cadastro de Usuário**: Permite que um usuário crie uma conta, fornecendo um e-mail e senha. A senha é criptografada com **bcrypt** antes de ser armazenada no banco de dados.
- **Login de Usuário**: Permite que o usuário se autentique fornecendo seu e-mail e senha. A senha fornecida é comparada com o hash armazenado no banco de dados.
- **Consulta de Usuários**: Permite que um usuário autenticado consulte os dados de todos os usuários cadastrados.

## Tecnologias Utilizadas

- **Node.js** e **Express.js**: Para a construção do servidor e das rotas da API.
- **JWT (JSON Web Token)**: Para gerar tokens de autenticação para sessões de usuário.
- **bcrypt**: Para hash de senhas e verificação de senhas no processo de login.
- **MySQL**: Para o armazenamento de dados de usuários.

## Como Utilizar

### 1. Clonar o Repositório

Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
