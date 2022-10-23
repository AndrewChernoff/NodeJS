const EventEmmiter = require('events');

class Logger extends EventEmmiter {
  log(messege) {
    this.emit('messege', `${messege}`);
  }
}

const logger = new Logger;

logger.on('messege', (data) =>{
  console.log(data)
})

logger.log('hey')

















/* const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    log(messege) {
        this.emit('messege',`${messege} ${Date.now()}`);
    }
}

const logger = new Logger();

logger.on('messege', data => {
    console.log(data)
})

logger.log(';hey') */
