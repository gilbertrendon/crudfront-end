
--Para acceder a la base de datos
--http://localhost:8085/h2-console/login.jsp?jsessionid=353cab2a54c7e4ee3f4cd704b7388d53

--para las inserciones desde la base de datos
insert into car(id, aumento, finsercion, habilitado, img, valor)values (444, 0.05 , '28/10/2020', true, 'https://hips.hearstapps.com
/hmg-prod.s3.amazonaws.com/images/ford-gt-subasta-1590059807.jpg?crop=0.985xw:0.911xh;0,0.0541xh&resize=480:*' ,200000 )

--Rutas:
--Obtener lista de carros: http://localhost:3000/api/cars
--Obtener carro por id: http://localhost:3000/api/carbyid/2
--Donde 2 es el id del carro(que puede variar)
--Borrar carro por id: http://localhost:3000/api/delcarbyid/222
--Donde 222 es el id del carro a eliminar

--Cuando se está en la vista inicial el empleado por defecto es el admin
--la contraseña del admin es 1234


