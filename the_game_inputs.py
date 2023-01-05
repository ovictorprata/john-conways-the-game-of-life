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

def contador_de_vizinhos(matriz, i, j):
    n_vizinhos = 0
    variacao_indices = [
        (-1, -1), (-1, 0),(-1, 1),
        (0, -1), (0, 1),
        (1, -1), (1 ,0),(1, 1),
    ]

    posicao_vizinhos = [(i + pos[0], j + pos[1]) for pos in variacao_indices if 0 <= i + pos[0] < len(matriz) and 0 <= j + pos[1] < len(matriz[0])]
    for i_e_j in posicao_vizinhos:
        if matriz[i_e_j[0]][i_e_j[1]] == celula_viva:
            n_vizinhos += 1
    # print(f'A célula {i}, {j} tem {n_vizinhos} vizinhos')
    return n_vizinhos



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
    posicoes_para_inverter = []
    n_vizinhos = 0

    for i in range(0, rows):
        for j in range(0, columns):
            el = matriz[i][j]
            n_vizinhos = contador_de_vizinhos(matriz, i, j)
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
n_vizinhos = 0

rows = int(input('Insira o número de linhas da tabuleiro: '))
columns = int(input('Insira o número de colunas da tabuleiro: '))
cria_matriz(rows, columns)

print('-'  * 20)
print('- SEU TABULEIRO INICIAL É: ')
print_matriz(matriz)
print('- FIM TABULEIRO INICIAL -') 
print('-'  * 20)

continuar = 's'

while continuar != 'n':
    continuar = input('Deseja inserir uma célula viva? [s/n]').lower()
    if continuar == 'n':
        break
    insere_i = int(input('Insira a posição da linha onde deseja inserir: '))
    insere_j = int(input('Insira a posição da coluna onde deseja inserir: '))
    insere_celula_viva(matriz, insere_i, insere_j)
    print_matriz(matriz)


print('----- INICIEI ------')
print_matriz(matriz)
print("""\n----- O jogo vai começar: ------\n""") 
numero = 0
while True:
    numero += 1
    print(f'\n{numero}ª vez:')
    roda_o_game(matriz)
    print_matriz(matriz)
    time.sleep(.5)

