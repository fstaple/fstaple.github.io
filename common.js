/*
    FSTAPLE
    Free STatistics APpLEt

    Public domain.
    Free forever.

    This JavaScript is common to many stapplets, and is therefore included with every stapplet.
*/

// chart element and chart variable
window.ctx = document.getElementById("chart");
window.chart = undefined;

// check if input is number
function input_validate(input) {
    // +input will return NaN if not a number, but whitespace is considered 0 so we filter that out
    return !isNaN(+input) && input.split(" ").join("") !== "";
}

// line chart plotter        
function plot_line_chart(data) {
    // if there is a chart, we should destroy it
    if (chart !== undefined) chart.destroy();
    // generate a new color
    let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    // set the chart to a new chart with what we want
    chart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [{
                borderColor: color,
                backgroundColor: color,
                label: "Data",
                data
            }],
            fill: false,
            tension: 0.1
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: "linear",
                    position: "right",
                    min: data[0].x,
                    max: data[data.length - 1].x
                }
            },
            maintainAspectRatio: false
        }
    });
}

// normal distribution data generator
function generate_normal_chart(mean, std) {
    // make the width nice 
    const low = Math.floor(jStat.normal.inv(0.001, mean, std));
    const high = Math.ceil(jStat.normal.inv(0.999, mean, std));
    // calculate our step
    const step = (high - low) / 200;
    // this is where we store our data
    let data_array = [];
    // just get each datapoint
    for (let i = low; i <= high; i += step) {
        data_array.push({
            x: i,
            y: jStat.normal.pdf(i, mean, std)
        });
    }
    // return the array
    return data_array;
}

// various normal distribution area functions
const normal_distribution_area_left = jStat.normal.cdf;

function normal_distribution_area_right(x, mean, std) {
    // for the area on the right, we just return the area not on the left
    return 1 - normal_distribution_area_left(x, mean, std);
}

function normal_distribution_area_region(a, b, mean, std) {
    // for the area in a region, we subtract the area to the left of the leftmost point from the area to the right of the rightmost point
    return normal_distribution_area_left(b, mean, std) - normal_distribution_area_left(a, mean, std);
}

function normal_distribution_area_outside_region(a, b, mean, std) {
    // to find the area outside of a region, we add the area to the right of the rightmost point to the area to the left of the leftmost point
    return normal_distribution_area_right(b, mean, std) + normal_distribution_area_left(a, mean, std);
}

const inv_normal_distribution_area_left = jStat.normal.inv;

function inv_normal_distribution_area_right(x, mean, std) {
    // to find the boundary value for a right-tail area of x, we just find the boundary value for a left-tail area of 1 minus x
    return inv_normal_distribution_area_left(1 - x, mean, std);
}

function inv_normal_distribution_area_central(x, mean, std) {
    /*
        a somewhat detailed explanation of how this works:
        the boundary values of a central area x are just the
        left boundary value of (1 - x) / 2 and the right
        boundary value of (1 - x) / 2. this is because the area
        outside of the center is 1 - x, since this is a
        probability density function, and the integral of a
        probability density function from -infinity to infinity
        is 1. because a normal distribution is symmetric, the
        area outside of our central area is split evenly on each
        side, allowing for the method in the first sentence. to
        increase efficiency, we find the distance of the left
        boundary value of (1 - x) / 2 from the mean and then
        subtract distance from the mean for the left boundary and
        then add it to the mean for the right boundary.
    */
    const distance = mean - inv_normal_distribution_area_left((1 - x) / 2, mean, std)
    return [mean - distance, mean + distance];
}