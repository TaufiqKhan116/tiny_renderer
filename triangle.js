import { putPixel, interPolate, drawLine } from "./line.js";

export function drawwireframeTriangle(P0, P1, P2, color, context){
    
    drawLine(P0, P1, color, context);
    drawLine(P1, P2, color, context);
    drawLine(P2, P0, color, context);
}

export function DrawFilledTriangle(P0, P1, P2, color, context){

    // Sort the points y0 <= y1 <= y2
    if (P1.y < P0.y){
        console.log("swap1!")
        var temp = P0;
        P0 = P1;
        P1 = temp;
    }

    if (P2.y < P1.y){
        console.log("swap1!")
        var temp = P1;
        P1 = P2;
        P2 = temp;
    }

    if (P2.y < P0.y){
        console.log("swap1!")
        var temp = P0;
        P0 = P2;
        P2 = temp;
    }

    // Compute the x coordinates of the triangle edges
    
    var x01 = interPolate(P0.y, P0.x, P1.y, P1.x);
    console.log(x01)
    var x12 = interPolate(P1.y, P1.x, P2.y, P2.x);
    console.log(x12)
    var x02 = interPolate(P0.y, P0.x, P2.y, P2.x);
    console.log(x02)

    
    x01.pop();
    console.log(x01)

    // Concatenate the short sides

    var x012 = x01.concat(x12);
    console.log(x012)

    // Determine which is left and which is right

    var x_left = [];
    var x_right = [];

    var mid = Math.floor( x012.length / 2 );
    console.log(mid)

    if( x02[mid] < x012[mid] ){
        console.log("Condition")
        x_left = x02;
        x_right = x012;
        console.log(x_left)
        console.log(x_right)

    } else {

        x_left = x012;
        x_right = x02;

    }

    // Draw the horizontal segments

    for(var y = P0.y; y <= P2.y; y++){
        for(var x = x_left[y - P0.y]; x <= x_right[y - P0.y]; x++){
            putPixel(x, y, color, context);
        }
    }

}