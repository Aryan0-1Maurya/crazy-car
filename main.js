/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/



// My car

let posX = (window.innerWidth / 2) - 25;
let posY = window.innerHeight - 100;
let speed = 0.01;
let scores = 0;
let carHeight = 80;
let carWidth = 35;
let game_over = false;
let game_re_start = false;
let handle_speed = 4;
let time;

// oponent cars

let opCarX_1 = Math.floor(Math.random() * (window.innerWidth - 50));
let opCarX_2 = Math.floor(Math.random() * (window.innerWidth - 50));
let opCarX_3 = Math.floor(Math.random() * (window.innerWidth - 50));
let opCarX_4 = Math.floor(Math.random() *  (window.innerWidth - 50));
let opCarY_1 = 80;
let opCarY_2 = 250;
let opCarY_3 = 20;
let opCarY_4 = 200;


// Road line

let line_pos_1 = -120;
let line_pos_2 = 158.8;
let line_pos_3 = 318.6;
let line_pos_4 = -120;
let line_speed = 12;



/*

-------------------- End --------------------

*/


/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/



function opCarAnim_1(){
    if (opCarY_1 < window.innerHeight){
        if (game_over == false){
            opCarY_1 += 4.5;
        }
        
        
    }
    else
    {
        opCarY_1 = -100;
        opCarX_1 = Math.floor(Math.random() * (window.innerWidth - 50));
    }
    car1.style.top = opCarY_1 + 'px';
    car1.style.left = opCarX_1 + 'px';
    requestAnimationFrame(opCarAnim_1);
}

function opCarAnim_2(){
    if (opCarY_2 < window.innerHeight){
        if (game_over == false){
            opCarY_2 += 3;
        }
    }
    else
    {
        opCarY_2 = -100;
        opCarX_2 = Math.floor(Math.random() * (window.innerWidth - 50));
    }
    car2.style.top = opCarY_2 + 'px';
    car2.style.left = opCarX_2 + 'px';
    requestAnimationFrame(opCarAnim_2);
}

function opCarAnim_3(){
    if (opCarY_3 < window.innerHeight){
        if (game_over == false){
            opCarY_3 += 3.5;
        }
    }
    else
    {
        opCarY_3 = -100;
        opCarX_3 = Math.floor(Math.random() * (window.innerWidth - 50));
    }
    car3.style.top = opCarY_3 + 'px';
    car2.style.left = opCarX_2 + 'px';
    requestAnimationFrame(opCarAnim_3);
}

function opCarAnim_4(){
    if (opCarY_4 < window.innerHeight){
        if (game_over == false){
            opCarY_4 += 4;
        }
        
    }
    else
    {
        opCarY_4 = -100;
        opCarX_4 = Math.floor(Math.random() * (window.innerWidth - 50));
    }
    car4.style.top = opCarY_4 + 'px';
    car4.style.left = opCarX_4 + 'px';
    requestAnimationFrame(opCarAnim_4);
}



/*

-------------------- End --------------------

*/



let canvas;





