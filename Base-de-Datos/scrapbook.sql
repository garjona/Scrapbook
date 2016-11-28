-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2016 at 03:11 AM
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
('alumno', 'Alumno', '201473502-3', '1', NULL, 'NO', '1', 'San Joaquin', 'Informática', 0, 'http://www.mastermagazine.info/termino/wp-content/uploads/Usuario-Icono.jpg'),
('felipe.monsalve.14@sansano.usm.cl', 'Felipe', '123123', '1', '0', '0', '3', 'Casa Central', 'Informatica', 0, 'http://img03.deviantart.net/6fc1/i/2013/209/1/7/life_is_the_greatest_journey_you_will_ever_be_on__by_kemipo-d6f1jh7.jpg'),
('francisco@gmail.com', 'Francisco', '12345', 'aaaa', '0', '0', '0', 'San Joaquin', 'Informatica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('gabriel.arjona.14@sansano.usm.cl', 'Gabriel', '2014735234', '1', NULL, 'NO', '4', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('j.alistea@gmail.com', 'Francisco', '12341', 'a', '0', '0', '3', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('jorge.aliste.14@sansano.usm.cl', 'Jorge', '2014735383', '1', '0', '0', '2', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png');

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
  PRIMARY KEY (`Codigo`),
  KEY `Codigo` (`Codigo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contenido`
--

INSERT INTO `contenido` (`Codigo`, `Unidad`, `SubUnidad`, `Uno`, `Dos`, `Tres`, `Cuatro`, `Tipo`, `Titulo`, `Contenido`) VALUES
(7, 1, 0, 1, 0, 0, 1, 0, 'Adaptador y Asimilador', 'La carga eléctrica es una propiedad física intrínseca de algunas partículas subatómicas que se manifiesta mediante fuerzas de atracción y repulsión entre ellas por la mediación de campos electromagnéticos.'),
(8, 1, 0, 0, 1, 0, 0, 0, 'Divergente', 'Una de las principales características de la carga eléctrica es que, en cualquier proceso físico, la carga total de un sistema aislado siempre se conserva. Es decir, la suma algebraica de las cargas positivas y negativas no varía en el tiempo.'),
(9, 1, 0, 1, 1, 1, 1, 0, 'Todos', 'En 1600 el médico inglés William Gilbert observó que algunos materiales se comportan como el ámbar al frotarlos y que la atracción que ejercen se manifiesta sobre cualquier cuerpo, aun cuando no fuera ligero. Como el nombre griego correspondiente al ámbar es ???????? (?lektron), Gilbert comenzó a utilizar el término eléctrico para referirse a todo material que se comportaba como aquél, lo que originó los términos electricidad y carga eléctrica. Además, en los estudios de Gilbert se puede encontrar la diferenciación de los fenómenos eléctricos y magnéticos.'),
(11, 1, 0, 0, 0, 1, 0, 0, 'Convergente', '<iframe width="300" height="300" src="https://www.youtube.com/embed/McZPm7tkguQ" frameborder="0" allowfullscreen></iframe>'),
(12, 1, 1, 1, 0, 1, 0, 0, 'Adaptador y Convergente', 'La Ley de Coulomb dice que "la fuerza electrostática entre dos cargas puntuales es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa, y tiene la dirección de la línea que las une.'),
(13, 1, 1, 0, 0, 0, 1, 0, 'Asimilador', 'La constante de proporcionalidad depende de la constante dieléctrica del medio en el que se encuentran las cargas.\r\nSe nombra en reconocimiento del físico francés Charles-Augustin de Coulomb (1736-1806), que la enunció en 1785 y forma la base de la electroestática.'),
(14, 4, 2, 0, 1, 0, 0, 0, 'Fem inducida', 'contenido'),
(15, 1, 0, 0, 1, 1, 0, 0, 'Divergente y Convergente', 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam'),
(16, 1, 1, 0, 0, 1, 1, 0, 'Asimilador y Convergente', 'La ley de Coulomb. Mediante una balanza de torsión, Coulomb encontró que la fuerza de atracción o repulsión entre dos cargas puntuales (cuerpos cargados cuyas dimensiones son despreciables comparadas con la distancia r que las separa) es inversamente proporcional al cuadrado de la distancia que las separa.'),
(20, 1, 0, 1, 0, 0, 0, 0, 'Adaptador', 'Lucas has stated that the opening crawl was inspired by the opening crawls used at the beginning of each episode of the original Flash Gordon and Buck Rogers film serials, which were the inspiration for Lucas to write much of the Star Wars saga.'),
(21, 1, 1, 1, 1, 0, 0, 0, 'Adaptador y Divergente', '"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.   Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…."'),
(22, 1, 0, 0, 0, 1, 0, 0, 'Convergente', '"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.   Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…."'),
(23, 1, 0, 1, 0, 0, 0, 0, 'Adaptador', 'Trivia: Film director Brian De Palma convinced George Lucas to shorten the original text he had drafted. Trivia 2: When Star Wars was first released in 1977 the crawl did not feature the text "A New Hope" that came later after the film was a success.'),
(24, 1, 0, 1, 1, 1, 1, 0, 'Todos', '<iframe width="300" height="315" src="https://www.youtube.com/embed/Wiu2zznG4sM" frameborder="0" allowfullscreen></iframe>'),
(26, 1, 0, 1, 1, 1, 1, 0, 'Todos', '<img src="http://33.media.tumblr.com/fa04b925aaca3af485b760cf5f95bafe/tumblr_mvnvperkFp1s5ou3xo4_250.gif" alt="HTML5 Icon" style="width:245px;height:163px;">'),
(27, 1, 0, 1, 1, 1, 1, 0, 'Todos', '<iframe src="https://drive.google.com/file/d/0B9t7rqsvFgSuSzU4Y2V5TzNqU0U/preview" width="400" height="300"></iframe>'),
(28, 1, 0, 1, 1, 0, 0, 0, 'Prueba', 'Prueba');

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
  `Fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `AlumnoMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `PaginaUrl` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Titulo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Comentario` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`Fecha`),
  KEY `FKFeedbackPa730089` (`AlumnoMail`),
  KEY `FKFeedbackPa134246` (`PaginaUrl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `feedbackpagina`
--

INSERT INTO `feedbackpagina` (`Fecha`, `AlumnoMail`, `PaginaUrl`, `Titulo`, `Comentario`) VALUES
('2016-11-22 02:02:32', 'alumno', NULL, 'Muy bien', 'Buen trabajo'),
('2016-11-22 02:45:34', 'alumno', NULL, 'Excelente', 'Hola'),
('2016-11-22 02:51:15', 'alumno', NULL, 'Un titulo', 'Un comentario'),
('2016-11-22 11:03:30', 'alumno', NULL, 'Felicitaciones', 'Excelente diseño e implementación de la página'),
('2016-11-22 11:16:51', 'alumno', NULL, 'Prueba', 'Prueba2'),
('2016-11-22 16:08:46', 'alumno', NULL, 'Feedback', 'Buen trabajo!');

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
('juan@juan', 'Juan', '12'),
('profesor3', 'Diego', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unidades`
--

INSERT INTO `unidades` (`Codigo`, `Unidad`, `SubUnidad`, `Titulo`) VALUES
(1, 1, 0, 'Carga Eléctrica'),
(2, 1, 1, 'Ley de Coulomb'),
(3, 1, 2, 'Campo Eléctrico'),
(4, 1, 3, 'Ley de Gauss'),
(5, 2, 1, 'Potencial eléctrico'),
(6, 2, 2, 'Condensadores y dieléctricos'),
(7, 3, 1, 'Conducción eléctrica'),
(8, 5, 0, 'Inducción electromagnética'),
(9, 4, 2, 'Campo magnético: efectos, origen');

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
