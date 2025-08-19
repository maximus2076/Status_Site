document.addEventListener(`DOMContentLoaded`, function(){
    const NameInput1 = document.querySelector(`.input1`);
    const NameInput2 = document.querySelector(`#input1`);
    const NameInput3 = document.querySelector(`.input3`);
    const PhoneInput1 = document.querySelector(`.input2`);
    const PhoneInput2 = document.querySelector(`#input2`);
    const PhoneInput3 = document.querySelector(`#input4`);
    const SubmitButton1 = document.querySelector('.call');
    const SubmitButton2 = document.querySelector('#call');
    const SubmitButton3 = document.querySelector('.meeting-btn');
    const errorToast = document.querySelector('.errorToast');
    const Succesful = document.querySelector('.Succesful');


    function Check() {
        let error = false
        if (NameInput1.value.trim(),NameInput3.value.trim() == `` || PhoneInput1.value.trim(),PhoneInput3.value.trim() == ``) {
            error = true
        }
        if(error == true) {
            if (NameInput2.value.trim() == `` && PhoneInput2.value.trim() == ``) {
                errorToast.className = "show1"
                setTimeout(function(){
                    errorToast.className = errorToast.className.replace("show1", "errorToast");
                },8000) 
            }
        }   

        if (NameInput2.value.trim() !== `` && PhoneInput2.value.trim() !== ``) {
            Succesful.className = "show2"
            setTimeout(function(){
                Succesful.className = Succesful.className.replace("show2", "Succesful");
            },8000);
            NameInput2.value,NameInput3.value  = ``
            PhoneInput2.value,PhoneInput3.value = ``
        }

        if (NameInput3.value.trim() !== `` && PhoneInput3.value.trim() !== ``) {
            Succesful.className = "show2"
            setTimeout(function(){
                Succesful.className = Succesful.className.replace("show2", "Succesful");
            },8000);
            NameInput3.value = ``
            PhoneInput3.value = ``
        }

    }

    // function CheckSuccesful() {
    //     if (NameInput2.value.trim() !== `` && PhoneInput2.value.trim() !== ``) {
    //         Succesful.className = "show2"
    //         setTimeout(function(){
    //             Succesful.className = Succesful.className.replace("show2", "Succesful");
    //         },4000);
            
    //     }
    // }

    SubmitButton1.addEventListener(`click`,  ()=>{
        Check()
    })

    SubmitButton2.addEventListener(`click`,  ()=>{
        Check()
    })

    SubmitButton3.addEventListener(`click`,  ()=>{
        Check()
    })

    PhoneInput1.addEventListener(`input`, ()=>{
        const value1 = PhoneInput1.value
        const CleanedValue1 = value1.replace(/\D/g, '')
        PhoneInput1.value = CleanedValue1;
    })

    PhoneInput2.addEventListener(`input`, ()=>{
        const value2 = PhoneInput2.value
        const CleanedValue2 = value2.replace(/\D/g, '')
        PhoneInput2.value = CleanedValue2;
    })

    PhoneInput3.addEventListener(`input`, ()=>{
        const value3 = PhoneInput3.value
        const CleanedValue3 = value3.replace(/\D/g, '')
        PhoneInput3.value = CleanedValue3;
    })
})