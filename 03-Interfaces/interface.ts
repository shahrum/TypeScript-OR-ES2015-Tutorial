interface RectangleOptions{
    width: number;
    length: number;

    //define optional parameter
    height ?: number;
}

function drawRectangle(options:RectangleOptions){
    let width = options.width;
    let length = options.length;

    if(options.height!=null){
        let height= options.height;
        //draw a 3D recctangle
    }

    //draw a 2D recctangle
}

drawRectangle({
    width : 100,
    length : 50,
    height  : 105
})