d
# Metodologica SUIT

[SuitCSS oficial] 

Se utiliza en muchos frameworks como Angular, React,etc.
Es una monenclatura basada en BEM pero con algunas diferencias.

## Partes:

Sus partes son:
 "Componentes"
"Elementos"
"Modificacdores"
"Estados"
"Utilizades"

-ComponentName (PascalCase)
-Componentname-elementName(-camelCase)
-ComponentName--modiferName(--camelCase)
-ComponentName.isStateOfComponent(.isPascalCase, .HasPascalClase , .focusPascalCase)
-u-utilityName (u-camlCase)

## Componente ( bloque) y elementos:

```css
/*Componentes*/
.Galeria{}

/*Elementos*/
.Galeria-titulo{}
.Galeria-imagen{}
.Galeria-pieGaleria{}

/*Modificadores*/
.Galeria--principal{}
.Galeria-imagen--extraGrande{}

```
## Estados

Los estados son modificadores pero "Temporales" de un elemtnos (Activo, inactivo, cerradp , abierto) y son independientes de los componentes en que se utiliza.

```css
.isActive{}
.MiComponente.IsActive{}
.MiGaleria.IsActive{}

.MiComponente.onHover{}
.MiComponente.isLoading{}
```

```html
<div class="MiComponente isActive></div>
<div class="MiComponente ></div>
<div class="MiGaleria isActive></div>
<div class="MiGaleria ></div>

```

## utilizadades

Es una clase que se puede aplicar a cualqueir equieta y que no tiene realcion con el componente. Se escribe con una "u" al frente.
La libreria es tailwind.

```css
.u-textCenter{
text-aling:center;
margin-left: auto;
margin-right: auto;
}

.u-bgRed{
    background-color:red;

}
```

Inlcuso las utilizades poseen variantes responsive como "u-sm-textCenter","u-md-textCenter"......


