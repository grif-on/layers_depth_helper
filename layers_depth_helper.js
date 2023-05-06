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
     * Указывает классу с каким файлом будет производится дальнейшие операции . 
     * @param {String} iniPathName Полный путь к файлу
     */
    static setTargetInin(iniPathName) {
        Option._filePathName = iniPathName;
        Option._filePath = "" /*todo*/;
    }

    /**
     * Проверяет наличие файла . Если файл был удалён , создаёт новый с настройками по умолчанию .
     */
    static scheckIni() {

        let globalScriptsPath = tiled.extensionsPath;
        let globalTiledPath = globalScriptsPath.slice(0, globalScriptsPath.lastIndexOf("/"));
        if (!File.exists(globalTiledPath + _filePath/*todo "/storage/layers_depth_helper"*/)) {
            File.makePath(globalTiledPath + _filePath/*todo "/storage/layers_depth_helper"*/);
        }

    }

    /**
     * Вносит изменение в имеющийся сохранённый параметр или при отсутствии создаёт его . 
     * @param {String} group Имя группы в которой находится параметр
     * @param {String} name Имя параметра
     * @param {String} value Что в себе хранит параметр
     * @param {String} type Тип хранимого значения в параметре
     */
    static set(group, name, value, type) {

    }

    /**
     * Получает значение из сохранённого параметра или при его отсутствии возвращает null . 
     * @param {String} group Имя группы в которой находится параметр
     * @param {String} name Имя параметра
     * @param {String} value Что в себе хранит параметр
     * @param {String} type Тип хранимого значения в параметре
     */
    static get(group, name, value, type) {

    }
}
Option._filePathName = "";
Option._filePath = "";

