# PEC 1 - Solucion Ejercicio 1


#####  La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)


- **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**

Las etiquetas semanticas nos muestran de forma clara la función que cumplen en relación con el contenido, por lo tanto, una de sus principales ventajas, es la de hacer el codigo más sencillo de entender para los usuarios lo que facilita también su mantenimiento y reusabilidad.

Permite además mejorar el posicionamiento SEO. Por lo general, es más habitual  acceder a una web mediante el uso de buscadores que ingresando accediendo directamente a la URL del sitio. Estos buscadores utilizan diversos algoritmos que analizan el código 
de nuestra web, así pues las etiquetas semánticas les facilitan la labor de entender mejor el proposito del sitio. 


Además de esto,  permiten que las webs sean aptas para personas con limitaciones físicas, ya que un código estructurado semánticamente permite que ciertas herramientas como lectores de pantalla sean capaces identificar la información de una forma más clara.


- **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**
   - Drag and Drop API: permite arrastrar y soltar elementos dentro de una página web.

   - Navigation Timing API: proporciona información detallada sobre el rendimiento de la carga de la página, incluyendo cuánto tiempo tarda en resolverse el DNS, establecer la conexión al servidor, recibir la respuesta y procesar el DOM.

   - Fullscreen API: permite a una página web mostrar elementos (como un video, una imagen o un juego) en pantalla completa.
   

- **Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

Mediante las medias queries, que permite  aplicar unos estilos u otros en función de una condicion relacionada con el tamaño del dispositivo o navegador.



- **Cita al menos 4 de las características principales de TypeScript.**
   - Tipado estatico: permite especificar los tipos de variables y parámetros de funciones en tiempo de compilación, a diferencia con JavaScript, donde las variables están tipadas dinámicamente, lo que significa que su tipo puede cambiar en tiempo de ejecución.
  
  - Compatibilidad  con las funciones modernas de JavaScript, incluidas las introducidas en ECMAScript 6 (ES6) y        versiones posteriores.

  - Organización de código: TypeScript proporciona soporte integrado para módulos y espacios de nombres que permiten encapsular el código en archivos separados, facilitando el manejo de grandes bloques de código.
  - Programación orientado a objetos: la sintaxis de TS para la programación orientada a objetos es muy similar a la de otros lenguajes como Java o C#. Y además añade clases abstractas y modificadores de acceso, entre otras características.
  - Soporte para interfaces.



#####  El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos).

**Cita al menos 2 de estos preprocesadores.**
Saas y Less
**Cita al menos 4 ventajas que ofrecen estos preprocesadores.** 
- Permiten definir variables para asignar a los formatos (color, tamaño..etc)
- Empleo de Mixins:  los mixins permiten definir conjuntos de propiedades CSS que pueden ser reutilizados en varias partes del código.
- Anidación: Se puede anidar selectores, lo que hace que se escriba menos código y mejore la legibilidad del código.
- Optimización: Permiten optimizar el CSS final al compilar, eliminando redundancias o generando código más eficiente, lo que mejora el rendimiento en los navegadores.


**Explica brevemente en qué consisten los sourcemaps.** 

Normalmente, a la hora de desplegar una aplicación el código se suele optimizar y comprimir en un único archivo para mejorar el rendimiento, lo que hace que sea más difícil de leer y dificulte su depuración. Cuando se genera el código optimizado, también se crea un sourcemap ( en formato JSON o en formato de mapa de origen .map), que contiene información sobre cómo se relaciona el código generado con el código fuente original. Cuando ocurre un error o se necesita depurar la aplicación en producción, los developer tools del navegador utilizan el sourcemap para mapear el código generado al código fuente original. Esto le permite a los desarrolladores examinar y depurar el código como si estuvieran trabajando con el código fuente original.


**Explica qué es un transpilador.**


Un transpilador, al igual que un compilador es un traductor entre lenguajes, pero a diferencia de éste, que convierte un código de alto nivel a código máquina, la traducción se produce entre lenguajes que están al mismo nivel de abstracción. Por ejemplo Una traducción de Java a Bytecode sería una compilación. Una traducción de TypeScript a JavaScript sería en cambio una transpilación ya que TypeScript no deja ser una variante de JavaScript 



##### El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos)

**Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.** 
   - Sistmas de control de versiones: Git y merc
   - Sistmas de control de modulos: Webpack y npm

**Cita y explica al menos 3 comandos de Git.**
 ````Git

git init // inicia un nuvo repositorio y crea la carpeta oculta .git

git add "nombre del fichero" // añade contenido del directorio de trabajo al area temporal (staging area)
git add . //así se añadirian todos los archivos del directorio local

git commit -m "un comentario" //confirma los cambios realizados y los envía al repositorio

git remote add origin "URL del repositorio remoto" //para crear la etiqueta origin que equivale a la url de un repositorio remoto
git push -u origin main //para subir los cambios del repositorio local a un repositorio remoto (de url 'origin') a la rama main
 ````


**Cita y explica brevemente las características más definitorias de WebPack.**

- Permite modificar nuestro código y prepararlo para hacer deploy en producción.
- Permite usar imports y exports de javascript moderno para la gestión de nuestro código javascript de manera simple.
- Code Splitting: divide el código en múltiples paquetes, que luego se pueden cargar bajo demanda. Esto reduce la cantidad de datos que deben descargarse y mejora los tiempos de carga de las páginas
- Sustitución en caliente de módulos (HMR): Esta función permite a los desarrolladores realizar cambios en un módulo sin necesidad de que se cargue la página de nuevo.
- Extensible y modular: podemos configurarlo para que se adapte a las necesidades del proyecto añadiendole modulos adicionales que se pueden utilizar para minificar código, convertir entre formatos de archivo, etc.
