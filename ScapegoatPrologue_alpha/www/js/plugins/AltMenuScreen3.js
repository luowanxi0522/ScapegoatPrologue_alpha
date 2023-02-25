//=============================================================================
// AltMenuScreen3.js (ver1.0.1)
//=============================================================================
// [History]
// 2015.Nov.23 1.0.0 First Release
// 2018.Sep.19 1.0.1 add function to display current mapname.
/*:
 * @plugindesc 更改選單畫面排版。(ver1.0.1)
 * @author 神無月サスケ,Yoji Ojima(翻譯 : ReIris)
 * 
 * @param bgBitmapMenu
 * @text 主選單背景
 * @desc 用於主選單畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapItem
 * @text 道具選單背景
 * @desc 用於道具畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapSkill
 * @text 技能選單背景
 * @desc 用於技能畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapEquip
 * @text 裝備選單背景
 * @desc 用於裝備畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapStatus
 * @text 狀態選單背景
 * @desc 用於狀態畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapOptions
 * @text 設置選單背景
 * @desc 用於設置畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapFile
 * @text 檔案選單背景
 * @desc 用於存檔 / 讀檔畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param bgBitmapGameEnd
 * @text 遊戲結束選單背景
 * @desc 用於遊戲結束畫面的背景圖片。
 * 圖片放置於 img/pictures 內。
 * @default 
 * 
 * @param maxColsMenu
 * @text 最大列數
 * @desc 主畫面中顯示角色窗口的最大列數。
 * @default 4
 * 
 * @param commandRows
 * @text 選單命令行數
 * @desc 命令窗口中的行數。
 * @default 2
 *
 * @param isDisplayStatus
 * @text 是否顯示狀態欄
 * @desc 選擇是否顯示狀態。
 * (1 = 顯示、0 = 不顯示)
 * @default 1
 * 
 * @param display map name
 * @text 是否顯示地圖名稱
 * @desc 是否在畫面左下角顯示地圖名稱。
 * (1 = 顯示、0 = 不顯示)
 * @default 1
 * 
 * @param location string
 * @text 地圖名稱顯示文本
 * @desc 地圖名稱的前綴文字。
 * 使用系統顏色描繪。
 * @default 所在地 : 
 * 
 * @help 這個插件沒有插件命令。
 *
 *  與 AltMenuscreen 的不同之處在於：
 *  - 選單畫面上的所有窗口都是透明的。
 *  - 可以給每個選單添加背景圖片。
 *  - 角色使用立繪。
 *
 * 在角色的注釋欄寫入以下內容：
 * <stand_picture:圖片名稱>圖片名將是角色的立繪。
 * 圖片放在 img/pictures 資料夾內。
 *
 * 希望的角色立繪大小：
 * 寬：3 列 : 240 px / 4 列：174 px
 * 高：命令窗口 1 行 : 444 px / 2 行 : 408 px
 *
 */

