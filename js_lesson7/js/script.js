class Timer {
    constructor(time) {
        this.time = time;
    }
    

    tick() {
        if (this.time <= 0) {
            alert('Timer Done!');
        } else {
           this.time--;
        console.log(this.time); 
        }
    }

    start() {
        let that = this;

        setInterval(function() {
            that.tick();
        }, 1000);
    }
}

let t = new Timer(10);
t.start();

