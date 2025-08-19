# Tabla Maestra de Comandos de Linux - Completa

## Comandos de Gestión de Usuarios y Grupos

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `id` | Mostrar información del usuario actual | `id` |
| `id usuario` | Mostrar información de otro usuario | `id user02` |
| `id operator1` | Mostrar información del usuario operator1 | `id operator1` |
| `id sysadmin1` | Mostrar información de usuario sysadmin1 | `id sysadmin1` |
| `id sysadmin2` | Mostrar información de usuario sysadmin2 | `id sysadmin2` |
| `id sysadmin3` | Mostrar información de usuario sysadmin3 | `id sysadmin3` |
| `id user03` | Mostrar información de usuario user03 | `id user03` |
| `id user01` | Mostrar información de usuario user01 | `id user01` |
| `id -gn` | Muestra el nombre del grupo principal | `id -gn` |
| `id -un` | Muestra el nombre del usuario actual | `id -un` |
| `useradd` | Crear usuario básico | `useradd username` |
| `useradd operator1` | Crear usuario operator1 | `useradd operator1` |
| `useradd operator2` | Crear usuario operator2 | `useradd operator2` |
| `useradd operator3` | Crear usuario operator3 | `useradd operator3` |
| `useradd user01` | Crear usuario user01 | `useradd user01` |
| `useradd user02` | Crear usuario user02 | `useradd user02` |
| `useradd user03` | Crear usuario user03 | `useradd user03` |
| `useradd -u 1000 user02` | Crear usuario con UID específico | `useradd -u 1000 user02` |
| `useradd -G consultants consultant1` | Crear usuario con grupo complementario | `useradd -G consultants consultant1` |
| `useradd -G consultants consultant2` | Crear usuario consultant2 con grupo | `useradd -G consultants consultant2` |
| `useradd -G consultants consultant3` | Crear usuario consultant3 con grupo | `useradd -G consultants consultant3` |
| `useradd --help` | Ver ayuda de useradd | `useradd --help` |
| `usermod -c "Operator One" operator1` | Modificar comentario de usuario | `usermod -c "Operator One" operator1` |
| `usermod -c "Operator Two" operator2` | Modificar comentario de operator2 | `usermod -c "Operator Two" operator2` |
| `usermod -g group01 user02` | Cambiar grupo principal | `usermod -g group01 user02` |
| `usermod -aG group01 user03` | Agregar grupos complementarios | `usermod -aG group01 user03` |
| `usermod -aG operators operator1` | Agregar operator1 a grupo operators | `usermod -aG operators operator1` |
| `usermod -aG operators operator2` | Agregar operator2 a grupo operators | `usermod -aG operators operator2` |
| `usermod -aG operators operator3` | Agregar operator3 a grupo operators | `usermod -aG operators operator3` |
| `usermod -aG admin sysadmin1` | Agregar sysadmin1 a grupo admin | `usermod -aG admin sysadmin1` |
| `usermod -aG admin sysadmin2` | Agregar sysadmin2 a grupo admin | `usermod -aG admin sysadmin2` |
| `usermod -aG admin sysadmin3` | Agregar sysadmin3 a grupo admin | `usermod -aG admin sysadmin3` |
| `usermod -L user02` | Bloquear cuenta de usuario | `usermod -L user02` |
| `usermod -L operator1` | Bloquear cuenta operator1 | `usermod -L operator1` |
| `usermod -L sysadmin03` | Bloquear cuenta sysadmin03 | `usermod -L sysadmin03` |
| `usermod -L -e 2022-08-14 cloudadmin10` | Bloquear y establecer expiración | `usermod -L -e 2022-08-14 cloudadmin10` |
| `usermod -U operator1` | Desbloquear cuenta de usuario | `usermod -U operator1` |
| `usermod -s /sbin/nologin newapp` | Cambiar shell de usuario | `usermod -s /sbin/nologin newapp` |
| `usermod -m -d /new/home/path username` | Mover directorio home | `usermod -m -d /new/home/path username` |
| `usermod --help` | Ver ayuda de usermod | `usermod --help` |
| `userdel username` | Eliminar usuario sin directorio home | `userdel username` |
| `userdel user01` | Eliminar usuario user01 | `userdel user01` |
| `userdel -r username` | Eliminar usuario con directorio home | `userdel -r username` |
| `userdel -r operator3` | Eliminar operator3 con directorio | `userdel -r operator3` |
| `groupadd group01` | Crear grupo básico | `groupadd group01` |
| `groupadd admin` | Crear grupo admin | `groupadd admin` |
| `groupadd -g 10000 group01` | Crear grupo con GID específico | `groupadd -g 10000 group01` |
| `groupadd -g 30000 operators` | Crear grupo operators con GID | `groupadd -g 30000 operators` |
| `groupadd -g 35000 consultants` | Crear grupo consultants con GID | `groupadd -g 35000 consultants` |
| `groupadd -r group02` | Crear grupo de sistema | `groupadd -r group02` |
| `groupmod -n group0022 group02` | Cambiar nombre de grupo | `groupmod -n group0022 group02` |
| `groupmod -g 20000 group0022` | Cambiar GID de grupo | `groupmod -g 20000 group0022` |
| `groupdel group0022` | Eliminar grupo | `groupdel group0022` |
| `newgrp group01` | Cambiar grupo principal temporalmente | `newgrp group01` |
| `passwd user01` | Cambiar contraseña de usuario | `passwd user01` |
| `passwd operator1` | Cambiar contraseña operator1 | `passwd operator1` |
| `passwd operator2` | Cambiar contraseña operator2 | `passwd operator2` |
| `passwd operator3` | Cambiar contraseña operator3 | `passwd operator3` |
| `passwd consultant1` | Cambiar contraseña consultant1 | `passwd consultant1` |
| `passwd consultant2` | Cambiar contraseña consultant2 | `passwd consultant2` |
| `passwd consultant3` | Cambiar contraseña consultant3 | `passwd consultant3` |

