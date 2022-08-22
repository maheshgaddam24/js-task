Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 20;
Chart.defaults.color = "black";

const data = {
    labels: [2016,2017,2018,2019,2020,2021],
    datasets: [{
      label: 'Audi',
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      data: [21, 18, 27, 22, 30, 28]
    },
    {
        label: "BMW",
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        data: [24, 14, 20, 25, 18, 27]
      }]
  };

  
  var chartOptions = {
    scales: {
        r: {
          pointLabels: {
            font: {
              size:20
            }
          }
        }
      }
  };

const myChart = new Chart(
    document.getElementById('myChart'),{
    type: 'radar',
    data: data,
    options: chartOptions

    }
  );