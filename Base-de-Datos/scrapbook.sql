-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2016 a las 17:54:53
-- Versión del servidor: 5.7.9
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scrapbook`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
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
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloque`
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
-- Estructura de tabla para la tabla `contenidoguardado`
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
-- Estructura de tabla para la tabla `contenidoguardado_bloque`
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
-- Estructura de tabla para la tabla `feedbackpagina`
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
-- Estructura de tabla para la tabla `pagina`
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
-- Estructura de tabla para la tabla `pregunta`
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
-- Volcado de datos para la tabla `pregunta`
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
-- Estructura de tabla para la tabla `pregunta_alumno`
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
-- Estructura de tabla para la tabla `profesor`
--

DROP TABLE IF EXISTS `profesor`;
CREATE TABLE IF NOT EXISTS `profesor` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
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

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contenidoguardado_bloque`
--
ALTER TABLE `contenidoguardado_bloque`
  ADD CONSTRAINT `FKContenidoG687510` FOREIGN KEY (`ContenidoGuardadoId`) REFERENCES `contenidoguardado` (`Id`),
  ADD CONSTRAINT `FKContenidoG848128` FOREIGN KEY (`BloqueId`) REFERENCES `bloque` (`Id`);

--
-- Filtros para la tabla `feedbackpagina`
--
ALTER TABLE `feedbackpagina`
  ADD CONSTRAINT `FKFeedbackPa134246` FOREIGN KEY (`PaginaUrl`) REFERENCES `pagina` (`Url`),
  ADD CONSTRAINT `FKFeedbackPa730089` FOREIGN KEY (`AlumnoMail`) REFERENCES `alumno` (`Mail`);

--
-- Filtros para la tabla `pagina`
--
ALTER TABLE `pagina`
  ADD CONSTRAINT `FKPagina56403` FOREIGN KEY (`ProfesorMail`) REFERENCES `profesor` (`Mail`);

--
-- Filtros para la tabla `pregunta_alumno`
--
ALTER TABLE `pregunta_alumno`
  ADD CONSTRAINT `FKPregunta_A24191` FOREIGN KEY (`PreguntaId`) REFERENCES `pregunta` (`Id`),
  ADD CONSTRAINT `FKPregunta_A98795` FOREIGN KEY (`AlumnoMail`) REFERENCES `alumno` (`Mail`);

--
-- Filtros para la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD CONSTRAINT `FKUbicacion547860` FOREIGN KEY (`BloqueId`) REFERENCES `bloque` (`Id`),
  ADD CONSTRAINT `FKUbicacion691986` FOREIGN KEY (`PaginaUrl`) REFERENCES `pagina` (`Url`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
