#!/usr/bin/env python3
"""Build ch2_zh.json from inline Simplified Chinese translations."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH2_JSON = ROOT / "scripts/official-apex/extracted/ch2.json"
OUT = ROOT / "scripts/official-apex/extracted/ch2_zh.json"

# Keys: "{page_key}:{block_index}"
ZH: dict[str, str] = {
    # packaging/01 Dimensions
    "review_mechanism__packaging__01:0": "车身的骨架以及各基本部件的布局，属于所谓的基础性能，在设计初期就已确定，难以轻易更改。这正是影响汽车三大功能——行驶、转向与制动——的“潜力”所在，也是判断行驶性能的重要基准。基础性能中有许多难以靠调校弥补的要素，微小的规格差异就可能影响操控优劣。此外，调校带来的效果也会因车辆本身的潜力而大幅变化。请在此牢牢记住各项规格对行驶性能的影响。",
    "review_mechanism__packaging__01:1": "轴距",
    "review_mechanism__packaging__01:2": "从车身侧面看，前轮中心到后轮中心之间的距离称为轴距。它影响车辆的行驶稳定性：轴距越长，越不易受路面起伏和横风影响，直线稳定性往往更高。一般而言，轴距越短，稳定性会下降，但对转向操作的反应更敏锐，在弯道中更灵活。从乘坐舒适性看，长轴距更容易带来舒适的行驶感受，短轴距则往往相反。",
    "review_mechanism__packaging__01:3": "前后悬",
    "review_mechanism__packaging__01:4": "从前轮中心到前保险杠最前端称为前悬，从后轮中心到后保险杠最后端称为后悬。这些部位若放置重物，会增大车辆的横摆惯量（阻碍转向的力），降低运动性能。因此理想结构是尽量将重物布置在轴距内侧，尤其是发动机这类重型单元。不过，为获得空气动力学效果，前后悬也需要一定长度。",
    "review_mechanism__packaging__01:5": "轮距",
    "review_mechanism__packaging__01:6": "左右轮胎之间的距离称为轮距。加宽轮距可在一定程度上降低虚拟重心高度。一般而言，轮距越宽，弯道中轮胎的抓地越有利；驱动轮轮距加宽，也有利于将动力传递到路面。赛车中常通过前后不同轮距来调校操控。相反，相对轴距过窄的轮距虽能使操控更灵敏，但往往会损害稳定性。",
    "review_mechanism__packaging__01:7": "车高",
    "review_mechanism__packaging__01:8": "指从路面到车辆最高点的距离。车高越低，重心越低，越能抑制弯道中的侧倾（车身横向倾斜），从而提高过弯速度。但降低车高会牺牲车内空间，也使悬架行程（伸缩量）更难保证，在赛道路肩等处容易引发托底（完全压缩到底）。",
    "review_mechanism__packaging__01:9": "车重",
    "review_mechanism__packaging__01:10": "车重是左右车辆运动性能极为重要的因素。车重越轻，发动机负担越小，动力性能越有利；制动负荷减轻，制动力提高；惯性浪费减少，过弯更轻快，益处不胜枚举。车重除以最高输出功率称为“功率重量比”，该值越小，含出弯加速在内的加速越凌厉，运动化驾驶越可行。同时它对提高燃油经济性也有巨大作用，从环保角度看，轻量化也是新车开发的重要主题。",
    # packaging/02 Drivetrains
    "review_mechanism__packaging__02:0": "与车身尺寸一样，“驱动形式”也是基本规格，由发动机位置与驱动轮决定，一般记为 FF、FR、MR、RR。车上最重的发动机放在何处、驱动哪组车轮，是决定重量平衡的关键因素。\n\n重量平衡良好的车能更高效地把动力传到驱动轮，起步与加速更有利；制动时也不易过度前倾，减速更可靠。\n\n重量平衡对过弯影响最大：离心力使车不稳，平衡不佳者提高弯速可能甩尾甚至失控。\n\n理想为前后、左右均约50:50。发动机前置、后轮驱动的 FR 较易接近。FF（及 FF 基础四驱）易头重，RR 易尾重。部分 FF 为改善配重将横置发动机纵置。\n\n重量平衡的劣势并非绝对，调校与驾驶可部分弥补；但 MR 赛车能胜均衡 FR，原因也在于此。",
    "review_mechanism__packaging__02:1": "● 驱动形式种类",
    "review_mechanism__packaging__02:2": "FR［前置发动机、后轮驱动］",
    "review_mechanism__packaging__02:3": "这是传统布局，发动机位于前部，驱动轮在后部。该配置可实现相对均衡的重量分配，带来稳定、可预测的操控。除良好的操控特性外，前轮专门负责转向、后轮负责驱动，转向反馈清晰。但在低附着力路面上牵引力可能受限，驱动后轮在某些条件下载荷较小，动力传递较困难。",
    "review_mechanism__packaging__02:4": "FF［前置发动机、前轮驱动］",
    "review_mechanism__packaging__02:5": "该布局将发动机和驱动轮都置于前部。将发动机和变速箱集中在前部可提高布置效率，获得更大乘员舱和更实用的内部空间。但该配置通常导致前部重量偏重。由于前轮同时负责转向和传递驱动力，可用轮胎抓地力必须在转弯与加速之间共享。这在高载荷下可能限制性能并导致转向不足。因此该布局一般不太适合极高功率应用，但因实用性、成本效益和空间优势仍被广泛使用。",
    "review_mechanism__packaging__02:6": "MR［中置发动机、后轮驱动］",
    "review_mechanism__packaging__02:7": "该布局将发动机置于车辆中部附近，驱动后轮。将质量集中在重心附近可降低横摆惯量，使方向变化更迅速、更灵敏，有助于精准过弯。它在加速和制动时也有利于前后轮胎的牵引力平衡。因此该布局广泛用于高性能跑车和赛车。",
    "review_mechanism__packaging__02:8": "RR［后置发动机、后轮驱动］",
    "review_mechanism__packaging__02:9": "后驱布局将发动机安装在后悬、后轮后方。该布局将重量集中于后部，使后轮更紧贴路面，改善牵引力和加速。但会减少前轮载荷，使入弯响应变慢，进入弯道初期可能出现转向不足。此外，由于后部重量偏重，一旦车尾甩出可能非常突然，需要较高驾驶技术才能救车。",
    "review_mechanism__packaging__02:10": "4WD［四轮驱动］",
    "review_mechanism__packaging__02:11": "该配置向四个车轮传递动力。尽管重量增加，但由于牵引力高，非常适合静止起步和加速。但其稳定性可能使转弯时响应性降低。大多数驱动形式都可改为四驱，但基础布局仍对整体操控有强烈影响。通常以前轮或后轮为主驱动轮，检测到打滑时再向其余车轮分配扭矩。",
    # engine/01
    "review_mechanism__engine__01:0": "绝大多数汽油车搭载四冲程往复式发动机。往复式发动机有气缸，活塞在气缸内往复运动产生动力。四冲程是指这一往复运动分为进气、压缩、燃烧、排气四个行程。\n\n说明四冲程发动机的行程：活塞到达上止点前片刻，进气门开启。活塞从上止点开始下行时，气缸内压力降低，混合气经开启的进气门被吸入。活塞到达最下端时进气行程结束，进入压缩行程。所有气门关闭，活塞压缩混合气。\n\n混合气被压缩后，活塞刚过顶点时火花塞点火，即燃烧。此时汽油发动机气缸内温度可达约2000℃、压力约200个大气压。这一高温高压能量推动活塞下行，转动曲轴，产生旋转能量。\n\n活塞到达下端后排气门开启，进入排气行程。排气更多依靠高温高压气体自身从排气门喷出，而非仅靠活塞推出。活塞再次到达顶点后进气门开启，回到进气行程。\n\n四冲程发动机在怠速时每分钟曲轴转动数百次，全油门时达数千次，持续产生动力。",
    "review_mechanism__engine__01:2": "● 气缸布置种类",
    "review_mechanism__engine__01:3": "直列型",
    "review_mechanism__engine__01:4": "多个气缸排成一列。所有气缸共用一根凸轮轴和一根曲轴，缸体可一体化，结构简单、相对轻量。但气缸数增多会变长，布置空间不利。",
    "review_mechanism__engine__01:6": "V型",
    "review_mechanism__engine__01:7": "气缸左右交替呈V形布置。曲轴可缩短，多气缸时发动机仍较紧凑。不论气缸数多少振动较小，较短的缸体和曲轴刚性也较好。",
    "review_mechanism__engine__01:9": "水平对向型",
    "review_mechanism__engine__01:10": "气缸左右交替水平布置，以曲轴为中心相向。对向活塞左右对称运动似拳击对攻，故称“拳击手”发动机。发动机高度低，有利于降低重心。",
    "review_mechanism__engine__01:12": "W型",
    "review_mechanism__engine__01:13": "本指一根曲轴上三列气缸扇形布置的发动机；现今也将两个窄角V型发动机组合的结构称为W型。宽度比V型大，但12缸以上多气缸时可缩短发动机长度，优势明显。",
    # engine/02
    "review_mechanism__engine__02:0": "四冲程发动机有进气门（进气行程开启，引入混合气）和排气门（排气行程开启，排出废气）。气门设在气缸盖上，按时开闭燃烧室与外部。\n\n现代发动机通常将凸轮轴置于顶部（顶置凸轮），气门控制更精确。多数为每缸四气门（进气两、排气两）；追求低转速燃烧效率的仍有两气门（进、排各一）。\n\n近年趋势是可变气门正时。最初在低、高转速区切换正时，后发展为随转速连续改变正时与升程。BMW Valvetronic 等最新机构甚至不用节气门调节输出，进一步提高效率。",
    "review_mechanism__engine__02:1": "● 气门驱动方式种类",
    "review_mechanism__engine__02:2": "DOHC［双顶置凸轮轴］",
    "review_mechanism__engine__02:3": "DOHC 即双顶置凸轮轴：两根凸轮轴分别驱动进、排气气门。减轻凸轮负担，气门开闭更可靠，且可减轻气门机构惯量，利于高转速、高输出。绝大多数高性能发动机采用此布局。",
    "review_mechanism__engine__02:5": "SOHC［单顶置凸轮轴］",
    "review_mechanism__engine__02:6": "气缸盖上设一根凸轮轴。燃烧室形状不同，凸轮轴可直接驱动气门，或通过摇臂驱动。比 OHV 气门跟随性更好、可高转速化；比 DOHC 灵活性略逊，但 SOHC 也有高转速机型，并非一定劣势。",
    "review_mechanism__engine__02:8": "OHV［顶置气门］",
    "review_mechanism__engine__02:9": "亦称“头上阀式”：气门机构在气缸盖上，但凸轮轴在缸体侧面，经长推杆和摇臂驱动气门。结构简单、维护方便；高转速气门跟随性较差，不利于大功率化。",
    # engine/03
    "review_mechanism__engine__03:0": "转子发动机（汪克尔发动机）与往复式一样，通过进气、压缩、燃烧、排气循环获得旋转能量，但行程机制根本不同。\n\n它没有气缸，而有茧形转子壳，内装三边膨起的三角转子。转子偏心旋转，使转子与壳体间空间大小变化，在此完成压缩、燃烧、排气。通常一台转子发动机有2或3个转子壳。\n\n往复式多活塞往复，力控制难，产生振动和噪声。转子发动机原理上是旋转运动，运转更平顺。无传统气门系，零件数大减。近年往复式也轻量化，轻量优势减弱，但紧凑性毋庸置疑。\n\n转子进排气时机由壳体壁面、侧面端口形状决定；调校即改变端口位置与形状。无排气门，排气能量可直接从排气口排出，与涡轮增压器相性好。\n\n相较往复式，转子发动机燃油经济性往往不利：燃烧室表面积相对容积大，热损失多，转化为旋转能量的比例较低。",
    # engine/04
    "review_mechanism__engine__04:0": "发动机吸入空气越多，功率提升空间越大。最直接方法是增大排量。\n\n但不改变排量也可获得类似效果，即强制进气：将更多空气压入发动机，使更多空气（及燃油）进入燃烧室。装置大致分机械增压与涡轮增压两类。\n\n压缩进气时的附加压力称增压压力（boost）。大气压约1 bar（约1 kg/cm²）。增压1 bar时，绝对进气压力约2 bar，理想条件下进入发动机的空气约加倍。\n\n增压越高，缸压与部件热负荷越大，故增压发动机常强化内部件并降低压缩比以抑制爆震。\n\n空气压缩会升温、密度下降，高负荷或夏季更明显，限制输出。故中冷器冷却增压空气已成常规。\n\n涡轮增压靠排气驱动，建立增压有滞后（涡轮迟滞）；机械增压由曲轴驱动，无迟滞但消耗部分发动机功率。\n\n近年也有低转速用机械增压、高转速用涡轮，兼顾两者优点的增压发动机。",
    "review_mechanism__engine__04:1": "机械增压器",
    "review_mechanism__engine__04:2": "由曲轴经皮带等驱动压缩机，压缩空气供入发动机。低转速增压效果好、油门响应快，与自动变速箱相性也好。图示为罗茨鼓风机型，另有螺杆型、涡旋型等。",
    "review_mechanism__engine__04:4": "涡轮增压器",
    "review_mechanism__engine__04:5": "“涡轮”即涡轮机：利用排气压力驱动涡轮带动压缩机增压。回收排气能量，高转速区不像机械增压那样增加驱动损失。但低转速排气能量不足时涡轮难起转，加速时需时间建立增压，即涡轮迟滞。欧洲亦常见小排量涡轮以兼顾油耗。",
    # engine/05
    "review_mechanism__engine__05:0": "混合动力系统的目的是结合内燃机与电动机提高能量效率、改善油耗。日本长期领跑混动开发；欧洲运动车厂商加入后，混动正成为下一代动力单元核心。\n\n发动机弱点在怠速与低速效率差；电动机近零转速即可最大转矩、效率高，可弥补发动机低转速区。速度升高后发动机效率提高，电动机输出下降、效率变差。混动即组合两者长处，大幅提高整体效率。\n\n电动机与电池还可回收能量（再生）：收油或制动时，车轮带动发电机充电，储存的电能再驱动电机，将原本以热形式浪费的制动能量部分转为电能。\n\n另一优势是电机可像增压器一样辅助发动机；欧洲混动多强调此点，用电机实现大排量车的动力感受而无需增大排量。\n\n电机与发动机组合方式不同，混动控制范围与擅长领域各异。多种系统已实用化，超跑混动系统输出可达1000 PS。",
    "review_mechanism__engine__05:1": "● 丰田普锐斯工作概要",
    "review_mechanism__engine__05:2": "系统整体图",
    "review_mechanism__engine__05:4": "起步·低中速行驶",
    "review_mechanism__engine__05:5": "起步或低速至中速等发动机效率差的区域，停发动机，仅由电机驱动。",
    "review_mechanism__engine__05:7": "通常行驶",
    "review_mechanism__engine__05:8": "发动机动力经动力分割机构分两路：一路驱动发电机发电，一路直接驱动车轮。",
    "review_mechanism__engine__05:10": "急加速",
    "review_mechanism__engine__05:11": "电池也供电，发动机驱动力叠加电机驱动力，响应好、加速平顺。",
    "review_mechanism__engine__05:13": "减速与制动",
    "review_mechanism__engine__05:14": "车轮驱动电机作发电机，将制动动能高效转为电能（再生制动），为电池充电。",
    "review_mechanism__engine__05:16": "电池充电",
    "review_mechanism__engine__05:17": "电池维持一定荷电状态；电量低时启动发动机驱动发电机充电。",
    "review_mechanism__engine__05:19": "● 混合动力系统种类",
    "review_mechanism__engine__05:20": "串联式",
    "review_mechanism__engine__05:21": "发动机只驱动发电机，仅电机驱动车辆。结构简单、发动机位置自由，可视为带发电机的电动车；高速区电机效率可能成问题。",
    "review_mechanism__engine__05:23": "并联式",
    "review_mechanism__engine__05:24": "发动机与电机并行。通常在发动机与变速箱之间装电机，生产性高。主角是小型化发动机，电机辅助以兼顾动力与油耗。",
    "review_mechanism__engine__05:26": "混联式（动力分割式）",
    "review_mechanism__engine__05:27": "用行星齿轮等机构分割发动机动力，分配给发电机与驱动电机。起步/低速用电池电力；通常行驶在高效转速区运行发动机，同时发电充电。",
    # engine/06
    "review_mechanism__engine__06:0": "目录规格表上有许多数值与术语。要估量发动机性能与潜力，必须理解其含义。此处介绍五个基本关键词：马力、转矩、排量等，深入理解后更能看清车辆特性。",
    "review_mechanism__engine__06:1": "马力［Horsepower］",
    "review_mechanism__engine__06:2": "马力直观表示发动机输出上限，常用 PS 或 hp。1 PS 为1秒内将75 kg物体提升1 m的功率；100 PS 即1秒内将约1 t提升7.5 m。马力由转矩×转速决定，小排量高转速机也可大功率。国际常用 kW（1 PS＝0.735 kW）。",
    "review_mechanism__engine__06:4": "转矩［Torque］",
    "review_mechanism__engine__06:5": "转矩表示旋转力：用1 m扳手以1 kg力拧螺母即为1 kg·m。对发动机即曲轴试图旋转的力，接近燃烧能量本身；自然吸气机排量越大转矩往往越大。\n\n转矩大意味着维持转速的力强，对驾驶员更易操控。",
    "review_mechanism__engine__06:7": "排量／气缸数",
    "review_mechanism__engine__06:8": "排量表示发动机可吸入的混合气体积，往复式为“单缸活塞行程容积×气缸数”。排量越大输出往往越高，但单缸过大则运转不够平顺，故增加气缸数降低单缸容积；气缸数多也使每曲轴转一圈燃烧次数增加，运转更平顺。\n\n一般单缸排量350～600 cc较理想，但多缸成本高，实际气缸数常由车身尺寸与级别决定。",
    "review_mechanism__engine__06:9": "缸径行程比",
    "review_mechanism__engine__06:10": "行程除以缸径为缸径行程比：小于1为短行程，大于1为长行程，等于1为方形。长行程机低中转速转矩易出，高转速功率难发挥；短行程相反。活塞最上为下止点、最下为上止点，亦请记住。",
    "review_mechanism__engine__06:12": "压缩比",
    "review_mechanism__engine__06:13": "压缩比表示混合气被压缩的程度，强烈影响功率。用活塞在下止点时的气缸总容积，除以上止点燃烧室容积求得。例如2000 cc四缸机，单缸500 cc，燃烧室50 cc，则550÷50＝11:1。\n\n自然吸气汽油机压缩比多在9～11；超过10可视为同排量高输出设定。增压机为抑制异常燃烧，多在7～9。",
    # drivetrain/01
    "review_mechanism__drivetrain__01:0": "发动机每分钟数百至数千转，直接驱动车轮过快，需中间变速装置。通过齿轮组合按情况取出速度与力，即变速箱（变速器）。\n\n齿轮原理：大齿轮带小齿轮则小齿轮转得快、力小；小齿轮带大齿轮则大齿轮转得慢、力大。\n\n车辆最需要大力的是起步；匀速高速只需小功率。起步用大减速比产生大转矩。\n\n大齿轮转矩大但转速慢，故一挡全油门时速仅数十公里。变速箱用多组齿轮逐渐减小减速比，按路况调节速度与力。\n\n实车将变速箱与驱动轮前的主减速器（终传）组合成总传动比。传动比对特性影响大，赛道选合适齿比是提升圈速的关键。",
    "review_mechanism__drivetrain__01:2": "● 主减速器（终传）",
    "review_mechanism__drivetrain__01:3": "发动机与驱动轮之间最后一级减速齿轮即主减速器，再次降低转速传给轮胎；纵置发动机还负责将动力转向90°。与变速箱独立，更换较易，是改变车辆特性的重要手段。运动车常增大齿比提加速（最高速降）；重视油耗则减小齿比降转速。",
    "review_mechanism__drivetrain__01:5": "● 两脚板变速箱种类",
    "review_mechanism__drivetrain__01:6": "AT［自动变速器］",
    "review_mechanism__drivetrain__01:7": "以液力变矩器（流体离合器）连接发动机，按车速与转速自动换挡。内部多用行星齿轮、液压控制。换挡平顺，但液压滑移与损失使油耗略不利。",
    "review_mechanism__drivetrain__01:8": "CVT［无级变速器］",
    "review_mechanism__drivetrain__01:9": "亦称无段变速、连续可变变速：不用固定齿比，而用金属带或链条连接两个可变直径皮带轮，连续改变传动比。几乎无换挡冲击，可在多种工况保持较优发动机转速。",
    "review_mechanism__drivetrain__01:10": "DCT［双离合变速器］",
    "review_mechanism__drivetrain__01:11": "用两个离合器自动化操作的手动变速箱。奇偶挡分轴，预选下一挡后切换离合器，换挡可快于传统手动。AT行星齿轮有转速上限，DCT可配高转速发动机，运动车与节能车均有采用。",
    # drivetrain/02
    "review_mechanism__drivetrain__02:0": "● 差速器",
    "review_mechanism__drivetrain__02:1": "左右均有驱动轮的车辆必需差速器（差动齿轮）。纯直线不必需，转弯时作用显著，日语亦称差动齿轮机构。\n\n转弯时外轮比内轮路程长，须允许转速差，否则内轮阻滞、车难转向。差速器在左右驱动轮之间、与主减速器一体，吸收这一差异。\n\n发动机动力经主减速器到从动齿轮，小行星齿轮与两侧半轴齿轮啮合传至左右轮。\n\n直线时行星齿轮随从动齿轮公转，左右等速、等转矩。\n\n转弯时内轮阻力经半轴传到半轴齿轮，行星齿轮除公转还自转，调节左右转速差，将更多动力分给外轮。",
    "review_mechanism__drivetrain__02:5": "● 限滑差速器（LSD）",
    "review_mechanism__drivetrain__02:6": "普通差速器在单侧失去附着力时，会把动力送给空转轮，另一侧几乎无驱动力，泥泞雪地常见。LSD在左右转速差超过一定值时限制差速，使两侧都能获得驱动力。方式有多片离合器、电子控制、齿轮啮合轴向力、粘性流体剪阻力等。\n\n运动车型更多为保驱动力与改善操控而用 LSD，而非仅为脱困。",
    "review_mechanism__drivetrain__02:9": "● LSD 种类",
    "review_mechanism__drivetrain__02:10": "转矩感应式",
    "review_mechanism__drivetrain__02:11": "特殊齿轮组合：左右转矩差增大时齿面阻力增加，限制打滑。限滑力强，适合赛道等高负荷，响应快。含多片离合器、Torsen、 helical 等。",
    "review_mechanism__drivetrain__02:12": "转速感应式",
    "review_mechanism__drivetrain__02:13": "用高粘度硅油而非齿轮限滑，代表为粘性 LSD，亦有油经小孔流动的孔板式。限滑力与响应弱于转矩式，但低附着路面更易驾驭。",
    "review_mechanism__drivetrain__02:14": "主动控制式",
    "review_mechanism__drivetrain__02:15": "电脑根据传感器主动控制限滑，拉力赛等常见，部分市售车亦有。通过液压或电磁离合器调节摩擦片压力。",
    # body/01
    "review_mechanism__body__01:0": "车身与发动机、悬架并列，决定车辆性格。车身需要“刚性”“强度”，并在实现后追求“轻量”。刚性是抗变形，强度是抗破坏。\n\n刚性对行驶性能影响尤大：过坎、过弯加载时，刚性高则不易弯扭，保持形状。\n\n即使变形也应迅速恢复，悬架才能正确工作、轮胎接地更好。刚性高则动力更易传至路面，行为稳定、易控；易变形则动力传递差、操控受损。\n\n载荷有缓有急，目录中的弯曲/扭转刚性多指慢速输入；真正高刚性还应承受剧烈冲击。\n\n强度可理解为“硬度”。强度低碰撞损伤大，但过高则冲击直接传乘员，须平衡吸能。\n\n理想车身在高维度平衡刚性与强度；补强增重难避，敞篷车常因地板补强而比硬顶更重。",
    "review_mechanism__body__01:2": "非承载式车身",
    "review_mechanism__body__01:3": "亦称分离车架、body-on-frame：发动机、变速箱、悬架装在坚固车架，再装车身。有梯形、脊梁、周边等形式，梯形成本低、易加强，越野车常用。多根钢管焊接再覆面板的管状空间构架亦属此类，不可拆，但轻量高刚、易改修，赛车与少量跑车常用。",
    "review_mechanism__body__01:5": "承载式车身（单体壳）",
    "review_mechanism__body__01:6": "车架与车身一体的现代主流。像蛋壳一样靠面板与加强件整体承力，轻量高刚，地板可更低，碰撞吸能也好。发动机悬架直接装车身，早年舒适与隔音不如车架式，但悬架与悬置技术进步已大幅改善。",
    # brakes/01
    "review_mechanism__brakes__01:0": "制动将动能转为热以降低车速，也负责驻车。\n\n基本构成：驾驶员输入、液压传递、轮端制动装置；现多带助力与 ABS。\n\n踏板经液压回路连接轮端。帕斯卡原理使主缸压力经制动液传至卡钳或轮缸，高摩擦衬块压盘或鼓，动能变热。\n\n制动液非普通机油，须耐高温沸点，分多种规格。高速化使乘用车前轮由鼓式主流转向盘式：卡钳夹盘两侧。\n\n盘式随性能发展出通风盘改善散热；卡钳由浮动式进化到对向多活塞高性能型。",
    "review_mechanism__brakes__01:2": "盘式制动",
    "review_mechanism__brakes__01:3": "夹紧与车轮同转的金属圆盘两侧产生摩擦。部件多外露，通风散热好、不易过热。涉水时盘旋转可甩水，摩擦系数不易骤降。踏板微调制动力易，但无鼓式自增力，驻车保持力通常较弱。",
    "review_mechanism__brakes__01:5": "鼓式制动",
    "review_mechanism__brakes__01:6": "制动蹄压紧与轮同转的筒形鼓内表面。散热差、易过热，进水后恢复慢。但旋转时蹄被带入产生自增力，制动力大。乘用车多装于负荷较小的后轮；大型车后盘内亦常集成驻车鼓。",
    "review_mechanism__brakes__01:8": "● 摩擦热导致的制动故障",
    "review_mechanism__brakes__01:9": "热衰退（Fade）",
    "review_mechanism__brakes__01:10": "激烈使用导致过热，制动力急剧下降。衬块过热释气，气体介于摩擦面间似润滑剂，降低摩擦系数。",
    "review_mechanism__brakes__01:11": "气阻（Vapor Lock）",
    "review_mechanism__brakes__01:12": "过热使制动液沸腾，管路产生气泡。踩踏板时气泡被压缩，压力无法有效传递，严重时几乎无制动力。",
    # brakes/02
    "review_mechanism__brakes__02:0": "● 制动盘种类",
    "review_mechanism__brakes__02:1": "实心盘",
    "review_mechanism__brakes__02:2": "单块金属圆盘，最基础。散热不如通风盘，但成本低，多用于轻车前轮或四轮盘中的后轮。盘须耐热、散热好，铸铁为主流。",
    "review_mechanism__brakes__02:4": "通风盘",
    "review_mechanism__brakes__02:5": "两片盘贴合，中间散热筋通风。源于赛车，现乘用车广泛采用。比实心盘表面温度低，耐热衰退更好、片寿命更长；略厚稍重。",
    "review_mechanism__brakes__02:7": "● 进阶通风盘",
    "review_mechanism__brakes__02:8": "打孔盘",
    "review_mechanism__brakes__02:9": "通风盘摩擦面再打许多孔，提高散热与排气，亦称钻孔盘，高性能车常见。孔亦助排粉排水；开槽盘（刻沟）目的类似。",
    "review_mechanism__brakes__02:11": "螺旋筋通风盘",
    "review_mechanism__brakes__02:12": "两片盘间散热筋呈螺旋形，按气流分析优化，随轮旋转高效散热。用于高性能跑车与重型大功率轿车。",
    "review_mechanism__brakes__02:14": "● 卡钳种类",
    "review_mechanism__brakes__02:15": "浮动式",
    "review_mechanism__brakes__02:16": "单侧活塞推片压盘，卡钳滑动使对侧片贴合，自动调节左右接触，手感一致。体积小轻量，高温歪盘亦能工作；连续赛道使用可能衰减，日常足够。",
    "review_mechanism__brakes__02:18": "对向活塞式",
    "review_mechanism__brakes__02:19": "两侧活塞从两侧夹盘。体积重量大，常用铝制并须保证刚性。赛道有效，但盘侧亦须配套（散热、防歪），否则片贴合差。市售性能车常见4/6活塞大面片；轮毂缝隙中可见的大卡钳常是性能标志。",
    # suspensions/01
    "review_mechanism__suspensions__01:0": "悬架是车身与车轮之间吸收冲击、控制车轮运动的系统。",
    "review_mechanism__suspensions__01:2": "麦弗逊支柱式悬架示例",
    "review_mechanism__suspensions__01:3": "弹簧",
    "review_mechanism__suspensions__01:4": "弹簧吸收路面冲击并维持车高。螺旋弹簧最常用，板簧多用于卡车。弹簧刚度决定支撑力与舒适性平衡。",
    "review_mechanism__suspensions__01:6": "减振器",
    "review_mechanism__suspensions__01:7": "弹簧受压后会反复振荡，减振器抑制这一振荡，使轮胎尽快贴地，改善舒适与操控。",
    "review_mechanism__suspensions__01:9": "悬架臂",
    "review_mechanism__suspensions__01:10": "悬架臂约束车轮运动，连接车轮总成与车身，决定几何与运动轨迹。",
    "review_mechanism__suspensions__01:11": "悬架衬套",
    "review_mechanism__suspensions__01:12": "衬套是悬架关节处的弹性件，吸收振动与小幅运动，影响刚性与路感。",
    "review_mechanism__suspensions__01:13": "防倾杆",
    "review_mechanism__suspensions__01:14": "防倾杆（稳定杆）利用扭杆刚度，一侧悬架压缩时向另一侧传递力，抑制侧倾，改善弯道姿态。",
    # suspensions/02
    "review_mechanism__suspensions__02:0": "各类悬架基本功能相同——支撑车身、吸收冲击、控制车轮——但结构不同，特性各异。",
    "review_mechanism__suspensions__02:1": "非独立（刚性）车轴",
    "review_mechanism__suspensions__02:2": "左右轮由一根刚性车轴连接，一侧运动会影响另一侧。结构简单成本低，多用于卡车与部分越野车；弯道左右轮相互牵制，操控精度较低。",
    "review_mechanism__suspensions__02:4": "独立悬架",
    "review_mechanism__suspensions__02:5": "左右轮可独立上下运动，互少干扰，弯道接地与舒适性更好，现代乘用车主流。",
    "review_mechanism__suspensions__02:7": "● 独立悬架——多数运动车首选",
    "review_mechanism__suspensions__02:8": "麦弗逊支柱",
    "review_mechanism__suspensions__02:9": "弹簧、减振器与下控制臂组成的简单布局。成本低、占空间小，广泛用于前悬架。",
    "review_mechanism__suspensions__02:11": "双叉臂",
    "review_mechanism__suspensions__02:12": "上下控制臂支撑车轮，几何设计自由度高，运动性能好，跑车与高性能车常见。",
    "review_mechanism__suspensions__02:14": "多连杆",
    "review_mechanism__suspensions__02:15": "用3～5根连杆精细控制车轮运动，调校自由度最高，舒适与操控可兼顾，高端车常见。",
    # suspensions/03
    "review_mechanism__suspensions__03:0": "想象带万向轮的家具：从上方看，轮心相对转向轴有偏移。车轮定位即调节这些角度，影响直线稳定性与弯道行为。",
    "review_mechanism__suspensions__03:1": "前束角",
    "review_mechanism__suspensions__03:2": "俯视左右轮夹角。前端内收为前束内，外张为前束外。影响直线稳定与轮胎磨损。",
    "review_mechanism__suspensions__03:4": "主销后倾角",
    "review_mechanism__suspensions__03:5": "侧视转向轴相对垂直向后倾的角度。提供回正力矩，影响直线稳定与转向手感。",
    "review_mechanism__suspensions__03:7": "外倾角",
    "review_mechanism__suspensions__03:8": "后视车轮相对垂直的倾斜。弯道中影响轮胎接地与侧向力，运动车常略负外倾。",
    "review_mechanism__suspensions__03:10": "主销内倾角",
    "review_mechanism__suspensions__03:11": "前视转向轴向内倾的角度。与后倾共同产生回正力，影响转向轴心位置与转弯时车身抬升。",
    # tires/01
    "review_mechanism__tires__01:0": "轮胎特性大致分四类：承载、吸振、加减速与制动牵引、直线与弯道方向稳定。基本功能平衡后，再按用途调校。\n\n跑车偏好加速、制动、弯道中强牵引与稳定的高抓地配方，侧壁刚度高以限制变形，提高响应与弯速。\n\n高抓地胎亦有代价：极限后恢复突兀需技术；抓地高加重悬架与车身负荷，底盘未匹配会失衡；磨损快、舒适与噪声差。\n\n湿地抓地受花纹影响：沟槽排水但降低花纹块刚度，性能胎尤难平衡。\n\n车无法超越轮胎极限，须理解其性能以选对用途。",
    "review_mechanism__tires__01:2": "胎面配方",
    "review_mechanism__tires__01:3": "胎面橡胶接触路面。性能胎软、抓地高但磨损快；普通胎硬、寿命长、峰值抓地低。轮胎在特定温度窗工作，过热性能下降。",
    "review_mechanism__tires__01:5": "胎面花纹",
    "review_mechanism__tires__01:6": "接地部沟槽排列，排水随旋转排出，多方向性设计。沟槽降低块刚度，性能胎沟少而大；非对称花纹外侧重抓地、内侧重排水。",
    "review_mechanism__tires__01:8": "胎体刚性",
    "review_mechanism__tires__01:9": "胎体含帘布层、侧壁、胎圈，支撑胎面。力经胎体传至胎圈固定轮上。刚性高则加减速与弯道变形小、响应好，但舒适下降，须按用途平衡。",
    # wheels/01
    "review_mechanism__wheels__01:0": "铝轮毂不仅是造型，对性能影响显著：减轻非簧载质量可改善悬架贴地与响应。",
    "review_mechanism__wheels__01:2": "轮越轻，轮胎越能跟随路面，改善抓地与舒适。",
    "review_mechanism__wheels__01:3": "减重降低起步与加减速所需能量。",
    "review_mechanism__wheels__01:5": "● 轻量化轮毂种类",
    "review_mechanism__wheels__01:6": "单片式",
    "review_mechanism__wheels__01:7": "轮辋与轮盘一体成型，成本低，量产最常见。",
    "review_mechanism__wheels__01:9": "两片式",
    "review_mechanism__wheels__01:10": "轮盘与轮辋分别制造再结合，可换规格，改装与赛车常见。",
    "review_mechanism__wheels__01:12": "三片式",
    "review_mechanism__wheels__01:13": "内、外轮辋与轮盘三件组合，尺寸与宽度组合自由，高端改装与赛车用。",
    "review_mechanism__wheels__01:15": "● 制造方法",
    "review_mechanism__wheels__01:16": "铸造",
    "review_mechanism__wheels__01:17": "熔融铝浇入模具成型，成本低产量大，强度与重量居中。",
    "review_mechanism__wheels__01:18": "锻造",
    "review_mechanism__wheels__01:19": "铝坯高压锻打，晶粒流向优化，同强度更轻、更刚，高性能与赛车首选，成本较高。",
    # aerodynamics/01
    "review_mechanism__aerodynamics__01:0": "高速行驶时空气阻力影响极大，速度越高越像有一堵看不见的墙阻碍前进。\n\n约80 km/h起空气阻力不可忽视，之后与速度平方成正比：速度2倍阻力约4倍，3倍约9倍。轮胎滚动阻力亦存在，但发动机无法冲破空气墙时即达实际最高车速。赛车、跑车乃至节油车都须降阻。\n\n车高低、流线或楔形有利；表面无多余凸起（齐平面）也降阻。\n\n但低阻外形常似机翼，上部气流快于下部，产生升力、减小下压力，须与降阻权衡。横风亦影响直线稳定，空气动力学须统筹阻力、升力与横摆力矩。",
    "review_mechanism__aerodynamics__01:1": "迎风面积",
    "review_mechanism__aerodynamics__01:2": "正面投影轮廓。面积越大受风越多、阻力越大。跑车低矮亦是为减小迎风面积；厢式车与 MPV 先天不利。",
    "review_mechanism__aerodynamics__01:4": "Cd——空气阻力系数",
    "review_mechanism__aerodynamics__01:5": "表示气流绕物体流动的顺畅程度，为形状系数，与速度无关。实际阻力＝Cd×迎风面积。Cd高但面积小的跑车阻力可仍低，反之亦然。",
    "review_mechanism__aerodynamics__01:7": "Cl——升力系数",
    "review_mechanism__aerodynamics__01:8": "高速气流在垂直方向作用于车体的系数。正值为升力，负值为下压力。获得下压力常增阻力，须前后下压力平衡以稳态。",
    "review_mechanism__aerodynamics__01:10": "CYM——横摆力矩系数",
    "review_mechanism__aerodynamics__01:11": "风不总从前方来，侧风等会在垂直轴产生试图使车偏转的横摆力矩，妨碍直线性。CYM 小则抗侧风好；一般高重心、高大车身不利。",
}

def main() -> None:
    ch2 = json.loads(CH2_JSON.read_text(encoding="utf-8"))
    missing = []
    for page_key, page in ch2.items():
        for i, block in enumerate(page["blocks"]):
            if block["type"] == "img":
                continue
            key = f"{page_key}:{i}"
            if key not in ZH:
                missing.append(key)
    if missing:
        print(f"Missing {len(missing)} translations (showing first 20):")
        for k in missing[:20]:
            print(" ", k)
        raise SystemExit(1)
    OUT.write_text(json.dumps(ZH, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(ZH)} translations to {OUT}")

if __name__ == "__main__":
    main()
