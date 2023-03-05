/*: 
 * @plugindesc XPStyleBattle for MV Theme - Standard Theme Ver. 0.0.3
 * @author Momomaru Remix / Peachround
 *
 * @help 
 * XPStyleBattle for MV用ステータステーマ「スタンダード」
 * 
 * - XPスタイルバトル標準のステータステーマです。
 * 
 * - 必ず XPStyleBattleMV と一緒に使用してください。
 *   プラグイン管理ウィンドウ上での配置は XPStyleBattleMV より下です。
 *  
 * - Momomaru Remix ウェブサイト: http://peachround.com/
 * 
 * 
 * 
 * @param (integer)root.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの基準 X 座標 [Default: 0]
 * 
 * @param (integer)root.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの基準 Y 座標 [Default: 0]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)hudBg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの背景画像 X 座標 [Default: 0]
 * 
 * @param (integer)hudBg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの背景画像 Y 座標 [Default: 444]
 *
 * @param (boolean)hudBg.visible
 * @type boolean
 * @desc HUDの背景画像を表示する [Default: true]
 * 
 * @param (string)hudBg.fileName
 * @type file
 * @dir img/system
 * @desc HUDの背景画像のファイル名 [Default: bd_standard/hud_bg]
 * @default bd_standard/hud_bg
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)general.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス領域の X 座標 [Default: 8]
 * 
 * @param (integer)general.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス領域の Y 座標 [Default: 458]
 * 
 * @param (integer)general.width
 * @type number
 * @min 48
 * @max 4096
 * @desc ステータス領域の幅 [Default: 800]
 * 
 * @param (integer)general.height
 * @type number
 * @min 48
 * @max 4096
 * @desc ステータス領域の高さ [Default: 180]
 * 
 * @param (integer)general.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc アクターの水平方向の整列。0: 左 1: 中央 2: 右 [Default: 1]
 * 
 * @param (integer)general.verticalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc アクターの垂直方向の整列。0: 上 1: 中央 2: 下 [Default: 0]
 * 
 * @param (integer)general.actorStatusWidth
 * @type number
 * @min 48
 * @max 4096
 * @desc アクター1体あたりの幅 [Default: 200]
 * 
 * @param (integer)general.actorStatusHeight 
 * @type number
 * @min 48
 * @max 4096
 * @desc アクター1体あたりの高さ [Default: 166]
 * 
 * @param (integer)general.horizontalSpacing 
 * @type number
 * @min -4096
 * @max 4096
 * @desc アクターとアクターの水平方向の間隔 [Default: 0]
 * 
 * @param (integer)general.verticalSpacing 
 * @type number
 * @min -4096
 * @max 4096
 * @desc アクターとアクターの垂直方向の間隔 [Default: 0]
 * 
 * @param (integer)general.orientation 
 * @type number
 * @min 0
 * @max 1
 * @desc アクターの配置方向。 0: 水平 1: 垂直 [Default: 0]
 * 
 * @param (integer)general.maxRows 
 * @type number
 * @min 1
 * @max 32
 * @desc アクターの最大表示列数 [Default: 16]
 * 
 * @param (integer)general.maxLines
 * @type number
 * @min 1
 * @max 32
 * @desc アクターの最大表示行数 [Default: 1]
 * 
 * @param (boolean)general.isBricks
 * @type boolean
 * @desc レンガ配置を有効にする [Default: false]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラー背景の X 座標 [Default: -4]
 * 
 * @param (integer)bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラー背景の Y 座標 [Default: -4]
 * 
 * @param (boolean)bg.visible
 * @type boolean
 * @desc バトラー背景を表示する [Default: true]
 * 
 * @param (string)bg.fileName
 * @type file
 * @dir img/system
 * @desc バトラー背景のファイル名 [Default: bd_standard/std_bg]
 * @default bd_standard/std_bg
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)battler.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックの X 座標 [Default: 78]
 * 
 * @param (integer)battler.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックの Y 座標 [Default: 150]
 * 
 * @param (boolean)battler.visible
 * @type boolean
 * @desc バトラーグラフィックを表示する [Default: true]
 * 
 * @param (integer)battler.zoom
 * @type number
 * @min 25
 * @max 400
 * @desc  バトラーグラフィックの拡大率 [Default: 100]
 * 
 * @param (integer)battler.overlayOffsetX
 * @type number
 * @min -4096
 * @max 4096
 * @desc オーバーレイ表示の X 座標オフセット [Default: 0]
 * 
 * @param (integer)battler.overlayOffsetY
 * @type number
 * @min -4096
 * @max 4096
 * @desc オーバーレイ表示の Y 座標オフセット [Default: -8]
 * 
 * @param (boolean)battler.isOverlayOnBottom
 * @type boolean
 * @desc オーバーレイ表示の Y 座標の基準をバトラーの足元にする [Default: false]
 * 
 * @param (string)battler.maskImage
 * @type file
 * @dir img/system
 * @desc バトラーグラフィックに適用するマスク
 * @require 1
 * 
 * @param (integer)battler.maskImageX
 * @type number
 * @min -4096
 * @max 4096
 * @desc  バトラーグラフィックのマスクの X 座標 [Default: 0]
 * 
 * @param (integer)battler.maskImageY
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックのマスクの Y 座標 [Default: 0]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)statusBg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス背景の X 座標 [Default: 0]
 * 
 * @param (integer)statusBg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)statusBg.visible
 * @type boolean
 * @desc ステータス背景を表示する [Default: true]
 * 
 * @param (string)statusBg.fileName
 * @type file
 * @dir img/system
 * @desc ステータス背景のファイル名
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)hp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP の基準 X 座標 [Default: 80]
 * 
 * @param (integer)hp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP の基準 Y 座標 [Default: 68]
 * 
 * @param (boolean)hp.visible
 * @type boolean
 * @desc HP を表示する [Default: true]
 * 
 * @param (integer)hp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)hp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 背景の Y 座標 [Default: 29]
 * 
 * @param (boolean)hp.bg.visible
 * @type boolean
 * @desc  HP 背景を表示する [Default: true]
 * 
 * @param (string)hp.bg.fileName
 * @type file
 * @dir img/system
 * @desc HP 背景のファイル名 [Default: bd_standard/std_gauge_bg]
 * @default bd_standard/std_gauge_bg
 * @require 1
 * 
 * @param (integer)hp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP シンボルの X 座標 [Default: 2]
 * 
 * @param (integer)hp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP シンボルの Y 座標 [Default: 14]
 * 
 * @param (boolean)hp.symbol.visible
 * @type boolean
 * @desc  HP シンボルを表示する [Default: true]
 * 
 * @param (string)hp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc HP シンボルのファイル名 [Default: bd_standard/std_hp]
 * @default bd_standard/std_hp
 * @require 1
 * 
 * @param (integer)hp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP ゲージの X 座標 [Default: 3]
 * 
 * @param (integer)hp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP ゲージの Y 座標 [Default: 31]
 * 
 * @param (boolean)hp.gauge.visible
 * @type boolean
 * @desc HP ゲージを表示する [Default: true]
 * 
 * @param (string)hp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc HP ゲージのファイル名 [Default: bd_standard/std_gauge]
 * @default bd_standard/std_gauge
 * @require 1
 * 
 * @param (integer)hp.gauge.skewAngleX
 * @type number
 * @min -180
 * @max 180
 * @desc HP ゲージの水平方向の斜め角度 [Default: 0]
 * 
 * @param (integer)hp.gauge.skewAngleY
 * @type number
 * @min -180
 * @max 180
 * @desc HP ゲージの垂直方向の斜め角度 [Default: 0]
 * 
 * @param (integer)hp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc HP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)hp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の X 座標 [Default: 30]
 * 
 * @param (integer)hp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の Y 座標 [Default: 0]
 * 
 * @param (boolean)hp.number.visible
 * @type boolean
 * @desc HP 数字を表示する [Default: true]
 * 
 * @param (string)hp.number.fileName
 * @type file
 * @dir img/system
 * @desc HP 数字のファイル名 [Default: bd_standard/std_large_numbers]
 * @default bd_standard/std_large_numbers
 * @require 1
 * 
 * @param (integer)hp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc HP 数字の桁数 [Default: 4]
 * 
 * @param (boolean)hp.number.zeroSuppress
 * @type boolean
 * @desc HP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)hp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)hp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc HP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 2]
 * 
 * @param (integer)hp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc HP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)mp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP の基準 X 座標 [Default: 80]
 * 
 * @param (integer)mp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP の基準 Y 座標 [Default: 108]
 * 
 * @param (boolean)mp.visible
 * @type boolean
 * @desc MP を表示する [Default: true]
 * 
 * @param (integer)mp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)mp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 背景の Y 座標 [Default: 29]
 * 
 * @param (boolean)mp.bg.visible
 * @type boolean
 * @desc  MP 背景を表示する [Default: true]
 * 
 * @param (string)mp.bg.fileName
 * @type file
 * @dir img/system
 * @desc MP 背景のファイル名 [Default: bd_standard/std_gauge_bg]
 * @default bd_standard/std_gauge_bg
 * @require 1
 * 
 * @param (integer)mp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP シンボルの X 座標 [Default: 2]
 * 
 * @param (integer)mp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP シンボルの Y 座標 [Default: 14]
 * 
 * @param (boolean)mp.symbol.visible
 * @type boolean
 * @desc  MP シンボルを表示する [Default: true]
 * 
 * @param (string)mp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc MP シンボルのファイル名 [Default: bd_standard/std_mp]
 * @default bd_standard/std_mp
 * @require 1
 * 
 * @param (integer)mp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP ゲージの X 座標 [Default: 3]
 * 
 * @param (integer)mp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP ゲージの Y 座標 [Default: 31]
 * 
 * @param (boolean)mp.gauge.visible
 * @type boolean
 * @desc MP ゲージを表示する [Default: true]
 * 
 * @param (string)mp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc MP ゲージのファイル名 [Default: bd_standard/std_gauge]
 * @default bd_standard/std_gauge
 * @require 1
 * 
 * @param (integer)mp.gauge.skewAngleX
 * @type number
 * @min -180
 * @max 180
 * @desc MP ゲージの水平方向の斜め角度 [Default: 0]
 * 
 * @param (integer)mp.gauge.skewAngleY
 * @type number
 * @min -180
 * @max 180
 * @desc MP ゲージの垂直方向の斜め角度 [Default: 0]
 * 
 * @param (integer)mp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc MP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)mp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の X 座標 [Default: 30]
 * 
 * @param (integer)mp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の Y 座標 [Default: 0]
 * 
 * @param (boolean)mp.number.visible
 * @type boolean
 * @desc MP 数字を表示する [Default: true]
 * 
 * @param (string)mp.number.fileName
 * @type file
 * @dir img/system
 * @desc MP 数字のファイル名 [Default: bd_standard/std_large_numbers]
 * @default bd_standard/std_large_numbers
 * @require 1
 * 
 * @param (integer)mp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc MP 数字の桁数 [Default: 4]
 * 
 * @param (boolean)mp.number.zeroSuppress
 * @type boolean
 * @desc MP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)mp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)mp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc MP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 2]
 * 
 * @param (integer)mp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc MP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)tp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP の基準 X 座標 [Default: 126]
 * 
 * @param (integer)tp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP の基準 Y 座標 [Default: -1
 * 
 * @param (boolean)tp.visible
 * @type boolean
 * @desc TP を表示する(システムの"バトル画面でTPを表示"が有効の時) [Default: true]
 * 
 * @param (integer)tp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)tp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)tp.bg.visible
 * @type boolean
 * @desc  TP 背景を表示する [Default: true]
 * 
 * @param (string)tp.bg.fileName
 * @type file
 * @dir img/system
 * @desc TP 背景のファイル名 [Default: bd_standard/std_tp_gauge_bg]
 * @default bd_standard/std_tp_gauge_bg
 * @require 1
 * 
 * @param (integer)tp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP シンボルの X 座標 [Default: 23]
 * 
 * @param (integer)tp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP シンボルの Y 座標 [Default: 13]
 * 
 * @param (boolean)tp.symbol.visible
 * @type boolean
 * @desc  TP シンボルを表示する [Default: true]
 * 
 * @param (string)tp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc TP シンボルのファイル名 [Default: bd_standard/std_tp]
 * @default bd_standard/std_tp
 * @require 1
 * 
 * @param (integer)tp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP ゲージの X 座標 [Default: 0]
 * 
 * @param (integer)tp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP ゲージの Y 座標 [Default: 0]
 * 
 * @param (boolean)tp.gauge.visible
 * @type boolean
 * @desc TP ゲージを表示する [Default: true]
 * 
 * @param (string)tp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc TP ゲージのファイル名 [Default: bd_standard/std_tp_gauge]
 * @default bd_standard/std_tp_gauge
 * @require 1
 * 
 * @param (integer)tp.gauge.startAngle
 * @type number
 * @min -359
 * @max 359
 * @desc TP 円ゲージの開始角度 [Default: -88]
 * 
 * @param (integer)tp.gauge.endAngle
 * @type number
 * @min -359
 * @max 359
 * @desc TP 円ゲージの開始角度 [Default: 272]
 * 
 * @param (integer)tp.gauge.radius
 * @type number
 * @min 16
 * @max 256
 * @desc TP 円ゲージの半径 [Default: 28]
 * 
 * @param (integer)tp.gauge.lineWidth
 * @type number
 * @min 1
 * @max 128
 * @desc TP 円ゲージの線幅 [Default: 8]
 * 
 * @param (integer)tp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc TP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)tp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の X 座標 [Default: 12]
 * 
 * @param (integer)tp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の Y 座標 [Default: 27]
 * 
 * @param (boolean)tp.number.visible
 * @type boolean
 * @desc TP 数字を表示する [Default: true]
 * 
 * @param (string)tp.number.fileName
 * @type file
 * @dir img/system
 * @desc TP 数字のファイル名 [Default: bd_standard/std_small_numbers]
 * @default bd_standard/std_small_numbers
 * @require 1
 * 
 * @param (integer)tp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc TP 数字の桁数 [Default: 3]
 * 
 * @param (boolean)tp.number.zeroSuppress
 * @type boolean
 * @desc TP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)tp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)tp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc TP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 1]
 * 
 * @param (integer)tp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc TP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)state.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートの基準 X 座標 [Default: 11]
 * 
 * @param (integer)state.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートの基準 Y 座標 [Default: 116]
 * 
 * @param (boolean)state.visible
 * @type boolean
 * @desc ステートを表示する [Default: true]
 * 
 * @param (integer)state.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステート背景の X 座標 [Default: 0]
 * 
 * @param (integer)state.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステート背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)state.bg.visible
 * @type boolean
 * @desc ステート背景を表示する(可視ステートが付与されている時) [Default: true]
 * 
 * @param (string)state.bg.fileName
 * @type file
 * @dir img/system
 * @desc ステート背景のファイル名
 * @require 1
 * 
 * @param (integer)state.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートシンボルの X 座標 [Default: 0]
 * 
 * @param (integer)state.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートシンボルの Y 座標 [Default: 0]
 * 
 * @param (boolean)state.symbol.visible
 * @type boolean
 * @desc  ステートシンボルを表示する [Default: true]
 * 
 * @param (string)state.symbol.fileName
 * @type file
 * @dir img/system
 * @desc ステートシンボルのファイル名
 * @require 1
 * 
 * @param (integer)state.icon.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートアイコンの X 座標 [Default: 0]
 * 
 * @param (integer)state.icon.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートアイコンの Y 座標 [Default: 0]
 * 
 * @param (boolean)state.icon.visible
 * @type boolean
 * @desc ステートアイコンを表示する [Default: true]
* 
 * @param (integer)state.icon.stateIconSize
 * @type number
 * @min 4
 * @max 128
 * @desc ステートアイコンの表示サイズ [Default: 32]
 * 
 * @param (integer)state.icon.spacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc アイコン毎の間隔 [Default: 0]
 * 
 * @param (integer)state.icon.maxStates
 * @type number
 * @min 1
 * @max 32
 * @desc ステートの最大表示数 [Default: 2]
 * 
 * @param (integer)state.icon.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc ステートの表示切り替え待ちフレーム [Default: 50]
 * 
 */

(function () {
	if (BD === undefined) {
		return;
	}
	BD.Core.StandardTheme.overwrite();
})();