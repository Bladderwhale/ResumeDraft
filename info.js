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
    GameInstance.load.image('board','img/board.png');
    GameInstance.load.image('back','img/back.png');
    GameInstance.load.image('phaserlogo','img/phaser2.png');
    GameInstance.load.image('unitylogo','img/SP.gif');
    GameInstance.load.image('pac','img/pacteralogo.png');
    GameInstance.load.image('icon','img/icon.png');
};

function create() {
    //Background
    this.board = GameInstance.add.sprite(0,0,'board');
    this.board.scale.setTo(800/932,600/542);
    
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
    this.button.scale.setTo(0,0);
    
    //Phaser.Text
    this.title = GameInstance.add.text(100,100,"ID", {font: 'bold 60pt Georgia',fill:'#000000'});
    this.title.anchor.setTo(0.5,0.5);
    this.desc=GameInstance.add.text(380,250,"Name: Joshua Teo \nIT Domain: Front-end Programmer \n                        Quality Assurance \nConcurrent: Full-Stack Developer\n                          Model 3D Objects \n Interest: Finding bugs, vulnerabilities and errors, Writting cases and reports. \n 3 things describe about me: Determined, Focus and Interested \n Quotes: Always improvising and improving.",{font: 'bold 12pt Georgia',align: '',fill:'#000000'});
    this.desc.anchor.setTo(0.5,0.5);
    this.title.alpha = 0;
    this.desc.alpha = 0;
    this.desc.addColor('#003366',6);
    this.desc.addColor('#000000',16);
    this.desc.addColor('#003366',27);
    this.desc.addColor('#000000',91);
    this.desc.addColor('#003366',103);
    this.desc.addColor('#000000',167);
    this.desc.addColor('#003366',176);
    this.desc.addColor('#000000',247);
    this.desc.addColor('#003366',276);
    this.desc.addColor('#000000',310);
    this.desc.addColor('#003366',318);
    
    this.icon = GameInstance.add.button(540,350,'icon');
    this.icon.scale.setTo(0.3,0.3);
    this.icon.visible = false;
    
    
    //Phaser.Graphics to texture
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle0 = GameInstance.add.button(150+100,500,this.circleTexture);
    this.txtCircle0 = GameInstance.add.text(167+100,510,"2");
    this.btnCircle0.visible = false;
    this.txtCircle0.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle1 = GameInstance.add.button(150+200,500,this.circleTexture);
    this.txtCircle1 = GameInstance.add.text(167+200,510,"3");
    this.btnCircle1.visible = false;
    this.txtCircle1.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle2 = GameInstance.add.button(150+300,500,this.circleTexture);
    this.txtCircle2 = GameInstance.add.text(167+300,510,"4");
    this.btnCircle2.visible = false;
    this.txtCircle2.visible = false;
    
    this.drawCircle = new Phaser.Graphics(GameInstance,0,0); // use Phaser.Graphics
    this.drawCircle.lineStyle(1,0xffffff,1); //Line width
    this.drawCircle.beginFill(0xd3d3d3) //Color
    this.drawCircle.drawCircle(0,0,50); //Draw out
    this.drawCircle.endFill(); //End
    this.circleTexture = this.drawCircle.generateTexture(); //Make the graphics into texture.
    this.btnCircle3 = GameInstance.add.button(150,500,this.circleTexture);
    this.txtCircle3 = GameInstance.add.text(167,510,"1");
    this.btnCircle3.visible = false;
    this.txtCircle3.visible = false;
  
    
    
    //Phaser (Skills)
    this.phaserlogo = GameInstance.add.sprite(500,50,'phaserlogo');
    this.phaserlogo.scale.setTo(1,1);
    this.txtPhaser = GameInstance.add.text(50,70,'Phaser Framework using\nPhaser 2 aka Phaser CE\nJavaScript Based Projects\nunder [Ministry of Education]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.txtPhaser1 = GameInstance.add.text(50,250,'Mathematics Interactive Triangles'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser1.inputEnabled = true;
    this.txtPhaser2 = GameInstance.add.text(50,290,'Electronics Resistors'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser2.inputEnabled = true;
    this.txtPhaser3 = GameInstance.add.text(50,330,'Measurement of Units'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser3.inputEnabled = true;
    this.txtPhaser4 = GameInstance.add.text(50,370,'Free simple platformer (Personal)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.txtPhaser4.inputEnabled = true;
    
    this.phaserlogo.visible = false;
    this.txtPhaser.visible = false;
    this.txtPhaser1.visible = false;
    this.txtPhaser2.visible = false;
    this.txtPhaser3.visible = false;
    this.txtPhaser4.visible = false;
    
    //Unity (Skills)
    this.unitylogo = GameInstance.add.sprite(430,75,'unitylogo');
    this.unitylogo.scale.setTo(1,1);
    this.unitytxt = GameInstance.add.text(50,70,'Unity school projects (C#) under \n[Singapore Polytechnic]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.unitytxt0 = GameInstance.add.text(50,140,'Vuforia - Vumarks (Mobile)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.unitytxt1 = GameInstance.add.text(50,180,'Roll the ball (Mobile)'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.marvel = GameInstance.add.text(50,220,'Prototyping the App under \n[Singapore Polytechnic]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.marveltxt0 = GameInstance.add.text(50,280,'Prototyping Counselling App for Students'
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.marveltxt0.inputEnabled = true;
    
    this.others = GameInstance.add.text(50,310,'Other kind of tools used before for sch projects' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.otherstxt= GameInstance.add.text(50,340,'Dreamweaver - HTML, CSS\nPhotoshop, Illustrator, Paint.net\nSQL Express - Database\nVisual Studio Code - C++ (Game Engine and 2D Game)\nOpenGL on creating polygons and simple shaders\nBlender - Model 3D Objects'
                                           , {font: 'bold 12pt Georgia',fill:'#808080'});
    
    //Testing (Skills)
    this.itedays00 = GameInstance.add.sprite(500,75,'pac');
    this.itedays00.scale.setTo(1,1);
    this.itedays0 = GameInstance.add.text(50,70,'Health Science Authority Project\nUnder [Pacteria]' 
                                           , {font: 'bold 15pt Georgia',fill:'#000000'});
    this.itedays1 = GameInstance.add.text(50,150,'Test Cases' 
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.itedays2 = GameInstance.add.text(50,190,'Test Scripts' 
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.itedays3 = GameInstance.add.text(50,230,'Test Data' 
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.itedays4 = GameInstance.add.text(50,270,'Test Scenarios' 
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    this.itedays5 = GameInstance.add.text(50,310,'Regression Testing Tools by Pacteria/Manual Testing' 
                                           , {font: 'bold 12pt Georgia',fill:'#001667'});
    
    this.itedays0.visible = false;
    this.itedays1.visible = false;
    this.itedays2.visible = false;
    this.itedays3.visible = false;
    this.itedays4.visible = false;
    this.itedays5.visible = false;
    this.itedays00.visible = false;
    this.itedays00.visible = false;
   
   
   

    
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
    this.tweenIcon = GameInstance.add.tween(this.icon).to({alpha:1},1500,Phaser.Easing.Linear.None);
  

  
    this.button.events.onInputDown.add(function(){
        
    },this);
    
    this.icon.events.onInputDown.add(function(){
        this.icon.visible = false
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
        this.icon.visible = true
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
        this.others.alpha = 0;
        this.otherstxt.alpha = 0;
        this.itedays0.visible = false;
         this.itedays1.visible = false;
         this.itedays2.visible = false;
         this.itedays3.visible = false;
         this.itedays4.visible = false;
         this.itedays5.visible = false;
           this.itedays00.visible = false;
    },this);
     this.btnCircle0.events.onInputDown.add(function(){
        this.btnCircle1.alpha=1;
        this.btnCircle2.alpha=1;
        this.btnCircle0.alpha=0.5;
        this.icon.visible = false;
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
        this.itedays0.visible = false;
         this.itedays1.visible = false;
         this.itedays2.visible = false;
         this.itedays3.visible = false;
         this.itedays4.visible = false;
         this.itedays5.visible = false;
            this.itedays00.visible = false;
  
    },this);
    
    this.btnCircle1.events.onInputDown.add(function(){
        this.btnCircle0.alpha=1;
        this.btnCircle1.alpha=0.5;
          this.btnCircle2.alpha=1;
        this.icon.visible = true;
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
        this.itedays0.visible = false;
         this.itedays1.visible = false;
         this.itedays2.visible = false;
         this.itedays3.visible = false;
         this.itedays4.visible = false;
         this.itedays5.visible = false;
           this.itedays00.visible = false;
        this.icon.visible = false;
  
    },this);
    this.btnCircle2.events.onInputDown.add(function(){
             this.btnCircle0.alpha=1;
        this.btnCircle1.alpha=1;
         this.btnCircle2.alpha=0.5;
        this.icon.visible = true;
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
        this.unitylogo.alpha = 0;
        this.unitytxt.alpha = 0;
        this.unitytxt0.alpha = 0;
        this.unitytxt1.alpha = 0;
        this.marvel.alpha = 0;
       this.marveltxt0.visible = false;
        this.otherstxt.alpha = 0;
        this.others.alpha = 0;
        this.itedays0.visible = true;
         this.itedays1.visible = true;
         this.itedays2.visible = true;
         this.itedays3.visible = true;
         this.itedays4.visible = true;
         this.itedays5.visible = true;
           this.itedays00.visible = true;
        this.icon.visible = false;
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
    
    this.login = false;
    this.user = getCookie("username")
    this.name.setText(this.user);
    
};
    
function update() {
       if (this.icon.input.pointerOver()) 
    {
        this.icon.input.useHandCursor = true;
        this.icon.alpha = 0.5;
    }
    else if (this.icon.input.pointerOut()){
        this.icon.alpha = 1;
    }
    
    
    if (this.name.value == 'Josh' && this.password.value == '2504' && this.login == false ) {
            setCookie("username",this.name.value,30);
            this.name.visible = false;
            this.password.visible = false;
            this.txtname.visible = false;
            this.txtpassword.visible = false;
            this.button.visible = false;
            this.tweenTitle.start();
            this.tweenTitle.onComplete.addOnce(function(){
                this.tweenDesc.start();
            },this);
            this.tweenDesc.onComplete.addOnce(function(){
                this.icon.visible = true;
            },this);
        this.login = true;
        }
};
})()

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cvalue);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


