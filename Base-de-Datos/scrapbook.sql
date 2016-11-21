-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2016 at 04:56 AM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scrapbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`Mail`, `Nombre`, `Contrasenia`) VALUES
('admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Rol` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Confirmacion_mail` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Confirmacion_administrador` varchar(2) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'NO',
  `Tipo_aprendizaje` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `campus` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `carrera` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `acepta_encuesta?` tinyint(1) NOT NULL,
  `image` varchar(300) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png',
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `alumno`
--

INSERT INTO `alumno` (`Mail`, `Nombre`, `Rol`, `Contrasenia`, `Confirmacion_mail`, `Confirmacion_administrador`, `Tipo_aprendizaje`, `campus`, `carrera`, `acepta_encuesta?`, `image`) VALUES
('1', '1', '1', '1', '0', '0', '2', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('123', '123', '123', '123', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('a', 'a', 'a', 'a', '0', '0', '1', 'San Joaquin', 'Informatica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('adsf', 'asdf', 'adsf', 'adsf', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('afdhff', 'hdgfd', 'adfhf', 'dfh', '0', '0', '0', 'San Joaquin', 'Informatica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('asd', 'asd', 'asd', 'asd', '0', '0', '3', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('asdf', 'adsf', 'adsf', 'adsf', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('bn', 'bn', 'bn', 'bn', '0', '0', '3', 'San Joaquin', 'Mecanica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('cvb', 'cvb', 'cvb', 'cvb', '0', '0', '3', 'San Joaquin', 'Mecanica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('cxz', 'cxz', 'cxz', 'cxz', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('dfgh', 'dsfg', 'dgh', 'dgh', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('er', 'he', 'we', 'qw', '0', '0', '3', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('ert', 'yret', 'ertr', 'ert', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('ewq', 'ewq', 'ewq', 'ewq', '0', '0', '3', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('fag', 'afd', 'adf', 'adsf', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('fefe', 'fefe', 'fefe', 'fefe', '0', '0', '3', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('felipe.monsalve.14@sansano.usm.cl', 'Felipe', '123123', '123123', '0', '0', '3', 'Casa Central', 'Informatica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('fghg', 'bvngx', 'fgh', 'gfh', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('gggggggg', 'ggggggg', 'gggggg', 'ggggggg', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('ghj', 'ghj', 'ghj', 'ghj', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('jorge.aliste.14@sansano.usm.cl', 'jorge', '2014735383', 'asd', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('nnnn', 'nnnn', 'nnn', 'nnn', '0', '0', '3', 'San Joaquin', 'Mecanica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('oiu', 'iu', 'oiu', 'oiu', '0', '0', '0', 'San Joaquin', 'Informatica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('qwe', 'qwe', 'qwe', 'qwe', '0', '0', '0', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('rty', 'try', 'rty', 'rty', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('sfdg', 'afsg', 'dfg', 'dfg', '0', '0', '3', 'Casa Central', 'Mecanica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('wer', 're', 'wer', 'wer', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('zxc', 'zxc', 'zxc', 'zxc', '0', '0', '0', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png');

-- --------------------------------------------------------

--
-- Table structure for table `bloque`
--

DROP TABLE IF EXISTS `bloque`;
CREATE TABLE IF NOT EXISTS `bloque` (
  `Id` int(5) NOT NULL,
  `TipoBloque` varchar(255) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Representa el tipo de bloque: ejemplo, demostracion, teoria, ejercicio, video, ecuacion',
  `Titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `CodigoHtml` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Se usa para: ejemplos',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contenido`
--

DROP TABLE IF EXISTS `contenido`;
CREATE TABLE IF NOT EXISTS `contenido` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `Unidad` int(11) NOT NULL,
  `SubUnidad` int(11) NOT NULL,
  `Uno` int(11) NOT NULL,
  `Dos` int(11) NOT NULL,
  `Tres` int(11) NOT NULL,
  `Cuatro` int(11) NOT NULL,
  `Tipo` int(11) NOT NULL COMMENT 'Texto=0 Imagen o video=1',
  `Titulo` varchar(100) DEFAULT NULL,
  `Contenido` varchar(10000) NOT NULL,
  KEY `Codigo` (`Codigo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contenido`
--

INSERT INTO `contenido` (`Codigo`, `Unidad`, `SubUnidad`, `Uno`, `Dos`, `Tres`, `Cuatro`, `Tipo`, `Titulo`, `Contenido`) VALUES
(1, 1, 1, 1, 0, 1, 0, 0, 'a', '<h3>aaa</h3>'),
(2, 1, 1, 0, 1, 0, 0, 0, 'b', '<iframe width="560" height="315" src="https://www.youtube.com/embed/L8bfysXDH7Y" frameborder="0" allowfullscreen></iframe>'),
(3, 1, 1, 1, 0, 1, 0, 0, 'c', '<h3>cccc</h3>'),
(4, 1, 1, 1, 0, 1, 1, 0, 'd', '<h3>ddd</h3>'),
(5, 1, 1, 1, 0, 0, 0, 0, 'e', '<h3>eee</h3>');

-- --------------------------------------------------------

--
-- Table structure for table `contenidoguardado`
--

DROP TABLE IF EXISTS `contenidoguardado`;
CREATE TABLE IF NOT EXISTS `contenidoguardado` (
  `Id` int(5) NOT NULL,
  `nombreArchivo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `TipoContenidoGuardado` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Puede ser: imagen, ilustracion',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `nombreArchivo` (`nombreArchivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contenidoguardado_bloque`
--

DROP TABLE IF EXISTS `contenidoguardado_bloque`;
CREATE TABLE IF NOT EXISTS `contenidoguardado_bloque` (
  `ContenidoGuardadoId` int(5) NOT NULL,
  `BloqueId` int(5) NOT NULL,
  PRIMARY KEY (`ContenidoGuardadoId`,`BloqueId`),
  KEY `FKContenidoG687510` (`ContenidoGuardadoId`),
  KEY `FKContenidoG848128` (`BloqueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedbackpagina`
--

DROP TABLE IF EXISTS `feedbackpagina`;
CREATE TABLE IF NOT EXISTS `feedbackpagina` (
  `Fecha` datetime NOT NULL,
  `AlumnoMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `PaginaUrl` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(10) DEFAULT NULL,
  `Comentario` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`Fecha`),
  KEY `FKFeedbackPa730089` (`AlumnoMail`),
  KEY `FKFeedbackPa134246` (`PaginaUrl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pagina`
--

DROP TABLE IF EXISTS `pagina`;
CREATE TABLE IF NOT EXISTS `pagina` (
  `Url` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `ProfesorMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Url`),
  KEY `FKPagina56403` (`ProfesorMail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
CREATE TABLE IF NOT EXISTS `pregunta` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `Enunciado` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa1` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa2` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa3` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa4` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `pregunta`
--

INSERT INTO `pregunta` (`Id`, `Enunciado`, `Alternativa1`, `Alternativa2`, `Alternativa3`, `Alternativa4`) VALUES
(1, 'Cuando aprendo...', 'me gusta vivir sensaciones', 'me gusta pensar sobre ideas', 'me gusta estar haciendo cosas', 'me gusta observar y escuchar'),
(2, 'Aprendo mejor cuando...', 'escucho y observo cuidadosamente', 'confió en el pensamiento lógico', 'confió en mi intuición y sentimientos', 'trabajo duro para lograr hacer las cosas'),
(3, 'Cuando estoy aprendiendo....', 'tiendo a usar el razonamiento', 'soy responsable con lo que hago', 'soy callado y reservado', 'tengo fuertes sensaciones y reacciones'),
(4, 'Yo aprendo...', 'sintiendo', 'haciendo', 'observando', 'pensando'),
(5, 'Cuando aprendo...', 'estoy abierto a nuevas experiencias', 'observo todos los aspectos del asunto', 'me gusta analizar las cosas, descomponerlas en sus partes', 'me gusta probar o intentar hacer las cosas'),
(6, 'Cuando estoy aprendiendo...', 'soy una persona observadora', 'soy una persona activa', 'soy una persona intuitiva', 'soy una persona lógica'),
(7, 'Yo aprendo mejor de', 'la observación', 'la relación con otras personas', 'las teorías racionales', 'la oportunidad de probar y practicar'),
(8, 'Cuando aprendo...', 'me gusta ver los resultados de mi trabajo', 'me gustan las ideas y las teorías', 'me tomo mi tiempo antes de actuar', 'me siento personalmente involucrado en las cosas'),
(9, 'Aprendo mejor cuando...', 'confío en mis observaciones', 'confío en mis sentimientos', 'puedo probar por mi cuenta', 'confío en mis ideas'),
(10, 'Cuando estoy aprendiendo...', 'soy una persona reservada', 'soy una persona receptiva', 'soy una persona responsable', 'soy una persona racional'),
(11, 'Cuando aprendo...', 'me involucro', 'me gusta observar', 'evalúo las cosas', 'me gusta ser activo'),
(12, 'Aprendo mejor cuando...', 'analizo ideas', 'soy receptivo y abierto', 'soy cuidadoso', 'soy práctico');

-- --------------------------------------------------------

--
-- Table structure for table `pregunta_alumno`
--

DROP TABLE IF EXISTS `pregunta_alumno`;
CREATE TABLE IF NOT EXISTS `pregunta_alumno` (
  `PreguntaId` int(5) NOT NULL,
  `AlumnoMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Respuesta_alt1` int(1) NOT NULL,
  `Respuesta_alt2` int(1) NOT NULL,
  `Respuesta_alt3` int(1) NOT NULL,
  `Respuesta_alt4` int(1) NOT NULL,
  PRIMARY KEY (`PreguntaId`,`AlumnoMail`),
  KEY `FKPregunta_A98795` (`AlumnoMail`),
  KEY `PreguntaId` (`PreguntaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
CREATE TABLE IF NOT EXISTS `profesor` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`Mail`, `Nombre`, `Contrasenia`) VALUES
('b', 'b', 'b'),
('e', 'e', 'e'),
('t', 't', 't');

-- --------------------------------------------------------

--
-- Table structure for table `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
CREATE TABLE IF NOT EXISTS `ubicacion` (
  `PaginaUrl` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `BloqueId` int(5) NOT NULL,
  `Ubicacion` int(3) NOT NULL,
  PRIMARY KEY (`PaginaUrl`,`BloqueId`),
  KEY `FKUbicacion691986` (`PaginaUrl`),
  KEY `FKUbicacion547860` (`BloqueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unidades`
--

DROP TABLE IF EXISTS `unidades`;
CREATE TABLE IF NOT EXISTS `unidades` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `Unidad` int(11) NOT NULL,
  `SubUnidad` int(11) NOT NULL,
  `Titulo` varchar(1000) NOT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unidades`
--

INSERT INTO `unidades` (`Codigo`, `Unidad`, `SubUnidad`, `Titulo`) VALUES
(1, 1, 0, 'Your Momma'),
(2, 1, 1, 'Ley de Coulomb'),
(3, 1, 2, 'Campo Eléctrico'),
(4, 2, 0, 'adsf'),
(5, 2, 1, 'www'),
(6, 3, 0, '41'),
(7, 4, 0, 'dsf'),
(8, 5, 0, 'ywy');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contenidoguardado_bloque`
--
ALTER TABLE `contenidoguardado_bloque`
  ADD CONSTRAINT `FKContenidoG687510` FOREIGN KEY (`ContenidoGuardadoId`) REFERENCES `contenidoguardado` (`Id`),
  ADD CONSTRAINT `FKContenidoG848128` FOREIGN KEY (`BloqueId`) REFERENCES `bloque` (`Id`);

--
-- Constraints for table `feedbackpagina`
--
ALTER TABLE `feedbackpagina`
  ADD CONSTRAINT `FKFeedbackPa134246` FOREIGN KEY (`PaginaUrl`) REFERENCES `pagina` (`Url`),
  ADD CONSTRAINT `FKFeedbackPa730089` FOREIGN KEY (`AlumnoMail`) REFERENCES `alumno` (`Mail`);

--
-- Constraints for table `pagina`
--
ALTER TABLE `pagina`
  ADD CONSTRAINT `FKPagina56403` FOREIGN KEY (`ProfesorMail`) REFERENCES `profesor` (`Mail`);

--
-- Constraints for table `pregunta_alumno`
--
ALTER TABLE `pregunta_alumno`
  ADD CONSTRAINT `FKPregunta_A24191` FOREIGN KEY (`PreguntaId`) REFERENCES `pregunta` (`Id`),
  ADD CONSTRAINT `FKPregunta_A98795` FOREIGN KEY (`AlumnoMail`) REFERENCES `alumno` (`Mail`);

--
-- Constraints for table `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD CONSTRAINT `FKUbicacion547860` FOREIGN KEY (`BloqueId`) REFERENCES `bloque` (`Id`),
  ADD CONSTRAINT `FKUbicacion691986` FOREIGN KEY (`PaginaUrl`) REFERENCES `pagina` (`Url`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
