/**
  * Interrupts execution for the specified number of ms
  * @param  {integer} delay time in ms
  * @return {Promise<void>}
  */
async function sleep(delay) {
  await new Promise(resolve => {
    setTimeout(resolve, delay);
  }).catch(function(err){
    console.log('Promise Rejected', err);
  });
}

module.exports = sleep;
