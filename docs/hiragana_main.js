//デバッグ用
const displayTime = 1000;

//注視点
const fixation = {
    type: 'html-keyboard-response',
    stimulus: '<span style = "font-size:5vh;">+</span>',
    trial_duration: 0.4 * displayTime,
    choices: jsPsych.NO_KEYS
};


//刺激
const cueList = [
    {cue: '果物 - り＿＿？'},
    {cue: '果物 - み＿＿？'}
];

const trialDuration = 10 * displayTime;

const trial = {
    type: 'html-keyboard-japaneseTextInput',
    inputSystem: 'hiragana',
    prompt: '<p>以下にあてはまる単語を<span style ="text-decoration: underline">考え</span>，入力してください。' + '<br>' + String(trialDuration / 1000) + '秒経過すると自動的に次に進みます。</p>' +
        '<p>同じ問題には同じ回答でかまいません。</p>',
    stimulus: jsPsych.timelineVariable('cue'),
    trial_duration: trialDuration,
    enter_ends_trial: false,
    post_trial_gap: 0.4 * displayTime
}

const phase = {
    timeline: [fixation, trial],
    timeline_variables: cueList,
    data: {
        phase: 'semantic generation'
    }
}

const readyText = {
    type: 'html-keyboard-response',
    stimulus: '<div style = "font-size: 3vh">' +
        '<p>ローマ字入力のみ対応</p>' +
        '<p>ヒントを元に右側の単語を<span style="text-decoration: underline">考えてください。</span></p>' +
        '<p>準備ができたら，スペースキーを押してください。</p>' +
        '<p><span style = "font-size:2vh; color:gray">（実験を途中で中止したい方はEscを押して，ブラウザを閉じてください）</span></div>',
    choices: [32],
    post_trial_gap: 0.4 * displayTime
};

//構成
let timeline = [readyText,phase];
jsPsych.init({
    timeline: timeline,
    on_finish: function () {
        jsPsych.data.displayData('csv')
    }
});
