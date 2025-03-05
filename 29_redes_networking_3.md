### Conversión de Decimal a Binario: 

conversión del número decimal a su equivalente binario de 8 bits.  La tabla organiza la información de la siguiente manera:

*   **Valor decimal:** El número a convertir (en este caso, 192).
*   **Base:** La base del sistema numérico binario (2).
*   **Exponente:** El exponente de la base 2 para cada posición del bit.
*   **Posición:** El valor posicional de cada bit (128, 64, 32, 16, 8, 4, 2, 1).
*   **Bit:** El valor binario (0 o 1) que indica si la posición correspondiente contribuye al valor decimal.



**Tabla de Conversión (Horizontal):**

|   | Bit (2^0) | Bit (2^1) | Bit (2^2) | Bit (2^3) | Bit (2^4) | Bit (2^5) | Bit (2^6) | Bit (2^7) |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **Posición** | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| **Bit** | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |

**Resultado Binario:** 11000000

**Explicación:**

Para obtener 192 en decimal, necesitamos los siguientes valores posicionales:

*   128 (2^7)
*   64 (2^6)

128 + 64 = 192. Por lo tanto, los bits correspondientes a esas posiciones son 1, y los demás son 0. El resultado binario se lee de derecha a izquierda dentro de la tabla.