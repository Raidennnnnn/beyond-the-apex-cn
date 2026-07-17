import i1BJQRHL5WdKz7E from "../../assets/images/i1BJQRHL5WdKz7E.webp";
import i1bkLIhKxRAsvuB from "../../assets/images/i1bkLIhKxRAsvuB.webp";
import i1kF9sb4fjxzz from "../../assets/images/i1kF9sb4fjxzz.webp";

const ValveConfigurations = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Valve Configurations / 气门布置</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            In a four-stroke engine, there are two types of valves: intake valves, which open during the intake stroke to allow the air-fuel mixture into the cylinder, and exhaust valves, which open during the exhaust stroke to release waste gases. These valves are located in the cylinder head and play an important role in sealing and controlling access to the combustion chamber.
          </p>
          <p lang="zh">
            四冲程发动机有进气门（进气行程开启，引入混合气）和排气门（排气行程开启，排出废气）。气门设在气缸盖上，按时开闭燃烧室与外部。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Modern engines typically place the camshaft at the top of the engine (overhead cam), allowing more precise and reliable valve operation. Most modern engines use four valves per cylinder—two intake and two exhaust—to improve airflow. However, engines designed for efficiency at lower engine speeds may use two valves per cylinder, with one intake and one exhaust valve.
          </p>
          <p lang="zh">
            现代发动机通常将凸轮轴置于顶部（顶置凸轮），气门控制更精确。多数为每缸四气门（进气两、排气两）；追求低转速燃烧效率的仍有两气门（进、排各一）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The latest trend is toward variable valve timing. Early systems allowed valves to operate with two discrete timing profiles—one for low engine speeds and one for high engine speeds—but more recent developments enable valve timing and lift to be varied continuously to match engine conditions. In advanced systems such as Valvetronic, power is regulated primarily by controlling valve lift rather than relying on a conventional throttle valve, improving efficiency.
          </p>
          <p lang="zh">
            近年趋势是可变气门正时。最初在低、高转速区切换正时，后发展为随转速连续改变正时与升程。BMW Valvetronic 等最新机构甚至不用节气门调节输出，进一步提高效率。
          </p>
        </div>

        <h3 className="section-header">
          ● Types of Valve Configuration / ● 气门驱动方式种类
        </h3>

        <h3>
          DOHC   [Double Overhead Camshaft] / DOHC［双顶置凸轮轴］
        </h3>

        <div className="bilingual">
          <p lang="en">
            DOHC stands for Double Overhead Camshaft. In a DOHC engine, one camshaft operates the intake valves and another operates the exhaust valves. In addition to providing more precise control by separating these functions, this layout allows for reduced valvetrain mass and improved valve operation at higher speeds. As a result, the engine can achieve higher RPM, leading to improved power output. This is why the DOHC layout has been widely adopted in modern high-performance engines.
          </p>
          <p lang="zh">
            DOHC 即双顶置凸轮轴：两根凸轮轴分别驱动进、排气气门。减轻凸轮负担，气门开闭更可靠，且可减轻气门机构惯量，利于高转速、高输出。绝大多数高性能发动机采用此布局。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1BJQRHL5WdKz7E} />
        </p>

        <h3>
          SOHC   [Single Overhead Camshaft] / SOHC［单顶置凸轮轴］
        </h3>

        <div className="bilingual">
          <p lang="en">
            A single overhead camshaft (SOHC) engine uses one camshaft to operate both the intake and exhaust valves. Depending on the combustion chamber design, the camshaft may act directly on the valves or operate them through rocker arms. Compared with an OHV engine, valve operation is more precise and higher engine speeds are possible. Compared with a DOHC engine, valve control is generally less flexible, but high-RPM SOHC engines do exist, so they are not necessarily inferior.
          </p>
          <p lang="zh">
            气缸盖上设一根凸轮轴。燃烧室形状不同，凸轮轴可直接驱动气门，或通过摇臂驱动。比 OHV 气门跟随性更好、可高转速化；比 DOHC 灵活性略逊，但 SOHC 也有高转速机型，并非一定劣势。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kF9sb4fjxzz} />
        </p>

        <h3>
          OHV   [Overhead Valve] / OHV［顶置气门］
        </h3>

        <div className="bilingual">
          <p lang="en">
            An overhead valve (OHV) engine, as its name suggests, has its valves mounted in the cylinder head. Unlike SOHC or DOHC designs, the camshaft is located in the engine block beside the cylinders and operates the valves through long pushrods and rocker arms. This structure is simple and relatively easy to maintain. However, the added mass and complexity of the valvetrain can limit performance at high engine speeds, so these engines are generally less suited to high-RPM applications.
          </p>
          <p lang="zh">
            亦称“头上阀式”：气门机构在气缸盖上，但凸轮轴在缸体侧面，经长推杆和摇臂驱动气门。结构简单、维护方便；高转速气门跟随性较差，不利于大功率化。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1bkLIhKxRAsvuB} />
        </p>
      </div>
    </div>
  </>
);

export default ValveConfigurations;