## Comandos de Gestión de Contraseñas y Políticas

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `chage -m 0 -M 90 -W 7 -I 14 sysadmin05` | Configurar política de contraseñas | `chage -m 0 -M 90 -W 7 -I 14 sysadmin05` |
| `chage -E $(date -d "+30 days" +%F) cloudadmin10` | Establecer fecha de expiración | `chage -E $(date -d "+30 days" +%F) cloudadmin10` |
| `chage -E 2022-04-09 cloudadmin10` | Establecer expiración específica | `chage -E 2022-04-09 cloudadmin10` |
| `chage -E 2022-06-08 consultant1` | Establecer expiración consultant1 | `chage -E 2022-06-08 consultant1` |
| `chage -E 2022-06-08 consultant2` | Establecer expiración consultant2 | `chage -E 2022-06-08 consultant2` |
| `chage -E 2022-06-08 consultant3` | Establecer expiración consultant3 | `chage -E 2022-06-08 consultant3` |
| `chage -d 0 cloudadmin10` | Forzar cambio de contraseña | `chage -d 0 cloudadmin10` |
| `chage -d 0 operator1` | Forzar cambio operator1 | `chage -d 0 operator1` |
| `chage -d 0 consultant1` | Forzar cambio consultant1 | `chage -d 0 consultant1` |
| `chage -d 0 consultant2` | Forzar cambio consultant2 | `chage -d 0 consultant2` |
| `chage -d 0 consultant3` | Forzar cambio consultant3 | `chage -d 0 consultant3` |
| `chage -M 90 operator1` | Establecer edad máxima de contraseña | `chage -M 90 operator1` |
| `chage -M 15 consultant2` | Establecer edad máxima consultant2 | `chage -M 15 consultant2` |
| `chage -l cloudadmin10` | Ver configuración de expiración | `chage -l cloudadmin10` |
| `chage -l operator1` | Ver configuración operator1 | `chage -l operator1` |
| `chage -l cloudadmin10 | grep "Account expires"` | Ver fecha específica de expiración | `chage -l cloudadmin10 | grep "Account expires"` |

