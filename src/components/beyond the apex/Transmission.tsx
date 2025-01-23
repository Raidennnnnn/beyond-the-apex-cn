import i15tyK6K8yzYF from "../../assets/images/i15tyK6K8yzYF.webp";
import i1iM8camJTd7Z7E from "../../assets/images/i1iM8camJTd7Z7E.webp";
const Transmission = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>变速器</h1>
        <h2>机械 6</h2>
      </div>
      <div className="body">
        <h3 className="section-header">齿轮组件的类型及其速度和功率的产生</h3>
        <p>
让我们看看齿轮的基本原理。当你将一个齿轮与一个更大的齿轮组合时，较大的齿轮将缓慢旋转，具有更强的力。如果你将一个齿轮与一个较小的齿轮组合，旋转速度会增加，但力会减小。</p>
        <p>
汽车的变速器基于这些原理。汽车在启动时需要最大的力（扭矩）。因此，在启动时，一个大齿轮与发动机结合（= 大速度减速）以产生大量扭矩并使汽车开始移动。</p>
        <p>
但虽然大齿轮增加了扭矩，但它旋转缓慢。因此，变速器内有多个齿轮，通过切换到逐渐较小的齿轮，从发动机中提取所需的速度和力。在汽车中，驱动轮之前还有一个最终齿轮，它具有另一个齿轮比，以进一步增加扭矩。</p>
        <p className="image"><img alt="" src={ i15tyK6K8yzYF }/></p>
        <h3 className="section-header">●自动变速器（AT）</h3>
        <p>
自动变速器使用扭矩转换器（液力离合器）将发动机动力与变速器分离，并根据车辆速度和发动机转速自动换挡。这是今天的主流自动变速器。平稳的换挡感觉是一个优点，但它在效率方面可能不如手动变速器。</p>
        <h3 className="section-header">●无级变速器（CVT）</h3>
        <p>
也称为单速变速器或无级变速器。与标准变速器使用齿轮不同，两个滑轮通过金属带连接；通过改变带行进的滑轮直径，齿轮比无缝变化。</p>
        <h3 className="section-header">●双离合变速器（DCT）</h3>
        <p>
通过使用两个离合器自动化手动变速器的操作。奇数档和偶数档在两个轴之间分配；通过使用离合器在它们之间瞬间切换，实现了超越手动换挡的自动换挡。</p>
        <p className="image"><img alt="" src={ i1iM8camJTd7Z7E }/></p>
        <p className="caption">图6-2 “最终齿轮”在驱动轮之前减少变速器输出的速度（右侧）</p>
      </div>
    </div>
  </>
);
export default Transmission;
