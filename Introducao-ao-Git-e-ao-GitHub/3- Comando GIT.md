# **Comandos do GIT** 

 

#### Outros Comados

###### listar os diretórios na pasta que está situado

	ls

###### listar os diretórios ocultos

	ls -a


###### limpar o terminal ou CTRL + L 

	clear


###### Mover arquivos ou pastas

	mv meu_projeto/meu_arquivo.txt caminho_diretório	


 

## Principais Comados do GIT:

As configurações do GIT são armazenadas no arquivo .git localizado dentro do diretório selecionado pelo usuário

### Criar um novo repositório local no GIT

	git init


### Setar seu usuário e e-mail

	git config --global user.email "douglas@hotmail.com"
	git config --global user.name "douglas"


### Adicionar todos os arquivos/diretórios

	git add *
	git add -a
	git add . 


### Adicionar um repositório ou arquivo específico

	git add meu_projeto
	git add meu_arquivo.txt


### Comitar arquivos/diretórios

	git commit -m “mensagem”


### Monitorar status dos arquivos/diretórios

	git status

 
### Listar todas as configurações

	git config --list


### Remover e-mail e username que estão adicionados ao GIT

	git config --global --unset user.email
	git config --global --unset user.email


### Associar repositório local ao repositório remoto

	git remote add origin https://github.com/douglasbispo/...


### Listar os repositórios que estão cadastrados

	git remote
	git remote -v 


### Mandar arquivos/diretórios para o repositório remoto no GitHub

No primeiro push é necessário setar o nome do repositório remoto e a branch, os demais não precisam dessas informações

	git push -u origin main
	git push


### Esse comando irá atualizar as alterações existentes no repositório remoto que existem no seu repositório local 

	git pull origin master


###### *Você só poderá enviar as atualizações se o projeto que está na sua maquina for a mesma versão que estiver no GITHUB, caso não, terá que usar o comando acima.

###### *Caso sua alteração for na mesma linha da atualização existente, o comando acima não irá funcionar, você terá que alterar a linha que estiver dando conflito, o git mostrará qual é a linha.

 
 

### Comando para clonar um repositório do GITHUB.

	git clone https://github.com/douglasbispo/...






### O Link a seguir mostra com todos os comando do GIT

[Lista de comandos úteis do GIT](https://gist.github.com/leocomelli/2545add34e4fec21ec16)
