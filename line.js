export function putPixel(x, y, color, context, Cw, Ch, pixelSize){
    // Default argument
    if(Cw == undefined) Cw = 400
    if(Ch == undefined) Ch = 400
    if(pixelSize == undefined) pixelSize = 2

    var Sx = (Cw / 2) + x;
    var Sy = (Ch / 2) - y;

    context.fillStyle = color;
    context.fillRect(Sx, Sy, pixelSize, pixelSize);
}

export function interPolate(i0, d0, i1, d1){

    if(i0 == i1){

        return [d0]

    } else{

        var values = []
        var a = (d1 - d0) / (i1 - i0)
        var d = d0
        
        for(var i = i0; i <= i1; i++){
            values.push(d)
            d += a
        }

        return values
    }
}

export function drawLine(p0, p1, color, context, Cw, Ch, pixelSize){
    // Default argument
    if(Cw == undefined) Cw = 400
    if(Ch == undefined) Ch = 400
    if(pixelSize == undefined) pixelSize = 2

    var dx = p1.x - p0.x
    var dy = p1.y - p0.x

    if(Math.abs(dx) < Math.abs(dy)) {
        // vertical-ish line
        if(p0.y > p1.y){
        // Swap!
           var tmp = p0
           p0 = p1
           p1 = tmp
        }

        var y0 = p0.y;
        var y1 = p1.y;
        var x0 = p0.x;
        var x1 = p1.x;

        var xs = interPolate(y0, x0, y1, x1)
        for(var ys = y0; ys <= y1; ys++){
            putPixel(xs[ys - y0], ys, color, context, Cw, Ch, pixelSize)
        }
        
    } else {

        // horizontal-ish line

        console.log("horizontal line")
        if(p0.x > p1.x){
            console.log("swap!")
            var tmp = p0
            p0 = p1
            p1 = tmp
        }
        console.log("horizontal line")
        if(p0.x > p1.x){
            console.log("swap!")
            var tmp = p0
            p0 = p1
            p1 = tmp
        }

    //  using interpolation

        var y0 = p0.y;
        var y1 = p1.y;
        var x0 = p0.x;
        var x1 = p1.x;

        var ys = interPolate(x0, y0, x1, y1)
        for(var xs = x0; xs <= x1; xs++){
            putPixel(xs, ys[xs - x0], color, context, Cw, Ch, pixelSize)
        }
    }
}