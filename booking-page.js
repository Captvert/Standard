          window.addEventListener('resize', () => {
              console.log(window.innerWidth);
              const options = document.querySelectorAll('.dropdown-option');
              const untoggledHeight = options[0].offsetHeight;
              console.log('untoggled height is:'+ untoggledHeight)
              const toggledHeight = (options.length) * untoggledHeight;
              console.log('toggled height is:'+ toggledHeight)
              const dropDown = document.querySelector('.custom-dropdown');
              const dropDownToggled = document.querySelector('.custom-dropdown-toggled');

              if(dropDown){
                  dropDown.style.height = `${untoggledHeight}px`;
              }else if(dropDownToggled){
                  dropDownToggled.style.height = `${toggledHeight}px`;
              }
              
            });




        if (!document.querySelector('.picked-service')){
            const service1 = document.querySelector('.service-pick-option1')
            service1.classList.add('picked-service')
            const dropDown = service1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')

            const service1Container = document.querySelector('.service1-based-container');
            service1Container.classList.replace('service-based-container-off' , 'service-based-container-on');
        };


        let serviceChoice = '';
        
    
        function serviceSelection(clickedService , itsContainer){

        const previousPicked = document.querySelector('.picked-service');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-service');
        const previousContainer = document.querySelector('.service-based-container-on');
        previousContainer.classList.replace('service-based-container-on' , 'service-based-container-off')
        clickedService.classList.add('picked-service');
        const dropDown = clickedService.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

        itsContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
            
    
        if(document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick-toggled');
            servicePick.classList.replace('service-pick-toggled' , 'service-pick');
            dropDown.style.transform = 'rotate(0deg)';
            // Select the element with class 'service-pick-title'
            const servicePickTitle = document.querySelector('.service-pick-title');

            if (servicePickTitle) {
              // Add the 'service-pick-title-valid' class
              servicePickTitle.classList.add('service-pick-title-valid');

              // Optionally, remove the old class if needed
               servicePickTitle.classList.remove('service-pick-title');
            }
        }else if (!document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick');
            servicePick.classList.replace('service-pick' , 'service-pick-toggled');
            dropDown.style.transform = 'rotate(180deg)';

            const servicePickTitle = document.querySelector('.service-pick-title-valid');


            // Add the 'service-pick-title-valid' class

            if(servicePickTitle){
            servicePickTitle.classList.add('service-pick-title');

            // Optionally, remove the old class if needed
            servicePickTitle.classList.remove('service-pick-title-valid');}
        }
    ;
          serviceChoice =  clickedService.innerText;
          };




