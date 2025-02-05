import i1EIUQub2Oepuz from "../../assets/images/i1EIUQub2Oepuz.webp";
import i1BHNV3uDkbYj from "../../assets/images/i1BHNV3uDkbYj.webp";
import i1Df8Bm6RbbspSH from "../../assets/images/i1Df8Bm6RbbspSH.webp";
const Dampers = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>减震器</h1>
        <h2>车辆设置 5</h2>
      </div>
      <div className="body">
        <h3 className="section-header">减震器为弹簧和稳定杆增添风味</h3>
        <p className="image"><img alt="" src={ i1EIUQub2Oepuz }/></p>
        <p>
这可能会让你感到惊讶，但悬挂的基本设置在前一节中已经基本涵盖。那么减震器的作用是什么？它们用于为弹簧和稳定杆设定的特性增添风味。</p>
        <p>
减震器调整弹簧的伸展或压缩速度。如果你乘坐没有减震器的汽车，快速减速或转弯会使弹簧快速伸展和压缩，汽车的姿态会突然改变。减震器限制这些突然的运动，使这些姿态变化变得更慢。</p>
        <p className="image"><img alt="" src={ i1BHNV3uDkbYj }/></p>
        <p className="caption">图5-1 减震器</p>
        <p>
减震器设置通常与弹簧刚度相匹配。在量产车中，乘坐质量可以通过减震器的阻尼比（弹簧刚度与阻尼力之间的比率）大大改变。</p>
        <p>
另一方面，在赛车中，减震器的压缩和伸展是分别控制的。例如，如果你使前部的压缩侧更硬，汽车最终仍会达到前倾姿态，但你可以延迟施加在汽车前部的负载完全施加在前弹簧上的时间。</p>
        <p>
在滚动方向也是如此。如果减震器的压缩侧变硬，汽车达到完全滚动状态的时间将更长；如果你使其变软，它将更快达到这种状态。对于赛车，减震器以这种方式调整以优化俯仰和滚动的速度。</p>
        <p>
减震器发挥作用的另一个领域是乘坐质量。想象一下在路面上的颠簸上行驶：你希望悬挂能够平稳地压缩。但如果减震器的压缩侧很硬，它将阻碍弹簧的压缩，颠簸最终会抬起整个汽车。这就是为什么你需要软化减震器的压缩侧——以便弹簧能够平稳地压缩。</p>
        <p>
由于颠簸而压缩的弹簧包含能量。如果减震器的伸展侧变硬，可以逐渐释放这种压缩的弹簧能量。这用于调整乘坐舒适性和路面保持特性。在量产车中，乘坐质量更为重要——因此伸展侧和压缩侧之间的硬度差异可以达到四倍。</p>
        <p className="image"><img alt="" src={ i1Df8Bm6RbbspSH }/></p>
        <p className="caption">图5-2 通过使减震器的压缩侧更软和伸展侧更硬，可以改善乘坐舒适性和轮胎的路面保持特性</p>
      </div>
    </div>
  </>
);
export default Dampers;
