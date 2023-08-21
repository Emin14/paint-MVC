export default class Model {
    constructor() {
        this.color = '';
        this.x = 0;
        this.y = 0;
        this.thickness = 5
        this.fill = false
    }

    recordMousePos = (e) => {
        this.x = e.clientX;
        this.y = e.clientY;
    }


    changeColor(event) {
        this.color = event.target.style.backgroundColor
    }

    defaultColor(defaultcolor) {
        this.color = defaultcolor
    }

    filling() {
        this.fill = !this.fill
    }


    changeThickness(e) {
        this.thickness = e.target.value
    }

    clear() {
        this.color = '';
        this.x = 0;
        this.y = 0;
        this.thickness = 5
    }

}