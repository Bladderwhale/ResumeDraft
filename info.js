(function() //Private scope.
{
var GameInstance = new Phaser.Game(800, 600, Phaser.CANVAS, '', {init:init, preload: preload, create: create, update: update }); //Declaring Game.

function init() {
    GameInstance.add.plugin(PhaserInput.Plugin); //Adding the input plugin.
    scalingCanvasWindow(800, 600, this); //Pass in the window size.
    console.log("Scaling Window, 800 by 600"); 
    GameInstance.stage.backgroundColor = '#F0F0F0';
};
    
function preload() {
    GameInstance.load.image('button','img/button.png');
    GameInstance.load.image('board','img/board.jpg');
    GameInstance.load.image('back','img/back.png');
    GameInstance.load.image('phaserlogo','img/phaser2.png');
    GameInstance.load.image('unitylogo','img/unitylogo.png');
};

function create() {
    //Background
    this.board = GameInstance.add.sprite(0,0,'board');
    this.board.scale.setTo(1,1);
    
    //Back arrow
    this.back = GameInstance.add.button(50,500,'back');
    this.back.visible = false;
 
    //Phaser Input
    this.txtname = GameInstance.add.text(GameInstance.world.centerX-20,GameInstance.world.centerY-130,"Name", {font: 'bold 15pt Georgia'});
    this.name = GameInstance.add.inputField(350,200, {
            width: 120,
            height: 50,
            font: '20px Georgia',
            max: 5,
            textAlign: 'center',
            type: PhaserInput.InputType.text
        });
        this.txtpassword = GameInstance.add.text(GameInstance.world.centerX-40,GameInstance.world.centerY+24,"Password", {font: 'bold 15pt Georgia'});
        this.password = GameInstance.add.inputField(350,350, {
            width: 120,
            height: 50,
            font: '40px Georgia',
            max: '4',
            textAlign: 'center',
            type: PhaserInput.InputType.password
        });
    
    this.button = GameInstance.add.button(350,450,'button');
    this.button.scale.setTo(0.08,0.08);
    
    //Phaser.Text
    this.title = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-100,"Hello!", {font: 'bold 100pt Georgia',fill:'#000000'});
    this.title.anchor.setTo(0.5,0.5);
    this.desc=GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY,"My name is Joshua\nit's all about improvising and improving.",{font: 'bold 20pt Georgia',align: 'center',fill:'#000000'});
    this.desc.anchor.setTo(0.5,0.5);
    this.title.alpha = 0;
    this.desc.alpha = 0;
    
    //Phaser.Graphic
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3 ) //Color
    this.drawCircle.drawRoundedRect(0,0,120,100); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnAbout = GameInstance.add.button(150,370,this.circleTexture);
    this.txtAbout = GameInstance.add.text(170,400,"About");
    this.btnAbout.visible = false;
    this.btnAbout.alpha = 0;
    this.txtAbout.alpha = 0;
    //Phaser.Graphic
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawRoundedRect(0,0,120,100); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnSkills = GameInstance.add.button(350,370,this.circleTexture);
    this.txtSkills = GameInstance.add.text(360,400,"Projects");
    this.btnSkills.visible = false;
    this.btnSkills.alpha = 0;
    this.txtSkills.alpha = 0;
    
    //Phaser.Graphic
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawRoundedRect(0,0,120,100); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnContact= GameInstance.add.button(550,370,this.circleTexture);
    this.txtContact = GameInstance.add.text(560,400,"Contact");
    this.btnContact.visible = false;
    this.btnContact.alpha = 0;
    this.txtContact.alpha = 0;
    
    //Phaser.Graphic
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle0 = GameInstance.add.button(150,500,this.circleTexture);
    this.txtCircle0 = GameInstance.add.text(167,510,"1");
    this.btnCircle0.visible = false;
    this.txtCircle0.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle1 = GameInstance.add.button(150+100,500,this.circleTexture);
    this.txtCircle1 = GameInstance.add.text(167+100,510,"2");
    this.btnCircle1.visible = false;
    this.txtCircle1.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle2 = GameInstance.add.button(150+200,500,this.circleTexture);
    this.txtCircle2 = GameInstance.add.text(167+200,510,"3");
    this.btnCircle2.visible = false;
    this.txtCircle2.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle3 = GameInstance.add.button(150+300,500,this.circleTexture);
    this.txtCircle3 = GameInstance.add.text(167+300,510,"4");
    this.btnCircle3.visible = false;
    this.txtCircle3.visible = false;
  
    
    
    //Phaser (Skills)
    this.phaserlogo = GameInstance.add.sprite(50,50,'phaserlogo');
    this.phaserlogo.scale.setTo(0.3,0.3);
    this.txtPhaser = GameInstance.add.text(250,70,'Phaser Framework using\nPhaser 2 aka Phaser CE\nJavaScript Based Projects\nunder [Ministry of Education]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.txtPhaser.align = 'center'
    this.txtPhaser1 = GameInstance.add.text(250,250,'Mathematics Interactive Triangles'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser1.inputEnabled = true;
    this.txtPhaser2 = GameInstance.add.text(250,290,'Electronics Resistors'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser2.inputEnabled = true;
    this.txtPhaser3 = GameInstance.add.text(250,330,'Measurement of Units'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser3.inputEnabled = true;
    this.txtPhaser4 = GameInstance.add.text(250,370,'Free simple platformer (Personal)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser4.inputEnabled = true;
    
    this.phaserlogo.visible = false;
    this.txtPhaser.visible = false;
    this.txtPhaser1.visible = false;
    this.txtPhaser2.visible = false;
    this.txtPhaser3.visible = false;
    this.txtPhaser4.visible = false;
    
    //Unity (Skills)
    this.unitylogo = GameInstance.add.sprite(50,50,'unitylogo');
    this.unitylogo.scale.setTo(0.14,0.14);
    this.unitytxt = GameInstance.add.text(250,70,'Unity school projects (C#) under \n[Singapore Polytechnic]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.unitytxt.align = 'center'
    this.unitytxt0 = GameInstance.add.text(250,150,'Vuforia - Vumarks (Mobile)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.unitytxt1 = GameInstance.add.text(250,190,'Roll the ball (Mobile)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.marvel = GameInstance.add.text(250,240,'Prototyping the App under \n[Singapore Polytechnic]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.marveltxt0 = GameInstance.add.text(250,330,'Prototyping Counselling App for Students'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.marveltxt0.inputEnabled = true;
    
    this.others = GameInstance.add.text(250,360,'Other kind of tools used before for projects' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.otherstxt= GameInstance.add.text(250,400,'Dreamweaver - HTML, CSS\nPhotoshop, Illustrator, Paint.net\nBlender\nWord, Excel, Powerpoint.'
                                           , {font: 'bold 12pt Georgia',fill:'#808080'});
   

    
    this.unitylogo.alpha = 0;
    this.unitytxt.alpha = 0;
    this.unitytxt0.alpha = 0;
    this.unitytxt1.alpha = 0;
    this.marvel.alpha = 0;
    this.marveltxt0.visible = false;
    this.others.alpha = 0;
    this.otherstxt.alpha = 0;
   
    
    
    //Phaser Tween
    this.tweenTitle = GameInstance.add.tween(this.title).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenDesc = GameInstance.add.tween(this.desc).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenBtnAbout = GameInstance.add.tween(this.btnAbout).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenTxtAbout = GameInstance.add.tween(this.txtAbout).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenBtnSkills = GameInstance.add.tween(this.btnSkills).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenTxtSkills = GameInstance.add.tween(this.txtSkills).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenBtnContact = GameInstance.add.tween(this.btnContact).to({alpha:1},1500,Phaser.Easing.Linear.None);
    this.tweenTxtContact = GameInstance.add.tween(this.txtContact).to({alpha:1},1500,Phaser.Easing.Linear.None);
    
    this.button.events.onInputDown.add(function(){
        if (this.name == 'Josh' || this.password.value == '2504') {
            this.name.visible = false;
            this.password.visible = false;
            this.txtname.visible = false;
            this.txtpassword.visible = false;
            this.button.visible = false;
            this.tweenTitle.start();
            this.tweenTitle.onComplete.add(function(){
                this.tweenDesc.start();
            },this);
            this.tweenDesc.onComplete.add(function(){
                 this.btnAbout.visible = true;
                 this.btnSkills.visible = true;
                 this.btnContact.visible = true;
                this.tweenBtnAbout.start();
                this.tweenTxtAbout.start();
                this.tweenBtnSkills.start();
                this.tweenTxtSkills.start(); 
                this.tweenBtnContact.start(); 
                this.tweenTxtContact.start(); 
            },this);
        }
    },this);
    
    this.btnSkills.events.onInputDown.add(function(){
        this.btnAbout.visible = false;
        this.txtAbout.visible = false;
        this.btnSkills.visible = false;
        this.txtSkills.visible = false;
        this.btnContact.visible = false;
        this.txtContact.visible = false;
        this.title.alpha = 0;
        this.desc.alpha = 0;
        this.back.visible = true;
        this.phaserlogo.visible = true;
        this.txtPhaser.visible = true;
        this.txtPhaser1.visible = true;
        this.txtPhaser2.visible = true;
        this.txtPhaser3.visible = true;
        this.txtPhaser4.visible = true;
        this.btnCircle0.visible = true;
        this.txtCircle0.visible = true;
        this.btnCircle1.visible = true;
        this.txtCircle1.visible = true;
        this.btnCircle2.visible = true;
        this.txtCircle2.visible = true;
        this.btnCircle3.visible = true;
        this.txtCircle3.visible = true;
    },this);
    
    this.back.events.onInputDown.add(function(){
        this.btnAbout.visible = true;
        this.txtAbout.visible = true;
        this.btnSkills.visible = true;
        this.txtSkills.visible = true;
        this.btnContact.visible = true;
        this.txtContact.visible = true;
        this.title.alpha = 1;
        this.desc.alpha = 1;
        this.back.visible = false;
        this.phaserlogo.visible = false;
        this.txtPhaser.visible = false;
        this.txtPhaser1.visible = false;
        this.txtPhaser2.visible = false;
        this.txtPhaser3.visible = false;
        this.txtPhaser4.visible = false;
        this.btnCircle0.visible = false;
        this.txtCircle0.visible = false;
        this.btnCircle1.visible = false;
        this.txtCircle1.visible = false;
        this.btnCircle2.visible = false;
        this.txtCircle2.visible = false;
        this.btnCircle3.visible = false;
        this.txtCircle3.visible = false;
        this.unitylogo.alpha = 0;
        this.unitytxt.alpha = 0;
        this.unitytxt0.alpha = 0;
        this.unitytxt1.alpha = 0;
        this.marvel.alpha = 0;
       this.marveltxt0.visible = false;
        this.otherstxt.alpha = 0;
    },this);
     this.btnCircle0.events.onInputDown.add(function(){
        this.btnCircle1.alpha=1;
        this.btnCircle1.alpha=1;
        this.btnCircle0.alpha=0.5;
        this.btnAbout.visible = false;
        this.txtAbout.visible = false;
        this.btnSkills.visible = false;
        this.txtSkills.visible = false;
        this.btnContact.visible = false;
        this.txtContact.visible = false;
        this.title.alpha = 0;
        this.desc.alpha = 0;
        this.back.visible = true;
        this.phaserlogo.visible = true;
        this.txtPhaser.visible = true;
        this.txtPhaser1.visible = true;
        this.txtPhaser2.visible = true;
        this.txtPhaser3.visible = true;
        this.txtPhaser4.visible = true;
        this.btnCircle0.visible = true;
        this.txtCircle0.visible = true;
        this.btnCircle1.visible = true;
        this.txtCircle1.visible = true;
        this.btnCircle2.visible = true;
        this.txtCircle2.visible = true;
        this.btnCircle3.visible = true;
        this.txtCircle3.visible = true;
        this.unitylogo.alpha = 0;
        this.unitytxt.alpha = 0;
        this.unitytxt0.alpha = 0;
        this.unitytxt1.alpha = 0;
        this.marvel.alpha = 0;
         this.marveltxt0.visible = false;
        this.otherstxt.alpha = 0;
        this.others.alpha = 0;
  
    },this);
    
    this.btnCircle1.events.onInputDown.add(function(){
        this.btnCircle0.alpha=1;
        this.btnCircle1.alpha=0.5;
        this.btnAbout.visible = false;
        this.txtAbout.visible = false;
        this.btnSkills.visible = false;
        this.txtSkills.visible = false;
        this.btnContact.visible = false;
        this.txtContact.visible = false;
        this.title.alpha = 0;
        this.desc.alpha = 0;
        this.back.visible = true;
        this.phaserlogo.visible = false;
        this.txtPhaser.visible = false;
        this.txtPhaser1.visible = false;
        this.txtPhaser2.visible = false;
        this.txtPhaser3.visible = false;
        this.txtPhaser4.visible = false;
        this.btnCircle0.visible = true;
        this.txtCircle0.visible = true;
        this.btnCircle1.visible = true;
        this.txtCircle1.visible = true;
        this.btnCircle2.visible = true;
        this.txtCircle2.visible = true;
        this.btnCircle3.visible = true;
        this.txtCircle3.visible = true;
        this.unitylogo.alpha = 1;
        this.unitytxt.alpha = 1;
        this.unitytxt0.alpha = 1;
        this.unitytxt1.alpha = 1;
        this.marvel.alpha = 1;
       this.marveltxt0.visible = true;
        this.otherstxt.alpha = 1;
        this.others.alpha = 1;
  
    },this);
  
    
    this.txtPhaser1.events.onInputDown.add(function(){
       window.location.href = "https://bladderwhale.github.io/Triangles-/";
    },this);
    this.txtPhaser2.events.onInputDown.add(function(){
       window.location.href = "https://bladderwhale.github.io/MOE-Resistors/";
    },this);
    this.txtPhaser3.events.onInputDown.add(function(){
       window.location.href = "https://bladderwhale.github.io/P3-Converting-Units-of-Length/";
    },this);
    this.txtPhaser4.events.onInputDown.add(function(){
       window.location.href = "https://bladderwhale.github.io/Examples/Phaser321/";
    },this);
    this.marveltxt0.events.onInputDown.add(function(){
       window.location.href = "https://marvelapp.com/6c943hb";
    },this);
    
};
    
function update() {
    if (this.btnAbout.input.pointerOver()) 
    {
        this.btnAbout.input.useHandCursor = true;
        this.btnAbout.alpha = 0.5;
    }
    else if (this.btnAbout.input.pointerOut()){
        this.btnAbout.alpha = 1;
    }
    if (this.btnSkills.input.pointerOver()) 
    {
        this.btnSkills.input.useHandCursor = true;
        this.btnSkills.alpha = 0.5;
    }
    else if (this.btnSkills.input.pointerOut()){
        this.btnSkills.alpha = 1;
    }
    if (this.btnContact.input.pointerOver()) 
    {
        this.btnContact.input.useHandCursor = true;
        this.btnContact.alpha = 0.5;
    }
    else if (this.btnContact.input.pointerOut()){
        this.btnContact.alpha = 1;
    }
};
})()


