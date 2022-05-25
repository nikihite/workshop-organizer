// IMPORT MODULES under test here:
import { renderWorkshop, renderOption } from '../render-utils.js';

const test = QUnit.test;

test('renderWorkshop', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h2>Ostrich Racing</h2><p>Ostrich Racing is a sport where people race each other on the backs of ostriches. They can also be ridden similarly as horses with wagons, special saddles, reins and bits.  Ostrich Racing is common in South Africa and in the United States particularly in Chandler, Arizona. In Jacksonville, Florida, an ostrich farm was opened as a tourist attraction in 1892 and became one of the most visited and known attractions in the state. Ostrich racing also takes places in Virginia City in Nevada, Fairgrounds in New Orleans, Canterbury Park in Minnesota, Ellis Park in Kentucky and Prairie Meadows in Iowa.</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        id: 1,
        name: 'Ostrich Racing',
        description: 'Ostrich Racing is a sport where people race each other on the backs of ostriches. They can also be ridden similarly as horses with wagons, special saddles, reins and bits.  Ostrich Racing is common in South Africa and in the United States particularly in Chandler, Arizona. In Jacksonville, Florida, an ostrich farm was opened as a tourist attraction in 1892 and became one of the most visited and known attractions in the state. Ostrich racing also takes places in Virginia City in Nevada, Fairgrounds in New Orleans, Canterbury Park in Minnesota, Ellis Park in Kentucky and Prairie Meadows in Iowa.',
        participants: [{ name: 'Niki Hite', contact_info: 'niki@google.com' }],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderOption', (expect) => {
    const expected = '<option value="1">Ostrich Racing</option>';
    const actual = renderOption({
        id: 1,
        name: 'Ostrich Racing',
        participants: [{ name: 'Niki Hite', contact_info: 'niki@google.com' }],
    });

    expect.equal(actual.outerHTML, expected);
});