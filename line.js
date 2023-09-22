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
           var tmp = p0
           p0 = p1
           p1 = tmp
        }
        
        var m = (p1.x - p0.x) / (p1.y - p0.y)
        for(var y = p0.y, x = p0.x; y <= p1.y; x += m, y++){
            putPixel(x, y, color, context, Cw, Ch, pixelSize)
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
        
        var m = (p1.y - p0.y) / (p1.x - p0.x)
        console.log(m)
        console.log(p0)
        console.log(p1)
        for(var x = p0.x, y = p0.y; x <= p1.x; y += m, x++){
            putPixel(x, y, color, context, Cw, Ch, pixelSize)
        }
    }
}