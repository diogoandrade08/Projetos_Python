print('''
programa que carrega uma lista de 6 elementos numéricos,
calcula e mostra:
a) A quantidade de números pares;
b) quais são os números pares dentro da lista
c) A quantidade de números ímpares;
d) quais são os números ímpares dentro da lista
''')
lista = [0,0,0,0,0,0]
listax = [0,0,0,0,0,0]
x = 0
impar = []
par = []
qtdpar = 0
qtdimpar = 0
while x < 6:
    lista = int(input('Digite qualquer número: '))
    listax[x] = lista
    x = x + 1
    if lista % 2 != 0:
        print('Número é impar: ',lista)
        impar.append(lista)
        qtdimpar = qtdimpar + 1
    else:
        print('Número é par:',lista)
        par.append(lista)
        qtdpar = qtdpar + 1
print('\n')
print('Quantidades de ímpares digitados: ',qtdimpar)
print('Quantidades de pares digitados: ',qtdpar)
print('\n')
print('Lista dos números digitados:', '\n',listax,'\n')
print('Lista de números ímpares: \n ', impar,'\n')
print('Lista de números pares: \n ', par)

print('\n')
input()
