function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }
 
 /**
 * Change the text of a button
 * @param {el} object HTMLElement: button to change text of
 * @param {dText} string: default text
 * @param {nText} string: new text
 **/
function changeText(el, dText, nText) {
   var content = '',
       context = '';
   
   /**
    * Set the text of a button
    *     - dependant upon current text
    **/
   function setText() {
     return (content === dText) ? nText : dText;
   }
   
   /* Check to see if the browser accepts textContent */
   if ('textContent' in document.body) {
     context = 'textContent';
     /* Get the current button text */
     content = el[context];
   /* Browser does NOT use textContent */
   } else {
     /* Get the button text with fallback option */
     content = el.firstChild.nodeValue;
   }
   
   /* Set button text */
   if (context === 'textContent') {
     el.textContent = setText();
   } else {
     el.firstChild.nodeValue = setText();
   }
 }
 
 var defaultText,
     substituteText,
     btn;
 
 /* Default text of the button */
 defaultText = 'Feedback';
 /* Alternate text for button */
 substituteText = 'Close';
 /* Grab our button */
 btn = document.querySelector('.feedback-button');
 
 /* Add a listener to the button instance so we can manipulate it */
 btn.addEventListener('click', function() {
   changeText(this, defaultText, substituteText);
 }, false);
 