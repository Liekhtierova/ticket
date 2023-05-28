const age = 13;
const benefit = true;
if (age <= 6) {
    console.log('Вхід для Вашої дитини - безкоштовний');
} else if (age > 6 && age <= 12) {
    console.log('Вхід для Вас коштує 10$');
    } else if (age > 12 && benefit === true) {
        console.log('Ви маєте право на 50% знижки на ціну квитка і він коштує для Вас 10$');
    } else {
        console.log('Вхід для Вас коштує 20$');
    }
    

