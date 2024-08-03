# Login-MongoDB-NodeJS-Angular-Express

Este proyecto implementa un sistema de autenticación y autorización de usuarios utilizando un stack tecnológico compuesto por Node.js, Angular, Express y MongoDB. A continuación se detallan los componentes y funcionalidades del sistema:

Backend (Node.js y Express)

API RESTful: El backend está construido con Node.js y el framework Express para manejar las solicitudes HTTP.
Autenticación: Utiliza JWT (JSON Web Tokens) para la autenticación de los usuarios. Los tokens son generados en el servidor y enviados al cliente tras un login exitoso.
Gestión de Usuarios: Rutas para registro de usuarios, login, y manejo de perfiles de usuario.
Encriptación de Contraseñas: Las contraseñas se encriptan utilizando bcrypt antes de ser almacenadas en la base de datos.
Base de Datos (MongoDB)

Modelado de Datos: Uso de Mongoose para definir esquemas y modelos que representan usuarios y sus datos en la base de datos.
Operaciones CRUD: Operaciones para crear, leer, actualizar y eliminar usuarios en la base de datos.
Frontend (Angular)

Interfaz de Usuario: Construida con Angular para proporcionar una experiencia de usuario dinámica y receptiva.
Formularios de Autenticación: Formularios para registro y login de usuarios, con validaciones tanto del lado del cliente como del servidor.
Manejo de Tokens: Almacena el token JWT en el localStorage del navegador para mantener la sesión activa.
Guardias de Rutas: Protege las rutas que requieren autenticación, asegurando que solo usuarios logueados puedan acceder a ciertas vistas.
Flujo de Autenticación

Registro: El usuario proporciona un nombre de usuario, correo electrónico y contraseña. Estos datos se envían al backend, donde se crea un nuevo usuario en la base de datos.
Login: El usuario ingresa su nombre de usuario y contraseña. El backend verifica las credenciales y, si son correctas, devuelve un token JWT.
Acceso Protegido: El token JWT se envía con cada solicitud a rutas protegidas. El backend valida el token antes de otorgar acceso.
Este sistema de login proporciona una forma segura y eficiente de manejar la autenticación de usuarios en una aplicación web, asegurando que los datos de los usuarios estén protegidos y que solo usuarios autenticados puedan acceder a ciertas funcionalidades.

