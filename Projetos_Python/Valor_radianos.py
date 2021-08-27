import math
x = float(input('Digite o valor de X: '))
y = float(input('Digite o valor de Y: '))
anguloradio = math.atan(round(x/y))
angulograu = math.degrees(round(anguloradio))
print('o resultado em radianos do angulo é: ', anguloradio)
print('o resultado em graus do angulo é: ', angulograu)
input()
