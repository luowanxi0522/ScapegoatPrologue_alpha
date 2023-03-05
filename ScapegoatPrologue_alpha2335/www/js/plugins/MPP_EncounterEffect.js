//=============================================================================
// MPP_EncounterEffect.js
//=============================================================================
// Copyright (c) 2021 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc 将相遇时的效果更改为特殊效果。
 * @author Mokusei Penguin
 * @url 
 *
 * @help [version 3.3.3]
 * This plugin is for RPG Maker MV and MZ.
 * 
 * ▼ Plugin command
 *  In the item to enter a numerical value, the variable N is
 *  referred to by writing v[N].
 *  
 *  〇 MV / MZ
 *  
 *  〇 EncEffType type  / setType
 *       type : Effect type
 *   - The effect type will be changed to the specified number
 *     only once next.
 * 
 *  〇 EncEffChar evId  / setCharacter
 *       evId : ID of the event that is the core of the effect
 *   - The effect will be executed around the specified character
 *     only once next.
 *     (-1:Player, 0:This Event, 1-:Event with specified ID)
 *   - This setting is valid only for effect type 1.
 *   
 *  〇 EncEffColor r g b  / setColor
 *       r g b : Effect color(RGB)
 *   - The effect will change to the specified color
 *     only once next.
 * 
 * ▼ Plugin command supplement (MZ)
 *  In the item to enter a numerical value, select the Text and
 *  write v[N] to refer to the variable N.
 * 
 * ▼ Effect type
 *  0 : Default
 *  1 : Breaks around the character
 *  2 : Break from the left side of the screen
 *  3 : The entire screen scatters to the front
 * 
 * ▼ Other
 *  - In effect type 1, if the main character is not specified,
 *    [Player] will be the center for random encounters,
 *    and [This Event] will be the center for
 *    the event command [Battle Processing].
 *  - When executed on a mobile device, some effects will be
 *    omitted due to weight reduction.
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @command setType
 *      @desc Change the effect type only in the next battle.
 *      @arg type
 *          @desc 
 *          @type number
 *              @min 0
 *              @max 3
 *          @default 1
 *
 *
 *  @command setCharacter
 *      @desc Specify the main character for the next effect.
 * This setting is valid only for effect type 1.
 *      @arg character
 *          @desc -1:Player, 0:This event, 1-:Event with specified ID
 *          @type number
 *              @min -1
 *              @max 999
 *          @default 0
 *
 *  @command setColor
 *      @desc Specifies the color of the next effect.
 *      @arg color
 *          @desc R,G,B
 *          @default 255,255,255
 *
 * 
 *  @param Effect Type
 *      @desc 
 *      @type number
 *          @min 0
 *          @max 3
 *      @default 1
 * 
 *  @param Effect Color
 *      @desc R,G,B
 *      @default 255,255,255
 * 
 */

/*:ja
 * @target MV MZ
 * @plugindesc エンカウント時の演出を特殊なエフェクトに変更します。
 * @author 木星ペンギン
 * @url 
 *
 * @help [version 3.3.3]
 * このプラグインはRPGツクールMVおよびMZ用です。
 * 
 * ▼ プラグインコマンド(MV)
 *  数値を入力する項目では、v[N] と記述することで変数N番を参照します。
 *  
 *  〇 MV / MZ
 *  
 *  〇 EncEffType type  / エフェクトタイプ変更
 *       type : エフェクトタイプ
 *   - 次の１回のみ、エフェクトタイプが指定した番号に変更されます。
 * 
 *  〇 EncEffChar evId  / 中心キャラ指定
 *       evId : エフェクトの中心となるイベントのID
 *   - 次の１回のみ、エフェクトが指定したキャラクターを中心に実行されます。
 *     (-1:プレイヤー, 0:このイベント, 1～:指定したIDのイベント)
 *   - この設定はエフェクトタイプ1のみ有効です。
 *   
 *  〇 EncEffColor r g b  / エフェクト色指定
 *       r g b : エフェクトの色(RGB)
 *   - 次の１回のみ、エフェクトが指定した色に変更されます。
 * 
 * ▼ プラグインコマンド 補足(MZ)
 *  数値を入力する項目で、テキストを選択して v[N] と記述することで
 *  変数N番を参照します。
 * 
 * ▼ エフェクトタイプ
 *  0 : デフォルト
 *  1 : キャラクターを中心に割れる
 *  2 : 画面の左から割れる
 *  3 : 画面全体が前面に飛び散る
 * 
 * ▼ その他
 *  - エフェクトタイプ1にて、中心となるキャラクターを指定していない場合、
 *    ランダムエンカウントでは[プレイヤー]、
 *    イベントコマンドの【戦闘の処理】では[このイベント]が中心となります。
 *  - モバイル機器で実行した場合、軽量化のため一部の演出が省略されます。
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @command setType
 *      @text エフェクトタイプ変更
 *      @desc 次に行う戦闘のみエフェクトタイプを変更します。
 *      @arg type
 *          @text タイプ
 *          @desc エフェクトタイプ
 *          @type number
 *              @min 0
 *              @max 3
 *          @default 1
 *
 *  @command setCharacter
 *      @text 中心キャラ指定
 *      @desc 次に行うエフェクトで中心となるキャラクターを指定します。
 * この設定はエフェクトタイプ1でのみ有効です。
 *      @arg character
 *          @text キャラクター
 *          @desc 中心となるキャラクター
 * -1:プレイヤー, 0:このイベント, 1～:指定したIDのイベント
 *          @type number
 *              @min -1
 *              @max 999
 *          @default 0
 *
 *  @command setColor
 *      @text エフェクト色指定
 *      @desc 次に行うエフェクトの色を指定します。
 *      @arg color
 *          @text 色(RGB)
 *          @desc 
 *          @default 255,255,255
 *
 * 
 *  @param Effect Type
 *      @text エフェクトタイプ
 *      @desc 画面割れエフェクトのタイプ
 *      @type number
 *          @min 0
 *          @max 3
 *      @default 1
 * 
 *  @param Effect Color
 *      @text エフェクト色
 *      @desc エフェクトのデフォルト色
 * (r,g,bで指定)
 *      @default 255,255,255
 * 
 *
 */

