import i1Xgb63dLODENEc from "../../assets/images/i1Xgb63dLODENEc.jpg";
import i1O5ZlgNGqRlW from "../../assets/images/i1O5ZlgNGqRlW.jpg";
import i1a2xKOdbbZqpuB from "../../assets/images/i1a2xKOdbbZqpuB.jpg";
import i1XwhHNfioZvI from "../../assets/images/i1XwhHNfioZvI.jpg";

const Springs = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>弹簧</h1>
        <h2>车辆设置 2</h2>
      </div>
      <div className="body">
        <h3 className="section-header">弹簧选择</h3>
        <p className="image"><img alt="" src={ i1Xgb63dLODENEc }/></p>
        <p>
一旦你确定了车身高度，就要注意<b>弹簧刚度</b>（弹簧硬度）。这里的重点不是单个弹簧的弹簧刚度，而是由弹簧刚度和<b>运动（或杠杆）比</b>决定的"<b>轮率</b>"。</p>
        <p className="image"><img alt="" src={ i1O5ZlgNGqRlW }/></p>
        <p className="caption">图2-1 弹簧</p>
        <p>
          <b>运动比</b>是从车身支撑点到车轮中心的距离与从车身支撑到弹簧连接点的距离的比率。例如，在图2-3中，右侧的麦弗逊支柱类型将弹簧直接与轮胎连接。在这个例子中，从车身支撑点到车轮中心的距离与从车身支撑到弹簧连接点的距离相等，使运动比为1。相比之下，对于左侧的双叉臂悬挂，弹簧连接点位于下臂的中心。因此，这种设置的运动比为0.5。</p>
        <p className="image"><img alt="" src={ i1a2xKOdbbZqpuB }/></p>
        <p className="caption">图2-2 这里是双叉臂和麦弗逊支柱悬挂格式。注意弹簧支撑位置的差异</p>
        <p>
          <b>轮率</b>是指在车轮中心工作的弹簧的有效刚度。例如，对于图2-2右侧的麦弗逊支柱悬挂，如果从车身支撑点到车轮中心的距离与从车身支撑到弹簧连接位置的距离相同（使运动比为1），即使考虑到臂的杠杆比，车轮中心的弹簧刚度也将与弹簧本身的刚度相同。</p>
        <p>
但在图中左侧的双叉臂悬挂中，弹簧连接位置位于下臂的中点。因此，在车轮中心工作的弹簧刚度将远小于弹簧本身的实际刚度。重要的不是弹簧刚度，而是轮率。这是理解弹簧设置的第一步。</p>
        <p>
接下来，你需要确定轮率，以便由轮率与弹簧支撑的质量之间的关系决定的自然频率在前后轮之间相等。</p>
        <p>
最后，忘记传统的认为悬挂硬度仅与弹簧刚度有关的思维。以自然频率的角度考虑硬和软，选择合适的弹簧使前后自然频率相等。成功做到这一点将防止你的汽车因路面起伏或骑上路缘石而导致的不自然俯仰运动引起的行为变化。这将使你在悬挂设置的起跑线上。</p>
        <p className="image"><img alt="" src={ i1XwhHNfioZvI }/></p>
        <p className="caption">图2-3 使前后轮的自然频率匹配将使以后更容易调整防倾杆/稳定杆</p>
        <p>
提示！什么是自然频率<br/>不涉及方程，自然频率可以被认为是轮率相对于弹簧重量（车身质量）的大小。例如，如果前自然频率为1.0Hz，后自然频率为1.1Hz，即使前轮率较大，当你将悬挂视为一个振荡系统时，前悬挂将被视为比后悬挂更软。</p>
      </div>
    </div>

  </>
);

export default Springs;
  