import refs from '../refs';

const btnActive = (type) => {
    const list = refs.filterContainer.children;
    let btn = list.forEach(li => {
        li.children[0].classList.remove('is-active');
        
        if (li.children[0].id === type) {
            
            li.children[0].classList.add('is-active');
        }

    })
}

export { btnActive };
