print = console.log = echo
def = function = let variable()=>{}
elif = else if
len = length
f-strings = interpolacion, invocacion o sustitucion de valores de variables o iterados
lista = array
split = separador por simbolo, ej: ","
startswith = verifica si cadena de texto comienza con un prefijo específico, true o false
if correo[-10:] == '@gmail.com':  = verifica si string termina en texto especificado
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

# libreria numpy
# seed = datos semilla
# randint = datos aleatorios

# MODA
# import statistics as st
# st.mode

# MEDIANA
# from numpy importn quantile
# quantile(variable, 0,5, interpolation='midpoint') => al 50%
# quantile(variable, 0,25, interpolation='midpoint') => al 25%

# PROMEDIO
# from numpy import mean
# mean(variables)

# import pandas as pd
dataframe es el nombre de una lista
pd.DataFrame
tabla.sum => suma todas las listas
tabla.loc => suma una lista

# ley grandes numeros => probabilidad teorica => entre mas muestras mas acertado
# ley pequeños numeros => probabilidad empirica => entre menos muestras menos acertado y afecta mas el resultado al ser pequeño

pd.read_csv("archivo.csv", sep=";", encoding= 'unicode_scape')
datos.iloc()
lambda
.groupby
.agg 


