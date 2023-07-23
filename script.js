function updateEmployeeContribution() {
  var employeeSlider = document.getElementById("employee-contribution-slider");
  var employeeValue = document.getElementById("employee-contribution-value");
  employeeValue.textContent = employeeSlider.value + "%";
}

function updateRetirementAge() {
  var retirementSlider = document.getElementById("retirement-age-slider");
  var retirementValue = document.getElementById("retirement-age-value");
  retirementValue.textContent = retirementSlider.value + "%";
}

var employeeSlider = document.getElementById("employee-contribution-slider");
employeeSlider.addEventListener("input", updateEmployeeContribution);

var retirementSlider = document.getElementById("retirement-age-slider");
retirementSlider.addEventListener("input", updateRetirementAge);
var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        label: "Employer",
        data: [10, 15, 20, 25, 30, 35, 40],
        backgroundColor: "#0800A3",
        borderColor: "#0800A3",
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.6,
        stacked: true,
      },
      {
        label: "Employee",
        data: [5, 10, 15, 20, 25, 30, 35],
        backgroundColor: "#4935FF",
        borderColor: "#4935FF",
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.6,
        stacked: true,
      },
      {
        label: "Total Interest",
        data: [5, 10, 15, 20, 25, 30, 35],
        backgroundColor: "#85AFFF",
        borderColor: "#85AFFF",
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.6,
        stacked: true,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Contributions Over Time",
      },
    },
    indexAxis: "x",
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 0) {
              return "$" + value;
            } else {
              return "$" + value * 100;
            }
          },
          stepSize: 5,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 0,
      },
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
