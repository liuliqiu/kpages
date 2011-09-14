/**
   
**/
$(function(){
    var canvas = new Weibo.Graphic.Canvas("#canvas");
    
    var cube = new Weibo.Graphic.Cube({
        x:200,
        y:200,
        w:120,
        h:180,
        color:"#d1e8f9",
        v:{
            x:50, 
            y:20
        }
    });

    cube.MouseOver.Add(function(){
        console.log("cube over");
    });

    cube.MouseOut.Add(function(){
        console.log("cube out");
    });

    canvas.Draw(cube); 

    var cylinder = new Weibo.Graphic.Cylinder({
        x:700,
        y:200,
        r:80,
        rate:0.45,
        h:180,
        color:"#d1e8f9"
    });

    cylinder.MouseOver.Add(function(){
        console.log("cylinder over");
    });

    cylinder.MouseOut.Add(function(){
        console.log("cylinder out");
    });

    canvas.Draw(cylinder);

    var cylinder2 = new Weibo.Graphic.Cylinder({
        x:500,
        y:200,
        r:80,
        rate:0.45,
        h:180,
        color:"#0aaccc"
    }); 

    cylinder2.MouseOver.Add(function(){
        console.log("cylinder2 over");
    });

    cylinder2.MouseOut.Add(function(){
        console.log("cylinder2 out");
    });

    canvas.Draw(cylinder2);

    var sector = new Weibo.Graphic.Sector({
        x:900,
        y:200,
        r:80,
        rate:0.45,
        h:20,
        color:"#0aaccc"
    }); 

    sector.MouseOver.Add(function(){
        console.log("sector over");
    });

    sector.MouseOut.Add(function(){
        console.log("sector out");
    });
    
    canvas.Draw(sector);
})
