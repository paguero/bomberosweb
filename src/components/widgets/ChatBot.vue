<template>
<div id="contenedor">
    <!-- <i class="fas fa-comments activarChat"></i> -->
    <div class="chat">
      <div class="chat-cabecera">
        <!-- <i class="fas fa-question chat-cabecera-ayuda"></i> -->
        <div class="chat-cabecera-logo">
          <img
            class="icono-cabecera"
            id="agent-avatar"
            src="/media/img/ejecutivo-animado.gif"
            srcset="/media/img/ejecutivo-animado.gif"
          />
        </div>
        <div class="chat-cabecera-cuerpo">
          <div class="chat-cabecera-titulo">Asistente</div>
          <div class="chat-cabecera-subtitulo">Asistente Virtual</div>
        </div>
        <i class="fas fa-times chat-cabecera-cerrar"></i>
      </div>

      <div class="chat-cuerpo">
        <div id="resultado-mensajes" ref="resultadoMensajes" class="chat-cuerpo-resultado-mensajes">
          
          <div
            class="mensaje chat-cuerpo-resultado-mensajes-servidor-escribiendo"
          >
            <div class="servidor-escribiendo">
              <span></span><span></span><span></span>
            </div>
          </div> 
        </div>
        <div class="chat-cuerpo-mensaje">
          <div class="chat-cuerpo-mensaje-input">
            <input
              name="txt-mensaje"
              id="txt-mensaje"
              type="text"
              placeholder="Escribir..."
              
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>