import i1LxcA4GhHRU6z from "../../assets/images/i1LxcA4GhHRU6z.webp";
import i1VvM4F1iVMc9uH from "../../assets/images/i1VvM4F1iVMc9uH.webp";
import i1xvvR7kIj0nW from "../../assets/images/i1xvvR7kIj0nW.webp";

const BodyPerformanceRequirements = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Body Performance Requirements</span><span className="bilingual-sep"> / </span><span lang="zh">车身性能要求</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Along with the engine and suspension, the body forms the framework that dictates how a car behaves. The most desirable qualities are rigidity and strength, followed by low weight once those are achieved. Rigidity and strength can be understood as resistance to deformation and resistance to failure, respectively.
          </p>
          <p lang="zh">
            车身与发动机、悬架并列，决定车辆性格。车身需要“刚性”“强度”，并在实现后追求“轻量”。刚性是抗变形，强度是抗破坏。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Rigidity has a particularly strong influence on driving performance. When loads increase or shift over bumps or during cornering, a rigid structure resists flex and maintains its shape.
          </p>
          <p lang="zh">
            刚性对行驶性能影响尤大：过坎、过弯加载时，刚性高则不易弯扭，保持形状。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Even when the body is subjected to load, it should return to its original shape quickly so the suspension can operate as intended and the tires can maintain grip. The more rigid the structure, the more effectively power is transmitted to the road, the more predictable the car’s behavior, and the easier it is to control. Conversely, if the body flexes easily, power delivery becomes less efficient and handling suffers.
          </p>
          <p lang="zh">
            即使变形也应迅速恢复，悬架才能正确工作、轮胎接地更好。刚性高则动力更易传至路面，行为稳定、易控；易变形则动力传递差、操控受损。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The forces acting on a car’s body vary. Some build gradually, while others are sudden and severe. Manufacturers often refer to rigidity under cornering or torsion, but this typically reflects resistance to slower-applied loads. A well-engineered structure must also withstand rapid, high-impact forces without excessive deformation.
          </p>
          <p lang="zh">
            载荷有缓有急，目录中的弯曲/扭转刚性多指慢速输入；真正高刚性还应承受剧烈冲击。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Strength can be thought of as a car’s toughness. If a structure lacks strength, it will suffer greater damage in an impact. However, minimizing damage alone is not enough—a well-designed body must also manage impact forces so they are not transmitted directly to the occupants.
          </p>
          <p lang="zh">
            强度可理解为“硬度”。强度低碰撞损伤大，但过高则冲击直接传乘员，须平衡吸能。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Ideally, a car’s structure balances rigidity and strength. Increasing both often requires reinforcement, which adds weight. This is why convertibles, despite lacking a fixed roof, are often heavier than equivalent coupes, as additional structural reinforcement is built into the floor and chassis.
          </p>
          <p lang="zh">
            理想车身在高维度平衡刚性与强度；补强增重难避，敞篷车常因地板补强而比硬顶更重。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1xvvR7kIj0nW} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Body-on-Frame</span><span className="bilingual-sep"> / </span><span lang="zh">非承载式车身</span></h3>

        <div className="bilingual">
          <p lang="en">
            In body-on-frame construction, the engine, transmission and suspension are mounted to a separate frame, and a body is then attached. Several frame designs exist, including ladder, backbone and perimeter types, but the ladder frame is the simplest, easiest to reinforce, and remains common in trucks and off-road vehicles. Another approach uses a frame made from welded tubular members, to which body panels are attached. Known as a tubular space frame, it cannot be disassembled once built. However, it allows high rigidity with relatively low weight, and can be easier to modify or repair, making it well suited to race cars and low-volume sports cars.
          </p>
          <p lang="zh">
            亦称分离车架、body-on-frame：发动机、变速箱、悬架装在坚固车架，再装车身。有梯形、脊梁、周边等形式，梯形成本低、易加强，越野车常用。多根钢管焊接再覆面板的管状空间构架亦属此类，不可拆，但轻量高刚、易改修，赛车与少量跑车常用。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1VvM4F1iVMc9uH} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Monocoque Body</span><span className="bilingual-sep"> / </span><span lang="zh">承载式车身（单体壳）</span></h3>

        <div className="bilingual">
          <p lang="en">
            This is the most common construction in modern vehicles, in which the frame and body are integrated into a single structure. Strength comes from the combined structure of panels and reinforcements, resulting in a design that is both rigid and relatively lightweight. It also allows a lower floor height and can be highly effective at absorbing impact energy. Because the engine and suspension are mounted directly to the body, early designs suffered from ride and noise issues, but advances in suspension design and engine mounting have largely addressed these concerns.
          </p>
          <p lang="zh">
            车架与车身一体的现代主流。像蛋壳一样靠面板与加强件整体承力，轻量高刚，地板可更低，碰撞吸能也好。发动机悬架直接装车身，早年舒适与隔音不如车架式，但悬架与悬置技术进步已大幅改善。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1LxcA4GhHRU6z} />
        </p>
      </div>
    </div>
  </>
);

export default BodyPerformanceRequirements;
