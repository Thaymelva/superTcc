CREATE DATABASE TCCERTO;

USE TCCERTO;

-- Tabela de Usuários
CREATE TABLE tbl_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    celular CHAR(11) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Tipos de Usuários
CREATE TABLE tbl_tipo_usuario (
	id INT auto_increment PRIMARY KEY,
    usuario_id INT,
	tipos ENUM('LIDER', 'MEMBRO DE GRUPO', 'ORIENTADOR'),
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuarios(id)
);

-- Tabela de cursos 
CREATE TABLE tbl_cursos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome_curso VARCHAR(20) NOT NULL,
aluno_id INT,
FOREIGN KEY (aluno_id) REFERENCES tbl_usuarios(id)
);

-- Tabela de Grupos de TCC
CREATE TABLE tbl_grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_grupo VARCHAR(30) NOT NULL,
    codigo_convite VARCHAR(36) UNIQUE NOT NULL,
    criador_id INT,
    FOREIGN KEY (criador_id) REFERENCES tbl_usuarios(id)
);

-- Tabela de Membros de Grupos
CREATE TABLE tbl_membros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    grupo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuarios(id),
    FOREIGN KEY (grupo_id) REFERENCES tbl_grupos(id)
);

-- Tabela de Mensagens em Grupos
CREATE TABLE tbl_mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    remetente_id INT,
    grupo_id INT,
    conteudo_mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (remetente_id) REFERENCES tbl_usuarios(id),
    FOREIGN KEY (grupo_id) REFERENCES tbl_grupos(id)
);

-- Tabela de Tarefas na Agenda
CREATE TABLE tbl_tarefas_agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    grupo_id INT,
    titulo_tarefa VARCHAR(50) NOT NULL,
    descricao_tarefa TEXT,
    data_limite DATE,
    concluida BOOLEAN DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuarios(id),
    FOREIGN KEY (grupo_id) REFERENCES tbl_grupos(id)
);


-- Inserção de dados na tabela de Usuários (tbl_usuarios)
INSERT INTO tbl_usuarios (nome, email, celular, senha) VALUES
('João Silva', 'joao@example.com', '1234567890', 'password'),
('Maria Sousa', 'maria@example.com', '9876543210', 'secret'),
('Carlos Lima', 'carlos@example.com', '6543210987', 'pass123');

-- Inserção de dados na tabela de Tipos de Usuários (tbl_tipo_usuario)
INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES
(1, 'LIDER'),
(2, 'MEMBRO DE GRUPO'),
(3, 'ORIENTADOR');

ALTER TABLE tbl_cursos MODIFY COLUMN nome_curso VARCHAR(50);


INSERT INTO tbl_cursos (nome_curso, aluno_id) VALUES
('Engenharia de Software', 1),
('Ciência da Computação', 2),
('Administração de Empresas', 3);

select * from tbl_cursos;

INSERT INTO tbl_grupos (nome_grupo, codigo_convite, criador_id) VALUES
('Grupo A', 'ABC123', 1),
('Grupo B', 'DEF456', 2),
('Grupo C', 'GHI789', 3);


INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (1, 1);
INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (2, 1);
INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (3, 2);

INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (4, 2);

INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (5, 3);

INSERT INTO tbl_mensagens (remetente_id, grupo_id, conteudo_mensagem)
VALUES (1, 1, 'Olá, mundo! Esta é uma mensagem de exemplo.');


insert into tbl_tarefas_agenda (usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite)
VALUES (1, 1, 'Programar', 'Temos que programar muitooo', '2024-05-02');

select * from tbl_tarefas_agenda;

select * from tbl_grupos



