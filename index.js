
const createGraphs = async () => {
    const rawData = await fetch("getRawdata.json")
    const data = await rawData.json()
    return data


}
// plotting the graph for first problem (match played every year)
const graph1 = async () => {
    const data = await createGraphs()
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data[0]),
            datasets: [{
                label: 'Matches Played Per Year',
                data: Object.values(data[0]),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });

}
graph1()

//plotting the graph for problem 2

const graph2 = async () => {

    const data = await createGraphs()
    let select = document.querySelector('#years')



    Object.keys(data[1]).forEach(year => {
        let option = document.createElement('option')
        option.textContent = year;
        option.value = year;
        select.append(option)
    })
    let chartInstance;
    select.addEventListener("change", (e) => {
        let year = e.target.value
        let graphYear = data[1][year]
        // console.log(graphYear)


        const ctx = document.querySelector('#myChart2');
        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(graphYear),
                datasets: [{
                    label: 'Matches Won Per Year',
                    data: Object.values(graphYear),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        '#A5543C',
                        '#8A2BE2',
                        '#FF5800',
                        '#4B0082',
                        '#431426',
                        '#075264'



                    ],
                    hoverOffset: 4
                }]
            }
        });
    })





}

graph2()
// Graph plot for problem3
const graph3 = async () => {
    const data = await createGraphs()
    let Extra_runs2016 = data[2]

    const ctx = document.querySelector('#myChart3');
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: Object.keys(Extra_runs2016),
            datasets: [{
                label: 'Extra Runs',
                data: Object.values(Extra_runs2016),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    '#A5543C',
                    '#8A2BE2',
                    '#FF5800',
                    '#4B0082',
                    '#431426',
                    '#075264'
                ]
            }]
        }
    });

}
graph3()

const graph4 = async () => {
    const data = await createGraphs()
    console.log(data[3])
}
graph4()




