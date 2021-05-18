import { Stack, defaultModules, alert } from '@pnotify/core';
// import * as PNotifyAnimate from '@pnotify/animate';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';

function pnotifyMessage(type) {
    if (typeof window.stackBarTop === 'undefined') {
        window.stackBarTop = new Stack({
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
        addClass: 'stack-bar-top',
        width: '100%',
        stack: window.stackBarTop,
        // modules: new Map([...defaultModules,[PNotifyAnimate, {
        //                             inClass: 'zoomInLeft',
        //                             outClass: 'zoomOutRight'
        //                             }]
        //                     ])

    // })
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
  }
    alert(opts);
}

export { pnotifyMessage }


    //варианты случаев вызова pnotify   

    // case 'info':
    //   opts.title = 'Breaking News';
    //   opts.text = 'Have you met Ted?';
    //   opts.type = 'info';
    //   break;
    // case 'success':
    //   opts.title = 'Good News Everyone';
    //   opts.text =
    //     "I've invented a device that bites shiny metal asses.";
    //   opts.type = 'success';
    //   break; 