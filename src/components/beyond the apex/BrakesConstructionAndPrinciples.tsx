import i10rb8tdrkj0KSH from "../../assets/images/i10rb8tdrkj0KSH.webp";
import i1VbXznOMkQRe8E from "../../assets/images/i1VbXznOMkQRe8E.webp";
import i1faoE51MtQotW from "../../assets/images/i1faoE51MtQotW.webp";

const BrakesConstructionAndPrinciples = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Construction and Principles / 结构与原理</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            A car’s brakes convert kinetic energy into heat to slow the vehicle, and they also hold the car in place when parked.
          </p>
          <p lang="zh">
            制动将动能转为热以降低车速，也负责驻车。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            A brake system consists of a control input from the driver, a hydraulic system that transmits that input, and the braking mechanism at the wheels. Modern systems enhance this with power assist to amplify pedal effort and anti-lock braking systems (ABS) that help prevent wheel lockup.
          </p>
          <p lang="zh">
            基本构成：驾驶员输入、液压传递、轮端制动装置；现多带助力与 ABS。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The brake pedal is connected to the braking system through a hydraulic circuit. Based on Pascal’s principle, pressure applied at the master cylinder is transmitted through the fluid to the calipers or wheel cylinders. This pressure acts on the brake pads or shoes, which are made from high-friction materials. When pressed against the brake disc or drum, kinetic energy is converted into heat, slowing the car.
          </p>
          <p lang="zh">
            踏板经液压回路连接轮端。帕斯卡原理使主缸压力经制动液传至卡钳或轮缸，高摩擦衬块压盘或鼓，动能变热。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The fluid in this system is not conventional oil, but a specialized brake fluid. It must resist boiling under high temperatures, and different types are available with varying boiling points.
          </p>
          <p lang="zh">
            制动液非普通机油，须耐高温沸点，分多种规格。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As higher-speed driving became more common, most road cars moved from drum to disc brakes at the front. In a disc brake system, braking force is applied to both sides of the disc by pads held in a caliper.
          </p>
          <p lang="zh">
            高速化使乘用车前轮由鼓式主流转向盘式：卡钳夹盘两侧。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Disc brakes have evolved alongside other vehicle technologies, with ventilated discs improving cooling performance. Caliper design has also advanced, although floating calipers remain widely used, while opposed-piston calipers are typically found in high-performance applications.
          </p>
          <p lang="zh">
            盘式随性能发展出通风盘改善散热；卡钳由浮动式进化到对向多活塞高性能型。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1VbXznOMkQRe8E} />
        </p>

        <h3>
          Disc Brakes / 盘式制动
        </h3>

        <div className="bilingual">
          <p lang="en">
            Friction is applied to both sides of a rotating metal disc attached to the wheel. A key advantage is that most components are exposed to airflow, allowing effective ventilation and heat dissipation, which reduces the risk of overheating. Disc brakes also recover quickly in wet conditions, as water is shed from the disc as it rotates, minimizing any loss of friction. They offer more precise control through the brake pedal, but they lack the self-energizing effect of drum brakes, and their holding ability when parked is generally lower.
          </p>
          <p lang="zh">
            夹紧与车轮同转的金属圆盘两侧产生摩擦。部件多外露，通风散热好、不易过热。涉水时盘旋转可甩水，摩擦系数不易骤降。踏板微调制动力易，但无鼓式自增力，驻车保持力通常较弱。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i10rb8tdrkj0KSH} />
        </p>

        <h3>
          Drum Brakes / 鼓式制动
        </h3>

        <div className="bilingual">
          <p lang="en">
            Braking is achieved by pressing brake shoes against the inner surface of a cylindrical drum that rotates with the wheel. Heat dissipation is relatively poor, so drum brakes are more prone to overheating than disc brakes. If water enters the drum, friction recovery can also take time. However, as the drum rotates, it tends to pull the shoes into contact with the surface, increasing braking force through a self-energizing effect. In passenger cars, drum brakes are often used on the rear wheels, which handle less of the braking load. Many vehicles also use a drum mechanism inside the rear disc assembly as a dedicated parking brake.
          </p>
          <p lang="zh">
            制动蹄压紧与轮同转的筒形鼓内表面。散热差、易过热，进水后恢复慢。但旋转时蹄被带入产生自增力，制动力大。乘用车多装于负荷较小的后轮；大型车后盘内亦常集成驻车鼓。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1faoE51MtQotW} />
        </p>

        <h3 className="section-header">
          ● Braking Problems Caused by Excessive Heat / ● 摩擦热导致的制动故障
        </h3>

        <h3>
          Fade / 热衰退（Fade）
        </h3>

        <div className="bilingual">
          <p lang="en">
            Brake fade is a reduction in braking performance caused by overheating during repeated or sustained use. As temperatures rise, the brake pads or linings can release gases, which form a thin layer between the friction surfaces and reduce effectiveness.
          </p>
          <p lang="zh">
            激烈使用导致过热，制动力急剧下降。衬块过热释气，气体介于摩擦面间似润滑剂，降低摩擦系数。
          </p>
        </div>

        <h3>
          Vapor Lock / 气阻（Vapor Lock）
        </h3>

        <div className="bilingual">
          <p lang="en">
            This condition occurs when brake fluid absorbs heat from overheated components and begins to boil, forming vapor bubbles in the hydraulic system. When the brake pedal is applied, these bubbles compress, preventing pressure from being transmitted effectively through the fluid. In severe cases, braking performance can be greatly reduced or lost altogether.
          </p>
          <p lang="zh">
            过热使制动液沸腾，管路产生气泡。踩踏板时气泡被压缩，压力无法有效传递，严重时几乎无制动力。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default BrakesConstructionAndPrinciples;
