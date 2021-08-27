# Software de Reajuste de Salário.

salario = float(input('Digite o salário fixo: '))
if salario <= 300:
    print('O valor reajustado é: ', salario + (salario * 0.35))
elif salario > 300:
    print('O valor reajustado é: ', salario + (salario * 0.15))
else:
    print('Valor informado incorretamente')
input()
