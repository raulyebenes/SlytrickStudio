class Escena1 extends Phaser.Scene{
    constructor() {
        super("menu");
    }
    
    
    
    create() {
        this.add.text(20,20, "Cargando el juego...");
        this.scene.start("juego");
    }
}