(function() {

    // set parameters
    var parameters = PluginManager.parameters('AltMenuScreen3');
    var bgBitmapMenu = parameters['bgBitmapMenu'] || '';
    var bgBitmapItem = parameters['bgBitmapItem'] || '';
    var bgBitmapSkill = parameters['bgBitmapSkill'] || '';
    var bgBitmapEquip = parameters['bgBitmapEquip'] || '';
    var bgBitmapStatus = parameters['bgBitmapStatus'] || '';
    var bgBitmapOptions = parameters['bgBitmapOptions'] || '';
    var bgBitmapFile = parameters['bgBitmapFile'] || '';
    var bgBitmapGameEnd = parameters['bgBitmapGameEnd'] || '';
    var maxColsMenuWnd = Number(parameters['maxColsMenu'] || 4);
    var rowsCommandWnd = Number(parameters['commandRows'] || 2);
    var isDisplayStatus = !!Number(parameters['isDisplayStatus']);
    var isDisplayMapName = !!Number(parameters['display map name']);
    var locationString = parameters['location string'] || '';

   //
   // make transparent windows for each scene in menu.
   //
    var _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);
        this._statusWindow.x = 0;
        this._statusWindow.y = this._commandWindow.height;
        this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
        // make transparent for all windows at menu scene.
        this._statusWindow.opacity = 0;
        this._goldWindow.opacity = 0;
        this._commandWindow.opacity = 0;
        this.createMapNameWindow();
    };

    var _Scene_Item_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function() {
        _Scene_Item_create.call(this);
        this._helpWindow.opacity = 0;
        this._categoryWindow.opacity = 0;
        this._itemWindow.opacity = 0;
        this._actorWindow.opacity = 0;
    };

    var _Scene_Skill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function() {
        _Scene_Skill_create.call(this);
        this._helpWindow.opacity = 0;
        this._skillTypeWindow.opacity = 0;
        this._statusWindow.opacity = 0;
        this._itemWindow.opacity = 0;
        this._actorWindow.opacity = 0;
    };

    var _Scene_Equip_create = Scene_Equip.prototype.create;
    Scene_Equip.prototype.create = function() {
        _Scene_Equip_create.call(this);
        this._helpWindow.opacity = 0;
        this._statusWindow.opacity = 0;
        this._commandWindow.opacity = 0;
        this._slotWindow.opacity = 0;
        this._itemWindow.opacity = 0;
    };

    var _Scene_Status_create = Scene_Status.prototype.create;
    Scene_Status.prototype.create = function() {
        _Scene_Status_create.call(this);
        this._statusWindow.opacity = 0;
    };

    var _Scene_Options_create = Scene_Options.prototype.create;
    Scene_Options.prototype.create = function() {
        _Scene_Options_create.call(this);
        this._optionsWindow.opacity = 0;
    };

    var _Scene_File_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function() {
        _Scene_File_create.call(this);
        this._helpWindow.opacity = 0;
        this._listWindow.opacity = 0;
    };

    var _Scene_GameEnd_create = Scene_GameEnd.prototype.create;
    Scene_GameEnd.prototype.create = function() {
        _Scene_GameEnd_create.call(this);
        this._commandWindow.opacity = 0;
    };

    //
    // display current map name
    //
    function Window_MapNameAlt3() {
      this.initialize.apply(this, arguments);
    }

    Window_MapNameAlt3.prototype = Object.create(Window_MapName.prototype);
    Window_MapNameAlt3.prototype.constructor = Window_MapNameAlt3;

    Window_MapNameAlt3.prototype.initialize = function () {
        Window_MapName.prototype.initialize.call(this);
    };

    Window_MapNameAlt3.prototype.windowWidth = function() {
        return 600;
    };

    Window_MapNameAlt3.prototype.update = function () {
        // do nothing
    };

    var mapName = function () {
        var name = $gameMap.displayName();
        return name ? name : $dataMapInfos[$gameMap.mapId()].name;
    };

    Window_MapNameAlt3.prototype.refresh = function () {
        this.contents.clear();
        this.x = 0;
        this.y = Graphics.boxHeight - this.height;
        if (mapName()) {
            this.changeTextColor(this.systemColor());
            var textWidth = this.textWidth(locationString) + 8;
            var contentsWidth = this.contentsWidth();
            if (textWidth) {
                this.drawText(locationString, 4, 0, contentsWidth - 4, 'left');
            }
            this.resetTextColor();
            var orgX = 4 + textWidth;
            this.drawText(mapName(), orgX, 0, contentsWidth - orgX, 'left');
            this.contentsOpacity = 255;
        }
    };

    Scene_Menu.prototype.createMapNameWindow = function() {
        if (isDisplayMapName) {
            this._mapNameWindow = new Window_MapNameAlt3();
            this.addChild(this._mapNameWindow);
            this._mapNameWindow.opacity = 0;
        }
    };

    var _Scene_Menu_terminate = Scene_Menu.prototype.terminate;
    Scene_Menu.prototype.terminate = function () {
        _Scene_Menu_terminate.call(this);
        if (isDisplayMapName) {
            this.removeChild(this._mapNameWindow);
        }
    };

    //
    // load bitmap that set in plugin parameter
    //
    var _Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function(){
        if(bgBitmapMenu){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapMenu);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Menu_createBackground.call(this);
    };

    var _Scene_Item_createBackground = Scene_Item.prototype.createBackground;
    Scene_Item.prototype.createBackground = function(){
        if(bgBitmapItem){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapItem);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Item_createBackground.call(this);
    };

    var _Scene_Skill_createBackground = Scene_Skill.prototype.createBackground;
    Scene_Skill.prototype.createBackground = function(){
        if(bgBitmapSkill){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapSkill);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Skill_createBackground.call(this);
    };

    var _Scene_Equip_createBackground = Scene_Equip.prototype.createBackground;
    Scene_Equip.prototype.createBackground = function(){
        if(bgBitmapEquip){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapEquip);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Equip_createBackground.call(this);
    };

    var _Scene_Status_createBackground =
     Scene_Status.prototype.createBackground;
    Scene_Status.prototype.createBackground = function(){
        if(bgBitmapStatus){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapStatus);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Status_createBackground.call(this);
    };

    var _Scene_Options_createBackground =
     Scene_Options.prototype.createBackground;
    Scene_Options.prototype.createBackground = function(){
        if(bgBitmapOptions){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapOptions);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Options_createBackground.call(this);
    };

    var _Scene_File_createBackground = Scene_File.prototype.createBackground;
    Scene_File.prototype.createBackground = function(){
        if(bgBitmapFile){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapFile);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_File_createBackground.call(this);
    };

    var _Scene_GameEnd_createBackground =
     Scene_GameEnd.prototype.createBackground;
    Scene_GameEnd.prototype.createBackground = function(){
        if(bgBitmapGameEnd){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(bgBitmapGameEnd);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_GameEnd_createBackground.call(this);
    };

    //
    // alt menu screen processes
    //
    Window_MenuCommand.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuCommand.prototype.maxCols = function() {
        return 4;
    };

    Window_MenuCommand.prototype.numVisibleRows = function() {
        return rowsCommandWnd;
    };

    Window_MenuStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuStatus.prototype.windowHeight = function() {
        var h1 = this.fittingHeight(1);
        var h2 = this.fittingHeight(rowsCommandWnd);
        return Graphics.boxHeight - h1 - h2;
    };

    Window_MenuStatus.prototype.maxCols = function() {
        return maxColsMenuWnd;
    };

    Window_MenuStatus.prototype.numVisibleRows = function() {
        return 1;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        // load stand_picture
        var bitmapName = $dataActors[actor.actorId()].meta.stand_picture;
        var bitmap = bitmapName ? ImageManager.loadPicture(bitmapName) : null;
        var w = Math.min(rect.width, (bitmapName ? bitmap.width : 144));
        var h = Math.min(rect.height, (bitmapName ? bitmap.height : 144));
        var lineHeight = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        if(bitmap){
            var sx = (bitmap.width > w) ? (bitmap.width - w) / 2 : 0;
            var sy = (bitmap.height > h) ? (bitmap.height - h) / 2 : 0;
            var dx = (bitmap.width > rect.width) ? rect.x :
                rect.x + (rect.width - bitmap.width) / 2;
            var dy = (bitmap.height > rect.height) ? rect.y :
                rect.y + (rect.height - bitmap.height) / 2;
            this.contents.blt(bitmap, sx, sy, w, h, dx, dy);
        } else { // when bitmap is not set, do the original process.
            this.drawActorFace(actor, rect.x, rect.y + lineHeight * 2.5, w, h);
        }
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        if(!isDisplayStatus){
            return;
        }
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        var x = rect.x;
        var y = rect.y;
        var width = rect.width;
        var bottom = y + rect.height;
        var lineHeight = this.lineHeight();
        this.drawActorName(actor, x, y + lineHeight * 0, width);
        this.drawActorLevel(actor, x, y + lineHeight * 1, width);
        this.drawActorClass(actor, x, bottom - lineHeight * 4, width);
        this.drawActorHp(actor, x, bottom - lineHeight * 3, width);
        this.drawActorMp(actor, x, bottom - lineHeight * 2, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 1, width);
    };

    var _Window_MenuActor_initialize = Window_MenuActor.prototype.initialize;
    Window_MenuActor.prototype.initialize = function() {
        _Window_MenuActor_initialize.call(this);
        this.y = this.fittingHeight(2);
    };

})();
