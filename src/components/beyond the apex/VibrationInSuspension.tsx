import i1OojegqfGw3tW from "../../assets/images/i1OojegqfGw3tW.webp";
import i1uBlw5PgA0L2cc from "../../assets/images/i1uBlw5PgA0L2cc.webp";
import i1yh5Pio2Jztu from "../../assets/images/i1yh5Pio2Jztu.webp";

const VibrationInSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-8：悬架上产生的振动</h1>
        <h2>多自由度系统的振动</h2>
      </div>
      <div className="body">
        <p>
          此前为简化问题，用弹簧、重物、减震器各一组合而成的简单振动模型理解振动基础。但实际汽车是这些机械要素被多重组合而成的振动系统。
          <br /><br />
          因此，在真正做悬架调校这类振动控制之前，先把握具有多个振动要素的振动系统的基本特征。
        </p>

        <h3 className="section-header">■ 悬架的振动特性</h3>

        <p>
          汽车悬架机构各异，归根结底仍是由质量、弹簧与减震器组成的振动系统，可如图1-8-1 模型化。车身与车轮之间的弹簧与减震器代表悬架；车轮与路面之间的弹簧与减震器则代表轮胎的弹性与阻尼。
        </p>

        <p className="image"><img alt="" src={ i1OojegqfGw3tW } /></p>
        <p className="caption">图1-8-1：仅一轮的 1/4 车辆振动模型。轮胎本身也是具有弹簧与减震器特性的振动系统</p>

        <p>
          让该振动模型在各种频率下振动（图1-8-2）。接近静止的极低频率下，地面位移与车身位移大小相同，振幅比为 1。缓慢提高频率，振幅随之增大；到某一频率振幅达峰，发生簧上共振。再提高频率，振幅减小，但在某处再度放大——簧下共振使车身振幅再次放大。继续提高频率，振幅再度变小，最终趋近 0。
        </p>

        <p className="image"><img alt="" src={ i1uBlw5PgA0L2cc } /></p>
        <p className="caption">图1-8-2：逐渐提高频率时的变化。相对较低频率发生车身共振，更高频率发生车轮共振</p>

        <p>
          上例中共振发生了两次；共振可能发生的次数，等于振动系统能够运动的方向数。振动系统可运动的方向数称为自由度。本例中轮胎与弹簧各可在上下一方向运动，共有 2 个固有频率、2 种共振可能，故自由度为 2。
          <br /><br />
          第一次共振称为 1 次共振，第二次称为 2 次共振。一般机械可能发生无数次共振，但工程上重要的是低阶共振，高阶通常可忽略。也就是说，本例中簧上共振比簧下共振更重要。
          <br /><br />
          原因在于：同样能量的振动，通常低频振幅更大，这些成分支配系统整体现象，并决定大部分振动特性。
        </p>

        <p className="image"><img alt="" src={ i1yh5Pio2Jztu } /></p>
        <p className="caption">图1-8-3：四柱试验台试验场景。正在评估参加纽博格林 24 小时耐力赛的 GT-R 的悬架</p>
      </div>
    </div>
  </>
);

export default VibrationInSuspension;
