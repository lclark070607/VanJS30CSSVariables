window.addEventListener('load', function () {

const inputs = document.querySelectorAll('.controls input');
//    console.log(inputs); //creates a NodeList, sometimes you want to convert this to an array


    function handleUpdate() {
      //What is a dataset? It's an object that contains all the data attributes from that specific element.
      //Dataset will take everything from data- and put it all in a tidy object
      const suffix = this.dataset.sizing || ''; //or nothing if there is no sizing
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }


//listen for a change event (change or mousemove) then call function handleUpdate
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    //  window.addEventListener('change', handleUpdate);
    //  window.addEventListener('mousemove', handleUpdate);

});