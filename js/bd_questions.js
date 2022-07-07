let questions = [
    {
        question: 'No contexto do MySQL, assinale a opção que indica os comandos utilizados para inserir/alterar/remover registros de uma tabela.',
        options: [
            'ADD/REWRITE/EXCLUDE',
            'APPEND/REPLACE/DROP',
            'INCLUDE/ALTER/ERASE',
            'INSERT/UPDATE/DELETE',
            'MODIFY/SET/REMOVE'
        ],
        answer: 3
    },
    {
        question: '<html><img src="assets/img/question_bd_1.jpg" alt="Questão Banco de Dados"</html> Assinale a alternativa INCORRETA quanto ao comando SQL que retorne a data de exibição do último capítulo da novela com nome “Novela A”.' ,
        options: [
            'select max(data_exibicao) from capitulos where cod_novela in (select codigo from novelas where nome = "Novela A");',
            'select max(data_exibicao) from capitulos left outer join novelas on (capitulos.cod_novela = novelas.codigo) where novelas.nome = "Novela A";',
            'select max(data_exibicao) from capitulos, novelas where novelas.nome = "Novela A";',
            'select max(data_exibicao) from capitulos inner join novelas on (capitulos.cod_novela = novelas.codigo) where novelas.nome = "Novela A";',
            'select max(data_exibicao) from novelas right outer join capitulos on (capitulos.cod_novela = novelas.codigo) where novelas.nome = "Novela A";'
        ],
        answer: 2
    },
    {
        question: 'Suponha que em uma consulta a um banco de dados, usando MySQL, seja mostrado um conjunto de resultados que contenham linhas duplicadas. Para eliminar essas linhas, podemos utilizar o comando:',
        options: [
            'Group By.',
            'Unique.',
            'Limit.',
            'Distinct.',
            'Primary Key.'
        ],
        answer: 3
    },
    {
        question: 'Com referência ao MySQL 5.7, assinale o tipo de tabela (storage engine) que suporta transações seguras.',
        options: [
            'HEAP',
            'InnoDB',
            'MEMORY',
            'MERGE',
            'MyISAM'
        ],
        answer: 1
    },
    {
        question: 'Em um banco de dados MySQL, para se criar um banco de dados de nome dbEmpresa, é suficiente executar o comando a seguir. CREATE DATABASE dbEmpresa;',
        options: [
            'Verdadeiro',
            'Falso'
        ],
        answer: 0
    },
    {
        question: 'Tendo em vista que, no servidor de banco de dados MySQL, há diferentes formas de gravar cópias de segurança, assinale a opção que corresponde corretamente a uma forma de fazer uma cópia completa de um banco de dados com o nome database1 no servidor de banco de dados MySQL.',
        options: [
            'mysql < dump-database1.sql',
            'mysqldump --no-data –events > dump-database1.sql',
            'mysql -u root > dump-database1.sql',
            'mysqldump database1 > dump-database1.sql'
        ],
        answer: 3
    },
    {
        question: 'O servidor do sistema gerenciador de bancos de dados MySQL (versão 8.0) possui diversas variáveis de status, sendo que as variáveis “Questions” e “Connections”, significam, respectivamente, o',
        options: [
            'número de comandos executados pelo servidor e o número de tentativas de conexão (bem sucedidas ou não) ao servidor.',
            'número de tabelas existentes no banco de dados e o número de atributos existentes em cada tabela.',
            'número de falhas ocorridas no servidor e o número de usuários simultâneos no banco de dados.',
            'tempo utilizado para as consultas e o tempo de conexão total ao servidor.',
            'tempo utilizado para as consultas e o tempo de conexão total ao servidor.'
        ],
        answer: 0
    },
    {
        question: 'O comando do sistema gerenciador de bancos de dados mySQL (versão 8.0) para que se realize o backup de um banco de dados, direcionando esse backup para um arquivo, é:',
        options: [
            'dumpsql nome-do-banco-de-dados out nome-do- -arquivo.sql',
            'mysqldump nome-do-banco-de-dados > nome-do- -arquivo.sql',
            'dumpmysql nome-do-banco-de-dados <> nome-do- -arquivo.sql',
            'mydumpsql nome-do-banco-de-dados % nome-do- -arquivo.sql',
            'sqldump nome-do-banco-de-dados / nome-do- -arquivo.sql'
        ],
        answer: 1
    },
    {
        question: 'O comando do sistema gerenciador de bancos de dados MySQL (versão 8) que exibe a mensagem de erro correspondente ao código de erro de número 1, sem exibir o código propriamente dito, é:',
        options: [
            'comp_err 1;',
            'comp_err 1 -s;',
            'comp_err 1 -v;',
            'perror 1 -s;',
            'perror 1 -v;'
        ],
        answer: 3
    },
    {
        question: 'Considerando a string “Prefeitura Municipal ”, qual função nativa do MySQL pode ser usada para remover os espaços em branco do fim da string.',
        options: [
            'RTRIM().',
            'LTRIM().',
            'LCASE().',
            'TRIM().',
            'LEFT().'
        ],
        answer: 1
    }
]