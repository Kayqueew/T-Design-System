import { colors } from '@kayque-ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  // o entries vai pecorrer todas as cores, no caso são objetos onde a chave é o nome da cor e o valor é o hexadecimal da cor
  // como o Object.entries retonar um array com varios array dentro onde a primeira posição do array (index 0) é chave e o (index 1) é o valor
  // assim da pra usar o map e vai desestruturar ele, agora o key é nome e o color a cor
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
