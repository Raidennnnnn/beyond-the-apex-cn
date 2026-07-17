import i1EYd8bCAKtON from "../../assets/images/i1EYd8bCAKtON.webp";
import i1GkJdRoNg13rb from "../../assets/images/i1GkJdRoNg13rb.webp";
import i1H1V4Qp2mfp0EE from "../../assets/images/i1H1V4Qp2mfp0EE.webp";
import i1iotopPPMdWKcE from "../../assets/images/i1iotopPPMdWKcE.webp";
import i1nMt233hSG6H from "../../assets/images/i1nMt233hSG6H.webp";

const TypesOfSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Types of Suspension / 悬架类型</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            While all suspension systems serve the same basic functions—supporting the vehicle and absorbing bumps and load changes—each type has its own characteristics. These differences affect performance in areas such as cornering, controllability and ride comfort.
          </p>
          <p lang="zh">
            保持车高、承受行驶负荷与冲击等基本功能相同，但类型不同，性能与特性各异，从而决定过弯等行驶性能、关乎安全的操控性能，以及乘坐舒适性。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Suspension design continues to evolve, but complexity does not always mean better performance. The need to respond quickly to road irregularities and maintain consistent tire contact has led to increasingly sophisticated solutions.
          </p>
          <p lang="zh">
            悬架日新月异，复杂未必等于高性能；为实现「瞬间跟随路面起伏、使轮胎始终正确接地」这一理想，各种手法仍在不断探索。
          </p>
        </div>

        <h3>
          Rigid Axle / 非独立（刚性）车轴
        </h3>

        <div className="bilingual">
          <p lang="en">
            In a rigid axle suspension, the left and right wheels are connected by a single axle, so movement on one side affects the other, which can reduce tire contact with the road. The axle and housing are heavy, increasing unsprung mass. However, because it is simple, strong and inexpensive to produce, rigid axle suspension is often used for the rear suspension of rear-wheel-drive vehicles.
          </p>
          <p lang="zh">
            左右轮胎由车轴相连，一侧运动会传到对侧，接地性易受损；车轴与壳体本身较重，簧下质量也不利。但成本低、强度高，廉价后驱车的后悬架仍常用。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EYd8bCAKtON} />
        </p>

        <h3>
          Independent Suspension / 独立悬架
        </h3>

        <div className="bilingual">
          <p lang="en">
            Independent suspension allows the left and right wheels to move up and down individually, making it well suited to handling bumps and uneven road surfaces. In rear-wheel-drive cars, it also helps maintain consistent tire contact, improving traction at each wheel. The result is a balance of stability and ride comfort.
          </p>
          <p lang="zh">
            左右轮可独立上下运动，对凹凸与起伏的跟随性好。后驱车更能把动力高效传到左右轮，并可减轻运动部件重量，操控稳定与舒适性兼顾度高。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1iotopPPMdWKcE} />
        </p>

        <h3 className="section-header">
          ● Independent Suspension – The System of Choice for Most Sports Cars / ● 独立悬架——多数运动车首选
        </h3>

        <h3>
          MacPherson Strut / 麦弗逊支柱
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is a simple suspension layout consisting of a spring, damper and lower control arm. The “strut” refers to the damper assembly, which also serves as a structural member. The upper section mounts to the body through a rubber insulator, while the lower portion connects to the suspension arm. With fewer components, it is compact and space-efficient, and its long stroke allows it to absorb a wide range of road inputs. The system was developed by Earle S. MacPherson, for whom it is named.
          </p>
          <p lang="zh">
            基本由弹簧、减振器与下控制臂构成的简洁结构。「支柱」指兼受力的减振器总成：上端经安装橡胶支承于车身，下部由下控制臂支承。零件少、重量可控，行程易做长，能大范围吸收路面振动；亦常称麦弗逊支柱。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GkJdRoNg13rb} />
        </p>

        <h3>
          Double Wishbone / 双叉臂
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is a design that supports the wheels with upper and lower control arms. The arms are typically shaped like a V, resembling a bird’s wishbone. Depending on their geometry and the car’s layout, they can effectively control changes in wheel alignment during acceleration and cornering. This allows for precise handling, making it a popular choice for sports cars that prioritize control and stability. However, it is more complex, uses more components, and requires more space.
          </p>
          <p lang="zh">
            以上下成对的控制臂悬挂车轮；臂多为 V 形，似鸟的锁骨（wishbone）。依臂形与布局，可较自由地控制加减速姿态与定位变化，刚性也易做高，重视操控与稳定的运动车常用。但零件多、结构复杂，需要较大安装空间。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1H1V4Qp2mfp0EE} />
        </p>

        <h3>
          Multi-Link / 多连杆
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is an advanced layout that uses three to five separate arms to control wheel position. Because each link operates independently, the system allows a high degree of tuning freedom and precise control of wheel alignment. The additional links help manage forces in multiple directions, improving tire contact with the road. This type of suspension is often used for the rear of high-performance front-wheel-drive cars to enhance stability at speed, and in high-output rear-wheel-drive cars to improve traction.
          </p>
          <p lang="zh">
            亦可视为双叉臂的进化：不用上下两臂，而以 3～5 根连杆定位车桥。各臂分离，布置与细调自由度大，几何变化管理更严，轮胎接地更好。高性能前驱车后悬常为保高速稳定，高输出后驱车则多为保牵引力而采用。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1nMt233hSG6H} />
        </p>
      </div>
    </div>
  </>
);

export default TypesOfSuspension;
