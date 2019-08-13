function addStuff(){
    const container = document.querySelector('#container');

    // add <div> to container
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);
    // add red <p> to container
    const redP = document.createElement('p');
    redP.textContent = "Hey I'm red!";
    redP.style.cssText = "color:red;"
    container.appendChild(redP);
    // add blue <h3>
    const blueH3 = document.createElement('h3');
    blueH3.textContent = "I'm a blue h3!";
    blueH3.style.cssText = "color:blue;";
    container.appendChild(blueH3);
    // add black border pink background div
    const divContainer = document.createElement('div');
    divContainer.style.cssText = "border-style:solid;border-color:black;" +
"background-color:pink;";
    container.appendChild(divContainer);
    //create h1 add to div
    const h1 = document.createElement('h1');
    h1.textContent = "I'm in a div";
    divContainer.appendChild(h1);   
    // create me too p
    const meTooP = document.createElement('p');
    meTooP.textContent = "ME TOO!";
    divContainer.appendChild(meTooP);
    
}

