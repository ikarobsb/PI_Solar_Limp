use solar_limp;

drop table if exists `area_concessaos`;

create table `area_concessaos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(40) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `distribuidora_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `distribuidora_id` (`distribuidora_id`),
  CONSTRAINT `areaconcessaos_ibfk_1` FOREIGN KEY (`distribuidora_id`) REFERENCES `distribuidoras` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

drop table if exists `distribuidoras`;

create table `distribuidoras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `kw` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

drop table if exists `usuarios`;

create table `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

show tables;

insert into `usuarios` (`id`, `nome`, `email`, `telefone`, `created_at`, `updated_at`) 
    values (DEFAULT, 'Adriel Barbosa Borges',  'adrielbarborges@gmail.com','16994486626',sysdate(3),sysdate(3)),
           (DEFAULT, 'Guilherme de Almeida Morais Ferreira', 'guilherme.amf18@gmail.com','16991344979',sysdate(3),sysdate(3)),
           (DEFAULT, 'João Miguel Moscardini Veronez','joaomiguelmv_04@hotmail.com','16991296669',sysdate(3),sysdate(3)),
           (DEFAULT, 'Ikaro Beraldo da Silveira Balestrin','ikaro.bsb@gmail.com','16991270312',sysdate(3),sysdate(3)),
           (DEFAULT, 'Guilherme Texeira Ais','','16993299116',sysdate(3),sysdate(3));

