
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Dialogs playground</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/components/xdialogport/xdialogport.css\" />\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/castelog/castelog.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <script src=\"lib/ui-script/components/xdialogport/xdialogport.js\"></script>\n    <style>\n      html {\n        background-color: #111;\n      }\n      .CodeMirror {\n        font-size: 10px;\n        background-color: #222;\n        color: white;\n      }\n      .CodeMirror-gutters {\n        background-color: #222;\n      }\n      .CodeMirror-cursor {\n        border-left: 1px solid white;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Script de diálogos</xtitle>"
 + "    <div>"
 + "      <textarea ref=\"dialogos_entrada\" :value=\"dialogo_entrada_por_defecto\"></textarea>"
 + "    </div>"
 + "    <div>"
 + "      <button style=\"width:100%;\" v-on:click=\"execute\">Ejecutar</button>"
 + "    </div>"
 + "    <div>"
 + "      <textarea ref=\"dialogos_salida\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { esta_usando_castelog:true,
cm_dialogos_entrada:undefined,
cm_dialogos_salida:undefined,
dialogo_entrada_por_defecto:`hago this.clear_console().
creo es_hombre como ~ confirmar("¿Eres un hombre?").
si es_hombre hago ~ informar("Así que eres un hombre...").
si no es_hombre hago ~ informar("Así que eres una mujer...").
creo tiene_permiso_de_conducir como ~ confirmar("¿Y tienes permiso de conducir?").
hago this.print({ es_hombre, tiene_permiso_de_conducir }).`
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ clear_console() {try {
this.cm_dialogos_salida.setValue( "" );
} catch(error) {
console.log(error);
throw error;
}

},
print( mensaje ) {try {
const anterior = this.cm_dialogos_salida.getValue(  );
const siguiente = ( anterior + "\n[*] " + ( JSON.stringify(mensaje, null, 2) ) ).trim(  );
this.cm_dialogos_salida.setValue( siguiente );
} catch(error) {
console.log(error);
throw error;
}

},
async execute() {try {
const entrada = this.cm_dialogos_entrada.getValue(  );
let entrada_js = entrada;
if(this.esta_usando_castelog) {
entrada_js = Castelog_parser.parse( entrada );
}
entrada_js = "const confirmar = Vue.prototype.$dialogs.confirm;\n" + entrada_js;
entrada_js = "const informar = Vue.prototype.$dialogs.inform;\n" + entrada_js;
entrada_js = "const formulario = Vue.prototype.$dialogs.form;\n" + entrada_js;
entrada_js = "const limpiar_consola = this.clear_console;\n" + entrada_js;
const component = this;
const AsyncFunction = ( async function() {
} ).constructor;
const js_final = new AsyncFunction( entrada_js );
const resultado = (await js_final.call( this ));
if((!(typeof resultado === 'undefined'))) {
this.print( resultado );
}
} catch(error) {
Vue.prototype.$dialogs.inform( error.name + ": " + error.message );}
}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
this.cm_dialogos_entrada = CodeMirror.fromTextArea( this.$refs.dialogos_entrada,
{ lineNumbers:true
} );
this.cm_dialogos_salida = CodeMirror.fromTextArea( this.$refs.dialogos_salida,
{ lineNumbers:true
} );
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "    <xdialogport></xdialogport>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");