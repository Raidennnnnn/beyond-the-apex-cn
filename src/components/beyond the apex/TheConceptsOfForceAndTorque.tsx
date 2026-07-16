import i1QBv4PtsGeGNb from "../../assets/images/i1QBv4PtsGeGNb.webp";
import i1oAx5mRwrCELEc from "../../assets/images/i1oAx5mRwrCELEc.webp";
import i1ICYWgMIbJfsuB from "../../assets/images/i1ICYWgMIbJfsuB.webp";
import i1eHrk2MZMRpFz from "../../assets/images/i1eHrk2MZMRpFz.webp";

const TheConceptsOfForceAndTorque = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-1：力与力矩的概念</h1>
        <h2>两者的定义与区别</h2>
      </div>
      <div className="body">
        <p>
          行驶中的汽车会受到各种各样的力和力矩作用。理解这些作用在车上的力与力矩，是理解汽车的第一步。因此，我们就从力与力矩的概念开始说明。
        </p>

        <h3 className="section-header">■ 力的定义</h3>

        <p>
          轮胎、悬架、发动机……汽车行驶时，这些部件上会产生各种各样的力。这些力来自不同现象，直观上可能会觉得“产生的力种类各不相同”。但在物理学中，这些力都可以用被称作运动方程的简洁公式 F＝ma（力＝质量×加速度）来表达，本质上并无区别。
          <br /><br />
          运动方程 F＝ma 的含义是：“力就是使质量加速或减速的作用”。也就是说，力是改变物体速度大小或运动方向的作用。反过来，只要物体在加速或减速，就一定有力在作用。
          <br /><br />
          例如，轮胎与路面之间产生的摩擦力，会改变具有质量的汽车的运动方向或速度；减震器的阻尼力，则有减小车身或轮胎振动速度的效果。
        </p>

        <p className="image"><img alt="" src={ i1QBv4PtsGeGNb } /></p>
        <p className="caption">图1-1-1：作用在车上的各种力形式不同，但在物理本质上没有区别</p>

        <p className="image"><img alt="" src={ i1oAx5mRwrCELEc } /></p>
        <p className="caption">图1-1-2：力是改变运动速度或方向的作用</p>

        <p>
          汽车上产生的力都可以用这个式子表示。
          <b><br />F=ma（力=质量×加速度）<br /></b>
          力就是使质量加速或减速的作用。
        </p>

        <h3 className="section-header">■ 力矩的定义</h3>

        <p>
          行驶中转动方向盘时，轮胎会在相对前进方向垂直的方向上产生力，从而使车身朝向改变。由轮胎产生的力引发了车身的横摆运动。像这样，对具有一定尺寸的物体产生旋转运动的作用，就称为力矩。力矩是按到旋转轴的距离给力加权后的量，数学上可表示为 M＝L×F（力矩＝到旋转轴的距离×力）。
          <br /><br />
          实际考虑汽车过弯时作用的力矩。若把车辆重心设为旋转轴，则前轮产生的力矩大小为“重心到前轮的距离 × 前轮产生的横向力”。过弯时后轮当然也会产生“重心到后轮的距离 × 后轮产生的横向力”大小的力矩，并以与前轮力矩相反的方向试图转动车辆。
        </p>

        <p className="image"><img alt="" src={ i1ICYWgMIbJfsuB } /></p>
        <p className="caption">图1-1-3：前后轮力矩与车辆旋转运动的关系。当前轮力矩大于后轮力矩时，汽车才能开始过弯</p>

        <p>
          对具有尺寸的物体产生旋转运动的作用称为力矩<br />
          <b>M=L×F（力矩=到旋转轴的距离×力）</b>
        </p>

        <p>
          放到实际过弯中看：开始打方向时，前轮力矩更大，转弯开始；在弯心削尖点附近，前后轮力矩大致相等；再往前、开始回正方向盘时，后轮力矩更大，转弯结束。
        </p>

        <p className="image"><img alt="" src={ i1eHrk2MZMRpFz } /></p>
        <p className="caption">图1-1-4</p>

        <p>
          图1-1-4 表示日产 GT-R NISMO GT3（左）与三角洲翼（DeltaWing，右）前后轮产生的力。这里仍把旋转轴设在重心。由于重心到前后轮的距离不同，要使前后轮产生的力矩平衡，前后轮所需产生的力大小也就不同。因此重心极度偏后的三角洲翼，前后轮胎所需抓地力截然不同；实际上其前轮使用的是宽度仅约 10 cm 的特殊轮胎。相比之下，GT-R NISMO GT3 的重心靠近车身中心，前后轮胎所需产生的力也大致相当。
        </p>
      </div>
    </div>
  </>
);

export default TheConceptsOfForceAndTorque;
