document.addEventListener(`DOMContentLoaded`, function(){
    const NameInput1 = document.querySelector(`#NameInput1`);
    const PhoneInput1 = document.querySelector(`#PhoneInput1`);
    const SubmitBtn1 = document.querySelector(`#SubmitBtn1`);
    const NameInput2 = document.querySelector(`#NameInput2`);
    const PhoneInput2 = document.querySelector(`#PhoneInput2`);
    const SubmitBtn2 = document.querySelector(`#SubmitBtn2`);
    const NameInput3 = document.querySelector(`#NameInput3`);
    const PhoneInput3 = document.querySelector(`#PhoneInput3`);
    const SubmitBtn3 = document.querySelector(`#SubmitBtn3`);
    const errorToast = document.querySelector('.errorToast');
    const Succesful = document.querySelector('.Succesful');

    
    function Check1() {
        if (NameInput1.value.trim() == '' || PhoneInput1.value.trim() == '') {
            errorToast.classList.add("show1");
            setTimeout(function(){
                errorToast.classList.remove("show1");
            }, 8000); 
        } else {
            Succesful.classList.add("show2");
            setTimeout(function(){
                Succesful.classList.remove("show2");
            }, 8000);
            NameInput1.value = '';
            PhoneInput1.value = '';
        }
    }

    function Check2() {
        if (NameInput2.value.trim() == '' || PhoneInput2.value.trim() == '') {
            errorToast.classList.add("show1");
            setTimeout(function(){
                errorToast.classList.remove("show1");
            }, 8000); 
        } else {
            Succesful.classList.add("show2");
            setTimeout(function(){
                Succesful.classList.remove("show2");
            }, 8000);
            NameInput2.value = '';
            PhoneInput2.value = '';
        }
    }

    function Check3() {
        if (NameInput3.value.trim() == '' || PhoneInput3.value.trim() == '') {
            errorToast.classList.add("show1");
            setTimeout(function(){
                errorToast.classList.remove("show1");
            }, 8000); 
        } else {
            Succesful.classList.add("show2");
            setTimeout(function(){
                Succesful.classList.remove("show2");
            }, 8000);
            NameInput3.value = '';
            PhoneInput3.value = '';
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

    SubmitBtn1.addEventListener(`click`,  ()=>{
        Check1()
    })

    SubmitBtn2.addEventListener(`click`,  ()=>{
        Check2()
    })

    SubmitBtn3.addEventListener(`click`,  ()=>{
        Check3()
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

    NameInput1.addEventListener(`input`, ()=>{
        const value1 = NameInput1.value
        const CleanedValue1 = value1.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '')
        NameInput1.value = CleanedValue1;
    })

    NameInput2.addEventListener(`input`, ()=>{
        const value2 = NameInput2.value
        const CleanedValue2 = value2.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '')
        NameInput2.value = CleanedValue2;
    })

    NameInput3.addEventListener(`input`, ()=>{
        const value3 = NameInput3.value
        const CleanedValue3 = value3.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '')
        NameInput3.value = CleanedValue3;
    })

})