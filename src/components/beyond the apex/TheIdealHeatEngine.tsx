import i1XfO7SRRJdRo7c from "../../assets/images/i1XfO7SRRJdRo7c.webp";
import i111iVtGuFMwTb from "../../assets/images/i111iVtGuFMwTb.webp";
import i1r8dq7LoeP7Y7E from "../../assets/images/i1r8dq7LoeP7Y7E.webp";
import i1tTn7kG5pPOg from "../../assets/images/i1tTn7kG5pPOg.webp";

const TheIdealHeatEngine = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>3-2 : The Ideal Heat Engine / 理想的热机</h1>
        <h2>
          Eliminating wasteful thermal transfer: The Carnot Cycle /
          杜绝无用热传递：卡诺循环
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The engine is a machine that converts thermal energy into mechanical
            energy. What determines the efficiency of this conversion? The first
            person to provide a clear answer was the French engineer and
            physicist Sadi Carnot. In the 19th century, Carnot established the
            theoretical limit of heat engine efficiency and showed how it
            depends on temperature. His work was crucial to the development of
            heat engines.
          </p>
          <p lang="zh">
            发动机是从热能中取出对人有用形式的机械能的机器；其效率如何决定，自然是个疑问。历史上在这一问题上迈出实质性一步的，是法国的萨迪·卡诺。19
            世纪初期，卡诺用巧妙的论证阐明了效率最高的理想热机是什么样、效率如何决定。他所给出的结论，此后成为热机开发的重要指针。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1XfO7SRRJdRo7c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Nicolas Léonard Sadi Carnot (1796-1832).
          </p>
          <p className="caption" lang="zh">
            尼古拉·莱昂纳尔·萨迪·卡诺（1796–1832）。
          </p>
        </div>

        <h3 className="section-header">
          ● Carnot’s two properties / 卡诺关注的两个性质
        </h3>

        <div className="bilingual">
          <p lang="en">
            When Sadi Carnot set out to understand the ideal heat engine, he
            focused on temperature differences. For a heat engine to operate, a
            temperature difference must exist. Without such a difference, heat
            transfer does not occur and no work can be produced. At the same
            time, unnecessary temperature differences within the engine lead to
            wasteful heat transfer. From this, Carnot recognized that the ideal
            heat engine operates through controlled heat transfer between
            defined temperature levels, rather than through uncontrolled thermal
            losses.
          </p>
          <p lang="zh">
            卡诺在思考理想热机时，关注了热的两个性质。其一：热机要做功，必须存在温度差；没有温度差，热就不会移动，热机也就无法做功。但若热机内存在做功所不需要的温度差，热量会只随温度差移动却完全不做功，造成无用的热传递。因此卡诺认为：做功时不依赖温度差来实现热移动的热机，才是效率高的热机。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The second property he considered was that when the volume of a
            material changes under controlled conditions, heat transfer can
            occur without a change in temperature. This is known as an
            isothermal process. Carnot recognized that by using isothermal
            processes, heat could be transferred in a controlled manner between
            reservoirs at defined temperatures. Based on these considerations,
            he proposed the concept of a thermodynamic cycle that minimizes
            losses associated with unnecessary temperature differences.
          </p>
          <p lang="zh">
            其二：若物体发生体积或形状变化，即使没有温度差，热也可以移动——这称为等温变化。卡诺想到，若能活用等温变化，也许就能在不发生因温度差引起的热移动的情况下取出功。在上述预备考察之上，他做了思想实验，构想出不会发生因温度差造成无用热移动的划时代热循环。
          </p>
        </div>

        <h3 className="section-header">● Carnot Cycle / 卡诺循环</h3>

        <div className="bilingual">
          <p lang="en">
            To better understand the nature of heat, Sadi Carnot conceived an
            idealized heat engine consisting of a high- and low-temperature
            reservoir, a cylinder containing a working gas, and a piston. By
            allowing the cylinder to interact with the heat reservoirs, he
            examined how heat transfer and work occur within the system. From
            this, he formulated the concept of an ideal thermodynamic cycle,
            illustrated in Fig. 3-2-1 and Fig. 3-2-2.
          </p>
          <p lang="zh">
            为使热的本质更清晰，卡诺设想了由高温与低温热源、充有空气的气缸与活塞组成的空气发动机。他让气缸与热源接触，考察此时的热移动，并构想出理想热循环，如图
            3-2-1 与图 3-2-2 所示。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i111iVtGuFMwTb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-2-1: Carnot Cycle process.
          </p>
          <p className="caption" lang="zh">
            图3-2-1：卡诺循环的行程。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1r8dq7LoeP7Y7E} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-2-2: Change in air pressure and volume in the Carnot Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-2-2：卡诺循环中空气压力与体积的变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            1) By bringing the cylinder into contact with the high-temperature
            reservoir, heat is transferred to the gas, causing it to expand. To
            maintain thermal equilibrium, the gas must remain at the same
            temperature as the reservoir during this process. This requires the
            expansion to occur slowly and in a controlled manner so that heat
            transfer keeps the temperature constant. Expansion or compression of
            a gas at constant temperature is called an isothermal process.
          </p>
          <p lang="zh">
            （1）使气缸与高温热源接触，热量从热源传入气缸内空气并使其膨胀。此时不得产生温度差，空气须与热源保持同温；空气自身内部也不得出现温度不均。因此必须非常缓慢地一点点膨胀。这样在温度一定下使气体膨胀或压缩，称为等温变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            2) Next, the expanded cylinder must be brought into contact with the
            low-temperature heat reservoir. However, doing so immediately would
            create a temperature difference. To avoid this, Carnot first applied
            an adiabatic process, in which compression increases temperature and
            expansion decreases temperature. He recognized that the gas, after
            isothermal expansion at the high-temperature reservoir, could be
            further expanded adiabatically to lower its temperature without any
            heat transfer. This process continues until the gas temperature
            matches that of the low-temperature reservoir. As with the other
            stages, the piston must be moved slowly to maintain a controlled,
            quasi-static process.
          </p>
          <p lang="zh">
            （2）接下来须使已膨胀的气缸与低温热源接触，但那样必然产生温度差。于是卡诺利用了即使没有热移动、压缩也会升温、膨胀也会降温的绝热变化：在高温热源处膨胀后的气体，再经绝热膨胀，便可在无热移动的情况下降低温度。此过程中活塞也须非常缓慢地移动。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            3) When the gas temperature has decreased to that of the
            low-temperature reservoir, the cylinder is brought into contact with
            the reservoir. Heat is then transferred from the gas to the
            reservoir while the gas is compressed. To maintain thermal
            equilibrium and avoid temperature differences, this process occurs
            slowly at constant temperature and is therefore an isothermal
            compression.
          </p>
          <p lang="zh">
            （3）当空气温度降至与低温热源相同时，使气缸与低温热源接触，一边把气体中的热传给低温热源一边压缩气体。同样不得产生温度差，须以等温变化非常缓慢地传递热量。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            4) After the isothermal compression, the gas is further compressed
            in an adiabatic process, causing its temperature to rise. This
            continues until the gas temperature matches that of the
            high-temperature reservoir, allowing the cycle to return to the
            isothermal expansion described in (1).
          </p>
          <p lang="zh">
            （4）等温变化结束后，再以绝热变化压缩空气使其升温；压缩到与高温热源同温后，再次进行（1）的等温膨胀，重复同一过程。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As noted above, after cycling through (1) isothermal expansion at
            the high-temperature reservoir, (2) cooling through adiabatic
            expansion, (3) isothermal compression at the low-temperature
            reservoir, and (4) heating through adiabatic compression, the gas in
            the cylinder returns to its original state. This cycle converts heat
            into work while minimizing losses due to unnecessary temperature
            differences. Named after its founder, Sadi Carnot, this ideal
            thermodynamic cycle is called the Carnot Cycle.
          </p>
          <p lang="zh">
            如上所述，依次经历（1）高温热源处的等温膨胀、（2）绝热膨胀及由此降温、（3）低温热源处的等温压缩、（4）绝热压缩及由此升温，绕行一周后气缸内空气回到与最初完全相同的状态，可在完全不发生无用热移动的情况下把热转化为功。这一热循环以其构想者卡诺命名，称为卡诺循环。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tTn7kG5pPOg} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fifty years after Carnot’s passing, the first vehicle equipped with
            a gasoline engine is born. Pictured here is a 3-wheel vehicle that
            was made by Karl Benz.
          </p>
          <p className="caption" lang="zh">
            卡诺去世约五十年后，搭载汽油机的首辆汽车诞生。图为卡尔·本茨制造的三轮汽车。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheIdealHeatEngine;
