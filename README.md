# Hackathon-JUMP2DIGITAL - API Rick & Morty


## Descripción del Proyecto - Rick & Morty App
Este proyecto consiste en el desarrollo de una aplicación web que muestra información sobre los personajes de la serie "Rick y Morty" a través de una API pública. La interfaz de usuario se ha diseñado de manera amigable y atractiva, ofreciendo a los usuarios una experiencia placentera al explorar el emocionante universo de la serie.
Esta aplicación web ha sido realizada con React


### Captura de Pantalla / Demo
[Inserta una captura de pantalla o un enlace a una demostración en vivo si es relevante]


### Tabla de Contenidos
Instalación
-[Instalación](#instalación)
-[Uso](#uso)
-[Requisitos Técnicos](#requisitos)
-[Características Adicionales](#características)
-[Contacto](#contacto)


### Instalación
1 - Clona este repositorio:
```bash
git clone https://github.com/MiriamFernandezPerez/Hackathon-JUMP2DIGITAL.git
```

2 - Navega al directorio del proyecto:
```bash
cd [Hackathon-JUMP2DIGITAL]
```

3 - Instala las dependencias:
```bash
npm install
```


### Uso
Una vez instalado, basta con ejecutar mediante npm.

```sql
npm start
```
Se abrirá una ventana en tu navegador predeterminado con el proyecto.


### Requisitos Técnicos

#### Conexión a la API
La aplicación se conecta a la API de "Rick y Morty" (https://rickandmortyapi.com/documentation) para obtener datos actualizados de los personajes de la serie. Esta petición de datos se realiza mediante el hook UseEffect de React y el uso de fetch.

#### Estilo y Diseño
Se ha utilizado CSS para dar estilo a los aspectos generales de la aplicación y styled-components para los aspectos específicos de cada uno de los componentes que componen la aplicación.

#### Responsive
La aplicación es completamente responsiva, asegurando que se vea y funcione de manera óptima en dispositivos móviles y de escritorio. He utilizado una combinación de flexbox y grid, tamaños de letra con calc `(1em + 1vw)` y medias en em y % para la adaptabilidad. 
- Grid
Se ha utilizado para el manejo rápido de los "Cards" de los personajes, especificándo la cantidad de cards por tamaño de dispositivo mediante el mediaqueries.
- Flexbox
Se ha utilizado para la maquetación interna de los elementos tanto del body como del interior de los Cards. 
- calc `(1em + 1vw)`
Permite definir el tamaño de fuente de un elemento de manera dinámica, mejora la adaptabilidad al tamaño del texto y la adaptabilidad al tamaño de la pantalla.
- Tamaños en em y %
Permite que los elementos se adapten de manera fluida y más eficiente a diferentes tamaños de pantalla y dispositivos y crear diseños responsive que escalan de manera flexible y proporcional.


### Características Adicionales
Se han añadido además las dos opciones de extra a la aplicación:

Búsqueda de Personajes: He implementado la funcionalidad de búsqueda, permitiendo a los usuarios encontrar personajes en tiempo real a medida que escriben en el campo de búsqueda.

Botón de Cargar Más: He implementado un botón que realiza una nueva petición a la API si el usuario realiza scroll en la aplicación y desea ver más personajes. Por cada petición se añaden 20 personajes más a la vista.


### Contacto
Miriam Fernández Pérez
mirindaww@hotmail.com
