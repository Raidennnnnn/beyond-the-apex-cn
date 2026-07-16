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
            发动机是将热能转化为机械能的机器。这一转换的效率由什么决定？最先给出清晰回答的，是法国工程师兼物理学家萨迪·卡诺。19
            世纪，卡诺确立了热机效率的理论极限，并阐明其如何取决于温度。他的工作对热机发展意义重大。
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
            <br />
            <br />
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
            萨迪·卡诺在思考理想热机时，首先关注温度差。热机要做功，必须存在温度差；没有温度差，热就不会传递，也就无法做功。同时，机内多余的温度差又会造成无用的热传递。由此卡诺认识到：理想热机应在确定的温度水平之间以受控方式传递热量，而不是靠失控的热损失来运转。
            <br />
            <br />
            他关注的第二个性质是：在受控条件下改变物质体积时，可以在温度不变的情况下传递热量——这称为等温过程。卡诺认识到，利用等温过程，可在确定温度的热源之间以受控方式传递热量。基于这些思考，他提出了尽量减少因多余温度差造成损失的热力学循环概念。
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
            为更好理解热的本质，萨迪·卡诺构想了一台理想化热机：由高温与低温热源、装有工作气体的气缸以及活塞组成。他让气缸与热源接触，考察系统中热传递与做功如何发生，并由此提出理想热力学循环的概念，如图
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
            图3-2-1：卡诺循环过程。
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
            <br />
            <br />
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
            <br />
            <br />
            3) When the gas temperature has decreased to that of the
            low-temperature reservoir, the cylinder is brought into contact with
            the reservoir. Heat is then transferred from the gas to the
            reservoir while the gas is compressed. To maintain thermal
            equilibrium and avoid temperature differences, this process occurs
            slowly at constant temperature and is therefore an isothermal
            compression.
            <br />
            <br />
            4) After the isothermal compression, the gas is further compressed
            in an adiabatic process, causing its temperature to rise. This
            continues until the gas temperature matches that of the
            high-temperature reservoir, allowing the cycle to return to the
            isothermal expansion described in (1).
            <br />
            <br />
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
            1)
            使气缸与高温热源接触，热量传入气体并使其膨胀。为保持热平衡，此过程中气体温度须与热源相同，因此膨胀必须缓慢、受控，使传热足以维持温度不变。气体在恒温下膨胀或压缩，称为等温过程。
            <br />
            <br />
            2)
            接下来须使已膨胀的气缸与低温热源接触，但若立即接触会造成温度差。为避免这一点，卡诺先采用绝热过程：压缩升温、膨胀降温。他认识到，气体在高温热源处等温膨胀后，还可继续绝热膨胀，在不传热的情况下降低温度，直至与低温热源温度一致。与其他阶段一样，活塞须缓慢移动，以保持受控的准静态过程。
            <br />
            <br />
            3)
            当气体温度降至与低温热源相同时，使气缸与该热源接触。在压缩气体的同时，热量从气体传向热源。为保持热平衡、避免温度差，此过程须在恒温下缓慢进行，即为等温压缩。
            <br />
            <br />
            4)
            等温压缩之后，再以绝热过程进一步压缩气体，使其升温，直至温度与高温热源一致，从而回到（1）所述的等温膨胀。
            <br />
            <br />
            如上所述，依次经历（1）高温热源处的等温膨胀、（2）绝热膨胀降温、（3）低温热源处的等温压缩、（4）绝热压缩升温后，气缸内气体回到初始状态。该循环在尽量减少因多余温度差造成损失的同时，将热转化为功。这一理想热力学循环以其提出者萨迪·卡诺命名，称为卡诺循环。
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
            卡诺去世约五十年后，搭载汽油机的首辆汽车诞生。图为卡尔·本茨制造的三轮车。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheIdealHeatEngine;
