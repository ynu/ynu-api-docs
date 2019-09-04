# markdown features

## some extended markdown features

### diagrams use mermaid

see https://vuepress-examples.netlify.com/demos/diagrams/

<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>

### standard Table

| left | center | right |
| :--- | :----: | ----: |
| 1    |   2    |     3 |
| 45   |   67   |    89 |

### math support

see https://vuepress.github.io/en/plugins/mathjax/#add-to-config-js

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

$f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{x \pi i \xi x}\,d\xi$

### flowchart 

see https://flowchart.vuepress.ulivz.com/#usage

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

### others