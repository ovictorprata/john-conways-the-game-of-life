<template>
  <div>
    <h1>The Game of Life - Coway's Game</h1>
    <table>
      <tr v-for="(line, i) in grid" :key="i">
        <td v-for="(cell, j) in line" :key="j" :class="{vivo: cell === 1, morto: cell === 0}"></td>
      </tr>
    </table>
  </div>
</template>

<script>
function _count_vizinhos_vivos(i,j,grid){
  const [M,N] = [grid.length, grid[0].length]
   const varia_coord_vizinhos = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1], [0,1],
    [1,-1], [1,0], [1,1]
   ]
   let coord_vizinhos = []
   for(let k = 0; k < varia_coord_vizinhos.length; k++){
      coord_vizinhos.push([i + varia_coord_vizinhos[k][0],j + varia_coord_vizinhos[k][1]])
   }
  let coord_vizinhos_vivos = coord_vizinhos.filter((e) => e[0] >= 0 && e[0] < M && e[1] >= 0 && e[1] < N && grid[e[0]][e[1]] == 1)
  return coord_vizinhos_vivos.length
}
function _proximoTabuleiro(grid) {
  const [M,N] = [grid.length, grid[0].length]
  let novoGrid = new Array(M)
  for (let i=0; i<M; i++) {
    novoGrid[i] = new Array(N).fill(0)
  }
  for (let i=0; i<M; i++) {
    for (let j=0; j<N; j++) {
      let vizinhosVivos = _count_vizinhos_vivos(i,j,grid)
      if (grid[i][j] == 1){
        if (vizinhosVivos == 2 || vizinhosVivos == 3){
          novoGrid[i][j] = 1
        }
        else {
          novoGrid[i][j] = 0
        }
      } else {
        if(vizinhosVivos == 3){
          novoGrid[i][j] = 1
        } else {
          novoGrid[i][j]= 0
        }
      }
  }
  }
  return novoGrid
}
export default {
  name: 'LifeGame',
  data(){
    return {
      grid: [

        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
        [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
        [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
        [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
      ]
    }
  },
  methods: {
    nextStep() {
      this.grid = _proximoTabuleiro(this.grid)
    },
  },
  mounted(){
    setInterval(()=>{
      this.nextStep()
    }, 1000)
  }
}
</script>

<style>
 td {
    border: 1px purple solid;
    margin: 0;
    padding: 0;
 }

 td {
    height: 30px;
    width: 30px;
 }
 table{
    margin-left: auto;
    margin-right: auto;
    border-spacing:0; 
    border-collapse: collapse; 
 }

 .vivo {
  background: yellow;
 }

  .morto {
  background: black;
 }
</style>