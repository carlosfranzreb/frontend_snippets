/**
 * The function arrow() draws an arrow in the given canvas. Start point, end point and width
 * are given as parameters. 
 * 
 * The following functions are usage examples: they call the arrow() function with set directions.
 * 
 * All written in vanilla JS.
 */


function arrow(canvas, from_x, from_y, to_x, to_y, width) {
    /**
     * Draws an arrow according to the given parameters in the given canvas.
     * All coordinates should be given w.r.t the canvas, not the whole page.
     * 
     * Params:
     *     canvas: HTML canvas element where the arrow should be drawn.
     *     from_x: x-coordinate (inside the canvas) where the arrow should start.
     *     from_y: y-coordinate (inside the canvas) where the arrow should start.
     *     to_x: x-coordinate (inside the canvas) where the arrow should end.
     *     to_y: y-coordinate (inside the canvas) where the arrow should end.
     *     width: percentage of the total width (value -int or float- between 0 and 100).
     */
    let angle = Math.atan2(to_y - from_y, to_x - from_x); // Angle of the arrow.
    let head_length = width + (33 - width / 3); // Length of head in pixels
    let head_offset = Math.PI / get_offset(width); // angle offset between line and head.
    let left_corner = [
        to_x - head_length * Math.cos(angle - head_offset),
        to_y - head_length * Math.sin(angle - head_offset)
    ]; // Left corner of the head.
    let right_corner = [
        to_x - head_length * Math.cos(angle + head_offset),
        to_y - head_length * Math.sin(angle + head_offset)
    ]; // Right corner of the head.
    let head_base = [
        (right_corner[0] + left_corner[0]) / 2,
        (right_corner[1] + left_corner[1]) / 2
    ]; // Where the head starts.

    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    // Draw the line of the arrow:
    ctx.lineWidth = width;
    ctx.strokeStyle = "#e8ad00";
    ctx.moveTo(from_x, from_y);
    ctx.lineTo(head_base[0], head_base[1]);
    ctx.stroke();
    // Draw the head of the arrow:
    ctx.lineWidth = 1;
    ctx.fillStyle = "#e8ad00";
    ctx.moveTo(to_x, to_y);
    ctx.lineTo(left_corner[0], left_corner[1]);
    ctx.lineTo(right_corner[0], right_corner[1]);
    ctx.lineTo(to_x, to_y);
    ctx.fill();
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