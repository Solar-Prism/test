import {testclass} from 'Testmodule';


window.addEventListener('load',(e) => {
    console.log(testclass);
    testclass.test();
    console.log('goodbye');
});

window.onload = (e) => {
    console.log('here I am');
}




