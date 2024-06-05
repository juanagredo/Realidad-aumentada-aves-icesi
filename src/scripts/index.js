const bird = ["euphonialaniir", "myiozetetescayanensis", "pitangusnsulphuratus"]


const show = (birdId) => {
    document.querySelector(`${birdId}-vid`).play();
}
aves.forEach(birdName => {
    AFRAME.registerComponent(`${birdName}-vid`, {
        init: function () {
            this.el.addEventListener('targetFound', event => {
                console.log("target found");
                document.querySelector(`#${birdName}`).play()
                document.querySelector(`#${birdName}-sound`).play()
                show(birdName);
            });
            this.el.addEventListener('targetLost', event => {
                console.log("target lost");
                document.querySelector(`#${birdName}`).pause()
                document.querySelector(`#${birdName}-sound`).pause()
            });
        }
    })
})



/*

  AFRAME.registerComponent('euphonialaniir-vid', {
    init: function () {
      this.el.addEventListener('targetFound', event => {
        console.log("target found");
        document.querySelector("#euphonialaniir").play()
        document.querySelector("#euphonialaniir-sound").play()
        show();
      });
      this.el.addEventListener('targetLost', event => {
        console.log("target lost");
        document.querySelector("#euphonialaniir").pause()
        document.querySelector("#euphonialaniir-sound").pause()
      });
    }
  });
  
  /**/