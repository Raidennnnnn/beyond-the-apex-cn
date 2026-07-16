import i17A7gD0xmOuScE from "../../assets/images/i17A7gD0xmOuScE.webp";
import i1ab0tbkKu0Te from "../../assets/images/i1ab0tbkKu0Te.webp";

const IncreasedGripRigidity = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Increased Grip/Rigidity / 提高抓地/刚性</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Grip and rigidity are key characteristics of high-performance tires.
            <br />
            <br />
            Slicks, which are designed specifically for racing, maximize both. Their rubber compounds provide high grip as they reach operating temperature, and the absence of grooves maintains a large, stable contact patch. Road tires for performance driving take a similar approach, using softer compounds and reduced tread depth. However, on wet surfaces, grooves are essential for clearing water; deeper and more numerous grooves improve wet performance. Choosing the right balance between dry grip and wet capability is therefore critical when selecting tires.
          </p>
          <p lang="zh">
            高性能胎的关键是抓地与刚性。赛车光头胎把两者推到极致：橡胶经摩擦热软化贴地，无花纹保证接触面刚性。公路高性能胎同样用软配方、浅沟大花纹块；但湿地排水与干地刚性往往矛盾。
          </p>
        </div>

        <h3>
          Width / 加宽
        </h3>

        <div className="bilingual">
          <p lang="en">
            Increasing tire width can increase the contact patch and improve grip. However, grip is not determined by contact area alone; it is also influenced by the load on the tire. Fitting very wide tires to a lightweight car may not provide a significant benefit if there is insufficient load to utilize them. Similarly, oversized tires on a low-power car can increase rolling resistance and reduce performance. For this reason, tire size should be selected to match the vehicle’s weight and output.
          </p>
          <p lang="zh">
            加宽可增大接地面积，但抓地也受载荷影响；轻车装极宽胎可能载荷不足，重胎反而吃动力。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i17A7gD0xmOuScE} />
        </p>

        <h3>
          Low-Profile / 低扁平（英寸升级）
        </h3>

        <div className="bilingual">
          <p lang="en">
            The profile, or aspect ratio, of a tire describes its sidewall height relative to its width. Using lower-profile tires allows for a larger wheel while maintaining a similar overall diameter, and does not necessarily require an increase in width. A key advantage of low-profile tires is reduced sidewall flex during cornering and braking, which improves steering response and handling. However, larger wheels can increase unsprung weight if taken too far, which may affect ride and handling. In performance applications, larger wheels and low-profile tires are often used to provide clearance for bigger, more effective brakes.
          </p>
          <p lang="zh">
            通过降低扁平率在不改外径下升级轮圈；侧壁变薄，弯中/制动时胎体变形减小，响应与操控提升，但极端升级会损舒适与耐久。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ab0tbkKu0Te} />
        </p>

        <h3>
          Compound / 配方
        </h3>

        <div className="bilingual">
          <p lang="en">
            The rubber used in the part of the tire that contacts the road is known as the compound, and it has a major influence on grip. High-performance tires use softer compounds that provide better adhesion at their operating temperature. Racing tires can become very soft when heated, increasing their ability to grip the surface. However, softer compounds wear more quickly, while harder compounds offer greater durability. It is important to understand the characteristics of the compound when selecting a tire. Drivers should also be aware that rubber hardens over time, and tires will gradually lose grip as they age, particularly softer compounds.
          </p>
          <p lang="zh">
            接触面橡胶决定绝对抓地；软配方贴地好、磨损快，硬配方相反。赛车胎靠摩擦热产生粘性抓地。
          </p>
        </div>

        <h3>
          Tread Pattern / 花纹沟
        </h3>

        <div className="bilingual">
          <p lang="en">
            The grooves cut into the surface of a tire form the tread pattern, which helps maintain grip in wet conditions by channeling water away from the contact patch. In dry conditions, however, these grooves reduce tread rigidity and can allow more movement under heavy loads during cornering, braking and acceleration. For this reason, racing slicks have no grooves, while high-performance road tires use minimal, shallow tread patterns to maintain stiffness while still providing some wet capability.
          </p>
          <p lang="zh">
            沟槽帮助湿地排水；干地则可能在重负荷下造成接地扭曲等不良，光头胎即无沟。半光头用于赛道日等折中场合。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default IncreasedGripRigidity;
