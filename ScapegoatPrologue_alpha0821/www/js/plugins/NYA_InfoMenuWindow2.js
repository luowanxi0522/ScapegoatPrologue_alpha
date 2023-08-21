//=============================================================================
// NYA_InfoMenuWindow2.js
//
// Version
// 2.2.0 2018/09/25 プラグインパラメータで位置や幅などが調整可能になりました。
// 2.1.0 2018/08/01 AltWindowFrameに対応しました。
// 2.0.0 2018/08/31 マップ名とプレイ時間とでウィンドウを分けてみた＆ウィンドウ背景を透明化しました。
// 1.0.0 2018/08/31 試作版完成
//=============================================================================

/*:
 * @plugindesc メニュー画面にマップ名とプレイ時間を追加します。
 * @author Nyatama
 *
 *
 * @param MapName
 * @text マップ名ウィンドウ
 * @default ================================
 *
 * @param InfoVisible_MapName
 * @text 表示する
 * @desc マップ名のウィンドウを表示します
 * @type boolean
 * @on 表示する
 * @off 表示しない
 * @default true
 * @parent MapName
 *
 * @param PosX_MapName
 * @text X軸
 * @desc マップ名のウィンドウのX位置を指定します
 * @type number
 * @default 0
 * @parent MapName
 *
 * @param PosY_MapName
 * @text Y軸
 * @desc マップ名のウィンドウのY位置を指定します
 * @type number
 * @default 462
 * @parent MapName
 *
 * @param Width_MapName
 * @text 幅
 * @desc マップ名のウィンドウの幅を指定します
 * @type number
 * @default 240
 * @parent MapName
 *
 * @param Align_MapName
 * @text 行揃え
 * @desc マップ名の行揃えを指定します
 * @type combo
 * @option right
 * @option center
 * @option left
 * @default center
 * @parent MapName
 *
 * @param Title_MapName
 * @text タイトル
 * @desc マップ名のタイトルを指定します
 * @type string
 * @default ＭＡＰ
 * @parent MapName
 *
 * @param TitleColor_MapName
 * @text タイトルカラー
 * @desc マップ名のタイトルカラーを指定します
 * 例：rgb(132, 170, 255)  #84aaff  white  system
 * @type string
 * @default system
 * @parent MapName
 *
 * @param FrameOpacity_MapName
 * @text 枠の透明度
 * @desc マップ名の枠(背景画像)の透明度を指定します【255:不透明】
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @parent MapName
 *
 * @param FrameMado_MapName
 * @text MADOのファイル名
 * @desc マップ名のMADOのフレームのファイル名を指定します
 * 空欄の場合MADOが無効になります●オススメ:Window_Status
 * @type combo
 * @option Window_Talk
 * @option Window_Battle
 * @option Window_Status
 * @option Window_Other
 * @default
 * @parent MapName
 *
 * @param PlayTime
 * @text プレイ時間ウィンドウ
 * @default ================================
 *
 * @param InfoVisible_PlayTime
 * @text 表示する
 * @desc プレイ時間のウィンドウを表示します
 * @type boolean
 * @on 表示する
 * @off 表示しない
 * @default true
 * @parent PlayTime
 *
 * @param PosX_PlayTime
 * @text X軸
 * @desc プレイ時間のウィンドウのX位置を指定します
 * @type number
 * @default 0
 * @parent PlayTime
 *
 * @param PosY_PlayTime
 * @text Y軸
 * @desc プレイ時間のウィンドウのY位置を指定します
 * @type number
 * @default 507
 * @parent PlayTime
 *
 * @param Width_PlayTime
 * @text 幅
 * @desc プレイ時間のウィンドウの幅を指定します
 * @type number
 * @default 240
 * @parent PlayTime
 *
 * @param Align_PlayTime
 * @text 行揃え
 * @desc プレイ時間の行揃えを指定します
 * @type combo
 * @option right
 * @option center
 * @option left
 * @default center
 * @parent PlayTime
 *
 * @param Title_PlayTime
 * @text タイトル
 * @desc プレイ時間のタイトルを指定します
 * @type string
 * @default ＴＩＭＥ
 * @parent PlayTime
 *
 * @param TitleColor_PlayTime
 * @text タイトルカラー
 * @desc プレイ時間のタイトルカラーを指定します
 * 例：rgb(132, 170, 255)  #84aaff  white  system
 * @type string
 * @default system
 * @parent PlayTime
  *
 * @param FrameOpacity_PlayTime
 * @text 枠の透明度
 * @desc プレイ時間の枠(背景画像)の透明度を指定します【255:不透明】
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @parent PlayTime
 *
 * @param FrameMado_PlayTime
 * @text MADOのファイル名
 * @desc プレイ時間のMADOのフレームのファイル名を指定します
 * 空欄の場合MADOが無効になります●オススメ:Window_Status
 * @type combo
 * @option Window_Talk
 * @option Window_Battle
 * @option Window_Status
 * @option Window_Other
 * @default
 * @parent PlayTime
 *
 * @help このプラグインには、プラグインコマンドはありません。

 メニュー画面に、インフォメーションウィンドウを追加します。
 ・現在のマップ名
 ・現在のプレイ時間

 ※フォントサイズを変えたり細かな調整はソースコードを編集してください

 ※MADOを使用する場合AltWindowFrameを有効にする必要があります。
*/

