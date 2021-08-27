fim = int(input('Digite o último número a imprimir: '))
x = 1
while x <= fim:
    print(x)
    x = x + 2

# usando o resto da divisão

fim = int(input('Digite o último número a imprimir: '))
x = 0
while x <= fim:
    if x % 2 != 0:
        print(x)
    x= x + 1
