function add_chart(labels, data, data2) {
    if (destr) {
      const chartInstance = Chart.getChart("myChart");
  
      // Destroy the chart.
      chartInstance.destroy();
    } else {
      destr = true;
    }
  
    const myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(0,0,255,0.5)",
            label: "Ваши деньги",
            data: data,
            fill: true,
            pointRadius:4,
          },
          {
            data: data2,
            borderColor: "rgba(255,0,0,0.1)",
            label: "0",
            fill: true,
            pointRadius:0,

          },
        ],
      },
      options: {
        responsive: true
    }
  });
}
