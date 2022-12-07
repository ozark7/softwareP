INSERT INTO administradores(cedula, nombreUsuario, passwd, nombre, apellido) VALUES
('1234','pabloGuerra','passwd','Pablo','Guerra');

INSERT INTO facultades VALUES
('ACE','Administrativas, Contables y Económicas'),
('DCPS','Derecho, Ciencias Políticas y Sociales'),
('IT','Ingenierías Tecnológicas'),
('BA','Bellas Artes'),
('CBE','Ciencias Básicas y de la Educación'),
('CS','Ciencias de la Salud');

INSERT INTO docentes(cedula, nombreUsuario, passwd, nombre, apellido, idFacultad) VALUES
('6780','marioLopez','passwd','Mario','Lopez','IT'),
('4358','carlorDaza','passwd','Carlos','Daza','CS'),
('2418','diegoGill','passwd','Diego','Gill','ACE');

INSERT INTO publicaciones(tituloPublicacion, autor, descripcionPub, urlPublicacion, idDocente) VALUES
('100 años de soledad','Gabriel Garcia Marquez','Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.','http://www.secst.cl/upfiles/documentos/19072016_1207am_578dc39115fe9.pdf','2418');

select * from facultades;
select * from docentes;
select * from publicaciones;

##delete from docentes where cedula='4321'; 
##delete from facultades where CodigoFacultad='IT'; 