/*
    fstaple // free statistics for everyone

    We won't be using jStat here.
    All of the data here was pre-calculated by Steve Cox (@realstevecox).
*/

// data. it's much too large to actually be pretty. sorry
const vaxxed_data = { A: [{ infections: { unvaccinated: 100, vaccinated: 0 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 1000, vaccinated: 0 }, hospitalizations: { unvaccinated: 1, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 10000, vaccinated: 0 }, hospitalizations: { unvaccinated: 11, vaccinated: 0 }, deaths: { unvaccinated: 1, vaccinated: 0 } }, { infections: { unvaccinated: 100000, vaccinated: 0 }, hospitalizations: { unvaccinated: 110, vaccinated: 0 }, deaths: { unvaccinated: 17, vaccinated: 0 } }, { infections: { unvaccinated: 1000000, vaccinated: 0 }, hospitalizations: { unvaccinated: 1100, vaccinated: 0 }, deaths: { unvaccinated: 170, vaccinated: 0 } }, { infections: { unvaccinated: 10000000, vaccinated: 0 }, hospitalizations: { unvaccinated: 11000, vaccinated: 0 }, deaths: { unvaccinated: 1700, vaccinated: 0 } }, { infections: { unvaccinated: 100000000, vaccinated: 0 }, hospitalizations: { unvaccinated: 110000, vaccinated: 0 }, deaths: { unvaccinated: 17000, vaccinated: 0 } }, { infections: { unvaccinated: 1000000000, vaccinated: 0 }, hospitalizations: { unvaccinated: 1100000, vaccinated: 0 }, deaths: { unvaccinated: 170000, vaccinated: 0 } }], B: [{ infections: { unvaccinated: 62, vaccinated: 13 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 465, vaccinated: 97 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 3478, vaccinated: 724 }, hospitalizations: { unvaccinated: 4, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 26052, vaccinated: 5429 }, hospitalizations: { unvaccinated: 29, vaccinated: 1 }, deaths: { unvaccinated: 4, vaccinated: 0 } }, { infections: { unvaccinated: 195182, vaccinated: 40673 }, hospitalizations: { unvaccinated: 215, vaccinated: 6 }, deaths: { unvaccinated: 33, vaccinated: 0 } }, { infections: { unvaccinated: 1462301, vaccinated: 304725 }, hospitalizations: { unvaccinated: 1609, vaccinated: 43 }, deaths: { unvaccinated: 248, vaccinated: 4 } }, { infections: { unvaccinated: 10955561, vaccinated: 2282998 }, hospitalizations: { unvaccinated: 12051, vaccinated: 320 }, deaths: { unvaccinated: 1862, vaccinated: 30 } }, { infections: { unvaccinated: 82079065, vaccinated: 17104218 }, hospitalizations: { unvaccinated: 90286, vaccinated: 2395 }, deaths: { unvaccinated: 13953, vaccinated: 222 } }], C: [{ infections: { unvaccinated: 35, vaccinated: 22 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 200, vaccinated: 126 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 1141, vaccinated: 720 }, hospitalizations: { unvaccinated: 1, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 6513, vaccinated: 4113 }, hospitalizations: { unvaccinated: 7, vaccinated: 1 }, deaths: { unvaccinated: 1, vaccinated: 0 } }, { infections: { unvaccinated: 37191, vaccinated: 23483 }, hospitalizations: { unvaccinated: 41, vaccinated: 3 }, deaths: { unvaccinated: 6, vaccinated: 0 } }, { infections: { unvaccinated: 212359, vaccinated: 134090 }, hospitalizations: { unvaccinated: 234, vaccinated: 19 }, deaths: { unvaccinated: 36, vaccinated: 1 } }, { infections: { unvaccinated: 1212572, vaccinated: 765652 }, hospitalizations: { unvaccinated: 1333, vaccinated: 107 }, deaths: { unvaccinated: 206, vaccinated: 10 } }, { infections: { unvaccinated: 6923784, vaccinated: 4371875 }, hospitalizations: { unvaccinated: 7616, vaccinated: 612 }, deaths: { unvaccinated: 1177, vaccinated: 57 } }], D: [{ infections: { unvaccinated: 20, vaccinated: 27 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 93, vaccinated: 128 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 442, vaccinated: 601 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 2086, vaccinated: 2837 }, hospitalizations: { unvaccinated: 2, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 9846, vaccinated: 13390 }, hospitalizations: { unvaccinated: 11, vaccinated: 1 }, deaths: { unvaccinated: 1, vaccinated: 0 } }, { infections: { unvaccinated: 46472, vaccinated: 63202 }, hospitalizations: { unvaccinated: 51, vaccinated: 9 }, deaths: { unvaccinated: 8, vaccinated: 1 } }, { infections: { unvaccinated: 219348, vaccinated: 298313 }, hospitalizations: { unvaccinated: 241, vaccinated: 42 }, deaths: { unvaccinated: 37, vaccinated: 4 } }, { infections: { unvaccinated: 1035322, vaccinated: 1408038 }, hospitalizations: { unvaccinated: 1138, vaccinated: 197 }, deaths: { unvaccinated: 176, vaccinated: 18 } }], E: [{ infections: { unvaccinated: 10, vaccinated: 30 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 40, vaccinated: 122 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 165, vaccinated: 504 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 669, vaccinated: 2047 }, hospitalizations: { unvaccinated: 1, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 2716, vaccinated: 8311 }, hospitalizations: { unvaccinated: 3, vaccinated: 1 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 11027, vaccinated: 33743 }, hospitalizations: { unvaccinated: 12, vaccinated: 5 }, deaths: { unvaccinated: 2, vaccinated: 0 } }, { infections: { unvaccinated: 44770, vaccinated: 136996 }, hospitalizations: { unvaccinated: 49, vaccinated: 19 }, deaths: { unvaccinated: 8, vaccinated: 1 } }, { infections: { unvaccinated: 181766, vaccinated: 556204 }, hospitalizations: { unvaccinated: 200, vaccinated: 77 }, deaths: { unvaccinated: 31, vaccinated: 7 } }], F: [{ infections: { unvaccinated: 1, vaccinated: 33 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 3, vaccinated: 114 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 12, vaccinated: 394 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 41, vaccinated: 1367 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 141, vaccinated: 4739 }, hospitalizations: { unvaccinated: 0, vaccinated: 0 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 488, vaccinated: 16426 }, hospitalizations: { unvaccinated: 0, vaccinated: 2 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 1691, vaccinated: 56932 }, hospitalizations: { unvaccinated: 2, vaccinated: 8 }, deaths: { unvaccinated: 0, vaccinated: 0 } }, { infections: { unvaccinated: 5862, vaccinated: 197325 }, hospitalizations: { unvaccinated: 6, vaccinated: 28 }, deaths: { unvaccinated: 1, vaccinated: 0 } }] };
const populations = ["A", "B", "C", "D", "E", "F"];

