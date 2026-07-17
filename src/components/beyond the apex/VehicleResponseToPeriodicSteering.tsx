import i1QnR9TpLzT7d from "../../assets/images/i1QnR9TpLzT7d.webp";
import i1CBWAFjRf3xMEc from "../../assets/images/i1CBWAFjRf3xMEc.webp";

const VehicleResponseToPeriodicSteering = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          2-4 : Vehicle Response to Periodic Steering Motion /
          周期性转向时的车辆响应
        </h1>
        <h2>
          Understanding vehicle characteristic from the Bode Plot /
          通过波特图了解车辆特性
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Steering characteristics and response to periodic steering /
          转向特性与对周期性转向的响应
        </h3>

        <div className="bilingual">
          <p lang="en">
            In the last section, we explained that vehicle motion can be considered an oscillatory phenomenon. Here, we examine how steering characteristics influence overall vehicle behavior by analyzing the response using concepts from oscillation theory. We will observe how a car traveling at a constant speed responds to a periodic steering input, in which the steering wheel is turned and then returned to the straight-ahead position. We will also vary the rate of steering input (steering frequency) during this observation.
          </p>
          <p lang="zh">
            上一节说明了车辆运动也可视为一种振动现象。这里用振动理论分析周期性转向输入下的响应，以看清不同转向特性下的车辆表现：在恒定车速下反复“打舵—回正”，并改变转向输入的速率（转向频率）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As discussed in Section 1-7, the Bode plot can be used to analyze frequency response. Fig. 2-4-1 shows a Bode Plot of yaw rate response to periodic steering input. When the steering frequency is very low, the gain (amplitude ratio) corresponds closely to the steady-state behavior observed in understeer, neutral steer and oversteer conditions during circular driving. As the steering frequency increases, a vehicle with understeer exhibits a rise in gain, reaching a peak at a certain frequency. In contrast, vehicles with neutral steer or oversteer do not show a pronounced peak, and the gain decreases as the steering frequency increases.
          </p>
          <p lang="zh">
            如 1-7 所述，可用波特图分析频率响应。图 2-4-1 是周期性转向输入下横摆角速度响应的波特图。转向频率极低时（转向非常缓慢），增益（振幅比）与定常圆周行驶中不足转向、中性转向、过度转向的稳态横摆角速度基本一致。频率升高后，不足转向车辆增益上升，并在某一频率出现峰值；中性转向或过度转向则无明显峰值，增益随频率升高而下降。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Taking a look at the phase line graph, lag in phase gets larger as the steering frequency increases for all types of steering characteristics. However, the lag in phase is minimal with understeering cars. This means that a car with understeering characteristics has the fastest response to steering movement.
          </p>
          <p lang="zh">
            看相位线：各类转向特性下，相位滞后都随转向频率升高而增大，但不足转向车辆的相位滞后最小。也就是说，不足转向特性的车辆对转向动作响应最快。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1QnR9TpLzT7d} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-4-1: Conceptual diagram showing yaw rate response to periodic steering input for vehicles with different steering characteristics.
          </p>
          <p className="caption" lang="zh">
            图2-4-1：不同转向特性下，周期性转向输入时横摆角速度响应的概念图。
          </p>
        </div>

        <h3 className="section-header">
          ● Four points to be noted from the Bode Plot /
          波特图上应注意的四点
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let us explain how the Bode Plot can be used in practice. There are several key points to note. Consider the frequency response of the yaw rate. First is the gain at very low frequency (see (1) in Fig. 2-4-2). This value corresponds closely to the steady-state circular driving response. The second point is the height of the gain peak (see (2) in Fig. 2-4-2). Vehicles with stronger understeer tend to exhibit a more pronounced peak due to reduced yaw damping at certain frequencies. In contrast, vehicles with neutral steer or oversteer may show a less pronounced peak. For balanced steering characteristics, a moderate resonance peak is desirable. The third point is the resonance frequency (see (3) in Fig. 2-4-2). A higher resonance frequency is associated with quicker response, allowing the driver to perceive sharper steering feedback. The fourth point is the phase lag (see (4) in Fig. 2-4-2). As phase lag increases, the development of yaw rate is delayed. Minimizing phase lag helps achieve a faster and more responsive steering feel.
          </p>
          <p lang="zh">
            实际使用波特图时，有若干关键点。以横摆角速度的频率响应为例：第一是极低频增益（图 2-4-2 的 (1)），该值与定常圆周行驶时的值基本一致。第二是增益峰值高度（(2)）：不足转向越强，横摆阻尼越小，共振越大，峰值越高；中性或过度转向则往往不出现峰值。为获得良好转向特性，宜保持适度的共振峰高度。第三是共振频率（(3)）：越高通常响应越好，驾驶员更能感到舵效锐利。第四是相位滞后（(4)）：滞后越大，相对转角横摆角速度建立越慢。因此，要确保良好转向特性，需要适度共振峰、相位滞后小的车辆，也就是做成不足转向特性的车辆。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1CBWAFjRf3xMEc} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-4-2: Four points to note on the Bode Plot.
          </p>
          <p className="caption" lang="zh">
            图2-4-2：波特图上应注意的四个要点。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default VehicleResponseToPeriodicSteering;
