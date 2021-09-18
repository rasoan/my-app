'use strict';

const assert = require("assert").strict;

{
    // todo: Написать код для получения ключей объекта obj
    function getPropNames(obj) {
        return Object.keys(obj)
    }

    {
        const result = getPropNames({
            prop1: 111,
            prop2: 222,
            prop3: 333,
        });
        assert.deepEqual(result, ['prop1', 'prop2', 'prop3'], "Test failed");
    }
    {
        const result = getPropNames({
            prop1: 111,
            customProp: 222,
        });
        assert.deepEqual(result, ['prop1', 'customProp'], "Test failed");
    }
    {
        const result = getPropNames({
            myProp: 111,
            anotherProp: 222,
            oneMoreProp: 333,
            lastProp: 333,
        });
        assert.deepEqual(result, ['myProp', 'anotherProp', 'oneMoreProp', 'lastProp'], "Test failed");
    }
}
{
    // todo: Написать код для получения значений объекта obj
    function getPropValues(obj) {
        return Object.keys(obj).map(key => obj[key])
    }

    {
        const result = getPropValues({
            prop1: 111,
            prop2: 222,
            prop3: 333,
        });
        assert.deepEqual(result, [111, 222, 333], "Test failed");
    }
    {
        const result = getPropValues({
            prop1: 1,
            customProp: 'MyVal',
        });
        assert.deepEqual(result, [1, 'MyVal'], "Test failed");
    }
    {
        const result = getPropValues({
            myProp: true,
            anotherProp: false,
            oneMoreProp: 42,
            lastProp: 'value',
        });
        assert.deepEqual(result, [true, false, 42, 'value'], "Test failed");
    }
}
{
    // todo: Дополните код для прохождения теста (получение копии объекта без свойств prop1 и prop2). Оператор delete использовать запрещено
    //  !!! Для решения воспользоваться деструктуризацией и rest-оператором !!!
    function deleteProps1and2(obj) {
        const {prop1, prop2, ...rest} = obj
        return rest
    }

    {
        /** Изначальный объект, передаваемый в deleteProps1and2() */
        const obj = {
            prop1: 111,
            prop2: 222,
            prop3: 333,
            prop4: 444,
            prop5: 555,
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строка ниже - исключение, ее менять не нужно)
        const objCopy = JSON.parse(JSON.stringify(obj));
        /** Итоговый объект, который мы должны получить в результате работы deleteProps1and2() */
        const expectedResult = {
            prop3: 333,
            prop4: 444,
            prop5: 555,
        }

        const result = deleteProps1and2(obj);

        assert.deepEqual(result, expectedResult, "Test failed");
        assert.deepEqual(obj, objCopy, "Test failed");
        assert.notEqual(result, obj, "Test failed");
    }
    {
        /** Изначальный объект, передаваемый в deleteProps1and2() */
        const obj = {
            prop1: 1,
            customProp: true,
            myProp: "42",
            prop2: "22",
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строка ниже - исключение, ее менять не нужно)
        const objCopy = JSON.parse(JSON.stringify(obj));
        /** Итоговый объект, который мы должны получить в результате работы deleteProps1and2() */
        const expectedResult = {
            customProp: true,
            myProp: "42",
        }

        const result = deleteProps1and2(obj);

        assert.deepEqual(result, expectedResult, "Test failed");
        assert.deepEqual(obj, objCopy, "Test failed");
        assert.notEqual(result, obj, "Test failed");
    }
}
{

    // todo: Дополните код для прохождения теста (Вернуть новый объект, содержащий все свойства двух входных объектов.
    //  У входных объектов нет повторяющихся свойств).
    //  !!! Для решения воспользоваться статическим методом класса Object !!!
    function unionObjects(objPart1, objPart2) {
        return Object.assign({}, objPart1, objPart2)
    }

    {
        const objPart1 = {
            prop1: 1,
            prop2: 2,
        };
        const objPart2 = {
            prop3: 3,
            prop4: 4,
            prop5: 5,
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строки ниже - исключение, ее менять не нужно)
        const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
        const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
        const expectedResult = {
            prop1: 1,
            prop2: 2,
            prop3: 3,
            prop4: 4,
            prop5: 5,
        }

        const result = unionObjects(objPart1, objPart2);

        assert.deepEqual(result, expectedResult, "Test failed");
        assert.notEqual(result, objPart1, "Test failed");
        assert.notEqual(result, objPart2, "Test failed");
        assert.deepEqual(objPart1, objPart1Copy, "Test failed");
        assert.deepEqual(objPart2, objPart2Copy, "Test failed");
    }
    {
        const objPart1 = {
            myProp: 1,
            anotherProp: '2',
        };
        const objPart2 = {
            additionalProp1: true,
            additionalProp2: 'prop1',
            additionalProp3: false,
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строки ниже - исключение, ее менять не нужно)
        const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
        const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
        const expectedResult = {
            myProp: 1,
            anotherProp: '2',
            additionalProp1: true,
            additionalProp2: 'prop1',
            additionalProp3: false,
        }

        const result = unionObjects(objPart1, objPart2);


        assert.deepEqual(result, expectedResult, "Test failed");
        assert.notEqual(result, objPart1, "Test failed");
        assert.notEqual(result, objPart2, "Test failed");
        assert.deepEqual(objPart1, objPart1Copy, "Test failed");
        assert.deepEqual(objPart2, objPart2Copy, "Test failed");
    }
}
{

    // todo: Дополните код для прохождения теста (Вернуть новый объект, содержащий все свойства двух входных объектов.
    //  У входных объектов нет повторяющихся свойств).
    //  !!! Для решения воспользоваться возможностями ECMAScript2015+ !!!
    function unionObjects(objPart1, objPart2) {
        return {...objPart1, ...objPart2}
    }

    {
        const objPart1 = {
            prop1: 1,
            prop2: 2,
        };
        const objPart2 = {
            prop3: 3,
            prop4: 4,
            prop5: 5,
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строки ниже - исключение, ее менять не нужно)
        const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
        const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
        const expectedResult = {
            prop1: 1,
            prop2: 2,
            prop3: 3,
            prop4: 4,
            prop5: 5,
        }

        const result = unionObjects(objPart1, objPart2);

        assert.deepEqual(result, expectedResult, "Test failed");
        assert.notEqual(result, objPart1, "Test failed");
        assert.notEqual(result, objPart2, "Test failed");
        assert.deepEqual(objPart1, objPart1Copy, "Test failed");
        assert.deepEqual(objPart2, objPart2Copy, "Test failed");
    }
    {
        const objPart1 = {
            myProp: 1,
            anotherProp: '2',
        };
        const objPart2 = {
            additionalProp1: true,
            additionalProp2: 'prop1',
            additionalProp3: false,
        };
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строки ниже - исключение, ее менять не нужно)
        const objPart1Copy = JSON.parse(JSON.stringify(objPart1));
        const objPart2Copy = JSON.parse(JSON.stringify(objPart2));
        const expectedResult = {
            myProp: 1,
            anotherProp: '2',
            additionalProp1: true,
            additionalProp2: 'prop1',
            additionalProp3: false,
        }

        const result = unionObjects(objPart1, objPart2);

        assert.deepEqual(result, expectedResult, "Test failed");
        assert.notEqual(result, objPart1, "Test failed");
        assert.notEqual(result, objPart2, "Test failed");
        assert.deepEqual(objPart1, objPart1Copy, "Test failed");
        assert.deepEqual(objPart2, objPart2Copy, "Test failed");
    }
}

