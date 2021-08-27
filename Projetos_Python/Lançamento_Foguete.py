import time
lançamento = int(input('Digite o número 10 para lançar o foguete: '))
n = 10
if lançamento == 10:
    while n >= 1:
        print(n)
        print('Carregando...')
        time.sleep(1)
        n = n - 1
print("FOGOOOO!!!")
input()

