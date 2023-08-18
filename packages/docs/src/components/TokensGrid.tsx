/* pra fazer a estrutura visual base dos tokens */
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string> // vai falar que esse objeto tem uma chave que é string e o valor tbm
  hasRemValue?: boolean // pra colocar os valores em pixel
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {/* se essa coluna existir vai colocar mais uma coluna */}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td> // pra colocar os valores em pixel // pesquisar mais sobre esse reclace
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
