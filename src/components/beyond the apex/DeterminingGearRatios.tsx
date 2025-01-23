import i12ZDsjILjQpo from "../../assets/images/i12ZDsjILjQpo.webp";
import i1QOa0za6nG1lhB from "../../assets/images/i1QOa0za6nG1lhB.webp";
import i147pswdYzk4B from "../../assets/images/i147pswdYzk4B.webp";
const DeterminingGearRatios = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>确定齿轮比</h1>
        <h2>车辆设置 8</h2>
      </div>
      <div className="body">
        <h3 className="section-header">为赛道找到最佳齿轮比</h3>
        <p>
从连续弯道的蜿蜒路段到长直道的赛道，汽车将比赛的阶段多种多样。改变传动系统的齿轮比将允许发动机特性以最佳方式匹配每个阶段。改变齿轮比涉及传动系统本身的齿轮比和最终齿轮的齿轮比。</p>
        <p>
例如，在连续低速到中速弯道的弯道中，出弯加速将比最高速度更重要。在这种情况下，你会将传动系统的齿轮比设置得更紧密，以便更容易将发动机转速保持在其功率带内。这种类型的齿轮比称为紧密比。</p>
        <p>
另一方面，如果是长直道将是主要因素的赛道，你可以为高档位（如第五和第六档）设置齿轮比，以便汽车达到更高的最高速度。这种齿轮设置称为宽比。</p>
        <div className="images">
          <dl className="image_list">
            <dd><img alt="" src={ i12ZDsjILjQpo }/></dd>
            <dd className="caption">图8-1：紧密比齿轮设置的示例。在连续弯道的赛道中，通过将齿轮设置得更紧密来专注于加速性能。</dd>
          </dl>
          <dl className="image_list">
            <dd><img alt="" src={ i1QOa0za6nG1lhB }/></dd>
            <dd className="caption">图8-2：宽比齿轮设置的示例，齿轮比设置得更远。在长直道的赛道上，通过设置更高的齿轮来获得更高的最高速度。</dd>
          </dl>
        </div>
        <p>
最终齿轮的齿轮比将改变传动系统的整体特性。即使是相同的传动系统，低最终齿轮将使汽车更注重加速（最高速度将降低），而高齿轮将提高最高速度（同时降低加速性能）。最初，只改变最终齿轮而不改变传动系统的齿轮比。检查这些设置的一个好指南是确定你的最后一个齿轮是否在直道末端将发动机转速提高到红线。</p>
        <p>
让我们以铃鹿赛道为例来看齿轮比的选择过程（图8-2）。首先，计算出最有效加速的扭矩，以便设置一档的齿轮比。接下来，设置最高档的齿轮比，以便在西直道的130R之前发动机达到红线。（如果汽车能够全油门通过130R，那么就在减速弯之前。）然后设置二档的齿轮比，以便在赛道上速度下降最多的减速弯和发夹弯中可以用二档通过。一旦你设置了二档和最高档的减速比，设置其余的齿轮，使它们之间的间隙为一个常数倍数（以几何级数；见图8-3）。然后尝试实际驾驶汽车进行微调。</p>
        <p className="image"><img alt="" src={ i147pswdYzk4B }/></p>
        <p className="caption">图8-3：铃鹿赛道的齿轮比设置示例。设置齿轮，以便最低速度的弯道可以用二档通过，而最高档设置为在直道末端发动机达到红线。</p>
      </div>
    </div>
  </>
);
export default DeterminingGearRatios;
