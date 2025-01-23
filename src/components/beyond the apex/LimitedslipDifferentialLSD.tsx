import i12lnDUpoUYD4 from "../../assets/images/i12lnDUpoUYD4.webp";
import i1oVGme3FMpRZz from "../../assets/images/i1oVGme3FMpRZz.webp";
import i1CiDXe833BJAG from "../../assets/images/i1CiDXe833BJAG.webp";
const LimitedslipDifferentialLSD = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>限滑差速器（LSD）</h1>
        <h2>车辆设置 7</h2>
      </div>
      <div className="body">
        <h3 className="section-header">通过初始扭矩和锁定比率改变行为</h3>
        <p className="image"><img alt="" src={ i12lnDUpoUYD4 }/></p>
        <p>
我们在第3章中解释了限滑差速器（LSD）的原理，但在这里我们将解释可以进行设置的机械LSD（多片离合器LSD）。机械LSD的优点是可以通过其多个离合器盘的接合力产生强大的限滑效果。在设置方面，你可以调整初始扭矩以及汽车加速和减速时的效果（锁定比率）。</p>
        <p className="image"><img alt="" src={ i1oVGme3FMpRZz }/></p>
        <p className="caption">图7-1 机械LSD，产生最强限滑效果，通常作为赛车的专业部件后期安装。</p>
        <p>
首先是初始扭矩设置。初始扭矩是决定LSD何时开始生效的扭矩值。值越高，汽车对油门输入的响应越快——LSD将更容易锁定。设置低时，运动将更温和。<br/><br/>当LSD的初始扭矩提高时，汽车传动系统衍生的操控特性被强调。在低水平G力的转弯中，无论是前轮驱动还是后轮驱动，汽车都倾向于转向不足，但两种传动系统在转入时都表现出强大的牵引性能。然而，在高水平G力的转弯中，无论是前轮驱动还是后轮驱动，汽车都表现出转向过度的倾向。</p>
        <p className="image"><img alt="" src={ i1CiDXe833BJAG }/></p>
        <p className="caption">图7-2 当初始扭矩增加时，旋转G力高或低时的转向特性是相反的。</p>
        <p>
减速侧设置将影响在不踩油门时LSD的工作方式。设置更强时，减速侧设置将在刹车进入弯道时表现出稳定的行为，允许驾驶员使用拖刹技术。然而，这也大大降低了转向特性（使其更难转向），这使其成为更适合专家驾驶员的设置。驾驶员将被迫使用专门的驾驶技术来缓解初始转向不足。</p>
        <p>
最好从大约50%的锁定比率开始调整，以查看感觉如何。</p>
      </div>
    </div>
  </>
);
export default LimitedslipDifferentialLSD;
