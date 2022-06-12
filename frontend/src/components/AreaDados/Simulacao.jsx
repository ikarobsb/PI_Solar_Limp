import { Chart as ChartJS, registerables } from 'chart.js'
import { Line, Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)
export default function Simulacao({ simulacao }) {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Septembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const mappedData = simulacao.geracaoMensal.map((data, i) => {
    return { x: meses[i], y: data }
  })

  /**
   * @type {import('chart.js/types/index.esm').ChartData}
   */
  const data = {
    datasets: [
      {
        label: 'Previsão de Geração',
        backgroundColor: '#F4BC33',
        borderColor: '#F4BC33',
        data: mappedData,
      },
    ],
  }

  return (
    <>
      <div className='simulacao'>
      
        <div className="grafico">
        <Line data={data} options={{ responsive: true ,color: '#2B4898', }}></Line>
        </div>
      </div>
    </>
  )
}