insert into `distribuidoras`
	values
		(1, "ALIANÇA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(2, "CELPA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(3, "CELPE",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(4, "CEMAR",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(5, "CHESP",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(6, "COCEL",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(7, "COELBA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(8, "COSERN",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(9, "CPFL PAULISTA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(10, "CPFL PIRATININGA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(11,"CPFL SANTA CRUZ",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(12,"EDP ES",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(13,"EDP SP",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(14,"ELEKTRO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(15,"ELETROPAULO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(16,"ENEL CE",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(17,"ENEL-GO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(18,"ENEL RJ",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(19,"ENERGISA BO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(20,"ENERGISA MG",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(21,"ENERGISA MS",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(22,"ENERGISA MT",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(23,"ENERGISA NF",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(24,"ENERGISA PB",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(25,"ENERGISA SE",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(26,"ENERGISA SS",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(27,"ENERGISA TO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(28,"FORCEL",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(29,"IGUAÇU ENERGIA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(30,"JARI",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(31,"JOÃO CESA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(32,"LIGHT",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(33,"MUXFELDT",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(34,"NOVA PALMA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(35,"PANAMBI",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(36,"RGE",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(37,"RGE SUL",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(38,"SANTA MARIA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(39,"SULGIPE",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(40,"URUSSANGA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(41,"DEMEI",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(42,"DMED",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(43,"ELETROCAR",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(44,"CEA",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(45,"CEB-D",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(46,"CEEE-D",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(47,"CELESC-D",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(48,"CEMIG-D",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(49,"CERR",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(50,"COPEL-DIS",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(51,"ELETROBRAS AC",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(52,"ELETROBRAS AL",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(53,"ELETROBRAS AM",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(54,"ELETROBRAS PI",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(55,"ELETROBRAS RO",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11'),
		(56,"ELETROBRAS RR",0.55,'2022-06-02 19:11:11','2022-06-02 19:11:11');

select * from `distribuidoras`;

insert into `area_concessaos` 
	values  
		(1,'SP','ÁGUAS DE LINDÓIA ',9,sysdate(3),sysdate(3)),
		(2,'SP',' ÁGUAS DE SÃO PEDRO ',9,sysdate(3),sysdate(3)),
		(3,'SP',' AGUDOS ',9,sysdate(3),sysdate(3)),
		(4,'SP',' ALTAIR ',9,sysdate(3),sysdate(3)),
		(5,'SP',' ALTINÓPOLIS ',9,sysdate(3),sysdate(3)),
		(6,'SP',' ALTO ALEGRE ',9,sysdate(3),sysdate(3)),
		(7,'SP',' ÁLVARO DE CARVALHO ',9,sysdate(3),sysdate(3)),
		(8,'SP',' ALVILÂNDIA ',9,sysdate(3),sysdate(3)),
		(9,'SP',' AMERICANA ',9,sysdate(3),sysdate(3)),
		(10,'SP',' AMÉRICO BRASILIENSE ',9,sysdate(3),sysdate(3)),
		(11,'SP',' AMPARO ',9,sysdate(3),sysdate(3)),
		(12,'SP',' ANALÂNDIA ',9,sysdate(3),sysdate(3)),
		(13,'SP',' ARAÇATUBA ',9,sysdate(3),sysdate(3)),
		(14,'SP',' ARAMINA ',9,sysdate(3),sysdate(3)),
		(15,'SP',' ARARAQUARA ',9,sysdate(3),sysdate(3)),
		(16,'SP',' AREALVA ',9,sysdate(3),sysdate(3)),
		(17,'SP',' AREIÓPOLIS ',9,sysdate(3),sysdate(3)),
		(18,'SP',' ARIRANHA ',9,sysdate(3),sysdate(3)),
		(19,'SP',' AVAÍ ',9,sysdate(3),sysdate(3)),
		(20,'SP',' AVANHANDAVA ',9,sysdate(3),sysdate(3)),
		(21,'SP',' BADY BASSITT ',9,sysdate(3),sysdate(3)),
		(22,'SP',' BALBINOS ',9,sysdate(3),sysdate(3)),
		(23,'SP',' BÁLSAMO ',9,sysdate(3),sysdate(3)),
		(24,'SP',' BARBOSA ',9,sysdate(3),sysdate(3)),
		(25,'SP',' BARIRI ',9,sysdate(3),sysdate(3)),
		(26,'SP',' BARRA BONITA ',9,sysdate(3),sysdate(3)),
		(27,'SP',' BARRETOS ',9,sysdate(3),sysdate(3)),
		(28,'SP',' BARRINHA ',9,sysdate(3),sysdate(3)),
		(29,'SP',' BATATAIS ',9,sysdate(3),sysdate(3)),
		(30,'SP',' BAURU ',9,sysdate(3),sysdate(3)),
		(31,'SP',' BEBEDOURO ',9,sysdate(3),sysdate(3)),
		(32,'SP',' BENTO DE ABREU ',9,sysdate(3),sysdate(3)),
		(33,'SP',' BILAC ',9,sysdate(3),sysdate(3)),
		(34,'SP',' BIRIGUI ',9,sysdate(3),sysdate(3)),
		(35,'SP',' BOA ESPERANÇA DO SUL ',9,sysdate(3),sysdate(3)),
		(36,'SP',' BOCAINA ',9,sysdate(3),sysdate(3)),
		(37,'SP',' BOFETE ',9,sysdate(3),sysdate(3)),
		(38,'SP',' BORACÉIA ',9,sysdate(3),sysdate(3)),
		(39,'SP',' BOREBI ',9,sysdate(3),sysdate(3)),
		(40,'SP',' BOTUCATU ',9,sysdate(3),sysdate(3)),
		(41,'SP',' BRAÚNA ',9,sysdate(3),sysdate(3)),
		(42,'SP',' BREJO ALEGRE ',9,sysdate(3),sysdate(3)),
		(43,'SP',' BRODÓSQUI ',9,sysdate(3),sysdate(3)),
		(44,'SP',' BROTAS ',9,sysdate(3),sysdate(3)),
		(45,'SP',' BURITIZAL ',9,sysdate(3),sysdate(3)),
		(46,'SP',' CABRÁLIA PAULISTA ',9,sysdate(3),sysdate(3)),
		(47,'SP',' CAFELÂNDIA ',9,sysdate(3),sysdate(3)),
		(48,'SP',' CAJOBI ',9,sysdate(3),sysdate(3)),
		(49,'SP',' CAJURU ',9,sysdate(3),sysdate(3)),
		(50,'SP',' CAMPINAS ',9,sysdate(3),sysdate(3)),
		(51,'SP',' CAMPOS NOVOS PAULISTA ',9,sysdate(3),sysdate(3)),
		(52,'SP',' CÂNDIDO RODRIGUES ',9,sysdate(3),sysdate(3)),
		(53,'SP',' CAPIVARI ',9,sysdate(3),sysdate(3)),
		(54,'SP',' CÁSSIA DOS COQUEIROS ',9,sysdate(3),sysdate(3)),
		(55,'SP',' CEDRAL ',9,sysdate(3),sysdate(3)),
		(56,'SP',' CHARQUEADA ',9,sysdate(3),sysdate(3)),
		(57,'SP',' CLEMENTINA ',9,sysdate(3),sysdate(3)),
		(58,'SP',' COLINA ',9,sysdate(3),sysdate(3)),
		(59,'SP',' COLÔMBIA ',9,sysdate(3),sysdate(3)),
		(60,'SP',' COROADOS ',9,sysdate(3),sysdate(3)),
		(61,'SP',' COSMÓPOLIS ',9,sysdate(3),sysdate(3)),
		(62,'SP',' CRAVINHOS ',9,sysdate(3),sysdate(3)),
		(63,'SP',' CRISTAIS PAULISTA ',9,sysdate(3),sysdate(3)),
		(64,'SP',' DESCALVADO ',9,sysdate(3),sysdate(3)),
		(65,'SP',' DOBRADA ',9,sysdate(3),sysdate(3)),
		(66,'SP',' DOIS CÓRREGOS ',9,sysdate(3),sysdate(3)),
		(67,'SP',' DOURADO ',9,sysdate(3),sysdate(3)),
		(68,'SP',' DUARTINA ',9,sysdate(3),sysdate(3)),
		(69,'SP',' DUMONT ',9,sysdate(3),sysdate(3)),
		(70,'SP',' ELIAS FAUSTO ',9,sysdate(3),sysdate(3)),
		(71,'SP',' EMBAUBA ',9,sysdate(3),sysdate(3)),
		(72,'SP',' ESPÍRITO SANTO DO PINHAL ',9,sysdate(3),sysdate(3)),
		(73,'SP',' FERNANDO PRESTES ',9,sysdate(3),sysdate(3)),
		(74,'SP',' FERNÃO ',9,sysdate(3),sysdate(3)),
		(75,'SP',' FRANCA ',9,sysdate(3),sysdate(3)),
		(76,'SP',' GABRIEL MONTEIRO ',9,sysdate(3),sysdate(3)),
		(77,'SP',' GÁLIA ',9,sysdate(3),sysdate(3)),
		(78,'SP',' GARÇA ',9,sysdate(3),sysdate(3)),
		(79,'SP',' GAVIÃO PEIXOTO ',9,sysdate(3),sysdate(3)),
		(80,'SP',' GETULINA ',9,sysdate(3),sysdate(3)),
		(81,'SP',' GLICÉRIO ',9,sysdate(3),sysdate(3)),
		(82,'SP',' GUAIÇARA ',9,sysdate(3),sysdate(3)),
		(83,'SP',' GUAIMBÉ ',9,sysdate(3),sysdate(3)),
		(84,'SP',' GUAÍRA ',9,sysdate(3),sysdate(3)),
		(85,'SP',' GUAPIAÇU ',9,sysdate(3),sysdate(3)),
		(86,'SP',' GUARÁ ',9,sysdate(3),sysdate(3)),
		(87,'SP',' GUARACI ',9,sysdate(3),sysdate(3)),
		(88,'SP',' GUARANTÃ ',9,sysdate(3),sysdate(3)),
		(89,'SP',' GUARARAPES ',9,sysdate(3),sysdate(3)),
		(90,'SP',' GUARIBA ',9,sysdate(3),sysdate(3)),
		(91,'SP',' GUATAPARA ',9,sysdate(3),sysdate(3)),
		(92,'SP',' HERCULÂNDIA ',9,sysdate(3),sysdate(3)),
		(93,'SP',' HORTOLÂNDIA ',9,sysdate(3),sysdate(3)),
		(94,'SP',' IACANGA ',9,sysdate(3),sysdate(3)),
		(95,'SP',' IBATÉ ',9,sysdate(3),sysdate(3)),
		(96,'SP',' IBIRÁ ',9,sysdate(3),sysdate(3)),
		(97,'SP',' IBITINGA ',9,sysdate(3),sysdate(3)),
		(98,'SP',' ICÉM ',9,sysdate(3),sysdate(3)),
		(99,'SP',' IGARAÇU DO TIETÊ ',9,sysdate(3),sysdate(3)),
		(100,'SP',' IGARAPAVA ',9,sysdate(3),sysdate(3)),
		(101,'SP',' IPIGUÁ ',9,sysdate(3),sysdate(3)),
		(102,'SP',' IPUÃ ',9,sysdate(3),sysdate(3)),
		(103,'SP',' ITAJU ',9,sysdate(3),sysdate(3)),
		(104,'SP',' ITAPIRA ',9,sysdate(3),sysdate(3)),
		(105,'SP',' ITÁPOLIS ',9,sysdate(3),sysdate(3)),
		(106,'SP',' ITAPUÍ ',9,sysdate(3),sysdate(3)),
		(107,'SP',' ITATIBA ',9,sysdate(3),sysdate(3)),
		(108,'SP',' ITATINGA ',9,sysdate(3),sysdate(3)),
		(109,'SP',' ITIRAPUÃ ',9,sysdate(3),sysdate(3)),
		(110,'SP',' ITUVERAVA ',9,sysdate(3),sysdate(3)),
		(111,'SP',' JABORANDI ',9,sysdate(3),sysdate(3)),
		(112,'SP',' JABOTICABAL ',9,sysdate(3),sysdate(3)),
		(113,'SP',' JACI ',9,sysdate(3),sysdate(3)),
		(114,'SP',' JARDINÓPOLIS ',9,sysdate(3),sysdate(3)),
		(115,'SP',' JAÚ ',9,sysdate(3),sysdate(3)),
		(116,'SP',' JERIQUARA ',9,sysdate(3),sysdate(3)),
		(117,'SP',' JOSÉ BONIFÁCIO ',9,sysdate(3),sysdate(3)),
		(118,'SP',' JÚLIO MESQUITA ',9,sysdate(3),sysdate(3)),
		(119,'SP',' LENÇÓIS PAULISTA ',9,sysdate(3),sysdate(3)),
		(120,'SP',' LINDÓIA ',9,sysdate(3),sysdate(3)),
		(121,'SP',' LINS ',9,sysdate(3),sysdate(3)),
		(122,'SP',' LUCIANÓPOLIS ',9,sysdate(3),sysdate(3)),
		(123,'SP',' LUIS ANTONIO ',9,sysdate(3),sysdate(3)),
		(124,'SP',' LUISIANIA ',9,sysdate(3),sysdate(3)),
		(125,'SP',' LUPÉRCIO ',9,sysdate(3),sysdate(3)),
		(126,'SP',' MACATUBA ',9,sysdate(3),sysdate(3)),
		(127,'SP',' MARÍLIA ',9,sysdate(3),sysdate(3)),
		(128,'SP',' MATÃO ',9,sysdate(3),sysdate(3)),
		(129,'SP',' MIGUELÓPOLIS ',9,sysdate(3),sysdate(3)),
		(130,'SP',' MINEIROS DO TIETÊ ',9,sysdate(3),sysdate(3)),
		(131,'SP',' MIRASSOL ',9,sysdate(3),sysdate(3)),
		(132,'SP',' MIRASSOLÂNDIA ',9,sysdate(3),sysdate(3)),
		(133,'SP',' MOMBUCA ',9,sysdate(3),sysdate(3)),
		(134,'SP',' MONTE ALEGRE DO SUL ',9,sysdate(3),sysdate(3)),
		(135,'SP',' MONTE ALTO ',9,sysdate(3),sysdate(3)),
		(136,'SP',' MONTE APRAZÍVEL ',9,sysdate(3),sysdate(3)),
		(137,'SP',' MONTE AZUL PAULISTA ',9,sysdate(3),sysdate(3)),
		(138,'SP',' MONTE MOR ',9,sysdate(3),sysdate(3)),
		(139,'SP',' MORRO AGUDO ',9,sysdate(3),sysdate(3)),
		(140,'SP',' MORUNGABA ',9,sysdate(3),sysdate(3)),
		(141,'SP',' MOTUCA ',9,sysdate(3),sysdate(3)),
		(142,'SP',' NEVES PAULISTA ',9,sysdate(3),sysdate(3)),
		(143,'SP',' NOVA EUROPA ',9,sysdate(3),sysdate(3)),
		(144,'SP',' NOVA GRANADA ',9,sysdate(3),sysdate(3)),
		(145,'SP',' NOVA ODESSA ',9,sysdate(3),sysdate(3)),
		(146,'SP',' NUPORANGA ',9,sysdate(3),sysdate(3)),
		(147,'SP',' OCAUÇU ',9,sysdate(3),sysdate(3)),
		(148,'SP',' OLÍMPIA ',9,sysdate(3),sysdate(3)),
		(149,'SP',' ONDA VERDE ',9,sysdate(3),sysdate(3)),
		(150,'SP',' ORIENT ',9,sysdate(3),sysdate(3)),
		(151,'SP',' ORLÂNDIA ',9,sysdate(3),sysdate(3)),
		(152,'SP',' PALESTINA ',9,sysdate(3),sysdate(3)),
		(153,'SP',' PALMARES PAULISTA ',9,sysdate(3),sysdate(3)),
		(154,'SP',' PARAÍSO ',9,sysdate(3),sysdate(3)),
		(155,'SP',' PARDINHO ',9,sysdate(3),sysdate(3)),
		(156,'SP',' PATROCÍNIO PAULISTA ',9,sysdate(3),sysdate(3)),
		(157,'SP',' PAULÍNIA ',9,sysdate(3),sysdate(3)),
		(158,'SP',' PAULISTÂNIA ',9,sysdate(3),sysdate(3)),
		(159,'SP',' PEDERNEIRAS ',9,sysdate(3),sysdate(3)),
		(160,'SP',' PEDREGULHO ',9,sysdate(3),sysdate(3)),
		(161,'SP',' PENÁPOLIS ',9,sysdate(3),sysdate(3)),
		(162,'SP',' PIACATU ',9,sysdate(3),sysdate(3)),
		(163,'SP',' PINDORAMA ',9,sysdate(3),sysdate(3)),
		(164,'SP',' PIRACICABA ',9,sysdate(3),sysdate(3)),
		(165,'SP',' PIRAJUÍ ',9,sysdate(3),sysdate(3)),
		(166,'SP',' PIRANGI ',9,sysdate(3),sysdate(3)),
		(167,'SP',' PIRATININGA ',9,sysdate(3),sysdate(3)),
		(168,'SP',' PITANGUEIRAS ',9,sysdate(3),sysdate(3)),
		(169,'SP',' POLONI ',9,sysdate(3),sysdate(3)),
		(170,'SP',' POMPÉIA ',9,sysdate(3),sysdate(3)),
		(171,'SP',' PONGAÍ ',9,sysdate(3),sysdate(3)),
		(172,'SP',' PONTAL ',9,sysdate(3),sysdate(3)),
		(173,'SP',' POTINDERABA ',9,sysdate(3),sysdate(3)),
		(174,'SP',' PRADÓPOLIS ',9,sysdate(3),sysdate(3)),
		(175,'SP',' PRATÂNIA ',9,sysdate(3),sysdate(3)),
		(176,'SP',' PRESIDENTE ALVES ',9,sysdate(3),sysdate(3)),
		(177,'SP',' PROMISSÃO ',9,sysdate(3),sysdate(3)),
		(178,'SP',' QUEIRÓZ ',9,sysdate(3),sysdate(3)),
		(179,'SP',' QUINTANA ',9,sysdate(3),sysdate(3)),
		(180,'SP',' RAFARD ',9,sysdate(3),sysdate(3)),
		(181,'SP',' REGINÓPOLIS ',9,sysdate(3),sysdate(3)),
		(182,'SP',' RESTINGA ',9,sysdate(3),sysdate(3)),
		(183,'SP',' RIBEIRÃO BONITO ',9,sysdate(3),sysdate(3)),
		(184,'SP',' RIBEIRÃO CORRENTE ',9,sysdate(3),sysdate(3)),
		(185,'SP',' RIBEIRÃO PRETO ',9,sysdate(3),sysdate(3)),
		(186,'SP',' RIFAINA ',9,sysdate(3),sysdate(3)),
		(187,'SP',' RINCÃO ',9,sysdate(3),sysdate(3)),
		(188,'SP',' RIO DAS PEDRAS ',9,sysdate(3),sysdate(3)),
		(189,'SP',' RUBIACÉA ',9,sysdate(3),sysdate(3)),
		(190,'SP',' SABINO ',9,sysdate(3),sysdate(3)),
		(191,'SP',' SALES ADÉLIA ',9,sysdate(3),sysdate(3)),
		(192,'SP',' SALES OLIVEIRA ',9,sysdate(3),sysdate(3)),
		(193,'SP',' SALTINHO ',9,sysdate(3),sysdate(3)),
		(194,'SP',' SANTA BÁRBARA DvOESTE ',9,sysdate(3),sysdate(3)),
		(195,'SP',' SANTA CRUZ DA ESPERANÇA ',9,sysdate(3),sysdate(3)),
		(196,'SP',' SANTA ERNESTINA ',9,sysdate(3),sysdate(3)),
		(197,'SP',' SANTA LÚCIA ',9,sysdate(3),sysdate(3)),
		(198,'SP',' SANTA MARIA DA SERRA ',9,sysdate(3),sysdate(3)),
		(199,'SP',' SANTA ROSA DO VITERBO ',9,sysdate(3),sysdate(3)),
		(200,'SP',' SANTO ANTONIO DA ALEGRIA ',9,sysdate(3),sysdate(3)),
		(201,'SP',' SANTO ANTONIO DO ARACANGUÁ ',9,sysdate(3),sysdate(3)),
		(202,'SP',' SANTO ANTONIO DO JARDIM ',9,sysdate(3),sysdate(3)),
		(203,'SP',' SANTÓPOLIS DO AGUAPEÍ ',9,sysdate(3),sysdate(3)),
		(204,'SP',' SÃO CARLOS ',9,sysdate(3),sysdate(3)),
		(205,'SP',' SÃO JOAQUIM DA BARRA ',9,sysdate(3),sysdate(3)),
		(206,'SP',' SÃO JOSÉ DA BELA VISTA ',9,sysdate(3),sysdate(3)),
		(207,'SP',' SÃO JOSÉ DO RIO PRETO ',9,sysdate(3),sysdate(3)),
		(208,'SP',' SÃO MANUEL ',9,sysdate(3),sysdate(3)),
		(209,'SP',' SÃO PEDRO ',9,sysdate(3),sysdate(3)),
		(210,'SP',' SÃO SIMÃO ',9,sysdate(3),sysdate(3)),
		(211,'SP',' SERRA AZUL ',9,sysdate(3),sysdate(3)),
		(212,'SP',' SERRA NEGRA ',9,sysdate(3),sysdate(3)),
		(213,'SP',' SERRANA ',9,sysdate(3),sysdate(3)),
		(214,'SP',' SERTÃOZINHO ',9,sysdate(3),sysdate(3)),
		(215,'SP',' SEVERINA ',9,sysdate(3),sysdate(3)),
		(216,'SP',' SOCORRO ',9,sysdate(3),sysdate(3)),
		(217,'SP',' SUMARÉ ',9,sysdate(3),sysdate(3)),
		(218,'SP',' TABATINGA ',9,sysdate(3),sysdate(3)),
		(219,'SP',' TAIAÇU ',9,sysdate(3),sysdate(3)),
		(220,'SP',' TAIÚVA ',9,sysdate(3),sysdate(3)),
		(221,'SP',' TANABI ',9,sysdate(3),sysdate(3)),
		(222,'SP',' TAQUARAL ',9,sysdate(3),sysdate(3)),
		(223,'SP',' TAQUARITINGA ',9,sysdate(3),sysdate(3)),
		(224,'SP',' TERRA ROXA ',9,sysdate(3),sysdate(3)),
		(225,'SP',' TORRINHA ',9,sysdate(3),sysdate(3)),
		(226,'SP',' TRABIJU ',9,sysdate(3),sysdate(3)),
		(227,'SP',' UBARANA ',9,sysdate(3),sysdate(3)),
		(228,'SP',' UCHOA ',9,sysdate(3),sysdate(3)),
		(229,'SP',' URU ',9,sysdate(3),sysdate(3)),
		(230,'SP',' VALINHOS ',9,sysdate(3),sysdate(3)),
		(231,'SP',' VALPARAÍSO ',9,sysdate(3),sysdate(3)),
		(232,'SP',' VERA CRUZ ',9,sysdate(3),sysdate(3)),
		(233,'SP',' VIRADOURO ',9,sysdate(3),sysdate(3)),
		(234,'SP',' VISTA ALEGRE DO ALTO',9,sysdate(3),sysdate(3)),
		(235,'SP','ALUMÍNIO',10,sysdate(3),sysdate(3)),
		(236,'SP','ARAÇARIGUAMA',10,sysdate(3),sysdate(3)),
		(237,'SP','ARAÇOIABA DA SERRA',10,sysdate(3),sysdate(3)),
		(238,'SP','BOITUVA',10,sysdate(3),sysdate(3)),
		(239,'SP','CAMPO LIMPO PAULISTA',10,sysdate(3),sysdate(3)),
		(240,'SP','CAPELA DO ALTO',10,sysdate(3),sysdate(3)),
		(241,'SP','CUBATÃO',10,sysdate(3),sysdate(3)),
		(242,'SP','GUARUJÁ (Vicente de Carvalho)',10,sysdate(3),sysdate(3)),
		(243,'SP','IBIÚNA',10,sysdate(3),sysdate(3)),
		(244,'SP','INDAIATUBA',10,sysdate(3),sysdate(3)),
		(245,'SP','IPERÓ',10,sysdate(3),sysdate(3)),
		(246,'SP','ITU',10,sysdate(3),sysdate(3)),
		(247,'SP','ITUPEVA',10,sysdate(3),sysdate(3)),
		(248,'SP','JUNDIAÍ',10,sysdate(3),sysdate(3)),
		(249,'SP','LOUVEIRA',10,sysdate(3),sysdate(3)),
		(250,'SP','MAIRINQUE',10,sysdate(3),sysdate(3)),
		(251,'SP','PORTO FELIZ',10,sysdate(3),sysdate(3)),
		(252,'SP','PRAIA GRANDE',10,sysdate(3),sysdate(3)),
		(253,'SP','SALTO',10,sysdate(3),sysdate(3)),
		(254,'SP','SALTO DE PIRAPORA',10,sysdate(3),sysdate(3)),
		(255,'SP','SANTOS',10,sysdate(3),sysdate(3)),
		(256,'SP','SÃO ROQUE',10,sysdate(3),sysdate(3)),
		(257,'SP','SÃO VICENTE',10,sysdate(3),sysdate(3)),
		(258,'SP','SOROCABA',10,sysdate(3),sysdate(3)),
		(259,'SP','VÁRZEA PAULISTA',10,sysdate(3),sysdate(3)),
		(260,'SP','VINHEDO',10,sysdate(3),sysdate(3)),
		(261,'SP','VOTORANTIM',10,sysdate(3),sysdate(3)),
		(262,'SP','ÁGUAS DE SANTA BÁRBARA',11,sysdate(3),sysdate(3)),
		(263,'SP','ARANDU',11,sysdate(3),sysdate(3)),
		(264,'SP','AVARÉ',11,sysdate(3),sysdate(3)),
		(265,'SP','BERNARDINO DE CAMPOS',11,sysdate(3),sysdate(3)),
		(266,'SP','CANITAR',11,sysdate(3),sysdate(3)),
		(267,'SP','CERQUEIRA CÉSAR',11,sysdate(3),sysdate(3)),
		(268,'SP','CHAVANTES',11,sysdate(3),sysdate(3)),
		(269,'SP','ESPÍRITO SANTO DO TURVO',11,sysdate(3),sysdate(3)),
		(270,'SP','IARAS',11,sysdate(3),sysdate(3)),
		(271,'SP','IPAUÇU',11,sysdate(3),sysdate(3)),
		(272,'SP','ITAÍ',11,sysdate(3),sysdate(3)),
		(273,'SP','MANDURI',11,sysdate(3),sysdate(3)),
		(274,'SP','ÓLEO',11,sysdate(3),sysdate(3)),
		(275,'SP','OURINHOS',11,sysdate(3),sysdate(3)),
		(276,'SP','PARANAPANEMA',11,sysdate(3),sysdate(3)),
		(277,'SP','PIRAJU',11,sysdate(3),sysdate(3)),
		(278,'SP','SANTA CRUZ DO RIO PARDO',11,sysdate(3),sysdate(3)),
		(279,'SP','SÃO PEDRO DO TURVO',11,sysdate(3),sysdate(3)),
		(280,'SP','SARUTAIÁ',11,sysdate(3),sysdate(3)),
		(281,'SP','TAGUAÍ',11,sysdate(3),sysdate(3)),
		(282,'SP','TAQUARITUBA',11,sysdate(3),sysdate(3)),
		(283,'SP','TEJUPÁ',11,sysdate(3),sysdate(3)),
		(284,'SP','TIMBURI',11,sysdate(3),sysdate(3)),
		(285,'SP','UBIRAJARA',11,sysdate(3),sysdate(3));

