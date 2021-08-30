// distribution plotter
function plot_distribution() {
    // get value
    const dof = $("#dof").val();
    // check if it's a number
    if (!input_validate(dof)) {
        // just alert the user and don't plot anything
        alert("Your DOF is not a number.");
        return;
    }
    // make sure dof is >= 1 to prevent site from freezing
    else if (+dof < 1) {
        // alert the user and don't plot anything
        alert("Your DOF must be over 1.");
        return;
    }
    // now we can plot the line chart
    plot_line_chart(generate_chart_data(jStat.chisquare, +dof));
}

// prompt to calculate
function calculation_prompt() {
    // get value
    let dof = $("#dof").val();
    // check if it's a number
    if (!input_validate(dof)) {
        // just alert the user and don't calculate anything
        alert("Your DOF is not a number.");
        return;
    }
    // make sure dof is >= 1 to prevent site from freezing
    else if (+dof < 1) {
        // alert the user and don't calculate anything
        alert("Your DOF must be over 1.");
        return;
    }
    // set it to a number
    dof = +dof;
    let input = null;
    // prompt the user to input which mode they want to enter
    input = get_input(`Which operation would you like to run?
1. Calculate an area under the curve
2. Calculate a value corresponding to an area
Click cancel to cancel.`, (data_in) => data_in === "1" || data_in === "2");
    // return if they cancelled
    if (input === null) return;
    // if the user wants to calculate an area under the curve:
    else if (input === "1") {
        // find out what type of area calculation they want
        input = get_input(`Which calculation would you like to run?
1. Area between two values
2. To the left of a value
3. To the right of a value
4. Outside of a region
Click cancel to cancel.`, (data_in) => data_in === "1" || data_in === "2" || data_in === "3" || data_in === "4");
        // return if they cancel
        if (input === null) return;
        // set our calculation type
        let calculation = input;
        // for area between two values and outside of a region
        if (input === "1" || input === "4") {
            input = get_input(`Please enter the two values of the region (separated by spaces). Click cancel to cancel.`, (data_in) => {
                // otherwise it'll error
                if (data_in === undefined || data_in === null) return false;
                // since we use input.split(" ") a lot
                let split = data_in.split(" ");
                // our split input should have two numbers, both of those numbers should actually be numbers, and the first number should be less than the second number
                return split.length === 2 && input_validate(split[0]) && input_validate(split[1]) && +split[0] < +split[1];
            });
            // return if user cancels
            if (input === null) return;
            // split the input
            let split = input.split(" ");
            // set our region start and end
            let region_start = +split[0];
            let region_end = +split[1];
            // if we're calculating the area in between two values
            if (calculation === "1") {
                alert(`Area (${region_start} to ${region_end}): ${chi_square_area_region(region_start, region_end, dof) * 100}%`);
            }
            // if we're calculating the area outside of two values
            else if (calculation === "4") {
                alert(`Area (outside of ${region_start} to ${region_end}): ${chi_square_area_outside_region(region_start, region_end, dof) * 100}%`);
            }
        }
        // for left-tail and right-tail area
        else {
            // prompt for our boundary
            input = get_input("Please enter the value of the boundary. Click cancel to cancel.", input_validate);
            // if user cancelled, return
            if (input === null) return;
            // turn our input into a number
            input = +input;
            // if we're calculating the area to the left of a value
            if (calculation === "2") {
                alert(`Area (to the left of ${input}): ${chi_square_area_left(input, dof) * 100}%`);
            }
            // if we're calculating the area to the right of a value
            else {
                alert(`Area (to the right of ${input}): ${chi_square_area_right(input, dof) * 100}%`);
            }
        }
    }
    // if the user wants to calculate a value corresponding to a curve:
    else if (input === "2") {
        // find out what type of area calculation they want
        input = get_input(`Which calculation would you like to run?
1. Left-tail boundary value
2. Right-tail boundary value
3. Central boundary value
Click cancel to cancel.`, (data_in) => data_in === "1" || data_in === "2" || data_in === "3");
        // return if they cancel
        if (input === null) return;
        // set our calculation type
        let calculation = input;
        // get input
        input = get_input(`Please enter the area. Click cancel to cancel.`, (data_in) => input_validate(data_in) && +data_in <= 1 && +data_in >= 0);
        // return if user cancels
        if (input === null) return;
        // turn our input into a number through unary plus
        input = +input;
        // if we're calculating the left-tail boundary value
        if (calculation === "1") {
            alert(`Value (left-tail for area ${input}): ${inv_chi_square_area_left(input, dof)}`);
        }
        // if we're calculating the right-tail boundary value
        else if (calculation === "2") {
            alert(`Value (right-tail for area ${input}): ${inv_chi_square_area_right(input, dof)}`);
        }
        // if we're calculating the central boundary value
        else {
            // we only want to calculate the central area once
            let central_area = inv_chi_square_area_central(input, dof);
            alert(`Value (central for area ${input}): ${central_area[0]} <= x <= ${central_area[1]}`);
        }
    }
}