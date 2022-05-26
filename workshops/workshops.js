import { getWorkshops, deleteParticipant, checkAuth, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const participateBtn = document.getElementById('participate');

logoutButton.addEventListener('click', () => {
    logout();
});

participateBtn.addEventListener('click', () => {
    window.location.href = '/create/index.html';
});

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent = '';
    const data = await getWorkshops();
    for (let workshop of data) {
        const workshopElem = renderWorkshop(workshop);
        const ul = document.createElement('ul');
        
        for (let participant of workshop.participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact_info}`;
            li.addEventListener('click', async () => {
                console.log('clicking participant id: ', participant.id);
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });
            ul.append(li);
        }
        workshopElem.append(ul);

        main.append(workshopElem);
    }
}

displayWorkshops();