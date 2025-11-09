// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Website Visitors',
      data: [120,200,150,300,250,400,350],
      borderColor: '#00bcd4',
      backgroundColor: 'rgba(0,188,212,0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {legend:{labels:{color:'#e0e0e0'}}},
    scales: {
      x: {ticks:{color:'#e0e0e0'},grid:{color:'rgba(255,255,255,0.1)'}},
      y: {ticks:{color:'#e0e0e0'},grid:{color:'rgba(255,255,255,0.1)'}}
    }
  }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Product A','Product B','Product C','Product D'],
    datasets: [{
      label: 'Sales',
      data: [50,75,150,100],
      backgroundColor: '#00bcd4'
    }]
  },
  options: {
    responsive: true,
    plugins: {legend:{labels:{color:'#e0e0e0'}}},
    scales: {
      x: {ticks:{color:'#e0e0e0'},grid:{color:'rgba(255,255,255,0.1)'}},
      y: {ticks:{color:'#e0e0e0'},grid:{color:'rgba(255,255,255,0.1)'}}
    }
  }
});
