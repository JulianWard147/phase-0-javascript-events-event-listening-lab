// Flexible function
// function addingEventListener(idString) {
//   
//    function clickAlert() {
//        alert('I was clicked!');
//      }
//    
//    const input = document.getElementById(idString)
//
//
//    input.addEventListener('click', clickAlert);
//}

function addingEventListener() {
       function clickAlert() {
           alert('I was clicked!');
          }
        
        const input = document.getElementById('button')
    
    
        input.addEventListener('click', clickAlert);
    }