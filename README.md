📦 App Productos con Node.js + MySQL + Docker Compose

Este proyecto implementa una aplicación en Node.js (Express) que permite registrar y listar productos usando una base de datos MySQL dentro de un contenedor.

El despliegue se realiza con Docker Compose en un servidor Ubuntu 20.04.

📌 Requisitos previos

Instancia con Ubuntu 20.04

Docker y Docker Compose instalados:

sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker

📌 Estructura del proyecto
App-productos/
 ├── src/
 │   ├── index.js        # Servidor Express
 │   ├── db.js           # Conexión a MySQL
 │   ├── routes.js       # Rutas API
 ├── package.json        # Dependencias Node
 ├── Dockerfile          # Imagen Node.js
 ├── docker-compose.yml  # Orquestación de servicios
 ├── README.md           # Documentación

📌 Instalación y configuración

Clonar repositorio

git clone https://github.com/TU-USUARIO/productos-app.git
cd productos-app


Construir y levantar contenedores

sudo docker-compose up -d --build


Esto levantará:

MySQL 8.0 en el puerto 3306

App Node.js en el puerto 8000

📌 Base de datos

El contenedor de MySQL se inicializa con:

Base de datos: productosdb

Usuario: zkuser

Password: zkpass

Tabla de productos:

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  categoria VARCHAR(100),
  precio DECIMAL(10,2),
  stock INT,
  descripcion TEXT
);

📌 API Endpoints
1. Registrar producto

POST http://localhost:8000/api/productos

📌 Ejemplo con curl:

curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Laptop","categoria":"Electrónica","precio":2500,"stock":10,"descripcion":"Laptop gamer"}'


📌 Respuesta:

{"mensaje":"Producto agregado"}

2. Listar productos

GET http://localhost:8000/api/productos

📌 Ejemplo con curl:

curl http://localhost:8000/api/productos


📌 Respuesta:

[
  {"id":1,"nombre":"Laptop","categoria":"Electrónica","precio":"2500.00","stock":10,"descripcion":"Laptop gamer"}
]

📌 Insertar productos de ejemplo
# Producto 1
curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Laptop","categoria":"Electrónica","precio":2500,"stock":10,"descripcion":"Laptop gamer"}'

# Producto 2
curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Smartphone","categoria":"Electrónica","precio":1200,"stock":20,"descripcion":"Teléfono Android"}'

# Producto 3
curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Zapatillas","categoria":"Ropa","precio":350,"stock":15,"descripcion":"Zapatillas deportivas"}'

# Producto 4
curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Libro","categoria":"Educación","precio":80,"stock":50,"descripcion":"Libro de programación"}'

# Producto 5
curl -X POST http://localhost:8000/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre":"Mouse","categoria":"Accesorios","precio":60,"stock":30,"descripcion":"Mouse inalámbrico"}'


📌 Listar todos:

curl http://localhost:8000/api/productos

📌 Ver datos directamente en MySQL
sudo docker exec -it app-productos_mysql_raro_1 mysql -u zkuser -p


(contraseña: zkpass)

Dentro de MySQL:

USE productosdb;
SELECT * FROM productos;

📌 Despliegue en AWS

Crear instancia EC2 con Ubuntu 20.04

Instalar Docker + Docker Compose

Clonar este repositorio

Ejecutar:

sudo docker-compose up -d --build


Abrir puerto 8000 en Security Groups

Acceder a la API desde Postman o navegador:

http://<IP_PUBLICA>:8000/api/productos

📌 Entregables

Dockerfile ✅

docker-compose.yml ✅

Repositorio con código y README ✅

Video (máx 5 min) mostrando ejecución y pruebas ✅

🔹 Autor: [Tu Nombre]
🔹 Curso: Desarrollo de Soluciones en la Nube – Tecsup
🔹 Sección: 2025-2
