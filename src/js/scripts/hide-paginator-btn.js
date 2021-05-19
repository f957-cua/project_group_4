
import refs from '../refs';


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
            btn.classList.add('visually-hidden');
            btn.setAttribute("disabled", "disabled");
        }

        if (check && btn.classList.contains('visually-hidden')) {
            btn.classList.remove('visually-hidden');
           
        }
    })
};

export { hideBtn };