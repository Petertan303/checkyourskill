// 定义一个数组，存储对应的字符
var items = [
    [
        "高度缺陷，",
        "缺陷",
        "普通",
        "标准",
        "优良",
        "卓越",
        "黑暗剑22",
    ],
    [
        "动弹不得，",
        "羸弱之至！",
        "中规中矩",
        "比你平常的力量稍大",
        "远大于你的臂力",
        "甚至能开山裂石！",
        "甚至能分海造陆！",
        "甚至能突破星荚！！",
        "甚至能一击贯穿塔卫二！！"
    ],
    [
        "百年僵直，",
        "停下攻击，",
        "树懒级别，",
        "正常施法级别，",
        "战到正酣的乒乓球挥拍级别，",
        "拉特兰冲锋铳的子弹射速级别！",
        "白金之星的拳头级别！",
        "突破光速级别！！",
        "黑暗剑22级别，"
    ],
    [
        "无法在表界显现，",
        "仅仅包含近身，",
        "和你的臂展相仿，",
        "延伸到了远方，",
        "目力所及范围，",
        "视线之外的也能生效！",
        "能超出这片大地的范畴！",
        "泰拉大陆施法能对塔卫二生效！！",
        "黑暗剑22的范围，"
    ],
    [
        "一个普朗克时间，",
        "一次瞬时爆发，",
        "一个短促循环，",
        "普通的充能释放，",
        "嚼了炫迈一样的持久，",
        "没有大几十年结束不了！",
        "伴随你的一生！",
        "恐怕在时间的尽头也会生效！！",
        "黑暗剑22的持久，"
    ],
    [
        "肉体残疾，",
        "自动恢复，",
        "阻挡增加，",
        "防御/法抗提升，",
        "生命值上限提升，",
        "获得抵抗，",
        "获得护盾，",
        "持续损失生命值，",
        "黑暗剑22，",
    ],
    [
        "高度缺陷，",
        "停顿目标，",
        "晕眩/束缚/冰冻/浮空…，",
        "推拉目标，",
        "削减护甲/法抗，",
        "沉默目标，",
        "显隐，",
        "元素损伤，",
        "集火标记，",
        "黑暗剑22，",
    ],
];

var titles = [
    "咒法化形系",
    "塑能转化系",
    "塑形重构系",
    "生理变化系/恢复疗愈系",
    "传心感知系",
    "源石技艺适应性",
    "力度",
    "速度",
    "广度",
    "持久度",
    "自身增益",
    "友方增益",
];
var titles_short = [
    "咒法化形系",
    "塑能转化系",
    "塑形重构系",
    "生理变化系/恢复疗愈系",
    "传心感知系",
    "源石技艺适应性",
    "力度",
    "速度",
    "广度",
    "持久度",
    "自身增益",
    "友方增益",
];

// 定义一个数组，存储对应的区间
var intervals = [
    [
        [0, 0],
        [1, 30],
        [31, 50],
        [51, 70],
        [71, 85],
        [86, 95],
        [96, 100],
    ],
    [
        [0, 0],
        [1, 20],
        [21, 40],
        [41, 50],
        [51, 65],
        [66, 85],
        [86, 90],
        [91, 99],
        [100, 100]
    ],
];

var sentence = [
    ["你即将主修的法术",
        "力度是",
        "速度是",
        "广度更是",
        "它的持久度是",
        "——能让你自己",
        "带给你同伴的增益是能够",
        "哦，多么美妙的法术！",
    ],
    ["而你可以选择辅修的法术",
        "力度是",
        "速度是",
        "广度更是",
        "它的持久度是",
        "——能让你自己",
        "带给你同伴的增益是能够",
        "哦，多么神奇的法术！"
    ]
];

var majors = [
    ["你属于咒法化形系，",
        "那里有埋藏在心底的勇敢，",
        "他们的胆识、气魄和豪爽，",
        "使咒法化形出类拔萃；"
    ],

    ["你属于塑能转化系，",
        "那里的人正直忠诚，",
        "塑能转化的学子们坚忍诚实，",
        "不畏惧艰辛的劳动；"
    ],

    ["你属于塑形重构系，",
        "那里的人正直忠诚，",
        "塑形重构的学子们坚忍诚实，",
        "不畏惧艰辛的劳动；"
    ],

    ["你头脑精明，",
        "会进智慧的老生理变化系，",
        "那些睿智博学的人，",
        "总会在那里遇见他们的同道；"
    ],

    ["你会进传心感知系，",
        "也许你在这里交上真诚的朋友，",
        "但那些狡诈阴险之辈却会不惜一切手段，",
        "去达到他们的目的；"
    ],
];

function average(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}

// 定义一个函数，根据输入的字符生成一个种子
function getSeed(text) {
    // 将输入的字符转换为ASCII码的和
    var sum = 0;
    for (var i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }
    // 将和取模100，得到一个0-99的整数
    var seed = sum;
    // 返回种子
    return seed;
}

