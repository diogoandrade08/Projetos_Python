soma = 0
qtd = 0
while True:
    num = int(input('Digite algum número inteiro ou digite 0 para terminar: '))
    soma = soma + num

    if num == 0:
        print('Finalizado!')
        break
    qtd = qtd + 1
print('\n')
print('A quantidade de números digitados: ',qtd)
print('A soma de todos os números: ',soma)
print('A média de todos os números: ', soma/qtd)

print('\n')
input()
