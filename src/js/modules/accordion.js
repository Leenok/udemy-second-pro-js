const accordion = (triggersSelector) =>{
    const btns = document.querySelectorAll(triggersSelector);
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        })
    })
    // const accordionBlocks = document.querySelectorAll('.accordion-block');

    // accordionBlocks.forEach(block =>{
    //     block.style.display = 'none';
    // })

};

export default accordion;