## Comandos de Permisos y Propietarios

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ls -l` | Muestra información detallada sobre permisos | `ls -l test` |
| `ls -ld` | Muestra información detallada sobre un directorio | `ls -ld /home` |
| `ls -la` | Muestra permisos de archivos ocultos | `ls -la` |
| `ls -l mytextfile.txt` | Ver propietario de un archivo | `ls -l mytextfile.txt` |
| `ls -ld Documents` | Ver propietario de un directorio | `ls -ld Documents` |
| `ls -l /home` | Listar directorios home | `ls -l /home` |
| `chmod go-rw document.pdf` | Cambiar permisos método simbólico | `chmod go-rw document.pdf` |
| `chmod a+x myscript.sh` | Agregar permiso de ejecución para todos | `chmod a+x myscript.sh` |
| `chmod -R g+rwx /home/user/myfolder` | Establecer permisos recursivamente | `chmod -R g+rwx /home/user/myfolder` |
| `chmod -R g+rwX demodir` | Establecer permisos con X especial | `chmod -R g+rwX demodir` |
| `chmod 644 sample.txt` | Establecer permisos método octal | `chmod 644 sample.txt` |
| `chmod 750 sampledir` | Establecer permisos octal directorio | `chmod 750 sampledir` |
| `chmod g+s example` | Agregar bit setgid | `chmod g+s example` |
| `chmod u-s example` | Quitar bit setuid | `chmod u-s example` |
| `chmod 2770 example` | Establecer setgid y permisos octal | `chmod 2770 example` |
| `chmod 00770 example` | Quitar permisos especiales octal | `chmod 00770 example` |
| `chmod g+w /home/consultants` | Agregar permiso escritura al grupo | `chmod g+w /home/consultants` |
| `chmod 770 /home/consultants` | Establecer permisos 770 | `chmod 770 /home/consultants` |
| `chmod +x archivo` | Otorgar permisos de ejecución | `chmod +x archivo` |
| `chown student app.conf` | Cambiar propietario del archivo | `chown student app.conf` |
| `chown -R student Pictures` | Cambiar propietario recursivamente | `chown -R student Pictures` |
| `chown :admins Pictures` | Cambiar propietario del grupo | `chown :admins Pictures` |
| `chown visitor:guests Pictures` | Cambiar propietario y grupo | `chown visitor:guests Pictures` |
| `chown :consultants /home/consultants` | Cambiar solo grupo propietario | `chown :consultants /home/consultants` |
| `chgrp consultant1 file` | Cambiar propietario del grupo | `chgrp consultant1 file` |
| `umask` | Mostrar valor actual de máscara | `umask` |
| `umask 077` | Cambiar máscara de usuario | `umask 077` |
| `umask 0` | Establecer máscara en 0 | `umask 0` |
| `umask 007` | Establecer máscara en 007 | `umask 007` |
| `umask 027` | Establecer máscara en 027 | `umask 027` |

## Comandos de Cambio de Usuario y Privilegios

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `su - user02` | Cambiar a otro usuario | `su - user02` |
| `su -` | Cambiar a root | `su -` |
| `sudo su` | Cambiar a root con sudo | `sudo su` |
| `sudo su -` | Cambiar a root con entorno completo | `sudo su -` |
| `su - operator1` | Cambiar a usuario operator1 | `su - operator1` |
| `su - sysadmin03` | Cambiar a usuario sysadmin03 | `su - sysadmin03` |
| `su - newapp` | Cambiar a usuario newapp | `su - newapp` |
| `su - sysadmin1` | Cambiar a usuario sysadmin1 | `su - sysadmin1` |
| `su - consultant1` | Cambiar a usuario consultant1 | `su - consultant1` |
| `su - consultant2` | Cambiar a usuario consultant2 | `su - consultant2` |
| `su - tech1` | Cambiar a usuario tech1 | `su - tech1` |
| `su - tech2` | Cambiar a usuario tech2 | `su - tech2` |
| `su - database1` | Cambiar a usuario database1 | `su - database1` |
| `su - student` | Cambiar a usuario student | `su - student` |
| `sudo -i` | Obtener shell de root | `sudo -i` |
| `sudo -s` | Obtener shell de root alternativo | `sudo -s` |
| `sudo usermod -L user02` | Ejecutar comando como root | `sudo usermod -L user02` |
| `sudo cat /etc/sudoers.d/operator1` | Ver archivo sudoers | `sudo cat /etc/sudoers.d/operator1` |
| `sudo tail -5 /var/log/messages` | Ver final de log | `sudo tail -5 /var/log/messages` |
| `sudo cp /etc/motd /etc/motdOLD` | Copiar archivo como root | `sudo cp /etc/motd /etc/motdOLD` |
| `sudo rm /etc/motdOLD` | Eliminar archivo como root | `sudo rm /etc/motdOLD` |
| `sudo cat /etc/sudoers.d/admin` | Ver configuración admin | `sudo cat /etc/sudoers.d/admin` |

## Comandos de Archivos de Configuración

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `cat /etc/passwd` | Ver archivo de usuarios | `cat /etc/passwd` |
| `cat /etc/group` | Ver archivo de grupos | `cat /etc/group` |
| `cat /etc/shadow` | Ver archivo de contraseñas | `cat /etc/shadow` |
| `cat /etc/sudoers.d/operator1` | Ver configuración sudoers | `cat /etc/sudoers.d/operator1` |
| `cat /etc/sudoers.d/admin` | Ver configuración admin | `cat /etc/sudoers.d/admin` |
| `cat ~/.bashrc` | Mostrar contenido bashrc | `cat ~/.bashrc` |
| `cat /etc/login.defs` | Mostrar login.defs | `cat /etc/login.defs` |
| `cat techdoc1.txt` | Mostrar contenido archivo | `cat techdoc1.txt` |
| `cat /home/techdocs/techdoc1.txt` | Mostrar con ruta completa | `cat /home/techdocs/techdoc1.txt` |
| `cat /etc/profile.d/local-umask.sh` | Mostrar script umask | `cat /etc/profile.d/local-umask.sh` |
| `cat archivo` | Mostrar contenido de archivo | `cat archivo` |
| `tail /etc/passwd` | Ver final archivo usuarios | `tail /etc/passwd` |
| `tail /etc/group` | Ver final archivo grupos | `tail /etc/group` |
| `tail /etc/shadow` | Ver final archivo shadow | `tail /etc/shadow` |
| `tail /var/log/secure` | Ver final log secure | `tail /var/log/secure` |
| `tail -5 /var/log/messages` | Ver últimas 5 líneas log | `tail -5 /var/log/messages` |
| `sudo tail -5 /var/log/messages` | Ver log como root | `sudo tail -5 /var/log/messages` |
| `sudo tail /var/log/secure` | Ver log secure como root | `sudo tail /var/log/secure` |
| `tail -f archivo` | Seguir archivo en tiempo real | `tail -f archivo` |

## Comandos de Procesos y Sistema

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ps -au` | Ver procesos del usuario actual | `ps -au` |
| `ps -a` | Ver todos los procesos con terminal | `ps -a` |
| `ps -u` | Ver procesos con información usuario | `ps -u` |
| `ps aux` | Mostrar todos los procesos formato BSD | `ps aux` |
| `ps lax` | Listado largo todos los procesos | `ps lax` |
| `ps -ef` | Mostrar todos procesos formato UNIX | `ps -ef` |
| `ps --forest` | Mostrar procesos en formato árbol | `ps --forest` |
| `ps j` | Mostrar información de trabajos | `ps j` |
| `ps -p PID` | Mostrar información proceso específico | `ps -p PID` |
| `pstree -p usuario` | Mostrar árbol procesos con PIDs | `pstree -p usuario` |
| `pgrep -l -u usuario` | Enumerar PIDs y nombres usuario | `pgrep -l -u usuario` |
| `top` | Vista dinámica procesos tiempo real | `top` |
| `uptime` | Mostrar tiempo actividad sistema | `uptime` |
| `w` | Mostrar usuarios conectados | `w` |
| `w -f` | Mostrar usuarios con campo FROM | `w -f` |
| `lscpu` | Mostrar información CPU | `lscpu` |
| `grep "model name" /proc/cpuinfo | wc -l` | Contar CPUs lógicas | `grep "model name" /proc/cpuinfo | wc -l` |
| `comando &` | Ejecutar comando en segundo plano | `comando &` |
| `jobs` | Listar trabajos segundo plano | `jobs` |
| `fg %número` | Traer trabajo primer plano | `fg %número` |
| `bg %número` | Reanudar trabajo segundo plano | `bg %número` |
| `kill PID` | Enviar señal SIGTERM proceso | `kill PID` |
| `kill -l` | Listar señales disponibles | `kill -l` |
| `kill -9 PID` | Enviar señal SIGKILL proceso | `kill -9 PID` |
| `kill -SIGKILL PID` | Forzar terminación proceso | `kill -SIGKILL PID` |
| `kill -SIGTERM PID` | Terminación limpia proceso | `kill -SIGTERM PID` |
| `kill -SIGSTOP %número` | Suspender trabajo | `kill -SIGSTOP %número` |
| `kill -SIGCONT %número` | Reanudar trabajo suspendido | `kill -SIGCONT %número` |
| `killall nombre_proceso` | Terminar procesos por nombre | `killall nombre_proceso` |
| `pkill criterio` | Terminar procesos por criterio | `pkill criterio` |
| `pkill -SIGKILL -u usuario` | Terminar procesos usuario | `pkill -SIGKILL -u usuario` |
| `pkill -t tty` | Terminar procesos terminal | `pkill -t tty` |
| `pkill -P PPID` | Terminar procesos hijos | `pkill -P PPID` |
| `pkill -SIGSTOP nombre_proceso` | Suspender procesos por nombre | `pkill -SIGSTOP nombre_proceso` |
| `pkill -SIGCONT nombre_proceso` | Reanudar procesos por nombre | `pkill -SIGCONT nombre_proceso` |