window.onload = function () {
    
    // Select the div for control
    
    canvas = document.getElementById("oponent-car");
    
    // select road line
    
    let line_1 = document.getElementById('line_1');
    let line_2 = document.getElementById('line_2');
    let line_3 = document.getElementById('line_3');
    let line_4 = document.getElementById('line_4');
    
    // Start raod animation
    
    start_game.addEventListener('click', () => {
        splash_screen.classList.add('hide');
        setTimeout(() => {
            splash_screen.style.display = 'none';
        }, 500);
        setTimeout(() => {
            timer.innerText = '2';
            setTimeout(() => {
                timer.innerText = '3';
                setTimeout(() => {
                    timer.style.display = 'none';
                }, 1000);
            }, 1000);
        }, 1000);
        animStart();
        timer.style.display = 'block';
        car1.style.top = '-100px';
        car2.style.top = '-100px';
        car3.style.top = '-100px';
        car4.style.top = '-100px';
    });
    
    rstart.addEventListener('click', () => {
        car1.classList.remove('hide');
        car2.classList.remove('hide');
        car3.classList.remove('hide');
        car4.classList.remove('hide');
        road.style.display = 'block';
        my_car.style.display = 'inline';
        setInterval(setScore, 1000);
        rstart.style.display = 'none';
        opCarX_1 = Math.floor(Math.random() * (window.innerWidth - 50));
        opCarX_2 = Math.floor(Math.random() * (window.innerWidth - 50));
        opCarX_3 = Math.floor(Math.random() * (window.innerWidth - 50));
        opCarX_4 = Math.floor(Math.random() *  (window.innerWidth - 50));
        game_over = false;
        posX = (window.innerWidth / 2) - 25;
        posY = window.innerHeight - 100;
        scores = 0;
        score.innerText = scores;
        opCarY_1 = -100;
        opCarY_2 = -100;
        opCarY_3 = -100;
        opCarY_4 = -100;
        game_re_start = true;
        canvas.addEventListener('touchstart', e => {
            game_re_start = false;
        });
    });
    
    help.addEventListener('click', () => {
        Wel();
    });
    function Wel(){
        Swal.fire({
            icon: "success",
            title: 'Welcome to Crazy Car ! Hold the car to where u want to move ! Enjoy ! ',
           
            timer: 2800,
            showClass: {
              popup: `
         animate__animated
         animate__fadeInUp
         animate__faster
       `,
            },
            hideClass: {
              popup: `
         animate__animated
         animate__fadeOutDown
         animate__faster
       `,
            },
          });
    }
    // Collission
    
    //collision();
    
    
    
/*

        -----------------------------
                 Game Control 
        -----------------------------



*/
    
    
/* 
     

*/

    canvas.addEventListener('touchmove', e => {
        let x = Math.floor(e.touches[0].clientX) - 25;
        let y = Math.floor(e.touches[0].clientY) - 80;
        posX = x;
        posY = y;/*
        collision(opCarX_1, opCarY_1);
        collision(opCarX_2, opCarY_2);
        collision(opCarX_3, opCarY_3);
        collision(opCarX_4, opCarY_4);*/
    });
}
/*

-------------------- End --------------------

*/

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/


/*

        -----------------------------
            My Car Control function
        -----------------------------



*/

function anim(){
    speed += 0.001;
    if (posY > 0){
    if (game_over == false){
        //posY--;
    }
        
        collision(opCarX_1, opCarY_1);
        collision(opCarX_2, opCarY_2);
        collision(opCarX_3, opCarY_3);
        collision(opCarX_4, opCarY_4);
        
    }
    car.style.top = posY + 'px';
    car.style.left = posX + 'px';
    requestAnimationFrame(anim);
}


function left(){
    if (posX > 0)
    {
        if (game_over == false){
            if (game_re_start == false){
                posX -= handle_speed;
            }
            
        }
        
    }
    else
    {
        
    }
    requestAnimationFrame(left);
}


function right(){
    if (posX < window.innerWidth - 50){
        if (game_over == false){
            if (game_re_start == false){
                posX += handle_speed;
            }
            
        }
        
    }
    requestAnimationFrame(right);
}


function up(){
    if (posY > 0){
        if (game_over == false){
            if (game_re_start == false){
                posY -= handle_speed;
            }
            
        }
        
        collision(opCarX_1, opCarY_1);
        collision(opCarX_2, opCarY_2);
        collision(opCarX_3, opCarY_3);
        collision(opCarX_4, opCarY_4);
    }
    
    requestAnimationFrame(up);
}


function btm(){
    if (posY < window.innerHeight - 100){
        if (game_over == false){
            if (game_re_start == false){
                posY += handle_speed;
            }
            
        }
        
    }
    requestAnimationFrame(btm);
}


function setScore(){
    if (game_over == false){
        scores++;
    }
    score.innerText = scores;
}


/*

-------------------- End --------------------

*/


/*

        -----------------------------
           Road Line Control function
        -----------------------------



*/




function frame1(){
    if (line_pos_1 < window.innerHeight){
        line_pos_1 += line_speed;
        line_1.style.top = line_pos_1 + 'px';
    }
    else
    {
        line_pos_1 = -150;
        line_1.style.top = line_pos_1 + 'px';
    }
    requestAnimationFrame(frame1);
}

function frame2(){
    if (line_pos_2 < window.innerHeight){
        line_pos_2 += line_speed;
        line_2.style.top = line_pos_2 + 'px';
    }
    else
    {
        line_pos_2 = -150;
        line_2.style.top = line_pos_2 + 'px';
    }
    requestAnimationFrame(frame2);
}