// 定义一个函数，根据种子和范围生成一个随机整数
function randomInt(seed) {
    // 使用线性同余法生成随机数序列
    // 设置参数a, b, m
    var a = 25214903917;
    var b = 11;
    var m = 2 ^ 48 - 1;
    // 计算下一个随机数
    var next = (a * seed + b) % m;
    // 将随机数加一，得到一个1-range的整数
    var num = next - 1;
    if (num <= 0) num += 100;
    // 返回随机数
    return Math.abs(num);
}


function getItem(num, round, entry) {
    // num是随机数的出值，entry是第几个表格，对应哪一个items列表；round是第一轮还是第二轮，对应哪一个intervals列表
    // num 和intervals[round]里的内容对应，决定index的内容
    // 根据条目获取区间数组
    var interval = intervals[round];
    // 遍历区间数组，找到随机数所在的区间索引
    var index = -1;
    for (var i = 0; i < interval.length; i++) {
        if (num >= interval[i][0] && num <= interval[i][1]) {
            index = i;
            break;
        }
    }
    // 如果找到了区间索引，返回对应的字符
    if (index != -1) {
        return items[entry][index];
    } else {
        return items[entry][-1];
    }
}

var data_1 = [];
var data_2 = [];
var data_int_1 = [];
var data_int_2 = [];
var major_1;
var major_2;
var dataset_of_radar = [];