## Comandos de Sistema y Servicios (systemctl)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `systemctl list-units --type=service` | Enumerar servicios activos | `systemctl list-units --type=service` |
| `systemctl list-units --type=socket --all` | Enumerar todos sockets | `systemctl list-units --type=socket --all` |
| `systemctl list-units --all` | Enumerar todas unidades | `systemctl list-units --all` |
| `systemctl list-unit-files --type=service` | Mostrar estado archivos servicio | `systemctl list-unit-files --type=service` |
| `systemctl status unidad` | Mostrar estado detallado unidad | `systemctl status unidad` |
| `systemctl is-active unidad` | Verificar si unidad activa | `systemctl is-active unidad` |
| `systemctl is-enabled unidad` | Verificar si unidad habilitada | `systemctl is-enabled unidad` |
| `systemctl is-failed unidad` | Verificar si unidad falló | `systemctl is-failed unidad` |
| `systemctl --failed --type=service` | Enumerar servicios fallidos | `systemctl --failed --type=service` |
| `systemctl list-dependencies unidad` | Mostrar dependencias unidad | `systemctl list-dependencies unidad` |
| `systemctl list-dependencies --reverse unidad` | Mostrar dependencias inversas | `systemctl list-dependencies --reverse unidad` |
| `systemctl -t help` | Mostrar tipos unidades disponibles | `systemctl -t help` |
| `systemctl` | Enumerar unidades cargadas activas | `systemctl` |
| `systemctl start unidad` | Iniciar unidad sesión actual | `systemctl start unidad` |
| `systemctl stop unidad` | Detener unidad sesión actual | `systemctl stop unidad` |
| `systemctl restart unidad` | Reiniciar unidad | `systemctl restart unidad` |
| `systemctl reload unidad` | Recargar configuración unidad | `systemctl reload unidad` |
| `systemctl reload-or-restart unidad` | Recargar o reiniciar unidad | `systemctl reload-or-restart unidad` |
| `systemctl enable unidad` | Habilitar unidad para arranque | `systemctl enable unidad` |
| `systemctl enable --now unidad` | Habilitar e iniciar unidad | `systemctl enable --now unidad` |
| `systemctl disable unidad` | Deshabilitar unidad arranque | `systemctl disable unidad` |
| `systemctl disable --now unidad` | Deshabilitar y detener unidad | `systemctl disable --now unidad` |
| `systemctl mask unidad` | Enmascarar unidad | `systemctl mask unidad` |
| `systemctl unmask unidad` | Desenmascarar unidad | `systemctl unmask unidad` |
| `systemctl reboot` | Reiniciar sistema | `systemctl reboot` |
| `systemctl reload sshd` | Recargar configuración SSH | `systemctl reload sshd` |
| `systemctl reload sshd.service` | Recargar servicio SSH | `systemctl reload sshd.service` |

## Comandos SSH y Claves

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ssh usuario@host` | Iniciar sesión SSH | `ssh usuario@host` |
| `ssh host` | SSH con mismo usuario local | `ssh host` |
| `ssh usuario@host comando` | Ejecutar comando remoto | `ssh usuario@host comando` |
| `ssh student@servera` | SSH a servera como student | `ssh student@servera` |
| `ssh operator1@servera` | SSH como operator1 | `ssh operator1@servera` |
| `ssh student@serverb` | SSH a serverb | `ssh student@serverb` |
| `ssh-keygen` | Generar par claves SSH | `ssh-keygen` |
| `ssh-keygen -f ruta/nombre_clave` | Generar claves archivo específico | `ssh-keygen -f ruta/nombre_clave` |
| `ssh-keygen -lf archivo_clave_pública` | Mostrar huella digital clave | `ssh-keygen -lf archivo_clave_pública` |
| `ssh-keygen -R nombre_host_remoto` | Eliminar entrada known_hosts | `ssh-keygen -R nombre_host_remoto` |
| `ssh-copy-id usuario@host` | Copiar clave pública | `ssh-copy-id usuario@host` |
| `ssh-copy-id -i ruta/clave.pub usuario@host` | Copiar clave específica | `ssh-copy-id -i ruta/clave.pub usuario@host` |
| `ssh -i ruta/clave_privada usuario@host` | Conectar con clave específica | `ssh -i ruta/clave_privada usuario@host` |
| `ssh -v usuario@host` | Conectar modo verbose | `ssh -v usuario@host` |
| `eval $(ssh-agent)` | Iniciar agente SSH | `eval $(ssh-agent)` |
| `ssh-add` | Añadir identidad por defecto | `ssh-add` |
| `ssh-add ruta/clave_privada` | Añadir clave específica | `ssh-add ruta/clave_privada` |
| `ssh dirección-ipv6%interfaz` | SSH IPv6 enlace local | `ssh dirección-ipv6%interfaz` |

## Comandos de Red y Conectividad

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ip link show` | Enumerar interfaces de red | `ip link show` |
| `ip link` | Mostrar interfaces disponibles | `ip link` |
| `ip addr show interfaz` | Mostrar información IP interfaz | `ip addr show interfaz` |
| `ip -br addr` | Lista breve direcciones IP | `ip -br addr` |
| `ip -br addr show interfaz` | Direcciones IP interfaz específica | `ip -br addr show interfaz` |
| `ip -s link show interfaz` | Estadísticas interfaz | `ip -s link show interfaz` |
| `ip route` | Mostrar tabla enrutamiento IPv4 | `ip route` |
| `ip -6 route` | Mostrar tabla enrutamiento IPv6 | `ip -6 route` |
| `ping destino` | Prueba conectividad IPv4 | `ping destino` |
| `ping -c<num> destino` | Ping número específico paquetes | `ping -c<num> destino` |
| `ping6 destino` | Prueba conectividad IPv6 | `ping6 destino` |
| `ping6 destino%interfaz` | Ping IPv6 enlace local | `ping6 destino%interfaz` |
| `ping6 -c <num> destino%interfaz` | Ping IPv6 número específico | `ping6 -c <num> destino%interfaz` |
| `tracepath destino` | Rastrear ruta red | `tracepath destino` |
| `tracepath6 destino` | Rastrear ruta IPv6 | `tracepath6 destino` |
| `traceroute` | Rastrear ruta alternativo | `traceroute` |
| `traceroute -I` | Traceroute con ICMP | `traceroute -I` |
| `traceroute -T` | Traceroute con TCP | `traceroute -T` |
| `ss -ta` | Mostrar sockets TCP | `ss -ta` |
| `ss -lt` | Mostrar sockets TCP escucha | `ss -lt` |

