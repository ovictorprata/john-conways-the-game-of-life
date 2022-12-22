def printar_matriz(array):
  print('-' * 20)
  for el in array:
    print(*el, sep='')
  print('-' * 20)

def cria_matriz(n_linhas, n_colunas):
  for i in range(0,n_linhas):
    matriz.append([])
    for j in range(0, n_colunas):
      matriz[i].append(0)
  printar_matriz(matriz)

def continuar_o_jogo(continuar, pos_linha=0, pos_coluna=0):
  while continuar == 's':
    print('-' * 20)
    if continuar == 's':
      # pos_row = int(input('Insira a posição da linha: '))
      # pos_column = int(input('Insira a posição da coluna: '))
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
  array[i_row][j_column] = '#'

def contador_de_vizinhos(par_i, par_j):
  cont_vizinhos = 0 
  for cont_i in range(par_i-1, par_i+2):
    for cont_j in range(par_j-1, par_j+2):
      try:
        if matriz[cont_i][cont_j] == '#':
          cont_vizinhos += 1
      except IndexError:
        cont_vizinhos += 0
  
  cont_vizinhos -= 1 #programa considera o próprio elemento

  if cont_vizinhos <=1 or cont_vizinhos >= 4:
    matriz[par_i][par_j] = '0'
  else:
    matriz[par_i][par_j] = '#'


def roda_o_game(matriz):
  n_vizinhos = 0
  matriz_teste = matriz

  # TEM QUE EXCLUIR A BEIRADAS
  for i in range(0, rows):
    for j in range(0, columns):
      contador_de_vizinhos(i, j)
  printar_matriz(matriz)

# --------------- FIM DAS FUNÇÕES


matriz = []
matriz_teste = []
linha = []
posicoes_para_inverter = []
n_vizinhos = 0

rows = 3
columns = 3

cria_matriz(3,3)

insere_celula_viva(matriz, 1, 2)
insere_celula_viva(matriz, 2, 2)
insere_celula_viva(matriz, 2, 3)

printar_matriz(matriz)

roda_o_game(matriz)





































# rows =  int(input('Insira o número de linhas da matriz: '))
# columns =  int(input('Insira o número de colunas da matriz: '))