function frame3(){
    if (line_pos_3 < window.innerHeight){
        line_pos_3 += line_speed;
        line_3.style.top = line_pos_3 + 'px';
    }
    else
    {
        line_pos_3 = -150;
        line_3.style.top = line_pos_3 + 'px';
    }
    requestAnimationFrame(frame3);
}

function frame4(){
    if (line_pos_4 < window.innerHeight){
        line_pos_4 = window.innerHeight;
        line_4.style.bottom = line_pos_4 + 'px';
    }
    else
    {
        line_pos_4 += line_speed;
        line_4.style.bottom = line_pos_4 + 'px';
    }
    
    requestAnimationFrame(frame4);
}


/*

-------------------- End --------------------

*/


/*

        -----------------------------
             Collision Detection
        -----------------------------



*/


function collision(opCarX, opCarY){
    let x = posX;
    let y = posY;
    let ballHeight = carHeight;
    let ballWidth = carWidth;
    let x1 = opCarX;
    let y1 = opCarY;
    let opHeight = carHeight;
    let opWidth = carWidth;
    
    
    if (x + ballWidth > x1 && x + ballWidth < x1 + opWidth && y + ballHeight > y1 && y + ballHeight < y1 + opHeight){
        car1.classList.add('hide');
        car2.classList.add('hide');
        car3.classList.add('hide');
        car4.classList.add('hide');
        road.style.display = 'none';
        my_car.style.display = 'none';
        clearInterval(time);
        rstart.style.display = 'block';
        game_over = true;
    }
    
    
    if (x1 + opWidth > x && x + ballWidth > x1 + opWidth && y + ballHeight > y1 && y1 + opHeight > y + ballHeight){
        car1.classList.add('hide');
        car2.classList.add('hide');
        car3.classList.add('hide');
        car4.classList.add('hide');
        road.style.display = 'none';
        my_car.style.display = 'none';
        clearInterval(time);
        rstart.style.display = 'block';
        game_over = true;
    }
    
    if ((x1 + opWidth) > x && (x1 + opWidth) < (x + ballWidth) && (y1 + opHeight) < (y + ballHeight) && (y1 + opHeight) > y){
        car1.classList.add('hide');
        car2.classList.add('hide');
        car3.classList.add('hide');
        car4.classList.add('hide');
        road.style.display = 'none';
        my_car.style.display = 'none';
        clearInterval(time);
        rstart.style.display = 'block';
        game_over = true;
    }
    
    if ((x + ballWidth) < (x1 + opWidth) && (x + ballWidth) > x1 && (y1 + opHeight) < (y + ballHeight ) && (y1 + opHeight) > y){
        car1.classList.add('hide');
        car2.classList.add('hide');
        car3.classList.add('hide');
        car4.classList.add('hide');
        road.style.display = 'none';
        my_car.style.display = 'none';
        clearInterval(time);
        rstart.style.display = 'block';
        game_over = true;
    }
    
    
}
















/*


function collision(opPos_X, opPos_Y) {

        var x1 = posX;

        var y1 = posY;

        var h1 = carHeight;

        var w1 = carWidth;

        var b1 = y1 + h1;

        var r1 = x1 + w1;

        var x2 = opPos_X;

        var y2 = opPos_Y;

        var h2 = carHeight;

        var w2 = carWidth;

        var b2 = y2 + h2;

        var r2 = x2 + w2;


        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
            return false;
}
 

        /*cancelAnimationFrame(anim);
        cancelAnimationFrame(frame1);
        cancelAnimationFrame(frame2);
        cancelAnimationFrame(frame3);
        cancelAnimationFrame(frame4);
        cancelAnimationFrame(left);
        cancelAnimationFrame(right);
        cancelAnimationFrame(up);
        cancelAnimationFrame(btm);
        car1.classList.add('hide');
        car2.classList.add('hide');
        car3.classList.add('hide');
        car4.classList.add('hide');
        road.style.display = 'none';
        my_car.style.display = 'none';
        clearInterval(time);
        rstart.style.display = 'block';
        game_over = true;
        

    }
*/

function restart(){
    if (game_over){
        console.log('Game Over!');
    }
}


function animStart(){
    setTimeout(() => {
    anim();
    frame1();
    frame2();
    frame3();
    frame4();
    
    
    // opnent car
    
    opCarAnim_1();
    opCarAnim_2();
    opCarAnim_3();
    opCarAnim_4();
    
    
    // Scores
    setScore();
    time = setInterval(setScore, 1000);
    
    
    
    
    }, 3000);
}


/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/