import i1RmR4R8cwux0Ec from "../../assets/images/i1RmR4R8cwux0Ec.webp";
import i1Yht9Z5JIwWvG from "../../assets/images/i1Yht9Z5JIwWvG.webp";
import i1FGFwDxJ4w277c from "../../assets/images/i1FGFwDxJ4w277c.webp";

const EffectOfDampingForce = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-5：阻尼力的作用</h1>
        <h2>阻尼力会改变振动形态</h2>
      </div>
      <div className="body">
        <p>
          此前以重物与弹簧组成的振动系统为例讨论振动，并看到若以固有频率（共振频率）强制激励，就会出现共振问题。回避共振的方法有多种，其中最常见的是在振动系统中加入减震器。减震器是把动能转换为热能并耗散的装置。不过，减震器的阻尼力也会大幅改变振动形态。这里就详细看看阻尼力差异对振动现象的影响。
        </p>

        <h3 className="section-header">■ 不同阻尼比下的自由振动</h3>

        <p>
          前面说过振动由质量惯性与弹簧弹性产生；若在振动系统中加入减震器，振动会被衰减，最终停止。此时，阻尼力大小不同，衰减形态也不同。用来表示“相对于质量与弹簧弹性效果，阻尼力有多强”的指标，就是阻尼比。
        </p>

        <p className="image"><img alt="" src={ i1RmR4R8cwux0Ec } /></p>
        <p className="caption">图1-5-1：阻尼振动的例子</p>

        <p>
          阻尼比 ≥ 1 时，阻尼力强于质量与弹簧，系统运动以非振动方式收敛，称为过阻尼：振幅随时间减小并渐近于 0，呈现无周期运动。阻尼比 &lt; 1 时，质量与弹簧效果相对更强，振幅随时间振荡式减小、周期变长，称为欠阻尼。阻尼比 = 1 时处于振动与否的临界状态，称为临界阻尼。顺带一提，阻尼比 = 0 时不产生阻尼力，等同于没有减震器，振动不会衰减。
        </p>

        <p className="image"><img alt="" src={ i1Yht9Z5JIwWvG } /></p>
        <p className="caption">图1-5-2：减震器阻尼力会显著改变舒适性与接地性；在悬架调校中，阻尼比是重要指标之一。一般认为乘用车约 0.1～0.3，跑车约 0.5，赛车约 0.7（仅为典型例子，实际车辆未必如此调校）</p>

        <p>
          为避免振动机械或结构的振动传到基础/地面，或反过来避免基础振动传到机械，常用橡胶、轮胎、弹簧、减震器等支承物体。一般会像图1-5-3那样把含支承的振动系统模型化，分析机械与基础间振动如何传递。例如第2节将详述，悬架也可模型化为弹簧、减震器与质量的组合，并分析其振动特性。
        </p>

        <p className="image"><img alt="" src={ i1FGFwDxJ4w277c } /></p>
        <p className="caption">图1-5-3：基础振动的模型</p>
      </div>
    </div>
  </>
);

export default EffectOfDampingForce;
