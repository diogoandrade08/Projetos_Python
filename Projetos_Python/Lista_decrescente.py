lista1 = [0,0,0,0,0,0,0,0,0,0]
lista2 = [0,0,0,0,0,0,0,0,0,0]
lista3 = []
n = 0
while n < 10:
    lista1[n] = int(input('Digite algum número inteiro para a primeira lista:'))
    lista2[n] = int(input('Digite algum número inteiro para a segunda lista: '))
    n = n + 1
    lista3 = lista1 + lista2
print('\n')
print('Primeira lista: \n',lista1,'\n')
print('Segunda lista: \n',lista2,'\n')
print('Terceira Lista(completa): \n',sorted (lista3, reverse=True))


input()
