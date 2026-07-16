import i1mOIDSbbjeEU8E from "../../assets/images/i1mOIDSbbjeEU8E.webp";
import i1pbfDMrKDhzEb from "../../assets/images/i1pbfDMrKDhzEb.webp";
import i1ymmMcoJkrNxuH from "../../assets/images/i1ymmMcoJkrNxuH.webp";

const BoostingBrakePowerAndAvoidingBrakeFade = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Boosting Brake Power and Avoiding Brake Fade / 提升制动力与避免热衰退</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            A tuned engine with higher speed potential requires a braking system with greater stopping power and resistance to fade. At a basic level, braking can be improved by upgrading the pads, while more extensive changes may involve replacing major components or the entire system with higher-performance parts. However, racing brake systems are not always suited to all applications, so components should be selected to match the vehicle and its use. Larger brake discs and calipers can also increase unsprung weight, which may affect handling. The key is to ensure braking performance is well matched to engine output, without upsetting overall balance.
          </p>
          <p lang="zh">
            发动机提速后，需要更强制动力与抗热衰退能力。基础可换刹车片，终极可换整套竞技制动系统；竞技件未必适合所有用途，需按目标选材，并注意与轮圈、轮毂的匹配。
          </p>
        </div>

        <h3>
          Brake Pads / 刹车片
        </h3>

        <div className="bilingual">
          <p lang="en">
            The most basic components to consider when tuning the brakes are the brake pads, which largely determine braking performance and resistance to fade. A wide range of pads is available, from street-focused compounds to high-performance motorsport types. Each operates best within a specific temperature range and offers different levels of heat resistance. Choosing the wrong compound can reduce effectiveness and negatively affect drivability. Higher-performance pads also tend to wear more quickly and can increase brake disc wear due to higher friction. As a general rule, brake pads should be replaced as a complete set to maintain consistent braking performance.
          </p>
          <p lang="zh">
            制动调校最基础的部件，决定制动力与抗衰退；从街道到竞技选择很多，工作温度区间与耐温不同，选错会适得其反；磨损快、对盘攻击性高，通常前后成套更换以保平衡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ymmMcoJkrNxuH} />
        </p>

        <h3>
          Brake Fluid / 制动液
        </h3>

        <div className="bilingual">
          <p lang="en">
            Brake fluid is the hydraulic medium used in braking systems. It is formulated with a high boiling point, typically above 200°C, to prevent vapor lock. However, it is also hygroscopic, meaning it absorbs moisture over time and gradually degrades. Brake fluids are classified by DOT ratings, with higher grades generally offering higher boiling points. At the same time, they can absorb moisture more readily, which lowers the effective boiling point with use. For this reason, high-performance fluids require regular replacement. It should also be noted that braking performance itself does not increase with a higher DOT rating.
          </p>
          <p lang="zh">
            液压制动的工作液；赛车用沸点常在 200℃ 以上以防气阻，但吸湿性强、易劣化。DOT 等级越高沸点越高，也更易吸湿（沸点下降）；DOT5 等需短周期更换。提高 DOT 不直接等于更大制动力。
          </p>
        </div>

        <h3>
          Brake Hoses / 制动软管
        </h3>

        <div className="bilingual">
          <p lang="en">
            Brake hoses carry fluid between the master cylinder and the brakes. Standard hoses are typically made from rubber, and under heavy braking they can expand slightly, reducing pedal feel and response. This can be improved by using stainless steel braided hoses, which use a PTFE (Teflon) inner line with a steel mesh outer layer to resist expansion. They retain flexibility while providing a firmer, more consistent pedal feel. Such hoses are commonly used in performance and racing applications.
          </p>
          <p lang="zh">
            原装橡胶管在重刹时会微胀，踏板感发虚；不锈钢编织包覆的特氟龙管在保持柔韧的同时抑制膨胀，竞技车常见，踏板更直接。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1pbfDMrKDhzEb} />
        </p>

        <h3>
          Brake Discs / 制动盘
        </h3>

        <div className="bilingual">
          <p lang="en">
            One of the most effective ways to improve braking performance is to increase braking capacity. This is often achieved by using larger diameter discs, which provide greater leverage and heat capacity. However, larger cast-iron discs can increase unsprung weight, which may affect handling. To address this, lightweight materials such as carbon-ceramic are used in high-performance applications. As brake discs wear with use, they must be inspected and, when necessary, replaced or resurfaced to maintain performance.
          </p>
          <p lang="zh">
            提高制动能力最有效之一是增大容量，即加大盘径以产生更大摩擦热；但铸铁大盘增加非簧载质量。近年有陶瓷、碳等轻质盘；盘为消耗件，需定期更换或研磨。
          </p>
        </div>

        <h3>
          Calipers / 卡钳
        </h3>

        <div className="bilingual">
          <p lang="en">
            Upgrading brake calipers often involves replacing major components of the braking system. Standard calipers typically use a sliding design, applying force from one side, while opposed-piston calipers apply pressure from both sides of the disc. Some production cars now use multi-piston calipers, which distribute pressure more evenly across the pads and improve braking consistency. Opposed-piston calipers are often built with rigid monoblock construction, helping maintain stable performance under heavy braking.
          </p>
          <p lang="zh">
            常通过升级整套系统实现；量产浮动式单侧推片，竞技多换对向多活塞，使片压更均匀、制动力更强；活塞数越多面压越匀，六活塞在量产性能车上已常见。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1mOIDSbbjeEU8E} />
        </p>
      </div>
    </div>
  </>
);

export default BoostingBrakePowerAndAvoidingBrakeFade;