function generate() {

    // 获取输入框的值
    var text = document.getElementById("text").value;
    // 获取列表的元素
    var list = document.getElementById("list");
    // 清空列表的内容
    list.innerHTML = "";
    // 如果输入框不为空，才进行生成
    if (text != "") {
        // 根据输入的字符获取种子
        var seed = getSeed(text);
        for (var i = 0; i < 5; i++) {
            var num_ori = randomInt(seed);
            var num = num_ori % 100;
            data_int_1[i] = num;
            var item = getItem(num, 0, 0);
            // 始终都是第一个列表，所以是num，0，0
            var li_1 = document.createElement("li");
            li_1.style = "padding-top: 8px;"
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            div1.innerHTML = titles[i] + ": " + item;
            div2.innerHTML = "出值：" + num;
            li_1.appendChild(div1);
            li_1.appendChild(div2);
            data_1[i] = item;
            list.appendChild(li_1);
            seed = num_ori;
        }

        var num = Math.trunc(average(data_int_1));
        data_int_1[5] = num;
        var item = getItem(num, 0, 0);
        var li_2 = document.createElement("li");
        li_2.style = "padding-top: 8px;"
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div1.innerHTML = titles[5] + ": " + item;
        div2.innerHTML = "出值：" + num;
        li_2.appendChild(div1);
        li_2.appendChild(div2);
        data_1[5] = item;
        list.appendChild(li_2);

        for (var i = 0; i < 12; i++) {
            var num_ori = randomInt(seed);
            var num = num_ori % 100;
            data_int_2[i] = num;
            var item = getItem(num, 1, 1 + (i % 6));
            var li_3 = document.createElement("li");
            li_3.style = "padding-top: 8px;"
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            div1.innerHTML = titles[6 + (i) % 6] + ": " + item; // 注意这里title[i]的i也是需要更改的
            div2.innerHTML = "出值：" + num;
            li_3.appendChild(div1);
            li_3.appendChild(div2);
            data_2[i] = item;
            list.appendChild(li_3);
            seed = num_ori;
        }
    }
    var data_int_1_temp = []; // sort会改变原本的数组，使用新数组做缓冲
    data_int_1.forEach((element, index) => {
        data_int_1_temp[index] = element;
    });
    // // 但这样不能获取最大值所在位置
    // var major_1 = data_int_1_temp.sort()[0];
    // var major_2 = data_int_1_temp.sort()[1];

    var max = Math.abs(Math.max(...data_int_1_temp.slice(0, data_int_1_temp.length - 1))); // ...这个意思是扩展运算符(...)将数组转换为参数列表
    major_1 = data_int_1_temp.indexOf(max);
    data_int_1_temp[major_1] = -1;
    var sub_max = Math.abs(Math.max(...data_int_1_temp.slice(0, data_int_1_temp.length - 1))); // ...这个意思是扩展运算符(...)将数组转换为参数列表
    major_2 = data_int_1_temp.indexOf(sub_max);

    data_final = data_1.concat(data_2); // 拼接，好用的
    data_int_final_1 = data_int_1.concat(data_int_2.slice(0, 6));
    data_int_final_2 = data_int_1.concat(data_int_2.slice(6, 12));




    var list_of_major_1 = document.getElementById("list_of_major_1");
    var list_of_poem_1 = document.getElementById("list_of_poem_1");
    majors[major_1].forEach((element, index) => {
        var li_list_of_poem = document.createElement("li");
        li_list_of_poem.style = "padding-top: 8px;"
        var div = document.createElement("div");
        div.innerHTML = element;
        li_list_of_poem.appendChild(div);
        list_of_major_1.appendChild(li_list_of_poem);
    });
    sentence[0].forEach((element, index) => {
        var li_list_of_poem = document.createElement("li");
        li_list_of_poem.style = "padding-top: 8px;"
        var div = document.createElement("div");
        if (element == sentence[0][sentence[0].length - 1])
            div.innerHTML = element;
        else if (index == 0)
            div.innerHTML = element + titles[major_1];
        else div.innerHTML = element + data_final[5 + index];
        li_list_of_poem.appendChild(div);
        list_of_poem_1.appendChild(li_list_of_poem);
    });

    var list_of_major_2 = document.getElementById("list_of_major_2");
    var list_of_poem_2 = document.getElementById("list_of_poem_2");
    majors[major_2].forEach((element, index) => {
        var li_list_of_poem = document.createElement("li");
        li_list_of_poem.style = "padding-top: 8px;"
        var div = document.createElement("div");
        div.innerHTML = element;
        li_list_of_poem.appendChild(div);
        list_of_major_2.appendChild(li_list_of_poem);
    });
    sentence[1].forEach((element, index) => {
        var li_list_of_poem = document.createElement("li");
        li_list_of_poem.style = "padding-top: 8px;"
        var div = document.createElement("div");
        if (element == sentence[1][sentence[1].length - 1])
            div.innerHTML = element;
        else if (index == 0)
            div.innerHTML = element + titles[major_1];
        else div.innerHTML = element + data_final[11 + index];
        li_list_of_poem.appendChild(div);
        list_of_poem_2.appendChild(li_list_of_poem);
    });


    // var div3 = document.getElementById("div3");
    // div3.innerHTML = "你即将主修的法术，力度" + data_1[6] + "，速度是" + data_1[7] + "，广度更是" + data_1[8] + "；它的持久度是" + data_1[9] + "——能让你自己" + data_1[10] + "，带给你同伴的增益是能够" + data_1[11] + "！"

    // var div4 = document.getElementById("div4");
    // div4.innerHTML = "而你可以选择辅修的法术，它力度" + data_1[12] + "，速度是" + data_1[13] + "，广度更是" + data_1[14] + "；它的持久度是" + data_1[15] + "——能让你自己" + data_1[16] + "，带给你同伴的增益是能够" + data_1[17] + "！"
    dataset_of_radar = [
        { label: text + "的第一专业", backgroundColor: 'rgb(255, 140, 140, 0.2)', borderColor: "#FF8C90", data: data_int_final_1.slice(6, 12), fill: true },
        { label: text + "的第二专业", backgroundColor: 'rgb(255, 140, 255, 0.2)', borderColor: "#FF8Cff", data: data_int_final_2.slice(6, 12), fill: true },
    ];
    var rader_data_1 = {
        labels: titles_short.slice(0, 6),
        datasets: [
            { label: text + "的各个专业", backgroundColor: 'rgb(255, 140, 0, 0.2)', borderColor: "#FF8C00", data: data_int_1, fill: true },
        ],
        // options: { maintainAspectRatio: true, legend: { display: false, labels: { fontStyle: normal } }, title: { fontStyle: bold }, scales: { xAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }], yAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }] } }
    };
    var rader_data_2 = {
        labels: titles_short.slice(6, titles_short.length),
        datasets: dataset_of_radar,
        // options: { maintainAspectRatio: true, legend: { display: false, labels: { fontStyle: normal } }, title: { fontStyle: bold }, scales: { xAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }], yAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }] } }
    };
    // var rader_data_3 = {
    //     labels: titles_short,
    //     datasets: [{ label: text + "的第二专业", backgroundColor: "#FF8C00", borderColor: "#FF8C00", data: data_int_final_2, fill: false }],
    //     // options: { maintainAspectRatio: true, legend: { display: false, labels: { fontStyle: normal } }, title: { fontStyle: bold }, scales: { xAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }], yAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }] } }
    // };

    // dataset_of_radar = [rader_data_1, rader_data_2, rader_data_3];

    // 获取 canvas 元素
    var ctx_1 = document.getElementById("radar_pic_1").getContext("2d");
    var ctx_2 = document.getElementById("radar_pic_2").getContext("2d");
    // var ctx_3 = document.getElementById("radar_pic_3").getContext("2d");

    // 创建一个图表对象
    var radar_pic_1 = new Chart(ctx_1, {
        // 指定图表类型为雷达图
        type: "radar",
        // 指定图表的数据和配置项
        data: rader_data_1, // 使用你提供的数据
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false, // 保持图表原有比例
            elements: {
                line: {
                    borderWidth: 3 // 设置线条宽度
                }
            }
        }
    });
    var radar_pic_2 = new Chart(ctx_2, {
        // 指定图表类型为雷达图
        type: "radar",
        // 指定图表的数据和配置项
        data: rader_data_2, // 使用你提供的数据
        options: {
            responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
            maintainAspectRatio: false, // 保持图表原有比例
            elements: {
                line: {
                    borderWidth: 3 // 设置线条宽度
                }
            }
        }
    });
    // var radar_pic_3 = new Chart(ctx_3, {
    //     // 指定图表类型为雷达图
    //     type: "radar",
    //     // 指定图表的数据和配置项
    //     data: rader_data_3, // 使用你提供的数据
    //     options: {
    //         responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
    //         maintainAspectRatio: false, // 保持图表原有比例
    //         elements: {
    //             line: {
    //                 borderWidth: 3 // 设置线条宽度
    //             }
    //         }
    //     }
    // });
}
