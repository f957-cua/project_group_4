
import refs from '../refs';

const hideBtns = (btn) => {
    btn.classList.add('visually-hidden');
    btn.setAttribute("disabled", "disabled");
    btn.classList.remove('is-active');
}

const hideBtn = () => {
    const btnList = refs.filterContainer.children;
    const array = JSON.parse(localStorage.getItem('array'));

   
    const forEachArray = btnList.forEach(item => {
        const btn = item.children[0];
        const id = btn.id;
        let check = false;
        
        
        for (let i = 0; i < array.length; i++) {
            
            const type = `${array[i].type}s`;

            if (type.includes(id)) {
                check = true;
                btn.removeAttribute('disabled');
            }
            
        }

        if (!check) {
            hideBtns(btn);
        }

        if (check && btn.classList.contains('visually-hidden')) {
            btn.classList.remove('visually-hidden');
           
        }
    })
};

export { hideBtn, hideBtns };