# 🧪 Laboratorio 1 unidad 2: Acceso a la línea de comandos – Bash

## 🔧 Preparación

```bash
lab start cli-review
```

---

## 📝 Tareas paso a paso

| Tarea                              | Comando                                                  |
|------------------------------------|-----------------------------------------------------------|
| Mostrar fecha y hora actual        | `date`                                                    |
| Mostrar hora en formato 24h        | `date +%R`                                                |
| Ver tipo de archivo `zcat`         | `file zcat`                                               |
| ¿Es legible por humanos?           | Verifica si dice `"ASCII text"`                          |
| Ver tamaño del archivo             | `wc zcat`                                                 |
| Mostrar primeras 10 líneas         | `head zcat`                                               |
| Mostrar últimas 10 líneas          | `tail zcat`                                               |
| Repetir comando anterior           | `↑` o `!!`                                                |
| Mostrar últimas 20 líneas          | `tail -n 20 zcat` (usa `↑`, `Ctrl+A`, `Ctrl+→`)          |
| Repetir `date +%R` desde historial | `history` → `!2` (según número del comando en tu historial) |

---

## 📋 Ejemplo de historial

```bash
history
1  date
2  date +%R
3  file zcat
4  wc zcat
5  head zcat
6  tail zcat
7  tail -n 20 zcat
8  history

!2  # Ejecuta date +%R nuevamente
```

---

## ✅ Evaluación

```bash
lab grade cli-review
```

Corrige los errores si aparecen y vuelve a ejecutar hasta obtener resultado satisfactorio.

---

## 🏁 Finalizar

```bash
cd ~
lab finish cli-review
```