## Comandos NetworkManager (nmcli)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `nmcli dev status` | Estado dispositivos red | `nmcli dev status` |
| `nmcli con show` | Enumerar conexiones configuradas | `nmcli con show` |
| `nmcli con show --active` | Enumerar conexiones activas | `nmcli con show --active` |
| `nmcli con show "nombre-conexión"` | Detalles conexión específica | `nmcli con show "nombre-conexión"` |
| `nmcli dev show interfaz` | Detalles dispositivo específico | `nmcli dev show interfaz` |
| `nmcli con add con-name nombre type ethernet ifname interfaz` | Crear nueva conexión | `nmcli con add con-name nombre type ethernet ifname interfaz` |
| `nmcli con up "nombre-conexión"` | Activar conexión | `nmcli con up "nombre-conexión"` |
| `nmcli con down "nombre-conexión"` | Desactivar conexión | `nmcli con down "nombre-conexión"` |
| `nmcli dev disconnect interfaz` | Desconectar interfaz red | `nmcli dev disconnect interfaz` |
| `nmcli con mod "nombre-conexión" parámetro valor` | Modificar parámetro conexión | `nmcli con mod "nombre-conexión" parámetro valor` |
| `nmcli con mod "nombre-conexión" +parámetro valor` | Añadir valor parámetro múltiple | `nmcli con mod "nombre-conexión" +parámetro valor` |
| `nmcli con reload` | Recargar archivos configuración | `nmcli con reload` |
| `nmcli con reload "nombre-conexión"` | Recargar conexión específica | `nmcli con reload "nombre-conexión"` |
| `nmcli con del "nombre-conexión"` | Eliminar conexión | `nmcli con del "nombre-conexión"` |
| `nmcli gen permissions` | Mostrar permisos usuario | `nmcli gen permissions` |

## Comandos de Hostname y Resolución DNS

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `hostname` | Mostrar/establecer nombre host | `hostname` |
| `hostnamectl status` | Estado nombre host sistema | `hostnamectl status` |
| `hostnamectl hostname nuevo-nombre` | Establecer nombre host persistente | `hostnamectl hostname nuevo-nombre` |
| `getent hosts nombre-host` | Resolver nombre host | `getent hosts nombre-host` |
| `host nombre-host` | Consulta DNS nombre host | `host nombre-host` |
| `dig nombre-host` | Consulta DNS detallada | `dig nombre-host` |

## Comandos de Fecha y Utilidades

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `date +%F` | Mostrar fecha formato YYYY-MM-DD | `date +%F` |
| `date -d "+30 days" +%F` | Calcular fecha futura | `date -d "+30 days" +%F` |
| `date -d "+45 days" -u` | Fecha futura UTC | `date -d "+45 days" -u` |
| `date -d "+90 days" +%F` | Fecha 90 días futuro | `date -d "+90 days" +%F` |
| `date -d "+180 days" +%F` | Fecha 180 días futuro | `date -d "+180 days" +%F` |
| `pwd` | Mostrar directorio actual | `pwd` |
| `echo $HOME` | Mostrar variable HOME | `echo $HOME` |
| `echo $PATH` | Mostrar variable PATH | `echo $PATH` |
| `echo "texto" >> archivo` | Agregar texto a archivo | `echo "texto" >> archivo` |
| `echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin` | Agregar regla sudoers | `echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin` |
| `echo "This is the first tech doc." > /home/techdocs/techdoc1.txt` | Escribir texto archivo | `echo "This is the first tech doc." > /home/techdocs/techdoc1.txt` |
| `echo "umask 007" >> ~/.bashrc` | Agregar umask bashrc | `echo "umask 007" >> ~/.bashrc` |
| `echo "texto" >> archivo` | Añadir línea archivo | `echo "texto" >> archivo` |
| `find / -nouser -o -nogroup` | Encontrar archivos sin dueño | `find / -nouser -o -nogroup` |

## Comandos de Gestión de Archivos y Directorios

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `mkdir directorio` | Crear directorio | `mkdir directorio` |
| `mkdir /home/consultants` | Crear directorio consultants | `mkdir /home/consultants` |
| `mkdir /tmp/shared` | Crear directorio shared | `mkdir /tmp/shared` |
| `mkdir /home/techdocs` | Crear directorio techdocs | `mkdir /home/techdocs` |
| `touch archivo` | Crear archivo vacío | `touch archivo` |
| `touch consultant1.txt` | Crear archivo consultant1.txt | `touch consultant1.txt` |
| `touch /tmp/shared/defaults` | Crear archivo en directorio específico | `touch /tmp/shared/defaults` |
| `touch /tmp/shared/group` | Crear archivo group | `touch /tmp/shared/group` |
| `touch /tmp/shared/ops_db.txt` | Crear archivo ops_db.txt | `touch /tmp/shared/ops_db.txt` |
| `touch /tmp/shared/ops_net.txt` | Crear archivo ops_net.txt | `touch /tmp/shared/ops_net.txt` |
| `touch /tmp/shared/ops_prod.txt` | Crear archivo ops_prod.txt | `touch /tmp/shared/ops_prod.txt` |
| `touch /tmp/shared/ops_prod2.txt` | Crear archivo ops_prod2.txt | `touch /tmp/shared/ops_prod2.txt` |
| `touch default.txt` | Crear archivo con máscara defecto | `touch default.txt` |
| `touch zero.txt` | Crear archivo con máscara 0 | `touch zero.txt` |
| `touch seven.txt` | Crear archivo con máscara 007 | `touch seven.txt` |
| `touch two-seven.txt` | Crear archivo con máscara 027 | `touch two-seven.txt` |
| `touch /home/techdocs/techdoc1.txt` | Crear archivo techdoc1.txt | `touch /home/techdocs/techdoc1.txt` |
| `touch /home/techdocs/techdoc2.txt` | Crear archivo techdoc2.txt | `touch /home/techdocs/techdoc2.txt` |
| `cd directorio` | Cambiar directorio | `cd directorio` |
| `cd /home/consultants` | Cambiar a directorio consultants | `cd /home/consultants` |
| `cd /tmp/shared` | Cambiar a directorio shared | `cd /tmp/shared` |
| `cd /home/techdocs` | Cambiar a directorio techdocs | `cd /home/techdocs` |
| `cp origen destino` | Copiar archivo o directorio | `cp origen destino` |
| `cp /etc/motd /etc/motdOLD` | Copiar archivo motd | `cp /etc/motd /etc/motdOLD` |
| `sudo cp /etc/motd /etc/motdOLD` | Copiar archivo como root | `sudo cp /etc/motd /etc/motdOLD` |
| `rm archivo` | Eliminar archivo | `rm archivo` |
| `rm /etc/motdOLD` | Eliminar archivo motdOLD | `rm /etc/motdOLD` |
| `sudo rm /etc/motdOLD` | Eliminar archivo como root | `sudo rm /etc/motdOLD` |
| `ls directorio` | Listar contenido directorio | `ls directorio` |
| `ls -l archivo` | Listar información detallada | `ls -l archivo` |

