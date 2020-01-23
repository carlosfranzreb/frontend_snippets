/**
 * The function arrow() draws an arrow in the given canvas. Start point, end point and width
 * are given as parameters. The following functions call the arrow() function with set directions.
 * 
 * All written in vanilla JS.
 */


function arrow(canvas, from_x, from_y, to_x, to_y, width) {
    console.log(width);
    console.log(get_offset(width));
    let angle = Math.atan2(to_y-from_y, to_x-from_x);  // Angle of the arrow.
    let headlen = width + (33 - width / 3); // Length of head in pixels
    let head_offset = Math.PI / get_offset(width);  // angle offset between line and head.
    let head_base = to_y - headlen * Math.sin(angle - head_offset);  // Where the head starts (y-coordinate).
    let left_corner = to_x - headlen * Math.cos(angle - head_offset);  // Left corner of the head.
    let right_corner = to_x - headlen * Math.cos(angle + head_offset);  // Right corner of the head.
    // Draw the line of the arrow:
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = "#e8ad00";
    ctx.lineWidth = width;
    ctx.moveTo(from_x, from_y);
    ctx.lineTo(to_x, head_base);
    ctx.stroke();
    // Draw the head of the arrow:
    ctx.lineWidth = 1;
    ctx.fillStyle = "#e8ad00";
    ctx.moveTo(to_x, to_y);
    ctx.lineTo(left_corner, head_base);
    ctx.moveTo(to_x, to_y);
    ctx.lineTo(right_corner, head_base);
    ctx.lineTo(right_corner, head_base);
    ctx.lineTo(left_corner, head_base);
    ctx.fill();
}


function down_arrow(canvas, width) {
    let x = canvas.width / 2;
    let from_y = 0;
    let to_y = canvas.height;
    arrow(canvas, x, from_y, x, to_y, width);
}

function up_arrow(canvas, width) {
    let x = canvas.width / 2;
    let from_y = canvas.height;
    let to_y = 0;
    arrow(canvas, x, from_y, x, to_y, width);
}

function right_arrow(canvas, width) {
    let y = canvas.height / 2;
    let from_x = 0;
    let to_x = canvas.width;
    arrow(canvas, from_x, y, to_x, y, width);
}


function get_offset(width) {
    switch (true) {
        case (width < 3):
            return 10;
        case (width < 15):
            return 8;
        case (width < 40):
            return 5;
        case (width < 70):
            return 4;
        default:
            return 3;
    }
}
