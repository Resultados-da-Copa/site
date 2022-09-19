-- CreateTable
CREATE TABLE "Usuarios" (
    "usuario_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Equipes" (
    "equipe_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "bandeira" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Atletas" (
    "atleda_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "peso" REAL NOT NULL,
    "numero_camisa" INTEGER NOT NULL,
    "altura" REAL NOT NULL,
    "pe_dominante" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tecnicos" (
    "tecnico_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estatisticas" (
    "estatistica_id" TEXT NOT NULL PRIMARY KEY,
    "escanteiros" INTEGER NOT NULL,
    "gol" INTEGER NOT NULL,
    "cartao_amarelo" INTEGER NOT NULL,
    "cartao_vermelho" INTEGER NOT NULL,
    "Impedimentos" INTEGER NOT NULL,
    "Faltas" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Partidas" (
    "partida_id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "situacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Campeonatos" (
    "campeonato_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "situacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Grupos" (
    "grupo" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fases_Campeonato" (
    "fase_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "situacao" TEXT NOT NULL
);
