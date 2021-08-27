#Usuário e senha para login

usuario = int(input('Digite o código de usuário:'))
n = 0
if usuario == 1234:
    while n < 3:
        senha = int(input('Digite a senha: '))
        n = n + 1
        if senha == 9999:
            print('Acesso permitido')
            break
        elif n == 3:
            print('Senha bloqueada contate o administrador')
        else:
            print('Senha incorreta')
else:
    print('Usuário inválido')
input()
print('\n')