function setupFloatingLabel(inputSelector, labelSelector, activeClass, hiddenClass) {
  const inputEl = document.querySelector(inputSelector);
  const labelEl = document.querySelector(labelSelector);
  let isFocused = false;

  if (inputEl && labelEl) {
    inputEl.addEventListener('focus', () => {
      isFocused = true;
      labelEl.classList.remove(hiddenClass);
      labelEl.classList.add(activeClass);
    });

    inputEl.addEventListener('blur', () => {
      isFocused = false;
      if (inputEl.value.length === 0) {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });

    inputEl.addEventListener('input', () => {
      if (inputEl.value.length > 0 || isFocused) {
        labelEl.classList.remove(hiddenClass);
        labelEl.classList.add(activeClass);
      } else {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });
  }
}

setupFloatingLabel('.fullname-input' , '.fullname-input-label' ,     'fullname-input-label-on' ,'label-off');
setupFloatingLabel('.place-of-occasion-input' , '.place-of-occasion-input-label' ,     'place-of-occasion-input-label-on' ,'label-off');   
setupFloatingLabel('.brand-name-input' , '.brand-name-input-label' , '.brand-name-input-on' , '.brand-name-input-off' );



 function optionCreation(...options){
            const optionsContainer = document.querySelector('.custom-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='custom-dropdown-option${count} dropdown-option' onclick=" let option = document.querySelector('.custom-dropdown-option${count}'); optionSelection(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreation('Under 50', '51-100' , '101-200' , '200-300 or more');

    

        if (!document.querySelector('.picked-option')){
            const option1 = document.querySelector('.custom-dropdown-option1')
            option1.classList.add('picked-option')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelection(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown-toggled');
            optionPick.classList.replace('custom-dropdown-toggled' , 'custom-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.custom-dropdown-title');
            dropDownTitle.classList.replace('custom-dropdown-title' , 'custom-dropdown-title-valid');
        }else if (!document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown');
            optionPick.classList.replace('custom-dropdown' , 'custom-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
                        const dropDownTitle = document.querySelector('.custom-dropdown-title-valid');
            dropDownTitle.classList.replace('custom-dropdown-title-valid' , 'custom-dropdown-title');
        }

        const options = document.querySelectorAll('.dropdown-option');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.custom-dropdown');
        const dropDownElementToggled = document.querySelector('.custom-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };



    










    //Calendar Js:
function toggleCalendar(){
        const calendar = document.querySelector('.booking-calendar-off');
        calendar.classList.replace('booking-calendar-off' , 'booking-calendar-on');

    };

function currentDate(){    const currentDate = new Date();

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()]; // getMonth() returns 0-11
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const calendarButton = document.querySelector('.booking-calendar-button');

    if (day == 1 || day == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;

      }else if (day == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else if(day == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      };

    }
    currentDate();

    

function currentDay(){    
    
const currentDate = new Date();

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const calendarButton = document.querySelector('.booking-calendar-button');
    const calendarButtonWD = calendarButton.querySelector('strong');
    calendarButtonWD.innerHTML = `${dayOfWeek}`;

};


currentDay();




document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'days'
  const daysElements = document.querySelectorAll('.days');

  daysElements.forEach(element => {
    element.addEventListener('click', () => {
      // Get the data attributes
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      // Log in the specified format
      const calendarButton = document.querySelector('.booking-calendar-button');
      if (innerText == 1 || innerText == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;

      }else if (innerText == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else if(innerText == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      };
      const calendarButtonWD = calendarButton.querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

        const calendar = document.querySelector('.booking-calendar-on');
        calendar.classList.replace('booking-calendar-on' , 'booking-calendar-off');
    });
  });
});

let hours = '';
let minutesStr = '';
let ampm = '';


const bookingTimeInput = document.querySelector('.booking-time-input');
bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;


function getCurrentTimeRounded() {
  const now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();

  // Round minutes to the nearest multiple of 15
  minutes = Math.round(minutes / 15) * 15;

  // Handle case when minutes round up to 60
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  // Convert to 12-hour format
  ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes as '00', '15', '30', or '45'
  minutesStr = minutes === 0 ? '00' : minutes.toString();

  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;
};


getCurrentTimeRounded();





function timePickerToggle(){  
    const timePicker = document.querySelector('.time-pick-container');
    timePicker.classList.replace('time-pick-container', 'time-pick-container-on');    
  };



      let hourValue = '';
      let minuteValue = '';
      let periodValue = '';



function timeValuePick(button, type) {
  // Remove active class from previous
  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  // Add active class to clicked button
  button.classList.add('active');

  // Get the value
  const value = button.getAttribute('data-value');

  // Store in variables
  if (type === 'hour') {
    hours = value;
  } else if (type === 'minute') {
    minutesStr = value;
  } else if (type === 'period') {
    ampm = value;
  }

  console.log(hours, minutesStr, ampm);
  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.fullname-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('fullname-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('fullname-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      };

      if (input.classList.contains('brand-name-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      };

    });
  });
});


function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass , numberIncluded) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    };


    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};


// Example Usage (replace with your actual class name and messages):

