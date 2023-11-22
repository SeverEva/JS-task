const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE1 = document.querySelector('#trafficLight1');
var index = 1;

function makeNextColor() {
    

    if(index == 1)
    {
        trafficLightE1.style.background = ('green');
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('black');
        index = 2;
        return;
    }
    if(index == 2)
    {
        trafficLightE1.style.background = ('black');
        trafficLightE2.style.background = ('yellow');
        trafficLightE3.style.background = ('black');
        index = 3;
        return;
    }
    if(index == 3)
    {
        trafficLightE1.style.background = ('black');
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('red');
        index = 1;
        return;
    }
}

trafficLightE3.addEventListener('click', makeNextColor);
trafficLightE2.addEventListener('click', makeNextColor);
trafficLightE1.addEventListener('click', makeNextColor);

