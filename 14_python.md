print = console.log = echo
def = function = let variable()=>{}
elif = else if
len = length
lista = array
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


