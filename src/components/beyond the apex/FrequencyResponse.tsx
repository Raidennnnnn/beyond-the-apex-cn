import i190ba9ypQPN0SB from "../../assets/images/i190ba9ypQPN0SB.webp";
import i1GtJC1fZ13n4b from "../../assets/images/i1GtJC1fZ13n4b.webp";
import i1HqXPrzbTtXXcc from "../../assets/images/i1HqXPrzbTtXXcc.webp";

const FrequencyResponse = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-7：频率响应</h1>
        <h2>通向悬架与车辆运动分析</h2>
      </div>
      <div className="body">
        <h3 className="section-header">■ 频率响应与波特图</h3>

        <p>
          此前分别考察了激励频率如何改变振幅与相位差。但往往不分开分析，而是同时观察，才能更深入了解振动系统的特性。
          <br /><br />
          因此这里同时看：激励频率变化时，系统振幅与相位差如何变化。把相对激励频率（激励振动频率）的振幅、相位差等响应，称为频率响应。
          <br /><br />
          汽车振动分析中常做频率响应分析，并频繁使用称为波特图（Bode 图）的曲线。图1-7-1 是波特图示例。上方称为增益图，表示相对激励（输入）的增益。增益是响应大小与输入大小之比：大于 1 表示响应大于输入，小于 1 表示响应小于输入。
          <br /><br />
          下方称为相位图，表示响应对输入的相位差，即响应相对输入偏移了多少。相位图中相位差负得越大，响应对输入的滞后越大。
        </p>

        <p className="image"><img alt="" src={ i190ba9ypQPN0SB } /></p>
        <p className="caption">图1-7-1：由弹簧、减震器、重物组成的振动系统的频率响应波特图</p>

        <h3 className="section-header">■ 用波特图把握阻尼振动</h3>

        <p>
          以弹簧、重物与减震器组成的振动系统（图1-7-2）为例，用图1-7-1 的波特图看其振动特性。本次设减震器为欠阻尼，即阻尼比 ≤ 1。
          <br /><br />
          从静止开始逐渐提高激励频率。频率极低时增益为 1，即激励振幅与响应振幅无差别。继续提高频率，增益变大，响应振幅相对输入增大。到某一频率时增益达到峰值——这就是共振，该频率即共振频率。再提高频率，增益变小并趋近 0，即激励频率很高时，响应振幅趋近 0。
          <br /><br />
          另一方面，频率极低时激励与弹簧同节奏同向运动，相位差为 0；在固有频率处为 －90°；频率极高时为 －180°。
        </p>

        <p className="image"><img alt="" src={ i1GtJC1fZ13n4b } /></p>
        <p className="caption">图1-7-2：弹簧、减震器、重物组成的振动系统模型。与弹簧并联的减震器，可防止共振时振幅无限增大</p>

        <p className="image"><img alt="" src={ i1HqXPrzbTtXXcc } /></p>
      </div>
    </div>
  </>
);

export default FrequencyResponse;