// chart variable
window.chart = undefined;

// getting chart colors
const get_chart_color = () => `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
let border_colors = [];
let background_colors = [];
for (let i = 0; i < 16; i++) border_colors.push(get_chart_color());
for (let i = 0; i < 16; i++) background_colors.push(border_colors[i].replace("rgb", "rgba").replace(")", ", 0.2)"));

// getting data
// dataset: one of infections, hospitalizations, deaths, pct. unvax
// type: one of unvaccinated, vaccinated, total
function get_data(population, week, dataset, type) {
    dataset = dataset.toLowerCase();
    // get data for the population
    let data_for_population = vaxxed_data[population];
    // get data for the week
    let data_for_week = data_for_population[week];
    if (dataset === "pct. unvax") return (data_for_week["infections"]["unvaccinated"] / (data_for_week["infections"]["vaccinated"] + data_for_week["infections"]["unvaccinated"])) * 100;
    // get data for dataset
    let data_for_dataset = data_for_week[dataset];
    // get data for type
    let data_for_type = null;
    // if we're not getting total
    if (type !== "total") data_for_type = data_for_dataset[type];
    else data_for_type = data_for_dataset["unvaccinated"] + data_for_dataset["vaccinated"];
    // yes this is extremely long-winded but i need an excuse to look like i'm working in AP comp sci
    return data_for_type;
}

// oh my god it's a barchart it's so good wow!!!
let chart = [];

function plot_bar_chart(datasets, chartnum, labels) {
    let chart_ref = chart[chartnum - 1];
    if (chart_ref !== null && chart_ref !== undefined) chart_ref.destroy();
    window.ctx = document.getElementById(`chart${chartnum}`);
    chart[chartnum - 1] = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            }
        }
    });
}

// wow!!! chart!!! wow!!! chart!!! wow!!! chart!!!
function plot_bar_charts() {
    // for each dataset
    let dataset_names = ["infections", "hospitalizations", "deaths"];
    for (let i = 0; i < 3; i++) {
        let labels = [...populations];
        let datasets = [];
        for (let j = 0; j < 8; j++) {
            let vaccinated_data = [];
            let unvaccinated_data = [];
            for (let k = 0; k < 6; k++) {
                vaccinated_data.push(get_data(populations[k], j, dataset_names[i], "vaccinated"));
                unvaccinated_data.push(get_data(populations[k], j, dataset_names[i], "unvaccinated"));
            }
            datasets.push({
                borderColor: border_colors[j * 2],
                backgroundColor: background_colors[j * 2],
                label: `Week ${j + 1} Vaccinated`,
                borderWidth: 1,
                data: vaccinated_data
            });
            datasets.push({
                borderColor: border_colors[(j * 2) + 1],
                backgroundColor: background_colors[(j * 2) + 1],
                label: `Week ${j + 1} Unvaccinated`,
                borderWidth: 1,
                data: unvaccinated_data
            });
        }
        plot_bar_chart(datasets, i + 1, labels);
    }
}

plot_bar_charts();