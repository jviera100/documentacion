print = console.log = echo
def = function = let variable()=>{}
elif = else if
len = length
f-strings = interpolacion, invocacion o sustitucion de valores de variables o iterados
lista = array
split = separador por simbolo, ej: ","
startswith = verifica si cadena de texto comienza con un prefijo específico, true o false
if correo[-10:] == '@gmail.com':  = verifica si string termina en texto especificado
Tuplas: Se crean usando paréntesis (), por ejemplo: tupla = (1, 2, 3).
Listas: Se crean usando corchetes [], por ejemplo: lista = [1, 2, 3].
*args es una convención en Python para pasar valores como tuplas entre ()
kwargs es abreviatura de "keyword arguments" pasa valores como diccionario
Lambdas funcion anonima de un solo uso, se asigna a variables
rom functools import reduce, factoriza y simplifica conjunto, tupla o lista
strip = eliminar caracteres de los extremos de una cadena de texto
slicing = filtra lista por índices, desde hasta y salta, o muestra todo, 
    ejemplo: lista[inicio:fin:paso] = , un inicio -1 inicia desde ultima propiedad de arreglo

push pop shift unshift = filas
append = columnas de listas o arrays 
    ej:
def agregar_si(lista, nombre):
    if len(nombre) >=5:
        lista.append(nombre)
    return lista
in = verifica si esta dentro de lista

def rotar_a_la_izquierda(lista):
    if lista:  # Verifica si la lista no está vacía
        primer_elemento = lista.pop(0)  # Elimina y obtiene el primer elemento
        lista.append(primer_elemento)  # Lo agrega al final
    return lista
# tabla del 12
def dibujar_tabla_12():
    n = 12  # Establecemos el tamaño de la tabla
    numero = 1  # Contador para los números consecutivos
    for i in range(n):  # Itera sobre las filas
        for j in range(n):  # Itera sobre las columnas
            print(f"{numero:3d}", end=" ")  # Imprime el número con formato
            numero += 1  # Incrementa el número
        print()  # Nueva línea después de cada fila


# tabla del 12
def tabla_multiplicar():
    for i in range(1, 13):  # Itera de 1 a 12 para las filas
        for j in range(1, 13):  # Itera de 1 a 12 para las columnas
            print(f"{i * j:3d}", end=" ")  # Imprime el resultado de la multiplicación con formato
        print()  # Nueva línea después de cada fila
# tabla vista vertical, asignar valor de variable, ejemplo 5, sera tabla del 5
def mostrar_tabla(numero):
    # Itera del 1 al 10 para mostrar la tabla de multiplicar
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero * i}")



# imprime todos los números del 3 al 7?
for i in range(3, 8):
    print(i)

# In Out

print("hola mundo");
hola mundo

In[5]: 'el \"perro\" de luis'
Out[5]: 'el "perro" de luis'

# comentarios de una linea
'''
comentarios varias lineas
'''