monitorTyping('.fullname-input', 'typing...', 'Input is empty', 'Number detected' , '.fullname-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);




monitorTyping('.place-of-occasion-input' , 'typing...' , 'Input is empty' , 'Number detected' , '.place-of-occasion-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);









        function optionSelectionNOP(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');

        if(clickedoption.querySelector('.dropdown-icon'))
{        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')};
        

            
    
        if( !document.querySelector('.number-of-products-toggled')){
            const optionPick = document.querySelector('.number-of-products');
            optionPick.classList.replace('number-of-products' , 'number-of-products-toggled');
            const dropDown = clickedoption.querySelector('.dropdown-icon-on');
            dropDown.style.transform = 'rotate(180deg)';

            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.replace('number-of-products-title-valid' , 'number-of-products-title');
            console.log(NOPTitle.classList);


        }else if (document.querySelector('.number-of-products-toggled')){

            const optionPick = document.querySelector('.number-of-products-toggled');
            optionPick.classList.replace('number-of-products-toggled' , 'number-of-products');
            const dropDown = clickedoption.querySelector('.dropdown-icon-on');
            dropDown.style.transform = 'rotate(0deg)';
            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.replace('number-of-products-title' , 'number-of-products-title-valid');
            console.log(NOPTitle.classList);
        }


    ;
    };



//Replace function & Variable Names

function insertParameter(...params) {
    params.forEach((param, index) => {
        console.log(`Parameter ${index + 1}:`, param);
    });
};
        function optionCreationNOP(...options){
            const optionsContainer = document.querySelector('.number-of-products')
            let count = 1
           

            options.forEach((option)=>{
                const optionStructure = `<div class='number-of-products-option${count}' onclick=" let option = document.querySelector('.number-of-products-option${count}'); optionSelectionNOP(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++
                console.log(optionsContainer);

            })
            
        };

        function changeCSSVariableNOP(variableName, newValue) {
        document.documentElement.style.setProperty(variableName, newValue);
        }


        optionCreationNOP('1-2 Products', '3-5 Products' , '6-10 Products' , 'More Than 10');

    if (!document.querySelector('.number-of-products').querySelector('.picked-option')){






            const NOP = document.querySelector('.number-of-products');
            const option1 = NOP.querySelector('.number-of-products-option1');
            option1.classList.add('picked-option');
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on');
};



if (!document.querySelector('.number-of-products').querySelector('picked-option')){
            const NOP = document.querySelector('.number-of-products')
            const option1 = NOP.querySelector('.number-of-products-option1')
            option1.classList.add('picked-option')
              if (option1.querySelector('.dropdown-icon')){
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
          }

            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.remove('number-of-products-title-valid');
            NOPTitle.classList.add( '.number-of-products-title')
};


    
    













    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input') && input.classList.contains('no-numbers')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    if (/\d/.test(inputElement.value)) {
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
      return; // Exit if any digit is found
    };

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    monitorTyping('.no-numbers' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);



    monitorTyping('.use-input' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , true);

        monitorTyping('.use-input2' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);









  monitorTyping('.brand-name-input' , 'typing...' , 'Input is empty' , 'Number detected' , '.brand-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , true);


















    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('event-coverage-use-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventcTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventcTyping('.event-coverage-use-input', 'typing...', 'Input is empty', 'Number detected' , '.event-coverage-input1-name-wrapper' , 'event-coverage-input1-wrapper-valid' , 'event-coverage-input1-wrapper');












    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-location, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
                  <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-location')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('event-coverage-location')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventLoctionTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventLoctionTyping('.event-coverage-location', 'typing...', 'Input is empty', 'Number detected' , '.event-location-wrapper' , 'event-coverage-location-input-wrapper-valid' , 'event-coverage-location-input-wrapper');























        document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-event-duration, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `
                    <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-event-duration')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-event-duration')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventDurationTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventDurationTyping('.use-input-event-duration', 'typing...', 'Input is empty', 'Number detected' , '.event-duration-wrapper' , 'event-duration-input-wrapper-valid' , 'event-duration-input-wrapper');




















    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-brand-name, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-brand-name')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-brand-name')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function branNameTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    branNameTyping('.use-input-brand-name', 'typing...', 'Input is empty', 'Number detected' , '.brand-name-wrapper' , 'brand-name-input-wrapper-valid' , 'brand-name-input-wrapper');


































 function optoinCreationENV(...options){
            const optionsContainer = document.querySelector('.expected-number-of-visitors2')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='expected-number-of-visitors2-option${count} drop-down-option-env' onclick=" let option = document.querySelector('.expected-number-of-visitors2-option${count}'); optoinSelectionENV(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optoinCreationENV('Under 50', '51-100' , '101-200' , '200-300 or more');

    

        if (!document.querySelector('.picked-option-env')){
            const option1 = document.querySelector('.expected-number-of-visitors2-option1')
            option1.classList.add('picked-option-env')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optoinSelectionENV(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-env');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-env');
   
        clickedoption.classList.add('picked-option-env');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.expected-number-of-visitors2-toggled')){
            const optionPick = document.querySelector('.expected-number-of-visitors2-toggled');
            optionPick.classList.replace('expected-number-of-visitors2-toggled' , 'expected-number-of-visitors2');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.expected-number-of-visitors2-title');
            dropDownTitle.classList.replace('expected-number-of-visitors2-title' , 'expected-number-of-visitors2-title-valid');
        }else if (!document.querySelector('.expected-number-of-visitors2-toggled')){
            const optionPick = document.querySelector('.expected-number-of-visitors2');
            optionPick.classList.replace('expected-number-of-visitors2' , 'expected-number-of-visitors2-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.expected-number-of-visitors2-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('expected-number-of-visitors2-title-valid' , 'expected-number-of-visitors2-title');
        }

        const options = document.querySelectorAll('.drop-down-option-env');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.expected-number-of-visitors2');
        const dropDownElementToggled = document.querySelector('.expected-number-of-visitors2-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };

























    function emailString(){
      const servicePick = document.querySelector('.service-pick');
      const serviceName = servicePick.querySelector('.picked-service').innerHTML;
    }


      let servicePick = document.querySelector('.service-pick');
      let serviceName = servicePick.querySelector('.picked-service').innerText;


    console.log('service name:' + serviceName)
































    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-phone-number, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-phone-number')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-phone-number')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

 
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function phoneNumberTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
  if (!/\d/.test(inputElement.value)) {
    const wrapper = document.querySelector(`${wrapperClass}`);
    wrapper.classList.replace(`${validClass}`, `${invalidClass}`);
    return; // Exit if no digit is found
  }

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    phoneNumberTyping('.use-input-phone-number', 'typing...', 'Input is empty', 'Number detected' , '.phone-number-wrapper' , 'phone-number-input-wrapper-valid' , 'phone-number-input-wrapper');





const userFormData = {

}


function dataExtraction(){
  const servicepickElement = document.querySelector('.service-pick')
  const childDivsService = servicepickElement.querySelectorAll('div');

          // Iterate over each child div
          childDivsService.forEach(div => {
            // Get the computed style of the div
            const style = window.getComputedStyle(div);

            // Check if the 'order' property is -1
            if (style.getPropertyValue('order') === '-1') {
              // Log the inner text of the matching div
              const serviceValue = div.innerText;

              userFormData.serviceType = serviceValue
          }});
  const userName = document.querySelector('.fullname-input').value;
  const contactNumber = document.querySelector('.use-input-phone-number').value ;

  userFormData.personalName = userName;
  userFormData.phoneNumber = contactNumber;



  // Select the container
  const container = document.querySelector('.service-based-container-on');

  if (container) {
    // Get all elements with class 'form-input' inside the container
    const formInputs = container.querySelectorAll('.form-input');

    // Loop through each element
    formInputs.forEach(element => {
      if (element.tagName.toLowerCase() === 'input') {
        const dataValue = element.getAttribute('data-value');
        const inputValue = element.value;

        userFormData[dataValue] = (inputValue)
        ;
      } else if (element.classList.contains('form-input')) {
        const dataValue =  element.getAttribute('data-value');
         const childDivs = element.querySelectorAll('div');

          // Iterate over each child div
          childDivs.forEach(div => {
            // Get the computed style of the div
            const style = window.getComputedStyle(div);

            // Check if the 'order' property is -1
            if (style.getPropertyValue('order') === '-1') {
              // Log the inner text of the matching div
              const inputValue = div.innerText;

              userFormData[dataValue] = (inputValue)
            }
          });

          

      }
    });
  }



  const bookingDate = document.querySelector('.booking-calendar-button').innerText;
  const bookingTime = document.querySelector('.booking-time-input').innerText;

  userFormData.bookingDate = bookingDate;
  userFormData.bookingTime = bookingTime;


  console.log(userFormData);
};





















function hamburgerFunction(){

const langButton = document.querySelector('.language');

console.log(langButton.innerHTML)

if (langButton.innerHTML == 'ع'){

//English Version
//Step 1: Remove the hamburger element.
const hamburgerEF = document.querySelector('.hamburger-functional');
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-toggled'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);} else{
//Arabic Version
//Step 1: Remove the hamburger element.
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-toggled-arabic'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);
;}}


















;

function closeSidebar(){

if (document.querySelector('.sidebar')){
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';

//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);
};

if(document.querySelector('.sidebar-arabic')){

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);


};};







function sidebarX(){
//English Version
//Step 1: Remove the X.
const sidebarXF = document.querySelector('.sidebar-x-functional');
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);

//Step 4: Show the non-functional hamburger.
const hamburgerE = document.querySelector('.hamburger');
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


//Arabic Version
//Step 1: Remove the X.
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);

//Step 4: Show the non-functional hamburger.
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


};
