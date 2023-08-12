export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view
    }

    init() {
        this.view.canvasSize()
        this.view.listenCanvas(this.onClickCanvas.bind(this))
        this.view.listenColor(this.onColor.bind(this))
        this.view.listenInput(this.onInput.bind(this))
        this.view.listenEraser(this.onEraser.bind(this))
        this.view.listenRestart(this.restart.bind(this))
        this.view.listenFill(this.onFill.bind(this))
    }

    onClickCanvas(e) {
        this.model.recordMousePos(e)
        this.view.drawLine(this.model.x, this.model.y, this.model.color, this.model.thickness, this.model.fill )
    }

    // Почему нельзя в init напрямую написать this.model.changeColor(event)
    onColor(event) {
        this.model.changeColor(event);
        this.view.changeCurrentColor(this.model.color);
    }

    onInput(e) {
        this.model.changeThickness(e);
        // this.view.drawLine(this.model.x, this.model.y)
    }

    onEraser() {
        this.model.defaultColor(this.view.backgroundColor)
    }

    onFill() {
        this.model.filling(this.view.backgroundColor)
        this.view.fillСolor(this.model.fill, this.model.color, this.model.filling())
    }

    restart() {
        this.model.clear()
        this.view.clearCanvas()
    }

}
