import i1EBYKny3oMRTEE from "../../assets/images/i1EBYKny3oMRTEE.webp";
import i1kVtFAyjsRWNz from "../../assets/images/i1kVtFAyjsRWNz.webp";

const InGameSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>In-Game: Suspension / 游戏内设置：悬架</h1>
      </div>
      <div className="body">
        <h3>
          Body height and natural frequency / 车高与固有振动数的调整
        </h3>

        <div className="bilingual">
          <p lang="en">
            We've already discussed suspension settings in the first half of the book, so here are a few additional notes relating to Gran Turismo 7's car settings.
          </p>
          <p lang="zh">
            前半已讲悬架设定，这里结合《GT 赛车 7》的车辆设定作补充。
          </p>
        </div>

        <h3 className="section-header">
          ● Body height / ● 车高
        </h3>

        <div className="bilingual">
          <p lang="en">
            As previously mentioned, the lower a car's body height, the better. However, front and rear body height can be adjusted in order to change a car's steering characteristics. Lowering the front of a car reduces the load on the rear wheels, creating a tendency to oversteer. Similarly, lowering the back of a car reduces the load on the front wheels, creating a tendency to understeer.
          </p>
          <p lang="zh">
            如前所述，车高越低越好；但可通过前后车高改变转向特性。前低后高会减少后轮荷重，倾向转向过度；后低前高会减少前轮荷重，倾向转向不足。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The front-rear body height balance also affects a car's aerodynamics. Generally, lowering the front of a car shifts the aerodynamic balance to the front, increasing the tendency to oversteer.
          </p>
          <p lang="zh">
            前后车高平衡也影响空气动力学。一般前低会使空力平衡前移，转向过度倾向增强。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In other words, changing a car's front-rear body height balance settings from their default can affect other settings in ways that are difficult to understand. At first, therefore, it's better to stick with the same body height for the front and rear of the car, only using minor body height adjustments as a final step in your set up.
          </p>
          <p lang="zh">
            但初期就改变前后车高平衡，会使其他设定项的效果难以判断。起初前后车高相同，仅在最后微调时利用前后平衡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EBYKny3oMRTEE} />
        </p>

        <h3 className="section-header">
          ● Natural Frequency (Spring Rate) / ● 固有振动数（弹簧刚度）
        </h3>

        <div className="bilingual">
          <p lang="en">
            We mentioned previously that you shouldn't think of suspension settings in terms of the spring rates, but in terms of the natural frequency: a measure that reflects the quality of suspension support and the motion ratio.
          </p>
          <p lang="zh">
            悬架设定不应只看弹簧刚度，而应以包含支撑质量与运动比的固有振动数为准；决定固有振动数时也要考虑轮胎类型。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If you're using tires with a lot of grip, such as racing tires, the general principle is that the natural frequency should be higher. If you use racing tires without increasing the natural frequency, then the car will roll more often, its response will be poorer, and it will generally be harder to drive.
          </p>
          <p lang="zh">
            使用赛车胎等高抓地轮胎时，原则上应提高固有振动数。不提高固有振动数就换赛车胎，侧倾大、响应差，车辆会难驾。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In the same way, the natural frequency should also be higher if you're using a car that produces a lot of downforce, such as a racing car. Racing cars are sensitive to the air currents beneath then, and rolling or pitching can affect the stability of the car. As such, you should increase the natural frequency and ensure that the suspension prevents the car's body from moving too much.
          </p>
          <p lang="zh">
            同样，赛车等高下压力车辆也应提高固有振动数。赛车对车底气流敏感，侧倾与俯仰会影响稳定性，应提高固有振动数，打造「车身不动」的底盘。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kVtFAyjsRWNz} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Natural frequency in Car Settings. Normally the front and rear values should be the same.
          </p>
          <p lang="zh">
            车辆设定中的固有振动数，前后数值对齐是基本原则
          </p>
        </div>
      </div>
    </div>
  </>
);

export default InGameSuspension;
