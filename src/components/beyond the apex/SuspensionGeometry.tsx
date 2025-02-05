import i1oHM1Hp4SucxSH from "../../assets/images/i1oHM1Hp4SucxSH.webp";
import i1B8TFfiM0m52cc from "../../assets/images/i1B8TFfiM0m52cc.webp";
import i1ne3nx65rO9Zz from "../../assets/images/i1ne3nx65rO9Zz.webp";
const SuspensionGeometry = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>悬挂几何</h1>
        <h2>车辆设置 6</h2>
      </div>
      <div className="body">
        <h3 className="section-header">通过定位轮胎改变转向特性</h3>
        <p className="image"><img alt="" src={ i1oHM1Hp4SucxSH }/></p>
        <h3 className="section-header">●倾角</h3>
        <p>
倾角的调整是一个重要的设置。从正面看汽车，如果轮胎的底部比顶部更宽，则汽车设置为负倾角。正倾角表示轮胎的底部比顶部更窄。</p>
        <p>
转弯时，由于离心力，汽车会向弯道外侧倾斜。如果你提前将轮胎设置为负倾角，轮胎将在这种倾斜状态下垂直于地面。倾角的设置是以此为目的进行的。</p>
        <p>
具有倾角的轮胎即使没有滑动角也会产生转弯力。这被称为倾角推力，并随着倾角的增加而增大。由滑动角产生的转弯力和由倾角设置产生的倾角推力的总和将是转动车辆的力。</p>
        <p>
另一方面，正倾角会导致倾角推力与转弯力相反——这是一种通常不使用的设置。</p>
        <p className="image"><img alt="" src={ i1B8TFfiM0m52cc }/></p>
        <p className="caption">图6-1：正倾角和负倾角。</p>
        <h3 className="section-header">●前束角</h3>
        <p>
一般来说，设置前轮前束内和后轮前束外将产生转向过度特性。如果反过来设置，前轮前束外和后轮前束内，将导致转向不足。</p>
        <p>
当你为前轮设置前束外设置时，可以使转弯的转入更锐利。如果后轮设置为前束内，将改善出弯时的稳定性。然而，重要的是要记住，极端的前束内或前束外设置都会导致驾驶阻力。</p>
        <p className="image"><img alt="" src={ i1ne3nx65rO9Zz }/></p>
        <p className="caption">图6-2：调整前后前束角时的转向特性。</p>
      </div>
    </div>
  </>
);
export default SuspensionGeometry;
