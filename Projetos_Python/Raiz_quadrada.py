import math
numero = int(input('Digite um número:'))
raiz = numero **(1/2)
quadrado = numero * numero
if numero > 0:
    print('O número {} é positivo e sua raiz quadrada é {}: '.format(numero, raiz))
else:
    print('O número {} é negativo e o seu quadrado é {}: '.format(numero, quadrado))
