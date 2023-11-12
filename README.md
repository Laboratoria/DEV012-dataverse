# Dataverse

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Creación de data mediante uso de IA](#2-creación-de-data-mediante-uso-de-IA)
* [3. Historias de usuarias](#3-historias-de-usuarias)
* [4. Diseño de la página](#4-diseño-de-la-página)
* [5. Herramientas](#5-herramientas)
* [6. Autoras](#6-autoras)


***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.
No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
las usuarias, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando *interfaces* y *visualizaciones*.
Este proyecto ha sido desarrollado bajo el marco de aprendizaje del bootcamp de Laboratoria. Como segundo proyecto en duplas, tiene la finalidad de enzeñarnos a cómo manipular de manera más dinámica el DOM mediante la creación de elementos HTML mediante el uso de Javascript, así como trabajar de manera colaborativa mediante Git y GitHub.


## 2. Creación de data mediante uso de IA

En este proyecto **se construyo una *página web* para visualizar un
*conjunto (set) de datos*** que se generaron con [prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/).

En este proyecto se utilizó la herramienta de
[inteligencia artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial)
 [ChatGPT](https://openai.com/chatgpt), 
para generar un set de datos.

Un ejemplo de las directrices entregadas a la IA de ChatGPT fue la siguiente:
![image](https://github.com/DolB612/DEV012-dataverse/assets/143374716/6a60f39f-285c-4440-b31a-9e3b384da858)


Le dimos una seríe de instrucciones tomando en cuanta la estructura que queriamos que tuviera la base de datos.
La data que nos proporcionó la IA quedó de la siguiente manera:
C:\Users\saraa\OneDrive\Escritorio\dataset cap.png

El propósito de generar los datos en esta manera es aprovechar la oportunidad de emplear las herramientas impulsadas por la inteligencia
artificial, así como [técnicas de
prompting](https://learnprompting.org/es/docs/intro).

Como entregable final se tiene una página web que permite **visualizar la data,
filtrarla, ordenarla y calcular una estadística**. 


## 3. Historias de usuarias
La historia de usuari@ nos permitió tener una guia en la planificacion de los sprints dividiendola en tareas, estas historias las fuimos organizando en Trello como guía para la planificación de las tareas durante los sprints.



## 4. Diseño de la página y responsive

Para el diseño, se utilizó una herramienta de diseño (Figma) para crear los prototipos de mobile y desktop. Este diseño se fué 
modificado al recibir feedback de nuestras compañeras.
![image](https://github.com/DolB612/DEV012-dataverse/assets/143374716/b218f599-1d59-401a-822c-0e4c33cd677a)
![image](https://github.com/DolB612/DEV012-dataverse/assets/143374716/d46ff2ce-15b8-47c4-a688-1522ef54ec2b)


Trabajamos con colores amarillos para mantener el concepto de la paleta de colores de las abejas con un diseño minimalista sin
distracciones, dando el resultado final como se muestra la app en el navegador.
![image](https://github.com/DolB612/DEV012-dataverse/assets/143374716/e4d1372c-45a3-4184-930b-46b679e0b4cf)



### Pruebas unitarias

Este proyecto no incluian las Pruebas Unitarias (*tests*), así que se crearon con el framework Jest, especificamente para las funciones encargadas de  *procesar*,
*filtrar* y *ordenar* la data, así la de *calcular* estadísticas.

Las *pruebas unitarias*  dan una cobertura del 100% de *statements*
(*sentencias*), *functions* (*funciones*), *lines* (*líneas*), y *branches*
(*ramas*) del archivo `src/dataFunctions.js` que contiene las funciones.


## 5. Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)
- [Visual Code Studio](https://code.visualstudio.com/)

## 6. Autoras
*Sara Adela Saldarriaga*

*Sara Arvizu*

