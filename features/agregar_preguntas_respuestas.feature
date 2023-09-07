Feature: La escuela agrega comandos con 
 sus respectivas respuestas 

 Scenario: Se agregó un comando satisfactoriamente
 Given el usuario ha iniciado sesión como escuela
 And la escuela se encuentra en el apartado de agregar comandos
 When la escuela escribe el identificador de comando en el formulario
 And la escuela escribe la respuesta de comando en el formulario
 When la escuela envía el formulario
 Then la escuela recibe una notificación de que se a creado correctamente el comando

 Scenario: mensaje vacío
 Given el usuario ha iniciado sesión como escuela
 And la escuela se encuentra en el apartado de agregar comandos
 When la escuela escribe el identificador de comando en el formulario
 And la escuela no escribe la respuesta 
 When la escuela envía el formulario
 Then La escuela recibe una notificación de que el mensaje está vacío
