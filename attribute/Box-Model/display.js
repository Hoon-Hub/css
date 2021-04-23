const el = document.querySelector('.div2');
const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        if(el.classList.contains('hide')){
            el.classList.remove('hide');
        }else{
            el.classList.add('hide');
        }
    }
);


