#Menu de opções

print('Operações disponíveis: \n'
      '1. Média entre os números digitados \n'
      '2. Diferença do maior pelo menor \n'
      '3. Produto entre os números digitados \n'
      '4. Divisão do primeiro pelo segundo \n')
operaçao = int(input('Digite o número da operação desejada: '))
n1 = float(input('Digite o primeiro número:'))
n2 = float(input('Digite o segundo número:'))
media = (n1 + n2)/2
diferença1 = n1 - n2
diferença2 = n2 - n1
divisao = n1 / n2
multi = n1 * n2
if operaçao == 1:
    print('A média é: ',media)
elif operaçao == 2:
    if n1 > n2:
        print(diferença1)
    if n2 > n1:
        print(diferença2)
elif operaçao == 3:
    print("A brenda pediu e aqui está",multi)
elif operaçao == 4:
    print('A divisão é:', divisao)

input()

    
        
    