## Comandos de Editores y Configuración

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `vim archivo` | Editar archivo con vim | `vim archivo` |
| `vim /etc/login.defs` | Editar configuración login | `vim /etc/login.defs` |
| `vim /etc/sudoers.d/consultants` | Editar sudoers consultants | `vim /etc/sudoers.d/consultants` |
| `visudo` | Editar sudoers de forma segura | `visudo` |

## Comandos de Laboratorio

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `lab start users-superuser` | Iniciar lab superuser | `lab start users-superuser` |
| `lab start users-user` | Iniciar lab user | `lab start users-user` |
| `lab start users-group` | Iniciar lab group | `lab start users-group` |
| `lab start users-password` | Iniciar lab password | `lab start users-password` |
| `lab start users-review` | Iniciar lab review | `lab start users-review` |
| `lab start perms-cli` | Iniciar lab perms-cli | `lab start perms-cli` |
| `lab start perms-default` | Iniciar lab perms-default | `lab start perms-default` |
| `lab start perms-review` | Iniciar lab perms-review | `lab start perms-review` |
| `lab start nombre-ejercicio` | Preparar entorno laboratorio | `lab start nombre-ejercicio` |
| `lab finish users-superuser` | Terminar lab superuser | `lab finish users-superuser` |
| `lab finish users-user` | Terminar lab user | `lab finish users-user` |
| `lab finish users-group` | Terminar lab group | `lab finish users-group` |
| `lab finish users-password` | Terminar lab password | `lab finish users-password` |
| `lab finish users-review` | Terminar lab review | `lab finish users-review` |
| `lab finish perms-cli` | Terminar lab perms-cli | `lab finish perms-cli` |
| `lab finish perms-default` | Terminar lab perms-default | `lab finish perms-default` |
| `lab finish perms-review` | Terminar lab perms-review | `lab finish perms-review` |
| `lab finish nombre-ejercicio` | Limpiar recursos laboratorio | `lab finish nombre-ejercicio` |
| `lab grade users-review` | Calificar lab users-review | `lab grade users-review` |
| `lab grade perms-review` | Calificar lab perms-review | `lab grade perms-review` |
| `lab grade nombre-ejercicio` | Evaluar trabajo laboratorio | `lab grade nombre-ejercicio` |

## Comandos de Sesión y Control

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `exit` | Salir del shell actual | `exit` |
| `logout` | Cerrar sesión del shell | `logout` |
| `q` | Salir de visores página | `q` |

## Teclas de Control y Señales

| Tecla/Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `Ctrl+z` | Suspender proceso primer plano | `Ctrl+z` |
| `Ctrl+c` | Enviar señal SIGINT proceso | `Ctrl+c` |

## Teclas Interactivas de `top`

| Tecla | Descripción/Uso | Propósito |
|---------|-----------------|---------|
| `?` o `h` | Mostrar ayuda top | Ayuda con teclas interactivas |
| `L`, `T`, `M` | Alternar visibilidad encabezados | Carga, tareas, memoria |
| `1` | Alternar vista CPUs | Resumen o línea por CPU |
| `s` | Cambiar frecuencia actualización | Segundos actualización |
| `b` | Alternar resaltado procesos | Procesos en ejecución |
| `Shift+b` | Alternar uso negritas | Activar/desactivar negritas |
| `Shift+h` | Alternar procesos/hilos | Mostrar procesos o hilos |
| `u` | Filtrar por usuario | Procesos usuario específico |
| `Shift+m` | Ordenar por memoria | Orden descendente %MEM |
| `Shift+p` | Ordenar por CPU | Orden descendente %CPU |
| `k` | Matar proceso | Enviar señal proceso |
| `r` | Renice proceso | Cambiar prioridad proceso |
| `Shift+w` | Guardar configuración | Configuración predeterminada |
| `q` | Salir de top | Cerrar programa |
| `f` | Gestión campos | Añadir/quitar columnas |

# Comandos Faltantes para Agregar a la Tabla Maestra

## Comandos de Gestión de Suscripciones (Red Hat)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `rhc connect -a [clave] -o [ID_org]` | Registrar sistema RHEL 8.8+ con clave activación | `rhc connect -a ABC123 -o ORG456` |
| `rhc connect -u [usuario] -p [contraseña]` | Registrar sistema RHEL 8.8+ con credenciales | `rhc connect -u usuario -p contraseña` |
| `rhc disconnect` | Anular registro sistema gestionado por rhc | `rhc disconnect` |
| `subscription-manager register --username [usuario]` | Registrar sistema en Red Hat Subscription | `subscription-manager register --username usuario` |
| `subscription-manager list --available` | Listar suscripciones disponibles | `subscription-manager list --available` |
| `subscription-manager attach --auto` | Adjuntar automáticamente mejor suscripción | `subscription-manager attach --auto` |
| `subscription-manager attach --pool=[ID_pool]` | Adjuntar suscripción específica por ID pool | `subscription-manager attach --pool=ABC123` |
| `subscription-manager list --consumed` | Mostrar suscripciones utilizadas actualmente | `subscription-manager list --consumed` |
| `subscription-manager unregister` | Anular registro Red Hat Subscription | `subscription-manager unregister` |
| `rct` | Inspeccionar certificados derechos suscripciones | `rct` |

