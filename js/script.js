$(document).ready(function() {
    
    
    function fuelCalc(fuelPrice, kmDone, combustion) {
        const fuelBurned = ((combustion * kmDone) / 100).toFixed(2);
        const travelCost = (fuelBurned * fuelPrice).toFixed(2);
        $('#res').html(`Spalisz ok. <span class="res--greenText">${fuelBurned}L</span> paliwa, koszt paliwa wyniesie ok. <span class="res--greenText">${travelCost}zł.</span>`);
    }//end fuelCalc function
    
   function collectFuelData(callback) {
       if(typeof callback !== 'function') {
           callback = false;
       }
       
       if(callback) {
           const fuelPrice = $('#fuelPrice').val();
           const kmDone = $('#kmDone').val();
           const combustion = $('#combustion').val();
           
           if(fuelPrice && kmDone && combustion) {
               callback(fuelPrice, kmDone, combustion)
           } else {
               $('#res').html('<span class="res--redText">Aby obliczyć koszt, wypełnij wszystkie pola formularza!</span>')
           }
        
           
       }
   }//end collectFuelData function
    
    $('#submit').click(function(e) {
        e.preventDefault();
        collectFuelData(fuelCalc);
    }) //end button click function
}) //end document.ready