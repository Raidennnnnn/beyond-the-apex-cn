import i1qCcN0dtuW6H from "../../assets/images/i1qCcN0dtuW6H.webp";

const RotaryEngines = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Rotary Engines</span><span className="bilingual-sep"> / </span><span lang="zh">转子发动机</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Rotary engines (also known as Wankel engines) produce power in a manner similar to reciprocating engines, in that they go through the four stages of intake, compression, power, and exhaust. However, these processes are carried out in a very different way.
          </p>
          <p lang="zh">
            转子发动机（汪克尔发动机）与往复式一样，通过进气、压缩、燃烧、排气循环获得旋转能量，但行程机制根本不同。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Instead of cylinders, this type of engine uses an epitrochoid-shaped rotor housing, within which a triangular rotor rotates. The rotor moves around an eccentric shaft within the housing, expanding and contracting the chambers between itself and the housing. It is within these chambers that the intake, compression, power, and exhaust cycles take place. A rotary engine will typically consist of two or three rotors operating within an equal number of housings.
          </p>
          <p lang="zh">
            它没有气缸，而有茧形转子壳，内装三边膨起的三角转子。转子偏心旋转，使转子与壳体间空间大小变化，在此完成压缩、燃烧、排气。通常一台转子发动机有2或3个转子壳。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In typical engines, the reciprocating motion of multiple pistons can make smooth power delivery more difficult, and also produces noise and vibration. In contrast, rotary engines are based on continuous rotational motion, resulting in smoother operation. Another benefit of this type of engine is the absence of conventional valves, which reduces the number of moving parts. Rotary engines have also traditionally been lighter, and although advances in reciprocating engine technology have reduced this difference, rotary engines remain more compact in overall design.
          </p>
          <p lang="zh">
            往复式多活塞往复，力控制难，产生振动和噪声。转子发动机原理上是旋转运动，运转更平顺。无传统气门系，零件数大减。近年往复式也轻量化，轻量优势减弱，但紧凑性毋庸置疑。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In a rotary engine, the timing of the intake and exhaust processes is determined by the shape and position of the ports in the rotor housing. Tuning the intake and exhaust characteristics is therefore achieved by modifying these port shapes and locations. In addition, because rotary engines do not use conventional exhaust valves, exhaust gases exit more directly, which can make them well suited to turbocharging applications.
          </p>
          <p lang="zh">
            转子进排气时机由壳体壁面、侧面端口形状决定；调校即改变端口位置与形状。无排气门，排气能量可直接从排气口排出，与涡轮增压器相性好。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Compared to a reciprocating engine, a rotary engine is at a disadvantage in terms of fuel consumption. This is largely due to the relatively large surface area of the combustion chamber in relation to its volume, which leads to greater heat loss and lower efficiency in converting thermal energy into mechanical energy.
          </p>
          <p lang="zh">
            相较往复式，转子发动机燃油经济性往往不利：燃烧室表面积相对容积大，热损失多，转化为旋转能量的比例较低。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1qCcN0dtuW6H} />
        </p>
      </div>
    </div>
  </>
);

export default RotaryEngines;
