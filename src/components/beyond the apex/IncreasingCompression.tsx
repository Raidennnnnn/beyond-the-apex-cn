import i13mSW0TqruTHC from "../../assets/images/i13mSW0TqruTHC.webp";
import i1EFmatFzcui3RB from "../../assets/images/i1EFmatFzcui3RB.webp";
import i1TcbrDlMQP7Y8c from "../../assets/images/i1TcbrDlMQP7Y8c.webp";
import i1gpf004z5uXY from "../../assets/images/i1gpf004z5uXY.webp";
import i1oLXvOySLYXAcc from "../../assets/images/i1oLXvOySLYXAcc.webp";

const IncreasingCompression = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Increasing Compression / 提高压缩比</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The greater the compression of the air-fuel mixture, the more energy is released during combustion, increasing power and torque. Raising compression typically involves reducing combustion chamber volume, often through changes to the cylinder head or pistons. However, excessive compression increases the work required during the compression stroke and raises the risk of abnormal combustion, such as knock. High-compression engines require careful tuning, including adjustments to fuel delivery, ignition timing and component strength, along with the use of appropriately rated spark plugs.
          </p>
          <p lang="zh">
            混合气压缩越充分，燃烧释放能量越多，功率与扭矩越大。调校要点在燃烧室容积设计；压缩比过高会增加泵气损失并易引发异常燃烧，需配合燃油、推迟点火、换冷型火花塞，以及因爆震力增大而强化内部件。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1TcbrDlMQP7Y8c} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Increasing compression is often best combined with raising the engine’s usable rpm range. As combustion forces increase, the internal components must also be strengthened to handle the additional load.
          </p>
          <p lang="zh">
            高压缩通常与高转速化同步进行；燃烧力增大也需加强内部结构。
          </p>
        </div>

        <h3>
          Pistons / 活塞
        </h3>

        <div className="bilingual">
          <p lang="en">
            A common way to raise an engine’s compression ratio is to fit high-compression pistons. The raised crown reduces combustion chamber volume compared with a standard piston, increasing the compression ratio. However, higher compression raises mixture temperature and combustion pressure, making knock more likely. This requires supporting measures such as optimizing air-fuel mixture, ignition timing and combustion chamber efficiency.
          </p>
          <p lang="zh">
            提高压缩比最常见是换高压缩活塞：顶部凸起缩小燃烧室容积。高压缩使混合气与燃烧温度升高，易敲缸，需改善混合气流动等对策。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1gpf004z5uXY} />
        </p>

        <h3>
          Combustion Chamber / 燃烧室
        </h3>

        <div className="bilingual">
          <p lang="en">
            There are various combustion chamber designs, one of the most common being the pent-roof type, which offers good airflow and efficient combustion. Another important feature in high-compression engines is the use of squish, or quench, areas. These are regions where the piston comes very close to the cylinder head, promoting turbulence and improving combustion. Properly designed quench areas can help reduce the tendency for knock. However, modifying the chamber can create variations in volume between cylinders, so careful measurement is required to ensure consistency.
          </p>
          <p lang="zh">
            燃烧室可加工成利于进排气与点火的屋脊型等；高压缩时常做“挤压面”加工：削去高压区的挤压面（下图灰色部分）略降压缩比以抑制敲缸，但各缸容积会出现偏差，需精密测量。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EFmatFzcui3RB} />
        </p>

        <h3>
          Cylinder Head / 气缸盖
        </h3>

        <div className="bilingual">
          <p lang="en">
            The underside of the cylinder head can be machined in small increments to reduce combustion chamber volume, thereby increasing the compression ratio. This process can also correct warping caused by high temperatures, restoring proper sealing between the cylinder head and block and preventing compression loss.
          </p>
          <p lang="zh">
            研磨气缸盖下平面（缸盖平面研磨）常以 0.1 mm 为步进，缩小燃烧室容积以提高压缩比；也可修正高热工况下缸体与缸盖间的热变形（压缩泄漏原因之一）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13mSW0TqruTHC} />
        </p>

        <h3>
          Head Gasket / 缸垫
        </h3>

        <div className="bilingual">
          <p lang="en">
            The head gasket sits between the cylinder block and head, ensuring a proper seal and preventing compression loss. Reducing the thickness of the head gasket has a similar effect to machining the cylinder head, as it reduces combustion chamber volume and increases the compression ratio. Modern head gaskets are typically multi-layer steel designs, offering high strength and good resistance to heat and pressure. This helps maintain a reliable seal under higher compression and prevents leakage from the cylinders.
          </p>
          <p lang="zh">
            缸垫位于缸盖与缸体之间，保证密封、防止压缩泄漏。减薄缸垫与缸盖研磨类似，可缩小燃烧室、提高压缩比。近年也有高导热、高强度的不锈钢缸垫，兼顾防吹垫与压缩比优化。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1oLXvOySLYXAcc} />
        </p>
      </div>
    </div>
  </>
);

export default IncreasingCompression;