(() => {
    'use strict';
    
    const pluginName = 'MPP_EncounterEffect';
    
    // Plugin Parameters
    const parameters = PluginManager.parameters(pluginName);
    
    const param_EffectType = Number(parameters['Effect Type'] || 2);
    const param_DefaultColor = parameters['Effect Color'].split(',').map(Number);
    
    // Dealing with other plugins
    const _importedPlugin = (...names) => {
        return names.some(name => PluginManager._scripts.includes(name));
    };
    const pluginOptions = [
        'MPP_EncounterEffect_Op1',
        'MPP_EncounterEffect_Op2'
    ];
    
    // Database
    const DATABASE = [
        null,
        {// Type 1
            'Shape Type':'square',
            'Break Duration':45,
            'Interval Duration':45,
            'Scatter Duration':0,
            'Move Duration':60,
            'Split Radial':8,
            'Radial Random Rate':90,
            'Circle Radius':96,
            'Circle Increase Rate':150,
            'Circle Random Rate':40
        },
        {// Type 2
            'Shape Type':'random',
            'Break Direction':'left',
            'Break Duration':30,
            'Interval Duration':45,
            'Scatter Direction':'left',
            'Scatter Duration':35,
            'Move Duration':70,
            'Split X':7,
            'X Random Rate':80,
            'Split Y':5,
            'Y Random Rate':80
        },
        {// Type 3
            'Shape Type':'triangle',
            'Break Direction':'inside',
            'Break Duration':35,
            'Interval Duration':40,
            'Scatter Duration':16,
            'Move Duration':100,
            'Split X':8,
            'X Random Rate':80,
            'Split Y':6,
            'Y Random Rate':80
        }
    ];
    
    //-------------------------------------------------------------------------
    // Array
    
    if (!Array.prototype.flat) {
        Array.prototype.flat = function (depth) {
            const rec = (flattend, array, depth) => {
                for (const elem of array) {
                    if (Array.isArray(elem) && depth > 0) {
                        rec(flattend, elem, depth - 1);
                    } else {
                        flattend.push(elem);
                    }
                }
                return flattend;
            };
            return rec([], this, depth !== undefined ? Math.floor(depth) : 1);
        };
    }

    //-------------------------------------------------------------------------
    // EncounterEffect

    function EncounterEffect() {
        throw new Error('This is a static class');
    }
    
    if (_importedPlugin(...pluginOptions)) {
        window.EncounterEffect = EncounterEffect;
    }
    
    EncounterEffect.snap = null;
    EncounterEffect.center = new Point();
    EncounterEffect.opacity = 0;
    EncounterEffect._fragments = null;
    EncounterEffect._type = param_EffectType;
    EncounterEffect._character = null;
    EncounterEffect._color = param_DefaultColor;
    EncounterEffect._effectDelay = 0;

    EncounterEffect.clear = function() {
        this.snap = null;
        this.opacity = 0;
        this._fragments = null;
        this._type = param_EffectType;
        this._character = null;
        this._color = param_DefaultColor;
        this._effectDelay = 0;
    };

    EncounterEffect.destroy = function() {
        this.snap.destroy();
        this._fragments.forEach(fragment => fragment.destroy());
    };

    EncounterEffect.params = function() {
        return DATABASE[this._type];
    };

    EncounterEffect.zoom = function() {
        return Utils.isMobileDevice() ? 4 : 2;
    };

    EncounterEffect.setup = function(snap) {
        this.snap = snap;
        this.opacity = 255;
        this._opacityDuration = 0;
        this._fragments = [];
        this._params = this.params();
        this.setupwindowBounds();
        this.setupCenter();
        this.createPolygons();
        this.startEffectDelay();
    };

    EncounterEffect.setupwindowBounds = function() {
        this.windowBounds = {
            minX:0,
            maxX:Graphics.width,
            minY:0,
            maxY:Graphics.height
        };
    };

    EncounterEffect.setupCenter = function() {
        const bounds = this.windowBounds;
        const char = this.centerCharacter();
        const cx = Math.round(char.screenX()).clamp(bounds.minX, bounds.maxX);
        const cy = Math.round(char.screenY() - 24)
                       .clamp(bounds.minY, bounds.maxY);
        this.center.set(cx, cy);
    };

    EncounterEffect.createPolygons = function() {
        switch (this._type) {
            case 1:
                this.createPolygonsT1();
                break;
            case 2:
            case 3:
                this.createPolygonsT2();
                break;
        }
    };

    EncounterEffect.setType = function(type) {
        this._type = type;
    };

    EncounterEffect.type = function() {
        return this._type;
    };

    EncounterEffect.setColor = function(...color) {
        this._color = color;
    };

    EncounterEffect.color = function() {
        return this._color;
    };

    EncounterEffect.setCharacter = function(character) {
        this._character = character;
    };

    EncounterEffect.centerCharacter = function() {
        return this._character
            ? this._character
            : $gameMap.getInterpreterCharacter(0) || $gamePlayer;
    };

    EncounterEffect.createPolygonsT1 = function() {
        const sType = this._params['Shape Type'] || 'square';
        const allPoints = this.createAllPointsT1();
        
        this.iteratePointT1(allPoints, (p1, p2, p3, p4) => {
            const polygon = [];
            if (p2) {
                if (this.isOutPolygon(p1, p2)) return;
                if (sType === 'square') {
                    polygon.push(p1, p2);
                } else {
                    this.addPolygon(this.uniqPolygon([p1, p2, p3]));
                    polygon.push(p1);
                }
            } else {
                polygon.push(p1);
            }
            if (this.setCorrectPoints(polygon, p3, p4)) {
                this.addPolygon(this.uniqPolygon(polygon));
            }
        });
    };
    
    EncounterEffect.iteratePointT1 = function(allPoints, callback) {
        const splitX = this._params['Split Radial'] || 8;
        this._cornerFlag = [null, null, null, null];
        for (let i = 0; i < allPoints.length; i++) {
            const inPoints = i > 0 ? allPoints[i - 1] : null;
            const outPoints = allPoints[i];
            for (let j = 0; j < splitX; j++) {
                const point3 = outPoints[j];
                const point4 = outPoints[(j + 1) % splitX];
                if (i > 0) {
                    const point1 = inPoints[(j + 1) % splitX];
                    const point2 = inPoints[j];
                    callback(point1, point2, point3, point4);
                } else {
                    callback(this.center, null, point3, point4);
                }
            }
            if (!this._cornerFlag.includes(null)) break;
        }
    };

    EncounterEffect.uniqPolygon = function(polygon) {
        return polygon.filter((point1, i) => {
            return polygon.findIndex( point2 => point2.equals(point1) ) === i;
        });
    };

    EncounterEffect.createAllPointsT1 = function() {
        const {
            'Shape Type': sType = 'square',
            'Split Radial': splitX = 8,
            'Circle Radius': baseHeight = 96,
            'Circle Increase Rate': circleRate = 150
        } = this._params;
        const maxRadius = this.maxRadius();

        const allPoints = [];
        let startR = Math.random() * 2;
        let baseR = 0;
        let height = baseHeight;
        for (let i = 0; i < 8; i++) {
            if (sType === 'triangle') startR += 1 / splitX;
            if (i === 7) baseR = 1000000;
            allPoints[i] = this.createRoundPoints(startR, baseR, height);
            if (baseR > maxRadius) break;
            baseR += height;
            height *= circleRate / 100;
        }
        return allPoints;
    };

    EncounterEffect.createRoundPoints = function(startR, baseR, height) {
        const {
            'Split Radial': splitX = 8,
            'Radial Random Rate': rRate = 90,
            'Circle Random Rate': cRate = 40
        } = this._params;
        const baseAngle = 2 / splitX;
        
        const randomAngle = (n) => {
            return startR + baseAngle * n +
                    baseAngle * rRate * Math.random() / 100;
        };
        const randomRadius = () => {
            return baseR + height * (1 - cRate * (0.75 - Math.random()) / 100);
        };
        
        const points = [];
        for (let i = 0; i < splitX; i++) {
            points[i] = this.calculatePoint(randomAngle(i) % 2, randomRadius());
        }
        return points;
    };

    EncounterEffect.calculatePoint = function(angle, radius) {
        const bounds = this.windowBounds;
        const { x: cx, y: cy } = this.center;
        let sx = radius * Math.cos(angle * Math.PI);
        let sy = radius * Math.sin(angle * Math.PI);
        if (sx !== 0 && cx + sx < bounds.minX) {
            sy *= (bounds.minX - cx) / sx;
            sx = bounds.minX - cx;
        }
        if (sx !== 0 && cx + sx > bounds.maxX) {
            sy *= (bounds.maxX - cx) / sx;
            sx = bounds.maxX - cx;
        }
        if (sy !== 0 && cy + sy < bounds.minY) {
            sx *= (bounds.minY - cy) / sy;
            sy = bounds.minY - cy;
        }
        if (sy !== 0 && cy + sy > bounds.maxY) {
            sx *= (bounds.maxY - cy) / sy;
            sy = bounds.maxY - cy;
        }
        return new Point(Math.round(cx + sx), Math.round(cy + sy));
    };

    EncounterEffect.maxRadius = function() {
        const { width, height } = Graphics;
        const { x: cx, y: cy } = this.center;
        const deltaX = cx < width / 2 ? width - cx : cx;
        const deltaY = cy < height / 2 ? height - cy : cy;
        return Math.hypot(deltaX, deltaY);
    };

    EncounterEffect.createPolygonsT2 = function() {
        const {
            'Shape Type': sType = 'square',
            'Break Direction': direction = 'left'
        } = this._params;
        switch (sType) {
            case 'square':
                this.createPolygonsT2Square();
                break;
            case 'triangle':
                this.createPolygonsT2Triangle();
                break;
            case 'random':
                this.createPolygonsT2Random();
                break;
        }
        this.sortFragment(direction);
    };

    EncounterEffect.createPolygonsT2Square = function() {
        const allPoints = this.createAllPointsT2Square();
        this.iteratePointT2(allPoints, (...points) => {
            this.addPolygon(points);
        });
    };

    EncounterEffect.iteratePointT2 = function(allPoints, callback) {
        const {
            'Split X': splitX = 12,
            'Split Y': splitY = 9
        } = this._params;
        for (let i = 0; i < splitX; i++) {
            const leftPoints = allPoints[i];
            const rightPoints = allPoints[i + 1];
            for (let j = 0; j < splitY; j++) {
                const point1 = leftPoints[j + 1];
                const point2 = leftPoints[j];
                const point3 = rightPoints[j];
                const point4 = rightPoints[j + 1];
                callback(point1, point2, point3, point4);
            }
        }
    };

    EncounterEffect.createAllPointsT2Square = function() {
        const {
            'Split X': splitX = 12,
            'Split Y': splitY = 9,
            'X Random Rate': xRate = 80,
            'Y Random Rate': yRate = 80
        } = this._params;
        const bounds = this.windowBounds;
        const width = Graphics.width / Math.max(splitX - xRate / 100, 1);
        const height = Graphics.height / Math.max(splitY - yRate / 100, 1);
        
        const pointX = (i) => {
            if (i === 0) return bounds.minX;
            if (i === splitX) return bounds.maxX;
            return this.randomValue(width, i, xRate);
        };
        const pointY = (j) => {
            if (j === 0) return bounds.minY;
            if (j === splitY) return bounds.maxY;
            return this.randomValue(height, j, yRate);
        };
        
        const allPoints = [];
        for (let i = 0; i <= splitX; i++) {
            const points = [];
            for (let j = 0; j <= splitY; j++) {
                points[j] = new Point(pointX(i), pointY(j));
            }
            allPoints[i] = points;
        }
        return allPoints;
    };

    EncounterEffect.randomValue = function(value, index, rate) {
        return Math.round(value * (index - rate * Math.random() / 100));
    };

    EncounterEffect.createPolygonsT2Triangle = function() {
        const allPoints = this.createAllPointsT2Triangle();
        this.iteratePointT2(allPoints, (p1, p2, p3, p4) => {
            if (p2.y > p3.y || (p2.y === p3.y && p1.y > p4.y)) {
                this.addPolygon([p1, p2, p4]);
                this.addPolygon([p2, p3, p4]);
            } else {
                this.addPolygon([p1, p2, p3]);
                this.addPolygon([p1, p3, p4]);
            }
        });
    };

    EncounterEffect.createAllPointsT2Triangle = function() {
        const {
            'Split X': splitX = 12,
            'Split Y': splitY = 9,
            'X Random Rate': xRate = 80,
            'Y Random Rate': yRate = 80
        } = this._params;
        const bounds = this.windowBounds;
        const width = Graphics.width / Math.max(splitX - xRate / 100, 1);
        const height = Graphics.height / Math.max(splitY - 0.5, 1);
        const bottomY = height / 2 * yRate / 100;
        
        const pointX = (i) =>{
            if (i === 0) return bounds.minX;
            if (i === splitX) return bounds.maxX;
            return this.randomValue(width, i, xRate);
        };
        const pointY = (i, j) => {
            if (j === 0) return bounds.minY;
            if (j === splitY) return bounds.maxY;
            let py = bottomY;
            if (i % 2 === 1) {
                if (j === 1) return this.randomValue(height / 2, j, yRate);
                py -= height / 2;
            }
            return py + this.randomValue(height, j, yRate);
        };
        
        const allPoints = [];
        for (let i = 0; i <= splitX; i++) {
            const points = [];
            for (let j = 0; j <= splitY; j++) {
                points[j] = new Point(pointX(i), pointY(i, j));
            }
            allPoints[i] = points;
        }
        return allPoints;
    };

    EncounterEffect.createPolygonsT2Random = function() {
        const allBasePolygons = this.createBasePolygonsT2Random();
        
        const sidePolygon = (n, m, pos) => {
            const si = n + (pos === 0 || pos === 1 ? -1 : 1);
            const subPolygons = allBasePolygons[si];
            if (subPolygons) {
                const sj = Math.floor(m / 2) * 2;
                const polygon2 = subPolygons[sj];
                if (Math.floor(pos / 2) === Math.floor(polygon2.pos / 2)) {
                    return subPolygons[sj + 1];
                }
                return polygon2;
            }
            return null;
        };
        
        allBasePolygons.forEach((mainPolygons, i) => {
            mainPolygons.forEach((polygon1, j) => {
                if (polygon1.state === 'none') {
                    const d = Math.randomInt(3);
                    let polygon2;
                    if (d === 0)      polygon2 = mainPolygons[j - 1];
                    else if (d === 1) polygon2 = mainPolygons[j + 1];
                    else          polygon2 = sidePolygon(i, j, polygon1.pos);
                    if (polygon2 && polygon2.state === 'none') {
                        this.joinPolygon(polygon1, polygon2, d);
                    }
                }
            });
        });
        allBasePolygons.flat().forEach(polygon => {
            if (polygon.state === 'none' || polygon.state === 'received') {
                this.addPolygon(polygon.polygon);
            }
        });
    };

    EncounterEffect.createBasePolygonsT2Random = function() {
        const allPoints = this.createAllPointsT2Square();
        const polygons = [];
        this.iteratePointT2(allPoints, (p1, p2, p3, p4) => {
            if (Math.random() < 0.5) {
                polygons.push(
                    { polygon:[p1, p2, p3], pos:0, state:'none' },
                    { polygon:[p1, p3, p4], pos:3, state:'none' }
                );
            } else {
                polygons.push(
                    { polygon:[p2, p3, p4], pos:2, state:'none' },
                    { polygon:[p1, p2, p4], pos:1, state:'none' }
                );
            }
        });
        
        const splitY = this._params['Split Y'] || 9;
        const allPolygons = [];
        while (polygons.length > 0) {
            allPolygons.push(polygons.splice(0, splitY * 2));
        }
        return allPolygons;
    };

    EncounterEffect.joinPolygon = function(polygon1, polygon2, d) {
        const pos1 = polygon1.pos;
        const pos2 = polygon2.pos;
        let start = 0, index = 0;
        if (d === 0) {
            start = pos1 === 0 || pos1 === 1 ? 2 : 1;
            index = 1;
        } else if (d === 1) {
            start = 0;
            index = pos1 === 0 ? 2 : pos1 === 2 ? 0 : pos2 === 0 ? 0 : 2;
        } else {
            start = pos1 === 0 || pos1 === 1 ? 1 : 2;
            index = pos2 === 0 || pos2 === 1 ? 2 : 0;
        }
        polygon1.polygon.splice(start, 0, polygon2.polygon[index]);
        polygon1.state = 'received';
        polygon2.state = 'joined';
    };

    EncounterEffect.addPolygon = function(polygon) {
        const fragment = new Encounter_Fragment(polygon);
        if (fragment.isValid()) {
            fragment.setup(this.snap);
            this._fragments.push(fragment);
        }
    };

    EncounterEffect.isOutPolygon = function(pos1, pos2) {
        const bounds = this.windowBounds;
        if (pos1.x === bounds.minX && pos2.x === bounds.minX) return true;
        if (pos1.x === bounds.maxX && pos2.x === bounds.maxX) return true;
        if (pos1.y === bounds.minY && pos2.y === bounds.minY) return true;
        if (pos1.y === bounds.maxY && pos2.y === bounds.maxY) return true;
        return false;
    };
    
    EncounterEffect.setCorrectPoints = function(polygon, pos1, pos2) {
        const bounds = this.windowBounds;
        polygon.push(pos1);
        if (pos1.x === bounds.minX && pos2.y === bounds.minY) {
            if (!this.pushCorner(polygon, 0)) return false;
        } else if (pos1.y === bounds.maxY && pos2.x === bounds.minX) {
            if (!this.pushCorner(polygon, 1)) return false;
        } else if (pos1.y === bounds.minY && pos2.x === bounds.maxX) {
            if (!this.pushCorner(polygon, 2)) return false;
        } else if (pos1.x === bounds.maxX && pos2.y === bounds.maxY) {
            if (!this.pushCorner(polygon, 3)) return false;
        } else if (pos1.x === bounds.minX && pos2.x === bounds.maxX) {
            if (!this.pushCorner(polygon, 0)) return false;
            if (!this.pushCorner(polygon, 2)) return false;
        } else if (pos1.y === bounds.maxY && pos2.y === bounds.minY) {
            if (!this.pushCorner(polygon, 1)) return false;
            if (!this.pushCorner(polygon, 0)) return false;
        } else if (pos1.y === bounds.minY && pos2.y === bounds.maxY) {
            if (!this.pushCorner(polygon, 2)) return false;
            if (!this.pushCorner(polygon, 3)) return false;
        } else if (pos1.x === bounds.maxX && pos2.x === bounds.minX) {
            if (!this.pushCorner(polygon, 3)) return false;
            if (!this.pushCorner(polygon, 1)) return false;
        }
        polygon.push(pos2);
        return true;
    };
    
    EncounterEffect.pushCorner = function(polygon, c) {
        if (!this._cornerFlag[c]) {
            polygon.push(this.getCornerPoint(c));
            this._cornerFlag[c] = polygon;
            return true;
        }
        return false;
    };

    EncounterEffect.getCornerPoint = function(c) {
        const bounds = this.windowBounds;
        return new Point(
            c === 0 || c === 1 ? bounds.minX : bounds.maxX,
            c === 0 || c === 2 ? bounds.minY : bounds.maxY
        );
    };

    EncounterEffect.sortFragment = function(direction) {
        const formula = this.compareFormula(direction);
        if (formula) this._fragments.sort((a, b) => formula(a) - formula(b));
    };

    EncounterEffect.compareFormula = function(direction) {
        const cx = Graphics.width / 2;
        const cy = Graphics.height / 2;
        switch (direction) {
            case 'left':
                return (p) => {
                    return p.x;
                };
            case 'center':
                return (p) => {
                    return Math.abs(cx - p.x);
                };
            case 'right':
                return (p) => {
                    return -p.x;
                };
            case 'inside':
                return (p) => {
                    return Math.abs(cx - p.x) + Math.abs(cy - p.y) * cy / cx;
                };
            case 'outside':
                return (p) => {
                    return -Math.abs(cx - p.x) - Math.abs(cy - p.y) * cy / cx;
                };
        }
        return null;
    };

    EncounterEffect.breakFragments = function(start, end, duration) {
        this._fragments.slice(start, end).forEach(
            fragment => fragment.onBreak(this._color, duration)
        );
    };

    EncounterEffect.onClip = function(polygon, rect) {
        const context = this.snap.context;
        context.save();
        context.beginPath();
        polygon.forEach((point, i) => {
            i === 0
                ? context.moveTo(point.x, point.y)
                : context.lineTo(point.x, point.y);
        });
        context.closePath();
        context.clip();
        context.clearRect(rect.x, rect.y, rect.width, rect.height);
        context.restore();
        this.snap._baseTexture.update();
    };

    EncounterEffect.onBreakEnd = function() {
        this.snap.fillAll('black');
        this._fragments.forEach(fragment => fragment.clearClip());
    };

    EncounterEffect.onBattleStart = function() {
        const {
            'Move Duration': duration = 60,
            'Scatter Duration': delay = 0
        } = this._params;
        this.startFragments(duration);
        this.setFragmentsDelay(delay);
        this._opacityDuration = duration;
    };

    EncounterEffect.startFragments = function(duration) {
        switch (this._type) {
            case 1:
                this._fragments.forEach(f => f.onBattleStartT1(duration));
                this.opacity = 300;
                break;
            case 2: {
                const d = this._params['Scatter Direction'] || 'left';
                this.sortFragment(d);
                this._fragments.forEach(f => f.onBattleStartT2(duration, d));
                this.opacity = 640;
                break;
            }
            case 3:
                this.sortFragment('inside');
                this._fragments.forEach(f => f.onBattleStartT3(duration));
                this.opacity = 640;
                break;
        }
    };

    EncounterEffect.setFragmentsDelay = function(delay) {
        const maxItems = this.maxItems();
        this._fragments.forEach((fragment, i) => {
            fragment.setDelay(Math.floor(delay * i / maxItems ));
        });
    };

    EncounterEffect.update = function() {
        if (this.isRunning()) {
            this._fragments.forEach(fragment => fragment.update());
            this.updateOpacity();
            if (this.opacity === 0) {
                this.destroy();
                this.clear();
            }
        }
    };

    EncounterEffect.updateOpacity = function() {
        if (this._opacityDuration > 0) {
            const d = this._opacityDuration;
            this.opacity *= (d - 1) / d;
            this._opacityDuration--;
        }
    };

    EncounterEffect.maxItems = function() {
        return this._fragments ? this._fragments.length : 0;
    };

    EncounterEffect.fragments = function() {
        return this._fragments || [];
    };

    EncounterEffect.isValid = function() {
        return !!this.params();
    };

    EncounterEffect.isRunning = function() {
        return !!this._fragments;
    };

    EncounterEffect.isReady = function() {
        return !this.isRunning() || this._opacityDuration < 45;
    };

    EncounterEffect.breakDuration = function() {
        return this._params ? this._params['Break Duration'] || 45 : 45;
    };

    EncounterEffect.effectSpeed = function() {
        const d = this._params ? this._params['Interval Duration'] || 45 : 45;
        return this.breakDuration() + d;
    };

    EncounterEffect.fadeSpeed = function() {
        return this._params
            ? Math.min(this._params['Move Duration'] || 60, 60)
            : 60;
    };

    EncounterEffect.startEffectDelay = function() {
        this._effectDelay = 4;
    };

    EncounterEffect.updateEffectDelay = function() {
        if (this._effectDelay > 0) this._effectDelay--;
    };

    EncounterEffect.isEffectReady = function() {
        return this._effectDelay === 0;
    };

    //-------------------------------------------------------------------------
    // Encounter_Fragment

    function Encounter_Fragment() {
        this.initialize(...arguments);
    }

    if (_importedPlugin(...pluginOptions)) {
        window.Encounter_Fragment = Encounter_Fragment;
    }

    Encounter_Fragment.prototype.initialize = function(polygon) {
        this._polygon = polygon;
        this.initRect();
        this._flash = false;
        this._clip = false;
        this._delay = 0;
        this.visible = false;
    };

    Encounter_Fragment.prototype.initRect = function() {
        const polygon = this._polygon;
        const allX = polygon.map( point => point.x );
        const allY = polygon.map( point => point.y );
        const rect = new Rectangle();
        rect.x = Math.min(...allX);
        rect.y = Math.min(...allY);
        rect.width = Math.max(...allX) - rect.x;
        rect.height = Math.max(...allY) - rect.y;
        this._rect = rect;
    };

    Encounter_Fragment.prototype.createBitmap = function() {
        const rect = this._rect;
        const zoom = EncounterEffect.zoom();
        const bw = Math.ceil(rect.width / zoom) + 2;
        const bh = Math.ceil(rect.height / zoom) + 2;
        this.bitmap = new Bitmap(bw, bh);
        this.bitmap.smooth = true;
    };

    Encounter_Fragment.prototype.initPolygon = function() {
        const polygon = this._polygon;
        const rect = this._rect;
        const zoom = EncounterEffect.zoom();
        const context = this.bitmap.context;
        context.translate(-rect.x / zoom + 1, -rect.y / zoom + 1);
        context.beginPath();
        polygon.forEach((point, i) => {
            i === 0
                ? context.moveTo(point.x / zoom, point.y / zoom)
                : context.lineTo(point.x / zoom, point.y / zoom);
        });
        context.closePath();
    };

    Encounter_Fragment.prototype.initPosition = function() {
        const rect = this._rect;
        this.x = rect.x + Math.floor(rect.width / 2);
        this.y = rect.y + Math.floor(rect.height / 2);
        this.jumpHeight = 0;
        this._targetX = 0;
        this._targetY = 0;
        this._zoom = EncounterEffect.zoom();
        this._targetZoom = this._zoom;
        this._moveDuration = 0;
    };

    Encounter_Fragment.prototype.initRotation = function() {
        this._speed = 0;
        this._pace = 0;
        this._rotationX = 0;
        this._rotationY = 0;
        this._rotationZ = 0;
        const rate = this.rotationRate();
        if (Math.random() < 0.5) {
            this._rotationSpeedX = (Math.random() + 0.5) * 2 * rate;
            this._rotationSpeedX *= Math.random() < 0.5 ? -1 : 1;
            this._rotationSpeedY = 0;
        } else {
            this._rotationSpeedX = 0;
            this._rotationSpeedY = (Math.random() + 0.5) * 2 * rate;
            this._rotationSpeedY *= Math.random() < 0.5 ? -1 : 1;
        }
        this._rotationSpeedZ = (Math.random() - 0.5) * 2 * rate;
    };

    Encounter_Fragment.prototype.destroy = function() {
        this.bitmap.destroy();
    };

    Encounter_Fragment.prototype.isValid = function() {
        return this._rect.width > 4 && this._rect.height > 4;
    };

    Encounter_Fragment.prototype.clearFlash = function() {
        this._flash = false;
    };

    Encounter_Fragment.prototype.isFlashRequested = function() {
        return !!this._flash;
    };

    Encounter_Fragment.prototype.needClip = function() {
        return !Utils.isMobileDevice();
    };

    Encounter_Fragment.prototype.clearClip = function() {
        this._clip = false;
    };

    Encounter_Fragment.prototype.isClipRequested = function() {
        return !!this._clip;
    };

    Encounter_Fragment.prototype.lineWidth = function() {
        return 4;
    };

    Encounter_Fragment.prototype.flashOpacity = function() {
        return 255;
    };

    Encounter_Fragment.prototype.breakRate = function() {
        return 1;
    };

    Encounter_Fragment.prototype.slideRate = function() {
        return 1;
    };

    Encounter_Fragment.prototype.rotationRate = function() {
        return 1;
    };

    Encounter_Fragment.prototype.flashColor = function() {
        const color = [...EncounterEffect.color()];
        color[3] = this.flashOpacity();
        return color;
    };
    
    Encounter_Fragment.prototype.setup = function(snap) {
        this.createBitmap();
        this.initPolygon();
        this.initPosition();
        this.initRotation();
        this.setupSnap(snap);
    };
    
    Encounter_Fragment.prototype.setupSnap = function(snap) {
        const rect = this._rect;
        const zoom = EncounterEffect.zoom();
        const context = this.bitmap.context;
        context.save();
        context.clip();
        let sx = rect.x;
        let sy = rect.y;
        switch (EncounterEffect.type()) {
            case 1: {
                const center = EncounterEffect.center;
                const radian = Math.atan2(this.y - center.y, this.x - center.x);
                sx -= 20 * Math.cos(radian) * this.slideRate();
                sy -= 20 * Math.sin(radian) * this.slideRate();
                break;
            }
            case 2:
            case 3: {
                const bounds = EncounterEffect.windowBounds;
                sx += (Math.randomInt(21) - 10) * this.slideRate();
                sy += (Math.randomInt(21) - 10) * this.slideRate();
                sx = sx.clamp(bounds.minX, bounds.maxX - rect.width);
                sy = sy.clamp(bounds.minY, bounds.maxY - rect.height);
                break;
            }
        }
        const dx = rect.x / zoom;
        const dy = rect.y / zoom;
        const dw = rect.width / zoom;
        const dh = rect.height / zoom;
        context.drawImage(
            snap.canvas, sx, sy, rect.width, rect.height, dx, dy, dw, dh
        );
        context.restore();
        this.bitmap.baseTexture.update();
    };

    Encounter_Fragment.prototype.onBreak = function(color, duration) {
        this.drawLine(color);
        this.startEncounter(duration);
        this._flash = true;
        this._clip = true;
        this.visible = true;
    };
    
    Encounter_Fragment.prototype.onClip = function() {
        if (this.needClip()) EncounterEffect.onClip(this._polygon, this._rect);
    };
    
    Encounter_Fragment.prototype.drawLine = function(color) {
        const lineWidth = this.lineWidth();
        if (lineWidth > 0) {
            const context = this.bitmap.context;
            context.lineWidth = lineWidth / EncounterEffect.zoom();
            context.strokeStyle = 'rgb(%1,%2,%3)'.format(...color);
            context.globalAlpha = 0.5;
            context.stroke();
            context.globalAlpha = 1;
        }
    };

    Encounter_Fragment.prototype.update = function() {
        if (this.visible && this.updateDelay()) {
            this.updateMove();
            this.updateRotation();
        }
    };

    Encounter_Fragment.prototype.updateDelay = function() {
        if (this._delay > 0) {
            this._delay--;
            return false;
        }
        return true;
    };

    Encounter_Fragment.prototype.updateMove = function() {
        if (this._moveDuration > 0) {
            const d = this._moveDuration;
            const triangular = n => n * (n + 1) / 2;
            switch (EncounterEffect.type()) {
                case 1:
                    this.updateRateMove(d / triangular(d));
                    break;
                case 2: {
                    const n = this._moveMax - d;
                    const max = triangular(this._moveMax) - triangular(n);
                    this.updateRateMove((n + 1) / max);
                    break;
                }
                case 3: {
                    const rate = d / triangular(d);
                    this.updateRateMove(rate);
                    this._zoom += (this._targetZoom - this._zoom) * rate;
                    const m = 4 * (d - 1) / this._moveMax;
                    this.jumpHeight = (2 * 2 - Math.pow(m - 2, 2)) * 96;
                    this.visible = this._zoom < 8;
                    break;
                }
            }
            this._moveDuration--;
        }
    };
    
    Encounter_Fragment.prototype.updateRateMove = function(rate) {
        this.x += (this._targetX - this.x) * rate;
        this.y += (this._targetY - this.y) * rate;
    };
    
    Encounter_Fragment.prototype.updateRotation = function() {
        if (this._speed > 0) {
            if (this._pace > 0)      this._speed *= 1.18;
            else if (this._pace < 0) this._speed *= 0.96;
            this._rotationX += this._rotationSpeedX * this._speed;
            this._rotationY += this._rotationSpeedY * this._speed;
            this._rotationZ += this._rotationSpeedZ * this._speed;
        }
    };

    Encounter_Fragment.prototype.startEncounter = function(duration) {
        const breakRate = this.breakRate();
        switch (EncounterEffect.type()) {
            case 1:
                this._moveDuration = duration;
                this._speed = this.hypotSpeed(1.5);
                this._pace = -1;
                this.setMoveT1(breakRate / 100, breakRate / 100);
                break;
            case 2:
            case 3:
                this._moveDuration = 0;
                this._speed = 0.2;
                this._pace = -1;
                break;
        }
        this._speed *= breakRate;
    };

    Encounter_Fragment.prototype.onBattleStartT1 = function(d) {
        this._moveDuration = d;
        this._speed = this.hypotSpeed(40);
        this._pace = -1;
        this.setMoveT1(0.75 + Math.random() / 2, 0.75 + Math.random() / 2);
    };

    Encounter_Fragment.prototype.hypotSpeed = function(baseSpeed) {
        const { x: cx, y: cy } = EncounterEffect.center;
        return baseSpeed / Math.sqrt(Math.hypot(this.x - cx, this.y - cy));
    };

    Encounter_Fragment.prototype.setMoveT1 = function(rateX, rateY) {
        const bounds = EncounterEffect.windowBounds;
        const { x: cx, y: cy } = EncounterEffect.center;
        const sx = this.x - cx;
        const sy = this.y - cy;
        let ox = sx;
        let oy = sy;
        if (ox < 0) {
            oy *= (bounds.minX - cx) / ox;
            ox = bounds.minX - cx;
        } else if (ox > 0) {
            oy *= (bounds.maxX - cx) / ox;
            ox = bounds.maxX - cx;
        }
        if (oy < bounds.minY - cy) {
            ox *= (bounds.minY - cy) / oy;
            oy = bounds.minY - cy;
        } else if (oy > bounds.maxY - cy) {
            ox *= (bounds.maxY - cy) / oy;
            oy = bounds.maxY - cy;
        }
        this._targetX = this.x + (ox - sx) * rateX;
        this._targetY = this.y + (oy - sy) * rateY;
    };

    Encounter_Fragment.prototype.onBattleStartT2 = function(duration, direction) {
        this._moveDuration = Math.floor(duration / 2);
        this._moveMax = this._moveDuration;
        this._speed = 1.6;
        this._pace = -1;
        this.setMoveT2(direction);
    };

    Encounter_Fragment.prototype.setMoveT2 = function(direction) {
        const cx = Graphics.width / 2;
        const cy = Graphics.height / 2;
        switch (direction) {
            case 'left':
                this._targetX = this.x - Graphics.width;
                this._targetY = this.y + (this.y - cy) * 1.0;
                break;
            case 'right':
                this._targetX = this.x + Graphics.width;
                this._targetY = this.y + (this.y - cy) * 1.0;
                break;
            case 'outside': {
                const radian = Math.atan2(this.y - cy, this.x - cx);
                const d = (cx + cy) / 2;
                this._targetX = this.x + d * Math.cos(radian);
                this._targetY = this.y + d * Math.sin(radian);
                break;
            }
        }
    };

    Encounter_Fragment.prototype.onBattleStartT3 = function(duration) {
        this._moveDuration = duration;
        this._moveMax = duration;
        this._speed = 2;
        this._pace = 0;
        this.setMoveT3();
    };

    Encounter_Fragment.prototype.setMoveT3 = function() {
        const cx = Graphics.width / 2;
        const cy = Graphics.height / 2;
        const sx = this.x - cx;
        const sy = this.y - cy;
        const rate = 3;
        this._targetX = (sx + 80 * (Math.random() - 0.5)) * rate + cx;
        this._targetY = (sy + 32 * (Math.random() - 0.5)) * rate + cy * 3;
        const delta = Math.abs(sx) + Math.abs(sy);
        this._targetZoom = delta < 128 && Math.random() < 0.4 ? 12 : 1;
        this._targetZoom += 3 * Math.random();
    };

    Encounter_Fragment.prototype.setDelay = function(delay) {
        this._delay = delay;
    };

    Encounter_Fragment.prototype.scaleX = function() {
        return Math.cos(this._rotationX * Math.PI / 180) * this._zoom;
    };

    Encounter_Fragment.prototype.scaleY = function() {
        return Math.cos(this._rotationY * Math.PI / 180) * this._zoom;
    };

    Encounter_Fragment.prototype.rotation = function() {
        return this._rotationZ * Math.PI / 180;
    };

    //-----------------------------------------------------------------------------
    // Bitmap
    
    if (Utils.RPGMAKER_NAME === 'MV') {
        
        Bitmap.prototype.destroy = function() {
            if (this._baseTexture) {
                this._baseTexture.destroy();
                this.__baseTexture = null;
            }
            this._destroyCanvas();
        };
        
        Bitmap.prototype._destroyCanvas = function() {
            if (this._canvas) {
                this._canvas.width = 0;
                this._canvas.height = 0;
                this.__canvas = null;
            }
        };
        
    }

    //-----------------------------------------------------------------------------
    // SceneManager
    
    const _SceneManager_update = SceneManager.update;
    SceneManager.update = function() {
        _SceneManager_update.apply(this, arguments);
        EncounterEffect.updateEffectDelay();
    };

    const _SceneManager_determineRepeatNumber = SceneManager.determineRepeatNumber;
    SceneManager.determineRepeatNumber = function(deltaTime) {
        if (EncounterEffect.isRunning()) {
            this._smoothDeltaTime *= 0.8;
            this._smoothDeltaTime += Math.min(deltaTime, 5) * 0.2; //2to5
            if (this._smoothDeltaTime >= 0.9) {
                this._elapsedTime = 0;
                return Math.round(this._smoothDeltaTime);
            } else {
                this._elapsedTime += deltaTime;
                if (this._elapsedTime >= 1) {
                    this._elapsedTime -= 1;
                    return 1;
                }
                return 0;
            }
        }
        return _SceneManager_determineRepeatNumber.apply(this, arguments);
    };

    //-------------------------------------------------------------------------
    // PluginManager
    
    PluginManager._commands = PluginManager._commands || {};
    
    if (!PluginManager.registerCommand) {
        PluginManager.registerCommand = function(pluginName, commandName, func) {
            const key = pluginName + ":" + commandName;
            this._commands[key] = func;
        };
    }

    if (!PluginManager.callCommand) {
        PluginManager.callCommand = function(self, pluginName, commandName, args) {
            const key = pluginName + ":" + commandName;
            const func = this._commands[key];
            if (typeof func === "function") {
                func.bind(self)(args);
            }
        };
    }

    PluginManager.registerCommand(pluginName, 'setType', args => {
        EncounterEffect.setType(PluginManager.mppValue(args.type));
    });

    PluginManager.registerCommand(pluginName, 'setCharacter', function(args) {
        const eId = PluginManager.mppValue(args.character);
        EncounterEffect.setCharacter(this.character(eId));
    });

    PluginManager.registerCommand(pluginName, 'setColor', args => {
        const color = args.color.split(',');
        const r = PluginManager.mppValue(color[0]);
        const g = PluginManager.mppValue(color[1]);
        const b = PluginManager.mppValue(color[2]);
        EncounterEffect.setColor(r, g, b);
    });

    PluginManager.mppValue = function(value) {
        const match = /^V\[(\d+)\]$/i.exec(value);
        return match ? $gameVariables.value(+match[1]) : +value;
    };
        
    //-----------------------------------------------------------------------------
    // Game_Map

    Game_Map.prototype.getInterpreterCharacter = function(param) {
        const interpreter = this._interpreter;
        return interpreter.isRunning() ? interpreter.character(param) : null;
    };

    //-----------------------------------------------------------------------------
    // Game_Interpreter

    const _mzCommands = {
        EncEffType: { name:'setType', keys:['type'] },
        EncEffChar: { name:'setCharacter', keys:['character'] },
        EncEffColor: { name:'setColor', keys:[], join:'color' }
    };
    Object.assign(_mzCommands, {
        'エフェクトタイプ変更': _mzCommands.EncEffType,
        '中心キャラ指定': _mzCommands.EncEffChar,
        'エフェクト色指定': _mzCommands.EncEffColor
    });

    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        const mzCommand = _mzCommands[command];
        if (mzCommand) {
            const args2 = Object.assign(...mzCommand.keys.map((k,i) => ({[k]:args[i]})));
            if (mzCommand.join) args2[mzCommand.join] = args.join();
            PluginManager.callCommand(this, pluginName, mzCommand.name, args2);
        }
    };
    
    //-----------------------------------------------------------------------------
    // Sprite
    
    if (Utils.RPGMAKER_NAME === 'MZ' && !_importedPlugin('MPP_PatchMZ')) {
        
        Sprite.prototype._removeColorFilter = function() {
            if (this._colorFilter) {
                this.filters.remove(this._colorFilter);
                this._colorFilter = null;
            }
        };

        const _Sprite__updateColorFilter = Sprite.prototype._updateColorFilter;
        Sprite.prototype._updateColorFilter = function() {
            if (this._hue === 0 && this._blendColor[3] === 0 &&
                    this._colorTone.equals([0, 0, 0, 0])) {
                this._removeColorFilter();
            } else {
                _Sprite__updateColorFilter.apply(this, arguments);
            }
        };
        
    }

    //-----------------------------------------------------------------------------
    // Sprite_Fragment

    function Sprite_Fragment() {
        this.initialize(...arguments);
    }

    Sprite_Fragment.prototype = Object.create(Sprite.prototype);
    Sprite_Fragment.prototype.constructor = Sprite_Fragment;

    Sprite_Fragment.prototype.initialize = function(fragment) {
        this._fragment = fragment;
        Sprite.prototype.initialize.call(this, fragment.bitmap);
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.clearFlash();
        this.setupRate();
        this.update();
    };

    Sprite_Fragment.prototype.clearFlash = function() {
        this._flashColor = [0, 0, 0, 0];
        this._flashDuration = 0;
    };

    Sprite_Fragment.prototype.setupRate = function() {
        this._rate = Utils.isMobileDevice() ? 6 : 8;
    };

    Sprite_Fragment.prototype.update = function() {
        Sprite.prototype.update.call(this);
        this.updatePosition();
        this.updateScale();
        this.updateRotation();
        this.updateFlash();
        this.updateClip();
        this.updateVisibility();
    };

    Sprite_Fragment.prototype.updatePosition = function() {
        const fragment = this._fragment;
        this.x = fragment.x;
        this.y = fragment.y - fragment.jumpHeight;
    };

    Sprite_Fragment.prototype.updateScale = function() {
        const fragment = this._fragment;
        this.scale.x = fragment.scaleX();
        this.scale.y = fragment.scaleY();
    };

    Sprite_Fragment.prototype.updateRotation = function() {
        this.rotation = this._fragment.rotation();
    };

    Sprite_Fragment.prototype.updateFlash = function() {
        this.setupFlash();
        if (this._flashDuration > 0) {
            const d = this._flashDuration--;
            this._flashColor[3] *= (d - 1) / d;
            if (this._flashDuration % this._rate === 0) {
                this.setBlendColor(this._flashColor);
            }
        }
    };

    Sprite_Fragment.prototype.setupFlash = function() {
        if (this._fragment.isFlashRequested()) {
            this._flashDuration = Utils.isMobileDevice() ? 13 : 25;
            this._flashColor = this._fragment.flashColor();
            this._fragment.clearFlash();
        }
    };

    Sprite_Fragment.prototype.updateClip = function() {
        if (this._fragment.isClipRequested()) {
            this._fragment.onClip();
            this._fragment.clearClip();
        }
    };

    Sprite_Fragment.prototype.updateVisibility = function() {
        this.visible = this._fragment.visible;
    };

    //-----------------------------------------------------------------------------
    // Sprite_EncounterEffect

    function Sprite_EncounterEffect() {
        this.initialize(...arguments);
    }

    Sprite_EncounterEffect.prototype = Object.create(Sprite.prototype);
    Sprite_EncounterEffect.prototype.constructor = Sprite_EncounterEffect;

    Sprite_EncounterEffect.prototype.initialize = function() {
        Sprite.prototype.initialize.call(this);
        this.createBackSprite();
        this.createFragments();
        this._fadeDelay = 0;
        this._fadeDuration = 0;
    };

    Sprite_EncounterEffect.prototype.createBackSprite = function() {
        this._backSprite = new Sprite(EncounterEffect.snap);
        this.addChild(this._backSprite);
    };

    Sprite_EncounterEffect.prototype.createFragments = function() {
        this._fragmentSprites = [];
        const fragments = EncounterEffect.fragments();
        for (let i = 0; i < fragments.length; i++) {
            const sprite = new Sprite_Fragment(fragments[i]);
            this._fragmentSprites[i] = sprite;
            this.addChild(sprite);
        }
    };

    Sprite_EncounterEffect.prototype.startFadeIn = function(duration) {
        const rate = 3;//Utils.isMobileDevice() ? 2 : 3;
        this._fadeDelay = Math.floor(duration / rate);
        this._fadeDuration = duration - this._fadeDelay;
    };

    Sprite_EncounterEffect.prototype.update = function() {
        Sprite.prototype.update.call(this);
        this.opacity = EncounterEffect.opacity;
        this.updateFadeIn();
    };

    Sprite_EncounterEffect.prototype.updateFadeIn = function() {
        if (this._fadeDuration > 0 && this.updateFadeDelay()) {
            const d = this._fadeDuration;
            this._backSprite.opacity -= this._backSprite.opacity / d;
            this._fadeDuration--;
        }
    };

    Sprite_EncounterEffect.prototype.updateFadeDelay = function() {
        if (this._fadeDelay > 0) {
            this._fadeDelay--;
            return false;
        }
        return true;
    };

    Sprite_EncounterEffect.prototype.isSpritesetVisible = function() {
        return this.opacity < 255 || this._backSprite.opacity < 255;
    };

    //-----------------------------------------------------------------------------
    // Sprite_Actor

    const _Sprite_Actor_updateMove = Sprite_Actor.prototype.updateMove;
    Sprite_Actor.prototype.updateMove = function() {
        if (EncounterEffect.isReady()) {
            _Sprite_Actor_updateMove.apply(this, arguments);
        }
    };

    //-----------------------------------------------------------------------------
    // Spriteset_Map

    Spriteset_Map.prototype.temporaryHideDestination = function() {
        this._destinationSprite.visible = false;
    };

    //-----------------------------------------------------------------------------
    // Scene_Base

    Scene_Base.prototype.createEncEffSprite = function() {
        this._encEffSprite = new Sprite_EncounterEffect();
        this.addChild(this._encEffSprite);
    };

    Scene_Base.prototype.destroyEncEffSprite = function() {
        this.removeChild(this._encEffSprite);
        if (Utils.RPGMAKER_NAME === 'MZ') this._encEffSprite.destroy();
        delete this._encEffSprite;
    };

    Scene_Base.prototype.clearFade = function() {
        this._fadeSign = 0;
        this._fadeDuration = 0;
        this._fadeWhite = 0;
        this._fadeOpacity = 0;
        if (Utils.RPGMAKER_NAME === 'MV') {
            this._fadeSprite.opacity = 0;
        } else {
            this.updateColorFilter();
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Map

    const _Scene_Map_launchBattle = Scene_Map.prototype.launchBattle;
    Scene_Map.prototype.launchBattle = function() {
        if (EncounterEffect.isValid()) {
            this.snapForBattleBackground();
            this._windowLayer.visible = false;
            this._spriteset.temporaryHideDestination();
            EncounterEffect.setup(SceneManager.snap());
            _Scene_Map_launchBattle.apply(this, arguments);
            this.createEncEffSprite();
            this._spriteset.visible = false;
        } else {
            EncounterEffect.clear();
            _Scene_Map_launchBattle.apply(this, arguments);
        }
    };

    const _Scene_Map_updateEncounterEffect = Scene_Map.prototype.updateEncounterEffect
    Scene_Map.prototype.updateEncounterEffect = function() {
        if (EncounterEffect.isRunning()) {
            if (!EncounterEffect.isEffectReady()) return;
            if (this._encounterEffectDuration > 0) {
                EncounterEffect.update();
                this._encounterEffectDuration--;
                const speed = this.encounterEffectSpeed();
                const n = speed - this._encounterEffectDuration;
                const breakEnd = EncounterEffect.breakDuration();
                if (n <= breakEnd) {
                    const maxItems = EncounterEffect.maxItems();
                    const start = Math.floor(maxItems * (n - 1) / breakEnd);
                    const end = Math.floor(maxItems * n / breakEnd);
                    EncounterEffect.breakFragments(start, end, speed);
                }
                if (n === breakEnd) {
                    EncounterEffect.onBreakEnd();
                }
                if (n === Math.floor(speed / 5)) {
                    BattleManager.playBattleBgm();
                }
                if (n === speed && !ImageManager.isReady()) {
                    this._encounterEffectDuration = 1;
                }
            }
        } else {
            _Scene_Map_updateEncounterEffect.apply(this, arguments);
        }
    };
    
    const _Scene_Map_encounterEffectSpeed = Scene_Map.prototype.encounterEffectSpeed;
    Scene_Map.prototype.encounterEffectSpeed = function() {
        return EncounterEffect.isRunning()
            ? EncounterEffect.effectSpeed()
            : _Scene_Map_encounterEffectSpeed.apply(this, arguments);
    };

    //-----------------------------------------------------------------------------
    // Scene_Battle

    const _Scene_Battle_create = Scene_Battle.prototype.create;
    Scene_Battle.prototype.create = function() {
        _Scene_Battle_create.apply(this, arguments);
        if (EncounterEffect.isRunning()) {
            EncounterEffect.startEffectDelay();
        }
    };

    const _Scene_Battle_start = Scene_Battle.prototype.start;
    Scene_Battle.prototype.start = function() {
        _Scene_Battle_start.apply(this, arguments);
        if (EncounterEffect.isRunning()) {
            this.clearFade();
            EncounterEffect.onBattleStart();
            this.createEncEffSprite();
            this._encEffSprite.startFadeIn(EncounterEffect.fadeSpeed());
        }
    };

    const _Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _Scene_Battle_update.apply(this, arguments);
        if (EncounterEffect.isRunning() && EncounterEffect.isEffectReady()) {
            EncounterEffect.update();
            this._spriteset.visible = this._encEffSprite.isSpritesetVisible();
            if (!EncounterEffect.isRunning()) {
                this.destroyEncEffSprite();
            }
        }
    };

})();
