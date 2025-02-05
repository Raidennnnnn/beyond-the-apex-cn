import i1tP5nHqKvTGNb from "../../assets/images/i1tP5nHqKvTGNb.webp";
import i1uQ4u1Ftawc2cc from "../../assets/images/i1uQ4u1Ftawc2cc.webp";
import i11obTREqU4xYz from "../../assets/images/i11obTREqU4xYz.webp";

const AntiRollBars2 = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>防倾杆 2</h1>
        <h2>车辆设置 4</h2>
      </div>
      <div className="body">
        <h3 className="section-header">轮胎抓地力与负载增加不成正比</h3>
        <p>
          在上一节中，我们解释了即使前后滚动刚度不同，汽车是一个刚体，因此滚动角将相同。结果是，滚动刚度更大的一侧将承受比较弱的一侧更多的滚动力。</p>
        <p className="image"><img alt="" src={ i1tP5nHqKvTGNb }/></p>
        <p>
          当前后滚动刚度以这种方式不同，转弯时的负载移动不会在前后均匀发生，负载将集中在滚动刚度更大的一侧。在这种情况下，通过改变前后滚动刚度，可以改变转弯时外侧车轮的负载移动量。</p>
        <p>
          因此，通过改变前后滚动刚度，可以在转弯时改变前后负载分布。为什么这会导致转向特性的变化？如果轮胎产生的转弯力（抓地力）与轮胎上的负载成比例变化，并且与前后负载比的变化成比例变化，转向平衡就不会改变——但事实并非如此。</p>
        <p>
          这是因为轮胎产生的抓地力基本上会随着负载的增加而增加，但这种抓地力的增加并不完全与负载的增加成正比。</p>
        <p>
          图4-1表示与负载相关的转弯力产生量。从这个图表中可以看出，轮胎的基本特性是负载越高，转弯力的量就越低。因此，即使你在轮胎上施加两倍的负载，它也不会产生两倍的转弯力。</p>
        <p className="image"><img alt="" src={ i1uQ4u1Ftawc2cc }/></p>
        <p className="caption">图4-1 这显示了轮胎负载与转弯力之间的关系。负载与转弯力不成比例，因此负载加倍并不意味着你将获得双倍的转弯力</p>
        <p>
          如图4-2所示，如果你提高前后滚动刚度分布，转弯时的负载移动将在滚动刚度更高的一侧变得更大，但转弯力不会与负载移动量成比例增加——因此滚动刚度更大的一侧的相对转弯力将减少。这就是调整防倾杆时改变转向特性的原因，防倾杆只影响滚动刚度。</p>
        <p className="image"><img alt="" src={ i11obTREqU4xYz }/></p>
        <p className="caption">图4-2 这里我们比较了大负载移动与小负载移动。在负载移动较小的汽车中，内侧车轮A和外侧车轮B的总和的一半是转弯力F1；而在负载移动较大的汽车中，A和B的总和的一半是转弯力F2。因此你可以看到负载移动较小的汽车具有更高的总转弯力</p>
        <p>
与其他组件的调整相比，防倾杆的调整相对容易，因此通常在赛道上用于快速调整转向特性。一般来说，具有轻微转向不足特性的汽车更容易驾驶。然而，当你为漂移设置汽车时，你可能希望将后部加强到比前部更强，以故意制造转向过度的汽车。</p>
      </div>
    </div>
  </>
);
export default AntiRollBars2;
