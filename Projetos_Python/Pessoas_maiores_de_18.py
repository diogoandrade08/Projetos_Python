n = 0
total = 0
while n <= 9:
    k = int(input('Digite sua idade: '))
    n = n + 1
    if k > 17:
        total = total + 1

print('Total de Pessoas maior que 18 anos: ', total)
input()
