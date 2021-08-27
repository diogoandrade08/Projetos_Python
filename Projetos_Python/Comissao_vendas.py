salariofixo = float(input('Digite o salário fixo: '))
vendas = int(input('Digite o total de vendas: '))
comissao = ((salariofixo * 4/100) * vendas)
salariofinal = salariofixo + ((salariofixo * 4/100) * vendas)
print('Total de vendas {}'.format(vendas))
print('Valor da comissão (4% sobre o salário fixo): {}'.format(comissao))
print('Salário final: {}'.format(salariofinal))

input()
