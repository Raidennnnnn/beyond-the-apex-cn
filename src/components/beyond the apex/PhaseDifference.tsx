import i1ZXUwqf4A9N2EE from "../../assets/images/i1ZXUwqf4A9N2EE.webp";
import i1PvElN7ftPwaz from "../../assets/images/i1PvElN7ftPwaz.webp";
import i16pruiYxfxYBz from "../../assets/images/i16pruiYxfxYBz.webp";

const PhaseDifference = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-6：相位差</h1>
        <h2>相位差是振动节奏的差异</h2>
      </div>
      <div className="body">
        <p>
          汽车越过路面起伏时，起伏经悬架被「缩小」后传至车身。这时车身振幅比路面起伏更缓和——也就是说，车身振幅被悬架缩小后才传到车身。
        </p>

        <p className="image"><img alt="" src={ i1ZXUwqf4A9N2EE } /></p>
        <p className="caption">图1-6-1：实际路面起伏，以及经悬架后的车身振幅。请关注二者关系。车身振幅被抑制到何种程度最重要，但车身对路面起伏的响应有多快同样重要</p>

        <p>
          关注「输入」——路面起伏——相对于「响应」——车身振幅——被抑制到什么程度，固然最为重要。但振动论不止于此。讨论振动时，「对输入响应有多快」同样非常关键。
        </p>

        <p className="image"><img alt="" src={ i1PvElN7ftPwaz } /></p>
        <p className="caption">图1-6-2：德国悬架厂商 KW 的七柱试验台（地下部分）</p>

        <h3 className="section-header">■ 振动节奏的差异</h3>

        <p>
          评价振动系统对输入响应有多快时，使用的概念是「相位差」。仍用弹簧与重物说明。
          <br /><br />
          以固有频率（共振频率）以外的频率强制激励弹簧与重物时，为什么手会感到阻力？此前说「固有频率以外的频率对该系统不自然，因此系统会抵抗」。也可说成：「手的振动节奏，与系统自然的振动节奏不同」。更具体地说，这种节奏差就是「施加振动的方向与重物惯性力方向之间的偏差」。这种运动节奏的差，就称为相位差。
          <br /><br />
          看图1-6-3：以非常缓慢的频率激励时，手的力方向与弹簧伸縮同向、同节奏振动，输入与响应无偏差，相位差为 0（图1-6-3 上）。
          <br /><br />
          把频率提得非常高时，手的激励力与重物惯性力方向相反，相位差为 180°（图1-6-3 下）。而以固有频率激励时，相位差为 90°（图1-6-3 中）。
        </p>

        <p className="image"><img alt="" src={ i16pruiYxfxYBz } /></p>
        <p className="caption">图1-6-3</p>
      </div>
    </div>
  </>
);

export default PhaseDifference;
