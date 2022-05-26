export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    const h2 = document.createElement('h2');
    h2.textContent = workshop.name;
    const p = document.createElement('p');
    p.textContent = workshop.description;

    div.append(h2, p);

    return div;
}

export function renderOption(workshop) {
    const option = document.createElement('option');
    option.value = workshop.id;
    option.textContent = workshop.name;
    return option;
}