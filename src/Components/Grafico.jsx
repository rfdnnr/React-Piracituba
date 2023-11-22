
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';



const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [1, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [15, 6, 22, 40, 16],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1400, 1500, 3000, 5000, 2000],
  },
];

export default function Grafico() {
  return (
    <ChartContainer
      series={series}
      width={500}
      height={400}
      xAxis={[
        {
          id: 'years',
          data: ['17/08', '18/08', '19/08', '20/08', '21/08'],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Datas" position="bottom" axisId="years" />
      <ChartsYAxis label="Km/h (Vento)" position="left" axisId="eco" />
      
    </ChartContainer>
  );
}
