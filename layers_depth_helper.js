/// <reference types="@mapeditor/tiled-api" />
/*
MIT License

Copyright (c) 2023 Grif_on

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Intended for use in Tiled 1.8.6


class Options {

    /**
     * Создаёт и возвращает объект настроект используя строку .
     * @param {String} data Строка представляющяя из себя целиковый конфиг .
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * Создаёт и возвращает объект настроект используя файл .
     * Если файл не существует , возвращает null .
     * @param {String} pathName Путь к файлу .
     */
    static load(pathName) {
        if (File.exists(pathName)) {
            let optionsR = new TextFile(pathName, TextFile.ReadOnly);
            let optionsHandle = new Options(optionsR.readAll());
            optionsR.close();
            return optionsHandle;
        } else {
            return null;
        }
    }

    /**
     * Записать этот объект настроект в файл .     
     * @param {String} filePathName Путь к файлу .
     */
    commit(filePathName) {
        tiled.log("commit filePathName = " + filePathName);
        let filePath = filePathName.slice(0, filePathName.lastIndexOf("/"));
        tiled.log("commit filePath = " + filePath);
        if (!File.exists(filePath)) {
            File.makePath(filePath);
        }
        let optionsRW = new TextFile(filePathName, TextFile.ReadWrite);
        optionsRW.truncate();
        optionsRW.write(this.data);
        optionsRW.close();
    }

    /**
     * Вносит изменение в имеющийся сохранённый параметр или при отсутствии создаёт его . 
     * @param {String} group Имя группы в которой находится параметр ("" для глобального параметра вне всякой группы) .
     * @param {String} type Тип значения которое будет в параметре . "bool" , "int" , "float" или "string" .
     * @param {String} name Имя параметра .
     * @param {String} value Что записать в параметр .
     */
    set(group, type, name, value) {
        tiled.log("set() : type = " + type);

    }

    /**
     * Получает значение из сохранённого параметра или при его отсутствии возвращает null .
     * @param {String} group Имя группы в которой находится параметр ("" для глобального параметра вне всякой группы) .
     * @param {String} type Тип хранимого значения в параметре . "bool" , "int" , "float" или "string" .
     * @param {String} name Имя параметра .
     */
    get(group, type, name) {
        tiled.log("get() : type = " + type);

    }

}





let defaultIniStr = ";comment line\ntest_val=\"working\"";

let globalScriptsPath = tiled.extensionsPath;
let globalTiledPath = globalScriptsPath.slice(0, globalScriptsPath.lastIndexOf("/"));
let scriptStorage = globalTiledPath + "/storage/layers_depth_helper";
let scriptOptions = scriptStorage + "/options.ini";
tiled.log("globalScriptsPath = " + globalScriptsPath);
tiled.log("globalTiledPath = " + globalTiledPath);
tiled.log("scriptStorage = " + scriptStorage);
tiled.log("scriptOptions = " + scriptOptions);


if (!File.exists(scriptStorage)) {
    File.makePath(scriptStorage);
}

let testOfOptions = Options.load(scriptOptions);
if (testOfOptions === null) testOfOptions = new Options(defaultIniStr);

tiled.log("\tdefault value - " + testOfOptions.get("", "string", "test_val"));
testOfOptions.set("", "string", "test_val", "NEW VALUE");
tiled.log("\tchanged value - " + testOfOptions.get("", "string", "test_val"));
testOfOptions.commit(scriptOptions);

let testOfOptions2 = Options.load(scriptOptions);
if (testOfOptions2 === null) testOfOptions2 = new Options(defaultIniStr);
tiled.log("\tsecond read value - " + testOfOptions2.get("", "string", "test_val"));

