import i1Qr0l29AKF8eSH from "../../assets/images/i1Qr0l29AKF8eSH.webp";
import i1aUxscvrkyoaz from "../../assets/images/i1aUxscvrkyoaz.webp";
import i1d4h4GWya9jlSH from "../../assets/images/i1d4h4GWya9jlSH.webp";
import i1et0s6cgOfwg from "../../assets/images/i1et0s6cgOfwg.webp";

const WheelAlignment = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Wheel Alignment / 车轮定位</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Take a piece of furniture with caster wheels. Viewed from above, the wheel’s pivot axis is offset and angled relative to the direction of travel. This geometry causes the wheel to self-align and track straight when pushed, rather than wobbling.
          </p>
          <p lang="zh">
            看看带万向轮的家具或椅子：从正上方看，轮心轴与安装轴的位置往往错开。推动时轮子不乱晃、能沿一定方向前进，正是靠这种「偏移」。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Now imagine rolling a car tire along the ground. If it stands upright, it will travel straight, but if it is leaned slightly, it will tend to turn in that direction as it rolls.
          </p>
          <p lang="zh">
            再试把轮胎拆下在地面滚动：接地面贴紧竖立滚动会直线前进；略微倾斜滚动则会朝一定方向转弯。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            These examples show that the angles at which wheels are mounted have a direct effect on how they move. This is the basis of wheel alignment, or suspension geometry.
          </p>
          <p lang="zh">
            也就是说，把轮胎以不同角度固定在车上，就能按运动需要驱动轮胎。这就是车轮定位（＝悬架几何）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Driving, turning and braking all depend on correct alignment. Proper wheel positioning allows the tires to operate effectively and plays a major role in defining a car’s handling characteristics.
          </p>
          <p lang="zh">
            「行驶、转向、制动」的基础，是四条轮胎按定位正确安装。靠这种「轮胎位置设定」可发挥轮胎性能，并决定车辆特性。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The illustrations below show the four basic wheel alignment angles. Toe is the angle of the wheels viewed from above, caster is the angle of the steering axis viewed from the side, camber is the angle of the wheels viewed from the front, and kingpin angle refers to the inclination of the steering axis relative to the wheels when viewed from the front. These settings are adjusted in very small increments, often as little as 0.1 degree or 0.1 mm, leaving little margin for error. Incorrect settings can cause the car to pull off line or negatively affect handling. Understanding their effects is essential.
          </p>
          <p lang="zh">
            代表性要素有下述四种：俯视的前束角、侧视的主销后倾角、正视的外倾角，以及正视下轮胎与悬架安装角即主销内倾角。它们以约 0.1°、0.1 mm 的精度管理；有误差会损害直线性或造成操作违和感。请牢记各自对车辆的影响。
          </p>
        </div>

        <h3>
          Toe Angle / 前束角
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is the angle of the left and right wheels when viewed from above. If the fronts of the wheels point outward, it is called toe-out, and if they point inward, it is toe-in. This angle has a significant effect on straight-line behavior; if set excessively, it will cause uneven tire wear.
          </p>
          <p lang="zh">
            车体俯视时左右轮的开合角度。相对前进方向前端外张为 toe-out，内收为 toe-in。对直线性影响大，设定过度会导致轮胎偏磨。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1aUxscvrkyoaz} />
        </p>

        <h3>
          Caster Angle / 主销后倾角
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is the angle of the steering axis relative to vertical when viewed from the side. It influences straight-line stability and the self-aligning torque that returns the wheels to center after steering input. If the caster angle differs between the left and right sides, the car may pull toward the side with less positive caster, and the steering can feel uneven, especially under braking.
          </p>
          <p lang="zh">
            侧视前悬架相对垂直的倾角。可抑制车轮横向摆动，并产生回正力矩。左右不一致时，车易偏向后倾较小一侧，制动时方向盘也可能被拉偏。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Qr0l29AKF8eSH} />
        </p>

        <h3>
          Camber Angle / 外倾角
        </h3>

        <div className="bilingual">
          <p lang="en">
            Camber angle is the angle of the wheels relative to vertical when viewed from the front. If the tops of the wheels tilt inward, this is negative camber; if they tilt outward, it is positive camber. In most modern cars, camber is set slightly negative to improve tire contact during cornering.
          </p>
          <p lang="zh">
            正视时车轮相对垂直的倾斜：轮顶内倾为负外倾，外倾为正外倾。量产车多略设负外倾，以免加载后变为下开，并改善过弯接地。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1et0s6cgOfwg} />
        </p>

        <h3>
          Kingpin Inclination / 主销内倾角
        </h3>

        <div className="bilingual">
          <p lang="en">
            Kingpin inclination is the angle of the steering axis when viewed from the front. It helps reduce the effects of road forces on the steering, while also influencing straight-line stability, steering return and steering effort.
          </p>
          <p lang="zh">
            正视时车轮安装轴的倾角。主要用于抑制路面输入造成的方向盘拉扯，并影响直线性、回正力矩与操舵力。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1d4h4GWya9jlSH} />
        </p>
      </div>
    </div>
  </>
);

export default WheelAlignment;
