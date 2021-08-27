
lista1 = [0,0,0,0,0,0,0,0,0,0]
lista2 = [0,0,0,0,0,0,0,0,0,0]
lista3 = [0,0,0,0,0,0,0,0,0,0]
n = 0
while n < 10:
    lista1[n] = int(input('Digite os números da primeira lista: '))
    lista2[n] = int(input('Digite os números da segunda lista: '))
    lista3[n] = lista1[n] * lista2[n]
    n = n + 1

print('\n')
print('Primeira lista digitada: \n ',lista1,'\n')
print('Segunda lista digitada: \n ',lista2,'\n')
print('Multiplicação das duas lista: \n',lista3)

input()




