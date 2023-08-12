export default class view {
    constructor() {
        this.palitra = document.querySelector('.palitra')
        this.canvas = document.querySelector('.canvas')
        this.backgroundColor = window.getComputedStyle(document.querySelector('.canvas')).backgroundColor;
        this.ctx = document.querySelector('.canvas').getContext('2d');
        this.thicknessInput = document.querySelector('.thickness')
        this.eraser = document.querySelector('.eraser')
        this.fill = document.querySelector('.fill')
        this.restartbtn = document.querySelector('.restarting')
        this.currentColor = document.querySelector('.current-color')
    }

    canvasSize() {
        //  Устанавливаем размер холста
        this.canvas.setAttribute('width', window.innerWidth*0.995);
        this.canvas.setAttribute('height', window.innerHeight*0.8);
    }

    listenCanvas(callback) {
        this.canvas.addEventListener('mousedown', () => {
            this.canvas.onmousemove = (e) => callback(e)
            this.ctx.beginPath();
        })
        this.canvas.addEventListener("mouseup", () => this.canvas.onmousemove = null);
    }

    drawLine (x, y, color, thickness) {
        console.log(color)
        this.ctx.lineWidth = thickness
        this.ctx.strokeStyle = color
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }

    fillСolor(fill, color, callback) {
        if(fill) {
            this.ctx.fillStyle = color;
            this.ctx.fill();
            callback()
        }
    }

    listenColor(callback) {
        this.palitra.addEventListener('click', callback)
    }

    listenInput(callback) {
        this.thicknessInput.addEventListener('change', callback)
    }



    listenEraser(callback) {
        this.eraser.addEventListener('click', () => callback(this.backgroundColor))
    }

    listenFill(callback) {
        this.fill.addEventListener('click', () => callback(this.backgroundColor))
    }

    changeCurrentColor(color) {
        this.currentColor.style.backgroundColor = color
    }


    listenRestart(callback) {
        console.log('эш am')
        this.restartbtn.addEventListener('click', callback) 
        }

    clearCanvas = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.thicknessInput.value = 5 // Ничего что это значение статично. Если меняю дефолтное в HTML то и тут надо поменять

    } 

}

