import i1c1scH17YF7CTH from "../../assets/images/i1c1scH17YF7CTH.webp";
import i17XIkTcaxQqG8c from "../../assets/images/i17XIkTcaxQqG8c.webp";
const RideHeight = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>车身高度</h1>
        <h2>车辆设置 1</h2>
      </div>
      <div className="body">
        <h3 className="section-header">首先确定你的目标车身高度</h3>
        <p className="image"><img alt="" src={ i1c1scH17YF7CTH }/></p>
        <p>
通过调整车辆的各个部件，可以调整汽车的控制特性，使其更易于驾驶。这被称为调整汽车的设置或调校。用数学术语来说，车辆动力学代表了一个高维的同时微分方程，具有强烈的非线性倾向，极难进行解析求解。事实上，尤其是在汽车在其性能极限下行驶时，几乎不可能解析地确定汽车的动力学；这就是为什么赛车的调校工作如此困难。</p>
        <p>
本节介绍了由Gran Turismo系列的制作人山内一典描述的基本汽车调校程序，他在德国纽博格林赛道上有数百圈的比赛经验。如果你对汽车的设置有疑问，请阅读此内容，并根据赛道和比赛格式以及你自己的驾驶风格微调汽车的设置。</p>
        <p className="image"><img alt="" src={ i17XIkTcaxQqG8c }/></p>
        <p className="caption">图1-1 2016年纽博格林24小时耐力赛的场景。每辆车的车身高度都尽可能低，同时考虑到赛道某些部分的颠簸路面</p>
        <p>
首先要做的是设置目标车身高度。你可以通过观察F1和勒芒原型车来判断，基本上，车身高度越低越好。车身高度越低，重心越低，增加下压力同时减少阻力。这将提高赛道上的操控性能。</p>
        <p>
然而，这有其局限性。例如，路面上可能有颠簸会撞击汽车底部。汽车可能会跳跃或轮胎可能会撞到轮罩。悬挂臂的操作范围可能会超出其允许范围。由于所有这些原因，将车身高度设置得与地面接触是不现实的；车身高度必须适合汽车和赛道。在平坦的赛道上可以将车身高度设置得更低，而在颠簸的赛道上则需要确保一定的高度。未铺砌的土路需要将悬挂设置得更高，而在雨天，你不能将悬挂降低太多，以避免汽车底部水滑。考虑这些因素将有助于你确定适当的目标车身高度。</p>
      </div>
    </div>
  </>
);
export default RideHeight;
