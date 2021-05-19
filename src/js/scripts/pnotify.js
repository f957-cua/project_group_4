import { Stack, defaultModules, alert } from '@pnotify/core';
// import * as PNotifyAnimate from '@pnotify/animate';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';

function pnotifyMessage(type,alertType) {
    if (typeof window.stackTop === 'undefined') {
        window.stackTop = new Stack({
        dir1: 'down',
        firstpos1: 45,
        firstpos2: 0,
        context: document.getElementById('search-form')
        })
    }

    const opts = {
        title: 'Error',
        text: `message`,
        delay: 2000,
        shadow: false,
        addClass: 'stack-top',
        width: '100%',
        stack: window.stackTop,
  };
    const optsInfo = {
        title: 'Info',
        text: `message`,
        delay: 1500,
        shadow: false,
        addClass: 'stack-info-top',
        width: '100%',
        stack: window.stackTop,
    };
    switch (type) {
    case 'empty input':
      opts.title = 'Nothing found';
      opts.text = 'Please enter query!';
      opts.type = 'error';
        break;
    case 'request failed':
      opts.title = 'No answer';
      opts.text = 'There was a problem with your request!';
      opts.type = 'error';
        break;
    case 'info':
      optsInfo.title = 'It is not possible to buy tickets upon your request';
      optsInfo.text = 'But you can find out information about attractions or venues in the corresponding tab below';
      optsInfo.type = 'info';
        break;
    case 'empty response':
      optsInfo.title = 'It is not possible to find more information about your request';
      optsInfo.text = 'Please try another one';
      optsInfo.type = 'info';
        break;   
  }
  switch (alertType) {
    case 'opts':
      alert(opts);
      break;
    case 'optsInfo':
      alert(optsInfo);
      break;
  }
}
export { pnotifyMessage }


    

   
    // modules: new Map([...defaultModules,[PNotifyAnimate, {
        //                             inClass: 'zoomInLeft',
        //                             outClass: 'zoomOutRight'
        //                             }]
        //                     ])

    // })