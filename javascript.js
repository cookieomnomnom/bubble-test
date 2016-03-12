var arrayElement = document.getElementsByClassName("inputArray");
var inputArray = [];
var arrayDiv = document.getElementById("divForArray");
var stepI = 0, stepJ = 0;

function inputToDiv(){
    if(inputArray.length === 0)
        for (var i = 0; i < arrayElement.length; i++){
            emptyToNull(arrayElement, i);
            inputArray.push(parseInt(arrayElement[i].value));
            createDiv(i);
    }
}

function createDiv(i){
    var div = document.createElement('div');
    div.innerHTML = arrayElement[i].value;
    div.className = "arraySort";
    arrayDiv.appendChild(div); 
    
}

function emptyToNull(array, i){
    if (array[i].value === ""){
        array[i].value = "0";
    }
}

function resetArray(){
    inputArray.length = "0";
    arrayDiv.innerHTML = '';
    document.getElementById("hiddenButtons").style.display='none';
    document.getElementById("step").value="Шаг вперед";
    stepI = 0;
    stepJ = 0;
}

function stepOfSort(){          
    if (stepJ >= arrayDiv.childElementCount - stepI - 1){
        paint(arrayDiv.children[stepJ], "#a886b0");
        if (stepJ != 0)
            paint(arrayDiv.children[stepJ - 1], "#ecd9c0");
        if (stepI >= arrayDiv.childElementCount - 1){
            paint(arrayDiv.children[stepJ - 1], "#a886b0");
            endOfSort();
            return;
        }
        stepI++;
        stepJ = 0;
    }
    
    var i = stepI;
    var j = stepJ;
    
    if(j > 0){
        paint(arrayDiv.children[j], "#ecd9c0");
        paint(arrayDiv.children[j - 1], "#ecd9c0");
    }
    
    if (parseInt(arrayDiv.children[j].innerHTML) > parseInt(arrayDiv.children[j+1].innerHTML)){
        var temp = arrayDiv.children[j]; 
        arrayDiv.removeChild(arrayDiv.children[j]);
        if (j != arrayDiv.childElementCount - 1)
            arrayDiv.insertBefore(temp, arrayDiv.children[j + 1]);
        else 
            arrayDiv.appendChild(temp);  
    }   
    paint(arrayDiv.children[j], "#c9b4ce");
    paint(arrayDiv.children[j + 1], "#c9b4ce");
    
    stepJ++;
}

function endOfSort(){
    document.getElementById("step").value="Ураааааа";
    document.getElementById("step").disabled=true;
    openDiv("initialArray");
    openDiv("sortedArray"); 
}

function paint(itemToPaint, color){
    itemToPaint.style.background = color;
}

function openDiv(id){
       document.getElementById(id).style.display='block';
}