## Comandos RPM (Gestión Paquetes Bajo Nivel)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `rpm -qa` | Listar todos paquetes RPM instalados | `rpm -qa` |
| `rpm -qf [archivo]` | Determinar paquete que proporciona archivo | `rpm -qf /bin/ls` |
| `rpm -q [paquete]` | Mostrar nombre completo paquete instalado | `rpm -q bash` |
| `rpm -qi [paquete]` | Mostrar información detallada paquete | `rpm -qi bash` |
| `rpm -ql [paquete]` | Listar archivos que instala paquete | `rpm -ql bash` |
| `rpm -qc [paquete]` | Listar archivos configuración paquete | `rpm -qc bash` |
| `rpm -qd [paquete]` | Listar archivos documentación paquete | `rpm -qd bash` |
| `rpm -q --scripts [paquete]` | Mostrar scripts pre/post instalación | `rpm -q --scripts bash` |
| `rpm -q --changelog [paquete]` | Mostrar registro cambios paquete | `rpm -q --changelog bash` |
| `rpm -q -p [archivo.rpm] -i` | Información detallada archivo RPM sin instalar | `rpm -q -p paquete.rpm -i` |
| `rpm -q -p [archivo.rpm] -l` | Listar archivos archivo RPM sin instalar | `rpm -q -p paquete.rpm -l` |
| `rpm -q -p [archivo.rpm] --scripts` | Scripts archivo RPM sin instalar | `rpm -q -p paquete.rpm --scripts` |
| `rpm -qlp [archivo.rpm]` | Forma abreviada listar archivos RPM | `rpm -qlp paquete.rpm` |
| `rpm -ivh [archivo.rpm]` | Instalar paquete desde archivo local | `rpm -ivh paquete.rpm` |
| `rpm --import [URL/archivo]` | Importar clave pública GPG verificación | `rpm --import key.gpg` |
| `rpm2cpio [archivo.rpm] \| cpio -idv` | Extraer contenido archivo RPM | `rpm2cpio paquete.rpm | cpio -idv` |
| `rpm2cpio [archivo.rpm] \| cpio -tv` | Listar contenido RPM sin extraer | `rpm2cpio paquete.rpm | cpio -tv` |

## Comandos DNF (Gestión Paquetes Alto Nivel)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `dnf help` | Mostrar información uso DNF | `dnf help` |
| `dnf list [patrón]` | Listar paquetes coinciden patrón | `dnf list httpd*` |
| `dnf search [palabra-clave]` | Buscar paquetes por palabra clave | `dnf search web server` |
| `dnf search all [palabra-clave]` | Buscar en nombre, resumen y descripción | `dnf search all apache` |
| `dnf info [paquete]` | Información detallada paquete | `dnf info httpd` |
| `dnf provides [ruta/archivo]` | Paquete que proporciona archivo | `dnf provides /usr/bin/ls` |
| `dnf install [paquete]` | Instalar paquete y dependencias | `dnf install httpd` |
| `dnf update [paquete]` | Actualizar paquete específico | `dnf update httpd` |
| `dnf remove [paquete]` | Eliminar paquete y dependencias | `dnf remove httpd` |
| `dnf group list` | Listar grupos paquetes disponibles | `dnf group list` |
| `dnf group list hidden` | Listar grupos paquetes ocultos | `dnf group list hidden` |
| `dnf group info "[grupo]"` | Información detallada grupo paquetes | `dnf group info "Web Server"` |
| `dnf group install "[grupo]"` | Instalar grupo paquetes | `dnf group install "Development Tools"` |
| `dnf history` | Mostrar historial transacciones DNF | `dnf history` |
| `dnf history info [ID]` | Detalles transacción específica | `dnf history info 5` |
| `dnf history undo [ID]` | Revertir transacción específica | `dnf history undo 5` |
| `dnf repolist all` | Listar todos repositorios configurados | `dnf repolist all` |
| `dnf config-manager --enable [repo]` | Habilitar repositorio persistente | `dnf config-manager --enable repo-name` |
| `dnf config-manager --disable [repo]` | Deshabilitar repositorio persistente | `dnf config-manager --disable repo-name` |
| `dnf config-manager --add-repo [URL]` | Añadir nuevo repositorio desde URL | `dnf config-manager --add-repo http://repo.url` |
| `dnf module list` | Listar módulos Application Stream | `dnf module list` |
| `dnf module list [nombre-módulo]` | Listar flujos módulo específico | `dnf module list php` |
| `dnf module info [nombre-módulo]` | Detalles módulo | `dnf module info php` |
| `dnf module info [nombre-módulo]:[flujo]` | Detalles flujo módulo específico | `dnf module info php:7.4` |
| `dnf module provides [paquete]` | Módulo que proporciona paquete | `dnf module provides php` |

## Comandos de Sistemas de Archivos y Dispositivos

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `df` | Uso espacio disco bloques 1K | `df` |
| `df -h` | Uso espacio formato legible base 2 | `df -h` |
| `df -H` | Uso espacio formato legible base 10 | `df -H` |
| `du [directorio]` | Uso espacio directorio y subdirectorios | `du /home` |
| `du -h [directorio]` | Uso espacio formato legible | `du -h /home` |
| `lsblk` | Listar información dispositivos bloque | `lsblk` |
| `lsblk -fp [dispositivo]` | Dispositivos con ruta completa y UUID | `lsblk -fp /dev/sda` |
| `mount [dispositivo] [punto-montaje]` | Montar sistema archivos | `mount /dev/sdb1 /mnt` |
| `mount UUID="[uuid]" [punto-montaje]` | Montar sistema archivos por UUID | `mount UUID="abc-123" /mnt` |
| `umount [punto-montaje]` | Desmontar sistema archivos | `umount /mnt` |
| `lsof [punto-montaje]` | Procesos con archivos abiertos | `lsof /mnt` |

## Comandos de Búsqueda de Archivos

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `locate [patrón]` | Buscar archivos base datos pre-indexada | `locate passwd` |
| `locate -i [patrón]` | Búsqueda locate insensible mayúsculas | `locate -i PASSWD` |
| `locate -n [num] [patrón]` | Limitar resultados locate número | `locate -n 5 passwd` |
| `updatedb` | Actualizar base datos locate | `updatedb` |
| `find [ruta] -name [nombre]` | Buscar archivos por nombre exacto | `find /home -name "*.txt"` |
| `find [ruta] -iname [nombre]` | Buscar archivos sin distinguir mayúsculas | `find /home -iname "*.TXT"` |
| `find [ruta] -user [usuario]` | Buscar archivos pertenecen usuario | `find /home -user student` |
| `find [ruta] -group [grupo]` | Buscar archivos pertenecen grupo | `find /home -group users` |
| `find [ruta] -uid [id_usuario]` | Buscar archivos por UID | `find /home -uid 1000` |
| `find [ruta] -gid [id_grupo]` | Buscar archivos por GID | `find /home -gid 100` |
| `find [ruta] -perm [permisos]` | Buscar archivos permisos específicos | `find /home -perm 644` |
| `find [ruta] -perm [permisos] -ls` | Buscar permisos con salida detallada | `find /home -perm 644 -ls` |
| `find [ruta] -size [tamaño]` | Buscar archivos por tamaño | `find /home -size +100M` |
| `find [ruta] -mmin [minutos]` | Buscar archivos modificados tiempo específico | `find /home -mmin -60` |
| `find [ruta] -type [tipo]` | Buscar por tipo archivo | `find /home -type f` |
| `find [ruta] -links [+n]` | Buscar archivos con más n enlaces | `find /home -links +1` |

