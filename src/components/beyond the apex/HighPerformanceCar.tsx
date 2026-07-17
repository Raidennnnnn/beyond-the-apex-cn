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
          </p>
          <p lang="zh">
            一般认为，车辆横摆角速度共振频率越高，动作越敏捷、运动性能越好。提高该共振频率的手段包括：提升后轮侧偏刚度、减轻车重、缩小横摆惯性半径等。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Fig. 2-7-1 illustrates how front and rear tire grip affect overall vehicle behavior. From this diagram, increasing rear tire grip tends to increase understeer and raise the yaw response frequency. Conversely, increasing front tire grip tends to promote oversteer and reduce the yaw response frequency. Also, increasing rear tire grip reduces phase lag, while increasing front tire grip increases phase lag.
          </p>
          <p lang="zh">
            图 2-7-1 定性表示前后轮抓地对车辆运动性能的影响。由图可见：增大后轮抓地会使不足转向增强、横摆角速度共振频率升高；增大前轮抓地则使过度转向增强、共振频率降低。另一方面，后轮抓地越大相位滞后越小；前轮抓地越大相位滞后越大。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As previously illustrated, the grip level of the rear tires has a significant influence on overall vehicle performance. When modifying the suspension system, it is important to first ensure sufficient rear tire grip. Next, the balance between front and rear tire grip should be optimized. These steps are fundamental to improving vehicle performance.
          </p>
          <p lang="zh">
            由此可见，后轮抓地水平对车辆运动性能至关重要。因此调校悬架时，应在充分确保后轮抓地的前提下，再把前后轮抓地水平调到适当——这是提升车辆运动性能的基本思路。
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
            图2-7-1：前后轮抓地水平与转向响应性、转向特性的关系。
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
          </p>
          <p lang="zh">
            车辆运动性能可讨论的范围很广。但车辆运动本身可用运动方程（1-1 中的 F=ma）作数学处理，因此如前文所见，也较容易通过理论整理成体系。若沿横向加速度与转向频率对车辆运动特性分类整理，则如图 2-7-2。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Up to this point, we have focused on responsiveness based on (2) normal turn characteristics within the (3) linear range. In this context, the linear range refers to an idealized condition in which cornering power remains stable and proportional to slip angle. In contrast, responsiveness in the (4) non-linear range describes conditions in which cornering force begins to saturate. This range is particularly important in race car operation. Even within the non-linear range, however, the fundamental characteristics observed in the linear range still apply. By carefully considering the balance of cornering forces and moments between the front and rear wheels, the behavior can often be understood as an extension of the linear case. In addition, it is desirable for the (5) limit characteristic range to be positioned as far from the initial operating region as possible.
          </p>
          <p lang="zh">
            本稿主要围绕 (2) 定常转弯性与 (3) 线性范围内的响应性展开。这里所谓线性范围，可理解为在各种行驶状态中都假定侧偏刚度基本恒定来考察的情形。(4) 非线性范围内的响应性，主要指侧偏刚度进入饱和区的行驶，对赛车尤其重要。不过即便称为非线性范围，基础仍在前述线性特性；若恰当考察前后侧偏力平衡与前后力矩平衡，多数情况下可作为线性范围的应用来处理。此外，(5) 极限特性区域当然离原点越远越好。
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
          </p>
          <p lang="zh">
            非线性范围内车辆运动的典型例子是反向转向（reverse steering）。2-2 中说过，定常圆周行驶时可由前后侧偏角大小关系判断转向特性；这里用图 2-7-3 所示特性的车辆来考察反向转向是什么。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When vehicles with similar characteristics are in normal cornering at low lateral acceleration, the front tire slip angle is larger than that of the rear, and the vehicle exhibits understeer. As lateral acceleration increases, the tires must generate greater force to balance it, causing slip angles to increase and the cornering force to enter the saturation region. At higher lateral acceleration, the rear tire slip angle can increase more rapidly, and beyond a certain point it may exceed that of the front, leading the vehicle to exhibit oversteer and reduced stability. This condition, in which the steering characteristic changes with lateral acceleration, is referred to as reverse steering.
          </p>
          <p lang="zh">
            此类车辆做定常圆周行驶时，横向加速度较低时前轮侧偏角更大，表现为不足转向。随着横向加速度增大，轮胎必须产生更大的力来平衡，侧偏角增大并进入侧偏力饱和区。到一定横向加速度后，后轮侧偏角反而更大，车辆转为过度转向，行驶表现变得不稳定。像这样随横向加速度而转向特性反转的现象，有时称为反向转向。
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
