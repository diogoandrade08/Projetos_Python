#Ajuste do valor para consumidor

custof = float(input('Digite o custo de fábrica do carro: '))
if custof <= 12.000:
    print('O valor do carro para o consumidor é: ', (custof + (custof * 5/100)))
elif custof > 12.000 and custof <= 25.000:
    print('O Valor do carro para o consumidor é: ', (custof + (custof *10/100) + (custof * 15/100)))
elif custof > 25.000:
        print('O Valor do carro para o consumidor é: ', (custof + (custof *15/100) + (custof * 20/100)))
input()