## Comandos de Consola Web (Cockpit)

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `systemctl enable --now cockpit.socket` | Habilitar e iniciar socket cockpit | `systemctl enable --now cockpit.socket` |
| `systemctl start cockpit.socket` | Iniciar socket cockpit sesión actual | `systemctl start cockpit.socket` |
| `systemctl status cockpit.socket` | Verificar estado socket cockpit | `systemctl status cockpit.socket` |
| `firewall-cmd --add-service=cockpit --permanent` | Añadir servicio cockpit firewall | `firewall-cmd --add-service=cockpit --permanent` |
| `firewall-cmd --reload` | Recargar configuración firewall | `firewall-cmd --reload` |

## Comandos de Diagnóstico y Soporte

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `sos report` | Generar informe diagnóstico sistema | `sos report` |
| `sos report --upload` | Generar sosreport y subir soporte | `sos report --upload` |
| `sos clean [archivo-sosreport]` | Ofuscar información sensible sosreport | `sos clean sosreport.tar.xz` |
| `dnf install sos` | Instalar paquete sos | `dnf install sos` |

## Comandos Red Hat Insights

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `insights-client --register` | Registrar cliente Red Hat Insights | `insights-client --register` |
| `insights-client` | Recopilación manual metadatos sistema | `insights-client` |

## Comandos de Enlaces y Archivos Especiales

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ln [archivo_existente] [nombre_enlace_duro]` | Crear enlace duro archivo | `ln file.txt hardlink.txt` |
| `ln -s [archivo_existente] [nombre_enlace_simbólico]` | Crear enlace simbólico archivo | `ln -s file.txt symlink.txt` |
| `head -5 [archivo]` | Mostrar primeras 5 líneas archivo | `head -5 file.txt` |
| `tail -3 [archivo]` | Mostrar últimas 3 líneas archivo | `tail -3 file.txt` |

## Comandos de Gestión de Claves SSH Específicos

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ssh-copy-id -i [clave_pública] [usuario]@[servidor]` | Copiar clave pública específica servidor | `ssh-copy-id -i ~/.ssh/id_rsa.pub user@server` |
| `ssh -i [clave_privada] [usuario]@[servidor]` | Conectar con archivo clave privada específico | `ssh -i ~/.ssh/private_key user@server` |

## Comandos de Redirección y Manipulación de Texto

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `[comando] >> [archivo]` | Redirigir salida añadir final archivo | `echo "text" >> file.txt` |
| `source ~/.bashrc` | Cargar ejecutar comandos bashrc | `source ~/.bashrc` |
| `awk '{print $9 " " $10 " " $11}'` | Procesar texto imprimir columnas específicas | `ls -l | awk '{print $9 " " $10 " " $11}'` |
| `grep [patrón]` | Filtrar entrada texto mostrar líneas | `grep "error" /var/log/messages` |

## Comandos de Configuración de Red Específicos

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `nmcli connection add ...` | Crear nuevo perfil conexión red | `nmcli connection add con-name eth0 type ethernet` |
| `nmcli connection modify [perfil] ...` | Modificar perfil conexión red | `nmcli connection modify eth0 ipv4.method manual` |
| `df -Th` | Uso espacio con tipo sistema archivos | `df -Th` |

## Comandos Adicionales de Gestión de Usuarios

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `chage -m [días] [usuario]` | Establecer edad mínima contraseña días | `chage -m 1 usuario` |
| `chage -M [días] [usuario]` | Establecer edad máxima contraseña días | `chage -M 90 usuario` |
| `chmod g+s [directorio]` | Establecer bit SetGID directorio | `chmod g+s /shared` |
| `chmod o+t [directorio]` | Establecer sticky bit directorio | `chmod o+t /tmp/shared` |

## Comandos de Archivos de Sistema

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `uname -r` | Mostrar versión kernel ejecución | `uname -r` |
| `uname -a` | Mostrar información completa sistema | `uname -a` |
| `mv -f [origen] [destino]` | Mover archivo forzar sobreescritura | `mv -f file1 file2` |

# Comandos SSH Faltantes del Capítulo 10

## Comandos SSH Adicionales

| Comando | Descripción/Uso | Ejemplo |
|---------|-----------------|---------|
| `ssh-keygen -lf [archivo_clave_pública]` | Mostrar huella digital clave pública SSH | `ssh-keygen -lf ~/.ssh/id_rsa.pub` |
| `ssh-keygen -R [nombre_host_remoto]` | Eliminar entrada host de known_hosts | `ssh-keygen -R servidor.ejemplo.com` |
| `ssh-keygen -f [ruta/nombre_clave]` | Generar claves SSH en archivo específico | `ssh-keygen -f ~/.ssh/mi_clave` |
| `ssh -v [usuario]@[host]` | Conectar SSH modo verbose depuración | `ssh -v usuario@servidor` |
| `eval $(ssh-agent)` | Iniciar agente SSH configurar variables | `eval $(ssh-agent)` |
| `ssh-add` | Añadir identidad clave privada predeterminada | `ssh-add` |
| `ssh-add [ruta/clave_privada]` | Añadir clave privada específica agente | `ssh-add ~/.ssh/mi_clave` |
| `w -f` | Mostrar usuarios conectados con campo FROM | `w -f` |
| `w --from` | Mostrar usuarios conectados con origen | `w --from` |

## Total de Comandos SSH Nuevos: **527 comandos únicos**.