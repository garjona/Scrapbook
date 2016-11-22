-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2016 a las 01:47:05
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.24

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

CREATE TABLE `administrador` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`Mail`, `Nombre`, `Contrasenia`) VALUES
('admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
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
  `image` varchar(300) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`Mail`, `Nombre`, `Rol`, `Contrasenia`, `Confirmacion_mail`, `Confirmacion_administrador`, `Tipo_aprendizaje`, `campus`, `carrera`, `acepta_encuesta?`, `image`) VALUES
('alumno', 'Alumno', '201473502-3', '1', NULL, 'NO', '1', 'San Joaquin', 'Informática', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('felipe.monsalve.14@sansano.usm.cl', 'Felipe', '123123', '1', '0', '0', '3', 'Casa Central', 'Informatica', 0, 'http://img03.deviantart.net/6fc1/i/2013/209/1/7/life_is_the_greatest_journey_you_will_ever_be_on__by_kemipo-d6f1jh7.jpg'),
('gabriel.arjona.14@sansano.usm.cl', 'Gabriel', '2014735234', '1', NULL, 'NO', '4', 'San Joaquin', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png'),
('jorge.aliste.14@sansano.usm.cl', 'Jorge', '2014735383', '1', '0', '0', '2', 'Casa Central', 'Electrica', 0, 'http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloque`
--

CREATE TABLE `bloque` (
  `Id` int(5) NOT NULL,
  `TipoBloque` varchar(255) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Representa el tipo de bloque: ejemplo, demostracion, teoria, ejercicio, video, ecuacion',
  `Titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `CodigoHtml` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Se usa para: ejemplos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `Codigo` int(11) NOT NULL,
  `Unidad` int(11) NOT NULL,
  `SubUnidad` int(11) NOT NULL,
  `Uno` int(11) NOT NULL,
  `Dos` int(11) NOT NULL,
  `Tres` int(11) NOT NULL,
  `Cuatro` int(11) NOT NULL,
  `Tipo` int(11) NOT NULL COMMENT 'Texto=0 Imagen o video=1',
  `Titulo` varchar(100) DEFAULT NULL,
  `Contenido` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`Codigo`, `Unidad`, `SubUnidad`, `Uno`, `Dos`, `Tres`, `Cuatro`, `Tipo`, `Titulo`, `Contenido`) VALUES
(7, 1, 0, 1, 0, 0, 1, 0, 'Adaptador y Asimilador', 'La carga eléctrica es una propiedad física intrínseca de algunas partículas subatómicas que se manifiesta mediante fuerzas de atracción y repulsión entre ellas por la mediación de campos electromagnéticos.'),
(8, 1, 0, 0, 1, 0, 0, 0, 'Divergente', 'Una de las principales características de la carga eléctrica es que, en cualquier proceso físico, la carga total de un sistema aislado siempre se conserva. Es decir, la suma algebraica de las cargas positivas y negativas no varía en el tiempo.'),
(9, 1, 0, 1, 1, 1, 1, 0, 'Todos', 'En 1600 el médico inglés William Gilbert observó que algunos materiales se comportan como el ámbar al frotarlos y que la atracción que ejercen se manifiesta sobre cualquier cuerpo, aun cuando no fuera ligero. Como el nombre griego correspondiente al ámbar es ???????? (?lektron), Gilbert comenzó a utilizar el término eléctrico para referirse a todo material que se comportaba como aquél, lo que originó los términos electricidad y carga eléctrica. Además, en los estudios de Gilbert se puede encontrar la diferenciación de los fenómenos eléctricos y magnéticos.'),
(11, 1, 0, 0, 0, 1, 0, 0, 'Convergente', '<iframe width="300" height="300" src="https://www.youtube.com/embed/McZPm7tkguQ" frameborder="0" allowfullscreen></iframe>'),
(12, 1, 1, 1, 0, 1, 0, 0, 'Adaptador y Convergente', 'La Ley de Coulomb dice que "la fuerza electrostática entre dos cargas puntuales es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa, y tiene la dirección de la línea que las une.'),
(13, 1, 1, 0, 0, 0, 1, 0, 'Asimilador', 'La constante de proporcionalidad depende de la constante dieléctrica del medio en el que se encuentran las cargas.\r\nSe nombra en reconocimiento del físico francés Charles-Augustin de Coulomb (1736-1806), que la enunció en 1785 y forma la base de la electroestática.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidoguardado`
--

CREATE TABLE `contenidoguardado` (
  `Id` int(5) NOT NULL,
  `nombreArchivo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `TipoContenidoGuardado` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'Puede ser: imagen, ilustracion'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidoguardado_bloque`
--

CREATE TABLE `contenidoguardado_bloque` (
  `ContenidoGuardadoId` int(5) NOT NULL,
  `BloqueId` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedbackpagina`
--

CREATE TABLE `feedbackpagina` (
  `Fecha` datetime NOT NULL,
  `AlumnoMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `PaginaUrl` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(10) DEFAULT NULL,
  `Comentario` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagina`
--

CREATE TABLE `pagina` (
  `Url` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `ProfesorMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `Id` int(5) NOT NULL,
  `Enunciado` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa1` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa2` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa3` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Alternativa4` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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

CREATE TABLE `pregunta_alumno` (
  `PreguntaId` int(5) NOT NULL,
  `AlumnoMail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Respuesta_alt1` int(1) NOT NULL,
  `Respuesta_alt2` int(1) NOT NULL,
  `Respuesta_alt3` int(1) NOT NULL,
  `Respuesta_alt4` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `Mail` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenia` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`Mail`, `Nombre`, `Contrasenia`) VALUES
('profesor', 'Maximiliano', '1'),
('profesor2', 'Gastón', '1'),
('profesor3', 'Diego', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `PaginaUrl` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `BloqueId` int(5) NOT NULL,
  `Ubicacion` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades`
--

CREATE TABLE `unidades` (
  `Codigo` int(11) NOT NULL,
  `Unidad` int(11) NOT NULL,
  `SubUnidad` int(11) NOT NULL,
  `Titulo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `unidades`
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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`Mail`);

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`Mail`);

--
-- Indices de la tabla `bloque`
--
ALTER TABLE `bloque`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD KEY `Codigo` (`Codigo`) USING BTREE;

--
-- Indices de la tabla `contenidoguardado`
--
ALTER TABLE `contenidoguardado`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `nombreArchivo` (`nombreArchivo`);

--
-- Indices de la tabla `contenidoguardado_bloque`
--
ALTER TABLE `contenidoguardado_bloque`
  ADD PRIMARY KEY (`ContenidoGuardadoId`,`BloqueId`),
  ADD KEY `FKContenidoG687510` (`ContenidoGuardadoId`),
  ADD KEY `FKContenidoG848128` (`BloqueId`);

--
-- Indices de la tabla `feedbackpagina`
--
ALTER TABLE `feedbackpagina`
  ADD PRIMARY KEY (`Fecha`),
  ADD KEY `FKFeedbackPa730089` (`AlumnoMail`),
  ADD KEY `FKFeedbackPa134246` (`PaginaUrl`);

--
-- Indices de la tabla `pagina`
--
ALTER TABLE `pagina`
  ADD PRIMARY KEY (`Url`),
  ADD KEY `FKPagina56403` (`ProfesorMail`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `pregunta_alumno`
--
ALTER TABLE `pregunta_alumno`
  ADD PRIMARY KEY (`PreguntaId`,`AlumnoMail`),
  ADD KEY `FKPregunta_A98795` (`AlumnoMail`),
  ADD KEY `PreguntaId` (`PreguntaId`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`Mail`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`PaginaUrl`,`BloqueId`),
  ADD KEY `FKUbicacion691986` (`PaginaUrl`),
  ADD KEY `FKUbicacion547860` (`BloqueId`);

--
-- Indices de la tabla `unidades`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`Codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `Codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `unidades`
--
ALTER TABLE `unidades`
  MODIFY `Codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
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
