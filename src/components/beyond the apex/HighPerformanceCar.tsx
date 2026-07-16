import i1O3Gddsl5QcQSB from "../../assets/images/i1O3Gddsl5QcQSB.webp";
import i1Ivdlf6OP9ptW from "../../assets/images/i1Ivdlf6OP9ptW.webp";
import i1WmIkhIRNCyQ7c from "../../assets/images/i1WmIkhIRNCyQ7c.webp";

const HighPerformanceCar = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          2-7 : What Constitutes a High-Performance Car? /
          什么是运动性能好的车辆？
        </h1>
        <h2>
          Vehicle performance is in the rear wheels /
          车辆运动性能的关键在后轮
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Resonance frequency of yaw rate and steering characteristic /
          横摆角速度共振频率与转向特性
        </h3>

        <div className="bilingual">
          <p lang="en">
            In general, a higher yaw rate resonance frequency is associated with quicker vehicle responses and is often characteristic of a high-performance vehicle. Increasing the rear tire cornering power or reducing vehicle mass are examples of ways to raise the yaw response frequency.
            <br />
            <br />
            Fig. 2-7-1 illustrates how front and rear tire grip affect overall vehicle behavior. From this diagram, increasing rear tire grip tends to increase understeer and raise the yaw response frequency. Conversely, increasing front tire grip tends to promote oversteer and reduce the yaw response frequency. Also, increasing rear tire grip reduces phase lag, while increasing front tire grip increases phase lag.
            <br />
            <br />
            As previously illustrated, the grip level of the rear tires has a significant influence on overall vehicle performance. When modifying the suspension system, it is important to first ensure sufficient rear tire grip. Next, the balance between front and rear tire grip should be optimized. These steps are fundamental to improving vehicle performance.
          </p>
          <p lang="zh">
            一般而言，横摆角速度共振频率越高，车辆响应越敏捷，也常被视为高性能车辆的特征。提高后轮侧偏刚度、减轻车重等，都是抬高横摆响应频率的手段。
            <br />
            <br />
            图 2-7-1 定性说明前后轮抓地对整体车辆行为的影响：增大后轮抓地，往往增强不足转向并提高横摆响应频率；增大前轮抓地，则倾向过度转向并降低横摆响应频率。相位方面，后轮抓地增大使相位滞后减小；前轮抓地增大使相位滞后增大。
            <br />
            <br />
            由此可见，后轮抓地水平对整体运动性能影响很大。调校悬架时，应先保证后轮抓地充足，再优化前后抓地平衡——这是提升车辆运动性能的基本思路。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1O3Gddsl5QcQSB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-7-1: Correlation of tire grip, steering response and steering characteristic.
          </p>
          <p className="caption" lang="zh">
            图2-7-1：轮胎抓地、转向响应与转向特性的关系。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If the vehicle’s yaw moment of inertia is expressed as I = mK², the radius of gyration can be written as K = √(I/m). Here, &quot;I&quot; represents the yaw moment of inertia and &quot;m&quot; represents the vehicle mass.
          </p>
          <p lang="zh">
            若将车辆横摆转动惯量形式地写成 I = mK²，则横摆惯性半径为 K = √(I/m)。其中 I 为横摆转动惯量，m 为车辆质量。
          </p>
        </div>

        <h3 className="section-header">
          ● Categorizing vehicle responsiveness / 车辆响应性的分类
        </h3>

        <div className="bilingual">
          <p lang="en">
            Vehicle responsiveness is a complex subject, but by describing vehicle motion using the equation of motion (as discussed in Section 1-1), we can begin to gain a clearer understanding. Also, the concepts of lateral acceleration and steering frequency can be used to categorize vehicle motion characteristics, as shown in Fig. 2-7-2.
            <br />
            <br />
            Up to this point, we have focused on responsiveness based on (2) normal turn characteristics within the (3) linear range. In this context, the linear range refers to an idealized condition in which cornering power remains stable and proportional to slip angle. In contrast, responsiveness in the (4) non-linear range describes conditions in which cornering force begins to saturate. This range is particularly important in race car operation. Even within the non-linear range, however, the fundamental characteristics observed in the linear range still apply. By carefully considering the balance of cornering forces and moments between the front and rear wheels, the behavior can often be understood as an extension of the linear case. In addition, it is desirable for the (5) limit characteristic range to be positioned as far from the initial operating region as possible.
          </p>
          <p lang="zh">
            车辆响应性议题很广，但用运动方程（见 1-1）描述车辆运动，可开始形成清晰认识。也可按横向加速度与转向频率对运动特性分类，如图 2-7-2。
            <br />
            <br />
            此前我们主要关注 (2) 定常转弯特性在 (3) 线性范围内的响应。此处线性范围指侧偏刚度大致稳定、与侧偏角成正比的理想化条件。(4) 非线性范围的响应则指侧偏力开始饱和的工况，对赛车尤为重要。即便在非线性范围，线性范围的基本特性仍适用；仔细考察前后侧偏力与力矩平衡，往往可作线性情形的延伸来理解。此外，(5) 极限特性区域宜尽量远离初始工作区。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Ivdlf6OP9ptW} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-7-2: Category of vehicle motion characteristics.
          </p>
          <p className="caption" lang="zh">
            图2-7-2：车辆运动特性的分类。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            A common example of vehicle behavior in the non-linear range is reverse steering. As discussed in Section 1-2, steering characteristics can be determined from the relationship between slip angles during normal cornering. Here, we examine reverse steering using a vehicle with the characteristics shown in Fig. 2-7-3.
            <br />
            <br />
            When vehicles with similar characteristics are in normal cornering at low lateral acceleration, the front tire slip angle is larger than that of the rear, and the vehicle exhibits understeer. As lateral acceleration increases, the tires must generate greater force to balance it, causing slip angles to increase and the cornering force to enter the saturation region. At higher lateral acceleration, the rear tire slip angle can increase more rapidly, and beyond a certain point it may exceed that of the front, leading the vehicle to exhibit oversteer and reduced stability. This condition, in which the steering characteristic changes with lateral acceleration, is referred to as reverse steering.
          </p>
          <p lang="zh">
            非线性范围内的典型例子是反向转向（reverse steering）。如 2-2 所述，定常转弯中可由前后侧偏角大小关系判断转向特性。这里用图 2-7-3 所示特性的车辆来考察反向转向。
            <br />
            <br />
            此类车辆在低横向加速度定常转弯时，前轮侧偏角大于后轮，表现为不足转向。横向加速度升高后，轮胎需产生更大的力来平衡，侧偏角增大，侧偏力进入饱和区。横向加速度更高时，后轮侧偏角可更快增大，超过某点后可能超过前轮，车辆转为过度转向并稳定性下降。这种随横向加速度而转向特性反转的现象，称为反向转向。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1WmIkhIRNCyQ7c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-7-3
          </p>
          <p className="caption" lang="zh">
            图2-7-3
          </p>
        </div>
      </div>
    </div>
  </>
);

export default HighPerformanceCar;
