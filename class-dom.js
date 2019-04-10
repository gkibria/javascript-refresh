class Box {
    constructor(left = 0, top = 0, color = 'blue', speed = 1000, horizontalStep = 10, verticalStep = 10){
        this.boxLeft = left
        this.boxTop = top
        this.horizontalStep = horizontalStep
        this.verticalStep = verticalStep
        this.color = color

        this.box = document.createElement('div')
        this.box.id = 'box'
        this.box.style.position = 'absolute'
        this.box.style.height = '50px'
        this.box.style.width = '50px'
        this.box.style.left = `${this.boxLeft}px`
        this.box.style.top = `${this.boxTop}px`
        this.box.style.backgroundColor = this.color
        this.speed = speed

        document.body.appendChild(this.box)
    }
    startAnimation(){
        setInterval( () => {
            let position = this.box.getBoundingClientRect()
            this.boxLeft += this.horizontalStep;
            this.box.style.left = `${this.boxLeft}px`

            this.boxTop += this.verticalStep;
            this.box.style.top = `${this.boxTop}px`

            if(this.boxLeft >= (window.innerWidth - position.width) || this.boxLeft <= 0 ){
                this.horizontalStep = - this.horizontalStep
            }

            if(this.boxTop >= (window.innerHeight - position.height) || this.boxTop <= 0 ){
                this.verticalStep = - this.verticalStep
            }
            // console.log(this.boxLeft, this.boxTop)
        }, this.speed);
    }
}

let blueBox = new Box(0, 50, 'grey', 500)
blueBox.startAnimation()

new Box(200, 300, 'green', 100).startAnimation()
new Box(300, 500, 'red', 200).startAnimation()