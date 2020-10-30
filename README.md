# vanilla_picture-in-picture
Picture in picture project from "JS 20 projects course"

Live project: http://jlaguilardev.me/vanilla_picture-in-picture/

-----

# Picture in picture

### A tener en cuenta ...

- Configuración base de un botón (reset?)
- Efectos curiosos para un botón sencillo
- Usamos la API de "Screen Capture"
- La funcionalidad de la pantalla pequeña es la ostia

### GitHub

[jlaguilargomez/vanilla_picture-in-picture](https://github.com/jlaguilargomez/vanilla_picture-in-picture)

## Project

Nos basamos en el siguiente artículo:

[An Introduction to the Picture-in-Picture Web API | CSS-Tricks](https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/)

Que utiliza la API de "Screen capture"

[Using the Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)

Podemos consultar todas las API's del navegador en el siguiente enlace:

[Referencia de la API Web](https://developer.mozilla.org/es/docs/Web/API)

Se recomienda la siguiente configuración básica para TODOS los botones:

```css
button {
	cursor:pointer;
	outline:none;
}
```

También es necesario cambiar el FONT-FAMILY dentro del botón, ya que NO lo hereda por defecto del body.

Ojo a la configuración que se le mete al botón para darle un efecto relieve:

```css
button {
  cursor: pointer;
  outline: none;
  width: 120px;
  height: 75px;
  font-family: Barlow, sans-serif;
  font-size: 25px;
  color: white;
  text-shadow: 0 2px 5px black;
  background: linear-gradient(to top, #696969, #575757);
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: inset 0 20px 4px -19px rgba(255, 255, 255, 0.4), 0 12px 12px 0 rgba(0, 0, 0, 0.3);
}

button:hover {
  background: linear-gradient(to bottom, #696969, #575757);
}

button:active {
  transform: translateY(2px);
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.3);
}
```

¡Tiene un efecto `:hover` y un efecto `:active` bastante chulos!

**La funcionalidad es la ostia, muy atento.**

Si lanzamos la línea de código siguiente en el navegador, funciona....

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1cecd8e6-bcbf-4c1e-b7ab-45ca60ec737a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1cecd8e6-bcbf-4c1e-b7ab-45ca60ec737a/Untitled.png)

Porque el navegador, con su motor V8, permite ejecutar AWAIT como si estuviera dentro de una función ASYNC
