[![DOI](https://zenodo.org/badge/261358454.svg)](https://zenodo.org/badge/latestdoi/261358454)

# Japanese Text Input For jsPsych
キー入力時にローマ字入力変換を行い，ひらがなまたはカタカナを表示するjsPsych用プラグインです。    
(lab.js版: https://github.com/mklab-japan/japaneseTextInputForLab.js)

# 特徴
全角入力でも半角入力でも，押したキーに対応したローマ字入力変換を行い，ひらがな/カタカナで表示します。そのため，推測変換無効にした上でテキスト入力での反応取得が可能です。記憶の再生課題など，推測変換を無効にした状況で調査・実験を行いたい場合に有用です。

# 準備
ひらがな/カタカナ入力用のライブラリとしてWanaKana.jsを利用しているので，以下のURLからWanaKana.min.jsを入手してください（Downloadを右クリックして保存）。    
https://wanakana.com/    

次に，<head></head>内でjspsych_mk.cssを指定します（入力欄の書式設定などに必要です）。
``` html
<link rel='stylesheet', type='text/css', href='jspsych_mk.css'>
```

そして，<body>以下でwakanaka.min.jsとjspsych-html-keyboard-japaneseTextInput.jsをjsPsychのプラグインとして読み込んでください。jspsych-html-keyboard-japaneseTextInput.jsより先にwanakana.min.jsを読み込む必要があります。

``` html
<script src="wanakana.min.js"></script>
<script src="jspsych-html-keyboard-japaneseTextInput.js"></script>
```

## 任意
長音記号（ー）の入力を有効にしたい場合は，jspsych.jsの一部に加筆にする必要があります。jspsych-6.10.jsの場合，2219行目付近を以下のように加筆してください。

### 変更前
``` 
    ',': 188,
    '.': 190,
```

### 変更後
```
    ',': 188,
    '-': 189,
    '.': 190,
```

# 使用方法
typeとしてjspsych-html-keyboard-japaneseTextInputを指定してしてください。以下のパラメータを設定できます。

 * stimulus : 画面中央に出す文字列（html）
 * inputSystem : ひらがなとカタカナのどちらに変換するか
    * 'hiragana'→ひらがな
    * 'katakana'→カタカナ
* convertText : デフォルトで表示する文字列（html）を指定する場合は入力（デフォルトは点滅するカーソル）
* prompt：教示など（デフォルトはnull）
* stimulus_duration：刺激の呈示時間（ms）（デフォルトはnull）
* trial_duration：試行の制限時間（ms）（デフォルトはnull）
* enter_ends_trial：trueでEnter入力時に試行の制限時間によらず試行を終了（デフォルトはfalse）

# 例
1. 5秒の意味記憶課題の試行（ひらがな入力）
```
const trial = {
    type: 'html-keyboard-japaneseTextInput',
    inputSystem: 'hiragana',
    prompt: '以下にあてはまる単語を考え，入力してください。',
    stimulus: '果物 - り___?',
    trial_duration: 5000,
    enter_ends_trial: false,
    post_trial_gap: 400
}
```

2. 10秒の意味記憶課題の試行（カタカナ入力）でEnter入力で試行終了
```
const trial = {
    type: 'html-keyboard-japaneseTextInput',
    inputSystem: 'katakana',
    prompt: '以下にあてはまる単語を考え，入力してください。',
    stimulus: '果物 - り___?',
    trial_duration: 10000,
    enter_ends_trial: true,
    post_trial_gap: 400
}
```

# デモ
## ひらがな入力のデモ（例1）
https://mklab-japan.github.io/japaneseTextInputForJsPsych/hiraganaDemo.html

## カタカナ入力のデモ（例2）
https://mklab-japan.github.io/japaneseTextInputForJsPsych/katakanaDemo.html
