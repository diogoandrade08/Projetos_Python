soma = 0
qtd = 0
while True:
    num = int(input('Digite algum número ou 0 para terminar: '))
    if num == 0:
        break
    soma = soma + num
    qtd = qtd + 1
print('Quantidade de números digitados: ',qtd)
print('Soma dos números digitados: ',soma)
print('Média dos números digitados: ',(soma/qtd))

print('\n')
input()



