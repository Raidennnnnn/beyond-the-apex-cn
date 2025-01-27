import i1nZoh51vmd7JSB from "../../assets/images/i1nZoh51vmd7JSB.webp";
import i1WUslKHVijgO from "../../assets/images/i1WUslKHVijgO.webp";
import i1yh8ClOM1j9XuB from "../../assets/images/i1yh8ClOM1j9XuB.webp";
import i1FPPONei33UW from "../../assets/images/i1FPPONei33UW.webp";
const Exposure = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>曝光</h1>
        <h2>拍摄汽车 6</h2>
      </div>
      <div className="body">
        <h3 className="section-header">过度曝光对深色汽车有效，欠曝光对浅色汽车有效</h3>
        <p>
照片的“曝光”是指照射到胶片或图像传感器上的光量。这可以通过调整快门速度和光圈来改变。欠曝光和过度曝光是摄影中常用的术语，分别指允许太少的光线照射到胶片上（使图像变暗）或允许太多的光线照射到胶片上（使图像变亮）。</p>
        <p className="image"><img alt="" src={ i1nZoh51vmd7JSB }/></p>
        <p>
拍摄照片时，你的初始目标应该是找到“正确的曝光”。换句话说，你应该确保你的主体既不过亮也不过暗。然而，这并不意味着一旦找到正确的曝光，你就必须坚持下去。故意过度曝光或欠曝光主体可以打开全新的可能性世界。</p>
        <p>
例如，假设你正在拍摄一辆侧面有一条非常漂亮的高光线的汽车。如果你降低曝光，使图像变暗，高光线将更加突出，成为整张照片的主题中心。</p>
        <p>
“Scapes”功能是学习如何控制曝光的一个很好的工具。因为它具有非常大的亮度范围，从非常暗到非常亮，你可以看到不同程度的曝光如何改变你的构图。掌握这项技术有很多好处。如果你从对深色汽车进行过度曝光（使图像变亮）和对浅色汽车进行欠曝光（使图像变暗）开始实验，你很快就会自己理解这些效果。</p>
        <p>
谈到曝光总让我想起1987年在巴西的F1大奖赛。这是一个名叫中岛悟的日本车手的首场比赛，我去了当时被称为Jacarepaguá赛道，拍摄他的首次比赛。在比赛开始前，天气晴朗，非常明亮。然而，我的测光表似乎并没有反映这一点。这有点令人担忧，但我还是决定根据测光表的读数拍摄照片。结果照片有点过度曝光。我终于意识到，在南半球，即使光线在人眼看来非常明亮，测光表上也不会显示出来。这仍然是我一个痛苦的记忆。</p>
        <div className="images">
          <dl className="image_list">
            <dd><img alt="" src={ i1WUslKHVijgO }/></dd>
            <dd className="caption">我更改为三阶段曝光，并比较了白色车身和黑色车身的反射。</dd>
          </dl>
          <dl className="image_list">
            <dd><img alt="" src={ i1yh8ClOM1j9XuB }/></dd>
            <dd className="caption">通常认为过度曝光有助于表现黑色车身的质感。</dd>
          </dl>
          <dl className="image_list">
            <dd><img alt="" src={ i1FPPONei33UW }/></dd>
            <dd className="caption">对于白色车身，即使图像欠曝光，汽车的存在感也不会减弱。</dd>
          </dl>
        </div>
      </div>
    </div>
  </>
);
export default Exposure;
