import i1tHERFfXLR0rb from "../../assets/images/i1tHERFfXLR0rb.webp";
import i11PlNEwfIbXRhH from "../../assets/images/i11PlNEwfIbXRhH.webp";
import i15H6tpyCeFoC from "../../assets/images/i15H6tpyCeFoC.webp";

const TheMechanismOfVibration = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-3：振动的机制</h1>
        <h2>振动源于物体的质量与弹性</h2>
      </div>
      <div className="body">
        <p>
          汽车的发动机、悬架、车身等都会产生振动。第2节会详细说明，车辆运动本身也可以作为振动现象来解释。那么振动究竟是什么？振动的机制又是怎样的？在深入讨论汽车运动之前，先把这些问题弄清楚。
        </p>

        <h3 className="section-header">■ 从力的角度看振动</h3>

        <p>
          为简化问题，用重物与弹簧组成的振动系统（像这样能产生一个振动的对象合称为振动系统）来思考（图1-3-1）。用手拉起重物、拉伸弹簧时，会出现抵抗拉力的弹性力（0）。放开手后，弹簧靠自身弹性力把重物拉回，并试图恢复原长（1～2）。即便弹簧回到原长、弹性力变为 0，重物仍因惯性继续运动，于是把弹簧压缩（3）。被压缩的弹簧再次发挥弹性力，抵抗压缩并试图恢复原长（4）。结果重物减速，最终停下（5）。但处于压缩状态的弹簧又会发挥弹性力、试图恢复原长（6）。再次回到原长时，重物又因惯性继续运动（7），结果再次把弹簧拉长，于是 1～9 的过程再次重复。这就是从力的角度看的振动。也就是说，振动现象源于物体的惯性与弹性力。
        </p>

        <p className="image"><img alt="" src={ i1tHERFfXLR0rb } /></p>
        <p className="caption">图1-3-1：从力的角度看振动，弹簧弹性力与重物惯性力始终平衡。注意各阶段弹簧上下方向箭头长度相等</p>

        <h3 className="section-header">■ 从能量的角度看振动</h3>

        <p>
          振动也可以用前面学到的能量守恒定律来考察。从能量角度看，振动就是重物因伸缩产生的动能与弹簧弹性势能之间的往来交换。
          <br /><br />
          弹簧弹性势能在位移最大（拉到最开或压到最短）时的①、⑤、⑨处最大；重物动能则在速度最大时的③、⑦处最大。
        </p>

        <p className="image"><img alt="" src={ i11PlNEwfIbXRhH } /></p>
        <p className="caption">图1-3-2：从能量角度看，振动是弹簧弹性势能与重物动能的交换</p>

        <p className="image"><img alt="" src={ i15H6tpyCeFoC } /></p>
        <p className="caption">图1-3-3：与车身相关的振动中，最容易理解的是经悬架传来的路面输入</p>
      </div>
    </div>
  </>
);

export default TheMechanismOfVibration;
