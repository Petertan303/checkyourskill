// 定义一个数组，存储对应的字符
var items = [
    [
        "缺陷",
        "普通",
        "标准",
        "优良",
        "卓越",
        "黑暗剑22",
    ],
    [
        "攻击力降低",
        "攻击力不变",
        "攻击力小幅提升",
        "攻击力提升",
        "攻击力大幅提升",
        "攻击力超大幅提升",
        "攻击力+330%",
        "黑暗剑22"
    ],
    [
        "停止攻击",
        "攻击速度降低",
        "攻击速度不变",
        "攻击速度小幅提升",
        "攻击速度提升",
        "攻击速度超大幅度提升",
        "攻击变为五及以上连击",
        "黑暗剑22"
    ],
    [
        "攻击范围缩小",
        "攻击范围不变",
        "攻击范围变化",
        "攻击范围扩大",
        "攻击范围进一步扩大",
        "攻击范围变为全屏",
        "特殊攻击范围，如无限长直线",
        "黑暗剑22"
    ],
    [
        "瞬时爆发",
        "短促循环",
        "充能释放",
        "长时间待机",
        "中速回转",
        "持久型变化",
        "永续/切换",
        "黑暗剑22"
    ],
    [
        "自动恢复",
        "阻挡增加",
        "防御/法抗提升",
        "生命值上限提升",
        "获得抵抗",
        "获得屏障/护盾",
        "持续损失生命值",
        "黑暗剑22",
    ],
    [
        "停顿目标",
        "晕眩/束缚/冰冻/浮空…",
        "推拉目标",
        "削减护甲/法抗",
        "沉默目标",
        "显隐",
        "元素损伤",
        "集火标记",
        "黑暗剑22",
    ],
];

// // 定义一个数组，存储对应的范围
// var ranges = [20, 40, 50, 60, 65, 90, 100, 100];

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
    "己方增益",
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
    "己方增益",
    "友方增益",
];

// 定义一个数组，存储对应的区间
var intervals = [
    [
        [1, 30],
        [31, 50],
        [51, 70],
        [71, 85],
        [86, 95],
        [96, 100],
    ],
    [
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

// 定义一个函数，根据输入的字符生成一个种子
function getSeed(text) {
    // 将输入的字符转换为ASCII码的和
    var sum = 0;
    for (var i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }
    // 将和取模100，得到一个0-99的整数
    var seed = sum % (2 ^ 48);
    // 返回种子
    return seed;
}

// 定义一个函数，根据种子和范围生成一个随机整数
function randomInt(seed, range) {
    // 使用线性同余法生成随机数序列
    // 设置参数a, b, m
    var a = 25214903917;
    var b = 11;
    var m = range;
    // 计算下一个随机数
    var next = (a * seed + b) % m;
    // 将随机数加一，得到一个1-range的整数
    var num = next + 1;
    // 返回随机数
    return num;
}


function getItem(num, entry) {
    // 根据条目获取区间数组
    var interval = intervals[entry];
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
        // return "无效的数字";
        return items[entry][-1];
    }
}


// 定义一个函数，生成十个随机数，并显示在列表中
function generate() {
    var data = [];
    var data_int = [];

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
        for (var i = 0; i < 17; i++) {
            var num = randomInt(seed, 100);
            data_int[i] = num;
            // 根据随机数和条目获取对应的字符
            var item = getItem(num, i);
            // 创建一个列表项元素
            var li = document.createElement("li");
            li.style = "padding-top: 8px;"
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            // 设置列表项的内容为条目、随机数和字符
            // li.innerHTML = titles[i] + "：" + num + " " + item;
            div1.innerHTML = titles[i] + ": " + item;
            div2.innerHTML = "出值：" + num;
            li.appendChild(div1);
            li.appendChild(div2);
            data[i] = item;
            // 将列表项添加到列表中
            list.appendChild(li);
            // 更新种子为随机数
            seed = num;
        }
    }


    var div3 = document.getElementById("div3");
    div3.style = "padding-top: 8px;";
    div3.innerHTML = "亲爱的" + text + "博士，" + "你的法杖是一根" + data[0] + ", 主体由" + data[1] + "打造，辅以" + data[2] + "，并使用" + data[5] + "进行加工" + "。其施术单元由" + data[3] + "构成，循环及冷却系统是" + data[6] + ", 而核心的源石技艺回路材料是" + data[4] + "。这把法杖的制造的开销在" + data[7] + "，真是一把好法杖！";

    // var div4 = document.getElementById("div4");
    // div4.style = "padding-top: 8px; padding-bottom: 28px";
    // div4.innerHTML = "欢迎使用增值服务！经过知名专家鉴定，你的法杖产自于" + data[8] + "，新旧是" + data[9] + "，来自于" + data[11] + "，至于施法的手感，是一种" + data[10] + "。可喜可贺，可喜可贺！";

    // var div5 = document.getElementById("div5")
    // div5.style = "padding-top: 8px; padding-bottom: 28px"
    // div5.innerHTML = "增值服务"

    var rader_data = {
        labels: titles_short,
        datasets: [{ label: text, backgroundColor: "#FF8C00", borderColor: "#FF8C00", data: data_int, fill: true }],
        // options: { maintainAspectRatio: true, legend: { display: false, labels: { fontStyle: normal } }, title: { fontStyle: bold }, scales: { xAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }], yAxes: [{ gridLines: { drawTicks: true }, ticks: { fontStyle: normal } }] } }
    };

    // 获取 canvas 元素
    var ctx = document.getElementById("radar_pic").getContext("2d");

    // 创建一个图表对象
    var radar_pic = new Chart(ctx, {
        // 指定图表类型为雷达图
        type: "radar",
        // 指定图表的数据和配置项
        data: rader_data, // 使用你提供的数据
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
}