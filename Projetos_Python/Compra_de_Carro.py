# Programa para ajudar na compra de um carro.  

valor = float(input('Digite o valor da compra do Carro: '))
desconto10 = (valor - (valor * 0.10))
if valor <= 50.00:
    print('O valor do produto é: ',valor)
    print('O valor não rececebeu desconto')
    print('Valor final com desconto:',valor)
    print('Total de desconto: 0')
elif valor >= 50.01 and valor <=  100.0:
    print('O produto recebeu um valor de desconto de 10%')
    print('O valor do produto antes do desconto:',valor,'R$')
    print('O valor do produto é:', (valor) - (valor - desconto10),'R$')
    print('Total de desconto:',(valor - desconto10),'R$')
elif valor >= 100.01 and valor <= 130.0:
    print('O Produto recebeu um valor de desconto de 12%')
    print('O valor do produto antes do desconto: ',valor,'R$')
    print('O valor do produto é: ', (valor - (valor * 0.12)),'R$')
    print('Total de desconto:', (valor * 0.12),'R$')
elif valor >= 130.01 and valor <= 200.0:
    print('O Produto recebeu um valor de desconto de 15%')
    print('O valor do produto antes do desconto:',valor,'R$')
    print('O valor do produto é: ', (valor - (valor * 0.15)),'R$')
    print('Total de desconto:', (valor * 0.15),'R$')
elif valor >= 201.01 and valor <= 300.0:
    print('O Produto recebeu um valor de desconto de 20%')
    print('O valor do produto antes do desconto:',valor,'R$')
    print('O valor do produto é:', (valor - (valor * 0.20)),'R$')
    print('Total de desconto:', (valor * 0.20),'R$')
elif valor > 300:
    print('O Produto recebeu um valor de desconto de 25%')
    print('O valor do produto antes do desconto:',valor,'R$')
    print('O valor do produto é:', (valor - (valor * 0.25)),'R$')
    print('Total de desconto:', (valor * 0.25),'R$')
print('\n')

input()
