import i19VOKAGIlOcX8c from "../../assets/images/i19VOKAGIlOcX8c.webp";
import i1Zgvepo0FJpSz from "../../assets/images/i1Zgvepo0FJpSz.webp";

const InGameAerodynamicsGearRatios = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>In-Game: Aerodynamics / Gear Ratios / 游戏内设置：空气动力学/齿轮比</h1>
      </div>
      <div className="body">
        <h3>
          Adjusting aerodynamics and gear ratios / 空气动力学与齿轮比的调整
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let's focus on aerodynamics and gear ratios, two more settings that affect the performance of your car.
          </p>
          <p lang="zh">
            还需关注改变车辆特性的两项设定：空气动力学与变速箱齿轮比。
          </p>
        </div>

        <h3 className="section-header">
          ● Aerodynamics / ● 空气动力学
        </h3>

        <div className="bilingual">
          <p lang="en">
            Aerodynamics allows you to adjust downforce (the pressure the car exerts onto the track surface), thus increasing tire grip, allowing you to take corners at higher speeds.
          </p>
          <p lang="zh">
            空气动力学可调节下压力（将车压向路面的力），提高轮胎抓地，从而提升高速过弯速度。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            On the other hand, downforce also creates air resistance—and greater air resistance can lead to lower top speeds.
          </p>
          <p lang="zh">
            但下压力也会产生空气阻力，越强最高速越低。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In real races, you will need to consider these two opposing factors when setting up your car.
          </p>
          <p lang="zh">
            实际比赛中需权衡这两种相反效果来设定。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            On tracks with long straights, reduce downforce in order to reduce air resistance, allowing for better top speeds (sacrificing cornering speed in the process). On tracks with lots of corners, increase downforce to increase cornering speed (sacrificing top speed in the process).
          </p>
          <p lang="zh">
            长直道多的赛道：减小下压力、降低风阻，重视最高速（牺牲过弯速度）。弯道多的赛道：增大下压力、提高过弯速度（牺牲最高速）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Downforce can be adjusted for the front and rear of the car independently, so it can also be used to tune steering characteristics. If downforce is strong in high speed sections, increase front downforce to place more load on the front wheels. If oversteering is a problem, increase rear downforce to improve stability.
          </p>
          <p lang="zh">
            下压力可前后独立调节，也可用于调校转向特性。高速区转向不足时，增大前部下压力提高前轮荷重；转向过度时，增大后部下压力提高稳定性。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i19VOKAGIlOcX8c} />
        </p>

        <div className="bilingual">
          <p lang="en">
            The setting indicated by the red box is the downforce. Increased downforce means more air resistance, so you'll need to consider a track's characteristics when adjusting this value
          </p>
          <p lang="zh">
            红框部分为车辆设定中的下压力。下压力也是风阻，调节时需考虑赛道特性
          </p>
        </div>

        <h3 className="section-header">
          ● Gear ratios / ● 齿轮比
        </h3>

        <div className="bilingual">
          <p lang="en">
            If you have a fully customizable transmission, you can adjust your transmission's gear ratios. We've already discussed how to have your gear ratios align, but there are times when various aspects need to be adjusted more finely.
          </p>
          <p lang="zh">
            装备「全自定义变速箱」后可调节齿轮比。齿轮比匹配方法前文已述，但有时需在各点细调。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, if your engine is redlining just before a corner. Generally, shifting up a gear when you want to be shifting down will cost you time. If this keeps happening, you could reduce that gear's ratio ever so slightly, to avoid your engine redlining.
          </p>
          <p lang="zh">
            例如弯道前发动机转速顶到红线（转速进入红区）。本该降挡时却升挡会损失时间，可将该挡齿轮比略减小，避免转速顶满。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            You should also check your revs when exiting a corner. The focus is all on acceleration, so you need to make sure your engine is in its power band (the region in which it can produce the most power). If your revs are too low, your gear ratios might be too high, and should be adjusted down. (There are cases when an earlier gear shift is effective.) On corners immediately before a long straight, this adjustment can have a significant influence on speeds.
          </p>
          <p lang="zh">
            出弯转速也要检查。加速场景下，需确认转速是否在动力带（发动机输出最大的转速区间）。转速过低则齿轮比偏大应调小，过高则调大（※有时提前升挡更有效）。长直道前的弯道，此调整对到达速度影响很大。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            You should also check your revs at the end of long straights where you hit top speed. You'll have been using your top gear, so ideally you want the engine to be just outside its red zone. If revs are too low, you can increase the gear ratio, but if you're redlining, you can decrease the gear ratio. Be aware, however, that your top speed is also affected by aerodynamics and engine characteristics, so be sure to keep an eye on your speedometer when making adjustments.
          </p>
          <p lang="zh">
            达到最高速的长直道末端也要检查转速。应几乎用尽最高挡，转速在红区前沿为理想。转速低则增大齿轮比，顶满则减小；但最高速也受空力与发动机特性影响，请边看速度表边调整。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Zgvepo0FJpSz} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Top Speed in Car Settings. Note that the higher the top speed, the longer it will take to accelerate to that speed.
          </p>
          <p lang="zh">
            车辆设定中的最高速。注意：目标最高速越高，加速到该速度所需时间越长
          </p>
        </div>
      </div>
    </div>
  </>
);

export default InGameAerodynamicsGearRatios;
