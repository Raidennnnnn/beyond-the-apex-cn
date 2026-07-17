import i13kfAkmJz4BX7c from "../../assets/images/i13kfAkmJz4BX7c.webp";
import i15rJZ9jJZ4l3b from "../../assets/images/i15rJZ9jJZ4l3b.webp";
import i1MaCF17fZj7JuB from "../../assets/images/i1MaCF17fZj7JuB.webp";
import i1a3FfBxQ3evFz from "../../assets/images/i1a3FfBxQ3evFz.webp";

const AirResistanceAndLift = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Air Resistance and Lift</span><span className="bilingual-sep"> / </span><span lang="zh">空气阻力与升力</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            At high speed, the effect of air resistance becomes significant, often feeling as if an invisible force is limiting further acceleration.
          </p>
          <p lang="zh">
            高速行驶时「空气阻力」影响极大：速度越高，越像一堵看不见的「空气墙」夺走前进的力。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Once a car exceeds around 80 km/h (50 mph), aerodynamic drag becomes a major factor. Beyond this point, drag increases with the square of speed, meaning that if speed doubles, drag increases fourfold, and if speed triples, it increases ninefold. Rolling resistance from the tires also plays a role, though it is less significant at higher speeds. When aerodynamic drag balances the engine’s output, the car reaches its effective top speed. For race cars, sports cars and even efficiency-focused road cars, reducing air resistance is a key objective.
          </p>
          <p lang="zh">
            约 80 km/h 起空气阻力已不可忽视，之后与速度的平方成正比：速度 2 倍阻力约 4 倍，3 倍约 9 倍。实际还有轮胎「滚动阻力」等，但发动机功率冲不破空气墙之时，便是该车的最高速。重视最高速与高速性能的赛车、跑车自不待言，重视油耗的实用车也须降低空气阻力。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Lower, more streamlined cars generally experience less aerodynamic drag, and smooth, flowing shapes allow air to pass more efficiently over the body. Flush surfaces with minimal protrusions further reduce resistance.
          </p>
          <p lang="zh">
            车高越低阻力越小；外形上，能把行驶气流顺畅导向后方的流线型或楔形（wedge）更有利。车身表面少多余凸起＝齐平面（flush surface），也是降阻的设计处理。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, many low-drag shapes can generate lift, as airflow over the body can accelerate relative to the air beneath it. This reduces the normal force on the tires and can affect stability. Reducing lift often increases drag, so aerodynamic design involves balancing these competing factors.
          </p>
          <p lang="zh">
            但低阻车身从侧面看常似飞机机翼：上部气流快于下部，产生把车身向上托起的力＝升力。要抑制升力往往须增加空气阻力，空气阻力与升力的平衡点定在何处，是设计开发的关键。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Crosswinds must also be considered, as they can disturb straight-line stability. Effective aerodynamic design requires balancing drag, lift and yaw stability.
          </p>
          <p lang="zh">
            高速时扰乱直线性的侧风也不可忽视。空气动力学须统筹空气阻力、升力以及横摆力矩的总体平衡。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Frontal Surface Area [Frontal Area]</span><span className="bilingual-sep"> / </span><span lang="zh">迎风面积</span></h3>

        <div className="bilingual">
          <p lang="en">
            Frontal area is the silhouette of a car when viewed from the front. The larger this area, the greater the aerodynamic drag. Reducing frontal area is one reason sports cars tend to have lower profiles, while boxier vehicles and minivans typically have higher drag due to their larger frontal area.
          </p>
          <p lang="zh">
            从正面看车体时的轮廓投影。面积越大，受行驶风越多、阻力越大。跑车采用低矮车身，也是为尽量缩小迎风面积；厢式车与 MPV 必然不利。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1MaCF17fZj7JuB} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Cd – Drag Coefficient [Constant Drag]</span><span className="bilingual-sep"> / </span><span lang="zh">Cd——空气阻力系数</span></h3>

        <div className="bilingual">
          <p lang="en">
            The drag coefficient (Cd) is a measure of how smoothly air flows over an object. It is generally treated as a fixed value for a given shape, though it can vary with conditions such as speed and airflow. Aerodynamic drag depends on both Cd and frontal area. As a result, a car with a higher Cd but small frontal area may still have relatively low drag, while a vehicle with a larger frontal area can experience higher drag even with a lower Cd.
          </p>
          <p lang="zh">
            表示对某物体吹风时，气流流动有多顺畅的系数。因是系数，本身不受速度影响。实车关心的「空气阻力」＝空气阻力系数（Cd）×迎风面积。因此即便 Cd 本身偏大，迎风面积小的跑车空气阻力仍可较小；厢式车等则相反。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i15rJZ9jJZ4l3b} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Cl – Lift Coefficient</span><span className="bilingual-sep"> / </span><span lang="zh">Cl——升力系数</span></h3>

        <div className="bilingual">
          <p lang="en">
            The lift coefficient (Cl) is a value that represents the aerodynamic force acting on a car in the vertical direction as it moves through the air. Positive values indicate lift, while negative values indicate downforce. Generating downforce typically increases drag, so achieving stability involves balancing front and rear downforce to suit the car’s characteristics.
          </p>
          <p lang="zh">
            高速行驶气流使车体上浮之力的系数。把车体向下压的力则称「下压力」或「负升力」。获得下压力须增加空气阻力；要使姿态稳定，还须把前后下压力调到合适平衡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13kfAkmJz4BX7c} />
        </p>

        <h3 className="bilingual-title"><span lang="en">CYM – Coefficient of Yawing Moment</span><span className="bilingual-sep"> / </span><span lang="zh">CYM——横摆力矩系数</span></h3>

        <div className="bilingual">
          <p lang="en">
            The Yaw Moment Coefficient represents the tendency of a car to rotate about its vertical axis under aerodynamic forces. In real driving, airflow does not always strike the car head-on, and crosswinds can create a yawing moment that tries to turn the vehicle. A lower yaw moment coefficient generally indicates better stability in crosswinds. Taller vehicles with a higher center of gravity and larger side area are typically more affected.
          </p>
          <p lang="zh">
            行驶中所受之风未必来自前方。从各方向受风时，在车体中心轴附近产生、试图使车旋转、妨碍直线性的力即横摆力矩。CYM 小的车更抗侧风；一般重心高的高车身不利。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1a3FfBxQ3evFz} />
        </p>
      </div>
    </div>
  </>
);

export default AirResistanceAndLift;
