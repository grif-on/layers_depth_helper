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
    constructor(pathName) {
        this.filePathName = pathName;
        this.filePath = "" /*todo*/;
    }

    /**
     * Создаёт и возвращает объект настроект используя файл .
     * Так же проверяет наличие файла . Если файл не существует , создаёт новый с настройками по умолчанию .
     * @param {String} pathName Полный путь к файлу .
     */
    static load(pathName) {
        let optionsHandle = new Options(pathName);
        if (!File.exists(optionsHandle.filePath)) {
            File.makePath(optionsHandle.filePath);
        }
        if (!File.exists(this.filePathName)) {
            let optionsRW = new TextFile(this.filePathName, TextFile.ReadWrite);
            optionsRW.write(Options._defaultSettings);
            optionsRW.close();
        }
        return optionsHandle;
    }

    /**
     * Записать этот объект настроект в файл использованный при его создании .
     */
    commit() {

    }

    /**
     * Устанавливает настройки по умолчанию для файлов создаваемых методом "load" если тот не нашёл искомого файла .
     * @param {String} plainText Строка которая будет записываться в файл .
     */
    static setDefaultSettings(plainText) {
        Options._defaultSettings = plainText;
    }

    /**
     * Вносит изменение в имеющийся сохранённый параметр или при отсутствии создаёт его . 
     * @param {String} group Имя группы в которой находится параметр ("" для глобального параметра вне всякой группы) .
     * @param {String} type Тип значения которое будет в параметре .
     * @param {String} name Имя параметра .
     * @param {String} value Что записать в параметр .
     */
    set(group, type, name, value) {

    }

    /**
     * Получает значение из сохранённого параметра или при его отсутствии возвращает null .
     * @param {String} group Имя группы в которой находится параметр ("" для глобального параметра вне всякой группы) .
     * @param {String} type Тип хранимого значения в параметре .
     * @param {String} name Имя параметра .
     */
    get(group, type, name) {

    }

}





Options.setDefaultSettings(";comment line\ntest_val=\"working\"");

let globalScriptsPath = tiled.extensionsPath;
let globalTiledPath = globalScriptsPath.slice(0, globalScriptsPath.lastIndexOf("/"));

let testOfOptions = Options.load(globalTiledPath + "storage/layers_depth_helper/options.ini");
tiled.log("default value - " + testOfOptions.get("", typeof (String), "test_val"));
testOfOptions.set("", typeof (String), "test_val", "changed");
tiled.log("changed value - " + testOfOptions.get("", typeof (String), "test_val"));
testOfOptions.commit();



