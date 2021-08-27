n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
media = (n1 + n2)/2
print(media)
if  media < 4:
    print('Reprovado')
elif media >= 4 and media < 7:
    print('Fazer Exame')
elif media >= 7 and 10:
    print('Aprovado')
else:
    print('média inválida')
input()

