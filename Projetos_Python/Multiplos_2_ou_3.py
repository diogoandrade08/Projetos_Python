L = [0,0,0,0,0,0,0,0,0,0]
LX = [0,0,0,0,0,0,0,0,0,0]
LM3 = []
LM2 = []
LM23 = []
n = 0
while n < 10:
    L = int(input('Digite qualquer número: '))
    LX[n] = L
    n = n + 1
    if not(L % 3):
        print('\n O Número', L, 'é multiplo de 3 ''\n')
        LM3.append(L)
        LM23.append(L)
    if not(L % 2):
        print('\n O Número', L,'é múltiplo de 2 ''\n')
        LM2.append(L)
        LM23.append(L)
print('\n')  
print('Lista de números digitados: \n', LX, '\n')
print('Lista de números multiplos de 3: \n',LM3, '\n')
print('Lista de números multiplos de 2: \n', LM2,'\n')
print('Lista de números multiplos de 2 e 3: \n',LM23)

input()
