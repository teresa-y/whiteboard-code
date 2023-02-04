window.addEventListener('load', () => {
    console.log("page loaded");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillRect(100,100,200,200);

    let painting = false;

    function startPos(){
        painting=true;
    }
    function endPos(){
        painting=false;
    }

    function draw(e){
        console.log("draw");
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPos);
    canvas.addEventListener("mouseup", endPos);
    canvas.addEventListener("mousemove", draw);

});