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
            <br />
            <br />
            Now imagine rolling a car tire along the ground. If it stands upright, it will travel straight, but if it is leaned slightly, it will tend to turn in that direction as it rolls.
            <br />
            <br />
            These examples show that the angles at which wheels are mounted have a direct effect on how they move. This is the basis of wheel alignment, or suspension geometry.
            <br />
            <br />
            Driving, turning and braking all depend on correct alignment. Proper wheel positioning allows the tires to operate effectively and plays a major role in defining a car’s handling characteristics.
            <br />
            <br />
            The illustrations below show the four basic wheel alignment angles. Toe is the angle of the wheels viewed from above, caster is the angle of the steering axis viewed from the side, camber is the angle of the wheels viewed from the front, and kingpin angle refers to the inclination of the steering axis relative to the wheels when viewed from the front. These settings are adjusted in very small increments, often as little as 0.1 degree or 0.1 mm, leaving little margin for error. Incorrect settings can cause the car to pull off line or negatively affect handling. Understanding their effects is essential.
          </p>
          <p lang="zh">
            想象带万向轮的家具：从上方看，轮心相对转向轴有偏移。车轮定位即调节这些角度，影响直线稳定性与弯道行为。
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
            俯视左右轮夹角。前端内收为前束内，外张为前束外。影响直线稳定与轮胎磨损。
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
            侧视转向轴相对垂直向后倾的角度。提供回正力矩，影响直线稳定与转向手感。
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
            后视车轮相对垂直的倾斜。弯道中影响轮胎接地与侧向力，运动车常略负外倾。
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
            前视转向轴向内倾的角度。与后倾共同产生回正力，影响转向轴心位置与转弯时车身抬升。
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
