/**
 *Выполнение первого задания по преобразованию кода для совтировки задания. Программа работает не совсем корректно.
 *Неправильно считываются данные их формы. Например, массив [1, 33, 65, 3, 5, 6] будет отсортирован не правильно,
 *тогда как массив [1, 7, 8, 3, 5, 6] отсортируется верно. Не могли бы вы посказать, как исправить мой код.
*/
function sIncrease(i, ii) {
    "use strict";
    var returnval;
    if (i > ii) {
        returnval = 1;
    } else if (i < ii) {
        returnval = -1;
    } else {
        returnval = 0;
    }
    return returnval;
}
function sDecrease(i, ii) {
    "use strict";
    var returnval;
    if (i > ii) {
        returnval = -1;
    } else if (i < ii) {
        returnval = 1;
    } else {
        returnval = 0;
    }
    return returnval;
}
function validForm(x) {
				//Ex: arr=[1 33 65 3 5 6];
    "use strict";
    var value, arr, count, i, j, max;
    /*global document */
    value = document.getElementById('mass').value;
    value = value.replace(/,/g, '');
    value = value.replace(/;/g, '');
    value = value.replace(/,/g, '');
    value = value.replace(/\;/g, '');
    value = value.replace(/\[/g, '');
    value = value.replace(/\]/g, '');
    arr = value.split(" ");
    count = arr.length - 1;
    for (i = 0; i < count; i = i + 1) {
        for (j = 0; j < count - i; j = j + 1) {
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }
    if (x === 'up') {
        /*global alert */
        alert(arr);
    }
    if (x === 'down') {
        /*global alert */
        alert(arr.sort(sDecrease));
    }
}