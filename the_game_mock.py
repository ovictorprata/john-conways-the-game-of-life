import time

def print_matriz(array):
    print('-' * 20)
    for el in array:
        print(*el, sep='')
    print('-' * 20)


def cria_matriz(n_linhas, n_colunas):
    for i in range(0, n_linhas):
        matriz.append([])
        for j in range(0, n_colunas):
            matriz[i].append(celula_morta)


def continuar_o_jogo(continuar, pos_linha=0, pos_coluna=0):
    while continuar == 's':
        print('-' * 20)
        if continuar == 's':
            print('-' * 20)
            insere_celula_viva(matriz, pos_linha, pos_coluna)

        elif continuar == 'n':
            roda_o_game()

        else:
            print('\nEntrada incorreta. grrrrrr.\n')
            continuar == 's'


def insere_celula_viva(array, i_row, j_column):
    i_row -= 1
    j_column -= 1
    array[i_row][j_column] = celula_viva

def zera_index_negativo(index):
    if index < 0:
        index = 0
    return index

def contador_de_vizinhos(par_i, par_j):
    cont_vizinhos = 0
    # define os indices de quem está em volta dele
    i_inicial = par_i - 1
    i_final = par_i + 2
    j_inicial = par_j - 1
    j_final = par_j + 2


    i_inicial = zera_index_negativo(i_inicial)
    i_final = zera_index_negativo(i_final)
    j_inicial = zera_index_negativo(j_inicial)
    j_final = zera_index_negativo(j_final)
        
    for i in range(i_inicial, i_final):
        for j in range(j_inicial, j_final):
            try:
                if matriz[i][j] == celula_viva:
                    cont_vizinhos += 1
            except IndexError:
                cont_vizinhos += 0
    if matriz[par_i][par_j] == celula_viva:
        cont_vizinhos -= 1 # programa considera o próprio elemento
    if cont_vizinhos == -1:
        cont_vizinhos = 0
    return cont_vizinhos


def inverter_caractere(list_of_lists):
    for i in list_of_lists:
        index_i = i[0]
        index_j = i[1]

        elemento = matriz[index_i][index_j]
        if elemento == celula_morta:
            matriz[index_i][index_j] = celula_viva
        else:
            matriz[index_i][index_j] = celula_morta


def roda_o_game(matriz):
    n_vizinhos = 0
    # TEM QUE EXCLUIR A BEIRADAS
    for i in range(0, rows):
        for j in range(0, columns):
            el = matriz[i][j]
            n_vizinhos = contador_de_vizinhos(i, j)
            if n_vizinhos <= 1 or n_vizinhos >= 4:
                if el == celula_viva:
                    posicoes_para_inverter.append([i, j])
            else:
                if n_vizinhos == 3 and el == celula_morta:
                    posicoes_para_inverter.append([i, j])

    inverter_caractere(posicoes_para_inverter)
   


# --------------- FIM DAS FUNÇÕES
celula_viva = '\U0001F7E8'
celula_morta = '\U0001F7EA'
matriz = []
matriz_teste = []
linha = []
posicoes_para_inverter = []
n_vizinhos = 0

rows = 3
columns = 3

cria_matriz(3, 3)
print('-- MATRIZ INICIAL --')
print_matriz(matriz)
print('-- FIM MATRIZ INICIAL --') 

insere_celula_viva(matriz, 2, 1)
insere_celula_viva(matriz, 2, 2)
insere_celula_viva(matriz, 2, 3)


print('----- INICIEI ------')
print_matriz(matriz)
print("""----- VOU RODAR O GAME ------
.
.
.
.
""") 
numero = 0
while True:
    numero += 1
    print(f'\n{numero}ª vez:')
    roda_o_game(matriz)
    roda_o_game(matriz)
    print_matriz(matriz)
    time.sleep(2)

