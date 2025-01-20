import i16tToJH from "../../assets/images/i16tToJH.jpg";
import i1yffPaaCOorrcc from "../../assets/images/i1yffPaaCOorrcc.jpg";
import i1UBjnYKdou55cE from "../../assets/images/i1UBjnYKdou55cE.jpg";
const TypesOfSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>悬挂类型</h1>
        <h2>机械 9</h2>
      </div>
      <div className="body">
        <h3 className="section-header">悬挂类型及其不同特性</h3>
        <p>
所有悬挂类型在功能上都是相同的：它们旨在保持汽车的行驶高度并在驾驶时吸收负载和冲击。然而，不同悬挂类型的性能和特性差异很大。以下是一些主要悬挂系统类型的示例。</p>
        <h3 className="section-header">●拖曳臂类型</h3>
        <p>
这是一种方法，其中水平穿过车身的底盘部件用作轴，安装车轮的臂从此处向后延伸。结构相对简单，可以使其重量相对较轻；然而，它的刚性较低，可能会影响操控性。</p>
        <p className="image"><img alt="" src={ i16tToJH }/></p>
        <p className="caption">拖曳臂类型</p>
        <h3 className="section-header">●麦弗逊支柱类型</h3>
        <p>
这是最常见的悬挂类型之一，广泛用于乘用车。它由一个支柱和一个下臂组成，支柱同时充当减震器和转向枢轴。结构简单，重量轻，但在极端驾驶条件下可能会影响操控性。</p>
        <p className="image"><img alt="" src={ i1yffPaaCOorrcc }/></p>
        <p className="caption">麦弗逊支柱类型</p>
        <h3 className="section-header">●双叉臂类型</h3>
        <p>
这是一种结构，其中汽车由上下两组臂悬挂。名称来源于悬挂顶部和底部的两个V形臂（形状像叉骨）。根据臂的形状和布局，这种格式在控制车身姿态方面具有良好的灵活性。</p>
        <p className="image"><img alt="" src={ i1yffPaaCOorrcc }/></p>
        <p className="caption">双叉臂类型</p>
        <h3 className="section-header">●多连杆类型</h3>
        <p>
这可以被视为双叉臂的高级版本。虽然双叉臂在顶部和底部有一个臂，但多连杆类型通过三到五个连杆设置车轴的位置。由于每个臂都是独立的，因此在定位上有很大的自由度，这使得更精确的设置成为可能。通过用多个臂支撑轮胎，还可以在悬挂运动期间精确控制车轮/轮胎的几何变化，以实现优越的路面接触性能。</p>
        <p className="image"><img alt="" src={ i1UBjnYKdou55cE }/></p>
        <p className="caption">多连杆类型</p>
      </div>
    </div>
  </>
);
export default TypesOfSuspension;
