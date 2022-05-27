import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {ChartBox} from './style'

const Charts = ({data})=>{
    const { country, casesPerOneMillion, deathsPerOneMillion, testsPerOneMillion, totalTests, cases, deaths } = data;

    const dadosChart = [casesPerOneMillion, deathsPerOneMillion, testsPerOneMillion]

    const labels = [ 'Casos / Milhão Hab.', 'Óbitos / Milhão Hab.', 'Testes / Milhão Hab.' ]
    
    const chartData =  {
        labels: labels,
        datasets: [{
                label: `Dados Covid19 - ${country}`,
                data: dadosChart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',

                ],
                borderWidth: 3,
                borderRadius: 3,
            }],
    };
    const config = {
        options: {
            scales: {
                myScale: {
                    type: 'logarithmic',
                    position: 'right', 
                }
            }
        }, 
    };

    return(
        <ChartBox sx={{boxShadow: 24 }}>
            <div className="chart">
                <Bar
                data={chartData}
                options={config}
                />
            </div>
        </ChartBox>
    )  
}

export default Charts;