{
    // todo: Написать функцию, которая будет возвращать новый объект с удаленными свойствами prop1 и prop2
    //  !!! Для решения воспользоваться возможностями ECMAScript2015+ !!!
    function createObjectWithoutProps1and2(inputObj) {
        const {prop1, prop2, ...remainder} = inputObj
        return remainder
    }

    {
        const inputObj = {
            prop1: 111,
            prop2: 222,
            prop3: 333,
            prop4: 444,
            prop5: 555,
        }
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строка ниже - исключение, ее менять не нужно)
        const expectedInputObj = JSON.parse(JSON.stringify(inputObj));
        const expectedResult = {
            prop3: 333,
            prop4: 444,
            prop5: 555,
        }

        const result = createObjectWithoutProps1and2(inputObj);

        assert.notEqual(result, inputObj, "Test failed. Original object modified ");
        assert.deepEqual(result, expectedResult, "Test failed. test() returned wrong object");
        assert.deepEqual(inputObj, expectedInputObj, "Test failed. Original object modified ");
    }
}

{
    // todo: Написать функцию, которая будет возвращать новый объект с удаленными свойствами prop1 и prop2
    //  !!! Для решения воспользоваться статическим методом класса Object !!!
    function createObjectWithoutProps1and2(inputObj) {
        const newInputObj = Object.assign({}, inputObj)
        delete newInputObj["prop1"]
        delete newInputObj["prop2"]
        return newInputObj
    }

    {
        const inputObj = {
            prop1: 111,
            prop2: 222,
            prop3: 333,
            prop4: 444,
            prop5: 555,
        }
        // Использование JSON.parse + JSON.stringify для копирования объектов недопустимо при решении тестового задания
        // (Строка ниже - исключение, ее менять не нужно)
        const expectedInputObj = JSON.parse(JSON.stringify(inputObj));
        const expectedResult = {
            prop3: 333,
            prop4: 444,
            prop5: 555,
        }

        const result = createObjectWithoutProps1and2(inputObj);

        assert.notEqual(result, inputObj, "Test failed. Original object modified ");
        assert.deepEqual(result, expectedResult, "Test failed. test() returned wrong object");
        assert.deepEqual(inputObj, expectedInputObj, "Test failed. Original object modified ");
    }
}