var Imported = Imported || {};
Imported.NYA_InfoMenuWindow2 = true;

(function() {

	var parameters = PluginManager.parameters('NYA_InfoMenuWindow2');
	var InfoVisible_MapName = eval(parameters['InfoVisible_MapName']);
    var PosX_MapName = Number(parameters['PosX_MapName']);
    var PosY_MapName = Number(parameters['PosY_MapName']);
    var Width_MapName = Number(parameters['Width_MapName']);
    var Align_MapName = String(parameters['Align_MapName']);
    var Title_MapName = String(parameters['Title_MapName']);
    var TitleColor_MapName = String(parameters['TitleColor_MapName']);
    var FrameOpacity_MapName = Number(parameters['FrameOpacity_MapName']);
    var FrameMado_MapName = String(parameters['FrameMado_MapName']);

    var InfoVisible_PlayTime = eval(parameters['InfoVisible_PlayTime']);
    var PosX_PlayTime = Number(parameters['PosX_PlayTime']);
    var PosY_PlayTime = Number(parameters['PosY_PlayTime']);
    var Width_PlayTime = Number(parameters['Width_PlayTime']);
    var Align_PlayTime = String(parameters['Align_PlayTime']);
    var Title_PlayTime = String(parameters['Title_PlayTime']);
    var TitleColor_PlayTime = String(parameters['TitleColor_PlayTime']);
    var FrameOpacity_PlayTime = Number(parameters['FrameOpacity_PlayTime']);
    var FrameMado_PlayTime = String(parameters['FrameMado_PlayTime']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);
        // インフォメーションウィンドウの追加
        this.createInformationWindow();
    };

    Scene_Menu.prototype.createInformationWindow = function() {
        if(InfoVisible_MapName){
            this._informationWindowMapName = new Window_InformationMapName();
            this._informationWindowMapName.padding = 0;
            this._informationWindowMapName.opacity = FrameOpacity_MapName;
            this.addWindow(this._informationWindowMapName);
        }

        if(InfoVisible_PlayTime){
            this._informationWindowPlayTime = new Window_InformationPlayTime();
            this._informationWindowPlayTime.padding = 0;
            this._informationWindowPlayTime.opacity = FrameOpacity_PlayTime;
            this.addWindow(this._informationWindowPlayTime);
        }
	};

    var _Scene_Menu_update = Scene_Menu.prototype.update;
    Scene_Menu.prototype.update = function() {
        _Scene_Menu_update.call(this);
        // インフォメーションウィンドウの更新
        if(InfoVisible_MapName) this._informationWindowMapName.refresh();
        if(InfoVisible_PlayTime) this._informationWindowPlayTime.refresh();
    };

    //-----------------------------------------------------------------------------
	// Window_InformationMapName
	//

	function Window_InformationMapName() {
	    this.initialize.apply(this, arguments);
	}

	Window_InformationMapName.prototype = Object.create(Window_Base.prototype);
	Window_InformationMapName.prototype.constructor = Window_InformationMapName;

	Window_InformationMapName.prototype.initialize = function() {
        var pos_x = PosX_MapName;   // X位置
        var pos_y = PosY_MapName  // Y位置
	    var width = Width_MapName; // 幅
        var height = this.fittingHeight(1); // 高さ 表示が崩れる為48以上である必要あり
	    Window_Base.prototype.initialize.call(this, pos_x, pos_y, width, height);
	};

	Window_InformationMapName.prototype.refresh = function() {
        this.contents.clear();
        // マップ名
        if(TitleColor_MapName.toUpperCase() == 'SYSTEM'){
            this.changeTextColor(this.systemColor());
        }else{
            this.changeTextColor(TitleColor_MapName);
        }
        this.contents.fontSize = 0;
        this.drawText(Title_MapName, this.standardPadding() + this.textPadding(), -12, 56, 'left');
        this.resetTextColor();
        this.contents.fontSize = 13;
        this.drawText($gameMap.displayName(), this.standardPadding() + 5, this.standardPadding(), this._width - 20, Align_MapName);
	};

    //以下をコメントアウトすると余白をありにできます。つまり枠を追加できます。
    //余白を入れる場合、MADO(ウィンドウビルダー)によりウィンドウの見た目を変えることができます。
    Window_InformationMapName.prototype.standardPadding = function() {
        return 5;
    };
    //コメントアウトここまで

    //-----------------------------------------------------------------------------
	// Window_InformationPlayTime
	//

    function Window_InformationPlayTime() {
	    this.initialize.apply(this, arguments);
	}

	Window_InformationPlayTime.prototype = Object.create(Window_Base.prototype);
	Window_InformationPlayTime.prototype.constructor = Window_InformationPlayTime;

	Window_InformationPlayTime.prototype.initialize = function() {
        var pos_x = PosX_PlayTime;   // X位置
        var pos_y = PosY_PlayTime  // Y位置
	    var width = Width_PlayTime; // 幅
        var height = this.fittingHeight(1); // 高さ 表示が崩れる為48以上である必要あり
	    Window_Base.prototype.initialize.call(this, pos_x, pos_y, width, height);
	};

	Window_InformationPlayTime.prototype.refresh = function() {
        this.contents.clear();
        // プレイ時間
        if(TitleColor_PlayTime.toUpperCase() == 'SYSTEM'){
            this.changeTextColor(this.systemColor());
        }else{
            this.changeTextColor(TitleColor_PlayTime);
        }
        this.contents.fontSize = 0;
        this.drawText(Title_PlayTime, this.standardPadding() + this.textPadding(), -12, 56, 'left');
        this.resetTextColor();
        this.contents.fontSize = 14;
        this.drawText($gameSystem.playtimeText(), this.standardPadding() + 5,　this.standardPadding(), this._width - 20, Align_PlayTime);
	};

    //以下をコメントアウトすると余白をありにできます。つまり枠を追加できます。
    //余白を入れる場合、MADO(ウィンドウビルダー)によりウィンドウの見た目を変えることができます。
    Window_InformationPlayTime.prototype.standardPadding = function() {
        return 5;
    };
    //コメントアウトここまで

    //-----------------------------------------------------------------------------
	// AltWindowFrame対応
	//
    var _Scene_Menu_Create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_Create.call(this);

        if(FrameMado_MapName){
            var _image = ImageManager.loadSystem(FrameMado_MapName);
            this._informationWindowMapName._windowskin = _image;
            this._informationWindowMapName._refreshAllParts();
        }
        if(FrameMado_PlayTime){
            var _image = ImageManager.loadSystem(FrameMado_PlayTime);
            this._informationWindowPlayTime._windowskin = _image;
            this._informationWindowPlayTime._refreshAllParts();
        }
    };

})();
